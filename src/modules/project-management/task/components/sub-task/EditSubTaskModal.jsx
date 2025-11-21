



"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSubTask } from "@/modules/project-management/task/slices/subTaskSlice";
import { Edit, User, Flag, Info, X, Loader, CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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

const EditSubtaskModal = ({ open, setOpen, subtask, taskId, projectId, onSubtaskEdit }) => {
  const dispatch = useDispatch();
  
  
  const { currentTask } = useSelector((state) => state.task);
  const { loading: subTaskLoading, error: subTaskError } = useSelector((state) => state.subTask);

  const resolvedProjectId = projectId || currentTask?.projectId || subtask?.projectId || "";

  const assigneesList = useMemo(() => {
    if (!currentTask?.assignedTo) return [];
    return Array.isArray(currentTask.assignedTo) ? currentTask.assignedTo : [currentTask.assignedTo];
  }, [currentTask?.assignedTo]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    projectId: resolvedProjectId,
  });

  const [selectedAssignee, setSelectedAssignee] = useState(null); // { memberId, memberName, role }
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize form when modal opens
  useEffect(() => {
    if (open && subtask) {
      setFormData({
        title: subtask.title || "",
        description: subtask.description || "",
        priority: subtask.priority || "Medium",
        projectId: resolvedProjectId,
      });

      // Safe assignee handling (supports both object and string)
      let assigneeObj = {};
      if (subtask.assignedTo && typeof subtask.assignedTo === "object") {
        assigneeObj = subtask.assignedTo;
      } else {
        assigneeObj = {
          memberId: subtask.assignedTo || subtask.memberId,
          memberName: subtask.assignedToName || subtask.memberName,
          role: subtask.memberRole || "Member",
        };
      }

      setSelectedAssignee({
        memberId: assigneeObj.memberId || assigneeObj._id || subtask.memberId,
        memberName: assigneeObj.memberName || subtask.assignedToName || subtask.memberName || "Unknown",
        role: assigneeObj.role || subtask.memberRole || "Member",
      });

      // Deadline
      if (subtask.deadline) {
        setSelectedDateTime(new Date(subtask.deadline));
      } else {
        setSelectedDateTime(null);
      }

      setErrors({});
      setSearchQuery("");
    }
  }, [open, subtask, resolvedProjectId]);

  const filteredMembers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return assigneesList
      .filter((m) => m.memberName?.toLowerCase().includes(q))
      .map((m) => ({
        memberId: m.memberId,
        memberName: m.memberName,
        role: m.role || "Member",
      }));
  }, [assigneesList, searchQuery]);

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();

      if (!formData.title.trim() || !formData.description.trim() || !selectedDateTime || !selectedAssignee?.memberId) {
        toast.error("Please fill all required fields");
        return;
      }

      const deadline = selectedDateTime.toISOString().slice(0, 16) + ":00";

      const subTaskData = {
        ...formData,
        deadline,
        assignedTo: {
          memberId: selectedAssignee.memberId,
          memberName: selectedAssignee.memberName,
          role: selectedAssignee.role,
        },
      };

      try {
        await dispatch(
          updateSubTask({
            taskId,
            subTaskId: subtask.subtask_id || subtask.id,
            subTaskData,
          })
        ).unwrap();

        toast.success("Subtask updated successfully");
        onSubtaskEdit?.();
        setOpen(false);
      } catch (err) {
        toast.error(subTaskError || "Failed to update subtask");
      }
    },
    [formData, selectedDateTime, selectedAssignee, taskId, subtask, dispatch, subTaskError, onSubtaskEdit, setOpen]
  );

  const displayDateTime = selectedDateTime
    ? format(selectedDateTime, "MMM dd, yyyy 'at' HH:mm")
    : "Select date & time";

  const isSaveEnabled = formData.title.trim() && formData.description.trim() && selectedDateTime && selectedAssignee?.memberId;

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Edit className="mr-2 h-4 w-4 text-blue-500" />
              Edit Subtask
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 rounded-full h-7 w-7">
                <X className="h-3 w-3" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Title */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Edit className="h-4 w-4 text-blue-500 mr-2" /> Subtask Title <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter subtask title..."
              />
              {errors.title && <p className="text-red-500 text-xs mt-1 flex items-center"><X className="h-3 w-3 mr-1" /> {errors.title}</p>}
            </div>

            {/* Priority & Deadline (Single Picker) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Flag className="h-4 w-4 text-blue-500 mr-2" /> Priority
                </label>
                <Select value={formData.priority} onValueChange={(v) => setFormData((prev) => ({ ...prev, priority: v }))}>
                  <SelectTrigger className="w-full h-10">
                    <SelectValue>
                      <span className={cn("px-2 py-1 rounded-full text-xs font-medium", priorityConfig[formData.priority]?.color)}>
                        {priorityConfig[formData.priority]?.badge}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(priorityConfig).map(([k, c]) => (
                      <SelectItem key={k} value={k}>
                        <span className={cn("px-2 py-1 rounded-full text-xs font-medium", c.color)}>{c.badge}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" /> Deadline <span className="text-red-500 ml-1">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-between h-10 text-sm", !selectedDateTime && "text-gray-500")}>
                      {displayDateTime}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Calendar mode="single" selected={selectedDateTime} onSelect={setSelectedDateTime} initialFocus className="rounded-lg" />
                    <div className="p-3 border-t flex items-center gap-2">
                      <input
                        type="time"
                        value={selectedDateTime ? format(selectedDateTime, "HH:mm") : ""}
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
                {errors.deadline && <p className="text-red-500 text-xs mt-1 flex items-center"><X className="h-3 w-3 mr-1" /> {errors.deadline}</p>}
              </div>
            </div>

            {/* Assignee */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 text-blue-500 mr-2" /> Assign To <span className="text-red-500 ml-1">*</span>
              </label>
              <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-12 text-sm">
                    {selectedAssignee ? (
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-teal-600 text-white text-xs">
                            {getInitials(selectedAssignee.memberName)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-medium">{selectedAssignee.memberName}</div>
                          <div className="text-xs text-gray-500">{selectedAssignee.role} </div>
                        </div>
                      </div>
                    ) : "Select team member..."}
                    <User className="h-4 w-4 text-gray-500 ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search members..." value={searchQuery} onValueChange={setSearchQuery} />
                    <CommandEmpty>No members found</CommandEmpty>
                    <CommandGroup className="max-h-64 overflow-auto">
                      {filteredMembers.map((m) => (
                        <CommandItem key={m.memberId} onSelect={() => { setSelectedAssignee(m); setSearchOpen(false); }}>
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarFallback className="text-xs bg-teal-600 text-white">
                              {getInitials(m.memberName)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{m.memberName}</div>
                            <div className="text-xs text-gray-500">{m.role} </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {selectedAssignee && (
                <Button type="button" variant="ghost" size="sm" onClick={() => setSelectedAssignee(null)} className="mt-2 text-red-600">
                  <X className="h-4 w-4 mr-1" /> Remove assignee
                </Button>
              )}
              {errors.assignedTo && <p className="text-red-500 text-xs mt-1 flex items-center"><X className="h-3 w-3 mr-1" /> {errors.assignedTo}</p>}
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Info className="h-4 w-4 text-blue-500 mr-2" /> Description <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="w-full h-40 sm:h-48 md:h-52 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter detailed subtask description..."
              />
              {errors.description && <p className="text-red-500 text-xs mt-1 flex items-center"><X className="h-3 w-3 mr-1" /> {errors.description}</p>}
            </div>

            {subTaskError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <X className="h-4 w-4 mr-2" /> {subTaskError}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!isSaveEnabled || subTaskLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
                {subTaskLoading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin mr-2" />
                    Updating...
                  </>
                ) : (
                  "Update Subtask"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditSubtaskModal;
