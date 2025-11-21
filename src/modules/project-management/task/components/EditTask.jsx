

// 'use client';

// import { useState, useEffect, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useRouter } from 'next/navigation';
// import { fetchTaskById, updateTask } from '@/modules/project-management/task/slices/taskSlice';
// import { fetchTeamByProjectId } from '@/modules/project-management/team/slices/teamSlice';
// import { ArrowLeft, FileText, User, Flag, Calendar as CalendarIcon } from 'lucide-react';
// import { toast } from 'sonner';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { format } from 'date-fns';
// import { cn } from '@/lib/utils';
// import { Calendar } from '@/components/ui/calendar'; // Ensure this is imported

// const EditTask = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const params = useParams();
//   const task_id = params.id;
//   const task = useSelector((state) => state.task.currentTask);
//   const { teamsByProject: teams } = useSelector((state) => state.team);
//   const loading = useSelector((state) => state.task.status === 'loading');
//   const error = useSelector((state) => state.task.error);

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     assignedTo: '',
//     assignedBy: '',
//     priority: 'Low',
//     deadline: '',
//     projectId: '',
//     teamId: '',
//     memberId: '',
//   });
//   const [selectedTeam, setSelectedTeam] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [memberSearchQuery, setMemberSearchQuery] = useState('');
//   const [memberOpen, setMemberOpen] = useState(false);

//   useEffect(() => {
//     if (task_id) {
//       dispatch(fetchTaskById(task_id));
//       if (task?.projectId) {
//         dispatch(fetchTeamByProjectId(task.projectId));
//       }
//     }
//   }, [dispatch, task_id, task?.projectId]);

//   useEffect(() => {
//     if (task) {
//       console.log('Task data:', task); // Debug task data
//       const formattedDeadline = task.deadline && !isNaN(new Date(task.deadline).getTime())
//         ? new Date(task.deadline)
//         : null;
//       setFormData({
//         title: task.title || '',
//         description: task.description || '',
//         assignedTo: task.memberId || '', // Use memberId
//         assignedBy: task.assignedBy || '',
//         priority: task.priority || 'Low',
//         deadline: formattedDeadline ? format(formattedDeadline, 'yyyy-MM-dd') : '',
//         projectId: task.projectId || '',
//         teamId: task.teamId || '',
//         memberId: task.memberId || '',
//       });
//       setSelectedDate(formattedDeadline);
//       const team = teams.find((t) => t.teamId === task.teamId);
//       setSelectedTeam(team || null);
//     }
//   }, [task, teams]);

//   const teamOptions = useMemo(() => {
//     return teams.map((team) => ({
//       value: team.teamId,
//       label: team.teamName,
//     }));
//   }, [teams]);

//   const teamMemberOptions = useMemo(() => {
//     if (!selectedTeam?.teamMembers || !Array.isArray(selectedTeam.teamMembers)) {
//       return [];
//     }
//     const query = memberSearchQuery.toLowerCase();
//     return selectedTeam.teamMembers
//       .filter((member) => member.memberName.toLowerCase().includes(query))
//       .map((member) => ({
//         value: member.memberId,
//         label: member.memberName, // Only the name
//         memberId: member.memberId,
//       }));
//   }, [selectedTeam, memberSearchQuery]);

//   useEffect(() => {
//     if (!selectedTeam && task?.assignedTo) {
//       setFormData((prev) => ({
//         ...prev,
//         assignedTo: task.memberId || '',
//       }));
//     }
//   }, [selectedTeam, task]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleMemberSelect = (value) => {
//     const member = teamMemberOptions.find((opt) => opt.value === value);
//     handleSelectChange('assignedTo', value);
//     handleSelectChange('memberId', member?.memberId || '');
//     setMemberOpen(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!task_id) {
//         toast.info('No task ID found');
//         return;
//       }

//       const updatedTask = {
//         ...formData,
//         task_id: task_id,
//         deadline: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
//         projectId: selectedTeam?.projectId || formData.projectId,
//         teamId: selectedTeam?.teamId || formData.teamId,
//         memberId: formData.assignedTo,
//       };

//       await dispatch(updateTask(updatedTask)).unwrap();
//       toast.success('Task updated successfully');
//       router.back();
//     } catch (error) {
//       toast.error('Error while updating task');
//     }
//   };

//   return (
//     <div className="min-h-screen shadow-xl rounded-2xl overflow-hidden border border-slate-200">
//       <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
//         <CardHeader className="">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-3">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => router.back()}
//                 className="border-gray-300 hover:bg-primary/10 transition-colors"
//               >
//                 <ArrowLeft className="h-5 w-5 mr-2" />
//                 <span className="hidden sm:inline">Back</span>
//               </Button>
//               <CardTitle className="text-2xl font-bold text-primary">Edit Task</CardTitle>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent className="p-6">
//           <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//             {/* Title full width */}
//             <div className="space-y-2">
//               <Label htmlFor="title" className="flex items-center gap-2 text-primary font-medium">
//                 <FileText className="h-4 w-4" /> Task Title
//               </Label>
//               <Input
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full border-gray-300 focus:ring-primary focus:border-primary rounded-md"
//                 required
//               />
//             </div>
//             {/* Row: Assigned By, Priority, Deadline */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="space-y-2">
//                 <Label className="flex items-center gap-2 text-primary font-medium">
//                   <User className="h-4 w-4" /> Assigned By
//                 </Label>
//                 <div className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-sm text-gray-700">
//                   {formData.assignedBy}
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="priority" className="flex items-center gap-2 text-primary font-medium">
//                   <Flag className="h-4 w-4" /> Priority
//                 </Label>
//                 <Select
//                   name="priority"
//                   value={formData.priority}
//                   onValueChange={(value) => handleSelectChange('priority', value)}
//                 >
//                   <SelectTrigger className="w-full border-gray-300 focus:ring-primary focus:border-primary rounded-md">
//                     <SelectValue placeholder="Select priority" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-gray-300">
//                     <SelectItem value="Low">Low</SelectItem>
//                     <SelectItem value="Medium">Medium</SelectItem>
//                     <SelectItem value="High">High</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="deadline" className="flex items-center gap-2 text-primary font-medium">
//                   <CalendarIcon className="h-4 w-4" /> Deadline
//                 </Label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-between border-gray-300 focus:ring-primary focus:border-primary rounded-md",
//                         !selectedDate && "text-muted-foreground"
//                       )}
//                       onClick={() => console.log('PopoverTrigger clicked')}
//                     >
//                       {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={(date) => {
//                         console.log('Date selected:', date);
//                         setSelectedDate(date);
//                         handleSelectChange('deadline', date ? format(date, 'yyyy-MM-dd') : '');
//                       }}
//                       className="rounded-md border-gray-300"
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//             {/* Row: Team, Assigned To */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="teamId" className="flex items-center gap-2 text-primary font-medium">
//                   <User className="h-4 w-4" /> Team
//                 </Label>
//                 <Select
//                   value={selectedTeam?.teamId || formData.teamId}
//                   onValueChange={(value) => {
//                     const team = teams.find((t) => t.teamId === value);
//                     setSelectedTeam(team);
//                     handleSelectChange('teamId', value);
//                     handleSelectChange('assignedTo', '');
//                     handleSelectChange('memberId', '');
//                   }}
//                 >
//                   <SelectTrigger className="w-full border-gray-300 focus:ring-primary focus:border-primary rounded-md">
//                     <SelectValue placeholder="Select team" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-gray-300">
//                     {teamOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="assignedTo" className="flex items-center gap-2 text-primary font-medium">
//                   <User className="h-4 w-4" /> Assigned To
//                 </Label>
//                 <Popover open={memberOpen} onOpenChange={setMemberOpen}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="w-full justify-between border-gray-300 focus:ring-primary focus:border-primary rounded-md"
//                       disabled={!selectedTeam}
//                       onClick={() => setMemberOpen(true)}
//                     >
//                       {formData.assignedTo
//                         ? teamMemberOptions.find((opt) => opt.value === formData.assignedTo)?.label ||
//                           task?.assignedTo?.split('(')[0].trim() ||
//                           'Select team member'
//                         : 'Select team member'}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0">
//                     <Command>
//                       <CommandInput
//                         placeholder="Search team members..."
//                         value={memberSearchQuery}
//                         onValueChange={setMemberSearchQuery}
//                         className="h-10"
//                       />
//                       <CommandEmpty>No members found.</CommandEmpty>
//                       <CommandGroup>
//                         {teamMemberOptions.map((option) => (
//                           <CommandItem
//                             key={option.value}
//                             value={option.value}
//                             onSelect={() => handleMemberSelect(option.value)}
//                             className={cn(
//                               "cursor-pointer",
//                               formData.assignedTo === option.value ? 'bg-blue-100 text-blue-800' : ''
//                             )}
//                           >
//                             {option.label}
//                           </CommandItem>
//                         ))}
//                       </CommandGroup>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//             {/* Description full width with min-h-[80vh] */}
//             <div className="space-y-2">
//               <Label htmlFor="description" className="flex items-center gap-2 text-primary font-medium">
//                 <FileText className="h-4 w-4" /> Description
//               </Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full border-gray-300 focus:ring-primary focus:border-primary min-h-[80vh] resize-y rounded-md"
//                 required
//               />
//             </div>
//             {/* Buttons at bottom */}
//             <div className="flex justify-end gap-4 pt-4">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => router.back()}
//                 className="w-full md:w-auto border-gray-300 hover:bg-gray-100 rounded-md"
//               >
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 className="w-full md:w-auto bg-blue-700 rounded-md"
//                 disabled={loading}
//               >
//                 Update Task
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EditTask;
















