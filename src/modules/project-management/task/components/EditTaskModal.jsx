"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, fetchTaskById } from "@/modules/project-management/task/slices/taskSlice";
import { fetchTeamByProjectId } from "@/modules/project-management/team/slices/teamSlice";
import { Edit, User, Flag, CalendarIcon, Info, X, Loader, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const priorityConfig = {
  Low: { color: "bg-emerald-100 text-emerald-800", badge: "Low" },
  Medium: { color: "bg-amber-100 text-amber-800", badge: "Medium" },
  High: { color: "bg-rose-100 text-rose-800", badge: "High" },
};

const EditTaskModal = ({ taskId, isOpen, onClose, onTaskUpdated }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.currentTask);
  const { teamsByProject: teams } = useSelector((state) => state.team);
  const { status: taskStatus, error: taskError } = useSelector((state) => state.task);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: null,
    teamId: "",
    assignedTo: [],
  });

  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberOpen, setMemberOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch task + team
  useEffect(() => {
    if (isOpen && taskId) {
      dispatch(fetchTaskById(taskId));
      if (task?.projectId) {
        dispatch(fetchTeamByProjectId(task.projectId));
      }
    }
  }, [isOpen, taskId, dispatch]);

  // Pre-fill form when task loads
  useEffect(() => {
    if (!task || !isOpen) return;

    const deadlineDate = task.deadline ? new Date(task.deadline) : null;

    setFormData({
      title: task.title || "",
      description: task.description || "",
      priority: task.priority || "Medium",
      deadline: deadlineDate,
      teamId: task.teamId || "",
    });

    setSelectedDate(deadlineDate);
    if (deadlineDate) {
      setSelectedTime(format(deadlineDate, "HH:mm"));
    }

    // Handle both old single assignee & new array format
    const assignees = Array.isArray(task.assignedTo)
      ? task.assignedTo.map(a => ({
          memberId: a.memberId || a._id,
          memberName: a.memberName,
          role: a.role || "Member",
        }))
      : task.assignedToDetails
      ? [{
          memberId: task.assignedToDetails.memberId,
          memberName: task.assignedToDetails.memberName,
          role: task.assignedToDetails.role || "Member",
        }]
      : [];

    setSelectedAssignees(assignees);

    const team = teams.find(t => t.teamId === task.teamId);
    setSelectedTeam(team || null);
  }, [task, teams, isOpen]);

  const handleTeamSelect = useCallback((value) => {
    const team = teams.find(t => t.teamId === value);
    setSelectedTeam(team);
    setSelectedAssignees([]);
  }, [teams]);

  const availableMembers = useMemo(() => {
    if (!selectedTeam?.teamMembers) return [];
    const q = memberSearchQuery.toLowerCase();
    return selectedTeam.teamMembers
      .filter(m =>
        m.memberName.toLowerCase().includes(q) &&
        !selectedAssignees.some(a => a.memberId === m.memberId)
      )
      .map(m => ({
        memberId: m.memberId,
        memberName: m.memberName,
        role: m.role || "Member",
      }));
  }, [selectedTeam, memberSearchQuery, selectedAssignees]);

  const toggleAssignee = useCallback((member) => {
    setSelectedAssignees(prev => {
      const exists = prev.some(a => a.memberId === member.memberId);
      const newList = exists
        ? prev.filter(a => a.memberId !== member.memberId)
        : [...prev, member];
      return newList;
    });
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.priority) newErrors.priority = "Priority is required";
    if (!selectedDate) newErrors.deadline = "Deadline is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!selectedTeam) newErrors.team = "Team selection is required";
    if (selectedAssignees.length === 0) newErrors.assignedTo = "Assign at least one member";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, selectedDate, selectedTeam, selectedAssignees]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }

    const pad = (n) => (n < 10 ? "0" + n : n);
    let deadline = null;
    if (selectedDate) {
      const d = new Date(selectedDate);
      const [h, m] = selectedTime ? selectedTime.split(":").map(Number) : [23, 59];
      d.setHours(h, m, 0, 0);
      deadline = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
    }

    const payload = {
      task_id: taskId,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      deadline,
      teamId: selectedTeam.teamId,
      assignedTo: selectedAssignees,
    };

    try {
      await dispatch(updateTask(payload)).unwrap();
      toast.success("Task updated successfully!");
      onTaskUpdated?.();
      onClose();
    } catch (err) {
      toast.error(taskError || "Failed to update task");
    }
  };

  const displayDeadline = selectedDate
    ? `${format(selectedDate, "MMM dd, yyyy")}${selectedTime ? ` • ${selectedTime}` : ""}`
    : "No deadline";

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Edit className="mr-2 h-4 w-4 text-blue-500" />
              Edit Task
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 rounded-full h-7 w-7">
                <X className="h-3 w-3" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Title */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Edit className="h-4 w-4 text-blue-500 mr-2" /> Task Title <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter task title..."
              />
              {errors.title && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" /> {errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Priority */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Flag className="h-4 w-4 text-blue-500 mr-2" /> Priority <span className="text-red-500 ml-1">*</span>
                </label>
                <Select value={formData.priority} onValueChange={(v) => setFormData(prev => ({ ...prev, priority: v }))}>
                  <SelectTrigger className="w-full h-10 rounded-lg">
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

              {/* Deadline */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" /> Deadline <span className="text-red-500 ml-1">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start h-10 rounded-lg", !selectedDate && "text-gray-500")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {displayDeadline}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                    <div className="p-3 border-t flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <Input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="h-9" />
                    </div>
                  </PopoverContent>
                </Popover>
                {errors.deadline && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" /> {errors.deadline}</p>}
              </div>

              {/* Team */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 text-blue-500 mr-2" /> Team <span className="text-red-500 ml-1">*</span>
                </label>
                <Select value={selectedTeam?.teamId || ""} onValueChange={handleTeamSelect}>
                  <SelectTrigger className="w-full h-10 rounded-lg">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((team) => (
                      <SelectItem key={team.teamId} value={team.teamId}>{team.teamName}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Assignees */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 text-blue-500 mr-2" /> Assigned To <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-3 min-h-12 p-3 border rounded-lg bg-gray-50">
                <TooltipProvider>
                  {selectedAssignees.map((person) => (
                    <Tooltip key={person.memberId}>
                      <TooltipTrigger asChild>
                        <div className="relative group">
                          <Avatar className="h-10 w-10 ring-2 ring-white">
                            <AvatarFallback className="bg-teal-600 text-white text-sm">
                              {person.memberName.split(" ").map(n => n[0]).join("").toUpperCase()}
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
                          "flex items-center justify-center w-10 h-10 rounded-full transition-all",
                          selectedAssignees.length === 0
                            ? "bg-gray-200 hover:bg-gray-300"
                            : "bg-gray-100 hover:bg-gray-200 border-2 border-dashed border-gray-300"
                        )}
                      >
                        <User className="h-5 w-5 text-gray-500" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0">
                      <Command>
                        <CommandInput placeholder="Search members..." value={memberSearchQuery} onValueChange={setMemberSearchQuery} />
                        <CommandEmpty>No members found.</CommandEmpty>
                        <CommandGroup className="max-h-64 overflow-auto">
                          {availableMembers.map((member) => (
                            <CommandItem key={member.memberId} onSelect={() => toggleAssignee(member)} className="cursor-pointer">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarFallback className="text-xs">
                                  {member.memberName.split(" ").map(n => n[0]).join("").toUpperCase()}
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
              </div>
              {errors.assignedTo && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" /> {errors.assignedTo}</p>}
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Info className="h-4 w-4 text-blue-500 mr-2" /> Description <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full h-40 sm:h-48 md:h-52 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter detailed task description..."
              />
              {errors.description && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" /> {errors.description}</p>}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={taskStatus === "loading"}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {taskStatus === "loading" ? (
                  <> <Loader className="h-4 w-4 animate-spin mr-2" /> Updating...</>
                ) : (
                  "Update Task"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskModal;