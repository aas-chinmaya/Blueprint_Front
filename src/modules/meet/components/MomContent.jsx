// "use client";
// import { useEffect, useState, useRef, useCallback } from "react";
// import { format, isAfter, addHours } from "date-fns";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMoMByMeetingId,
//   resetMoMByMeetingId,
//   createMoM,
//   updateMoM,
//   fetchMoMView,
// } from "@/modules/meet/slices/momSlice";
// import { submitCause } from "@/modules/escalation/slices/causeSlice";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Loader2,
//   Edit2,
//   AlertCircle,
//   FileText,
//   Users,
//   Clock,
//   Signature,
//   User,
// } from "lucide-react";
// import { toast } from "sonner";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import Image from "next/image";

// export default function MomContent({ meeting, meetingId }) {
//   const dispatch = useDispatch();
//   const { momByMeetingId, momByMeetingIdLoading, momView, momViewLoading } = useSelector(
//     (state) => state.mom
//   );
//   const [mode, setMode] = useState("view"); // "view", "form", "form-readonly"
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [isTimeExceeded, setIsTimeExceeded] = useState(false);
//   const [isWithinOneHour, setIsWithinOneHour] = useState(false);
//   const [reasonForDelay, setReasonForDelay] = useState("");
//   const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
//   const [signatureFile, setSignatureFile] = useState(null);
//   const [signaturePreview, setSignaturePreview] = useState(null);
//   const containerRef = useRef(null);
//   const { currentUser } = useCurrentUser();

//   // Form state for creating/editing MOM
//   const [momForm, setMomForm] = useState({
//     agenda: meeting?.agenda || "",
//     meetingMode: meeting?.mode || "Offline",
//     duration: "",
//     participants: "",
//     summary: "",
//     notes: "",
//     createdBy: currentUser?.name || "",
//     meetingId: meetingId || "",
//     status: "draft",
//   });

//   // Helper: Format time (e.g., "10:00 AM")
//   const formatTimes = (dateTime) => {
//     if (!dateTime) return "";
//     try {
//       return format(new Date(dateTime), "p");
//     } catch {
//       return "";
//     }
//   };

//   // Helper: Compute duration as "startTime - endTime"
//   const getDurationString = useCallback(() => {
//     const start = meeting?.startTime ? new Date(meeting.startTime) : null;
//     const end = meeting?.endTime ? new Date(meeting.endTime) : null;
//     if (!start || !end || isNaN(start) || isNaN(end)) return "N/A";
//     if (start >= end) return "Invalid duration (end time before start)";
//     return `${formatTimes(start)} - ${formatTimes(end)}`;
//   }, [meeting]);

//   // Helper: Parse attendees from ourParty and contactParty
//   const getAttendeesArray = useCallback(() => {
//     const ourPartyAttendees = (meeting?.ourParty || []).map(
//       (p) => p.name || p.email || "Unknown"
//     );
//     const contactPartyAttendees = (meeting?.contactParty || []).map(
//       (p) => p.fullName !== "undefined undefined" ? p.fullName : p.email || "Unknown"
//     );
//     return [...ourPartyAttendees, ...contactPartyAttendees].filter(Boolean);
//   }, [meeting]);

//   // Helper: Check meeting time status
//   const checkMeetingTimeStatus = useCallback(() => {
//     if (!meeting?.endTime) return { isTimeExceeded: false, isWithinOneHour: false };
//     const endTime = new Date(meeting.endTime);
//     const now = new Date();
//     const oneHourAfterEnd = addHours(endTime, 1);
//     return {
//       isTimeExceeded: isAfter(now, endTime),
//       isWithinOneHour: isAfter(now, endTime) && !isAfter(now, oneHourAfterEnd),
//     };
//   }, [meeting]);

//   // Effect: Initialize form and check time status
//   useEffect(() => {
//     const { isTimeExceeded, isWithinOneHour } = checkMeetingTimeStatus();
//     setIsTimeExceeded(isTimeExceeded);
//     setIsWithinOneHour(isWithinOneHour);

//     const participants = momByMeetingId?.participants
//       ? momByMeetingId.participants.join(", ")
//       : getAttendeesArray().join(", ");

//     if (momByMeetingId && momByMeetingId.meetingId === meetingId) {
//       setMomForm({
//         agenda: momByMeetingId.agenda || meeting?.agenda || "",
//         meetingMode: momByMeetingId.meetingMode || meeting?.mode || "Offline",
//         duration: momByMeetingId.duration || getDurationString() || "",
//         participants: participants,
//         summary: momByMeetingId.summary || "",
//         notes: momByMeetingId.notes || "",
//         createdBy: momByMeetingId.createdBy || currentUser?.name || "",
//         meetingId: meetingId || "",
//         status: momByMeetingId.status || "draft",
//       });
//       setMode(momByMeetingId.status === "final" ? "view" : "form-readonly");
//       setIsEditMode(false);
//     } else {
//       setMomForm({
//         agenda: meeting?.agenda || "",
//         meetingMode: meeting?.mode || "Offline",
//         duration: getDurationString() || "",
//         participants: getAttendeesArray().join(", "),
//         summary: "",
//         notes: "",
//         createdBy: currentUser?.name || "",
//         meetingId: meetingId || "",
//         status: "draft",
//       });
//       setMode("form");
//       setIsEditMode(false);
//     }

//     setReasonForDelay(momByMeetingId?.reasonForDelay || "");
//     setIsAgreedToTerms(false);
//     setSignatureFile(null);
//     setSignaturePreview(null);
//   }, [momByMeetingId, meetingId, checkMeetingTimeStatus, currentUser?.name, meeting, getAttendeesArray, getDurationString]);

//   // Effect: Fetch MOM data
//   useEffect(() => {
//     if (meetingId) {
//       dispatch(fetchMoMByMeetingId(meetingId));
//     }
//   }, [meetingId, dispatch]);

//   // Effect: Fetch MOM view when available
//   useEffect(() => {
//     if (momByMeetingId?.momId && mode === "view") {
//       dispatch(fetchMoMView(momByMeetingId.momId));
//       console.log(momByMeetingId);
      
//     }
//   }, [momByMeetingId?.momId, mode, dispatch]);

//   // Effect: Clean up blob URL and reset state
//   useEffect(() => {
//     return () => {
//       if (momView?.pdfUrl) {
//         URL.revokeObjectURL(momView.pdfUrl);
//       }
//       if (signaturePreview) {
//         URL.revokeObjectURL(signaturePreview);
//       }
//       dispatch(resetMoMByMeetingId());
//     };
//   }, [momView?.pdfUrl, signaturePreview, dispatch]);

//   // Handler: Form input changes
//   const handleMomFormChange = (e, field) => {
//     setMomForm({ ...momForm, [field]: e.target.value });
//   };

//   // Handler: Reason for delay change
//   const handleReasonForDelayChange = (e) => {
//     setReasonForDelay(e.target.value);
//   };

//   // Handler: Signature file change
//   const handleSignatureFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
//       setSignatureFile(file);
//       setSignaturePreview(URL.createObjectURL(file));
//     } else {
//       toast.error("Please upload a valid image file (.png, .jpg, .jpeg).");
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     }
//   };

//   // Handler: Terms agreement checkbox
//   const handleTermsChange = (checked) => {
//     setIsAgreedToTerms(checked);
//   };

//   // Helper: Check if all required fields are filled
//   const areRequiredFieldsFilled = (status = "draft") => {
//     const baseFields = momForm.createdBy.trim() && momForm.summary.trim();
//     if (status === "final") {
//       return baseFields && signatureFile && (!isTimeExceeded || (reasonForDelay.trim() && isAgreedToTerms));
//     }
//     return baseFields;
//   };
// console.log(momByMeetingId);

