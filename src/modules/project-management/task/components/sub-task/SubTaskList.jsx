













// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   CheckCircle2,
//   Edit,
//   Plus,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   ListTodo,
//   Tag,
// } from "lucide-react";
// import CreateSubtaskModal from "@/modules/project-management/task/components/sub-task/CreateSubTaskModal";
// import EditSubtaskModal from "@/modules/project-management/task/components/sub-task/EditSubTaskModal";
// import DeleteSubtaskModal from "@/modules/project-management/task/components/sub-task/DeleteSubTaskModal";
// import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
// import { useRouter } from "next/navigation";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { fetchProjectById } from "@/modules/project-management/project/slices/projectSlice";
// import { cn } from "@/lib/utils";

// const SubTaskList = ({ task, taskId, projectId, isTaskClosed }) => {
//   const { project } = useSelector((state) => state.project);
//   const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { subtasks, loading } = useSelector((state) => state.subTask);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const subtasksPerPage = 5;
//   const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
//   const totalPages = Math.ceil(safeSubtasks.length / subtasksPerPage);
//   const indexOfLast = currentPage * subtasksPerPage;
//   const indexOfFirst = indexOfLast - subtasksPerPage;
//   const currentSubtasks = safeSubtasks.slice(indexOfFirst, indexOfLast);

//   // Fetch data
//   useEffect(() => {
//     if (taskId) dispatch(fetchSubTasksByTaskId(taskId));
//   }, [dispatch, taskId]);

//   useEffect(() => {
//     if (projectId) dispatch(fetchProjectById(projectId));
//   }, [dispatch, projectId]);

//   // Modal states
//   const [openAdd, setOpenAdd] = useState(false);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedSubtask, setSelectedSubtask] = useState(null);

//   // Progress
//   const completedCount = safeSubtasks.filter((s) => s.status === "Completed").length;
//   const progress = safeSubtasks.length > 0 ? (completedCount / safeSubtasks.length) * 100 : 0;

//   // Handlers
//   const goToSubtask = (subtask) => {
//     router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
//   };

//   const handleEdit = (e, subtask) => {
//     e.stopPropagation();
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenEdit(true);
//   };

//   const handleDelete = (e, subtask) => {
//     e.stopPropagation();
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenDelete(true);
//     if (currentSubtasks.length === 1 && currentPage > 1) setCurrentPage(p => p - 1);
//   };

//   const getStatusColor = (status) => {
//     if (status === "Completed") return "bg-gray-700";
//     if (status === "In Progress") return "bg-blue-600";
//     return "bg-orange-600";
//   };

//   const getStatusText = (status) => {
//     return status === "Completed" ? "Complete" : status;
//   };

//   return (
//     <section>
//       {/* Header + Add Button */}
//       <div className="flex justify-between items-center mb-4 ">
//         {/* Progress Bar */}
//       <div className="mb-4">
//         <div className="flex justify-between text-sm mb-2 gap-2">
//           <span className="font-medium">Progress: {progress.toFixed(0)}%</span>
//           <span className="text-muted-foreground">
//             {completedCount}/{safeSubtasks.length} Completed
//           </span>
//         </div>
//         <Progress value={progress} className="h-2" />
//       </div>

//         {isTeamLead && task?.status !== "Completed" && (
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 size="sm"
//                 className={cn(
//                   "bg-blue-600 hover:bg-blue-700 text-white",
//                   task?.status !== "In Progress" && "opacity-60 cursor-not-allowed"
//                 )}
//                 onClick={() => task?.status === "In Progress" && setOpenAdd(true)}
//                 disabled={task?.status !== "In Progress"}
//               >
//                 <Plus className="mr-1 h-4 w-4" /> Add
//               </Button>
//             </TooltipTrigger>
//             {task?.status === "Pending" && (
//               <TooltipContent>Start the task first to add subtasks</TooltipContent>
//             )}
//           </Tooltip>
//         )}
//       </div>

     

//       {/* List */}
//       {loading ? (
//         <p className="text-center text-muted-foreground">Loading subtasks...</p>
//       ) : safeSubtasks.length === 0 ? (
//         <p className="text-center text-muted-foreground">No subtasks yet</p>
//       ) : (
//         <ul className="space-y-3">
//           {currentSubtasks.map((st) => (
//             <li
//               key={st.subtask_id}
//               onClick={() => goToSubtask(st)}
//               className="group relative p-4 border rounded-lg bg-card hover:bg-accent/50 transition-all cursor-pointer hover:shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 {/* Left: Title + Status Icon */}
//                 <div className="flex items-center gap-3 flex-1">
//                   <CheckCircle2
//                     className={cn(
//                       "h-5 w-5 flex-shrink-0",
//                       st.status === "Completed"
//                         ? "text-green-600"
//                         : st.status === "In Progress"
//                         ? "text-blue-600"
//                         : "text-orange-600"
//                     )}
//                   />
//                   <span className="font-medium text-foreground truncate">
//                     {st.title}
//                   </span>

//                   {/* Bug Badge */}
//                   {st.isResolved === false && (
//                     <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
//                       Bug Found
//                     </span>
//                   )}
//                 </div>

//                 {/* Right: Status Chip + Hover Actions */}
//                 <div className="flex items-center gap-4">
               

//                   {/* Edit / Delete - Only on hover + Team Lead */}
//                   <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                     {isTeamLead && task?.status === "In Progress" && (
//                       <>
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               onClick={(e) => handleEdit(e, st)}
//                               className="h-8 w-8"
//                             >
//                               <Edit className="h-4 w-4 text-yellow-600" />
//                             </Button>
//                           </TooltipTrigger>
//                           <TooltipContent>Edit</TooltipContent>
//                         </Tooltip>

//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               onClick={(e) => handleDelete(e, st)}
//                               className="h-8 w-8"
//                             >
//                               <Trash2 className="h-4 w-4 text-red-600" />
//                             </Button>
//                           </TooltipTrigger>
//                           <TooltipContent>Delete</TooltipContent>
//                         </Tooltip>
//                       </>
//                     )}
//                   </div>
//                      {/* Status Chip - Same style as main task */}
//                   <div className="flex items-center gap-2">
//                     <span
//                       className={cn(
//                         "text-xs px-3 py-1 rounded font-medium text-white",
//                         getStatusColor(st.status)
//                       )}
//                     >
//                       {getStatusText(st.status)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-4 mt-6">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <span className="text-sm">
//             Page {currentPage} of {totalPages}
//           </span>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       )}

//       {/* Modals */}
//       <CreateSubtaskModal
//         open={openAdd}
//         setOpen={setOpenAdd}
//         taskDetails={task}
//         taskId={taskId}
//         projectId={projectId}
//       />

//       {selectedSubtask && (
//         <EditSubtaskModal
//           open={openEdit}
//           setOpen={setOpenEdit}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           projectId={projectId}
//           isTaskClosed={isTaskClosed}
//           onSubtaskEdit={() => dispatch(fetchSubTasksByTaskId(taskId))}
//         />
//       )}

//       {selectedSubtask && (
//         <DeleteSubtaskModal
//           open={openDelete}
//           setOpen={setOpenDelete}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//           onSubtaskDelete={() => dispatch(fetchSubTasksByTaskId(taskId))}
//         />
//       )}
//     </section>
//   );
// };

// export default SubTaskList;













"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useDispatch, useSelector } from "react-redux";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CheckCircle2,
  Edit,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CreateSubtaskModal from "@/modules/project-management/task/components/sub-task/CreateSubTaskModal";
import EditSubtaskModal from "@/modules/project-management/task/components/sub-task/EditSubTaskModal";
import DeleteSubtaskModal from "@/modules/project-management/task/components/sub-task/DeleteSubTaskModal";
import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { fetchProjectById } from "@/modules/project-management/project/slices/projectSlice";
import { cn } from "@/lib/utils";

const SubTaskList = ({ task, taskId, projectId, isTaskClosed }) => {
  const { project } = useSelector((state) => state.project);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
  const router = useRouter();
  const dispatch = useDispatch();
  const { subtasks, loading } = useSelector((state) => state.subTask);

  // Fetch data
  useEffect(() => {
    if (taskId) dispatch(fetchSubTasksByTaskId(taskId));
  }, [dispatch, taskId]);

  useEffect(() => {
    if (projectId) dispatch(fetchProjectById(projectId));
  }, [dispatch, projectId]);

  // ────────────────────────────────────────────────────────────────
  // Visibility logic: Team Lead sees all, others see only assigned
  // ────────────────────────────────────────────────────────────────
  const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];

  const visibleSubtasks = isTeamLead
    ? safeSubtasks // Team Lead sees everything
    : safeSubtasks.filter((subtask) => {
        // Check if currentUser.id is in any of the assignedTo memberId's
    
        
        return subtask.assignedTo?.some(
          (member) => member.memberId === currentUser?.id
        );
      });


  // ────────────────────────────────────────────────────────────────
  // Pagination based on visible subtasks
  // ────────────────────────────────────────────────────────────────
  const [currentPage, setCurrentPage] = useState(1);
  const subtasksPerPage = 5;
  const totalPages = Math.ceil(visibleSubtasks.length / subtasksPerPage);
  const indexOfLast = currentPage * subtasksPerPage;
  const indexOfFirst = indexOfLast - subtasksPerPage;
  const currentSubtasks = visibleSubtasks.slice(indexOfFirst, indexOfLast);

  // ────────────────────────────────────────────────────────────────
  // Progress calculation (based on visible subtasks)
  // ────────────────────────────────────────────────────────────────
  const completedCount = visibleSubtasks.filter(
    (s) => s.status === "Completed"
  ).length;
  const progress =
    visibleSubtasks.length > 0
      ? (completedCount / visibleSubtasks.length) * 100
      : 0;

  // Modal states
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedSubtask, setSelectedSubtask] = useState(null);

  // Handlers
  const goToSubtask = (subtask) => {
    router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
  };

  const handleEdit = (e, subtask) => {
    e.stopPropagation();
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenEdit(true);
  };

  const handleDelete = (e, subtask) => {
    e.stopPropagation();
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenDelete(true);
    if (currentSubtasks.length === 1 && currentPage > 1)
      setCurrentPage((p) => p - 1);
  };

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-gray-700";
    if (status === "In Progress") return "bg-blue-600";
    return "bg-orange-600";
  };

  const getStatusText = (status) => {
    return status === "Completed" ? "Complete" : status;
  };

  return (
    <section>
      {/* Header + Progress + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-2 gap-2">
            <span className="font-medium">Progress: {progress.toFixed(0)}%</span>
            <span className="text-muted-foreground">
              {completedCount}/{visibleSubtasks.length} Completed
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {isTeamLead && task?.status !== "Completed" && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                className={cn(
                  "bg-blue-600 hover:bg-blue-700 text-white ml-4",
                  task?.status !== "In Progress" && "opacity-60 cursor-not-allowed"
                )}
                onClick={() => task?.status === "In Progress" && setOpenAdd(true)}
                disabled={task?.status !== "In Progress"}
              >
                <Plus className="mr-1 h-4 w-4" /> Add
              </Button>
            </TooltipTrigger>
            {task?.status === "Pending" && (
              <TooltipContent>Start the task first to add subtasks</TooltipContent>
            )}
          </Tooltip>
        )}
      </div>

      {/* List */}
      {loading ? (
        <p className="text-center text-muted-foreground">Loading subtasks...</p>
      ) : visibleSubtasks.length === 0 ? (
        <p className="text-center text-muted-foreground">
          {isTeamLead ? "No subtasks yet" : "You are not assigned to any subtask"}
        </p>
      ) : (
        <ul className="space-y-3">
          {currentSubtasks.map((st) => (
            <li
              key={st.subtask_id}
              onClick={() => goToSubtask(st)}
              className="group relative p-4 border rounded-lg bg-card hover:bg-accent/50 transition-all cursor-pointer hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                {/* Left: Title + Status Icon */}
                <div className="flex items-center gap-3 flex-1">
                  <CheckCircle2
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      st.status === "Completed"
                        ? "text-green-600"
                        : st.status === "In Progress"
                        ? "text-blue-600"
                        : "text-orange-600"
                    )}
                  />
                  <span className="font-medium text-foreground truncate">
                    {st.title}
                  </span>

                  {/* Bug Badge */}
                  {st.isResolved === false && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                      Bug Found
                    </span>
                  )}
                </div>

                {/* Right: Status Chip + Hover Actions */}
                <div className="flex items-center gap-4">
                  {/* Edit / Delete - Only on hover + Team Lead */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isTeamLead && task?.status === "In Progress" && (
                      <>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => handleEdit(e, st)}
                              className="h-8 w-8"
                            >
                              <Edit className="h-4 w-4 text-yellow-600" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Edit</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => handleDelete(e, st)}
                              className="h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Delete</TooltipContent>
                        </Tooltip>
                      </>
                    )}
                  </div>

                  {/* Status Chip */}
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-xs px-3 py-1 rounded font-medium text-white",
                        getStatusColor(st.status)
                      )}
                    >
                      {getStatusText(st.status)}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Modals */}
      <CreateSubtaskModal
        open={openAdd}
        setOpen={setOpenAdd}
        taskDetails={task}
        taskId={taskId}
        projectId={projectId}
      />

      {selectedSubtask && (
        <EditSubtaskModal
          open={openEdit}
          setOpen={setOpenEdit}
          subtask={selectedSubtask}
          taskId={taskId}
          projectId={projectId}
          isTaskClosed={isTaskClosed}
          onSubtaskEdit={() => dispatch(fetchSubTasksByTaskId(taskId))}
        />
      )}

      {selectedSubtask && (
        <DeleteSubtaskModal
          open={openDelete}
          setOpen={setOpenDelete}
          subtask={selectedSubtask}
          taskId={taskId}
          isTaskClosed={isTaskClosed}
          onSubtaskDelete={() => dispatch(fetchSubTasksByTaskId(taskId))}
        />
      )}
    </section>
  );
};

export default SubTaskList;