


"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "@/modules/project-management/task/slices/taskSlice";
import { fetchTeamByProjectId } from "@/modules/project-management/team/slices/teamSlice";
import { Edit, User, Flag, CalendarIcon, Info, X, Loader, Clock } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const CreateTaskModal = ({ onTaskAssingn,projectId, project, onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { teamsByProject: teams, status: teamStatus } = useSelector((state) => state.team);
  const { status: taskStatus, error: taskError } = useSelector((state) => state.task);

  // Initial state
  const initialFormData = useMemo(
    () => ({
      title: "",
      description: "",
      assignedTo: "",
      assignedBy: "",
      priority: "Medium",
      projectId: projectId || "",
      projectName: project?.data?.name || "",
      teamId: "",
      memberId: "",
    }),
    [projectId, project?.data?.name]
  );

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberOpen, setMemberOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Fetch teams only once when component mounts and projectId is available
  useEffect(() => {
    if (projectId && !isInitialized) {
      dispatch(fetchTeamByProjectId(projectId));
      setIsInitialized(true);
    }
  }, [dispatch, projectId, isInitialized]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
      setErrors({});
      setSelectedTeam(null);
      setSelectedDate(null);
      setSelectedTime("");
      setMemberSearchQuery("");
      setMemberOpen(false);
    }
  }, [isOpen, initialFormData]);

  // Update form data when team changes
  const updateFormDataOnTeamChange = useCallback(
    (team) => {
      if (team) {
        setFormData((prev) => ({
          ...prev,
          assignedBy: team.teamLeadName,
          projectId: projectId || "",
          projectName: project?.data?.name || team.projectName || "",
          teamId: team.teamId || "",
          assignedTo: "",
          memberId: "",
        }));
        setMemberSearchQuery("");
      }
    },
    [projectId, project?.data?.name]
  );

  useEffect(() => {
    if (selectedTeam) {
      updateFormDataOnTeamChange(selectedTeam);
    }
  }, [selectedTeam, updateFormDataOnTeamChange]);

  const teamOptions = useMemo(() => {
    return teams.map((team) => ({
      value: team.teamId,
      label: team.teamName,
    }));
  }, [teams]);

  const teamMemberOptions = useMemo(() => {
    if (!selectedTeam?.teamMembers || !Array.isArray(selectedTeam.teamMembers)) {
      return [];
    }
    const query = memberSearchQuery.toLowerCase();
    return selectedTeam.teamMembers
      .filter((member) => member.memberName.toLowerCase().includes(query))
      .map((member) => ({
        value: member.memberId,
        label: member.memberName,
        memberId: member.memberId,
      }));
  }, [selectedTeam, memberSearchQuery]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSelectChange = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handlePriorityChange = useCallback((value) => {
    setFormData((prev) => ({ ...prev, priority: value }));
    setErrors((prev) => ({ ...prev, priority: "" }));
  }, []);

  const handleMemberSelect = useCallback(
    (value) => {
      const member = teamMemberOptions.find((opt) => opt.value === value);
      handleSelectChange("assignedTo", value);
      handleSelectChange("memberId", member?.memberId || "");
      setMemberOpen(false);
    },
    [teamMemberOptions, handleSelectChange]
  );

  const handleTeamSelect = useCallback(
    (value) => {
      const team = teams.find((t) => t.teamId === value);
      setSelectedTeam(team);
      handleSelectChange("teamId", value);
      setErrors((prev) => ({ ...prev, team: "" }));
    },
    [teams, handleSelectChange]
  );

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.priority.trim()) newErrors.priority = "Priority is required";
    if (!selectedDate) newErrors.deadline = "Date is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!selectedTeam) newErrors.team = "Team selection is required";
    if (!formData.assignedTo) newErrors.assignedTo = "Assigned To is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.title, formData.priority, formData.description, selectedDate, selectedTeam, formData.assignedTo]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate()) {
        toast.error("Please fill all required fields");
        return;
      }

      try {
        // Combine date and time into ISO string - time is optional
        function pad(n) {
          return n < 10 ? "0" + n : n;
        }

        let combinedDateTime;
        if (selectedDate) {
          const dateObj = new Date(selectedDate);
          const [hours, minutes] = selectedTime
            ? selectedTime.split(":").map(Number)
            : [23, 59]; // Default to end of day if no time provided

          dateObj.setHours(hours, minutes, 0, 0);

          combinedDateTime =
            dateObj.getFullYear() +
            "-" +
            pad(dateObj.getMonth() + 1) +
            "-" +
            pad(dateObj.getDate()) +
            "T" +
            pad(dateObj.getHours()) +
            ":" +
            pad(dateObj.getMinutes()) +
            ":" +
            pad(dateObj.getSeconds());
        }

        const taskData = {
          ...formData,
          projectId: selectedTeam.projectId || projectId,
          projectName: selectedTeam.projectName || project?.data?.name || "N/A",
          teamId: selectedTeam.teamId,
          memberId: formData.memberId,
          deadline: combinedDateTime, // e.g., "2025-09-23T14:30:00"
        };

        await dispatch(createTask(taskData)).unwrap();
       onTaskAssingn();
        toast.success("Task assigned successfully!");
        onClose();
      } catch (err) {
        toast.error(taskError || "Failed to assign task");
      }
    },
    [validate, formData, selectedDate, selectedTime, selectedTeam, dispatch, projectId, project?.data?.name, taskError, onClose]
  );

  const isButtonEnabled = useMemo(
    () =>
      formData.title.trim() &&
      formData.priority.trim() &&
      selectedDate &&
      formData.description.trim() &&
      selectedTeam &&
      formData.assignedTo,
    [formData.title, formData.priority, formData.description, selectedDate, selectedTeam, formData.assignedTo]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Display date and time
  const displayDateTime = selectedDate
    ? format(selectedDate, "MMM dd, yyyy") + (selectedTime ? ` at ${selectedTime}` : " (End of Day)")
    : "";

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
        {/* Header */}
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Edit className="mr-2 h-4 w-4 text-blue-500" />
              Assign New Task
            </DialogTitle>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:bg-gray-100 rounded-full h-7 w-7"
                onClick={handleClose}
              >
                <X className="h-3 w-3" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Task Title */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Edit className="h-4 w-4 text-blue-500 mr-2" />
                Task Title <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter task title..."
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.title}
                </p>
              )}
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Priority */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Flag className="h-4 w-4 text-blue-500 mr-2" />
                  Priority <span className="text-red-500 ml-1">*</span>
                </label>
                <Select value={formData.priority} onValueChange={handlePriorityChange}>
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black max-h-48">
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
                {errors.priority && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {errors.priority}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" />
                  Deadline <span className="text-red-500 ml-1">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10",
                        !selectedDate && "text-gray-500"
                      )}
                    >
                      {displayDateTime || "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-0 w-auto">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setErrors((prev) => ({ ...prev, deadline: "" }));
                      }}
                      initialFocus
                      className="rounded-lg text-black"
                    />
                  </PopoverContent>
                </Popover>
                {errors.deadline && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {errors.deadline}
                  </p>
                )}
              </div>

              {/* Time - Optional */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  Time
                </label>
                <Input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => {
                    setSelectedTime(e.target.value);
                    if (e.target.value) {
                      setErrors((prev) => ({ ...prev, time: "" }));
                    }
                  }}
                  className="cursor-pointer w-full bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10"
                  placeholder="Select time (optional)"
                />
              </div>

              {/* Team Selection */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 text-blue-500 mr-2" />
                  Team <span className="text-red-500 ml-1">*</span>
                </label>
                <Select value={selectedTeam?.teamId || ""} onValueChange={handleTeamSelect}>
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10">
                    <SelectValue placeholder={teamStatus === "loading" ? "Loading teams..." : "Select team"} />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black max-h-48">
                    {teamOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.team && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {errors.team}
                  </p>
                )}
              </div>

              {/* Assigned To */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 text-blue-500 mr-2" />
                  Assigned To <span className="text-red-500 ml-1">*</span>
                </label>
                <Popover open={memberOpen} onOpenChange={setMemberOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10"
                      disabled={!selectedTeam || teamStatus === "loading"}
                    >
                      {formData.assignedTo
                        ? teamMemberOptions.find((opt) => opt.value === formData.assignedTo)?.label
                        : !selectedTeam
                        ? "Select team first"
                        : "Search and select team member"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-0 w-[300px] max-h-60">
                    <Command>
                      <CommandInput
                        placeholder="Search team members..."
                        value={memberSearchQuery}
                        onValueChange={setMemberSearchQuery}
                        className="h-10 text-sm p-2"
                      />
                      <CommandEmpty>No members found.</CommandEmpty>
                      <CommandGroup className="max-h-48 overflow-y-auto">
                        {teamMemberOptions.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={() => handleMemberSelect(option.value)}
                            className={`cursor-pointer text-sm ${
                              formData.assignedTo === option.value ? "bg-blue-100 text-blue-800" : ""
                            }`}
                          >
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.assignedTo && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {errors.assignedTo}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                Description <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-40 sm:h-48 md:h-52 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter detailed task description..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.description}
                </p>
              )}
            </div>

            {/* Global Error Display */}
            {taskError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <X className="h-4 w-4 mr-2" /> {taskError}
                </p>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="w-full sm:w-auto bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm px-4 py-2 h-10"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={!isButtonEnabled || taskStatus === "loading"}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm px-6 py-2 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {taskStatus === "loading" ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin mr-2" />
                    Assigning Task...
                  </>
                ) : (
                  "Assign Task"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskModal;