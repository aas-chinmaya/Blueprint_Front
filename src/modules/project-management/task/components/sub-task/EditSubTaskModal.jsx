





'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Edit, Flag, CalendarIcon, Info, X, Loader, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { updateSubTask } from '@/modules/project-management/task/slices/subTaskSlice';
import { toast } from 'sonner';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const EditSubtaskModal = ({ projectId,onSubtaskEdit, open, setOpen, subtask, taskId }) => {
  const { currentUser } = useCurrentUser();
  const dispatch = useDispatch();

  const { loading: subTaskLoading, error: subTaskError } = useSelector((state) => state.subTask);

  // Initial state - Derive assignedTo from subtask
  const initialFormData = useMemo(() => ({
    title: subtask?.title || '',
    priority: subtask?.priority || 'Medium',
    description: subtask?.description || '',
    assignedTo: subtask?.assignedTo || '', // Derived from subtask, not shown in form
    assignedBy: subtask?.assignedBy || currentUser?.id || '',
    projectId: projectId || '',
    teamId: subtask?.teamId || '',
    memberId: subtask?.memberId || subtask?.assignedTo || '', // Fallback to assignedTo
  }), [subtask, currentUser?.id, projectId]);

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Initialize form when modal opens with subtask data
  useEffect(() => {
    if (open && subtask) {
      setFormData(initialFormData);
      setErrors({});

      // Set selected date and time from subtask deadline
      if (subtask.deadline) {
        const deadline = new Date(subtask.deadline);
        setSelectedDate(deadline);
        // Extract time in HH:mm format
        const hours = deadline.getHours().toString().padStart(2, '0');
        const minutes = deadline.getMinutes().toString().padStart(2, '0');
        setSelectedTime(`${hours}:${minutes}`);
      } else {
        setSelectedDate(null);
        setSelectedTime('');
      }
    }
  }, [open, subtask, initialFormData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  const handleSelectChange = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  const handlePriorityChange = useCallback((value) => {
    setFormData((prev) => ({ ...prev, priority: value }));
    setErrors((prev) => ({ ...prev, priority: '' }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.priority.trim()) newErrors.priority = 'Priority is required';
    if (!selectedDate) newErrors.deadline = 'Deadline is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    // No validation for assignedTo since it's derived from subtask

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.title, formData.priority, formData.description, selectedDate]);

  const handleSaveEdit = useCallback(async () => {
    if (!validate()) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      // Combine date and time into ISO string - time is optional
      function pad(n) {
        return n < 10 ? '0' + n : n;
      }

      let combinedDateTime;
      if (selectedDate) {
        const dateObj = new Date(selectedDate);
        const [hours, minutes] = selectedTime
          ? selectedTime.split(':').map(Number)
          : [23, 59]; // Default to end of day if no time provided

        dateObj.setHours(hours, minutes, 0, 0);

        combinedDateTime =
          dateObj.getFullYear() +
          '-' +
          pad(dateObj.getMonth() + 1) +
          '-' +
          pad(dateObj.getDate()) +
          'T' +
          pad(dateObj.getHours()) +
          ':' +
          pad(dateObj.getMinutes()) +
          ':' +
          pad(dateObj.getSeconds());
      }

      const subTaskData = {
        title: formData.title,
        priority: formData.priority,
        deadline: combinedDateTime, // e.g., "2025-09-23T14:30:00"
        description: formData.description,
        assignedTo: subtask?.assignedTo || formData.assignedTo, // Directly from subtask
        assignedBy: formData.assignedBy,
        teamId: subtask?.teamId || formData.teamId || '', // If available in subtask
        memberId: subtask?.memberId || subtask?.assignedTo || formData.memberId, // From subtask
        projectId: formData.projectId,
      };

      await dispatch(updateSubTask({ taskId, subTaskId: subtask.subtask_id, subTaskData })).unwrap();
      toast.success('Subtask updated successfully');
      setOpen(false);
      onSubtaskEdit()
    } catch (err) {
      toast.error(subTaskError || 'Failed to update subtask');
    }
  }, [
    validate,
    formData,
    selectedDate,
    selectedTime,
    subtask,
    dispatch,
    taskId,
    subTaskError,
    setOpen,
  ]);

  const isButtonEnabled = useMemo(() => 
    formData.title.trim() &&
    formData.priority.trim() &&
    selectedDate &&
    formData.description.trim(),
    [formData.title, formData.priority, formData.description, selectedDate]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // Display date and time
  const displayDateTime = selectedDate
    ? format(selectedDate, 'MMM dd, yyyy') + (selectedTime ? ` at ${selectedTime}` : ' (End of Day)')
    : '';

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-6xl sm:max-h-[85vh] bg-white shadow-lg border border-gray-200 rounded-lg text-black p-2">
        {/* Header */}
        <DialogHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
              <Edit className="mr-2 h-4 w-4 text-blue-500" />
              Edit Subtask
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
          <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
            {/* Subtask Title */}
            <div className="w-full">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Edit className="h-4 w-4 text-blue-500 mr-2" />
                Subtask Title <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full h-24 sm:h-28 md:h-32 bg-white border border-gray-300 rounded-lg text-sm resize-vertical focus:ring-2 focus:ring-blue-200 focus:border-blue-500 p-3"
                placeholder="Enter subtask title..."
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.title}
                </p>
              )}
            </div>

            {/* Grid Layout - Removed Team and Assigned To */}
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

              {/* Deadline */}
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
                        'w-full justify-between bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10',
                        !selectedDate && 'text-gray-500'
                      )}
                    >
                      {displayDateTime || 'Select date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-0 w-auto">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setErrors((prev) => ({ ...prev, deadline: '' }));
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
                  }}
                  className="cursor-pointer w-full bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 h-10"
                  placeholder="Select time (optional)"
                />
              </div>

              {/* Empty slot for grid balance, or add another field if needed */}
              <div></div>
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
                placeholder="Enter detailed subtask description..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <X className="h-3 w-3 mr-1" /> {errors.description}
                </p>
              )}
            </div>

            {/* Global Error Display */}
            {subTaskError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <X className="h-4 w-4 mr-2" /> {subTaskError}
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
                disabled={!isButtonEnabled || subTaskLoading}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm px-6 py-2 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subTaskLoading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin mr-2" />
                    Updating Subtask...
                  </>
                ) : (
                  'Update Subtask'
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