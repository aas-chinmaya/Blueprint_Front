









// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { ChevronLeft, Save, X } from "lucide-react";
// import { format } from "date-fns";
// import {
//   fetchMeetingById,
//   updateMeeting,
//   rescheduleMeet,
//   updateMeetingStatus,
//   clearSelectedMeeting,
//   clearError,
// } from "@/modules/meet/slices/meetSlice";
// import MeetingDetailsContent from "./MeetingDetailsContent";
// import ProposalContent from "./ProposalContent"; // External component import
// import MomContent from "./MomContent"; // External component import


// export default function MeetingController({ meetingId }) {
//   const dispatch = useDispatch();
//   const { selectedMeeting, status, error } = useSelector((state) => state.meet);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState(null);
//   const [showReschedule, setShowReschedule] = useState(false);
//   const [showStatusUpdate, setShowStatusUpdate] = useState(false);
//   const [statusUpdateType, setStatusUpdateType] = useState(null);
//   const [endNote, setEndNote] = useState("");
//   const [localError, setLocalError] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState("idle");

//   // Removed unused variables: mom, quotation, showMOM, showQuotation, meetingEnded, hasMOM, hasQuotation, hasEndNote
//   const canUpdateStatus =
//     selectedMeeting?.meetingStatus === "scheduled" ||
//     selectedMeeting?.meetingStatus === "rescheduled";

//   useEffect(() => {
//     if (meetingId) {
//       dispatch(fetchMeetingById(meetingId));
//     }
//     return () => {
//       dispatch(clearSelectedMeeting());
//       dispatch(clearError());
//     };
//   }, [dispatch, meetingId]);

//   useEffect(() => {
//     if (selectedMeeting) {
//       try {
//         setEditForm({
//           title: selectedMeeting.title || "",
//           date: selectedMeeting.date ? format(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
//           startTime: selectedMeeting.startTime
//             ? format(new Date(selectedMeeting.startTime), "HH:mm")
//             : "",
//           endTime: selectedMeeting.endTime
//             ? format(new Date(selectedMeeting.endTime), "HH:mm")
//             : "",
//           agenda: selectedMeeting.agenda || "",
//           mode: selectedMeeting.mode || "online",
//           meetingLink: selectedMeeting.meetingLink || "",
//           meetingStatus: selectedMeeting.meetingStatus || "scheduled",
//         });
//         setLocalError(null);
//       } catch (err) {
//         console.error("Error syncing editForm:", err);
//         setLocalError("Invalid meeting data. Please try again.");
//       }
//     }
//   }, [selectedMeeting]);

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "N/A";
//     try {
//       return format(new Date(dateStr), "MMM d, yyyy");
//     } catch {
//       return "Invalid Date";
//     }
//   };

//   const formatDateTime = (dateStr) => {
//     if (!dateStr) return "N/A";
//     try {
//       return format(new Date(dateStr), "MMM d, yyyy h:mm a");
//     } catch {
//       return "Invalid Date";
//     }
//   };

//   const handleSave = async () => {
//     if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime) {
//       setLocalError("Please fill all required fields.");
//       return;
//     }
//     if (editForm.mode === "online" && !editForm.meetingLink) {
//       setLocalError("Please provide a meeting link for online mode.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       await dispatch(
//         updateMeeting({
//           meetingId,
//           updates: {
//             ...editForm,
//             startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
//             endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
//             meetingLink: editForm.mode === "online" ? editForm.meetingLink : null,
//             meetingStatus: editForm.meetingStatus,
//           },
//         })
//       ).unwrap();
//       setIsEditing(false);
//     } catch (err) {
//       setLocalError(err.payload || "Failed to update meeting.");
//     }
//   };

//   const handleReschedule = async () => {
//     if (!editForm?.date || !editForm.startTime || !editForm.endTime) {
//       setLocalError("Please fill all required fields.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       await dispatch(
//         rescheduleMeet({
//           meetingId,
//           date: editForm.date,
//           startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
//           endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
//           meetingStatus: "rescheduled",
//         })
//       ).unwrap();
//       setShowReschedule(false);
//     } catch (err) {
//       setLocalError(err.payload || "Failed to reschedule meeting.");
//     }
//   };

//   const handleStatusUpdate = async () => {
//     if (!endNote.trim()) {
//       setLocalError("Please provide a feedback note.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(
//         updateMeetingStatus({
//           meetingId,
//           meetingStatus: statusUpdateType,
//           endNote,
//         })
//       ).unwrap();
//       setShowStatusUpdate(false);
//       setEndNote("");
//       setStatusUpdateType(null);
//     } catch (err) {
//       setLocalError(err.payload || "Failed to update meeting status.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };

//   const openStatusUpdateModal = (type) => {
//     setStatusUpdateType(type);
//     setShowStatusUpdate(true);
//   };

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto space-y-4">
//           <Skeleton className="h-8 w-32" />
//           <Card className="shadow-lg border-0">
//             <div className="p-6">
//               <Skeleton className="h-10 w-3/4" />
//               <div className="grid lg:grid-cols-5 gap-6 mt-6">
//                 <div className="lg:col-span-4 space-y-4">
//                   <Skeleton className="h-6 w-40" />
//                   <Skeleton className="h-4 w-full" />
//                   <Skeleton className="h-4 w-full" />
//                   <Skeleton className="h-4 w-full" />
//                 </div>
//                 <div className="lg:col-span-1 space-y-4">
//                   <Skeleton className="h-6 w-40" />
//                   <Skeleton className="h-4 w-full" />
//                   <Skeleton className="h-4 w-full" />
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   if (status === "failed" || localError) {
//     return (
//       <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
//         <AlertDescription>{localError || error || "No meeting found."}</AlertDescription>
//       </Alert>
//     );
//   }

//   if (!selectedMeeting) {
//     return (
//       <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
//         <AlertDescription>Meeting data unavailable.</AlertDescription>
//       </Alert>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto">
//         <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <Button
//                 size="sm"
//                 className="bg-teal-600 hover:bg-teal-700 text-white"
//                 onClick={() => window.history.back()}
//               >
//                 <ChevronLeft className="w-5 h-5 mr-1" /> Back
//               </Button>
//               <div>
//                 <h1 className="text-xl font-bold text-white">{selectedMeeting.title}</h1>
//                 <p className="text-teal-100 text-sm">Meeting Id: {meetingId}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Card className="shadow-lg border-0 rounded-t-none">
//           <CardContent className="p-4 sm:p-6">
//             <Tabs defaultValue="details" className="w-full">
//               <TabsList className="flex w-fit bg-teal-50 rounded-lg p-1 mb-4">
//                 <TabsTrigger
//                   value="details"
//                   className="px-4 py-2 text-sm font-medium text-teal-700 rounded-md transition-all duration-200 ease-in-out data-[state=active]:bg-teal-600 data-[state=active]:text-white hover:bg-teal-100 hover:text-teal-800"
//                 >
//                   Details
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="proposal"
//                   className="px-4 py-2 text-sm font-medium text-teal-700 rounded-md transition-all duration-200 ease-in-out data-[state=active]:bg-teal-600 data-[state=active]:text-white hover:bg-teal-100 hover:text-teal-800"
//                 >
//                   Proposal
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="mom"
//                   className="px-4 py-2 text-sm font-medium text-teal-700 rounded-md transition-all duration-200 ease-in-out data-[state=active]:bg-teal-600 data-[state=active]:text-white hover:bg-teal-100 hover:text-teal-800"
//                 >
//                   MOM
//                 </TabsTrigger>
//               </TabsList>
//               <TabsContent value="details" className="min-h-screen">
//                 <MeetingDetailsContent

//                   selectedMeeting={selectedMeeting}
//                   formatDate={formatDate}
//                   formatDateTime={formatDateTime}
//                   canUpdateStatus={canUpdateStatus}
//                   updateStatus={updateStatus}
//                   openStatusUpdateModal={openStatusUpdateModal}
//                   setShowReschedule={setShowReschedule}
//                   setIsEditing={setIsEditing}
//                 />
//               </TabsContent>
//               <TabsContent value="proposal" className="min-h-screen">
//                 <ProposalContent meetingId={meetingId} />
//               </TabsContent>
//               <TabsContent value="mom" className="min-h-screen">
              
//                 <MomContent meeting={selectedMeeting} meetingId={meetingId} />
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>

//       <Dialog open={isEditing} onOpenChange={setIsEditing}>
//         <DialogContent className="max-w-lg bg-white sm:p-6 p-4">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">Edit Meeting</DialogTitle>
//           </DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div>
//                 <Label>Title <span className="text-red-500">*</span></Label>
//                 <Input
//                   value={editForm.title}
//                   onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div>
//                 <Label>Date <span className="text-red-500">*</span></Label>
//                 <Input
//                   type="date"
//                   value={editForm.date}
//                   onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Start Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.startTime}
//                     onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//                 <div>
//                   <Label>End Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.endTime}
//                     onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label>Agenda</Label>
//                 <Textarea
//                   value={editForm.agenda}
//                   onChange={(e) => setEditForm({ ...editForm, agenda: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div>
//                 <Label>Mode <span className="text-red-500">*</span></Label>
//                 <select
//                   value={editForm.mode}
//                   onChange={(e) => setEditForm({ ...editForm, mode: e.target.value })}
//                   className="w-full p-2 border border-teal-300 rounded focus:border-teal-600"
//                 >
//                   <option value="online">Online</option>
//                   <option value="offline">Offline</option>
//                 </select>
//               </div>
//               {editForm.mode === "online" && (
//                 <div>
//                   <Label>Join Link <span className="text-red-500">*</span></Label>
//                   <Input
//                     value={editForm.meetingLink}
//                     onChange={(e) => setEditForm({ ...editForm, meetingLink: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               )}
//               <div>
//                 <Label>Meeting Status</Label>
//                 <select
//                   value={editForm.meetingStatus}
//                   onChange={(e) => setEditForm({ ...editForm, meetingStatus: e.target.value })}
//                   className="w-full p-2 border border-teal-300 rounded focus:border-teal-600"
//                 >
//                   <option value="scheduled">Scheduled</option>
//                   <option value="rescheduled">Rescheduled</option>
//                   <option value="canceled">Canceled</option>
//                   <option value="completed">Completed</option>
//                 </select>
//               </div>
//               {localError && (
//                 <Alert variant="destructive">
//                   <AlertDescription>{localError}</AlertDescription>
//                 </Alert>
//               )}
//               <div className="flex justify-end gap-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => setIsEditing(false)}
//                   className="border-teal-600 text-teal-600 hover:bg-teal-50"
//                 >
//                   <X className="w-4 h-4 mr-1" /> Cancel
//                 </Button>
//                 <Button
//                   onClick={handleSave}
//                   disabled={updateStatus === "loading"}
//                   className="bg-teal-600 hover:bg-teal-700 text-white"
//                 >
//                   <Save className="w-4 h-4 mr-1" /> Save
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showReschedule} onOpenChange={setShowReschedule}>
//         <DialogContent className="max-w-lg bg-white sm:p-6 p-4">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">Reschedule Meeting</DialogTitle>
//           </DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div>
//                 <Label>Date <span className="text-red-500">*</span></Label>
//                 <Input
//                   type="date"
//                   value={editForm.date}
//                   onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Start Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.startTime}
//                     onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//                 <div>
//                   <Label>End Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.endTime}
//                     onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               </div>
//               {localError && (
//                 <Alert variant="destructive">
//                   <AlertDescription>{localError}</AlertDescription>
//                 </Alert>
//               )}
//               <Button
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white"
//                 onClick={handleReschedule}
//                 disabled={updateStatus === "loading"}
//               >
//                 Reschedule
//               </Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showStatusUpdate} onOpenChange={setShowStatusUpdate}>
//         <DialogContent className="max-w-lg bg-white sm:p-6 p-4">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">
//               {statusUpdateType === "completed" ? "Mark Meeting as Completed" : "Cancel Meeting"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div>
//               <Label>Feedback Note</Label>
//               <Textarea
//                 placeholder="Enter feedback note (e.g., what was discussed, outcomes, or reason for cancellation)"
//                 value={endNote}
//                 onChange={(e) => setEndNote(e.target.value)}
//                 className="border-teal-300 focus:border-teal-600"
//               />
//             </div>
//             {localError && (
//               <Alert variant="destructive">
//                 <AlertDescription>{localError}</AlertDescription>
//               </Alert>
//             )}
//             <div className="flex justify-end gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() => {
//                   setShowStatusUpdate(false);
//                   setEndNote("");
//                   setStatusUpdateType(null);
//                 }}
//                 className="border-teal-600 text-teal-600 hover:bg-teal-50"
//               >
//                 <X className="w-4 h-4 mr-1" /> Cancel
//               </Button>
//               <Button
//                 onClick={handleStatusUpdate}
//                 disabled={updateStatus === "loading" || !endNote.trim()}
//                 className="bg-teal-600 hover:bg-teal-700 text-white"
//               >
//                 <Save className="w-4 h-4 mr-1" /> Save
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }




"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft,Badge, Save, X } from "lucide-react";
import { format } from "date-fns"; // PROPERLY IMPORTED

import {
  fetchMeetingById,
  updateMeeting,
  clearSelectedMeeting,
  clearError,
} from "@/modules/meet/slices/meetSlice";
import MeetingDetailsContent from "./MeetingDetailsContent";
import ProposalContent from "./ProposalContent";
import MomContent from "./MomContent";

export default function MeetingController({ meetingId }) {
  const dispatch = useDispatch();
  const { selectedMeeting, status, error } = useSelector((state) => state.meet);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [showReschedule, setShowReschedule] = useState(false);
  const [showStatusUpdate, setShowStatusUpdate] = useState(false);
  const [statusUpdateType, setStatusUpdateType] = useState(null);
  const [endNote, setEndNote] = useState("");
  const [localError, setLocalError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState("idle");

  // MEETING IS FINAL → NO EDITS ALLOWED
  const isFinalStatus = ["completed", "canceled"].includes(selectedMeeting?.meetingStatus);
  const canUpdateStatus = ["scheduled", "rescheduled"].includes(selectedMeeting?.meetingStatus);

  useEffect(() => {
    if (meetingId) {
      dispatch(fetchMeetingById(meetingId));
    }
    return () => {
      dispatch(clearSelectedMeeting());
      dispatch(clearError());
    };
  }, [dispatch, meetingId]);

  useEffect(() => {
    if (selectedMeeting) {
      try {
        setEditForm({
          title: selectedMeeting.title || "",
          date: selectedMeeting.date ? format(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
          startTime: selectedMeeting.startTime
            ? format(new Date(selectedMeeting.startTime), "HH:mm")
            : "",
          endTime: selectedMeeting.endTime
            ? format(new Date(selectedMeeting.endTime), "HH:mm")
            : "",
          agenda: selectedMeeting.agenda || "",
          mode: selectedMeeting.mode || "online",
          meetingLink: selectedMeeting.meetingLink || "",
          meetingStatus: selectedMeeting.meetingStatus || "scheduled",
        });
        setLocalError(null);
      } catch (err) {
        console.error("Sync error:", err);
        setLocalError("Invalid meeting data.");
      }
    }
  }, [selectedMeeting]);

  // PROPER TIME FORMATTERS
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    try {
      return format(new Date(dateStr), "MMM d, yyyy");
    } catch {
      return "Invalid Date";
    }
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    try {
      return format(new Date(dateStr), "h:mm a"); // 2:30 PM
    } catch {
      return "Invalid Time";
    }
  };

  const formatDateTime = (dateStr) => {
    if (!dateStr) return "N/A";
    try {
      return format(new Date(dateStr), "MMM d, yyyy h:mm a");
    } catch {
      return "Invalid DateTime";
    }
  };

  const handleSave = async () => {
    if (isFinalStatus) {
      setLocalError("Cannot edit a completed or canceled meeting.");
      return;
    }

    if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime) {
      setLocalError("Please fill all required fields.");
      return;
    }
    if (editForm.mode === "online" && !editForm.meetingLink) {
      setLocalError("Please provide a meeting link for online mode.");
      return;
    }

    try {
      setLocalError(null);
      setUpdateStatus("loading");

      await dispatch(
        updateMeeting({
          meetingId,
          updates: {
            title: editForm.title,
            agenda: editForm.agenda,
            mode: editForm.mode,
            meetingLink: editForm.mode === "online" ? editForm.meetingLink : null,
            meetingStatus: editForm.meetingStatus,
            startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
            endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
          },
        })
      ).unwrap();

      setIsEditing(false);
    } catch (err) {
      setLocalError(err?.message || "Failed to update.");
    } finally {
      setUpdateStatus("idle");
    }
  };

  const handleReschedule = async () => {
    if (isFinalStatus) {
      setLocalError("Cannot reschedule a completed or canceled meeting.");
      return;
    }

    if (!editForm?.date || !editForm.startTime || !editForm.endTime) {
      setLocalError("Please fill all required fields.");
      return;
    }

    try {
      setLocalError(null);
      setUpdateStatus("loading");

      await dispatch(
        updateMeeting({
          meetingId,
          updates: {
            startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
            endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
            meetingStatus: "rescheduled",
          },
        })
      ).unwrap();

      setShowReschedule(false);
    } catch (err) {
      setLocalError(err?.message || "Failed to reschedule.");
    } finally {
      setUpdateStatus("idle");
    }
  };

  const handleStatusUpdate = async () => {
    if (!endNote.trim()) {
      setLocalError("Please provide a feedback note.");
      return;
    }

    try {
      setLocalError(null);
      setUpdateStatus("loading");

      await dispatch(
        updateMeeting({
          meetingId,
          updates: {
            meetingStatus: statusUpdateType,
            endNote: endNote.trim(),
          },
        })
      ).unwrap();

      setShowStatusUpdate(false);
      setEndNote("");
      setStatusUpdateType(null);
    } catch (err) {
      setLocalError(err?.message || "Failed to update status.");
    } finally {
      setUpdateStatus("idle");
    }
  };

  const openStatusUpdateModal = (type) => {
    setStatusUpdateType(type);
    setShowStatusUpdate(true);
  };

  // LOADING
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-4">
          <Skeleton className="h-8 w-32" />
          <Card className="shadow-lg border-0 p-6 space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-4 space-y-3">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // ERROR
  if (status === "failed" || localError) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
        <AlertDescription>{localError || error || "No meeting found."}</AlertDescription>
      </Alert>
    );
  }

  if (!selectedMeeting) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
        <AlertDescription>Meeting data unavailable.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => window.history.back()}
              >
                <ChevronLeft className="w-5 h-5 mr-1" /> Back
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white">{selectedMeeting.title}</h1>
                <p className="text-teal-100 text-sm">Meeting ID: {meetingId}</p>
              </div>
            </div>
            {isFinalStatus && (
              <Badge variant="secondary" className="bg-white text-teal-700">
                {selectedMeeting.meetingStatus.toUpperCase()}
              </Badge>
            )}
          </div>
        </div>

        <Card className="shadow-lg border-0 rounded-t-none">
          <CardContent className="p-4 sm:p-6">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="flex w-fit bg-teal-50 rounded-lg p-1 mb-4">
                <TabsTrigger value="details" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Details
                </TabsTrigger>
                <TabsTrigger value="proposal" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Proposal
                </TabsTrigger>
                <TabsTrigger value="mom" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  MOM
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                <MeetingDetailsContent
                  selectedMeeting={selectedMeeting}
                  formatDate={formatDate}
                  formatTime={formatTime}   // NEW: for clean time
                  formatDateTime={formatDateTime}
                  hasEndNote={!!selectedMeeting.endNote}
                  canUpdateStatus={canUpdateStatus}
                  isFinalStatus={isFinalStatus}
                  openStatusUpdateModal={openStatusUpdateModal}
                  setShowReschedule={setShowReschedule}
                  setIsEditing={setIsEditing}
                />
              </TabsContent>

              <TabsContent value="proposal">
                <ProposalContent contactId={selectedMeeting?.contactId} meetingId={meetingId} />
              </TabsContent>

              <TabsContent value="mom">
                <MomContent meeting={selectedMeeting} meetingId={meetingId} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* === EDIT MODAL (HIDDEN IF FINAL) === */}
      <Dialog open={isEditing && !isFinalStatus} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-teal-700">Edit Meeting</DialogTitle>
          </DialogHeader>
          {editForm && (
            <div className="space-y-4">
              <div>
                <Label>Title <span className="text-red-500">*</span></Label>
                <Input
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="border-teal-300 focus:border-teal-600"
                />
              </div>

              <div>
                <Label>Date <span className="text-red-500">*</span></Label>
                <Input
                  type="date"
                  value={editForm.date}
                  onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                  className="border-teal-300 focus:border-teal-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Time <span className="text-red-500">*</span></Label>
                  <Input
                    type="time"
                    value={editForm.startTime}
                    onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
                    className="border-teal-300 focus:border-teal-600"
                  />
                </div>
                <div>
                  <Label>End Time <span className="text-red-500">*</span></Label>
                  <Input
                    type="time"
                    value={editForm.endTime}
                    onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
                    className="border-teal-300 focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <Label>Agenda</Label>
                <Textarea
                  value={editForm.agenda}
                  onChange={(e) => setEditForm({ ...editForm, agenda: e.target.value })}
                  className="border-teal-300 focus:border-teal-600"
                />
              </div>

              <div>
                <Label>Mode <span className="text-red-500">*</span></Label>
                <select
                  value={editForm.mode}
                  onChange={(e) => setEditForm({ ...editForm, mode: e.target.value })}
                  className="w-full p-2 border border-teal-300 rounded focus:border-teal-600"
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

              {editForm.mode === "online" && (
                <div>
                  <Label>Join Link <span className="text-red-500">*</span></Label>
                  <Input
                    value={editForm.meetingLink}
                    onChange={(e) => setEditForm({ ...editForm, meetingLink: e.target.value })}
                    className="border-teal-300 focus:border-teal-600"
                  />
                </div>
              )}

              {localError && (
                <Alert variant="destructive">
                  <AlertDescription>{localError}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  <X className="w-4 h-4 mr-1" /> Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={updateStatus === "loading"}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Save className="w-4 h-4 mr-1" /> Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* === RESCHEDULE MODAL (HIDDEN IF FINAL) === */}
      <Dialog open={showReschedule && !isFinalStatus} onOpenChange={setShowReschedule}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-teal-700">Reschedule Meeting</DialogTitle>
          </DialogHeader>
          {editForm && (
            <div className="space-y-4">
              <div>
                <Label>Date <span className="text-red-500">*</span></Label>
                <Input
                  type="date"
                  value={editForm.date}
                  onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                  className="border-teal-300 focus:border-teal-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Time <span className="text-red-500">*</span></Label>
                  <Input
                    type="time"
                    value={editForm.startTime}
                    onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
                    className="border-teal-300 focus:border-teal-600"
                  />
                </div>
                <div>
                  <Label>End Time <span className="text-red-500">*</span></Label>
                  <Input
                    type="time"
                    value={editForm.endTime}
                    onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
                    className="border-teal-300 focus:border-teal-600"
                  />
                </div>
              </div>

              {localError && (
                <Alert variant="destructive">
                  <AlertDescription>{localError}</AlertDescription>
                </Alert>
              )}

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={handleReschedule}
                disabled={updateStatus === "loading"}
              >
                Reschedule
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* === STATUS UPDATE MODAL === */}
      <Dialog open={showStatusUpdate} onOpenChange={setShowStatusUpdate}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-teal-700">
              {statusUpdateType === "completed" ? "Mark as Completed" : "Cancel Meeting"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Feedback Note <span className="text-red-500">*</span></Label>
              <Textarea
                placeholder="Enter note..."
                value={endNote}
                onChange={(e) => setEndNote(e.target.value)}
                className="border-teal-300 focus:border-teal-600"
              />
            </div>

            {localError && (
              <Alert variant="destructive">
                <AlertDescription>{localError}</AlertDescription>
              </Alert>
            )}

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowStatusUpdate(false);
                  setEndNote("");
                  setStatusUpdateType(null);
                }}
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                <X className="w-4 h-4 mr-1" /> Cancel
              </Button>
              <Button
                onClick={handleStatusUpdate}
                disabled={updateStatus === "loading" || !endNote.trim()}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Save className="w-4 h-4 mr-1" /> Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}