









"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { formatDateTimeIST } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useDispatch, useSelector } from "react-redux";
import { resolveBug, clearErrors, getBugById } from "@/modules/project-management/issues/slices/bugSlice";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Bug, Calendar, User, Clock, AlertCircle, FileText, CheckCircle, Clock as ClockIcon, ExternalLinkIcon } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BugDetailsViewModal = ({ isOpen, onOpenChange, bugId }) => {
  const { currentUser } = useCurrentUser();
  const dispatch = useDispatch();
  const router = useRouter();

  const { bugDetails } = useSelector((state) => state.bugs);
  const loading = useSelector((state) => state.bugs.loading?.bugResolve);
  const error = useSelector((state) => state.bugs.error?.bugResolve);
  const [delayReason, setDelayReason] = useState(bugDetails?.delayReason || "");
  const [resolutionNote, setResolutionNote] = useState("");

  useEffect(() => {
    if (bugId) {
      dispatch(getBugById(bugId));
    }
  }, [dispatch, bugId]);


  useEffect(() => {
    if (isOpen && bugDetails) {
      setDelayReason(bugDetails?.delayReason || "");
      setResolutionNote("");
    }

    return () => {
      if (error) {
        dispatch(clearErrors());
      }
    };
  }, [dispatch, isOpen, bugDetails, error]);

  const handleResolveBug = () => {
    if (!bugDetails) return;

    if (!resolutionNote.trim()) {
      toast.error("Please provide a resolution note.");
      return;
    }

    // Convert bug deadline to Date object
    const bugDeadlineDate = new Date(bugDetails.deadline);
    // Get current date and time
    const now = new Date();
    // Check if deadline has passed
    const isPastDeadline = now > bugDeadlineDate;

    // ISO strings for logging
    const bugDeadlineISO = bugDeadlineDate.toISOString();
    const nowISO = now.toISOString();

    if (isPastDeadline && !delayReason.trim()) {
      toast.error("Please provide a reason for the delay.");
      return;
    }
    
    const payload = {
      bugId: bugDetails.bug_id,
      resolutionNote,
      ...(isPastDeadline && { delayReason }),
    };

    dispatch(resolveBug(payload)).then((result) => {
      if (result.error) {
        toast.error(`Failed to resolve bug: ${result.error.message}`);
      } else {
        toast.success("Issue resolved successfully!");
        onOpenChange(false);
      }
    });
  };

  if (!bugDetails) {
    return null;
  }

  const isAssignedToCurrentUser = currentUser?.id === bugDetails?.assignedTo;
  const isResolved = (bugDetails?.status || "").toLowerCase() === "resolved";
  // const isResolved = bugDetails?.status === "resolved";

  // Convert bug deadline to Date object
  const bugDeadlineDate = bugDetails.deadline ? new Date(bugDetails.deadline) : null;
  // Get current date and time
  const now = new Date();
  // Check if deadline has passed
  const isOverdue = bugDeadlineDate && now > bugDeadlineDate;

  // ISO strings for logging
  if (bugDeadlineDate) {
    const bugDeadlineISO = bugDeadlineDate.toISOString();
    const nowISO = now.toISOString();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-5xl bg-white shadow-lg border-gray-200 rounded-lg text-black overflow-y-auto">
        <DialogHeader className="px-4 py-3 sm:px-6 sm:py-4 sticky top-0">
          <DialogTitle className="text-gray-800 text-lg font-bold flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Issue Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 px-4 sm:px-6">
          {/* Bug ID */}
          <div className="flex flex-col">
            <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3" />
              Issue ID
            </Label>
            <p className="text-xs text-black p-2">{bugDetails.bug_id}</p>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Status
            </Label>
            <p className="text-xs text-black p-2">{bugDetails.status || "N/A"}</p>
          </div>

          {/* Priority */}
          <div className="flex flex-col">
            <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              Priority
            </Label>
            <p className="text-xs text-black p-2">{bugDetails.priority || "N/A"}</p>
          </div>

          {/* Deadline */}
          {bugDetails.deadline && (
            <div className="flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Deadline
              </Label>
              <div className="flex items-center gap-2">
                <p className="text-xs text-black p-2">
                  {formatDateTimeIST(bugDetails.deadline) || "N/A"}
                </p>
                {/* Overdue indicator */}
                {isOverdue && bugDetails?.status !== "Resolved" && (
                  <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Overdue
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Assigned To */}
          {bugDetails?.assignedToDetails?.memberName && (
            <div className="flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <User className="h-3 w-3" />
                Assigned To
              </Label>
              <p className="text-xs text-black p-2">{bugDetails.assignedToDetails.memberName}</p>
            </div>
          )}

          {/* Project Id */}
          {bugDetails.projectId && (
            <div className="flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <FileText className="h-3 w-3" />
                Project Id
              </Label>
              <p className="text-xs text-black p-2">{bugDetails.projectId}</p>
            </div>
          )}

          {/* Created At */}
          {bugDetails.createdAt && (
            <div className="flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <ClockIcon className="h-3 w-3" />
                Created At
              </Label>
              <p className="text-xs text-black p-2">{formatDateTimeIST(bugDetails.createdAt)}</p>
            </div>
          )}

          {/* Download Attachment */}
          {bugDetails.attachmentLinks && (
            <div className="mt-2">
              <Label className="text-xs font-bold text-gray-800 mb-1">Attachment</Label>
              <a
                href={bugDetails.attachmentLinks}
                download
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm text-gray-800 font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                <span>Download</span>
              </a>
            </div>
          )}

          {/* Task Ref - Clickable */}
          <div className="flex flex-col relative">
            <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3" />
              Reference
            </Label>
            <div className="inline-flex items-center gap-2">
              {/* Task ID chip */}
              <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-xs">
                {bugDetails.taskRef}
              </span>
              {/* Redirect icon with tooltip */}
              <span className="relative group cursor-pointer text-blue-500">
                <ExternalLinkIcon className="w-4 h-4" />
                <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Click to view full task
                </span>
                <span
                  onClick={() => router.push(`/task/${bugDetails.taskRef}`)}
                  className="absolute inset-0"
                />
              </span>
            </div>
          </div>

          {/* Title - Larger Area */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
            <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3" />
              Title
            </Label>
            <p className="text-sm text-black p-3">{bugDetails.title}</p>
          </div>

          {/* Description - Larger Area */}
          {bugDetails.description && (
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <FileText className="h-3 w-3" />
                Description
              </Label>
              <p className="text-sm text-black p-3 rounded-md border border-gray-200 whitespace-pre-wrap break-words">
                {bugDetails.description}
              </p>
            </div>
          )}

          {/* Delay Reason - View or Input, Larger Area */}
          {(isOverdue && !isResolved && isAssignedToCurrentUser) || bugDetails.delayReason ? (
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Delay Reason
              </Label>
              {isResolved || bugDetails.delayReason ? (
                <p className="text-sm text-black p-3 rounded-md border border-gray-200">
                  {bugDetails.delayReason || "N/A"}
                </p>
              ) : (
                <Textarea
                  className="text-sm text-black p-3 rounded-md border border-gray-200 min-h-[4rem] max-h-40 resize-y focus:border-gray-500 focus:ring focus:ring-gray-200"
                  value={delayReason}
                  onChange={(e) => setDelayReason(e.target.value)}
                  placeholder="Enter reason for delay"
                />
              )}
            </div>
          ) : null}

          {/* Resolution Note - Input if Resolving, View if Resolved, Larger Area */}
          {(!isResolved && isAssignedToCurrentUser) || bugDetails.resolutionNote ? (
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
              <Label className="text-xs font-bold text-gray-800 mb-sticky top-0 1 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Resolution Note
              </Label>
              {!isResolved && isAssignedToCurrentUser ? (
                <Textarea
                  className="text-sm text-black p-3 rounded-md border border-gray-200 min-h-[6rem] max-h-40 resize-y focus:border-gray-500 focus:ring focus:ring-gray-200"
                  value={resolutionNote}
                  onChange={(e) => setResolutionNote(e.target.value)}
                  placeholder="Enter resolution note"
                />
              ) : (
                <p className="text-sm text-black p-3 rounded-md border border-gray-200">
                  {bugDetails.resolutionNote}
                </p>
              )}
            </div>
          ) : null}

          {/* Error Message */}
          {error && (
            <div className="sm:col-span-2 lg:col-span-3 text-xs text-red-600 font-medium bg-red-50 border border-red-200 rounded p-3">
              {error}
            </div>
          )}
        </div>
        <DialogFooter className="px-4 sm:px-6 py-4 border-t border-gray-200">
          {!isResolved && isAssignedToCurrentUser && (
            <Button
              onClick={handleResolveBug}
              className="bg-blue-700 text-white hover:bg-blue-700 font-semibold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Resolving...
                </>
              ) : (
                "Resolve Bug"
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BugDetailsViewModal;





