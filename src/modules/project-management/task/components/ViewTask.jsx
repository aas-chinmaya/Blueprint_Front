






"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, User, Calendar, Flag, Clock, ListTodo, Bug as BugIcon } from "lucide-react";

import SubTaskList from "@/modules/project-management/task/components/sub-task/SubTaskList";
import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";
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
console.log(currentUser.employeeId);

  const [isReportBugOpen, setIsReportBugOpen] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [delayDialog, setDelayDialog] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [pendingStatus, setPendingStatus] = useState(null);
  const [assigneeOpen, setAssigneeOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const isAssigned = task?.assignedTo?.some(p => 
    p.memberId === currentUser?.id || p._id === currentUser?.id
  );

  const allSubtasksDone = !subtasks || subtasks.every(s => s.status === "Completed");

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
      dispatch(fetchSubTasksByTaskId(task_id));
    }
  }, [task_id, dispatch]);

  const handleStatus = async (newStatus) => {
    if (updating) return;
    if (newStatus === "Completed" && new Date() > new Date(task.deadline)) {
      setPendingStatus(newStatus);
      setDelayDialog(true);
      return;
    }
    await dispatch(updateTaskStatus({ taskId: task_id, status: newStatus }));
    toast.success("Status updated");
    dispatch(fetchTaskById(task_id));
  };

  const submitDelay = async () => {
    if (!delayReason.trim()) return;
    await dispatch(updateTaskStatus({ taskId: task_id, status: pendingStatus, delayReason }));
    toast.success("Task completed with delay reason");
    setDelayDialog(false);
    setDelayReason("");
    dispatch(fetchTaskById(task_id));
  };

  const getAction = () => {
    if (task?.status === "Pending") return { text: "Start Task", next: "In Progress" };
    if (task?.status === "In Progress") return { text: "Mark Completed", next: "Completed" };
    return null;
  };

  const action = getAction();

  const getInitials = (name = "") => name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusColor = {
    "Completed": "bg-gray-800 text-white",
    "In Progress": "bg-blue-600 text-white",
    "Pending": "bg-orange-600 text-white",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Perfect Teal Header - Only Back + Title */}
      <div className="bg-teal-600 text-white">
        <div className=" mx-auto px-6 py-5">
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="bg-teal-700 hover:bg-teal-800 text-white rounded-lg"
              onClick={() => router.back()}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{task?.title || "Loading task..."}</h1>
              <p className="text-teal-100 text-sm">Task ID: {task?.task_id || "..."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clean White Body */}
      <div className=" mx-auto px-6 py-10 space-y-10">
        {/* Status & Priority Chips + Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className={`${statusColor[task?.status] || "bg-gray-500"} px-4 py-1.5 text-sm font-medium`}>
              {task?.status || "Loading"}
            </Badge>
            <Badge className={`${priorityColor[task?.priority] || "bg-gray-200 text-gray-700"} px-4 py-1.5 text-sm font-medium`}>
              {task?.priority || "No Priority"} Priority
            </Badge>
          </div>

          <div className="flex gap-3">
            {action && isAssigned && (
              <Button
                onClick={() => handleStatus(action.next)}
                disabled={updating || (action.next === "Completed" && !allSubtasksDone)}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg"
              >
                <ListTodo className="w-4 h-4 mr-2" />
                {action.text}
              </Button>
            )}
            {task?.status === "Completed" && currentUser?.role === "cpc" && (
              <Button
                onClick={() => setIsReportBugOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                <BugIcon className="w-4 h-4 mr-2" />
                Report Bug
              </Button>
            )}
          </div>
        </div>

        {/* Task Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Deadline
            </p>
            <p className="font-medium mt-1">{formatDateTimeIST(task?.deadline)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Created
            </p>
            <p className="font-medium mt-1">{formatDateTimeIST(task?.createdAt)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Flag className="w-4 h-4" /> Project
            </p>
            <p className="font-medium mt-1">{task?.projectName || "—"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <User className="w-4 h-4" /> Assigned to
            </p>
            <div className="flex -space-x-2 mt-2">
              {task?.assignedTo?.length > 0 ? (
                task.assignedTo.map((p) => (
                  <Avatar
                    key={p._id}
                    className="w-9 h-9 ring-2 ring-white cursor-pointer hover:ring-teal-400 transition-all hover:z-10"
                    onClick={() => {
                      setSelectedPerson(p);
                      setAssigneeOpen(true);
                    }}
                  >
                    <AvatarFallback className="bg-teal-600 text-white text-xs font-bold">
                      {getInitials(p.memberName)}
                    </AvatarFallback>
                  </Avatar>
                ))
              ) : (
                <span className="text-gray-400 text-sm">—</span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl">
          <p className="text-sm text-gray-500 mb-3">Description</p>
          <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
            {task?.description?.length > 600 && !showFullDesc ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: task.description.slice(0, 600).replace(/\n/g, "<br/>") + "..." }} />
                <button
                  onClick={() => setShowFullDesc(true)}
                  className="text-teal-600 font-medium text-sm mt-3 hover:underline"
                >
                  Show more ↓
                </button>
              </>
            ) : (
              <>
                <div dangerouslySetInnerHTML={{ __html: (task?.description || "").replace(/\n/g, "<br/>") }} />
                {task?.description?.length > 600 && (
                  <button
                    onClick={() => setShowFullDesc(false)}
                    className="text-teal-600 font-medium text-sm mt-3 hover:underline"
                  >
                    Show less ↑
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Subtasks */}
        <div className="pt-8">
          <SubTaskList
            isTaskClosed={task?.status === "Completed"}
            task={task}
            taskId={task?.task_id}
            projectId={task?.projectId}
          />
        </div>
      </div>

      {/* Assignee Dialog */}
      <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Team Member</DialogTitle>
          </DialogHeader>
          {selectedPerson && (
            <div className="flex items-center gap-5 py-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-teal-600 text-white text-2xl font-bold">
                  {getInitials(selectedPerson.memberName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">{selectedPerson.memberName}</p>
                <p className="text-gray-600">{selectedPerson.role}</p>
                <p className="text-sm text-gray-500 mt-1">ID: {selectedPerson.memberId}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Report Bug */}
      <ReportBugModal
        isOpen={isReportBugOpen}
        onClose={() => setIsReportBugOpen(false)}
        task_id={task_id}
        onBugReported={() => dispatch(fetchTaskById(task_id))}
      />

      {/* Delay Dialog */}
      <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Task is past deadline</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <label className="text-sm font-medium block mb-2">Reason for delay</label>
            <textarea
              value={delayReason}
              onChange={(e) => setDelayReason(e.target.value)}
              className="w-full p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Please explain the delay..."
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
            <Button onClick={submitDelay} disabled={!delayReason.trim()} className="bg-teal-600 hover:bg-teal-700">
              Submit & Complete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskView;