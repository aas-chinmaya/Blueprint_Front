

"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ChevronLeft, Badge, Save, X } from "lucide-react";
import { format } from "date-fns";

import {
  fetchMeetingById,
  updateMeeting,
  clearSelectedMeeting,
  clearError,
} from "@/modules/meet/slices/meetSlice";

import MeetingDetailsContent from "./MeetingDetailsContent";
import QuotationContent from "./QuotationContent";
import MomContent from "./MomContent";

// FULL-PAGE SKELETON — 100% IDENTICAL TO REAL UI
const FullPageSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header - Exact Match */}
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-28 rounded-lg bg-teal-500" />
          <div>
            <Skeleton className="h-8 w-96 rounded bg-teal-400" />
            <Skeleton className="h-4 w-40 mt-2 rounded bg-teal-300" />
          </div>
        </div>
        <Skeleton className="h-9 w-32 rounded-full bg-white/30" />
      </div>
    </div>

    {/* Card + Tabs + Content Skeleton */}
   
      <Card className="shadow-lg border-0 rounded-t-none">
        <CardContent className="p-4 sm:p-6">
          {/* Tabs Skeleton */}
          <div className="flex w-fit bg-teal-50 rounded-lg p-1 mb-4 gap-2">
            <Skeleton className="h-10 w-28 rounded-md bg-teal-200" />
            <Skeleton className="h-10 w-28 rounded-md bg-teal-200" />
            <Skeleton className="h-10 w-28 rounded-md bg-teal-200" />
          </div>

          {/* Content Skeleton - Matches real layout */}
          <div className="space-y-8 animate-pulse">
            <Skeleton className="h-8 w-64 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-24 rounded-lg" />
              <Skeleton className="h-24 rounded-lg" />
            </div>
            <Skeleton className="h-32 rounded-lg" />
            <Skeleton className="h-48 rounded-lg" />
            <Skeleton className="h-28 rounded-lg" />
          </div>
        </CardContent>
      </Card>
  
  </div>
);

// TAB CHANGE SKELETON
const TabSkeleton = () => (
  <div className="space-y-8 py-6 animate-pulse">
    <Skeleton className="h-8 w-64 rounded-lg" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Skeleton className="h-24 rounded-lg" />
      <Skeleton className="h-24 rounded-lg" />
    </div>
    <Skeleton className="h-32 rounded-lg" />
    <Skeleton className="h-48 rounded-lg" />
    <Skeleton className="h-28 rounded-lg" />
  </div>
);

// NOT FOUND — YOUR EXACT ORIGINAL STYLE
const NotFoundScreen = ({ message }) => (
  <div className="w-full h-full  flex flex-col items-center justify-center px-4 ">
    <div className="text-6xl mb-4">Oops</div>
    <h1 className="text-3xl font-semibold mb-2">Oops! Not Found</h1>
    <p className="text-gray-600 max-w-md text-center mb-6">
      {message || "We couldn't find this meeting."}
    </p>
    <button
      onClick={() => window.history.back()}
      className="cursor-pointer px-6 py-2 bg-teal-500 rounded-lg text-white  transition-all shadow-md"
    >
      ← Go Back
    </button>
  </div>
);

export default function MeetingController({ meetingId }) {
  const dispatch = useDispatch();
  const { selectedMeeting, status, error } = useSelector((state) => state.meet);

  const [activeTab, setActiveTab] = useState("details");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [showReschedule, setShowReschedule] = useState(false);
  const [showStatusUpdate, setShowStatusUpdate] = useState(false);
  const [statusUpdateType, setStatusUpdateType] = useState(null);
  const [endNote, setEndNote] = useState("");
  const [localError, setLocalError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState("idle");
  const [minLoading, setMinLoading] = useState(true);

  const isFinalStatus = ["completed", "canceled"].includes(selectedMeeting?.meetingStatus);
  const canUpdateStatus = ["scheduled", "rescheduled"].includes(selectedMeeting?.meetingStatus);

  useEffect(() => {
    if (meetingId) dispatch(fetchMeetingById(meetingId));
    return () => {
      dispatch(clearSelectedMeeting());
      dispatch(clearError());
    };
  }, [dispatch, meetingId]);

  // Force minimum 2 seconds loading
  useEffect(() => {
    const timer = setTimeout(() => setMinLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedMeeting) {
      setEditForm({
        title: selectedMeeting.title || "",
        date: selectedMeeting.date ? format(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
        startTime: selectedMeeting.startTime ? format(new Date(selectedMeeting.startTime), "HH:mm") : "",
        endTime: selectedMeeting.endTime ? format(new Date(selectedMeeting.endTime), "HH:mm") : "",
        agenda: selectedMeeting.agenda || "",
        mode: selectedMeeting.mode || "online",
        meetingLink: selectedMeeting.meetingLink || "",
        meetingStatus: selectedMeeting.meetingStatus || "scheduled",
      });
      setLocalError(null);
    }
  }, [selectedMeeting]);

  const formatDate = (d) => (d ? format(new Date(d), "MMM d, yyyy") : "N/A");
  const formatTime = (d) => (d ? format(new Date(d), "h:mm a") : "N/A");
  const formatDateTime = (d) => (d ? format(new Date(d), "MMM d, yyyy h:mm a") : "N/A");

  const openStatusUpdateModal = (type) => {
    setStatusUpdateType(type);
    setShowStatusUpdate(true);
  };

  const handleSave = async () => {
    if (isFinalStatus) return setLocalError("Cannot edit a completed or canceled meeting.");
    if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime)
      return setLocalError("Please fill all required fields.");
    if (editForm.mode === "online" && !editForm.meetingLink)
      return setLocalError("Please provide a meeting link for online mode.");

    try {
      setUpdateStatus("loading");
      setLocalError(null);
      await dispatch(
        updateMeeting({
          meetingId,
          updates: {
            title: editForm.title,
            agenda: editForm.agenda,
            mode: editForm.mode,
            meetingLink: editForm.mode === "online" ? editForm.meetingLink : null,
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
    if (!editForm?.date || !editForm.startTime || !editForm.endTime)
      return setLocalError("Please fill all required fields.");

    try {
      setUpdateStatus("loading");
      setLocalError(null);
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
      setLocalError("Failed to reschedule.");
    } finally {
      setUpdateStatus("idle");
    }
  };

  const handleStatusUpdate = async () => {
    if (!endNote.trim()) return setLocalError("Please provide a feedback note.");

    try {
      setUpdateStatus("loading");
      setLocalError(null);
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
      setLocalError("Failed to update status.");
    } finally {
      setUpdateStatus("idle");
    }
  };

  // LOADING: Show perfect skeleton for at least 2 seconds
  if (status === "loading" || minLoading) {
    return <FullPageSkeleton />;
  }

  // ERROR / NOT FOUND
  if (status === "failed" || !selectedMeeting) {
    const msg = localError || error || "We couldn't find this meeting.";
    return <NotFoundScreen message={msg} />;
  }

  // MAIN UI — YOUR ORIGINAL 100%
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto">
           {/* Header */}
      <div className="bg-teal-600 text-white py-6 px-6">
        <Button
          size="sm"
          onClick={() => router.back()}
          className="bg-teal-700 hover:bg-teal-800 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back
        </Button>
      </div>

        <Card className="shadow-lg border-0 rounded-t-none">
          <CardContent className="p-4 sm:p-6">
            <Tabs className="min-h-screen" value={activeTab} onValueChange={setActiveTab} defaultValue="details">
              <TabsList className="cursor-pointer flex w-fit bg-teal-50 rounded-lg p-1 mb-4">
                <TabsTrigger value="details" className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Details
                </TabsTrigger>
                <TabsTrigger value="quotation" className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Quotation
                </TabsTrigger>
                <TabsTrigger value="mom" className="cursor-pointer data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  MOM
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                {activeTab === "details" ? (
                  <MeetingDetailsContent
                    selectedMeeting={selectedMeeting}
                    formatDate={formatDate}
                    formatTime={formatTime}
                    formatDateTime={formatDateTime}
                    hasEndNote={!!selectedMeeting.endNote}
                    canUpdateStatus={canUpdateStatus}
                    isFinalStatus={isFinalStatus}
                    openStatusUpdateModal={openStatusUpdateModal}
                    setShowReschedule={setShowReschedule}
                    setIsEditing={setIsEditing}
                  />
                ) : (
                  <TabSkeleton />
                )}
              </TabsContent>

              <TabsContent value="quotation">
                {activeTab === "quotation" ? (
                  <QuotationContent contactId={selectedMeeting?.contactId} meetingId={meetingId} />
                ) : (
                  <TabSkeleton />
                )}
              </TabsContent>

              <TabsContent value="mom">
              {
                console.log(selectedMeeting)
                
              }
                {/* {activeTab === "mom" ? (
                  <MomContent meeting={selectedMeeting} meetingId={meetingId} />
                ) : (
                  <TabSkeleton />
                )} */}
                {activeTab === "mom" ? (
  // Check if meeting has ended
  new Date(selectedMeeting?.endTime) <= new Date() ? (
    <MomContent meeting={selectedMeeting} meetingId={meetingId} />
  ) : (
    <div className="h-full text-center py-10 text-gray-600 font-medium">
      Meeting not completed yet. MOM accessible only after meeting end time.
    </div>
  )
) : (
  <TabSkeleton />
)}

              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* EDIT MODAL */}
      <Dialog open={isEditing && !isFinalStatus} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-teal-700">Edit Meeting</DialogTitle>
          </DialogHeader>
          {editForm && (
            <div className="space-y-4">
              <div>
                <Label>Title <span className="text-red-500">*</span></Label>
                <Input value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} className="border-teal-300 focus:border-teal-600" />
              </div>
              <div>
                <Label>Date <span className="text-red-500">*</span></Label>
                <Input type="date" value={editForm.date} onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} className="border-teal-300 focus:border-teal-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Time <span className="text-red-500">*</span></Label>
                  <Input type="time" value={editForm.startTime} onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })} className="border-teal-300 focus:border-teal-600" />
                </div>
                <div>
                  <Label>End Time <span className="text-red-500">*</span></Label>
                  <Input type="time" value={editForm.endTime} onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })} className="border-teal-300 focus:border-teal-600" />
                </div>
              </div>
              <div>
                <Label>Agenda</Label>
                <Textarea value={editForm.agenda} onChange={(e) => setEditForm({ ...editForm, agenda: e.target.value })} className="border-teal-300 focus:border-teal-600" />
              </div>
              <div>
                <Label>Mode <span className="text-red-500">*</span></Label>
                <select value={editForm.mode} onChange={(e) => setEditForm({ ...editForm, mode: e.target.value })} className="w-full p-2 border border-teal-300 rounded focus:border-teal-600">
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              {editForm.mode === "online" && (
                <div>
                  <Label>Join Link <span className="text-red-500">*</span></Label>
                  <Input value={editForm.meetingLink} onChange={(e) => setEditForm({ ...editForm, meetingLink: e.target.value })} className="border-teal-300 focus:border-teal-600" />
                </div>
              )}
              {localError && <Alert variant="destructive"><AlertDescription>{localError}</AlertDescription></Alert>}
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)} className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  <X className="w-4 h-4 mr-1" /> Cancel
                </Button>
                <Button onClick={handleSave} disabled={updateStatus === "loading"} className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Save className="w-4 h-4 mr-1" /> Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* RESCHEDULE MODAL */}
      <Dialog open={showReschedule && !isFinalStatus} onOpenChange={setShowReschedule}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-teal-700">Reschedule Meeting</DialogTitle>
          </DialogHeader>
          {editForm && (
            <div className="space-y-4">
              <div>
                <Label>Date <span className="text-red-500">*</span></Label>
                <Input type="date" value={editForm.date} onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} className="border-teal-300 focus:border-teal-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Time <span className="text-red-500">*</span></Label>
                  <Input type="time" value={editForm.startTime} onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })} className="border-teal-300 focus:border-teal-600" />
                </div>
                <div>
                  <Label>End Time <span className="text-red-500">*</span></Label>
                  <Input type="time" value={editForm.endTime} onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })} className="border-teal-300 focus:border-teal-600" />
                </div>
              </div>
              {localError && <Alert variant="destructive"><AlertDescription>{localError}</AlertDescription></Alert>}
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" onClick={handleReschedule} disabled={updateStatus === "loading"}>
                Reschedule
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* STATUS UPDATE MODAL */}
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
              <Textarea placeholder="Enter note..." value={endNote} onChange={(e) => setEndNote(e.target.value)} className="border-teal-300 focus:border-teal-600" />
            </div>
            {localError && <Alert variant="destructive"><AlertDescription>{localError}</AlertDescription></Alert>}
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
              <Button onClick={handleStatusUpdate} disabled={updateStatus === "loading" || !endNote.trim()} className="bg-teal-600 hover:bg-teal-700 text-white">
                <Save className="w-4 h-4 mr-1" /> Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}