//   // Handler: Form submission
//   const handleSubmit = async (status) => {
//     if (!momForm.createdBy.trim()) {
//       toast.info("Please enter the name of the person who created the MOM.");
//       return;
//     }
//     if (!momForm.summary.trim()) {
//       toast.info("Please enter a summary.");
//       return;
//     }
//     if (status === "final" && !signatureFile) {
//       toast.info("Please upload a signature image.");
//       return;
//     }
//     if (status === "final" && isTimeExceeded && !isEditMode && (!reasonForDelay.trim() || !isAgreedToTerms)) {
//       toast.info("Please provide a reason for the delay and agree to the terms.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("agenda", momForm.agenda || "");
//       formData.append("meetingMode", momForm.meetingMode || "Offline");
//       formData.append("duration", momForm.duration || "");
//       formData.append("participants", JSON.stringify(momForm.participants.split(",").map(p => p.trim()).filter(Boolean)));
//       formData.append("summary", momForm.summary);
//       formData.append("notes", momForm.notes);
//       formData.append("createdBy", momForm.createdBy);
//       formData.append("meetingId", momForm.meetingId);
//       formData.append("status", status);
//       if (signatureFile) {
//         formData.append("signature", signatureFile);
//       }
//       if (status === "final" && isTimeExceeded && !isEditMode) {
//         formData.append("reasonForDelay", reasonForDelay);
//       }

//       if (status === "final" && isTimeExceeded && !isEditMode) {
//         await dispatch(
//           submitCause({
//             meetingId: meetingId,
//             reason: reasonForDelay,
//             submittedBy: currentUser?.name || momForm.createdBy,
//           })
//         ).unwrap();
//         toast.success("Cause for delay submitted successfully!");
//       }

//       if (isEditMode && momByMeetingId) {
//         await dispatch(updateMoM(formData)).unwrap();
//         toast.success(`MOM ${status === "draft" ? "updated as draft" : "finalized"} successfully!`);
//       } else {
//         await dispatch(createMoM(formData)).unwrap();
//         toast.success(`MOM ${status === "draft" ? "saved as draft" : "created"} successfully!`);
//       }
//       setMode("view");
//       setIsEditMode(false);
//       setReasonForDelay("");
//       setIsAgreedToTerms(false);
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     } catch (error) {
//       toast.error(`Failed to ${isEditMode ? "update" : "create"} MOM: ${error?.message || "Unknown error"}`);
//     }
//   };

//   // Handler: Toggle to edit mode
//   const handleToggleMode = () => {
//     if (mode === "view") {
//       setMode("form");
//       setIsEditMode(momByMeetingId ? true : false);
//     } else {
//       setMode("view");
//       setIsEditMode(false);
//       setReasonForDelay("");
//       setIsAgreedToTerms(false);
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     }
//   };

//   // Loading state
//   if (momByMeetingIdLoading || momViewLoading) {
//     return (
//       <div className="min-h-[400px] bg-background rounded-xl flex items-center justify-center shadow-md">
//         <div className="flex flex-col items-center gap-4">
//           <Loader2 className="h-12 w-12 text-teal-600 animate-spin" />
//           <span className="text-teal-600 text-lg font-semibold">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full p-4 sm:p-6 bg-background rounded-xl shadow-md">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h2 className="text-xl sm:text-2xl font-bold text-teal-600 flex items-center">
//           <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
//           {mode === "form" || mode === "form-readonly"
//             ? isEditMode
//               ? "Edit Minutes of Meeting"
//               : "Create Minutes of Meeting"
//             : "Meeting Details"}
//         </h2>
//         {mode === "view" && momByMeetingId && (
//           <Button
//             variant="ghost"
//             onClick={handleToggleMode}
//             className="text-teal-600 hover:bg-teal-50"
//             title="Edit MOM"
//           >
//             <Edit2 className="h-5 w-5" />
//           </Button>
//         )}
//       </div>

//       {/* Warning Messages */}
//       {isTimeExceeded && (!momByMeetingId || !isWithinOneHour) && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center text-sm">
//           <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
//           <span>
//             {!momByMeetingId
//               ? isWithinOneHour
//                 ? "Please complete MOM within one hour of meeting end time."
//                 : "Meeting has ended, and no MOM has been created."
//               : "Meeting has ended, and MOM creation is delayed beyond one hour."}
//           </span>
//         </div>
//       )}

