





"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  ChevronDown,
  ChevronUp,
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
  const isTeamLead = task?.teamLeadId === currentUser?.id;
  const canEdit = isTeamLead;
  const allSubtasksDone = subtasks?.every((s) => s.status === "Completed") ?? true;

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
      dispatch(fetchSubTasksByTaskId(task_id));
    }
  }, [task_id, dispatch]);

  const handleStatusChange = async (newStatus) => {
    if (updating || !canEdit) return;

    if (newStatus === "Completed") {
      setConfirmCompleteOpen(true);
      return;
    }

    if (newStatus === "Pending") {
      await dispatch(updateTaskStatus({ taskId: task_id, status: "Pending" }));
      toast.success("Task reopened successfully");
      dispatch(fetchTaskById(task_id));
      return;
    }

    if (newStatus === "In Progress") {
      await dispatch(updateTaskStatus({ taskId: task_id, status: "In Progress" }));
      toast.success("Task is now In Progress");
      dispatch(fetchTaskById(task_id));
    }
  };

  const confirmComplete = async () => {
    setConfirmCompleteOpen(false);

    if (task.deadline && new Date() > new Date(task.deadline)) {
      setDelayDialog(true);
      return;
    }

    await dispatch(updateTaskStatus({ taskId: task_id, status: "Completed" }));
    toast.success("Task marked as Completed");
    dispatch(fetchTaskById(task_id));
  };

  const submitDelay = async () => {
    if (!delayReason.trim()) return;

    await dispatch(
      updateTaskStatus({
        taskId: task_id,
        status: "Completed",
        delayReason: delayReason.trim(),
      })
    );
    toast.success("Task completed with delay reason");
    setDelayDialog(false);
    setDelayReason("");
    dispatch(fetchTaskById(task_id));
  };

  const getInitials = (name = "") =>
    name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  // SMART ACTION BUTTON — Shows exact next step
  const getActionButton = () => {
    if (!canEdit || !task?.status) return null;

    if (task.status === "Pending") {
      return {
        text: "Start Task",
        subtitle: "Move to In Progress",
        color: "bg-blue-600 hover:bg-blue-700",
        icon: Play,
        next: "In Progress",
      };
    }

    if (task.status === "In Progress") {
      return {
        text: "Mark Complete",
        subtitle: "Finish this task",
        color: allSubtasksDone ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-500",
        icon: CheckCircle,
        next: "Completed",
        disabled: !allSubtasksDone,
      };
    }

    if (task.status === "Completed") {
      return {
        text: "Reopen Task",
        subtitle: "Back to Pending",
        color: "bg-purple-600 hover:bg-purple-700",
        icon: RotateCcw,
        next: "Pending",
      };
    }

    return null;
  };

  const actionBtn = getActionButton();

  // Loading & Not Found
  if (initialLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-teal-600 text-white py-8 px-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-28 bg-teal-700 rounded-lg animate-pulse" />
            <div className="h-6 w-48 bg-teal-400 rounded animate-pulse" />
          </div>
        </div>
        <Card className="shadow-xl border-0 min-h-screen">
          <CardContent className="p-8 space-y-10 animate-pulse">
            <div className="h-12 w-64 bg-gray-300 rounded-lg self-end" />
            <div className="space-y-6">
              <div className="h-8 w-96 bg-gray-200 rounded" />
              <div className="space-y-3">
                <div className="h-5 w-32 bg-gray-300 rounded" />
                <div className="h-20 w-full bg-gray-200 rounded" />
              </div>
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
            Back
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header */}
      <div className="bg-teal-600 text-white py-8 px-6">
        
        <div className="flex items-center gap-4">
            <Button size="sm" onClick={() => router.back()} className="bg-teal-700 hover:bg-teal-800 rounded-lg">
                      <ChevronLeft className="w-5 h-5 mr-1" /> Back
                    </Button>
          <p className="text-teal-100 text-sm">Task ID: {task.task_id}</p>
        </div>
      </div>

      <Card className="shadow-xl border-0 min-h-screen">
        <CardContent className="p-6 sm:p-8 space-y-5">

          {/* Smart Action Button — Tells user exactly what’s next */}
          {actionBtn && (
            <div className="flex justify-end">
              <div className="text-right">
                <Button
                  onClick={() => handleStatusChange(actionBtn.next)}
                  disabled={updating || actionBtn.disabled}
                  className={`${actionBtn.color} text-white font-medium px-6 py-3`}
                >
                  <actionBtn.icon className="w-5 h-5 mr-2" />
                  {actionBtn.text}
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  {actionBtn.subtitle}
                  {actionBtn.disabled && " — Complete all subtasks first"}
                </p>
              </div>
            </div>
          )}

          {/* Task Title */}
          <div>
            <p className="text-sm  font-bold text-gray-900"> Title</p>
            <h1 className="text-sm text-gray-900">{task.title}</h1>
          </div>

          {/* Description */}
          {task.description && (
            <div>
              <p className="text-sm text-gray-900  font-bold">Description</p>
              <div className="text-gray-700 leading-relaxed prose max-w-none">
                {task.description.length > 600 && !showFullDesc ? (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: task.description.slice(0, 600).replace(/\n/g, "<br/>") + "..." }} />
                    <button onClick={() => setShowFullDesc(true)} className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline">
                      Show more <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  </>
                ) : (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: task.description.replace(/\n/g, "<br/>") }} />
                    {task.description.length > 600 && (
                      <button onClick={() => setShowFullDesc(false)} className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline">
                        Show less <ChevronUp className="w-4 h-4 ml-1" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {task.projectName && (
              <div><p className="text-gray-900  font-bold">Project</p><p className="font-medium text-gray-800 mt-0.5">{task.projectName}</p></div>
            )}
            {task.priority && (
              <div><p className="text-gray-900  font-bold">Priority</p>
                <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
                  task.priority === "High" ? "bg-red-600" : task.priority === "Medium" ? "bg-amber-500" : "bg-emerald-600"
                }`}>{task.priority}</span>
              </div>
            )}
            <div>
              <p className="text-gray-900  font-bold">Status</p>
              <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
                task.status === "Completed" ? "bg-gray-700" :
                task.status === "In Progress" ? "bg-blue-600" : "bg-orange-600"
              }`}>
                {task.status}
              </span>
            </div>
            <div>
              <p className="text-gray-900  font-bold">Assigne</p>
              <div className="flex -space-x-3 mt-1.5">
                {task.assignedTo?.length > 0 ? task.assignedTo.map((p) => (
                  <Avatar key={p._id || p.memberId} className="w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all" onClick={() => { setSelectedPerson(p); setAssigneeOpen(true); }}>
                    <AvatarFallback className="bg-teal-600 text-white text-sm font-bold">
                      {getInitials(p.memberName || p.name || "NA")}
                    </AvatarFallback>
                  </Avatar>
                )) : <span className="text-gray-500 text-sm mt-1">Unassigned</span>}
              </div>
            </div>
            <div><p className="text-gray-900  font-bold">Created</p><p className="font-medium text-gray-800 mt-0.5">{formatDateTimeIST(task.createdAt)}</p></div>
            {task.deadline && <div><p className="text-gray-900  font-bold">Deadline</p><p className="font-medium text-gray-800 mt-0.5">{formatDateTimeIST(task.deadline)}</p></div>}
          </div>

          {task.delayReason && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-gray-900 flex items-center gap-2  font-bold">
                <AlertCircle className="w-5 h-5" /> Delay Reason
              </p>
              <p className="mt-2 text-amber-800 leading-relaxed">{task.delayReason}</p>
            </div>
          )}

          <Separator className="my-10" />

          {/* Subtasks */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Subtasks</h3>
            <SubTaskList
              isTaskClosed={task.status === "Completed"}
              task={task}
              taskId={task.task_id}
              projectId={task.projectId}
            />
          </div>
        </CardContent>
      </Card>

      {/* Dialogs */}
      <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Team Member Details</DialogTitle></DialogHeader>
          {selectedPerson && (
            <div className="flex items-center gap-6 py-6">
              <Avatar className="w-24 h-24"><AvatarFallback className="bg-teal-600 text-white text-3xl font-bold">{getInitials(selectedPerson.memberName || selectedPerson.name)}</AvatarFallback></Avatar>
              <div>
                <p className="text-2xl font-bold">{selectedPerson.memberName || selectedPerson.name || "Unknown"}</p>
                <p className="text-gray-600 text-lg">{selectedPerson.role || "Team Member"}</p>
                <p className="text-sm text-gray-500 mt-2">ID: {selectedPerson.memberId || selectedPerson._id || "—"}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmCompleteOpen} onOpenChange={setConfirmCompleteOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Mark Task as Complete?</DialogTitle></DialogHeader>
          <p className="text-gray-600 text-lg">Are you sure all work is finished and this task should be marked as <strong>Completed</strong>?</p>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setConfirmCompleteOpen(false)}>Cancel</Button>
            <Button onClick={confirmComplete} className="bg-teal-600 hover:bg-teal-700">Yes, Mark Complete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle className="text-red-600">Deadline Missed</DialogTitle></DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium block mb-2">Reason for delay (required)</label>
            <textarea value={delayReason} onChange={(e) => setDelayReason(e.target.value)}
              className="w-full p-4 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
              placeholder="Please explain why this task was completed after the deadline..." />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
            <Button onClick={submitDelay} disabled={!delayReason.trim()} className="bg-teal-600 hover:bg-teal-700">
              Complete with Reason
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskView;