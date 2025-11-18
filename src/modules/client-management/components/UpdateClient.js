

// components/client/EditClientForm.js

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import DOMPurify from 'dompurify';
import { toast } from 'sonner';
import { FiGlobe, FiUpload, FiX, FiEye, FiCheck, FiFileText } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

import {
  updateClient,
  fetchClientById,
  resetForm,
} from '@/modules/client-management/slices/clientSlice';
import { fetchIndustries } from '@/modules/master/slices/industriesMasterSlice';

const countries = [
  { name: "India", code: "+91" }, { name: "United States", code: "+1" }, { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" }, { name: "Australia", code: "+61" }, { name: "Germany", code: "+49" },
  { name: "France", code: "+33" }, { name: "UAE", code: "+971" }, { name: "Singapore", code: "+65" },
  { name: "Japan", code: "+81" }, { name: "Saudi Arabia", code: "+966" }, { name: "South Africa", code: "+27" },
  { name: "Brazil", code: "+55" }, { name: "Mexico", code: "+52" }, { name: "Russia", code: "+7" },
  { name: "China", code: "+86" }, { name: "Indonesia", code: "+62" }, { name: "Pakistan", code: "+92" },
  { name: "Nigeria", code: "+234" }, { name: "Bangladesh", code: "+880" },
];

const sanitize = (str) => DOMPurify.sanitize(String(str || "").trim());
const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
const validatePhone = (phone) => /^\+\d{1,4}\s\d{5}\s\d{5}$/.test(phone);
const validateWebsite = (url) => !url || /^https?:\/\/.+/i.test(url);

export default function EditClientForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const { id: clientId } = params;

  const { formData: reduxFormData, addLoading, successMessage, error } = useSelector((state) => state.client);
  const { industries } = useSelector((state) => state.industries);

  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const countryRef = useRef(null);
  const industryRef = useRef(null);

  const [formData, setFormData] = useState({
    clientName: "", industryType: "", contactPersonName: "", contactEmail: "",
    contactNo: "+91 ", country: "India", website: "", address: "", onboardingDate: "",
    fileData: [], existingFiles: [],
  });

  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneInput, setPhoneInput] = useState("");
  const [uploadProgress, setUploadProgress] = useState({});
  const [previewFile, setPreviewFile] = useState(null);

  // FINAL FIX: Local flag to trigger redirect AFTER success
  const [updateCompleted, setUpdateCompleted] = useState(false);

  useEffect(() => {
    if (clientId) dispatch(fetchClientById(clientId));
    dispatch(fetchIndustries());
  }, [clientId, dispatch]);

  // Sync Redux data → Local form
  useEffect(() => {
    if (reduxFormData) {
      setFormData({
        clientName: reduxFormData.clientName || "",
        industryType: reduxFormData.industryType || "",
        contactPersonName: reduxFormData.contactPersonName || "",
        contactEmail: reduxFormData.contactEmail || "",
        contactNo: reduxFormData.contactNo || "+91 ",
        country: reduxFormData.country || "India",
        website: reduxFormData.website || "",
        address: reduxFormData.address || "",
        onboardingDate: reduxFormData.onboardingDate?.split('T')[0] || "",
        fileData: [],
        existingFiles: reduxFormData.fileData || [],
      });

      const match = reduxFormData.contactNo?.match(/(\d{10})$/);
      if (match) {
        setPhoneInput(match[1]);
        const code = reduxFormData.contactNo.split(' ')[0];
        const country = countries.find(c => c.code === code) || countries[0];
        setSelectedCountry(country);
      }
    }
  }, [reduxFormData]);

  // SUCCESS → TOAST + REDIRECT (GUARANTEED)
  useEffect(() => {
    if (updateCompleted) {
      toast.success("Client updated successfully!");
      router.push("/client/all");
      dispatch(resetForm());
      setUpdateCompleted(false); // Reset for future updates
    }
  }, [updateCompleted, router, dispatch]);

  // Error toast
  useEffect(() => {
    if (error) toast.error(error || "Update failed");
  }, [error]);

  // Click outside → close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) setIsCountryOpen(false);
      if (industryRef.current && !industryRef.current.contains(e.target)) setIsIndustryOpen(false);
      if (formRef.current && !formRef.current.contains(e.target)) setPreviewFile(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isFormFilled = () => {
    return (
      formData.clientName.trim() &&
      formData.industryType &&
      formData.contactPersonName.trim() &&
      formData.contactEmail.trim() &&
      formData.contactNo.trim().length > 5 &&
      formData.address.trim()
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanValue = sanitize(value);
    if (name === "website") {
      cleanValue = cleanValue.replace(/^https?:\/\//i, "");
      if (cleanValue && !/^https?:\/\//i.test(cleanValue)) cleanValue = "https://" + cleanValue;
    }
    setFormData(prev => ({ ...prev, [name]: cleanValue }));
  };

  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneInput(digits);
    const formatted = digits 
      ? `${selectedCountry.code} ${digits.replace(/(\d{5})(\d{5})/, "$1 $2")}`
      : `${selectedCountry.code} `;
    setFormData(prev => ({ ...prev, contactNo: formatted }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFormData(prev => ({ ...prev, country: country.name }));
    const digits = phoneInput;
    const formatted = digits 
      ? `${country.code} ${digits.replace(/(\d{5})(\d{5})/, "$1 $2")}`
      : `${country.code} `;
    setFormData(prev => ({ ...prev, contactNo: formatted }));
    setIsCountryOpen(false);
  };

  const handleIndustrySelect = (industry) => {
    setFormData(prev => ({ ...prev, industryType: industry }));
    setIsIndustryOpen(false);
  };

  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === "dragenter" || e.type === "dragover"); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files); };

  const handleFiles = (files) => {
    const newFiles = Array.from(files);
    const validFiles = [];
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024;

    newFiles.forEach(file => {
      if (!allowed.includes(file.type)) toast.error(`${file.name}: Invalid type`);
      else if (file.size > maxSize) toast.error(`${file.name}: Max 5MB`);
      else {
        validFiles.push(file);
        setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
        simulateUpload(file.name);
      }
    });

    if (validFiles.length) {
      setFormData(prev => ({ ...prev, fileData: [...prev.fileData, ...validFiles] }));
      toast.success(`${validFiles.length} file(s) added`);
    }
  };

  const simulateUpload = (name) => {
    let p = 0;
    const int = setInterval(() => {
      p += 25;
      setUploadProgress(prev => ({ ...prev, [name]: p }));
      if (p >= 100) {
        clearInterval(int);
        setTimeout(() => setUploadProgress(prev => { const { [name]: _, ...rest } = prev; return rest; }), 600);
      }
    }, 150);
  };

  const removeNewFile = (i) => setFormData(prev => ({ ...prev, fileData: prev.fileData.filter((_, idx) => idx !== i) }));
  const removeExistingFile = (i) => setFormData(prev => ({ ...prev, existingFiles: prev.existingFiles.filter((_, idx) => idx !== i) }));

  const viewFile = (file) => {
    const url = file.data ? URL.createObjectURL(file.data) : file.url;
    setPreviewFile({ url, name: file.name, type: file.type });
  };

  const closePreview = () => {
    if (previewFile?.url) URL.revokeObjectURL(previewFile.url);
    setPreviewFile(null);
  };

  // FINAL SUBMIT – 100% SUCCESS → TOAST + REDIRECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    const name = sanitize(formData.clientName);
    const person = sanitize(formData.contactPersonName);
    const email = sanitize(formData.contactEmail);
    const address = sanitize(formData.address);
    const website = formData.website || "";

    if (!name || name.length < 2) newErrors.clientName = "Minimum 2 characters";
    if (!formData.industryType) newErrors.industryType = "Required";
    if (!person || person.length < 2) newErrors.contactPersonName = "Minimum 2 characters";
    if (!email || !validateEmail(email)) newErrors.contactEmail = "Invalid email";
    if (!validatePhone(formData.contactNo)) newErrors.contactNo = "Enter 10-digit number";
    if (website && !validateWebsite(website)) newErrors.website = "Must start with http:// or https://";
    if (!address || address.length < 10) newErrors.address = "Address too short";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix all errors");
      return;
    }

    const payload = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      if (k === "fileData") v.forEach(f => payload.append("fileData", f));
      else if (k !== "existingFiles" && v) payload.append(k, v);
    });

    const deletedFiles = reduxFormData.fileData
      .filter((f) => !formData.existingFiles.some(ef => ef._id === f._id))
      .map(f => f._id);
    if (deletedFiles.length > 0) payload.append("filesToDelete", JSON.stringify(deletedFiles));

    payload.append("clientId", clientId);

    try {
      await dispatch(updateClient(payload)).unwrap();
      setUpdateCompleted(true); // TRIGGER TOAST + REDIRECT
    } catch (err) {
      // Error already shown via Redux
    }
  };

  const getFileIcon = (type) => {
    if (type?.includes("pdf")) return <FiFileText className="w-5 h-5 text-red-600" />;
    if (type?.includes("image")) return <FiFileText className="w-5 h-5 text-green-600" />;
    if (type?.includes("word")) return <FiFileText className="w-5 h-5 text-blue-600" />;
    return <FiFileText className="w-5 h-5 text-gray-600" />;
  };

  return (
    <>
      <div ref={formRef} className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center sm:text-left flex items-center justify-between">
            <button onClick={() => router.back()} className="inline-flex items-center gap-2 bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Edit Client</h1>
            <div className="w-32" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <Label className="font-semibold">Client Name <span className="text-red-500">*</span></Label>
                  <Input name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Acme Corp" className="h-12" />
                  {errors.clientName && <p className="text-red-500 text-sm">{errors.clientName}</p>}
                </div>

                <div ref={industryRef} className="space-y-1 relative">
                  <Label className="font-semibold">Industry Type <span className="text-red-500">*</span></Label>
                  <div onClick={() => setIsIndustryOpen(!isIndustryOpen)} className="h-12 px-4 flex items-center justify-between bg-white border rounded-lg cursor-pointer hover:border-gray-400 w-full">
                    <span className="truncate">{formData.industryType || "Select Industry"}</span>
                    <svg className={`w-5 h-5 transition ${isIndustryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {isIndustryOpen && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border max-h-64 overflow-y-auto">
                      {industries.map(ind => (
                        <div key={ind._id} onClick={() => handleIndustrySelect(ind.Industryname)} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                          {ind.Industryname}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.industryType && <p className="text-red-500 text-sm mt-1">{errors.industryType}</p>}
                </div>

                <div className="space-y-1">
                  <Label className="font-semibold">Contact Person <span className="text-red-500">*</span></Label>
                  <Input name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="John Doe" className="h-12" />
                  {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName}</p>}
                </div>

                <div className="space-y-1">
                  <Label className="font-semibold">Email <span className="text-red-500">*</span></Label>
                  <Input name="contactEmail" type="email" value={formData.contactEmail} onChange={handleChange} placeholder="john@acme.com" className="h-12" />
                  {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail}</p>}
                </div>

                <div ref={countryRef} className="space-y-1 relative">
                  <Label className="font-semibold">Phone Number <span className="text-red-500">*</span></Label>
                  <div className="flex h-12">
                    <div onClick={() => setIsCountryOpen(prev => !prev)} className="h-full px-4 flex items-center gap-2 bg-white border rounded-l-lg cursor-pointer hover:bg-gray-50 whitespace-nowrap min-w-24 justify-center">
                      <span className="text-sm font-medium">{selectedCountry.code}</span>
                      <svg className={`w-4 h-4 transition ${isCountryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <Input value={phoneInput} onChange={handlePhoneChange} placeholder="63700 73215" className="rounded-l-none h-full font-mono" maxLength="10" />
                  </div>
                  {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
                  {isCountryOpen && (
                    <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white rounded-lg shadow-2xl border border-gray-200 max-h-64 overflow-y-auto">
                      {countries.map((c) => (
                        <div key={c.code} onClick={() => handleCountrySelect(c)} className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center justify-between border-b border-gray-100 last:border-0">
                          <span className="font-medium">{c.name}</span>
                          <span className="text-gray-600 font-mono text-sm">{c.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <Label className="font-semibold">Onboarding Date</Label>
                  <Input value={formData.onboardingDate} readOnly disabled className="h-12 bg-gray-100 cursor-not-allowed" />
                </div>

                <div className="space-y-1">
                  <Label className="font-semibold">Website (optional)</Label>
                  <div className="flex h-12">
                    <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 rounded-l-lg"><FiGlobe className="w-5 h-5 text-gray-600" /></span>
                    <Input name="website" value={(formData.website || "").replace(/^https?:\/\//i, "")} onChange={handleChange} placeholder="acme.com" className="rounded-l-none h-full" />
                  </div>
                  {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
                </div>

                <div className="space-y-1">
                  <Label className="font-semibold">Address <span className="text-red-500">*</span></Label>
                  <Textarea name="address" value={formData.address} onChange={handleChange} rows={4} placeholder="123 Business St, Mumbai" />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
              </div>

              {/* RIGHT COLUMN - FILES */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="font-semibold">Client Documents</Label>
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}`}
                    onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}>
                    <input ref={fileInputRef} type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={(e) => e.target.files && handleFiles(e.target.files)} className="hidden" />
                    <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-3">Drag & drop or click to upload</p>
                    <p className="text-sm text-gray-500">Max 5MB</p>
                  </div>

                  {(formData.fileData.length > 0 || formData.existingFiles.length > 0) && (
                    <div className="space-y-3">
                      <p className="font-medium">{formData.fileData.length + formData.existingFiles.length} file(s)</p>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {formData.fileData.map((file, i) => (
                          <div key={`new-${i}`} className="bg-white border rounded-lg p-4 flex items-center justify-between group hover:shadow-md">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {getFileIcon(file.type)}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{file.name}</p>
                                <p className="text-xs text-gray-500">New • {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                            </div>
                            {uploadProgress[file.name] !== undefined ? (
                              <Progress value={uploadProgress[file.name]} className="w-24 h-2" />
                            ) : (
                              <div className="flex gap-2">
                                <Button type="button" variant="ghost" size="icon" onClick={() => viewFile(file)}><FiEye className="h-4 w-4" /></Button>
                                <Button type="button" variant="ghost" size="icon" onClick={() => removeNewFile(i)}><FiX className="h-4 w-4 text-red-500" /></Button>
                              </div>
                            )}
                          </div>
                        ))}
                        {formData.existingFiles.map((file, i) => (
                          <div key={file._id} className="bg-white border rounded-lg p-4 flex items-center justify-between group hover:shadow-md">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {getFileIcon(file.type || "application/pdf")}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{file.name}</p>
                                <p className="text-xs text-gray-500">Existing</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button type="button" variant="ghost" size="icon" onClick={() => viewFile(file)}><FiEye className="h-4 w-4" /></Button>
                              <Button type="button" variant="ghost" size="icon" onClick={() => removeExistingFile(i)}><FiX className="h-4 w-4 text-red-500" /></Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <Button
                type="submit"
                size="lg"
                disabled={!isFormFilled() || addLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-lg rounded-xl shadow-lg disabled:opacity-50 min-w-64 flex items-center gap-3"
              >
                {addLoading ? <>Updating...</> : <><FiCheck className="h-6 w-6" /> Update Client</>}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closePreview}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-full overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold truncate pr-4">{previewFile.name}</h3>
              <Button variant="ghost" size="icon" onClick={closePreview}><FiX className="h-6 w-6" /></Button>
            </div>
            <div className="flex-1 p-6 bg-gray-100">
              {previewFile.type?.includes("pdf") ? (
                <iframe src={previewFile.url} className="w-full h-full min-h-96 rounded-lg border" />
              ) : (
                <div className="bg-white border-2 border-dashed rounded-xl w-full h-96 flex flex-col items-center justify-center">
                  <FiFileText className="h-16 w-16 text-gray-400 mb-4" />
                  <p className="text-gray-600">Preview not available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}