//       {/* Form or MOM Preview */}
//       <div className="space-y-4">
//         {mode === "form" || mode === "form-readonly" ? (
//           // Form View
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-800">
//               {isEditMode ? "Edit MOM" : mode === "form-readonly" ? "View MOM (Draft)" : "Create MOM"}
//             </h3>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Agenda
//               </Label>
//               <Textarea
//                 value={momForm.agenda}
//                 onChange={(e) => handleMomFormChange(e, "agenda")}
//                 placeholder="Enter meeting agenda..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Users className="h-5 w-5 mr-2" />
//                 Meeting Mode
//               </Label>
//               <Input
//                 value={momForm.meetingMode}
//                 onChange={(e) => handleMomFormChange(e, "meetingMode")}
//                 placeholder="Enter meeting mode (e.g., Offline, Online)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Clock className="h-5 w-5 mr-2" />
//                 Duration
//               </Label>
//               <Input
//                 value={momForm.duration}
//                 onChange={(e) => handleMomFormChange(e, "duration")}
//                 placeholder="Enter duration (e.g., 10:00 AM - 11:00 AM)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Users className="h-5 w-5 mr-2" />
//                 Participants
//               </Label>
//               <Textarea
//                 value={momForm.participants}
//                 onChange={(e) => handleMomFormChange(e, "participants")}
//                 placeholder="Enter participants (comma-separated)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Summary
//               </Label>
//               <Textarea
//                 value={momForm.summary}
//                 onChange={(e) => handleMomFormChange(e, "summary")}
//                 placeholder="Enter meeting summary..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Notes
//               </Label>
//               <Textarea
//                 value={momForm.notes}
//                 onChange={(e) => handleMomFormChange(e, "notes")}
//                 placeholder="Enter additional notes..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             {isTimeExceeded && !isEditMode && mode !== "form-readonly" && (
//               <>
//                 <div>
//                   <Label className="text-teal-600 font-semibold flex items-center">
//                     <AlertCircle className="h-5 w-5 mr-2 text-red-700" />
//                     Reason for Delay
//                   </Label>
//                   <Textarea
//                     value={reasonForDelay}
//                     onChange={handleReasonForDelayChange}
//                     placeholder="Enter reason for delay..."
//                     className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                     rows={3}
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="terms"
//                     checked={isAgreedToTerms}
//                     onCheckedChange={handleTermsChange}
//                     className="border-gray-300 data-[state=checked]:bg-teal-600"
//                     disabled={mode === "form-readonly" && !isEditMode}
//                   />
//                   <Label htmlFor="terms" className="text-teal-600 font-semibold text-sm sm:text-base">
//                     I agree to the cause terms and conditions
//                   </Label>
//                 </div>
//               </>
//             )}
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Signature className="h-5 w-5 mr-2" />
//                 Signature (Image)
//               </Label>
//               <Input
//                 type="file"
//                 accept="image/png,image/jpeg,image/jpg"
//                 onChange={handleSignatureFileChange}
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base"
//                 disabled={mode === "form-readonly" && !isEditMode}
//               />
//               {signaturePreview && (
//                 <div className="mt-2">
//                   <Image
//                     src={signaturePreview}
//                     alt="Signature Preview"
//                     width={120}
//                     height={80}
//                     className="rounded-md border border-gray-300"
//                   />
//                 </div>
//               )}
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <User className="h-5 w-5 mr-2" />
//                 Created By
//               </Label>
//               <Input
//                 value={momForm.createdBy}
//                 onChange={(e) => handleMomFormChange(e, "createdBy")}
//                 placeholder="Recorder's name..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div className="flex justify-end gap-3">
//               {(isEditMode || mode === "form-readonly") && (
//                 <Button
//                   variant="outline"
//                   className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text.voice-mode sm:text-base"
//                   onClick={() => setMode("view")}
//                 >
//                   Cancel
//                 </Button>
//               )}
//               {mode !== "form-readonly" || isEditMode ? (
//                 <>
//                   <Button
//                     variant="outline"
//                     className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-sm sm:text-base"
//                     onClick={() => handleSubmit("draft")}
//                     disabled={momByMeetingIdLoading || !areRequiredFieldsFilled("draft")}
//                   >
//                     {momByMeetingIdLoading ? (
//                       <>
//                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                         Saving...
//                       </>
//                     ) : (
//                       "Save as Draft"
//                     )}
//                   </Button>
//                   <Button
//                     className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm sm:text-base"
//                     onClick={() => handleSubmit("final")}
//                     disabled={momByMeetingIdLoading || !areRequiredFieldsFilled("final")}
//                   >
//                     {momByMeetingIdLoading ? (
//                       <>
//                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                         Submitting...
//                       </>
//                     ) : isEditMode ? (
//                       "Finalize MOM"
//                     ) : (
//                       "Create MOM"
//                     )}
//                   </Button>
//                 </>
//               ) : (
//                 <Button
//                   className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm sm:text-base"
//                   onClick={handleToggleMode}
//                 >
//                   <Edit2 className="h-4 w-4 mr-1" />
//                   Edit MOM
//                 </Button>
//               )}
//             </div>
//           </div>
//         ) : (
//           // View Mode: MOM Preview
//           <div className="space-y-4">
//             {momByMeetingId && momView?.pdfUrl && (
//               <div>
//                 <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg border border-gray-300 overflow-hidden">
//                   <iframe
//                     src={momView.pdfUrl}
//                     width="100%"
//                     height="100%"
//                     className="rounded-lg"
//                     title="MOM PDF Preview"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoMByMeetingId,
  createMoM,
  updateMoM,
  fetchMoMView,
} from "@/modules/meet/slices/momSlice";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, ExternalLink, Edit } from "lucide-react";
import { toast } from "sonner";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";

export default function MomContent({ meeting, meetingId }) {
  const dispatch = useDispatch();
  const { momByMeetingId, momView } = useSelector((state) => state.mom);
  const { currentUser } = useCurrentUser();

  const [isEditing, setIsEditing] = useState(false);

  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");
  const [signatureFile, setSignatureFile] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  // Auto-fill when editing
  useEffect(() => {
    if (momByMeetingId && isEditing) {
      setSummary(momByMeetingId.summary || "");
      setNotes(momByMeetingId.notes || "");
      setSignaturePreview(momByMeetingId.signatureUrl || null);
    }
  }, [momByMeetingId, isEditing]);

  // Load MoM
  useEffect(() => {
    if (meetingId) dispatch(fetchMoMByMeetingId(meetingId));
  }, [meetingId, dispatch]);

  // Load PDF if final
  useEffect(() => {
    if (momByMeetingId?.status === "final" && momByMeetingId.momId) {
      dispatch(fetchMoMView(momByMeetingId.momId));
    }
  }, [momByMeetingId]);

  const agenda = momByMeetingId?.agenda || meeting?.agenda || "N/A";
  const date = momByMeetingId?.date || meeting?.date || "N/A";
  const meetingMode = momByMeetingId?.meetingMode || meeting?.mode || "Offline";
  const createdBy = momByMeetingId?.createdBy || currentUser?.name || "Unknown";
  const formatTime = (date) => (date ? format(new Date(date), "p") : "N/A");
  const duration = meeting?.startTime && meeting?.endTime
    ? `${formatTime(meeting.startTime)} - ${formatTime(meeting.endTime)}`
    : "N/A";
  const participants = (() => {
    const our = (meeting?.ourParty || []).map(p => p.name || p.email || "").filter(Boolean);
    const contact = (meeting?.contactParty || []).map(p => p.fullName && p.fullName !== "undefined undefined" ? p.fullName : p.email || "").filter(Boolean);
    return [...our, ...contact].join(", ") || "None";
  })();

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file && /^image\/(png|jpeg|jpg)$/.test(file.type)) {
      setSignatureFile(file);
      setSignaturePreview(URL.createObjectURL(file));
    } else {
      toast.error("Only PNG/JPG allowed");
      e.target.value = "";
    }
  };

  const openPdf = () => {
    if (momView?.pdfUrl) window.open(momView.pdfUrl, "_blank");
  };

  const handleSubmit = async (status) => {
    if (!summary.trim()) return toast.error("Summary is required");

    if (status === "final" && !signatureFile && !momByMeetingId?.signatureUrl) {
      return toast.error("Signature required to finalize");
    }

    const formData = new FormData();
    formData.append("agenda", agenda);
    formData.append("meetingMode", meetingMode);
    formData.append("duration", duration);
    formData.append("participants", JSON.stringify(participants.split(",").map(p => p.trim())));
    formData.append("summary", summary);
    formData.append("notes", notes);
    formData.append("createdBy", createdBy);
    formData.append("meetingId", meetingId);
    formData.append("status", status);
    if (signatureFile) formData.append("signature", signatureFile);

    try {
      if (momByMeetingId) {
        await dispatch(updateMoM(formData)).unwrap();
        toast.success("MoM updated");
      } else {
        await dispatch(createMoM(formData)).unwrap();
        toast.success("MoM created");
      }
      dispatch(fetchMoMByMeetingId(meetingId));
      setIsEditing(false);
    } catch {
      toast.error("Failed to save");
    }
  };

  const isFinal = momByMeetingId?.status === "final";

  // CASE 1: MoM Exists → Tiny Clean Card
  if (momByMeetingId && !isEditing) {
    return (
      <div className="min-h-screen">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow transition-all duration-200">
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-600">MoM ID</p>
                <p className="text-sm font-semibold text-teal-600">#{momByMeetingId.momId}</p>
              </div>
              <span className={`ml-3 px-2.5 py-1 text-xs font-medium rounded-full ${
                isFinal ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}>
                {isFinal ? "Final" : "Draft"}
              </span>
            </div>

            <div>
              {isFinal ? (
                <Button size="sm" onClick={openPdf} className="bg-teal-600 hover:bg-teal-700">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CASE 2: No MoM OR Editing → Full Form (same for Create & Edit)
  return (
    <div className="min-h-screen  ">
      <h2 className="text-xl font-bold text-teal-700 mb-8 text-center">
        {momByMeetingId ? "Edit" : "Create"} Minutes of Meeting
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 text-sm">
        <div><Label className="text-teal-600 text-xs">Date</Label><p className="mt-1 p-3 bg-gray-50 rounded">{date}</p></div>
        <div><Label className="text-teal-600 text-xs">Duration</Label><p className="mt-1 p-3 bg-gray-50 rounded">{duration}</p></div>
        <div><Label className="text-teal-600 text-xs">Mode</Label><p className="mt-1 p-3 bg-gray-50 rounded">{meetingMode}</p></div>
        <div className="md:col-span-2"><Label className="text-teal-600 text-xs">Participants</Label><p className="mt-1 p-3 bg-gray-50 rounded">{participants}</p></div>
        <div className="md:col-span-2"><Label className="text-teal-600 text-xs">Agenda</Label><p className="mt-1 p-3 bg-gray-50 rounded">{agenda}</p></div>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-teal-700 font-medium">Summary <span className="text-red-500">*</span></Label>
          <Textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Write meeting summary..."
            rows={6}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-teal-700 font-medium">Notes / Action Items</Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes or follow-ups..."
            rows={4}
            className="mt-2"
          />
        </div>

        {!isFinal && (
          <div>
            <Label className="text-teal-700 font-medium">
              Signature <span className="text-red-500">*</span> 
            </Label>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleSignatureChange}
              className="mt-2 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
            {(signaturePreview || momByMeetingId?.signatureUrl) && (
              <div className="mt-3">
                <Image
                  src={signaturePreview || momByMeetingId?.signatureUrl}
                  alt="Signature"
                  width={180}
                  height={70}
                  className="border rounded"
                />
              </div>
            )}
          </div>
        )}
                <div><Label className="text-teal-600 text-xs">Created By</Label><p className="mt-1 p-3 bg-gray-50 rounded">{createdBy}</p></div>

      </div>

      <div className="flex justify-end gap-3 mt-10">
        {!momByMeetingId && (
          <Button variant="outline" size="sm" onClick={() => handleSubmit("draft")} disabled={!summary.trim()}>
            Save Draft
          </Button>
        )}
        <Button
          size="sm"
          className="bg-teal-600 hover:bg-teal-700"
          onClick={() => handleSubmit("final")}
          disabled={!summary.trim() || (!signatureFile && !momByMeetingId?.signatureUrl)}
        >
          {momByMeetingId ? "Update & Finalize" : "Create & Finalize"}
        </Button>
      </div>
    </div>
  );
}