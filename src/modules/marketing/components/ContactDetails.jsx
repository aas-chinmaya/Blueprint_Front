"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactById,
  updateContactStatus,
  clearSelectedContact,
} from "@/modules/marketing/slices/contactSlice";
import { Progress } from "@/components/ui/progress";
import { fetchMeetingsByContact } from "@/modules/meet/slices/meetSlice";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  MapPin,
  MessageSquare,
  Tag,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Circle,
  Info,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import ScheduleMeeting from "@/modules/meet/components/scheduleMeeting";
import { formatDateTimeUTC } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";

// Safe Detail Component
function Detail({ icon: Icon, label, value, color }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <Icon className={cn("h-5 w-5 mt-0.5", color)} />
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-800">{value}</p>
      </div>
    </div>
  );
}

// NextStepDialog
function NextStepDialog({ isOpen, onClose, phase = "initial" }) {
  const guides = {
    initial: {
      title: "Initial Contact Phase",
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      color: "yellow",
      steps: [
        {
          action: "Conversion Made",
          desc: "You've replied and shown interest.",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          action: "Follow-up Taken",
          desc: "Plan to follow up.",
          icon: <MessageSquare className="w-5 h-5" />,
        },
      ],
    },
    followup: {
      title: "Follow-up Phase",
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      color: "purple",
      steps: [
        {
          action: "Follow-up Taken",
          desc: "Sent another message.",
          icon: <MessageSquare className="w-5 h-5" />,
        },
        {
          action: "Ready for Meeting",
          desc: "Ready for meeting → Schedule!",
          icon: <Calendar className="w-5 h-5" />,
        },
        {
          action: "Closed",
          desc: "No response → Close.",
          icon: <XCircle className="w-5 h-5" />,
        },
      ],
    },
    meeting: {
      title: "Meeting Phase",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      color: "green",
      steps: [
        {
          action: "Schedule Meeting",
          desc: "Book a call now.",
          icon: <Calendar className="w-5 h-5" />,
        },
        {
          action: "Close",
          desc: "No meeting needed.",
          icon: <XCircle className="w-5 h-5" />,
        },
      ],
    },
  };
  const guide = guides[phase] || guides.initial;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {guide.icon}
            <DialogTitle className="text-xl">{guide.title}</DialogTitle>
          </div>
          <p className="text-base mt-2">What should you do next?</p>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {guide.steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <div
                className={cn(
                  "p-2 rounded-full",
                  guide.color === "yellow"
                    ? "bg-yellow-200"
                    : guide.color === "purple"
                    ? "bg-purple-200"
                    : "bg-green-200"
                )}
              >
                {step.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{step.action}</p>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
          >
            Got it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Phase Card
function PhaseCard({ title, children, isActive, icon: Icon }) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-xl shadow-sm border transition-all duration-300 w-full",
        isActive ? "border-blue-500" : "border-gray-200"
      )}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {Icon && (
              <Icon
                className={cn(
                  "w-6 h-6",
                  isActive ? "text-blue-600" : "text-gray-500"
                )}
              />
            )}
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function ContactDetails({ contact_id }) {
  const contactId = contact_id;
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedContact, status, error } = useSelector(
    (state) => state.contact
  );
  const { meetings } = useSelector((state) => state.meet);
  const { currentUser } = useCurrentUser();
  const [feedback, setFeedback] = useState("");
  const [internalNote, setInternalNote] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [openMeetDialog, setOpenMeetDialog] = useState(false);
  const [guideDialog, setGuideDialog] = useState({
    open: false,
    phase: "initial",
  });

  useEffect(() => {
    if (contactId) {
      dispatch(getContactById(contactId));
      dispatch(fetchMeetingsByContact(contactId));
    }
    return () => dispatch(clearSelectedContact());
  }, [contactId, dispatch]);

  const FREE_TIER_LIMIT = 3;
  const totalMeetings = meetings?.length || 0;
  const progressValue = Math.min((totalMeetings / FREE_TIER_LIMIT) * 100, 100);
  const isFreeTierFull = totalMeetings >= FREE_TIER_LIMIT;
  const isContactClosed = selectedContact?.status === "Closed";
  const currentStatus = selectedContact?.status || "Contact Received";
  const isPositiveResult = currentStatus === "Ready for Meeting";

  // Step logic
  let currentStep = "initial";
  let completedSteps = [];
  if (["Conversion Made", "Follow-up Taken"].includes(currentStatus)) {
    currentStep = "followup";
    completedSteps = ["initial"];
  } else if (["Ready for Meeting", "Closed"].includes(currentStatus)) {
    currentStep = "meeting";
    completedSteps = ["initial", "followup"];
  }

  const handleStatusUpdate = async () => {
    const feedbackWords = feedback
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const internalNoteWords = internalNote
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    if (feedbackWords.length < 5) {
      toast.error("Feedback must contain at least 5 words.");
      return;
    }
    if (feedback.length > 500) {
      toast.error("Feedback cannot exceed 500 characters.");
      return;
    }
    if (internalNoteWords.length < 5) {
      toast.error("Internal note must contain at least 5 words.");
      return;
    }
    if (internalNote.length > 500) {
      toast.error("Internal note cannot exceed 500 characters.");
      return;
    }
    try {
      const actionedBy = {
        employeeId: currentUser?.employeeId || "",
        name: currentUser?.name || "",
        designation: currentUser?.designation || "",
      };
      await dispatch(
        updateContactStatus({
          contactId,
          status: selectedStatus,
          feedback,
          internalNote,
          actionedBy,
        })
      ).unwrap();
      toast.success("Status updated!");
      dispatch(getContactById(contactId));
      setFeedback("");
      setInternalNote("");
      setSelectedStatus("");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const openGuide = (phase) => {
    setGuideDialog({ open: true, phase });
  };

  // Options
  const initialOptions =
    currentStatus === "Contact Received"
      ? ["Conversion Made", "Follow-up Taken"]
      : [];
  const followUpOptions = ["Conversion Made", "Follow-up Taken"].includes(
    currentStatus
  )
    ? ["Follow-up Taken", "Ready for Meeting", "Closed"]
    : [];
  const meetingOptions =
    currentStatus === "Ready for Meeting" ? ["Closed"] : [];

  const getButtonStyles = (option) => {
    const map = {
      "Conversion Made": "bg-blue-100 text-blue-800 hover:bg-blue-200",
      "Follow-up Taken": "bg-purple-100 text-purple-800 hover:bg-purple-200",
      "Ready for Meeting": "bg-green-100 text-green-800 hover:bg-green-200",
      Closed: "bg-red-100 text-red-800 hover:bg-red-200",
    };
    return map[option] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };

  const isInitialAccessible = true;
  const isFollowUpAccessible = [
    "Conversion Made",
    "Follow-up Taken",
    "Ready for Meeting",
    "Closed",
  ].includes(currentStatus);
  const isMeetingAccessible = ["Ready for Meeting", "Closed"].includes(
    currentStatus
  );

  const steps = [
    {
      id: "initial",
      label: "Initial",
      accessible: isInitialAccessible,
      completed: completedSteps.includes("initial"),
    },
    {
      id: "followup",
      label: "Follow-up",
      accessible: isFollowUpAccessible,
      completed: completedSteps.includes("followup"),
    },
    {
      id: "meeting",
      label: "Meeting",
      accessible: isMeetingAccessible,
      completed: currentStatus === "Closed",
    },
  ];

  const statusConfig = {
    "Contact Received": {
      color: "bg-yellow-100 text-yellow-800",
      icon: AlertCircle,
    },
    "Conversion Made": {
      color: "bg-blue-100 text-blue-800",
      icon: AlertCircle,
    },
    "Follow-up Taken": {
      color: "bg-purple-100 text-purple-800",
      icon: AlertCircle,
    },
    "Ready for Meeting": {
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
    Closed: { color: "bg-red-100 text-red-800", icon: XCircle },
  };

  const {
    color: statusColor = "bg-gray-100 text-gray-800",
    icon: StatusIcon = AlertCircle,
  } = statusConfig[currentStatus] || {};

  // Combine action options for the current phase
  const actionOptions = [
    ...initialOptions,
    ...followUpOptions,
    ...meetingOptions,
  ];

  // Validate feedback and internal note word count
  const feedbackWords = feedback
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const internalNoteWords = internalNote
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const isFeedbackValid = feedbackWords.length >= 5;
  const isInternalNoteValid = internalNoteWords.length >= 5;

  return (
    <>
      <Card className="overflow-hidden shadow-xl border-0 mx-auto">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <Button
              onClick={() => router.back()}
              className="gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <span
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full text-sm font-bold",
                statusColor
              )}
            >
              <StatusIcon className="h-4 w-4 mr-2" />
              {currentStatus}
            </span>
          </div>
          {status === "loading" && !selectedContact ? (
            <div className="flex flex-col items-center justify-center py-20 min-h-screen">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <p className="mt-4 text-lg">Loading...</p>
            </div>
          ) : error ? (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : selectedContact ? (
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Contact Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-6 rounded-xl w-full">
                  <Detail
                    icon={Tag}
                    label="ID"
                    value={selectedContact.contactId}
                    color="text-blue-600"
                  />
                  <Detail
                    icon={User}
                    label="Name"
                    value={selectedContact.fullName}
                    color="text-blue-600"
                  />
                  <Detail
                    icon={Mail}
                    label="Email"
                    value={selectedContact.email}
                    color="text-green-600"
                  />
                  <Detail
                    icon={Phone}
                    label="Phone"
                    value={selectedContact.phone}
                    color="text-green-600"
                  />
                  <Detail
                    icon={Building}
                    label="Company"
                    value={selectedContact.companyName}
                    color="text-purple-600"
                  />
                  <Detail
                    icon={Briefcase}
                    label="Role"
                    value={selectedContact.designation}
                    color="text-purple-600"
                  />
                  <Detail
                    icon={Tag}
                    label="Brand"
                    value={selectedContact.brandCategory}
                    color="text-indigo-600"
                  />
                  <Detail
                    icon={MapPin}
                    label="Location"
                    value={selectedContact.location}
                    color="text-indigo-600"
                  />
                  {selectedContact.serviceInterest?.length > 0 && (
                    <Detail
                      icon={Tag}
                      label="Interested In"
                      value={selectedContact.serviceInterest.join(", ")}
                      color="text-red-600"
                    />
                  )}
                  <div className="sm:col-span-2">
                    <Detail
                      icon={MessageSquare}
                      label="Message"
                      value={selectedContact.message}
                      color="text-gray-700"
                    />
                  </div>
                </div>
              </div>
              {/* Phase Details Section */}
              <div className="bg-white  w-full">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Phase Details
                  </h2>
                  {!isContactClosed && (
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800"
                      onClick={() => openGuide(currentStep)}
                      title="View Guide"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {/* Stepper */}
                <div className="mb-6 sm:mb-8 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4 sm:gap-0">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className={cn(
                          "flex items-center p-3 sm:p-4 rounded-xl font-bold transition-all w-full sm:flex-1",
                          step.id === currentStep
                            ? isContactClosed && !isPositiveResult
                              ? "bg-red-100 text-red-800 ring-2 ring-red-500"
                              : "bg-blue-100 text-blue-800 ring-2 ring-blue-500"
                            : step.completed
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-200 text-gray-500"
                        )}
                      >
                        {step.id === currentStep ? (
                          isContactClosed && !isPositiveResult ? (
                            <XCircle className="h-6 w-6 mr-3" />
                          ) : (
                            <AlertCircle className="h-6 w-6 mr-3" />
                          )
                        ) : step.completed ? (
                          <CheckCircle className="h-6 w-6 mr-3" />
                        ) : (
                          <Circle className="h-6 w-6 mr-3" />
                        )}
                        <span>{step.label}</span>
                        {index < steps.length - 1 && (
                          <span className="hidden sm:block mx-4 text-gray-400 text-2xl">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Current Phase Card */}
                <div className="w-full">
                  {currentStep === "initial" && (
                    <PhaseCard
                      title="1. Initial Contact"
                      icon={Lightbulb}
                      isActive={true}
                    >
                      <p className="text-sm text-gray-600 mb-4">
                        Have you replied?
                      </p>
                      {!(isContactClosed && !isPositiveResult) && (
                        <div className="space-y-4">
                          <RadioGroup
                            value={selectedStatus}
                            onValueChange={setSelectedStatus}
                            className="flex flex-col sm:flex-row sm:gap-4"
                          >
                            {initialOptions.map((option) => (
                              <div
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem value={option} id={option} />
                                <Label
                                  htmlFor={option}
                                  className="text-sm text-gray-800 flex-1"
                                >
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {selectedStatus && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium text-gray-800">
                                    Feedback{" "}
                                    <span className="text-red-500">*</span>
                                    {feedback && !isFeedbackValid && (
                                      <span className="ml-2 text-red-600 text-xs">
                                        Minimum 5 words required
                                      </span>
                                    )}
                                  </Label>
                                </div>
                                <textarea
                                  placeholder="Share your thoughts (min 5 words required)..."
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                  maxLength={500}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                  {feedback.length}/500 characters
                                </p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium text-gray-800">
                                    Internal Note{" "}
                                    <span className="text-red-500">*</span>
                                    {internalNote && !isInternalNoteValid && (
                                      <span className="ml-2 text-red-600 text-xs">
                                        Minimum 5 words required
                                      </span>
                                    )}
                                  </Label>
                                </div>
                                <textarea
                                  placeholder="Internal notes for the team (min 5 words required)..."
                                  value={internalNote}
                                  onChange={(e) =>
                                    setInternalNote(e.target.value)
                                  }
                                  className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                  maxLength={500}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                  {internalNote.length}/500 characters
                                </p>
                              </div>
                              <div className="flex justify-end">
                                <Button
                                  onClick={handleStatusUpdate}
                                  className="px-3 py-1 text-sm bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
                                  disabled={
                                    !selectedStatus ||
                                    !isFeedbackValid ||
                                    !isInternalNoteValid
                                  }
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </PhaseCard>
                  )}
                  {currentStep === "followup" && (
                    <PhaseCard
                      title="2. Follow-up"
                      icon={MessageSquare}
                      isActive={true}
                    >
                      <p className="text-sm text-gray-600 mb-4">
                        Keep engaging!
                      </p>
                      {!(isContactClosed && !isPositiveResult) && (
                        <div className="space-y-4">
                          <RadioGroup
                            value={selectedStatus}
                            onValueChange={setSelectedStatus}
                            className="flex flex-col sm:flex-row sm:gap-4"
                          >
                            {followUpOptions.map((option) => (
                              <div
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem value={option} id={option} />
                                <Label
                                  htmlFor={option}
                                  className="text-sm text-gray-800 flex-1"
                                >
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {selectedStatus && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium text-gray-800">
                                    Feedback{" "}
                                    <span className="text-red-500">*</span>
                                    {feedback && !isFeedbackValid && (
                                      <span className="ml-2 text-red-600 text-xs">
                                        Minimum 5 words required
                                      </span>
                                    )}
                                  </Label>
                                </div>
                                <textarea
                                  placeholder="Share your thoughts (min 5 words required)..."
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                  maxLength={500}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                  {feedback.length}/500 characters
                                </p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium text-gray-800">
                                    Internal Note{" "}
                                    <span className="text-red-500">*</span>
                                    {internalNote && !isInternalNoteValid && (
                                      <span className="ml-2 text-red-600 text-xs">
                                        Minimum 5 words required
                                      </span>
                                    )}
                                  </Label>
                                </div>
                                <textarea
                                  placeholder="Internal notes for the team (min 5 words required)..."
                                  value={internalNote}
                                  onChange={(e) =>
                                    setInternalNote(e.target.value)
                                  }
                                  className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                  maxLength={500}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                  {internalNote.length}/500 characters
                                </p>
                              </div>
                              <div className="flex justify-end">
                                <Button
                                  onClick={handleStatusUpdate}
                                  className="px-3 py-1 text-sm bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
                                  disabled={
                                    !selectedStatus ||
                                    !isFeedbackValid ||
                                    !isInternalNoteValid
                                  }
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </PhaseCard>
                  )}
                  {currentStep === "meeting" && (
                    <PhaseCard
                      title="3. Meeting"
                      icon={Calendar}
                      isActive={true}
                    >
                      <div className="space-y-4">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-700 font-medium">
                              Meeting Tracker (
                              {Math.min(totalMeetings, FREE_TIER_LIMIT)} /{" "}
                              {FREE_TIER_LIMIT})
                            </span>
                            {isFreeTierFull && (
                              <span className="text-xs text-red-600 font-semibold">
                                Free tier limit reached
                              </span>
                            )}
                          </div>
                          <Progress
                            value={progressValue}
                            className="h-3 rounded-full"
                          />
                        </div>
                        {meetings && meetings.length > 0 ? (
                          <div className="space-y-2">
                            {meetings
                              .slice(0, FREE_TIER_LIMIT)
                              .map((meeting) => (
                                <div
                                  key={meeting._id}
                                  className="flex items-center gap-2"
                                >
                                  <span
                                    onClick={() =>
                                      router.push(`/meet/${meeting.meetingId}`)
                                    }
                                    className="cursor-pointer bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition"
                                  >
                                    {meeting.title} – {meeting.mode}
                                  </span>
                                  <span className="text-sm text-red-600">
                                    Click to view meeting details!
                                  </span>
                                </div>
                              ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No meeting references found.
                          </p>
                        )}
                        {!(isContactClosed && !isPositiveResult) && (
                          <>
                            <Button
                              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
                              onClick={() => setOpenMeetDialog(true)}
                              disabled={isFreeTierFull}
                            >
                              {isFreeTierFull
                                ? "Meeting Limit Reached"
                                : "Schedule Meeting"}
                            </Button>
                            <RadioGroup
                              value={selectedStatus}
                              onValueChange={setSelectedStatus}
                              className="flex flex-col sm:flex-row sm:gap-4"
                            >
                              {meetingOptions.map((option) => (
                                <div
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <RadioGroupItem value={option} id={option} />
                                  <Label
                                    htmlFor={option}
                                    className="text-sm text-gray-800 flex-1"
                                  >
                                    {option}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            {selectedStatus && (
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <Label className="font-medium text-gray-800">
                                      Feedback{" "}
                                      <span className="text-red-500">*</span>
                                      {feedback && !isFeedbackValid && (
                                        <span className="ml-2 text-red-600 text-xs">
                                          Minimum 5 words required
                                        </span>
                                      )}
                                    </Label>
                                  </div>
                                  <textarea
                                    placeholder="Share your thoughts (min 5 words required)..."
                                    value={feedback}
                                    onChange={(e) =>
                                      setFeedback(e.target.value)
                                    }
                                    className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    maxLength={500}
                                  />
                                  <p className="text-xs text-gray-500 text-right">
                                    {feedback.length}/500 characters
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <Label className="font-medium text-gray-800">
                                      Internal Note{" "}
                                      <span className="text-red-500">*</span>
                                      {internalNote && !isInternalNoteValid && (
                                        <span className="ml-2 text-red-600 text-xs">
                                          Minimum 5 words required
                                        </span>
                                      )}
                                    </Label>
                                  </div>
                                  <textarea
                                    placeholder="Internal notes for the team (min 5 words required)..."
                                    value={internalNote}
                                    onChange={(e) =>
                                      setInternalNote(e.target.value)
                                    }
                                    className="w-full h-24 border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    maxLength={500}
                                  />
                                  <p className="text-xs text-gray-500 text-right">
                                    {internalNote.length}/500 characters
                                  </p>
                                </div>
                                <div className="flex justify-end">
                                  <Button
                                    onClick={handleStatusUpdate}
                                    className="px-3 py-1 text-sm bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
                                    disabled={
                                      !selectedStatus ||
                                      !isFeedbackValid ||
                                      !isInternalNoteValid
                                    }
                                  >
                                    Submit
                                  </Button>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </PhaseCard>
                  )}
                </div>
                {/* Conversation History */}

                <div className="mt-6 sm:mt-8 w-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    Conversation History
                  </h3>

                  {selectedContact.conversations?.length > 0 ? (
                    <div className="space-y-4">
                      {selectedContact.conversations.map((c, i) => {
                        const { icon: ConvIcon = AlertCircle } =
                          statusConfig[c.status] || {};
                        const initials = c.actionedBy?.name
                          ? c.actionedBy.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()
                          : "?";

                        return (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
                          >
                            {/* Header Row */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div className="flex items-center gap-2">
                                <ConvIcon className="h-4 w-4 text-gray-500" />
                                <span
                                  className={cn(
                                    "px-2 py-1 rounded-full text-xs font-semibold capitalize tracking-wide",
                                    getButtonStyles(c.status)
                                  )}
                                >
                                  {c.status}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {formatDateTimeUTC(c.timestamp)}
                              </p>
                            </div>

                            {/* Body Content */}
                            <div className="mt-3 space-y-2 text-sm text-gray-700">
                              {c.feedback && (
                                <p>
                                  <span className="font-medium text-gray-800">
                                    Feedback:
                                  </span>{" "}
                                  {c.feedback}
                                </p>
                              )}
                              {c.internalNotes && (
                                <p>
                                  <span className="font-medium text-gray-800">
                                    Internal Note:
                                  </span>{" "}
                                  {c.internalNotes}
                                </p>
                              )}

                              {/* Actioned By — Professional Profile Layout */}
                              {c.actionedBy && c.actionedBy.name && (
                                <div className="flex items-center justify-end mt-3">
                                  <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                    {/* Avatar */}
                                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-xs">
                                      {initials}
                                    </div>

                                    {/* Name + Designation */}
                                    <div className="leading-tight text-right">
                                      <p className="font-medium text-gray-800 text-sm">
                                        {c.actionedBy.name}
                                      </p>
                                      {c.actionedBy.designation && (
                                        <p className="text-xs text-gray-500">
                                          {c.actionedBy.designation}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl py-6 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">
                        No conversation history yet.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center min-h-screen py-20 text-gray-500">No contact found.</div>
          )}
        </CardContent>
      </Card>
      {/* <Dialog open={openMeetDialog} onOpenChange={setOpenMeetDialog}>
        <DialogContent
         className="w-full max-h-[90dvh] overflow-y-auto"
         >
          <ScheduleMeeting  contactId={contactId} onClose={() => setOpenMeetDialog(false)} />
        </DialogContent>
      </Dialog> */}

      <Dialog open={openMeetDialog} onOpenChange={setOpenMeetDialog}>
        <DialogContent className="!w-[90vw] !h-[90vh] !max-w-none !max-h-none p-0 bg-transparent">
          <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b">
              <h3 className="text-lg font-medium">Schedule Meeting</h3>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              <ScheduleMeeting
                // meetingRefs={meetings}
                contactId={contactId}
                onClose={() => setOpenMeetDialog(false)}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <NextStepDialog
        isOpen={guideDialog.open}
        onClose={() => setGuideDialog({ open: false, phase: "initial" })}
        phase={guideDialog.phase}
      />
    </>
  );
}
