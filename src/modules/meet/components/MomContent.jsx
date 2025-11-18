















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

import { useEffect, useState, useCallback } from "react";
import { format, isAfter, addHours } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoMByMeetingId,
  resetMoMByMeetingId,
  createMoM,
  updateMoM,
  fetchMoMView,
} from "@/modules/meet/slices/momSlice";
import { submitCause } from "@/modules/escalation/slices/causeSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Loader2,
  Edit2,
  AlertCircle,
  FileText,
  Users,
  Clock,
  Signature,
  User,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";

export default function MomContent({ meeting, meetingId }) {
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const { momByMeetingId, momByMeetingIdLoading, momView, momViewLoading } = useSelector(
    (state) => state.mom
  );

  // === State ===
  const [mode, setMode] = useState("loading"); // "loading" | "view" | "form"
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTimeExceeded, setIsTimeExceeded] = useState(false);
  const [reasonForDelay, setReasonForDelay] = useState("");
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [signatureFile, setSignatureFile] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  const [momForm, setMomForm] = useState({
    agenda: "",
    meetingMode: "Offline",
    duration: "",
    participants: "",
    summary: "",
    notes: "",
    createdBy: currentUser?.name || "",
    meetingId: meetingId || "",
    status: "draft",
  });

  // === Helpers ===
  const formatTime = (dateTime) => {
    if (!dateTime) return "";
    try {
      return format(new Date(dateTime), "p");
    } catch {
      return "";
    }
  };

  const getDurationString = useCallback(() => {
    const start = meeting?.startTime ? new Date(meeting.startTime) : null;
    const end = meeting?.endTime ? new Date(meeting.endTime) : null;
    if (!start || !end || isNaN(start) || isNaN(end)) return "N/A";
    return `${formatTime(start)} - ${formatTime(end)}`;
  }, [meeting]);

  const getAttendeesArray = useCallback(() => {
    const our = (meeting?.ourParty || []).map((p) => p.name || p.email || "Unknown");
    const contact = (meeting?.contactParty || []).map(
      (p) => (p.fullName !== "undefined undefined" ? p.fullName : p.email) || "Unknown"
    );
    return [...our, ...contact].filter(Boolean);
  }, [meeting]);

  const checkTimeExceeded = useCallback(() => {
    if (!meeting?.endTime) return false;
    const end = new Date(meeting.endTime);
    const now = new Date();
    return isAfter(now, end);
  }, [meeting]);

  // === Effects ===
  useEffect(() => {
    if (meetingId) {
      dispatch(fetchMoMByMeetingId(meetingId));
    }
  }, [meetingId, dispatch]);

  useEffect(() => {
    setIsTimeExceeded(checkTimeExceeded());
  }, [checkTimeExceeded]);

  useEffect(() => {
    const attendees = getAttendeesArray().join(", ");
    const duration = getDurationString();

    if (momByMeetingId && momByMeetingId.meetingId === meetingId) {
      // MoM exists
      const participants = momByMeetingId.participants
        ? momByMeetingId.participants.join(", ")
        : attendees;

      setMomForm({
        agenda: momByMeetingId.agenda || meeting?.agenda || "",
        meetingMode: momByMeetingId.meetingMode || meeting?.mode || "Offline",
        duration: momByMeetingId.duration || duration,
        participants,
        summary: momByMeetingId.summary || "",
        notes: momByMeetingId.notes || "",
        createdBy: momByMeetingId.createdBy || currentUser?.name || "",
        meetingId,
        status: momByMeetingId.status || "draft",
      });

      setReasonForDelay(momByMeetingId.reasonForDelay || "");

      if (momByMeetingId.status === "final") {
        setMode("view");
      } else {
        setMode("form");
        setIsEditMode(true);
      }
    } else {
      // No MoM → create new
      setMomForm({
        agenda: meeting?.agenda || "",
        meetingMode: meeting?.mode || "Offline",
        duration,
        participants: attendees,
        summary: "",
        notes: "",
        createdBy: currentUser?.name || "",
        meetingId,
        status: "draft",
      });
      setMode("form");
      setIsEditMode(false);
    }

    setSignatureFile(null);
    setSignaturePreview(null);
    setIsAgreedToTerms(false);
  }, [
    momByMeetingId,
    meeting,
    meetingId,
    currentUser?.name,
    getAttendeesArray,
    getDurationString,
  ]);

  // Fetch PDF only in final view mode
  useEffect(() => {
    if (momByMeetingId?.momId && mode === "view" && momByMeetingId.status === "final") {
      dispatch(fetchMoMView(momByMeetingId.momId));
    }
  }, [momByMeetingId?.momId, mode, dispatch]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (momView?.pdfUrl) URL.revokeObjectURL(momView.pdfUrl);
      if (signaturePreview) URL.revokeObjectURL(signaturePreview);
      dispatch(resetMoMByMeetingId());
    };
  }, [momView?.pdfUrl, signaturePreview, dispatch]);

  // === Handlers ===
  const handleChange = (e, field) => {
    setMomForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      setSignatureFile(file);
      setSignaturePreview(URL.createObjectURL(file));
    } else {
      toast.error("Only .png, .jpg, .jpeg allowed.");
      setSignatureFile(null);
      setSignaturePreview(null);
    }
  };

  const validateForm = (status) => {
    const base = momForm.createdBy.trim() && momForm.summary.trim();
    if (status === "final") {
      return (
        base &&
        signatureFile &&
        (!isTimeExceeded || (reasonForDelay.trim() && isAgreedToTerms))
      );
    }
    return base;
  };

  const handleSubmit = async (status) => {
    if (!validateForm(status)) {
      return toast.error("Please fill all required fields.");
    }

    const formData = new FormData();
    formData.append("agenda", momForm.agenda);
    formData.append("meetingMode", momForm.meetingMode);
    formData.append("duration", momForm.duration);
    formData.append(
      "participants",
      JSON.stringify(momForm.participants.split(",").map((p) => p.trim()).filter(Boolean))
    );
    formData.append("summary", momForm.summary);
    formData.append("notes", momForm.notes);
    formData.append("createdBy", momForm.createdBy);
    formData.append("meetingId", momForm.meetingId);
    formData.append("status", status);
    if (signatureFile) formData.append("signature", signatureFile);
    if (status === "final" && isTimeExceeded && !isEditMode) {
      formData.append("reasonForDelay", reasonForDelay);
    }

    try {
      if (status === "final" && isTimeExceeded && !isEditMode) {
        await dispatch(
          submitCause({
            meetingId,
            reason: reasonForDelay,
            submittedBy: currentUser?.name || momForm.createdBy,
          })
        ).unwrap();
        toast.success("Delay reason submitted.");
      }

      if (isEditMode && momByMeetingId) {
        await dispatch(updateMoM(formData)).unwrap();
        toast.success(status === "draft" ? "MoM updated (draft)" : "MoM finalized");
      } else {
        await dispatch(createMoM(formData)).unwrap();
        toast.success(status === "draft" ? "MoM saved (draft)" : "MoM created");
      }

      setMode("view");
      setIsEditMode(false);
      setReasonForDelay("");
      setIsAgreedToTerms(false);
      setSignatureFile(null);
      setSignaturePreview(null);
    } catch (err) {
      toast.error(`Error: ${err?.message || "Unknown error"}`);
    }
  };

  const startEdit = () => {
    setMode("form");
    setIsEditMode(true);
  };

  // === Loading ===
  if (momByMeetingIdLoading || momViewLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-background rounded-xl shadow-md">
        <Loader2 className="h-12 w-12 text-teal-600 animate-spin" />
        <p className="mt-3 text-lg font-semibold text-teal-600">Loading MoM...</p>
      </div>
    );
  }

  // === Render ===
  return (
    <div className="w-full p-4 sm:p-6 bg-background rounded-xl shadow-md">
      {/* === VIEW MODE: MoM Finalized === */}
      {mode === "view" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-teal-600 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Minutes of Meeting
            </h2>
          </div>

          {/* No MoM → Show Create Button */}
          {!momByMeetingId && (
            <div className="flex justify-end">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => setMode("form")}
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Create MoM
              </Button>
            </div>
          )}

          {/* MoM Exists */}
          {momByMeetingId && (
            <div className="flex justify-end gap-3">
              {momByMeetingId.status === "final" ? (
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  onClick={() => momView?.pdfUrl && window.open(momView.pdfUrl, "_blank")}
                  disabled={!momView?.pdfUrl}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View PDF
                </Button>
              ) : (
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={startEdit}
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit MoM
                </Button>
              )}
            </div>
          )}

          {/* PDF Preview (Optional) */}
          {momByMeetingId?.status === "final" && momView?.pdfUrl && (
            <div className="mt-6 border rounded-lg overflow-hidden h-[600px]">
              <iframe
                src={momView.pdfUrl}
                width="100%"
                height="100%"
                title="MoM PDF"
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      )}

      {/* === FORM MODE: Create or Edit === */}
      {mode === "form" && (
        <div className="mt-6 space-y-5">
          <h3 className="text-lg font-semibold text-gray-800">
            {isEditMode ? "Edit MoM" : "Create MoM"}
          </h3>

          {/* Agenda */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <FileText className="h-5 w-5 mr-2" /> Agenda
            </Label>
            <Textarea
              value={momForm.agenda}
              onChange={(e) => handleChange(e, "agenda")}
              placeholder="Meeting agenda..."
              rows={4}
              className="mt-1"
            />
          </div>

          {/* Meeting Mode */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <Users className="h-5 w-5 mr-2" /> Meeting Mode
            </Label>
            <Input
              value={momForm.meetingMode}
              onChange={(e) => handleChange(e, "meetingMode")}
              className="mt-1"
            />
          </div>

          {/* Duration (Read-only) */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <Clock className="h-5 w-5 mr-2" /> Duration
            </Label>
            <Input value={momForm.duration} readOnly className="mt-1 bg-gray-50" />
          </div>

          {/* Participants */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <Users className="h-5 w-5 mr-2" /> Participants
            </Label>
            <Textarea
              value={momForm.participants}
              onChange={(e) => handleChange(e, "participants")}
              rows={3}
              className="mt-1"
            />
          </div>

          {/* Summary */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <FileText className="h-5 w-5 mr-2" /> Summary <span className="text-red-500">*</span>
            </Label>
            <Textarea
              value={momForm.summary}
              onChange={(e) => handleChange(e, "summary")}
              rows={5}
              placeholder="Key points, decisions, action items..."
              className="mt-1"
            />
          </div>

          {/* Notes */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <FileText className="h-5 w-5 mr-2" /> Notes
            </Label>
            <Textarea
              value={momForm.notes}
              onChange={(e) => handleChange(e, "notes")}
              rows={4}
              className="mt-1"
            />
          </div>

          {/* Delay Reason */}
          {isTimeExceeded && !isEditMode && (
            <>
              <div>
                <Label className="flex items-center text-red-600 font-semibold">
                  <AlertCircle className="h-5 w-5 mr-2" /> Reason for Delay <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  value={reasonForDelay}
                  onChange={(e) => setReasonForDelay(e.target.value)}
                  rows={3}
                  placeholder="Why is MoM being submitted after meeting end?"
                  className="mt-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={isAgreedToTerms}
                  onCheckedChange={setIsAgreedToTerms}
                />
                <Label htmlFor="terms" className="text-sm font-medium">
                  I agree to the terms and conditions
                </Label>
              </div>
            </>
          )}

          {/* Signature */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <Signature className="h-5 w-5 mr-2" /> Signature <span className="text-red-500">*</span>
            </Label>
            <Input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleSignatureChange}
              className="mt-1"
            />
            {signaturePreview && (
              <div className="mt-2">
                <Image
                  src={signaturePreview}
                  alt="Signature"
                  width={140}
                  height={80}
                  className="border rounded-md"
                />
              </div>
            )}
          </div>

          {/* Created By */}
          <div>
            <Label className="flex items-center text-teal-600 font-semibold">
              <User className="h-5 w-5 mr-2" /> Created By <span className="text-red-500">*</span>
            </Label>
            <Input
              value={momForm.createdBy}
              onChange={(e) => handleChange(e, "createdBy")}
              className="mt-1"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setMode("view")}>
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSubmit("draft")}
              disabled={!validateForm("draft")}
            >
              Save as Draft
            </Button>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => handleSubmit("final")}
              disabled={!validateForm("final")}
            >
              {isEditMode ? "Finalize MoM" : "Submit MoM"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}





