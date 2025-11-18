




"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  User,
  Mail,
  Flag,
  Hash,
  ListTodo,
  History,
  ClipboardList,
  Info as InfoIcon,
  FileText,
  Bug as BugIcon,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  RotateCcw,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubTaskById,
  updateSubTaskStatus,
} from "@/modules/project-management/task/slices/subTaskSlice";
import { fetchTaskById } from "@/modules/project-management/task/slices/taskSlice";
import { formatDateTimeIST, formatDateUTC } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";

const priority = {
  High: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Medium: "bg-rose-100 text-rose-800 border-rose-200",
  Low: "bg-amber-100 text-amber-800 border-amber-200",
};

const statusColors = {
  Completed: "bg-emerald-600 text-white",
  "In Progress": "bg-amber-600 text-white",
  Pending: "bg-slate-600 text-white",
  Reopened: "bg-blue-600 text-white",
};

const reviewStatusColors = {
  RESOLVED: "bg-green-100 text-green-800 border-green-200",
  PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
  REJECTED: "bg-red-100 text-red-800 border-red-200",
  "N/A": "bg-gray-100 text-gray-800 border-gray-200",
};

const SubTaskFullDetailsPage = ({ task_id, subtask_id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Using subTask slice selectors
  const subTask = useSelector((state) => state.subTask.currentSubTask);
  const loading = useSelector((state) => state.subTask.status === "loading");
  const updating = useSelector((state) => state.subTask.updating);
  const error = useSelector((state) => state.subTask.error);
  const { currentUser } = useCurrentUser(subTask?.teamLeadId);

  // Get task details for navigation
  const task = useSelector((state) => state.task.currentTask);
console.log(task?.status);

  const [isReportBugOpen, setIsReportBugOpen] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isDelayDialogOpen, setIsDelayDialogOpen] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [pendingStatus, setPendingStatus] = useState(null);

  const isTeamLead = task?.teamLeadId === currentUser?.id;
  const isCPC = currentUser?.role === "cpc";
  const isTL = isTeamLead || currentUser?.position === "Team Lead";
  const isAssigned = subTask?.assignedTo === currentUser?.id;
  const isSubTaskClosed = subTask?.status === "Completed" && subTask?.reviewStatus === "Resolved";

  useEffect(() => {
    if (task_id && subtask_id) {
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    }
    // Also fetch task details for navigation context
    if (task_id) {
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id, subtask_id]);

  // Enhanced status transition logic
  const getStatusButtonText = (status) => {
    switch (status) {
      case "Pending":
        return "Start Subtask";
      case "In Progress":
        return "Mark Completed";
      case "Completed":
        return "Reopen Subtask";
      default:
        return null;
    }
  };

  const getNextStatus = (status) => {
    switch (status) {
      case "Pending":
        return "In Progress";
      case "In Progress":
        return "Completed";
      case "Completed":
        return "Reopened"; // Reopen to In Progress workflow
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return ListTodo;
      case "In Progress":
        return RotateCcw;
      case "Completed":
        return CheckCircle;
      case "Reopened":
        return RotateCcw;
      default:
        return ListTodo;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-blue-600 hover:bg-blue-700";
      case "In Progress":
        return "bg-amber-600 hover:bg-amber-700";
      case "Completed":
        return "bg-gray-500 hover:bg-gray-600";
      case "Reopened":
        return "bg-blue-600 hover:bg-blue-700";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const canShowUpdateStatusButton = () => {
    // Only assigned user can update status, and only if not fully closed
    return isAssigned && !!getStatusButtonText(subTask?.status) && !isSubTaskClosed;
  };

  const canShowMarkResolvedButton = () => {
    // Team lead can mark as resolved only if completed but not yet reviewed
    return isTL && subTask?.status === "Completed" && subTask?.reviewStatus === "N/A";
  };

  const canShowReportBugButton = () => {
    return (isTL || isCPC) && subTask?.status === "Completed";
  };

  const handleUpdateStatus = async (newStatus) => {
    if (updating) return;

    // Check for deadline when completing
    if (newStatus === "Completed") {
      const now = formatDateUTC(new Date());
      const deadlineDate = formatDateUTC(new Date(subTask?.deadline));
      
      if (subTask?.deadline && now > deadlineDate) {
        setPendingStatus(newStatus);
        setIsDelayDialogOpen(true);
        return;
      }
    }

    // Handle reopening logic
    if (newStatus === "Reopened") {
      try {
        await dispatch(updateSubTaskStatus({ 
          taskId: task_id, 
          subtaskId: subtask_id, 
          status: "In Progress", // Actually set to In Progress when reopening
          updates: { 
            reviewStatus: "N/A", // Reset review status
            reopened: true 
          }
        })).unwrap();
        
        toast.success("Subtask reopened successfully");
        dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
      } catch (err) {
        toast.error("Failed to reopen subtask");
      }
      return;
    }

    try {
      await dispatch(updateSubTaskStatus({ 
        taskId: task_id, 
        subtaskId: subtask_id, 
        status: newStatus 
      })).unwrap();
      
      const actionText = newStatus === "In Progress" ? "started" : 
                       newStatus === "Completed" ? "completed" : "updated";
      toast.success(`Subtask ${actionText} successfully`);
      
      // Refresh the subtask data
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    } catch (err) {
      toast.error("Failed to update subtask status");
    }
  };

  const handleSubmitDelayReason = async () => {
    if (updating || !delayReason.trim()) return;

    try {
      await dispatch(
        updateSubTaskStatus({
          taskId: task_id,
          subtaskId: subtask_id,
          status: pendingStatus,
          delayReason: delayReason.trim(),
        })
      ).unwrap();
      
      toast.success(`Subtask marked as ${pendingStatus} with delay reason`);
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
      setIsDelayDialogOpen(false);
      setDelayReason("");
      setPendingStatus(null);
    } catch (err) {
      toast.error("Failed to update subtask status");
    }
  };

  const handleMarkAsResolved = async () => {
    if (updating) return;
    
    try {
      // Update review status to resolved
      await dispatch(
        updateSubTaskStatus({
          taskId: task_id,
          subtaskId: subtask_id,
          updates: { 
            reviewStatus: "Resolved",
            resolvedAt: new Date().toISOString()
          }
        })
      ).unwrap();

      toast.success("Subtask marked as Resolved and fully closed");
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
    } catch (err) {
      toast.error("Failed to mark subtask as Resolved");
    }
  };

  const handleReportBug = () => {
    setIsReportBugOpen(true);
  };

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      case "Low":
        return "secondary";
      default:
        return "outline";
    }
  };

  const desc = subTask?.description || "";
  const isLongDesc = desc.length > 500;

  const handleBackToTask = () => {
    router.back();
  };

  // Show loading skeleton
  if (loading) {
    return (
      <TooltipProvider>
        <div className="min-h-screen p-4">
          <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200">
            <CardHeader className="bg-transparent border-b border-slate-200">
              <div className="flex items-center justify-between">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6">
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-8 w-32" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
                <Separator />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>
    );
  }

  // Show error or not found
  if ( !subTask) {
    return (
      <TooltipProvider>
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl text-gray-300 mb-4">😞</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Subtask Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                The subtask you're looking for doesn't exist or has been removed.
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={handleBackToTask}>Back to Task</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200 min-h-screen">
          <CardHeader className="bg-transparent border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBackToTask}
                  className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back </span>
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <CardTitle className="text-lg sm:text-xl text-blue-600">
              
                </CardTitle>
                <Badge
                  className={`${statusColors[subTask?.status] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
                >
                  {subTask?.status}
                </Badge>
                {subTask?.reviewStatus && subTask.reviewStatus !== "N/A" && (
                  <Badge
                    className={`${reviewStatusColors[subTask.reviewStatus] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
                  >
                    {subTask.reviewStatus}
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6">
            {/* Enhanced Actions Bar at Top */}
            <div className="flex flex-wrap justify-end gap-2 mb-6">
              {task?.status === "In Progress" && canShowUpdateStatusButton() && (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        size="sm"
        className={`${getStatusColor(subTask?.status)} text-white rounded-full shadow-md ${
          updating ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleUpdateStatus(getNextStatus(subTask?.status))}
        disabled={updating}
      >
        <DynamicIcon 
          icon={getStatusIcon(subTask?.status)} 
          className="h-4 w-4" 
        />
        <span className="ml-2 hidden sm:inline">
          {getStatusButtonText(subTask?.status)}
        </span>
      </Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <div className="text-left">
        <p className="font-medium">{getStatusButtonText(subTask?.status)}</p>
        <p className="text-xs text-muted-foreground mt-1">
          Current: {subTask?.status}
        </p>
        {subTask?.status === "Completed" && (
          <p className="text-xs text-muted-foreground mt-1">
            Will reopen as In Progress
          </p>
        )}
      </div>
    </TooltipContent>
  </Tooltip>
)}

              {/* {canShowUpdateStatusButton() && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      className={`${getStatusColor(subTask?.status)} text-white rounded-full shadow-md ${
                        updating ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => handleUpdateStatus(getNextStatus(subTask?.status))}
                      disabled={updating}
                    >
                      <DynamicIcon 
                        icon={getStatusIcon(subTask?.status)} 
                        className="h-4 w-4" 
                      />
                      <span className="ml-2 hidden sm:inline">
                        {getStatusButtonText(subTask?.status)}
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <div className="text-left">
                      <p className="font-medium">{getStatusButtonText(subTask?.status)}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Current: {subTask?.status}
                      </p>
                      {subTask?.status === "Completed" && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Will reopen as In Progress
                        </p>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              )} */}
{/* 
              {canShowMarkResolvedButton() && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      className={`bg-teal-600 text-white hover:bg-teal-700 rounded-full shadow-md ${
                        updating ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={handleMarkAsResolved}
                      disabled={updating}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="ml-2 hidden sm:inline">
                        {updating ? "Updating..." : "Mark as Resolved"}
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Mark the Subtask as Resolved and Close</TooltipContent>
                </Tooltip>
              )} */}

              {canShowReportBugButton() && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-rose-600 text-white hover:bg-rose-700 rounded-full shadow-md"
                      onClick={handleReportBug}
                      disabled={updating}
                    >
                      <BugIcon className="h-4 w-4" />
                      <span className="ml-2 hidden sm:inline">Report Bug</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Report Bug</TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Single Column Layout */}
            <div className="space-y-6">
              {/* Subtask Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                  <InfoIcon className="mr-2 h-5 w-5" />
                  Subtask Details
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-medium text-slate-500">Subtask ID</label>
                    <p className="font-medium text-sm">{subTask?.subtask_id || subTask?._id}</p>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500">Parent Task</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer text-sm" 
                         onClick={handleBackToTask}>
                        {task?.title || subTask?.taskTitle || `Task ${task_id}`}
                      </p>
                      
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500">Title</label>
                    <p className="font-medium text-sm">{subTask?.title}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500">Project</label>
                      <p className="font-medium text-sm">{subTask?.projectName || task?.projectName}</p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500">Priority</label>
                      <Badge variant={getPriorityVariant(subTask?.priority)} className="mt-1">
                        {subTask?.priority}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500">Description</label>
                    <div className="flex items-start">
                      <div className="flex-grow">
                        {isLongDesc && !showFullDesc ? (
                          <>
                            <p className="whitespace-pre-wrap text-sm">{desc.slice(0, 500)}...</p>
                            <button
                              onClick={() => setShowFullDesc(true)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                            >
                              View more <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="whitespace-pre-wrap text-sm">{desc}</p>
                            {isLongDesc && (
                              <button
                                onClick={() => setShowFullDesc(false)}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                              >
                                View less <ChevronUp className="ml-1 h-4 w-4" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Assigned Details and Reported Issues in Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Assigned Details */}
              
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                    <User className="mr-2 h-5 w-5" />
                    Assigned Details
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-slate-500" />
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Assigned To</div>
                        <div className="font-medium">
                          {subTask?.assignedToDetails?.memberName || 
                          
                           "N/A"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Hash className="h-5 w-5 text-slate-500" />
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Assigned By</div>
                        <div className="font-medium">
                          { subTask?.assignedBy?.assignedBy || "N/A"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-slate-500" />
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Deadline</div>
                        <div className={`font-medium flex items-center gap-1 ${
                          subTask?.deadline && formatDateTimeIST(new Date()) > formatDateTimeIST(new Date(subTask.deadline)) 
                            ? "text-red-600" 
                            : ""
                        }`}>
                          {formatDateTimeIST(subTask?.deadline) || "No deadline"}
                          {subTask?.deadline && formatDateTimeIST(new Date()) > formatDateTimeIST(new Date(subTask.deadline)) && (
                            <AlertCircle className="h-3 w-3 text-red-500" title="Overdue" />
                          )}
                        </div>
                      </div>
                    </div>
                    {subTask?.delayReason && (
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs text-slate-500">Delay Reason</div>
                          <div className="font-medium text-amber-800 bg-amber-50 p-2 rounded-md text-sm mt-1">
                            {subTask.delayReason}
                          </div>
                        </div>
                      </div>
                    )}
                    {subTask?.reopened && (
                      <div className="flex items-center gap-3">
                        <RotateCcw className="h-5 w-5 text-blue-500" />
                        <div className="flex-1">
                          <div className="text-xs text-slate-500">Status</div>
                          <div className="font-medium text-blue-600">
                            Reopened on {formatDateUTC(subTask.updatedAt)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Reported Issues */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                    <BugIcon className="mr-2 h-5 w-5" />
                    Reported Issues
                  </h3>
                  {/* bug details will be updated here  */}
                  {subTask?.bugs && subTask.bugs.length > 0 ? (
                    <ul className="space-y-3 max-h-80 overflow-y-auto">
                      {subTask.bugs.map((entry, index) => (
                        <li
                          key={index}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-center text-sm mb-1">
                            <span className="font-semibold truncate max-w-[150px]">
                              {entry.title || "Untitled"}
                            </span>
                            <span className="text-xs text-slate-500 whitespace-nowrap">
                              {entry.createdAt ? formatDateUTC(entry.createdAt) : "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span className="italic">{entry.status || "Unknown"}</span>
                            <Badge
                              className={`${
                                priority[entry.priority] ||
                                "bg-slate-100 text-slate-800"
                              } text-[10px] px-2 py-0.5 rounded-full`}
                            >
                              {entry.priority || "N/A"}
                            </Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-center justify-center h-24 text-slate-600 border border-dashed rounded-lg bg-slate-50">
                      <div className="text-center">
                        <BugIcon className="h-6 w-6 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No reported issues</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Review History Section - Only show if there is history data */}
              {subTask?.history && subTask.history.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                      <History className="mr-2 h-5 w-5" />
                      Review History
                    </h3>
                    <ul className="space-y-3 max-h-80 overflow-y-auto">
                      {subTask.history.map((entry, index) => (
                        <li
                          key={index}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-semibold truncate max-w-[150px] text-sm">
                              {entry.action || entry.type || "Review Entry"}
                            </span>
                            <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                              {entry.timestamp ? formatDateUTC(entry.timestamp) : "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
                            <span className="italic text-xs">
                              {entry.status || entry.bugStatus || "Updated"}
                            </span>
                            {entry.reviewStatus && (
                              <Badge
                                className={`${
                                  reviewStatusColors[entry.reviewStatus?.toUpperCase()] ||
                                  "bg-slate-100 text-slate-800"
                                } text-[10px] px-2 py-0.5 rounded-full`}
                              >
                                {entry.reviewStatus}
                              </Badge>
                            )}
                          </div>
                          {entry.comments && (
                            <div className="mt-2 pt-2 border-t border-slate-200">
                              <p className="text-xs text-slate-600 italic bg-white p-2 rounded-sm">
                                "{entry.comments}"
                              </p>
                            </div>
                          )}
                          {entry.user && (
                            <div className="mt-1 text-xs text-slate-500">
                              By: {entry.user.name || entry.user.email}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Bug Modal */}
      {isReportBugOpen && (
        <ReportBugModal 
        onBugReported={() => {
      dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
       // optional if subtasks might change
    }}
          onClose={() => setIsReportBugOpen(false)} 
          subtask_id={subtask_id}
          subtaskTitle={subTask?.title}
          task_id={task_id}
        />
      )}
      
      {/* Delay Reason Dialog */}
      <Dialog open={isDelayDialogOpen} onOpenChange={setIsDelayDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              Deadline Passed!
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600 mb-3">
              The deadline for this subtask has passed. Please provide a reason for the delay.
            </p>
            <Label htmlFor="delayReason" className="text-sm font-medium">
              Reason for Delay
            </Label>
            <textarea
              id="delayReason"
              value={delayReason}
              onChange={(e) => setDelayReason(e.target.value)}
              placeholder="Enter the reason for delay..."
              className="w-full mt-2 min-h-[100px] p-3 bg-muted/10 rounded-md text-sm text-gray-800 placeholder:text-gray-400 focus:outline-1 focus:ring-0 border-0 resize-vertical"
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsDelayDialogOpen(false);
                setDelayReason("");
                setPendingStatus(null);
              }}
              disabled={updating}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmitDelayReason} 
              disabled={!delayReason.trim() || updating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {updating ? "Submitting..." : "Submit Delay Reason"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

// Helper component for dynamic icons
const DynamicIcon = ({ icon: IconComponent, ...props }) => {
  return <IconComponent {...props} />;
};

export default SubTaskFullDetailsPage;