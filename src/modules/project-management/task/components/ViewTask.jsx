


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  Folder,
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
} from "lucide-react";
import SubTaskList from "@/modules/project-management/task/components/sub-task/SubTaskList";
import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTaskById,
  updateTaskStatus,
  updateTaskReviewStatus,
} from "@/modules/project-management/task/slices/taskSlice";
import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
import { formatDateTimeIST, formatDateUTC } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

const priority = {
  High: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Medium: "bg-rose-100 text-rose-800 border-rose-200",
  Low: "bg-amber-100 text-amber-800 border-amber-200",
};

const statusColors = {
  Completed: "bg-emerald-600 text-white",
  "In Progress": "bg-amber-600 text-white",
  Pending: "bg-slate-600 text-white",
};

const TaskView = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const task_id = params.id;


  const task = useSelector((state) => state.task.currentTask);
  const { subtasks } = useSelector((state) => state.subTask);
  const loading = useSelector((state) => state.task.status === "loading");
  const updating = useSelector((state) => state.task.updating);
  const error = useSelector((state) => state.task.error);
  const { currentUser } = useCurrentUser(task?.teamLeadId);

  const [isReportBugOpen, setIsReportBugOpen] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isDelayDialogOpen, setIsDelayDialogOpen] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [pendingStatus, setPendingStatus] = useState(null);

  const isTeamLead = task?.teamLeadId === currentUser?.id;
  const isCPC = currentUser?.role === "cpc";
  const isTL = isTeamLead || currentUser?.position === "Team Lead";
  const isAssigned = task?.assignedTo === currentUser?.id;

  const isTaskClosed = task?.status === "Completed";

  // Compute subtask progress
  const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
  const totalSubtasks = safeSubtasks.length;
  const completedSubtasksCount = safeSubtasks.filter(
    (st) => st.status === "Completed"
  ).length;
  const subtaskProgress = totalSubtasks === 0 ? 100 : (completedSubtasksCount / totalSubtasks) * 100;
  const isAllSubtasksComplete = totalSubtasks === 0 || subtaskProgress === 100;
  const markCompleteDisabled = task?.status === "In Progress" && !isAllSubtasksComplete;

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
      dispatch(fetchSubTasksByTaskId(task_id));
    }
  }, [dispatch, task_id,task?.status,setIsReportBugOpen]);

  const canShowUpdateStatusButton = () => {
    return isAssigned && task?.status !== "In Progress" && !!getStatusButtonText(task?.status);
  };

  const canShowMarkResolvedButton = () => {
    return isTeamLead && task?.reviewStatus === "N/A" && task?.status === "Completed";
  };

  const canShowReportBugButton = () => {
    return (isTL || isCPC) && task?.status === "Completed";
  };

  const handleUpdateStatus = async (newStatus) => {
    if (updating) return;

    if (newStatus === "Completed") {
      const now = formatDateUTC(new Date());
      const deadlineDate = formatDateUTC(new Date(task?.deadline));
      
      if (now > deadlineDate) {
        setPendingStatus(newStatus);
        setIsDelayDialogOpen(true);
        return;
      }
    }

    try {
      await dispatch(updateTaskStatus({ taskId: task_id, status: newStatus }));
      toast.success(`Task status updated to ${newStatus}`);
      dispatch(fetchTaskById(task_id));
    } catch (err) {
      toast.error("Failed to update task status");
    }
  };

  const handleSubmitDelayReason = async () => {
    if (updating || !delayReason.trim()) return;

    try {
      await dispatch(
        updateTaskStatus({
          taskId: task_id,
          status: pendingStatus,
          delayReason,
        })
      );
      toast.success(`Task status updated to ${pendingStatus}`);
      dispatch(fetchTaskById(task_id));
      setIsDelayDialogOpen(false);
      setDelayReason("");
      setPendingStatus(null);
    } catch (err) {
      toast.error("Failed to update task status");
    }
  };

  const handleMarkAsResolved = async () => {
    if (updating) return;
    try {
      await dispatch(
        updateTaskReviewStatus({ task_id: task_id, reviewStatus: "Resolved" })
      );
      await dispatch(updateTaskStatus({ taskId: task_id, status: "Completed" }));
      toast.success("Task marked as Resolved and fully closed");
    } catch (err) {
      toast.error("Failed to mark task as Resolved");
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

  const getStatusButtonText = (status) => {
    if (status === "Pending") return "Start Task";
    if (status === "In Progress") return "Mark Completed";
    if (status === "Completed") return "Reopen Task";
    return null;
  };

  const getNextStatus = (status) => {
    if (status === "Pending") return "In Progress";
    if (status === "In Progress") return "Completed";
    if (status === "Completed") return "In Progress";
    return null;
  };

  const desc = task?.description || "";
  const isLongDesc = desc.length > 500;

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <CardHeader className="bg-transparent border-b border-slate-200">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <CardTitle className="text-lg sm:text-xl text-blue-600"></CardTitle>
              <Badge
                className={`${statusColors[task?.status] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
              >
                {task?.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 min-h-screen">
            {loading ? (
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
            ):
     
            
            (
              <>
                {/* Actions Bar at Top */}
                <div className="flex flex-wrap justify-end gap-2 mb-6">
                  {canShowUpdateStatusButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className={`bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-md ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={() => handleUpdateStatus(getNextStatus(task?.status))}
                          disabled={updating}
                        >
                          <ListTodo className="h-4 w-4" />
                          <span className="ml-2 hidden sm:inline">{getStatusButtonText(task?.status)}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{getStatusButtonText(task?.status)}</TooltipContent>
                    </Tooltip>
                  )}

                  {task?.status === "In Progress" && isAssigned && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="inline-block">
                          <Button
                            size="sm"
                            className={`rounded-full shadow-md transition-opacity ${
                              (markCompleteDisabled || updating)
                                ? "bg-blue-600 text-white opacity-60 cursor-not-allowed hover:bg-blue-600" 
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                            onClick={(markCompleteDisabled || updating) ? undefined : () => handleUpdateStatus("Completed")}
                            disabled={markCompleteDisabled || updating}
                          >
                            <ListTodo className="h-4 w-4 mr-1" />
                            <span className="hidden sm:inline">
                              {updating ? "Updating..." : "Mark Task as Completed"}
                            </span>
                          </Button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {markCompleteDisabled 
                          ? "Complete all subtasks to mark as complete" 
                          : totalSubtasks === 0 
                          ? "No subtasks - ready to complete the task" 
                          : "Mark the task as completed once all subtasks are done"
                        }
                      </TooltipContent>
                    </Tooltip>
                  )}

                  {/* {canShowMarkResolvedButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className={`bg-teal-600 text-white hover:bg-teal-700 rounded-full shadow-md ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={handleMarkAsResolved}
                          disabled={updating}
                        >
                          <ClipboardList className="h-4 w-4" />
                          <span className="ml-2 hidden sm:inline">{updating ? "Updating..." : "Mark as Resolved"}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Mark the Task as Resolved and Close</TooltipContent>
                    </Tooltip>
                  )} */}

                  {canShowReportBugButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-rose-600 text-white hover:bg-rose-700 rounded-full shadow-md"
                          onClick={handleReportBug}
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
                  {/* Task Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                      <InfoIcon className="mr-2 h-5 w-5" />
                      Task Details
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Task ID</label>
                        <p className="font-medium">{task?.task_id}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Title</label>
                        <p className="font-medium">{task?.title}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Project</label>
                          <p className="font-medium">{task?.projectName}</p>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Priority</label>
                          <Badge variant={getPriorityVariant(task?.priority)} className="mt-1">
                            {task?.priority}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Description</label>
                        <div className="flex items-start">
                          <div className="flex-grow">
                            {isLongDesc && !showFullDesc ? (
                              <>
                                <p>{desc.slice(0, 500)}...</p>
                                <button
                                  onClick={() => setShowFullDesc(true)}
                                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                                >
                                  View more <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                              </>
                            ) : (
                              <>
                                <p>{desc}</p>
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

                  {/* Subtask List */}
                  <SubTaskList
                    isTaskClosed={isTaskClosed}
                    task={task}
                    taskId={task?.task_id}
                    projectId={task?.projectId}
                  />

                  <Separator />

                  {/* Assigned Details and Review History in Two Columns */}
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
                          <div>
                            <div className="text-xs text-slate-500">Assigned To</div>
                            <div className="font-medium">{task?.assignedToDetails?.memberName || "N/A"}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Hash className="h-5 w-5 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">Assigned By</div>
                            <div className="font-medium">{task?.assignedBy || "N/A"}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">Deadline</div>
                            <div className="font-medium">{formatDateTimeIST(task?.deadline) || "N/A"}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reported Issues History */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                        <History className="mr-2 h-5 w-5" />
                        Reported Issues 
                      </h3>
                      {task?.bugs && task.bugs.length > 0 ? (
                        <ul className="space-y-3">
                         
                          {task.bugs.map((entry, index) => (
                            <li
                            onClick={()=>router.push()}
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
                        <div className="flex items-center justify-center h-24 text-slate-600 border border-dashed rounded-lg">
                          <div className="text-center">
                            <FileText className="h-6 w-6 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No review history available</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      {isReportBugOpen && (
        <ReportBugModal
        onBugReported={() => {
      dispatch(fetchTaskById(task_id));
   
    }}
        onClose={() => setIsReportBugOpen(false)} task_id={task_id}  />
      )}
      
      <Dialog open={isDelayDialogOpen} onOpenChange={setIsDelayDialogOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Deadline Passed!.</DialogTitle>
    </DialogHeader>
    <div className="py-4">
      <Label htmlFor="delayReason">Reason ?</Label>
      <textarea
        id="delayReason"
        value={delayReason}
        onChange={(e) => setDelayReason(e.target.value)}
        placeholder="Enter delay reason..."
        className="w-full mt-2 min-h-[50vh] p-3 bg-muted/10 rounded-md text-sm text-gray-800 placeholder:text-gray-400 focus:outline-1 focus:ring-0 border-0"
      />
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsDelayDialogOpen(false)}>
        Cancel
      </Button>
      <Button  className="bg-blue-700" onClick={handleSubmitDelayReason} disabled={!delayReason.trim() || updating}>
        Submit
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </TooltipProvider>
  );
};

export default TaskView;