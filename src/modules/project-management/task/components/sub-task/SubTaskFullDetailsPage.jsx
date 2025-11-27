"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronLeft,
  User,
  Tag,
  Calendar,
  Clock,
  Flag,
  AlertCircle,
  CheckCircle,
  RotateCcw,
  Bug as BugIcon,
  ChevronDown,
  ChevronUp,
  FileText,
  AlignLeft,
  AlertTriangle,
  Bug,
  Edit,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
  getSubTaskById,
  updateSubTaskStatus,
} from "@/modules/project-management/task/slices/subTaskSlice";
import { fetchTaskById } from "@/modules/project-management/task/slices/taskSlice";
import { formatDateTimeIST } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";
import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";

const SubTaskFullDetailsPage = ({ task_id, subtask_id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const subTask = useSelector((state) => state.subTask.currentSubTask);
  const task = useSelector((state) => state.task.currentTask);
  const loading = useSelector((state) => state.subTask.status === "loading");
  const updating = useSelector((state) => state.subTask.loading);
  const { currentUser } = useCurrentUser();

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [delayDialog, setDelayDialog] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [isReportBugOpen, setIsReportBugOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("activity");

  // New: Assignee Dialog States
  const [assigneeOpen, setAssigneeOpen] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const assignees = useMemo(() => {
    if (!subTask) return [];
    if (Array.isArray(subTask.assignedTo)) return subTask.assignedTo;
    if (subTask.assignedToDetails)
      return Array.isArray(subTask.assignedToDetails)
        ? subTask.assignedToDetails
        : [subTask.assignedToDetails];
    if (subTask.assignedTo) return [subTask.assignedTo];
    return [];
  }, [subTask]);

  const isAssignedToMe = assignees.some((a) => a.memberId === currentUser?.id);
  const isTeamLeadOrCPC =
    currentUser?.role === "cpc" ||
    task?.teamLeadId === currentUser?.id ||
    currentUser?.position === "Team Lead";

  const isFullyResolved = subTask?.reviewStatus === "Approved";

  useEffect(() => {
    if (task_id && subtask_id) {
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id, subtask_id]);

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const getNextStatus = (current) => {
    if (current === "Pending") return "In Progress";
    if (current === "In Progress") return "Completed";
    if (current === "Completed") return "In Progress";
    return null;
  };

  const getButtonConfig = () => {
    if (!isAssignedToMe || isFullyResolved) return null;
    const current = subTask.status;
    if (current === "Pending")
      return { text: "Start Work", color: "bg-blue-600", icon: Clock };
    if (current === "In Progress")
      return { text: "Mark Complete", color: "bg-teal-600", icon: CheckCircle };
    if (current === "Completed")
      return { text: "Reopen", color: "bg-purple-600", icon: RotateCcw };
    return null;
  };

  const handleStatusChange = async () => {
    const next = getNextStatus(subTask.status);
    if (!next) return;

    if (
      next === "Completed" &&
      subTask.deadline &&
      new Date() > new Date(subTask.deadline)
    ) {
      setDelayDialog(true);
      return;
    }

    const actionedBy = {
      note:
        subTask.status === "Completed"
          ? "Reopened subtask"
          : `Changed status to ${next}`,
      performedBy: currentUser?.name || currentUser?.email || "User",
      timestamp: new Date().toISOString(),
    };

    try {
      await dispatch(
        updateSubTaskStatus({
          taskId: task_id,
          subtaskId: subtask_id,
          status: next,
          reviewStatus: subTask.status === "Completed" ? "N/A" : undefined,
          actionedBy,
        })
      ).unwrap();

      toast.success("Status updated");
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const submitDelay = async () => {
    if (!delayReason.trim()) {
      toast.error("Please provide a reason");
      return;
    }

    try {
      await dispatch(
        updateSubTaskStatus({
          taskId: task_id,
          subtaskId: subtask_id,
          status: "Completed",
          delayReason: delayReason.trim(),
          actionedBy: {
            note: "Subtask Completed with delay",
            performedBy: currentUser?.name || "User",
            timestamp: new Date().toISOString(),
          },
        })
      ).unwrap();

      toast.success("Completed with delay reason");
      setDelayDialog(false);
      setDelayReason("");
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    } catch (err) {
      toast.error("Failed to save delay reason");
    }
  };

  const handleMarkAsResolved = async () => {
    try {
      await dispatch(
        updateSubTaskStatus({
          taskId: task_id,
          subtaskId: subtask_id,
          reviewStatus: "Approved",
          actionedBy: {
            note: "Subtask Approved !",
            performedBy: currentUser?.name || "User",
            timestamp: new Date().toISOString(),
          },
        })
      ).unwrap();

      toast.success("Subtask Approved!");
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    } catch (err) {
      toast.error("Failed to approve");
    }
  };

  const actionBtn = getButtonConfig();

  const openIssuesCount = useMemo(() => {
    const bugs = subTask?.bugs || [];
    return bugs.filter((bug) => bug.status !== "Resolved").length;
  }, [subTask?.bugs]);

  const activityLog = subTask?.actionedBy || [];
  const allIssues = subTask?.bugs || [];

  if (initialLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-teal-600 text-white py-8 px-6">
          <div className="flex items-center gap-4">
            <div className="h-9 w-24 bg-teal-700 rounded-lg animate-pulse" />
            <div className="h-8 w-64 bg-teal-500 rounded animate-pulse" />
          </div>
        </div>
        <Card className="min-h-screen mx-auto mt-8 shadow-xl border-0">
          <CardContent className="p-8 space-y-10 animate-pulse">
            <div className="h-10 w-40 bg-gray-300 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                  <div className="h-6 w-32 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!subTask) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="text-center p-12 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Subtask Not Found
          </h1>
          <Button
            onClick={() => router.back()}
            className="bg-teal-600 hover:bg-teal-700"
          >
            <ChevronLeft className="mr-2" /> Go Back
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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

      <Card className="shadow-xl border-0 min-h-screen">
        <CardContent className="p-6 sm:p-8 space-y-8 h-full">
          {/* Action Buttons */}

          <div className="flex flex-wrap justify-end gap-3">
            {actionBtn && (
              <Button
                onClick={handleStatusChange}
                disabled={updating}
                className={`${actionBtn.color} text-white`}
              >
                <actionBtn.icon className="w-4 h-4 mr-2" />
                {actionBtn.text}
              </Button>
            )}
            {isTeamLeadOrCPC &&
              subTask.status === "Completed" &&
              subTask.reviewStatus === "N/A" && (
                <Button
                  onClick={handleMarkAsResolved}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-2" /> Approve
                </Button>
              )}
            {isTeamLeadOrCPC &&
              subTask.status === "Completed" &&
              !isFullyResolved && (
                <Button
                  onClick={() => setIsReportBugOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <BugIcon className="w-4 h-4 mr-2" /> Report Issue
                </Button>
              )}
          </div>

          <div className="space-y-10">
            {/* Title */}
            {subTask.title && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-600">Title</p>
                </div>
                <h1 className="text-sm font-semibold text-gray-600">
                  {subTask.title}
                </h1>
              </div>
            )}

            {/* Description */}
            {subTask.description && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlignLeft className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-semibold text-gray-600">
                    Description
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed prose max-w-none mt-1">
                  {subTask.description.length > 600 && !showFullDesc ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            subTask.description
                              .slice(0, 600)
                              .replace(/\n/g, "<br/>") + "...",
                        }}
                      />
                      <button
                        onClick={() => setShowFullDesc(true)}
                        className="text-teal-600 text-sm font-semibold mt-3 flex items-center hover:underline"
                      >
                        Show more <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: subTask.description.replace(/\n/g, "<br/>"),
                        }}
                      />
                      {subTask.description.length > 600 && showFullDesc && (
                        <button
                          onClick={() => setShowFullDesc(false)}
                          className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline"
                        >
                          Show less <ChevronUp className="w-4 h-4 ml-1" />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Information Section */}
            <div className="space-y-5">
              {(subTask.projectName || task?.projectName) && (
                <div className="flex items-center gap-3">
                  <Flag className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Project Name
                  </p>
                  <p className="font-medium text-gray-900">
                    {subTask.projectName || task?.projectName}
                  </p>
                </div>
              )}

              {subTask.priority && (
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Priority
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium text-white ${
                      subTask.priority === "High"
                        ? "bg-red-600"
                        : subTask.priority === "Medium"
                        ? "bg-amber-500"
                        : "bg-emerald-600"
                    }`}
                  >
                    {subTask.priority}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Tag className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">Status</p>
                <span
                  className={`text-xs px-2 py-1 rounded font-medium text-white ${
                    subTask.status === "Completed"
                      ? "bg-gray-700"
                      : subTask.status === "In Progress"
                      ? "bg-blue-600"
                      : "bg-orange-600"
                  }`}
                >
                  {subTask.status === "Completed" ? "Complete" : subTask.status}
                </span>
              </div>

              {/* Assigned To - With Clickable Dialog */}
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">
                  Assigned to
                </p>
                <div className="flex -space-x-3">
                  {assignees.length > 0 ? (
                    assignees.map((person, i) => (
                      <Avatar
                        key={i}
                        className="w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all transform hover:scale-110"
                        onClick={() => {
                          setSelectedAssignee(person);
                          setAssigneeOpen(true);
                        }}
                      >
                        <AvatarImage
                          src={person.avatar}
                          alt={person.memberName || person.name}
                        />
                        <AvatarFallback className="bg-teal-600 text-white text-sm font-bold">
                          {getInitials(
                            person.memberName || person.name || "NA"
                          )}
                        </AvatarFallback>
                      </Avatar>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">Unassigned</span>
                  )}
                </div>
              </div>

              {subTask.deadline && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Deadline
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    {formatDateTimeIST(subTask.deadline)}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">
                  Created At
                </p>
                <p className="text-sm text-gray-900 font-medium">
                  {formatDateTimeIST(subTask.createdAt)}
                </p>
              </div>

              {subTask.delayReason && (
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Delay Reason
                  </p>
                  <p className="text-sm text-gray-900 font-medium max-w-lg">
                    {subTask.delayReason}
                  </p>
                </div>
              )}

              {subTask.reviewStatus && subTask.reviewStatus !== "N/A" && (
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Review
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded text-white font-medium ${
                      subTask.reviewStatus === "Approved"
                        ? "bg-emerald-600"
                        : "bg-red-600"
                    }`}
                  >
                    {subTask.reviewStatus}
                  </span>
                </div>
              )}

              {subTask.subtask_id && (
                <div className="flex items-center gap-3 cursor-pointer">
                  <Edit className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">
                    Subtask Id
                  </p>
                  <p className="text-sm font-medium text-green-900 hover:underline">
                    #{subTask.subtask_id}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Activity & Issues Tabs */}
          <div>
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab("activity")}
                className={`px-6 py-3 text-sm font-semibold transition-all relative ${
                  activeTab === "activity"
                    ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab("issues")}
                className={`px-6 py-3 text-sm font-semibold transition-all relative flex items-center gap-2 ${
                  activeTab === "issues"
                    ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Issues
                {openIssuesCount > 0 && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {openIssuesCount}
                  </span>
                )}
              </button>
            </div>

            <div className="py-2">
              {activeTab === "activity" && (
                <div className="space-y-4">
                  {activityLog.length > 0 ? (
                    activityLog.map((act, i) => (
                      <div key={i} className="flex gap-4">
                        <Avatar className="w-10 h-10 ring-2 ring-white flex-shrink-0">
                          <AvatarFallback className="bg-teal-600 text-white text-sm font-medium">
                            {getInitials(act.performedBy || "User")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-sm">
                          <p className="text-gray-900">
                            <span className="font-medium">
                              {act.performedBy || "User"}
                            </span>{" "}
                            - {act.note}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDateTimeIST(act.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-12">
                      No activity recorded yet.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "issues" && (
                <div className="space-y-4">
                  {allIssues.length === 0 ? (
                    <div className="text-center py-16 text-gray-500">
                      <Bug className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <p className="text-lg font-medium">No issues reported</p>
                      <p className="text-sm mt-2">Everything looks good!</p>
                    </div>
                  ) : (
                    allIssues.map((bug, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 text-white ${
                            bug.status === "Resolved"
                              ? "bg-emerald-600"
                              : "bg-red-600"
                          }`}
                        >
                          <Bug className="w-5 h-5" />
                        </div>
                        <div className="flex-1 text-sm">
                          <div className="flex items-center justify-between">
                            <p className="text-gray-900">
                              <span className="font-medium">{bug.title}</span>
                            </p>
                            <Badge
                              className={
                                bug.status === "Resolved"
                                  ? "bg-emerald-600"
                                  : "bg-red-600"
                              }
                            >
                              {bug.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDateTimeIST(bug.createdAt)}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assignee Details Dialog */}
      <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          {selectedAssignee && (
            <div className="flex items-center gap-6 py-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={selectedAssignee.avatar} />
                <AvatarFallback className="bg-teal-600 text-white text-3xl font-bold">
                  {getInitials(
                    selectedAssignee.memberName || selectedAssignee.name || "NA"
                  )}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedAssignee.memberName ||
                    selectedAssignee.name ||
                    "Unknown"}
                </p>
                <p className="text-lg text-gray-600">
                  {selectedAssignee.role ||
                    selectedAssignee.position ||
                    "Team Member"}
                </p>
                {selectedAssignee.email && (
                  <p className="text-sm text-gray-500">
                    {selectedAssignee.email}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-4">
                  Memeber ID:{" "}
                  {selectedAssignee.memberId || selectedAssignee._id || "—"}
                </p>
              </div>
            </div>
          )}
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Report Bug Modal */}
      <ReportBugModal
        isOpen={isReportBugOpen}
        onClose={() => setIsReportBugOpen(false)}
        task_id={task_id}
        subtask_id={subtask_id}
        taskTitle={task?.title || "Unknown Task"}
        subtaskTitle={subTask.title}
        subtaskDescription={subTask.description || ""}
        onBugReported={() =>
          dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }))
        }
      />

      {/* Delay Reason Dialog */}
      <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-600">Deadline Missed</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Label>Reason for delay (required)</Label>
            <textarea
              value={delayReason}
              onChange={(e) => setDelayReason(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
              placeholder="Please explain why this was completed after the deadline..."
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDelayDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={submitDelay}
              disabled={!delayReason.trim() || updating}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Complete with Reason
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubTaskFullDetailsPage;
