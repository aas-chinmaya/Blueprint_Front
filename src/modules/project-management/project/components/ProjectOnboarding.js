


















"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sanitizeInput } from "@/utils/sanitize";
import TeamLeadSelect from "@/modules/project-management/project/components/TeamLeadSelect";
import ClientSelect from "@/modules/project-management/project/components/ClientSelect";
import { FiFileText, FiUpload, FiX, FiCheck } from "react-icons/fi";
import {
  createProject,
  fetchAllProjects,
  resetProjectCreation,
} from "@/modules/project-management/project/slices/projectSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function ProjectOnboarding() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => ({
    loading: state.project.status.projectCreation === "loading",
    error: state.project.error.projectCreation,
    successMessage: state.project.successMessage,
  }));

  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const clientSelectRef = useRef(null);
  const teamLeadSelectRef = useRef(null);

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    clientId: undefined,
    teamLeadId: "",
    teamLeadName: "",
    startDate: null,
    expectedEndDate: null,
    category: "",
    attachments: [],
  });

  const [fileErrors, setFileErrors] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isClientSelectOpen, setIsClientSelectOpen] = useState(false);
  const [isTeamLeadSelectOpen, setIsTeamLeadSelectOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [hasHandledSuccess, setHasHandledSuccess] = useState(false);

  // Backend response handling
  useEffect(() => {
    if (successMessage && !hasHandledSuccess) {
      setHasHandledSuccess(true);
      toast.success(successMessage);
      dispatch(fetchAllProjects());
      router.push("/project/all");
      dispatch(resetProjectCreation());
    }
    if (error) {
      toast.error(error);
      dispatch(resetProjectCreation());
    }
  }, [successMessage, error, router, dispatch, hasHandledSuccess]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clientSelectRef.current && !clientSelectRef.current.contains(event.target)) {
        setIsClientSelectOpen(false);
      }
      if (teamLeadSelectRef.current && !teamLeadSelectRef.current.contains(event.target)) {
        setIsTeamLeadSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleDateSelect = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files);
    const validFiles = [];
    const errors = [];

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    const maxSize = 25 * 1024 * 1024;

    newFiles.forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name}: Only PDF, Word, Excel, PPT allowed`);
      } else if (file.size > maxSize) {
        errors.push(`${file.name}: Max 25MB`);
      } else {
        validFiles.push(file);
        setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
        simulateUpload(file.name);
      }
    });

    if (errors.length) {
      setFileErrors(errors);
      toast.error("Some files were rejected");
    }

    if (validFiles.length) {
      setFormData((prev) => ({ ...prev, attachments: [...prev.attachments, ...validFiles] }));
      setFileErrors([]);
      toast.success(`${validFiles.length} file(s) added`);
    }
  };

  const simulateUpload = (fileName) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress((prev) => ({ ...prev, [fileName]: progress }));
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadProgress((prev) => {
            const { [fileName]: _, ...rest } = prev;
            return rest;
          });
        }, 800);
      }
    }, 200);
  };

  const removeFile = (index) => {
    const file = formData.attachments[index];
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
    setUploadProgress((prev) => {
      const { [file.name]: _, ...rest } = prev;
      return rest;
    });
  };

  // === SUBMIT WITH VALIDATION ONLY ON BUTTON CLICK ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const required = ["projectName", "description", "teamLeadId", "startDate", "expectedEndDate", "category"];
    required.forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.category === "client" && !formData.clientId) {
      newErrors.clientId = "Client is required";
    }

    if (formData.startDate && formData.expectedEndDate) {
      const start = formData.startDate;
      const end = formData.expectedEndDate;
      if (end.getTime() === start.getTime()) {
        newErrors.expectedEndDate = "End date cannot be same as start date";
      } else if (end < start) {
        newErrors.expectedEndDate = "End date cannot be before start date";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors below");
      return;
    }

    const submissionData = new FormData();
    submissionData.append("projectName", formData.projectName);
    submissionData.append("description", formData.description);
    if (formData.category === "client") submissionData.append("clientId", formData.clientId);
    submissionData.append("teamLeadId", formData.teamLeadId);
    submissionData.append("teamLeadName", formData.teamLeadName);
    submissionData.append("startDate", format(formData.startDate, "yyyy-MM-dd"));
    submissionData.append("expectedEndDate", format(formData.expectedEndDate, "yyyy-MM-dd"));
    submissionData.append("category", formData.category);
    formData.attachments.forEach((file) => submissionData.append("attachments", file));

    try {
      await dispatch(createProject(submissionData)).unwrap();
    } catch {
      // Handled in useEffect
    }
  };

  const getFileIcon = (type) => {
    if (type.includes("pdf")) return <FiFileText className="w-5 h-5 text-red-600" />;
    if (type.includes("word")) return <FiFileText className="w-5 h-5 text-blue-600" />;
    if (type.includes("excel")) return <FiFileText className="w-5 h-5 text-green-600" />;
    if (type.includes("powerpoint")) return <FiFileText className="w-5 h-5 text-orange-600" />;
    return <FiFileText className="w-5 h-5 text-gray-600" />;
  };

  const isFormValid = () => {
    const required = ["projectName", "description", "teamLeadId", "startDate", "expectedEndDate", "category"];
    const allFilled = required.every((key) => formData[key]);
    const clientValid = formData.category !== "client" || formData.clientId;
    return allFilled && clientValid && !loading;
  };

  return (
    <>
      <div ref={formRef} className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Onboard New Project
            </h1>
            <p className="mt-2 text-lg text-gray-600">Fill in the details to create a professional project</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Form Fields */}
              <div className="space-y-6">
                {/* Project Name */}
                <div className="space-y-2">
                  <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                    Project Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    placeholder="e.g., Enterprise CRM System"
                    className="h-12 text-base"
                  />
                </div>

                {/* Category & Client */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                      Project Category <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.category} onValueChange={(v) => setFormData(prev => ({ ...prev, category: v }))}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="client">
                          <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            Client
                          </span>
                        </SelectItem>
                        <SelectItem value="in house">
                          <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            In-House
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.category === "client" && (
                    <div ref={clientSelectRef} className="space-y-2">
                      <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                        Client <span className="text-red-500">*</span>
                      </Label>
                      <ClientSelect
                        value={formData.clientId}
                        isOpen={isClientSelectOpen}
                        onToggle={() => setIsClientSelectOpen(!isClientSelectOpen)}
                        onChange={(v) => setFormData(prev => ({ ...prev, clientId: v }))}
                        className="h-12"
                      />
                    </div>
                  )}
                </div>

                {/* Team Lead */}
                <div className="space-y-2">
                  <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                    Team Lead <span className="text-red-500">*</span>
                  </Label>
                  <TeamLeadSelect
                    value={formData.teamLeadId}
                    isOpen={isTeamLeadSelectOpen}
                    onToggle={() => setIsTeamLeadSelectOpen(!isTeamLeadSelectOpen)}
                    onChange={({ teamLeadId, teamLeadName }) => {
                      setFormData(prev => ({ ...prev, teamLeadId, teamLeadName }));
                    }}
                    className="h-12"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                      Start Date <span className="text-red-500">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full h-12 justify-start text-left font-normal ${!formData.startDate && "text-muted-foreground"}`}
                        >
                          {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) => {
                            handleDateSelect("startDate", date);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                      Expected End Date <span className="text-red-500">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          disabled={!formData.startDate}
                          className={`w-full h-12 justify-start text-left font-normal ${!formData.expectedEndDate && "text-muted-foreground"}`}
                        >
                          {formData.expectedEndDate ? format(formData.expectedEndDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.expectedEndDate}
                          onSelect={(date) => handleDateSelect("expectedEndDate", date)}
                          disabled={(date) =>
                            date <= formData.startDate || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              {/* Right: Upload */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-800">
                    Project Documents (PDF, Word, Excel, PPT)
                  </Label>
                  <div
                    className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all cursor-pointer ${
                      dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      onChange={(e) => e.target.files && handleFiles(e.target.files)}
                      className="hidden"
                    />
                    <FiUpload className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                      Drag & drop documents here, or click to select
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Max 25MB per file • PDF, DOC/DOCX, XLS/XLSX, PPT/PPTX only</p>
                  </div>

                  {fileErrors.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      {fileErrors.map((e, i) => (
                        <p key={i} className="text-red-700 text-sm">{e}</p>
                      ))}
                    </div>
                  )}

                  {formData.attachments.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">
                        {formData.attachments.length} document(s) ready
                      </p>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {formData.attachments.map((file, i) => (
                          <div key={i} className="bg-white border rounded-lg p-4 flex items-center justify-between group hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {getFileIcon(file.type)}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {uploadProgress[file.name] !== undefined && (
                                <div className="w-24">
                                  <Progress value={uploadProgress[file.name]} className="h-2" />
                                  <p className="text-xs text-gray-500 mt-1 text-center">{uploadProgress[file.name]}%</p>
                                </div>
                              )}
                              {uploadProgress[file.name] === undefined && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                                >
                                  <FiX className="h-4 w-4 text-red-500" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label className="text-base font-semibold text-gray-800 flex items-center gap-1">
                Project Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description..."
                className="min-h-48 text-base"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center sm:justify-end pt-8">
              <Button
                type="submit"
                size="lg"
                disabled={!isFormValid()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 min-w-64 justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    </svg>
                    Creating Project...
                  </>
                ) : (
                  <>
                    <FiCheck className="h-6 w-6" />
                    Create Project
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}