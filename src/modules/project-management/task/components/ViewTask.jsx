







"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronLeft,
  Play,
  CheckCircle,
  RotateCcw,
  Clock,
  AlertCircle,
  User,
  Calendar,
  Flag,
  Tag,
  FileText,
  AlignLeft,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Edit,
} from "lucide-react";

import SubTaskList from "@/modules/project-management/task/components/sub-task/SubTaskList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTaskById,
  updateTaskStatus,
} from "@/modules/project-management/task/slices/taskSlice";
import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
import { formatDateTimeIST } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";

const TaskView = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id: task_id } = useParams();

  const task = useSelector((state) => state.task.currentTask);
  const { subtasks } = useSelector((state) => state.subTask);
  const loading = useSelector((state) => state.task.status === "loading");
  const updating = useSelector((state) => state.task.updating);
  const { currentUser } = useCurrentUser();

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [delayDialog, setDelayDialog] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [confirmCompleteOpen, setConfirmCompleteOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [assigneeOpen, setAssigneeOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [activeTab, setActiveTab] = useState("subtasks");

  const isTeamLead = task?.teamLeadId === currentUser?.id;
  const canEdit = isTeamLead;
  const allSubtasksDone = subtasks?.every((s) => s.status === "Completed") ?? true;

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
      dispatch(fetchSubTasksByTaskId(task_id));
    }
  }, [task_id, dispatch]);

  const getInitials = (name = "") =>
    name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  const assignees = useMemo(() => {
    if (!task?.assignedTo) return [];
    return Array.isArray(task.assignedTo) ? task.assignedTo : [task.assignedTo];
  }, [task?.assignedTo]);

  // Smart Action Button
  const getActionButton = () => {
    if (!canEdit || !task?.status) return null;

    if (task.status === "Pending")
      return { text: "Start Task", color: "bg-blue-600", icon: Play, next: "In Progress" };
    if (task.status === "In Progress")
      return {
        text: "Mark Complete",
        color: allSubtasksDone ? "bg-teal-600" : "bg-gray-500",
        icon: CheckCircle,
        next: "Completed",
        disabled: !allSubtasksDone,
      };
    if (task.status === "Completed")
      return { text: "Reopen Task", color: "bg-purple-600", icon: RotateCcw, next: "Pending" };

    return null;
  };

  const actionBtn = getActionButton();

  // Helper function to create actionedBy object (same as subtask)
  const createActionedBy = (note) => ({
    note,
    performedBy: currentUser?.name || currentUser?.email || "User",
    timestamp: new Date().toISOString(),
  });

  const handleStatusChange = async (newStatus) => {
    if (updating || !canEdit) return;

    // Create proper actionedBy object (same format as subtask)
    const actionedBy = createActionedBy(
      newStatus === "Pending" 
        ? "Reopened task" 
        : `Changed status to ${newStatus}`
    );

    if (newStatus === "Completed") {
      setConfirmCompleteOpen(true);
      return;
    }

    try {
      await dispatch(
        updateTaskStatus({ 
          taskId: task_id, 
          status: newStatus,
          actionedBy, // ← Added this
        })
      ).unwrap();
      toast.success(`Task is now ${newStatus}`);
      dispatch(fetchTaskById(task_id));
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const confirmComplete = async () => {
    setConfirmCompleteOpen(false);
    
    if (task.deadline && new Date() > new Date(task.deadline)) {
      setDelayDialog(true);
      return;
    }

    // Create proper actionedBy object
    const actionedBy = createActionedBy("Task marked as Completed");

    try {
      await dispatch(
        updateTaskStatus({ 
          taskId: task_id, 
          status: "Completed",
          actionedBy, // ← Added this
        })
      ).unwrap();
      toast.success("Task marked as Completed");
      dispatch(fetchTaskById(task_id));
    } catch (err) {
      toast.error("Failed to complete task");
    }
  };

  const submitDelay = async () => {
    if (!delayReason.trim()) {
      toast.error("Please provide a reason");
      return;
    }

    // Create proper actionedBy object
    const actionedBy = createActionedBy("Task Completed with delay");

    try {
      await dispatch(
        updateTaskStatus({
          taskId: task_id,
          status: "Completed",
          delayReason: delayReason.trim(),
          actionedBy, // ← Added this
        })
      ).unwrap();
      toast.success("Task completed with delay reason");
      setDelayDialog(false);
      setDelayReason("");
      dispatch(fetchTaskById(task_id));
    } catch (err) {
      toast.error("Failed to save delay reason");
    }
  };

  // Activity Log from task + subtasks
  const activityLog = useMemo(() => {
    const logs = [];

    if (task?.actionedBy) {
      logs.push(...task.actionedBy.map((a) => ({ ...a, type: "task" })));
    }

    subtasks?.forEach((st) => {
      if (st.actionedBy) {
        logs.push(...st.actionedBy.map((a) => ({ ...a, subtaskTitle: st.title, type: "subtask" })));
      }
    });

    return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [task?.actionedBy, subtasks]);

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

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="text-center p-12 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Not Found</h1>
          <Button onClick={() => router.back()} className="bg-teal-600 hover:bg-teal-700">
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
        <CardContent className="p-6 sm:p-8 space-y-8">

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-3">
            {actionBtn && (
              <Button
                onClick={() => handleStatusChange(actionBtn.next)}
                disabled={updating || actionBtn.disabled}
                className={`${actionBtn.color} text-white`}
              >
                <actionBtn.icon className="w-4 h-4 mr-2" />
                {actionBtn.text}
              </Button>
            )}
          </div>

          <div className="space-y-10">

       
 {/* Title */}
            {task.title && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-medium text-gray-600">Title</p>
                </div>
                <h1 className="text-sm font-semibold text-gray-600">
                  {task.title}
                </h1>
              </div>
            )}
         
  {/* Description */}
            {task.description && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlignLeft className="w-4 h-4 text-gray-600" />
                  <p className="text-sm font-semibold text-gray-600">
                    Description
                  </p>
                </div>

                <div className="text-gray-700 font-semibold text-sm leading-relaxed prose max-w-none mt-1">
                  {task.description.length > 600 && !showFullDesc ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            task.description
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
                          __html: task.description.replace(/\n/g, "<br/>"),
                        }}
                      />
                      {task.description.length > 600 && showFullDesc && (
                        <button
                          onClick={() => setShowFullDesc(false)}
                          className="text-teal-600 text-sm font-semibold mt-3 flex items-center hover:underline"
                        >
                          Show less <ChevronUp className="w-4 h-4 ml-1" />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
            {/* Info Section */}
            <div className="space-y-5">
              {task.projectName && (
                <div className="flex items-center gap-3">
                  <Flag className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">Project</p>
                  <p className="font-medium text-gray-900">{task.projectName}</p>
                </div>
              )}

              {task.priority && (
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">Priority</p>
                  <span
                    className={`text-xs px-2 py-1 rounded font-medium text-white ${
                      task.priority === "High"
                        ? "bg-red-600"
                        : task.priority === "Medium"
                        ? "bg-amber-500"
                        : "bg-emerald-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Tag className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">Status</p>
                <span
                  className={`text-xs px-2 py-1 rounded font-medium text-white ${
                    task.status === "Completed"
                      ? "bg-gray-700"
                      : task.status === "In Progress"
                      ? "bg-blue-600"
                      : "bg-orange-600"
                  }`}
                >
                  {task.status === "Completed" ? "Complete" : task.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">Assigned to</p>
                <div className="flex -space-x-3">
                  {assignees.length > 0 ? (
                    assignees.map((person, i) => (
                      <Avatar
                        key={i}
                        className="w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all transform hover:scale-110"
                        onClick={() => {
                          setSelectedPerson(person);
                          setAssigneeOpen(true);
                        }}
                      >
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback className="bg-teal-600 text-white text-sm font-bold">
                          {getInitials(person.memberName || person.name || "NA")}
                        </AvatarFallback>
                      </Avatar>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">Unassigned</span>
                  )}
                </div>
              </div>

              {task.deadline && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">Deadline</p>
                  <p className="text-sm text-gray-900 font-medium">
                    {formatDateTimeIST(task.deadline)}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600 font-medium w-32">Created At</p>
                <p className="text-sm text-gray-900 font-medium">
                  {formatDateTimeIST(task.createdAt)}
                </p>
              </div>

              {task.delayReason && (
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">Delay Reason</p>
                  <p className="text-sm text-gray-900 font-medium max-w-lg">{task.delayReason}</p>
                </div>
              )}

              {task.task_id && (
                <div className="flex items-center gap-3 cursor-pointer">
                  <Edit className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium w-32">Task Id</p>
                  <p className="text-sm font-medium text-green-900 hover:underline">
                    #{task.task_id}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tabs: Subtasks & Activity */}
          <div>
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab("subtasks")}
                className={`px-6 py-3 text-sm font-semibold transition-all relative ${
                  activeTab === "subtasks"
                    ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sub Tasks 
                {/* Sub Tasks ({subtasks?.length || 0}) */}
              </button>
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
            </div>

            <div className="py-2">
              {activeTab === "subtasks" && (
                <SubTaskList
                  isTaskClosed={task.status === "Completed"}
                  task={task}
                  taskId={task.task_id}
                  projectId={task.projectId}
                />
              )}

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
                            {act.subtaskTitle ? `on subtask "${act.subtaskTitle}"` : ""} - {act.note}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDateTimeIST(act.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-12">No activity recorded yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dialogs */}
      <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          {selectedPerson && (
            <div className="flex items-center gap-6 py-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={selectedPerson.avatar} />
                <AvatarFallback className="bg-teal-600 text-white text-3xl font-bold">
                  {getInitials(selectedPerson.memberName || selectedPerson.name || "NA")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedPerson.memberName || selectedPerson.name || "Unknown"}
                </p>
                <p className="text-lg text-gray-600">
                  {selectedPerson.role || selectedPerson.position || "Team Member"}
                </p>
                {selectedPerson.email && (
                  <p className="text-sm text-gray-500">{selectedPerson.email}</p>
                )}
                <p className="text-xs text-gray-500 mt-4">
                  Member ID: {selectedPerson.memberId || selectedPerson._id || "—"}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmCompleteOpen} onOpenChange={setConfirmCompleteOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Complete Task?</DialogTitle></DialogHeader>
          <p className="text-gray-600">Are you sure this task is fully done?</p>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setConfirmCompleteOpen(false)}>Cancel</Button>
            <Button onClick={confirmComplete} className="bg-teal-600 hover:bg-teal-700">Yes, Complete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle className="text-red-600">Deadline Missed</DialogTitle></DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium block mb-2">Reason for delay (required)</label>
            <textarea
              value={delayReason}
              onChange={(e) => setDelayReason(e.target.value)}
              className="w-full p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
              placeholder="Explain why this was completed after the deadline..."
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
            <Button onClick={submitDelay} disabled={!delayReason.trim() || updating} className="bg-teal-600 hover:bg-teal-700">
              Complete with Reason
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskView;
