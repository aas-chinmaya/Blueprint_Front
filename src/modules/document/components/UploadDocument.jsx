


"use client";

import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadSingleDocument } from "@/modules/document/slices/documentSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, X, Edit2, Loader2, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { validateInput, sanitizeInput } from "@/utils/sanitize";

const forbiddenTypes = ["exe", "bat", "sh", "js", "msi", "com", "dll"];

export default function UploadDocument({ projectId, onSuccess }) {
  const dispatch = useDispatch();
  const { uploading, error } = useSelector((state) => state.documents);
  
  const [file, setFile] = useState(null);
  const [docName, setDocName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [nameValidationError, setNameValidationError] = useState(null);
  const [descriptionValidationError, setDescriptionValidationError] = useState(null);
  
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    validateAndSetFile(selectedFile);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;
    validateAndSetFile(droppedFile);
  };

  const validateAndSetFile = (selectedFile) => {
    const ext = selectedFile.name.split(".").pop().toLowerCase();
    const isForbiddenType = forbiddenTypes.includes(ext);
    const isTooLarge = selectedFile.size > 10 * 1024 * 1024;

    if (isForbiddenType) {
      toast.error("File type not allowed");
      return;
    }

    if (isTooLarge) {
      toast.error("File too large. Maximum 10MB");
      return;
    }

    setFile(selectedFile);
    // Sanitize the filename before setting it as docName
    const sanitizedName = sanitizeInput(selectedFile.name.split('.')[0]);
    setDocName(sanitizedName);
    setNameValidationError(null);
    setIsEditingName(false);
    setDescription("");
    setDescriptionValidationError(null);
    setProgress(0);
    setUploadStatus(null);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setDocName("");
    setNameValidationError(null);
    setDescription("");
    setDescriptionValidationError(null);
    setIsEditingName(false);
    setProgress(0);
    setUploadStatus(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const toggleEditName = () => {
    if (!isEditingName && file) {
      setIsEditingName(true);
    }
  };

  const saveEditName = () => {
    if (!docName.trim() && file) {
      const sanitizedName = sanitizeInput(file.name.split('.')[0]);
      setDocName(sanitizedName);
    }
    
    if (docName.trim() && file) {
      // Validate the document name
      const validation = validateInput(docName);
      if (!validation.isValid) {
        setNameValidationError(validation.warning);
        return;
      }
      setNameValidationError(null);
      setIsEditingName(false);
    }
  };

  const handleTextareaChange = (e) => {
    const newValue = e.target.value.slice(0, 200);
    setDescription(newValue);
    
    // Validate on change
    const validation = validateInput(newValue);
    if (!validation.isValid) {
      setDescriptionValidationError(validation.warning);
    } else {
      setDescriptionValidationError(null);
    }
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  };

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    setDocName(newValue);
    
    // Validate document name on change
    const validation = validateInput(newValue);
    if (!validation.isValid) {
      setNameValidationError(validation.warning);
    } else {
      setNameValidationError(null);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const validateFormData = () => {
    if (!file) {
      toast.error("Please select a file");
      return false;
    }
    
    if (!description.trim()) {
      setDescriptionValidationError("Description is required");
      return false;
    }

    if (!docName.trim()) {
      setNameValidationError("Document name is required");
      return false;
    }

    // Final validation before submission
    const nameValidation = validateInput(docName);
    if (!nameValidation.isValid) {
      setNameValidationError(nameValidation.warning);
      return false;
    }

    const descValidation = validateInput(description);
    if (!descValidation.isValid) {
      setDescriptionValidationError(descValidation.warning);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setNameValidationError(null);
    setDescriptionValidationError(null);
    
    if (!validateFormData()) {
      return;
    }

    // Sanitize the final values
    const sanitizedDocName = sanitizeInput(docName.trim());
    const sanitizedDescription = sanitizeInput(description.trim());

    // Double-check after sanitization
    if (!sanitizedDocName || !sanitizedDescription) {
      setNameValidationError("Invalid input: Content contains prohibited characters after sanitization");
      return;
    }

    const payload = {
      name: sanitizedDocName,
      description: sanitizedDescription,
      file,
      projectId
    };

    try {
      setUploadStatus('uploading');
      setProgress(0);
      
      setTimeout(() => {
        setProgress(10);
      }, 100);

      const result = await dispatch(uploadSingleDocument(payload)).unwrap();
      
      setProgress(100);
      setUploadStatus('success');
      toast.success("Document uploaded successfully!");
      
      setTimeout(() => {
        handleRemoveFile();
        setUploadStatus(null);
        setProgress(0);
        if (onSuccess) {
          onSuccess(result);
        }
      }, 1500);
      
    } catch (err) {
      console.error("Upload error:", err);
      setUploadStatus('error');
      setProgress(0);
      toast.error(err?.message || "Upload failed");
      
      setTimeout(() => {
        setUploadStatus(null);
      }, 3000);
    }
  };

  const isUploading = uploading || uploadStatus === 'uploading';
  const fileExtension = file ? file.name.split(".").pop().toUpperCase() : "";
  const fileSize = file ? formatFileSize(file.size) : "";

  return (
  
      <form className="space-y-6 p-6" onSubmit={handleSubmit}>
        {!file && (
          <div className="space-y-4">
            <div
              className={cn(
                "relative p-8 border-2 border-dashed rounded-lg transition-all duration-300 cursor-pointer group bg-gray-50",
                dragActive 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-300 hover:border-blue-400 hover:bg-blue-25"
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Input
                ref={fileInputRef}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isUploading}
              />
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-white rounded-lg border">
                  <Upload className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Drop your file here</h3>
                <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5"
                  disabled={isUploading}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </div>
            </div>
            
            <div className="text-xs text-center text-gray-500 bg-gray-50 rounded-lg py-2">
              <p>PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, Images, TXT</p>
              <p className="text-blue-600 font-medium">Max 10MB</p>
            </div>
          </div>
        )}

        {file && (
          <div className="space-y-5">
            {/* File Preview Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  {isEditingName ? (
                    <div className="mb-2">
                      <Label className="text-sm font-medium text-gray-700 mb-1 block">
                        Document Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        value={docName}
                        onChange={handleNameChange}
                        onBlur={saveEditName}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEditName();
                          if (e.key === "Escape") {
                            const sanitizedName = sanitizeInput(file.name.split('.')[0]);
                            setDocName(sanitizedName);
                            setNameValidationError(null);
                            setIsEditingName(false);
                          }
                        }}
                        className={cn(
                          "text-lg font-semibold text-black bg-white border-gray-300 focus:border-blue-500 rounded-md",
                          nameValidationError && "border-red-500 focus:border-red-500"
                        )}
                        autoFocus
                        placeholder="Document name..."
                        disabled={isUploading}
                        maxLength={100}
                      />
                      {nameValidationError && (
                        <p className="text-xs text-red-500 mt-1">{nameValidationError}</p>
                      )}
                    </div>
                  ) : (
                    <div 
                      className="cursor-pointer group mb-2" 
                      onClick={toggleEditName}
                    >
                      <Label className="text-sm font-medium text-gray-700 mb-1 block">
                        Document Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg font-semibold text-black">
                          {docName || sanitizeInput(file.name.split('.')[0])}
                        </span>
                        {!isUploading && (
                          <Edit2 className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        )}
                      </div>
                      {nameValidationError && (
                        <p className="text-xs text-red-500 mt-1">{nameValidationError}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-500 bg-white rounded-lg py-1 px-3 border border-gray-200">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {fileExtension}
                    </span>
                    <span className="flex items-center gap-1">
                      📁 {fileSize}
                    </span>
                  </div>
                </div>
                
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded p-2 ml-2"
                  onClick={handleRemoveFile}
                  disabled={isUploading}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                ref={textareaRef}
                value={description}
                onChange={handleTextareaChange}
                placeholder="Describe little bit about this document..."
                className={cn(
                  "w-full resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-black placeholder-gray-400 min-h-[100px] max-h-[120px] overflow-y-auto rounded-md",
                  descriptionValidationError && "border-red-500 focus:border-red-500"
                )}
                required
                disabled={isUploading}
                style={{
                  height: description ? 'auto' : '100px'
                }}
                maxLength={200}
              />
              {descriptionValidationError && (
                <p className="text-xs text-red-500 mt-1">{descriptionValidationError}</p>
              )}
              <div className="flex justify-between text-xs text-gray-500">
                <span className="text-gray-500">
                  Only text content allowed
                </span>
                <span className={cn(
                  "font-medium", 
                  description.length > 160 && "text-red-500"
                )}>
                  {description.length}/200
                </span>
              </div>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    {uploadStatus === 'success' ? 'Finalizing...' : 'Uploading...'}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress 
                  value={progress} 
                  className="h-2 [&>div]:bg-blue-600" 
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className={cn(
                  "flex-1 px-6 py-2.5 rounded-md",
                  isUploading 
                    ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                )}
                disabled={isUploading || !description.trim() || !docName.trim() || nameValidationError || descriptionValidationError}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {progress > 0 ? `Uploading ${Math.round(progress)}%` : 'Uploading...'}
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Success Message */}
        {uploadStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Upload completed successfully!</span>
            </div>
          </div>
        )}
      </form>
   
  );
}