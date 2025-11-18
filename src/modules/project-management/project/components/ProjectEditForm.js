






"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sanitizeInput } from "@/utils/sanitize";
import TeamLeadSelect from "@/modules/project-management/project/components/TeamLeadSelect";
import ClientSelect from "@/modules/project-management/project/components/ClientSelect";
import { FiFileText, FiUpload, FiX, FiCheck, FiArrowLeft, FiDownload } from "react-icons/fi";
import {
  fetchProjectById,
  updateProject,
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

export default function ProjectEditForm({ projectId }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { project, status, error, successMessage } = useSelector((state) => state.project);

  const [formData, setFormData] = useState(null); // null = not ready → no render
  const [hasHandledSuccess, setHasHandledSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isClientSelectOpen, setIsClientSelectOpen] = useState(false);
  const [isTeamLeadSelectOpen, setIsTeamLeadSelectOpen] = useState(false);

  const fileInputRef = useRef(null);
  const clientSelectRef = useRef(null);
  const teamLeadSelectRef = useRef(null);

  // Fetch project
  useEffect(() => {
    if (projectId && status.fetchProject === "idle") {
      dispatch(fetchProjectById(projectId));
    }
  }, [projectId, dispatch, status.fetchProject]);

  // WHEN DATA ARRIVES → map category perfectly + populate formData
  useEffect(() => {
    if (status.fetchProject === "succeeded" && project?.data) {
      const p = project.data;

      // ULTRA-ROBUST CATEGORY MAPPING (this is the magic part)
      const apiCategory = (p.category || "").toString().trim().toLowerCase();

      let category = "in house"; // default fallback

      if (
        apiCategory === "client" ||
        apiCategory === "client project" ||
        apiCategory.includes("client") ||
        apiCategory.includes("external") ||
        apiCategory === "external"
      ) {
        category = "client";
      }

      // If API sends exact "in house", "inhouse", "internal" → keep it
      if (
        apiCategory === "in house" ||
        apiCategory === "inhouse" ||
        apiCategory.includes("internal")
      ) {
        category = "in house";
      }

      const attachments = (p.attachments || []).map(file => ({
        id: file.filename || `old-${Date.now()}`,
        name: file.filename?.split("_").pop() || file.filename || "Unknown file",
        url: file.url,
        isExisting: true,
      }));

      setFormData({
        projectName: p.projectName || "",
        description: p.description || "",
        clientId: p.clientId || undefined,
        teamLeadId: p.teamLeadId || "",
        teamLeadName: p.teamLeadName || "",
        startDate: p.startDate ? new Date(p.startDate) : null,
        expectedEndDate: p.expectedEndDate ? new Date(p.expectedEndDate) : null,
        category,           // ← always correct now
        attachments,
      });
    }
  }, [project, status.fetchProject]);

  // Success → redirect
  useEffect(() => {
    if (successMessage && !hasHandledSuccess) {
      setHasHandledSuccess(true);
      toast.success("Project updated successfully!");
      dispatch(fetchAllProjects());
      dispatch(resetProjectCreation());
      router.push("/project/all");
    }
  }, [successMessage, hasHandledSuccess, dispatch, router]);

  // Click outside → close custom selects
  useEffect(() => {
    const handler = (e) => {
      if (clientSelectRef.current && !clientSelectRef.current.contains(e.target)) setIsClientSelectOpen(false);
      if (teamLeadSelectRef.current && !teamLeadSelectRef.current.contains(e.target)) setIsTeamLeadSelectOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ──────────────────────── HANDLERS ────────────────────────
  const handleCategoryChange = (value) => {
    setFormData(prev => ({
      ...prev,
      category: value,
      clientId: value === "client" ? prev.clientId : undefined
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }));
  };

  const handleDateSelect = (name, date) => {
    setFormData(prev => ({ ...prev, [name]: date || null }));
  };

  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === "dragenter" || e.type === "dragover"); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files); };

  const handleFiles = (files) => {
    const valid = [];
    const allowed = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];
    Array.from(files).forEach(f => {
      const ext = "." + f.name.split(".").pop().toLowerCase();
      if (allowed.includes(ext) && f.size <= 25 * 1024 * 1024) {
        valid.push({ id: `new-${Date.now()}-${f.name}`, name: f.name, file: f, isExisting: false });
        setUploadProgress(prev => ({ ...prev, [f.name]: 0 }));
        setTimeout(() => simulateUpload(f.name), 100);
      }
    });
    if (valid.length) {
      setFormData(prev => ({ ...prev, attachments: [...prev.attachments, ...valid] }));
      toast.success(`${valid.length} file(s) added`);
    }
  };

  const simulateUpload = (name) => {
    let p = 0;
    const i = setInterval(() => {
      p += 25;
      setUploadProgress(prev => ({ ...prev, [name]: p }));
      if (p >= 100) { clearInterval(i); setTimeout(() => setUploadProgress(prev => { const { [name]: _, ...rest } = prev; return rest; }), 600); }
    }, 150);
  };

  const removeFile = (i) => setFormData(prev => ({ ...prev, attachments: prev.attachments.filter((_, idx) => idx !== i) }));



  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!formData.projectName || !formData.description || !formData.teamLeadId || !formData.startDate || !formData.expectedEndDate || !formData.category) {
    toast.error("Fill all required fields");
    return;
  }
  if (formData.category === "client" && !formData.clientId) {
    toast.error("Client is required");
    return;
  }
  if (formData.expectedEndDate <= formData.startDate) {
    toast.error("End date must be after start date");
    return;
  }

  // Prepare FormData
  const data = new FormData();
  data.append("projectName", formData.projectName);
  data.append("description", formData.description);
  if (formData.category === "client") data.append("clientId", formData.clientId);
  data.append("teamLeadId", formData.teamLeadId);
  data.append("teamLeadName", formData.teamLeadName);
  data.append("startDate", format(formData.startDate, "yyyy-MM-dd"));
  data.append("expectedEndDate", format(formData.expectedEndDate, "yyyy-MM-dd"));
  data.append("category", formData.category);

  formData.attachments.forEach(a => {
    if (!a.isExisting && a.file) data.append("attachments", a.file);
  });

  try {
    const response = await dispatch(updateProject({ projectId, updatedData: data }));

    // Use API response directly
    if (response.payload && response.payload.success) {
      // If your API returns a message
      const message = response.payload.message || "Project updated successfully!";
      toast.success(message);

      // Redirect to another page
      router.push("/project/all"); 
    } else {
      const errorMsg = response.payload?.message || "Failed to update project";
      toast.error(errorMsg);
    }
  } catch (err) {
    toast.error("Something went wrong");
    console.error(err);
  }
};

  // ──────────────────────── RENDER ────────────────────────
  if (status.fetchProject === "loading" || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mb-4" />
          <p className="text-xl text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  if (status.fetchProject === "failed") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-red-50 border border-red-200 rounded-xl p-10">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Failed to load project</h3>
          <Button onClick={() => dispatch(fetchProjectById(projectId))}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className=" mx-auto">
        <Button variant="outline" onClick={() => router.back()} className="mb-6">
          <FiArrowLeft className="mr-2" /> Back
        </Button>

        <h1 className="text-4xl font-bold mb-3">Edit Project</h1>
        <p className="text-lg text-gray-600 mb-10">Update project details and documents</p>

        <form onSubmit={handleSubmit} className="space-y-12">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-8">

              <div>
                <Label className="text-lg font-semibold">Project Name <span className="text-red-500">*</span></Label>
                <Input name="projectName" value={formData.projectName} onChange={handleChange} className="h-12 mt-2" placeholder="Enter name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-semibold">Project Category <span className="text-red-500">*</span></Label>
                  <Select value={formData.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="h-12 mt-2">
                      <SelectValue /> {/* Always shows correct value */}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client"><span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            Client
                          </span></SelectItem>
                      <SelectItem value="in house">   <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            In-House
                          </span></SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.category === "client" && (
                  <div ref={clientSelectRef}>
                    <Label className="text-lg font-semibold">Client <span className="text-red-500">*</span></Label>
                    <ClientSelect
                      value={formData.clientId}
                      isOpen={isClientSelectOpen}
                      onToggle={() => setIsClientSelectOpen(v => !v)}
                      onChange={(id) => setFormData(prev => ({ ...prev, clientId: id }))}
                      className="h-12 mt-2"
                    />
                  </div>
                )}
              </div>

              <div>
                <Label className="text-lg font-semibold">Team Lead <span className="text-red-500">*</span></Label>
                <div ref={teamLeadSelectRef}>
                  <TeamLeadSelect
                    value={formData.teamLeadId}
                    isOpen={isTeamLeadSelectOpen}
                    onToggle={() => setIsTeamLeadSelectOpen(v => !v)}
                    onChange={({ teamLeadId, teamLeadName }) => setFormData(prev => ({ ...prev, teamLeadId, teamLeadName }))}
                    className="h-12 mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-semibold">Start Date <span className="text-red-500">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full h-12 mt-2 justify-start">
                        {formData.startDate ? format(formData.startDate, "PPP") : "Pick date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={formData.startDate} onSelect={d => handleDateSelect("startDate", d)} /></PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label className="text-lg font-semibold">Expected End Date <span className="text-red-500">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" disabled={!formData.startDate} className="w-full h-12 mt-2 justify-start">
                        {formData.expectedEndDate ? format(formData.expectedEndDate, "PPP") : "Pick date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={formData.expectedEndDate} onSelect={d => handleDateSelect("expectedEndDate", d)}
                        disabled={date => date <= formData.startDate} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* RIGHT – FILES */}
            <div className="space-y-8">
              <div>
                <Label className="text-lg font-semibold">Project Documents</Label>
                <div
                  className={`mt-4 border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                  onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input ref={fileInputRef} type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" onChange={e => e.target.files && handleFiles(e.target.files)} className="hidden" />
                  <FiUpload className="mx-auto h-14 w-14 text-gray-400" />
                  <p className="mt-4 text-lg text-gray-600">Drop files or click to upload</p>
                  <p className="text-sm text-gray-500">Max 25MB • PDF, Word, Excel, PPT</p>
                </div>

                {formData.attachments.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {formData.attachments.map((f, i) => (
                      <div key={f.id} className="bg-white border rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <FiFileText className="w-10 h-10 text-gray-500" />
                          <div>
                            <p className="font-medium truncate max-w-md">{f.name}</p>
                            <p className="text-xs text-gray-500">{f.isExisting ? "Existing" : "New"}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {uploadProgress[f.name] !== undefined && <Progress value={uploadProgress[f.name]} className="w-24" />}
                          {f.isExisting && f.url && <Button size="icon" variant="ghost" onClick={() => window.open(f.url, "_blank")}><FiDownload /></Button>}
                          <Button size="icon" variant="ghost" onClick={() => removeFile(i)}><FiX className="text-red-500" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Label className="text-lg font-semibold">Project Description <span className="text-red-500">*</span></Label>
            <Textarea name="description" value={formData.description} onChange={handleChange} className="min-h-48 mt-3" placeholder="Describe the project..." />
          </div>

          <div className="flex justify-end mt-12">
            <Button type="submit" size="lg" disabled={status.updateProject === "updating"} className="px-16 py-7 text-xl bg-blue-600 hover:bg-blue-700">
              {status.updateProject === "updating" ? "Updating..." : "Update Project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}