"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import {
  fetchTaskById,
  updateTask,
} from "@/modules/project-management/task/slices/taskSlice";
import {
  fetchTeamByProjectId,
} from "@/modules/project-management/team/slices/teamSlice";
import {
  ArrowLeft,
  FileText,
  User,
  Flag,
  CalendarIcon,
  X,
  Loader,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const priorityConfig = {
  Low: { color: "bg-emerald-100 text-emerald-800", badge: "Low" },
  Medium: { color: "bg-amber-100 text-amber-800", badge: "Medium" },
  High: { color: "bg-rose-100 text-rose-800", badge: "High" },
};

const getInitials = (name) => {
  if (!name) return "??";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const EditTask = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id: task_id } = useParams();

  const task = useSelector((state) => state.task.currentTask);
  const { teamsByProject: teams } = useSelector((state) => state.team);
  const loading = useSelector((state) => state.task.status === "loading");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: null,
  });

  const [selectedAssignees, setSelectedAssignees] = useState([]); // UI + payload
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberOpen, setMemberOpen] = useState(false);

  // Fetch task + team
  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id]);

  useEffect(() => {
    if (task?.projectId) {
      dispatch(fetchTeamByProjectId(task.projectId));
    }
  }, [dispatch, task?.projectId]);

  // Pre-fill form when task loads
  useEffect(() => {
    if (!task) return;

    const deadlineDate = task.deadline
      ? new Date(task.deadline)
      : null;

    setFormData({
      title: task.title || "",
      description: task.description || "",
      priority: task.priority || "Medium",
      deadline: deadlineDate,
    });

    setSelectedDate(deadlineDate);

    // Pre-fill assignees (support both old single & new array format)
    const assignees = Array.isArray(task.assignedTo)
      ? task.assignedTo
      : task.memberId
      ? [{
          memberId: task.memberId,
          memberName: task.assignedTo || "Unknown",
          role: "Member",
        }]
      : [];

    setSelectedAssignees(assignees);

    // Pre-select team
    if (task.teamId && teams.length > 0) {
      const team = teams.find((t) => t.teamId === task.teamId);
      setSelectedTeam(team || null);
    }
  }, [task, teams]);

  const availableMembers = useMemo(() => {
    if (!selectedTeam?.teamMembers) return [];

    const q = memberSearchQuery.toLowerCase();
    return selectedTeam.teamMembers
      .filter(
        (m) =>
          m.memberName?.toLowerCase().includes(q) &&
          !selectedAssignees.some((a) => a.memberId === m.memberId)
      )
      .map((m) => ({
        memberId: m.memberId,
        memberName: m.memberName,
        role: m.role || "Member",
      }));
  }, [selectedTeam, memberSearchQuery, selectedAssignees]);

  const toggleAssignee = useCallback((member) => {
    setSelectedAssignees((prev) => {
      const exists = prev.some((a) => a.memberId === member.memberId);
      const newList = exists
        ? prev.filter((a) => a.memberId !== member.memberId)
        : [...prev, member];
      return newList;
    });
  }, []);

  const handleTeamChange = (teamId) => {
    const team = teams.find((t) => t.teamId === teamId);
    setSelectedTeam(team || null);
    setSelectedAssignees([]); // Clear assignees when team changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedAssignees.length === 0) {
      toast.error("Please assign at least one team member");
      return;
    }

    const payload = {
      task_id,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      deadline: selectedDate ? selectedDate.toISOString() : null,
      teamId: selectedTeam?.teamId,
      projectId: task.projectId,
      assignedTo: selectedAssignees, // Full array of assignee objects
    };

    try {
      await dispatch(updateTask(payload)).unwrap();
      toast.success("Task updated successfully!");
      router.back();
    } catch (err) {
      toast.error("Failed to update task");
    }
  };

  const displayDeadline = selectedDate
    ? format(selectedDate, "MMM dd, yyyy • HH:mm")
    : "No deadline";

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-5xl mx-auto border-none shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
              <CardTitle className="text-2xl font-bold">Edit Task</CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <FileText className="h-4 w-4" /> Task Title
              </Label>
              <Textarea
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-2 h-28 resize-none"
                placeholder="Task title..."
                required
              />
            </div>

            {/* Priority & Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="flex items-center gap-2 font-medium">
                  <Flag className="h-4 w-4" /> Priority
                </Label>
                <Select
                  value={formData.priority}
                  onValueChange={(v) => setFormData({ ...formData, priority: v })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue>
                      <span className={cn("px-3 py-1 rounded-full text-xs font-medium", priorityConfig[formData.priority]?.color)}>
                        {priorityConfig[formData.priority]?.badge}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(priorityConfig).map(([key, cfg]) => (
                      <SelectItem key={key} value={key}>
                        <span className={cn("px-3 py-1 rounded-full text-xs font-medium", cfg.color)}>
                          {cfg.badge}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="flex items-center gap-2 font-medium">
                  <CalendarIcon className="h-4 w-4" /> Deadline
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full mt-2 justify-start", !selectedDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {displayDeadline}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                    <div className="p-3 border-t">
                      <Input
                        type="time"
                        value={selectedDate ? format(selectedDate, "HH:mm") : ""}
                        onChange={(e) => {
                          if (selectedDate) {
                            const [h, m] = e.target.value.split(":");
                            const newDt = new Date(selectedDate);
                            newDt.setHours(h, m);
                            setSelectedDate(newDt);
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Team */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <User className="h-4 w-4" /> Team
              </Label>
              <Select
                value={selectedTeam?.teamId || ""}
                onValueChange={handleTeamChange}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((team) => (
                    <SelectItem key={team.teamId} value={team.teamId}>
                      {team.teamName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Multiple Assignees */}
            <div>
              <Label className="flex items-center gap-2 font-medium mb-3">
                <User className="h-4 w-4" /> Assigned To <span className="text-red-500">*</span>
              </Label>

              <div className="flex flex-wrap gap-3 items-center min-h-12 p-3 border rounded-lg bg-gray-50">
                <TooltipProvider>
                  {selectedAssignees.map((person) => (
                    <Tooltip key={person.memberId}>
                      <TooltipTrigger asChild>
                        <div className="relative group">
                          <Avatar className="h-10 w-10 ring-2 ring-white">
                            <AvatarFallback className="bg-teal-600 text-white text-sm">
                              {getInitials(person.memberName)}
                            </AvatarFallback>
                          </Avatar>
                          <button
                            type="button"
                            onClick={() => toggleAssignee(person)}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>{person.memberName}</div>
                        <div className="text-xs text-gray-500">{person.role}</div>
                      </TooltipContent>
                    </Tooltip>
                  ))}

                  <Popover open={memberOpen} onOpenChange={setMemberOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        disabled={!selectedTeam}
                        className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed",
                          selectedTeam ? "border-gray-400 hover:border-gray-600" : "border-gray-300"
                        )}
                      >
                        <User className="h-5 w-5 text-gray-500" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search members..."
                          value={memberSearchQuery}
                          onValueChange={setMemberSearchQuery}
                        />
                        <CommandEmpty>No members found.</CommandEmpty>
                        <CommandGroup className="max-h-64 overflow-auto">
                          {availableMembers.map((member) => (
                            <CommandItem
                              key={member.memberId}
                              onSelect={() => {
                                toggleAssignee(member);
                                setMemberOpen(false);
                              }}
                              className="cursor-pointer"
                            >
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarFallback className="text-xs">
                                  {getInitials(member.memberName)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{member.memberName}</div>
                                <div className="text-xs text-gray-500">{member.role}</div>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </TooltipProvider>

                {selectedAssignees.length === 0 && (
                  <span className="text-sm text-gray-500 ml-2">
                    {!selectedTeam ? "Select a team first" : "Click + to assign members"}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <Label className="flex items-center gap-2 font-medium">
                <FileText className="h-4 w-4" /> Description
              </Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-2 min-h-48 resize-y"
                placeholder="Task description..."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading || selectedAssignees.length === 0}>
                {loading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Task"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditTask;