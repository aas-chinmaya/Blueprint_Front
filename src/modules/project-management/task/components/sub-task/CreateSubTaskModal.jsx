















// "use client";

// import { useState, useEffect, useMemo, useCallback, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createSubTask } from "@/modules/project-management/task/slices/subTaskSlice";
// import {
//   Plus,
//   User,
//   Flag,
//   Info,
//   X,
//   Loader,
//   CalendarIcon,
// } from "lucide-react";
// import { toast } from "sonner";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";

// const priorityConfig = {
//   Low: { color: "bg-emerald-100 text-emerald-800", badge: "Low" },
//   Medium: { color: "bg-amber-100 text-amber-800", badge: "Medium" },
//   High: { color: "bg-rose-100 text-rose-800", badge: "High" },
// };

// const getInitials = (name) => {
//   if (!name) return "??";
//   const parts = name.trim().split(" ").filter(Boolean);
//   if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
//   return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2);
// };

// const CreateSubtaskModal = ({ open, setOpen, taskId, projectId }) => {
//   const dispatch = useDispatch();
//   const { currentTask } = useSelector((state) => state.task);
//   const { loading: subTaskLoading, error: subTaskError } = useSelector(
//     (state) => state.subTask
//   );

//   // Track previous open value to detect real "open" transitions
//   const prevOpenRef = useRef(open);
//   const [internalOpen, setInternalOpen] = useState(false);

//   const resolvedProjectId = currentTask?.projectId || projectId || "";

//   const assigneesList = useMemo(() => {
//     if (!currentTask?.assignedTo) return [];
//     return Array.isArray(currentTask.assignedTo)
//       ? currentTask.assignedTo
//       : [currentTask.assignedTo];
//   }, [currentTask?.assignedTo]);

//   // Form states
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     priority: "Medium",
//     projectId: resolvedProjectId,
//   });

//   const [selectedAssignee, setSelectedAssignee] = useState(null);
//   const [selectedDateTime, setSelectedDateTime] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Reset form every time modal truly opens (false → true)
//   useEffect(() => {
//     const justOpened = open && !prevOpenRef.current;

//     if (justOpened) {
//       setFormData({
//         title: "",
//         description: "",
//         priority: "Medium",
//         projectId: resolvedProjectId,
//       });
//       setSelectedAssignee(null);
//       setSelectedDateTime(null);
//       setErrors({});
//       setSearchQuery("");
//       setSearchOpen(false);
//     }

//     setInternalOpen(open);
//     prevOpenRef.current = open;
//   }, [open, resolvedProjectId]);

//   const filteredMembers = useMemo(() => {
//     const q = searchQuery.toLowerCase();
//     return assigneesList
//       .filter((m) => m.memberName?.toLowerCase().includes(q))
//       .map((m) => ({
//         memberId: m.memberId || m.id,
//         memberName: m.memberName || m.name,
//         role: m.role || "Member",
//       }));
//   }, [assigneesList, searchQuery]);

//   const validate = useCallback(() => {
//     const newErrors = {};
//     if (!formData.title.trim()) newErrors.title = "Title is required";
//     if (!formData.description.trim())
//       newErrors.description = "Description is required";
//     if (!selectedDateTime) newErrors.deadline = "Deadline is required";
//     if (!selectedAssignee) newErrors.assignedTo = "Please assign a member";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }, [formData, selectedDateTime, selectedAssignee]);

//   const handleCreate = useCallback(
//     async (e) => {
//       e.preventDefault();
//       if (!validate()) {
//         toast.error("Please fill all required fields");
//         return;
//       }

//       const deadline = selectedDateTime
//         ? selectedDateTime.toISOString().slice(0, 16) + ":00"
//         : null;

//       const subTaskData = {
//         ...formData,
//         deadline,
//         task_id: taskId,
//         assignedTo: selectedAssignee
//           ? {
//               memberId: selectedAssignee.memberId,
//               memberName: selectedAssignee.memberName,
//               role: selectedAssignee.role,
//             }
//           : null,
//       };

//       try {
//         await dispatch(createSubTask({ taskId, subTaskData })).unwrap();
//         toast.success("Subtask created successfully");
//         setOpen(false); // Close modal
//       } catch (err) {
//         toast.error(subTaskError || "Failed to create subtask");
//       }
//     },
//     [
//       validate,
//       formData,
//       selectedDateTime,
//       selectedAssignee,
//       taskId,
//       dispatch,
//       subTaskError,
//       setOpen,
//     ]
//   );

//   const displayDateTime = selectedDateTime
//     ? format(selectedDateTime, "MMM dd, yyyy 'at' HH:mm")
//     : "Select date & time";

//   const isSaveEnabled =
//     formData.title.trim() &&
//     formData.description.trim() &&
//     selectedDateTime &&
//     selectedAssignee;

//   return (
//     <Dialog open={internalOpen} onOpenChange={setOpen}>
//       <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
//         <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
//           <div className="flex justify-between items-center">
//             <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
//               <Plus className="mr-2 h-4 w-4 text-blue-500" />
//               Add New Subtask
//             </DialogTitle>
//             <DialogClose asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-gray-500 hover:bg-gray-100 rounded-full h-7 w-7"
//               >
//                 <X className="h-3 w-3" />
//               </Button>
//             </DialogClose>
//           </div>
//         </DialogHeader>

//         <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
//           <form onSubmit={handleCreate} className="space-y-4">
//             {/* Title */}
//             <div className="w-full">
//               <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
//                 <Plus className="h-4 w-4 text-blue-500 mr-2" /> Subtask Title{" "}
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <Textarea
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData((prev) => ({ ...prev, title: e.target.value }))
//                 }
//                 className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
//                 placeholder="Enter subtask title..."
//               />
//               {errors.title && (
//                 <p className="text-red-500 text-xs mt-1 flex items-center">
//                   <X className="h-3 w-3 mr-1" /> {errors.title}
//                 </p>
//               )}
//             </div>

//             {/* Priority & Deadline */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
//                   <Flag className="h-4 w-4 text-blue-500 mr-2" /> Priority
//                 </label>
//                 <Select
//                   value={formData.priority}
//                   onValueChange={(v) =>
//                     setFormData((prev) => ({ ...prev, priority: v }))
//                   }
//                 >
//                   <SelectTrigger className="w-full h-10">
//                     <SelectValue>
//                       <span
//                         className={cn(
//                           "px-2 py-1 rounded-full text-xs font-medium",
//                           priorityConfig[formData.priority]?.color
//                         )}
//                       >
//                         {priorityConfig[formData.priority]?.badge}
//                       </span>
//                     </SelectValue>
//                   </SelectTrigger>
//                   <SelectContent>
//                     {Object.entries(priorityConfig).map(([key, config]) => (
//                       <SelectItem key={key} value={key}>
//                         <span
//                           className={cn(
//                             "px-2 py-1 rounded-full text-xs font-medium",
//                             config.color
//                           )}
//                         >
//                           {config.badge}
//                           </span>
//                         </SelectItem>
//                       ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
//                   <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" /> Deadline{" "}
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-between h-10 text-sm",
//                         !selectedDateTime && "text-gray-500"
//                       )}
//                     >
//                       {displayDateTime}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
//                     <Calendar
//                       mode="single"
//                       selected={selectedDateTime}
//                       onSelect={setSelectedDateTime}
//                       initialFocus
//                       className="rounded-lg"
//                     />
//                     <div className="p-3 border-t flex items-center gap-2">
//                       <input
//                         type="time"
//                         value={
//                           selectedDateTime
//                             ? format(selectedDateTime, "HH:mm")
//                             : ""
//                         }
//                         onChange={(e) => {
//                           if (selectedDateTime) {
//                             const [h, m] = e.target.value.split(":");
//                             const newDt = new Date(selectedDateTime);
//                             newDt.setHours(parseInt(h), parseInt(m));
//                             setSelectedDateTime(newDt);
//                           }
//                         }}
//                         className="h-10 border rounded px-3 text-sm w-full"
//                       />
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//                 {errors.deadline && (
//                   <p className="text-red-500 text-xs mt-1 flex items-center">
//                     <X className="h-3 w-3 mr-1" /> {errors.deadline}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Assignee */}
//             <div>
//               <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
//                 <User className="h-4 w-4 text-blue-500 mr-2" /> Assign To{" "}
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <Popover open={searchOpen} onOpenChange={setSearchOpen}>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-between h-12 text-sm"
//                   >
//                     {selectedAssignee ? (
//                       <div className="flex items-center gap-3">
//                         <Avatar className="h-8 w-8">
//                           <AvatarFallback className="bg-teal-600 text-white text-xs">
//                             {getInitials(selectedAssignee.memberName)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="text-left">
//                           <div className="font-medium">
//                             {selectedAssignee.memberName}
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {selectedAssignee.role}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       "Select team member..."
//                     )}
//                     <User className="h-4 w-4 text-gray-500 ml-auto" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-full p-0" align="start">
//                   <Command>
//                     <CommandInput
//                       placeholder="Search members..."
//                       value={searchQuery}
//                       onValueChange={setSearchQuery}
//                     />
//                     <CommandEmpty>No members found</CommandEmpty>
//                     <CommandGroup className="max-h-64 overflow-auto">
//                       {filteredMembers.map((m) => (
//                         <CommandItem
//                           key={m.memberId}
//                           onSelect={() => {
//                             setSelectedAssignee(m);
//                             setSearchOpen(false);
//                           }}
//                         >
//                           <Avatar className="h-8 w-8 mr-3">
//                             <AvatarFallback className="text-xs bg-teal-600 text-white">
//                               {getInitials(m.memberName)}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <div className="font-medium">{m.memberName}</div>
//                             <div className="text-xs text-gray-500">
//                               {m.role}
//                             </div>
//                           </div>
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>

//               {selectedAssignee && (
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedAssignee(null)}
//                   className="mt-2 text-red-600"
//                 >
//                   <X className="h-4 w-4 mr-1" /> Remove assignee
//                 </Button>
//               )}
//               {errors.assignedTo && (
//                 <p className="text-red-500 text-xs mt-1 flex items-center">
//                   <X className="h-3 w-3 mr-1" /> {errors.assignedTo}
//                 </p>
//               )}
//             </div>

//             {/* Description */}
//             <div className="w-full">
//               <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
//                 <Info className="h-4 w-4 text-blue-500 mr-2" /> Description{" "}
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <Textarea
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     description: e.target.value,
//                   }))
//                 }
//                 className="w-full h-40 sm:h-48 md:h-52 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
//                 placeholder="Enter detailed subtask description..."
//               />
//               {errors.description && (
//                 <p className="text-red-500 text-xs mt-1 flex items-center">
//                   <X className="h-3 w-3 mr-1" /> {errors.description}
//                 </p>
//               )}
//             </div>

//             {subTaskError && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-3">
//                 <p className="text-red-600 text-sm flex items-center">
//                   <X className="h-4 w-4 mr-2" /> {subTaskError}
//                 </p>
//               </div>
//             )}

//             <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
//               <Button type="button" variant="outline" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 disabled={!isSaveEnabled || subTaskLoading}
//                 className="bg-blue-600 hover:bg-blue-700 text-white"
//               >
//                 {subTaskLoading ? (
//                   <>
//                     <Loader className="mr-2 h-4 w-4 animate-spin" />
//                     Creating...
//                   </>
//                 ) : (
//                   "Create Subtask"
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CreateSubtaskModal;


"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubTask } from "@/modules/project-management/task/slices/subTaskSlice";
import {
  Plus,
  User,
  Flag,
  Info,
  X,
  Loader,
  CalendarIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const priorityConfig = {
  Low: { color: "bg-emerald-100 text-emerald-800", badge: "Low" },
  Medium: { color: "bg-amber-100 text-amber-800", badge: "Medium" },
  High: { color: "bg-rose-100 text-rose-800", badge: "High" },
};

const getInitials = (name) => {
  if (!name) return "??";
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2);
};

const CreateSubtaskModal = ({ open, setOpen, taskId, projectId }) => {
  const dispatch = useDispatch();
  const { currentTask } = useSelector((state) => state.task);
  const { currentUser } = useCurrentUser(); // Your custom hook
  const { loading: subTaskLoading, error: subTaskError } = useSelector(
    (state) => state.subTask
  );

  const prevOpenRef = useRef(open);

  const resolvedProjectId = currentTask?.projectId || projectId || "";

  const assigneesList = useMemo(() => {
    if (!currentTask?.assignedTo) return [];
    return Array.isArray(currentTask.assignedTo)
      ? currentTask.assignedTo
      : [currentTask.assignedTo];
  }, [currentTask?.assignedTo]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    projectId: resolvedProjectId,
  });

  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    const justOpened = open && !prevOpenRef.current;

    if (justOpened) {
      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        projectId: resolvedProjectId,
      });
      setSelectedAssignee(null);
      setSelectedDateTime(null);
      setErrors({});
      setSearchQuery("");
      setSearchOpen(false);
    }

    prevOpenRef.current = open;
  }, [open, resolvedProjectId]);

  const filteredMembers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return assigneesList
      .filter((m) => m?.memberName?.toLowerCase().includes(q))
      .map((m) => ({
        memberId: m.memberId || m._id || m.id,
        memberName: m.memberName || m.name || "Unknown Member",
        role: m.role || "Member",
      }));
  }, [assigneesList, searchQuery]);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!selectedDateTime) newErrors.deadline = "Deadline is required";
    if (!selectedAssignee) newErrors.assignedTo = "Please assign a member";

    setErrors(newErrors); // Fixed: was setErrors(newErrors(newErrors); ← syntax error!
    return Object.keys(newErrors).length === 0;
  }, [formData, selectedDateTime, selectedAssignee]);

  const handleCreate = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate()) {
        toast.error("Please fill all required fields");
        return;
      }

      if (!taskId) {
        toast.error("Task ID is missing");
        return;
      }

      const deadlineISO = selectedDateTime ? selectedDateTime.toISOString() : null;

      const subTaskData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        priority: formData.priority,
        projectId: resolvedProjectId,
        task_id: taskId,
        deadline: deadlineISO,
        assignedTo: {
          memberId: selectedAssignee.memberId,
          memberName: selectedAssignee.memberName,
          role: selectedAssignee.role,
        },
        // actionedBy is now properly sent
        actionedBy: {
          note: "Created subtask",
          performedBy: currentUser?.name || "Unknown User",
          timestamp: new Date().toISOString(),
        },
      };

      try {
        await dispatch(createSubTask({ taskId, subTaskData })).unwrap();
        toast.success("Subtask created successfully!");
        setOpen(false);
      } catch (err) {
        const msg = subTaskError || err?.message || "Failed to create subtask";
        toast.error(msg);
        console.error("Create subtask error:", err);
      }
    },
    [
      validate,
      formData,
      selectedDateTime,
      selectedAssignee,
      taskId,
      resolvedProjectId,
      currentUser,
      dispatch,
      subTaskError,
      setOpen,
    ]
  );

  const displayDateTime = selectedDateTime
    ? format(selectedDateTime, "MMM dd, yyyy 'at' HH:mm")
    : "Select date & time";

  const isSaveEnabled =
    formData.title.trim() &&
    formData.description.trim() &&
    selectedDateTime &&
    selectedAssignee;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Plus className="mr-2 h-4 w-4 text-blue-500" />
              Add New Subtask
            </DialogTitle>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:bg-gray-100 rounded-full h-7 w-7"
              >
                <X className="h-3 w-3" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
          <form onSubmit={handleCreate} className="space-y-4">
            {/* Title */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Plus className="h-4 w-4 text-blue-500 mr-2" /> Subtask Title{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter subtask title..."
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.title}
                </p>
              )}
            </div>

            {/* Priority & Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Flag className="h-4 w-4 text-blue-500 mr-2" /> Priority
                </label>
                <Select
                  value={formData.priority}
                  onValueChange={(v) =>
                    setFormData((prev) => ({ ...prev, priority: v }))
                  }
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          priorityConfig[formData.priority]?.color
                        )}
                      >
                        {priorityConfig[formData.priority]?.badge}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(priorityConfig).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            config.color
                          )}
                        >
                          {config.badge}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                 <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" /> Deadline    <span className="text-red-500 ml-1">*</span>
                </label>
               
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between h-10 text-sm",
                        !selectedDateTime && "text-gray-500"
                      )}
                    >
                      {displayDateTime}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Calendar
                      mode="single"
                      selected={selectedDateTime}
                      onSelect={setSelectedDateTime}
                      initialFocus
                      className="rounded-lg"
                    />
                    <div className="p-3 border-t flex items-center gap-2">
                      <input
                        type="time"
                        value={
                          selectedDateTime
                            ? format(selectedDateTime, "HH:mm")
                            : ""
                        }
                        onChange={(e) => {
                          if (selectedDateTime) {
                            const [h, m] = e.target.value.split(":");
                            const newDt = new Date(selectedDateTime);
                            newDt.setHours(parseInt(h), parseInt(m));
                            setSelectedDateTime(newDt);
                          }
                        }}
                        className="h-10 border rounded px-3 text-sm w-full"
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                {errors.deadline && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {errors.deadline}
                  </p>
                )}
              </div>
            </div>

            {/* Assignee */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 text-blue-500 mr-2" /> Assign To{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between h-12 text-sm"
                  >
                    {selectedAssignee ? (
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-teal-600 text-white text-xs">
                            {getInitials(selectedAssignee.memberName)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-medium">
                            {selectedAssignee.memberName}
                          </div>
                          <div className="text-xs text-gray-500">
                            {selectedAssignee.role}
                          </div>
                        </div>
                      </div>
                    ) : (
                      "Select team member..."
                    )}
                    <User className="h-4 w-4 text-gray-500 ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder="Search members..."
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                    />
                    <CommandEmpty>No members found</CommandEmpty>
                    <CommandGroup className="max-h-64 overflow-auto">
                      {filteredMembers.map((m) => (
                        <CommandItem
                          key={m.memberId}
                          onSelect={() => {
                            setSelectedAssignee(m);
                            setSearchOpen(false);
                          }}
                        >
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarFallback className="text-xs bg-teal-600 text-white">
                              {getInitials(m.memberName)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{m.memberName}</div>
                            <div className="text-xs text-gray-500">
                              {m.role}
                            </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              {selectedAssignee && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedAssignee(null)}
                  className="mt-2 text-red-600"
                >
                  <X className="h-4 w-4 mr-1" /> Remove assignee
                </Button>
              )}
              {errors.assignedTo && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.assignedTo}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Info className="h-4 w-4 text-blue-500 mr-2" /> Description{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full h-40 sm:h-48 md:h-52 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter detailed subtask description..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.description}
                </p>
              )}
            </div>

            {/* Server Error */}
            {subTaskError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <X className="h-4 w-4 mr-2" /> {subTaskError}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isSaveEnabled || subTaskLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {subTaskLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Subtask"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSubtaskModal;