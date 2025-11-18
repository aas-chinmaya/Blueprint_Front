




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
import { toast } from "sonner";
import { createIssue } from "@/modules/project-management/issues/slices/issuesSlice";
import { FileText, Loader2, Paperclip, X, File, Image as ImageIcon } from "lucide-react";

const ReportIssueForm = ({ onClose, projectData, onIssueReported, isOpen = true }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [attachment, setAttachment] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setAttachment(null);
    setPreviewUrl(null);
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // ✅ Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!projectData?.projectId) newErrors.projectId = "Project ID is required.";
    if (!projectData?.projectName) newErrors.projectName = "Project Name is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 📎 Handle file select and preview
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      toast.error("Only PDF, JPG, PNG, and DOC/DOCX files are allowed.");
      return;
    }

    setAttachment(file);

    // Show preview if image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  // 🚀 Submit
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("projectId", projectData.projectId);
    formData.append("projectName", projectData.projectName);
    formData.append("title", title.trim());
    formData.append("description", description.trim());
    formData.append("priority", priority);

    if (attachment) {
      formData.append("attachment", attachment);
    }

    try {
      await dispatch(createIssue(formData)).unwrap();
      toast.success("Issue reported successfully!");
      resetForm();
      onIssueReported?.();
      onClose();
    } catch (err) {
      toast.error(err?.message || "Failed to report issue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || !title.trim() || !description.trim();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-3xl bg-white border border-gray-200 rounded-xl shadow-lg p-4 sm:p-6">
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-blue-500" /> Report Issue
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-5 mt-4"
        >
          {/* Title */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter issue title"
              disabled={isSubmitting}
            />
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Priority <span className="text-red-500">*</span>
            </label>
            <Select value={priority} onValueChange={setPriority} disabled={isSubmitting}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue in detail..."
              className="min-h-[150px]"
              disabled={isSubmitting}
            />
          </div>

          {/* Attachment + Preview */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Attachment (PDF, JPG, PNG, DOCX)
            </label>
            <Input
              type="file"
              accept=".pdf,image/*,.doc,.docx"
              onChange={handleFileSelect}
              disabled={isSubmitting}
            />

            {attachment && (
              <div className="mt-3 p-3 border rounded-lg bg-gray-50 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-16 h-16 border rounded-md bg-white">
                      {attachment.type === "application/pdf" ? (
                        <FileText className="text-red-500" size={24} />
                      ) : (
                        <File className="text-gray-400" size={24} />
                      )}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-700">{attachment.name}</p>
                    <p className="text-xs text-gray-500">
                      {(attachment.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAttachment(null);
                    setPreviewUrl(null);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isDisabled}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" /> Submitting...
                </>
              ) : (
                "Report Issue"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportIssueForm;
