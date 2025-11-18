

"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Bug, X, Loader, Flag, CalendarIcon, Clock, Info } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { createBug } from "@/modules/project-management/issues/slices/bugSlice";

const ReportBugModal = ({ onClose,onBugReported, task_id, subtask_id, isOpen = true }) => {
  const dispatch = useDispatch();


  const [bugTitle, setBugTitle] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setBugTitle("");
    setBugDescription("");
    setPriority("Medium");
    setSelectedDate(null);
    setSelectedTime("");
    setAttachment(null);
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bugTitle.trim()) newErrors.title = "Bug title is required.";
    if (!bugDescription.trim()) newErrors.description = "Bug description is required.";
    if (!priority) newErrors.priority = "Please select a priority.";
    if (!selectedDate) newErrors.deadline = "Please select a deadline date.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReportBug = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare combined datetime
    const pad = (n) => (n < 10 ? "0" + n : n);
    let combinedDateTime = null;
    if (selectedDate) {
      const dateObj = new Date(selectedDate);
      const [hours, minutes] = selectedTime
        ? selectedTime.split(":").map(Number)
        : [23, 59];
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

    // Prepare formData for single attachment
    const formData = new FormData();
    formData.append("title", bugTitle.trim());
    formData.append("description", bugDescription.trim());
    formData.append("priority", priority);
    formData.append("deadline", combinedDateTime);
    formData.append("task_id", task_id || "");
    if (subtask_id) formData.append("subtask_id", subtask_id);
    if (attachment) formData.append("bugImage", attachment); // single attachment

    try {
      await dispatch(createBug(formData)).unwrap();
      toast.success("Bug reported successfully!");
      resetForm();
      if (onBugReported) onBugReported(); // <--- Refresh parent state
      onClose();
    } catch (err) {
      toast.error(err?.message || "Failed to create bug.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = bugTitle.trim() && bugDescription.trim() && priority && selectedDate;
  const isDisabled = isSubmitting || !isFormValid;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg p-2">
        
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-200 sticky top-0 z-10 h-16 flex items-center">
          <div className="flex justify-between items-center w-full">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Bug className="mr-2 h-4 w-4 text-blue-500" />
              Report Bug
            </DialogTitle>
            <DialogClose asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-500 hover:bg-gray-100 rounded-full h-8 w-8"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="px-4 sm:px-6 overflow-y-auto max-h-[calc(85vh-64px)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleReportBug();
            }}
            className="space-y-4"
          >
            {/* Title */}
            <div>
              <label className="flex items-center text-sm font-medium mb-2">
                <Bug className="h-4 w-4 text-blue-500 mr-2" /> Title{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={bugTitle}
                onChange={(e) => {
                  setBugTitle(e.target.value);
                  setErrors((prev) => ({ ...prev, title: "" }));
                }}
                className="w-full border rounded-lg p-3 text-sm"
                placeholder="Enter bug title"
                disabled={isSubmitting}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            {/* Priority / Date / Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  <Flag className="h-4 w-4 text-blue-500 mr-2" /> Priority{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <Select
                  value={priority}
                  onValueChange={(value) => setPriority(value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" /> Deadline{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full h-10">
                      {selectedDate ? format(selectedDate, "MMM dd, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" /> Time
                </label>
                <Input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full h-10"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center text-sm font-medium mb-2">
                <Info className="h-4 w-4 text-blue-500 mr-2" /> Description{" "}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                value={bugDescription}
                onChange={(e) => setBugDescription(e.target.value)}
                className="w-full h-[40vh] p-3"
                placeholder="Describe the issue..."
                disabled={isSubmitting}
              />
            </div>

            {/* File Attachment */}
            <div>
              <label className="flex items-center text-sm font-medium mb-2">Attachment (optional)</label>
              <Input
                type="file"
                accept="image/*,application/pdf,.doc,.docx"
                onChange={(e) => setAttachment(e.target.files[0] || null)}
                disabled={isSubmitting}
              />
            
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t mt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={isSubmitting}>
                  Cancel
                </Button>
              </DialogClose>
              <Button className="bg-blue-700" type="submit" disabled={isDisabled}>
                {isSubmitting ? <Loader className="animate-spin h-4 w-4 mr-2" /> : "Report Bug"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportBugModal;
