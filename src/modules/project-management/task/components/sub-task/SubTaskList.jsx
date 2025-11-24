


// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
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
//   Eye,
//   Plus,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   Lock,
//   ListTodo,
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
//     const { project, status, successMessage } = useSelector(
//     (state) => state.project
//   );


//     const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { subtasks, loading, error } = useSelector((state) => state.subTask);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const subtasksPerPage = 5;
//   const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
//   const totalPages = Math.ceil(safeSubtasks.length / subtasksPerPage);
//   const indexOfLastSubtask = currentPage * subtasksPerPage;
//   const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
//   const currentSubtasks = safeSubtasks.slice(
//     indexOfFirstSubtask,
//     indexOfLastSubtask
//   );

//   // Fetch subtasks on mount and when taskId changes
//   useEffect(() => {
//     if (taskId) {
//       dispatch(fetchSubTasksByTaskId(taskId));
     
      
//     }
       
    
//   }, [dispatch, subtasks?.length, taskId]);
//   useEffect(() => {
  
//           dispatch(fetchProjectById(projectId));
   
    
//   }, [dispatch]);

//   // Modal states
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedSubtask, setSelectedSubtask] = useState(null);

//   // Calculate progress
//   const completedSubtasks = safeSubtasks.filter(
//     (st) => st.status === "Completed"
//   ).length;
//   const progress =
//     safeSubtasks.length > 0
//       ? (completedSubtasks / safeSubtasks.length) * 100
//       : 0;

//   // Handlers
//   // const handleView = (subtask) => {
//   //   router.push(`/task/${taskId}/${subtask.subtask_id}`);
//   // };
//   const handleView = (subtask) => {
//     router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
//   };
 

//   const handleEdit = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenEdit(true);
//   };

//   const handleDelete = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenDelete(true);
//     // Adjust page if deleting the last subtask on the current page
//     if (currentSubtasks.length === 1 && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const getStatusVariant = (status) => {
//     if (status === "Completed") return "success";
//     if (status === "In Progress") return "warning";
//     return "secondary"; // For Pending
//   };

//   return (
//     <section>
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-base sm:text-lg font-semibold flex items-center">
//           <ListTodo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
//           Subtasks
//         </h3>
      
//         {/* {!isTaskClosed &&  currentUser?.role === "cpc"||currentUser?.role === "Team Lead" || isTeamLead ? (
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
//             onClick={() => setOpenAdd(true)}
//             disabled={isTaskClosed}
//           >
//             <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
//           </Button>
//         ) : (
//           <Badge
//             variant="secondary"
//             className="flex items-center text-xs sm:text-sm"
//           >
//             <Lock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Read-Only
//           </Badge>
//         )} */}
//         {!isTaskClosed && (
//   <Button
//     className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
//     onClick={() => setOpenAdd(true)}
//   >
//     <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
//   </Button>
// )}

//       </div>
//       <div className="mb-3">
//         <div className="flex justify-between items-center mb-2">
//           <span className="font-medium text-xs sm:text-sm">
//             Progress: {progress.toFixed(0)}%
//           </span>
//           <Badge
//             variant={progress === 100 ? "success" : "default"}
//             className="text-xs sm:text-sm"
//           >
//             {completedSubtasks}/{safeSubtasks.length} Completed
//           </Badge>
//         </div>
//         <Progress value={progress} className="h-2 bg-gray-200" />
//       </div>
//       {loading && (
//         <div className="text-center text-sm text-gray-500">
//           Loading subtasks...
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length === 0 && (
//         <div className="text-center text-sm text-gray-500">
//           No subtasks available
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length > 0 && (
//         <ul className="space-y-2">
//           {currentSubtasks.map((st) => (
//             <li
//               key={st.subtask_id}
//               className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
//             >
//               <div className="flex-1 flex items-center">
//                 <CheckCircle2
//                   className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${
//                     st.status === "Completed"
//                       ? "text-green-500"
//                       : st.status === "In Progress"
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <span className="font-medium text-xs sm:text-sm">
//                   {st.title}
//                 </span>
                
//               </div>
//               <div className="flex items-center gap-1 sm:gap-2">
//                                            {st.isResolved === false && (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <span
//                         className={cn(
//                           "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap cursor-default",
//                           "bg-red-100 text-red-700"
//                         )}
//                       >
//                         Bug Found
//                       </span>
//                     </TooltipTrigger>
//                     <TooltipContent className="text-xs px-2 py-1 rounded shadow-md bg-red-600 text-white">
//                       Bug is active. Resolve now!
//                     </TooltipContent>
//                   </Tooltip>
//                 )}
//                 <Badge
//                   variant={getStatusVariant(st.status)}
//                   className="text-xs sm:text-sm"
//                 >
//                   {st.status}
//                 </Badge>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleView(st)}
//                       className="h-7 w-7 sm:h-8 sm:w-8"
//                     >
//                       <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>View</TooltipContent>
//                 </Tooltip>
//                 {!isTaskClosed && (
//                   <>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleEdit(st)}
//                           disabled={isTaskClosed}
//                           className="h-7 w-7 sm:h-8 sm:w-8"
//                         >
//                           <Edit className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Edit</TooltipContent>
//                     </Tooltip>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleDelete(st)}
//                           disabled={isTaskClosed}
//                           className="h-7 w-7 sm:h-8 sm:w-8"
//                         >
//                           <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Delete</TooltipContent>
//                     </Tooltip>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-3 mt-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//           <span className="text-xs sm:text-sm font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//         </div>
//       )}

//       {/* Create, Edit, Delete Modals */}
//       <CreateSubtaskModal
//         open={openAdd}
//         setOpen={setOpenAdd}
//         taskDetails={task}
//         taskId={taskId}
//         projectId={projectId}
//       />
//       {selectedSubtask && (
//         <EditSubtaskModal
//         onSubtaskEdit={() => {
  
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openEdit}
//           setOpen={setOpenEdit}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//           projectId={projectId}
//         />
//       )}
//       {selectedSubtask && (
//         <DeleteSubtaskModal
//              onSubtaskDelete={() => {
  
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openDelete}
//           setOpen={setOpenDelete}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//         />
//       )}
//     </section>
//   );
// };

// export default SubTaskList;










"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Eye,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Lock,
  ListTodo,
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
    const { project, status, successMessage } = useSelector(
    (state) => state.project
  );


    const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
  const router = useRouter();
  const dispatch = useDispatch();
  const { subtasks, loading, error } = useSelector((state) => state.subTask);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const subtasksPerPage = 5;
  const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
  const totalPages = Math.ceil(safeSubtasks.length / subtasksPerPage);
  const indexOfLastSubtask = currentPage * subtasksPerPage;
  const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
  const currentSubtasks = safeSubtasks.slice(
    indexOfFirstSubtask,
    indexOfLastSubtask
  );

  // Fetch subtasks on mount and when taskId changes
  useEffect(() => {
    if (taskId) {
      dispatch(fetchSubTasksByTaskId(taskId));
     
      
    }
       
    
  }, [dispatch, subtasks?.length, taskId]);
  useEffect(() => {
  
          dispatch(fetchProjectById(projectId));
   
    
  }, [dispatch]);

  // Modal states
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedSubtask, setSelectedSubtask] = useState(null);

  // Calculate progress
  const completedSubtasks = safeSubtasks.filter(
    (st) => st.status === "Completed"
  ).length;
  const progress =
    safeSubtasks.length > 0
      ? (completedSubtasks / safeSubtasks.length) * 100
      : 0;

  // Handlers
  // const handleView = (subtask) => {
  //   router.push(`/task/${taskId}/${subtask.subtask_id}`);
  // };
  const handleView = (subtask) => {
    router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
  };
 

  const handleEdit = (subtask) => {
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenEdit(true);
  };

  const handleDelete = (subtask) => {
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenDelete(true);
    // Adjust page if deleting the last subtask on the current page
    if (currentSubtasks.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getStatusVariant = (status) => {
    if (status === "Completed") return "success";
    if (status === "In Progress") return "warning";
    return "secondary"; // For Pending
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base sm:text-lg font-semibold flex items-center">
          <ListTodo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
          Subtasks
        </h3>
      

{/* Single Add Button – handles ALL cases with proper UI feedback */}
{isTeamLead && task?.status !== "Completed" && (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="inline-block">
        <Button
          className={cn(
            "bg-blue-600 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9 transition-all",
            task?.status === "Pending" 
              ? "hover:bg-blue-600/80 cursor-not-allowed opacity-70" 
              : "hover:bg-blue-700"
          )}
          onClick={() => task?.status === "In Progress" && setOpenAdd(true)}
          disabled={task?.status !== "In Progress"}
        >
          <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
        </Button>
      </div>
    </TooltipTrigger>

    {/* Tooltip message changes based on task status */}
    {task?.status === "Pending" && (
      <TooltipContent className="text-xs">
        Start the tasks to add subtasks
      </TooltipContent>
    )}
  </Tooltip>
)}

      </div>
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-xs sm:text-sm">
            Progress: {progress.toFixed(0)}%
          </span>
          <Badge
            variant={progress === 100 ? "success" : "default"}
            className="text-xs sm:text-sm"
          >
            {completedSubtasks}/{safeSubtasks.length} Completed
          </Badge>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>
      {loading && (
        <div className="text-center text-sm text-gray-500">
          Loading subtasks...
        </div>
      )}
      {!loading && !error && safeSubtasks.length === 0 && (
        <div className="text-center text-sm text-gray-500">
          No subtasks available
        </div>
      )}
      {!loading && !error && safeSubtasks.length > 0 && (
        <ul className="space-y-2">
          {currentSubtasks.map((st) => (
            <li
              key={st.subtask_id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
            >
              <div className="flex-1 flex items-center">
                <CheckCircle2
                  className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${
                    st.status === "Completed"
                      ? "text-green-500"
                      : st.status === "In Progress"
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                />
                <span className="font-medium text-xs sm:text-sm">
                  {st.title}
                </span>
                
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                                           {st.isResolved === false && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        className={cn(
                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap cursor-default",
                          "bg-red-100 text-red-700"
                        )}
                      >
                        Bug Found
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs px-2 py-1 rounded shadow-md bg-red-600 text-white">
                      Bug is active. Resolve now!
                    </TooltipContent>
                  </Tooltip>
                )}
                <Badge
                  variant={getStatusVariant(st.status)}
                  className="text-xs sm:text-sm"
                >
                  {st.status}
                </Badge>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleView(st)}
                      className="h-7 w-7 sm:h-8 sm:w-8"
                    >
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View</TooltipContent>
                </Tooltip>
              {/* Edit & Delete - Only show if Team Lead AND task is exactly "In Progress" */}
{isTeamLead && task?.status === "In Progress" && (
  <>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleEdit(st)}
      className="h-7 w-7 sm:h-8 sm:w-8"
    >
      <Edit className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
    </Button>

    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleDelete(st)}
      className="h-7 w-7 sm:h-8 sm:w-8"
    >
      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
    </Button>
  </>
)}
              </div>
            </li>
          ))}
        </ul>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="h-8 w-8 sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <span className="text-xs sm:text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8 sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      )}

      {/* Create, Edit, Delete Modals */}
      <CreateSubtaskModal
        open={openAdd}
        setOpen={setOpenAdd}
        taskDetails={task}
        taskId={taskId}
        projectId={projectId}
      />
      {selectedSubtask && (
        <EditSubtaskModal
        onSubtaskEdit={() => {
  
      dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
    }}
          open={openEdit}
          setOpen={setOpenEdit}
          subtask={selectedSubtask}
          taskId={taskId}
          isTaskClosed={isTaskClosed}
          projectId={projectId}
        />
      )}
      {selectedSubtask && (
        <DeleteSubtaskModal
             onSubtaskDelete={() => {
  
      dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
    }}
          open={openDelete}
          setOpen={setOpenDelete}
          subtask={selectedSubtask}
          taskId={taskId}
          isTaskClosed={isTaskClosed}
        />
      )}
    </section>
  );
};

export default SubTaskList;