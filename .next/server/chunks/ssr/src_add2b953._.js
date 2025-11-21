module.exports = {

"[project]/src/modules/project-management/task/components/sub-task/SubTaskFullDetailsPage.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   User,
//   Mail,
//   Flag,
//   Hash,
//   ListTodo,
//   History,
//   ClipboardList,
//   Info as InfoIcon,
//   FileText,
//   Bug as BugIcon,
//   ArrowLeft,
//   ChevronDown,
//   ChevronUp,
//   AlertCircle,
//   CheckCircle,
//   RotateCcw,
// } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getSubTaskById,
//   updateSubTaskStatus,
// } from "@/modules/project-management/task/slices/subTaskSlice";
// import { fetchTaskById } from "@/modules/project-management/task/slices/taskSlice";
// import { formatDateTimeIST, formatDateUTC } from "@/utils/formatDate";
// import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Skeleton } from "@/components/ui/skeleton";
// import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";
// const priority = {
//   High: "bg-emerald-100 text-emerald-800 border-emerald-200",
//   Medium: "bg-rose-100 text-rose-800 border-rose-200",
//   Low: "bg-amber-100 text-amber-800 border-amber-200",
// };
// const statusColors = {
//   Completed: "bg-emerald-600 text-white",
//   "In Progress": "bg-amber-600 text-white",
//   Pending: "bg-slate-600 text-white",
//   Reopened: "bg-blue-600 text-white",
// };
// const reviewStatusColors = {
//   RESOLVED: "bg-green-100 text-green-800 border-green-200",
//   PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
//   REJECTED: "bg-red-100 text-red-800 border-red-200",
//   "N/A": "bg-gray-100 text-gray-800 border-gray-200",
// };
// const SubTaskFullDetailsPage = ({ task_id, subtask_id }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   // Using subTask slice selectors
//   const subTask = useSelector((state) => state.subTask.currentSubTask);
//   const loading = useSelector((state) => state.subTask.status === "loading");
//   const updating = useSelector((state) => state.subTask.updating);
//   const error = useSelector((state) => state.subTask.error);
//   const { currentUser } = useCurrentUser(subTask?.teamLeadId);
//   // Get task details for navigation
//   const task = useSelector((state) => state.task.currentTask);
// console.log(task?.status);
//   const [isReportBugOpen, setIsReportBugOpen] = useState(false);
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [isDelayDialogOpen, setIsDelayDialogOpen] = useState(false);
//   const [delayReason, setDelayReason] = useState("");
//   const [pendingStatus, setPendingStatus] = useState(null);
//   const isTeamLead = task?.teamLeadId === currentUser?.id;
//   const isCPC = currentUser?.role === "cpc";
//   const isTL = isTeamLead || currentUser?.position === "Team Lead";
//   const isAssigned = subTask?.assignedTo === currentUser?.id;
//   const isSubTaskClosed = subTask?.status === "Completed" && subTask?.reviewStatus === "Resolved";
//   useEffect(() => {
//     if (task_id && subtask_id) {
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     }
//     // Also fetch task details for navigation context
//     if (task_id) {
//       dispatch(fetchTaskById(task_id));
//     }
//   }, [dispatch, task_id, subtask_id]);
//   // Enhanced status transition logic
//   const getStatusButtonText = (status) => {
//     switch (status) {
//       case "Pending":
//         return "Start Subtask";
//       case "In Progress":
//         return "Mark Completed";
//       case "Completed":
//         return "Reopen Subtask";
//       default:
//         return null;
//     }
//   };
//   const getNextStatus = (status) => {
//     switch (status) {
//       case "Pending":
//         return "In Progress";
//       case "In Progress":
//         return "Completed";
//       case "Completed":
//         return "Reopened"; // Reopen to In Progress workflow
//       default:
//         return null;
//     }
//   };
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Pending":
//         return ListTodo;
//       case "In Progress":
//         return RotateCcw;
//       case "Completed":
//         return CheckCircle;
//       case "Reopened":
//         return RotateCcw;
//       default:
//         return ListTodo;
//     }
//   };
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "bg-blue-600 hover:bg-blue-700";
//       case "In Progress":
//         return "bg-amber-600 hover:bg-amber-700";
//       case "Completed":
//         return "bg-gray-500 hover:bg-gray-600";
//       case "Reopened":
//         return "bg-blue-600 hover:bg-blue-700";
//       default:
//         return "bg-gray-500 hover:bg-gray-600";
//     }
//   };
//   const canShowUpdateStatusButton = () => {
//     // Only assigned user can update status, and only if not fully closed
//     return isAssigned && !!getStatusButtonText(subTask?.status) && !isSubTaskClosed;
//   };
//   const canShowMarkResolvedButton = () => {
//     // Team lead can mark as resolved only if completed but not yet reviewed
//     return isTL && subTask?.status === "Completed" && subTask?.reviewStatus === "N/A";
//   };
//   const canShowReportBugButton = () => {
//     return (isTL || isCPC) && subTask?.status === "Completed";
//   };
//   const handleUpdateStatus = async (newStatus) => {
//     if (updating) return;
//     // Check for deadline when completing
//     if (newStatus === "Completed") {
//       const now = formatDateUTC(new Date());
//       const deadlineDate = formatDateUTC(new Date(subTask?.deadline));
//       if (subTask?.deadline && now > deadlineDate) {
//         setPendingStatus(newStatus);
//         setIsDelayDialogOpen(true);
//         return;
//       }
//     }
//     // Handle reopening logic
//     if (newStatus === "Reopened") {
//       try {
//         await dispatch(updateSubTaskStatus({ 
//           taskId: task_id, 
//           subtaskId: subtask_id, 
//           status: "In Progress", // Actually set to In Progress when reopening
//           updates: { 
//             reviewStatus: "N/A", // Reset review status
//             reopened: true 
//           }
//         })).unwrap();
//         toast.success("Subtask reopened successfully");
//         dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//       } catch (err) {
//         toast.error("Failed to reopen subtask");
//       }
//       return;
//     }
//     try {
//       await dispatch(updateSubTaskStatus({ 
//         taskId: task_id, 
//         subtaskId: subtask_id, 
//         status: newStatus 
//       })).unwrap();
//       const actionText = newStatus === "In Progress" ? "started" : 
//                        newStatus === "Completed" ? "completed" : "updated";
//       toast.success(`Subtask ${actionText} successfully`);
//       // Refresh the subtask data
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     } catch (err) {
//       toast.error("Failed to update subtask status");
//     }
//   };
//   const handleSubmitDelayReason = async () => {
//     if (updating || !delayReason.trim()) return;
//     try {
//       await dispatch(
//         updateSubTaskStatus({
//           taskId: task_id,
//           subtaskId: subtask_id,
//           status: pendingStatus,
//           delayReason: delayReason.trim(),
//         })
//       ).unwrap();
//       toast.success(`Subtask marked as ${pendingStatus} with delay reason`);
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//       setIsDelayDialogOpen(false);
//       setDelayReason("");
//       setPendingStatus(null);
//     } catch (err) {
//       toast.error("Failed to update subtask status");
//     }
//   };
//   const handleMarkAsResolved = async () => {
//     if (updating) return;
//     try {
//       // Update review status to resolved
//       await dispatch(
//         updateSubTaskStatus({
//           taskId: task_id,
//           subtaskId: subtask_id,
//           updates: { 
//             reviewStatus: "Resolved",
//             resolvedAt: new Date().toISOString()
//           }
//         })
//       ).unwrap();
//       toast.success("Subtask marked as Resolved and fully closed");
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     } catch (err) {
//       toast.error("Failed to mark subtask as Resolved");
//     }
//   };
//   const handleReportBug = () => {
//     setIsReportBugOpen(true);
//   };
//   const getPriorityVariant = (priority) => {
//     switch (priority) {
//       case "High":
//         return "destructive";
//       case "Medium":
//         return "default";
//       case "Low":
//         return "secondary";
//       default:
//         return "outline";
//     }
//   };
//   const desc = subTask?.description || "";
//   const isLongDesc = desc.length > 500;
//   const handleBackToTask = () => {
//     router.back();
//   };
//   // Show loading skeleton
//   if (loading) {
//     return (
//       <TooltipProvider>
//         <div className="min-h-screen p-4">
//           <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200">
//             <CardHeader className="bg-transparent border-b border-slate-200">
//               <div className="flex items-center justify-between">
//                 <Skeleton className="h-10 w-32" />
//                 <Skeleton className="h-6 w-32" />
//                 <Skeleton className="h-8 w-24" />
//               </div>
//             </CardHeader>
//             <CardContent className="p-4 sm:p-6">
//               <div className="space-y-6">
//                 <div className="flex justify-end gap-2">
//                   <Skeleton className="h-8 w-32" />
//                   <Skeleton className="h-8 w-32" />
//                 </div>
//                 <div className="space-y-4">
//                   <Skeleton className="h-6 w-40" />
//                   <Skeleton className="h-4 w-24" />
//                   <Skeleton className="h-4 w-full" />
//                   <Skeleton className="h-4 w-3/4" />
//                   <div className="grid grid-cols-2 gap-4">
//                     <Skeleton className="h-4 w-full" />
//                     <Skeleton className="h-4 w-full" />
//                   </div>
//                   <Skeleton className="h-20 w-full" />
//                 </div>
//                 <Separator />
//                 <div className="space-y-4">
//                   <Skeleton className="h-6 w-40" />
//                   <Skeleton className="h-4 w-full" />
//                   <Skeleton className="h-4 w-full" />
//                 </div>
//                 <Separator />
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <Skeleton className="h-6 w-40" />
//                     <Skeleton className="h-4 w-full" />
//                     <Skeleton className="h-4 w-full" />
//                     <Skeleton className="h-4 w-full" />
//                   </div>
//                   <div className="space-y-4">
//                     <Skeleton className="h-6 w-40" />
//                     <Skeleton className="h-32 w-full" />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </TooltipProvider>
//     );
//   }
//   // Show error or not found
//   if ( !subTask) {
//     return (
//       <TooltipProvider>
//         <div className="min-h-screen flex items-center justify-center p-4">
//           <Card className="w-full max-w-2xl">
//             <CardContent className="p-8 text-center">
//               <div className="text-6xl text-gray-300 mb-4">😞</div>
//               <h2 className="text-xl font-bold text-gray-800 mb-2">
//                 Subtask Not Found
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 The subtask you're looking for doesn't exist or has been removed.
//               </p>
//               <div className="flex gap-3 justify-center">
//                 <Button onClick={handleBackToTask}>Back to Task</Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </TooltipProvider>
//     );
//   }
//   return (
//     <TooltipProvider>
//       <div className="min-h-screen">
//         <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200 min-h-screen">
//           <CardHeader className="bg-transparent border-b border-slate-200">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handleBackToTask}
//                   className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   <ArrowLeft className="h-4 w-4" />
//                   <span className="hidden sm:inline">Back </span>
//                 </button>
//               </div>
//               <div className="flex items-center gap-4">
//                 <CardTitle className="text-lg sm:text-xl text-blue-600">
//                 </CardTitle>
//                 <Badge
//                   className={`${statusColors[subTask?.status] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
//                 >
//                   {subTask?.status}
//                 </Badge>
//                 {subTask?.reviewStatus && subTask.reviewStatus !== "N/A" && (
//                   <Badge
//                     className={`${reviewStatusColors[subTask.reviewStatus] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
//                   >
//                     {subTask.reviewStatus}
//                   </Badge>
//                 )}
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent className="p-4 sm:p-6">
//             {/* Enhanced Actions Bar at Top */}
//             <div className="flex flex-wrap justify-end gap-2 mb-6">
//               {task?.status === "In Progress" && canShowUpdateStatusButton() && (
//   <Tooltip>
//     <TooltipTrigger asChild>
//       <Button
//         size="sm"
//         className={`${getStatusColor(subTask?.status)} text-white rounded-full shadow-md ${
//           updating ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         onClick={() => handleUpdateStatus(getNextStatus(subTask?.status))}
//         disabled={updating}
//       >
//         <DynamicIcon 
//           icon={getStatusIcon(subTask?.status)} 
//           className="h-4 w-4" 
//         />
//         <span className="ml-2 hidden sm:inline">
//           {getStatusButtonText(subTask?.status)}
//         </span>
//       </Button>
//     </TooltipTrigger>
//     <TooltipContent side="bottom">
//       <div className="text-left">
//         <p className="font-medium">{getStatusButtonText(subTask?.status)}</p>
//         <p className="text-xs text-muted-foreground mt-1">
//           Current: {subTask?.status}
//         </p>
//         {subTask?.status === "Completed" && (
//           <p className="text-xs text-muted-foreground mt-1">
//             Will reopen as In Progress
//           </p>
//         )}
//       </div>
//     </TooltipContent>
//   </Tooltip>
// )}
//               {/* {canShowUpdateStatusButton() && (
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       size="sm"
//                       className={`${getStatusColor(subTask?.status)} text-white rounded-full shadow-md ${
//                         updating ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                       onClick={() => handleUpdateStatus(getNextStatus(subTask?.status))}
//                       disabled={updating}
//                     >
//                       <DynamicIcon 
//                         icon={getStatusIcon(subTask?.status)} 
//                         className="h-4 w-4" 
//                       />
//                       <span className="ml-2 hidden sm:inline">
//                         {getStatusButtonText(subTask?.status)}
//                       </span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent side="bottom">
//                     <div className="text-left">
//                       <p className="font-medium">{getStatusButtonText(subTask?.status)}</p>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Current: {subTask?.status}
//                       </p>
//                       {subTask?.status === "Completed" && (
//                         <p className="text-xs text-muted-foreground mt-1">
//                           Will reopen as In Progress
//                         </p>
//                       )}
//                     </div>
//                   </TooltipContent>
//                 </Tooltip>
//               )} */}
// {/* 
//               {canShowMarkResolvedButton() && (
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       size="sm"
//                       className={`bg-teal-600 text-white hover:bg-teal-700 rounded-full shadow-md ${
//                         updating ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                       onClick={handleMarkAsResolved}
//                       disabled={updating}
//                     >
//                       <CheckCircle className="h-4 w-4" />
//                       <span className="ml-2 hidden sm:inline">
//                         {updating ? "Updating..." : "Mark as Resolved"}
//                       </span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>Mark the Subtask as Resolved and Close</TooltipContent>
//                 </Tooltip>
//               )} */}
//               {canShowReportBugButton() && (
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       size="sm"
//                       className="bg-rose-600 text-white hover:bg-rose-700 rounded-full shadow-md"
//                       onClick={handleReportBug}
//                       disabled={updating}
//                     >
//                       <BugIcon className="h-4 w-4" />
//                       <span className="ml-2 hidden sm:inline">Report Bug</span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>Report Bug</TooltipContent>
//                 </Tooltip>
//               )}
//             </div>
//             {/* Single Column Layout */}
//             <div className="space-y-6">
//               {/* Subtask Details */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
//                   <InfoIcon className="mr-2 h-5 w-5" />
//                   Subtask Details
//                 </h3>
//                 <div className="space-y-4 text-sm">
//                   <div>
//                     <label className="block text-xs font-medium text-slate-500">Subtask ID</label>
//                     <p className="font-medium text-sm">{subTask?.subtask_id || subTask?._id}</p>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-slate-500">Parent Task</label>
//                     <div className="flex items-center gap-2">
//                       <p className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer text-sm" 
//                          onClick={handleBackToTask}>
//                         {task?.title || subTask?.taskTitle || `Task ${task_id}`}
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-slate-500">Title</label>
//                     <p className="font-medium text-sm">{subTask?.title}</p>
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-medium text-slate-500">Project</label>
//                       <p className="font-medium text-sm">{subTask?.projectName || task?.projectName}</p>
//                     </div>
//                     <div>
//                       <label className="block text-xs font-medium text-slate-500">Priority</label>
//                       <Badge variant={getPriorityVariant(subTask?.priority)} className="mt-1">
//                         {subTask?.priority}
//                       </Badge>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-slate-500">Description</label>
//                     <div className="flex items-start">
//                       <div className="flex-grow">
//                         {isLongDesc && !showFullDesc ? (
//                           <>
//                             <p className="whitespace-pre-wrap text-sm">{desc.slice(0, 500)}...</p>
//                             <button
//                               onClick={() => setShowFullDesc(true)}
//                               className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
//                             >
//                               View more <ChevronDown className="ml-1 h-4 w-4" />
//                             </button>
//                           </>
//                         ) : (
//                           <>
//                             <p className="whitespace-pre-wrap text-sm">{desc}</p>
//                             {isLongDesc && (
//                               <button
//                                 onClick={() => setShowFullDesc(false)}
//                                 className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
//                               >
//                                 View less <ChevronUp className="ml-1 h-4 w-4" />
//                               </button>
//                             )}
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Separator />
//               {/* Assigned Details and Reported Issues in Two Columns */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Assigned Details */}
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
//                     <User className="mr-2 h-5 w-5" />
//                     Assigned Details
//                   </h3>
//                   <div className="space-y-4 text-sm">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-slate-500" />
//                       <div className="flex-1">
//                         <div className="text-xs text-slate-500">Assigned To</div>
//                         <div className="font-medium">
//                           {subTask?.assignedToDetails?.memberName || 
//                            "N/A"}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Hash className="h-5 w-5 text-slate-500" />
//                       <div className="flex-1">
//                         <div className="text-xs text-slate-500">Assigned By</div>
//                         <div className="font-medium">
//                           { subTask?.assignedBy?.assignedBy || "N/A"}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Mail className="h-5 w-5 text-slate-500" />
//                       <div className="flex-1">
//                         <div className="text-xs text-slate-500">Deadline</div>
//                         <div className={`font-medium flex items-center gap-1 ${
//                           subTask?.deadline && formatDateTimeIST(new Date()) > formatDateTimeIST(new Date(subTask.deadline)) 
//                             ? "text-red-600" 
//                             : ""
//                         }`}>
//                           {formatDateTimeIST(subTask?.deadline) || "No deadline"}
//                           {subTask?.deadline && formatDateTimeIST(new Date()) > formatDateTimeIST(new Date(subTask.deadline)) && (
//                             <AlertCircle className="h-3 w-3 text-red-500" title="Overdue" />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     {subTask?.delayReason && (
//                       <div className="flex items-start gap-3">
//                         <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
//                         <div className="flex-1">
//                           <div className="text-xs text-slate-500">Delay Reason</div>
//                           <div className="font-medium text-amber-800 bg-amber-50 p-2 rounded-md text-sm mt-1">
//                             {subTask.delayReason}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {subTask?.reopened && (
//                       <div className="flex items-center gap-3">
//                         <RotateCcw className="h-5 w-5 text-blue-500" />
//                         <div className="flex-1">
//                           <div className="text-xs text-slate-500">Status</div>
//                           <div className="font-medium text-blue-600">
//                             Reopened on {formatDateUTC(subTask.updatedAt)}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 {/* Reported Issues */}
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
//                     <BugIcon className="mr-2 h-5 w-5" />
//                     Reported Issues
//                   </h3>
//                   {/* bug details will be updated here  */}
//                   {subTask?.bugs && subTask.bugs.length > 0 ? (
//                     <ul className="space-y-3 max-h-80 overflow-y-auto">
//                       {subTask.bugs.map((entry, index) => (
//                         <li
//                           key={index}
//                           className="bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
//                         >
//                           <div className="flex justify-between items-center text-sm mb-1">
//                             <span className="font-semibold truncate max-w-[150px]">
//                               {entry.title || "Untitled"}
//                             </span>
//                             <span className="text-xs text-slate-500 whitespace-nowrap">
//                               {entry.createdAt ? formatDateUTC(entry.createdAt) : "N/A"}
//                             </span>
//                           </div>
//                           <div className="flex justify-between items-center text-xs text-slate-600">
//                             <span className="italic">{entry.status || "Unknown"}</span>
//                             <Badge
//                               className={`${
//                                 priority[entry.priority] ||
//                                 "bg-slate-100 text-slate-800"
//                               } text-[10px] px-2 py-0.5 rounded-full`}
//                             >
//                               {entry.priority || "N/A"}
//                             </Badge>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <div className="flex items-center justify-center h-24 text-slate-600 border border-dashed rounded-lg bg-slate-50">
//                       <div className="text-center">
//                         <BugIcon className="h-6 w-6 mx-auto mb-2 opacity-50" />
//                         <p className="text-sm">No reported issues</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               {/* Review History Section - Only show if there is history data */}
//               {subTask?.history && subTask.history.length > 0 && (
//                 <>
//                   <Separator />
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
//                       <History className="mr-2 h-5 w-5" />
//                       Review History
//                     </h3>
//                     <ul className="space-y-3 max-h-80 overflow-y-auto">
//                       {subTask.history.map((entry, index) => (
//                         <li
//                           key={index}
//                           className="bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
//                         >
//                           <div className="flex justify-between items-start mb-2">
//                             <span className="font-semibold truncate max-w-[150px] text-sm">
//                               {entry.action || entry.type || "Review Entry"}
//                             </span>
//                             <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
//                               {entry.timestamp ? formatDateUTC(entry.timestamp) : "N/A"}
//                             </span>
//                           </div>
//                           <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
//                             <span className="italic text-xs">
//                               {entry.status || entry.bugStatus || "Updated"}
//                             </span>
//                             {entry.reviewStatus && (
//                               <Badge
//                                 className={`${
//                                   reviewStatusColors[entry.reviewStatus?.toUpperCase()] ||
//                                   "bg-slate-100 text-slate-800"
//                                 } text-[10px] px-2 py-0.5 rounded-full`}
//                               >
//                                 {entry.reviewStatus}
//                               </Badge>
//                             )}
//                           </div>
//                           {entry.comments && (
//                             <div className="mt-2 pt-2 border-t border-slate-200">
//                               <p className="text-xs text-slate-600 italic bg-white p-2 rounded-sm">
//                                 "{entry.comments}"
//                               </p>
//                             </div>
//                           )}
//                           {entry.user && (
//                             <div className="mt-1 text-xs text-slate-500">
//                               By: {entry.user.name || entry.user.email}
//                             </div>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       {/* Report Bug Modal */}
//       {isReportBugOpen && (
//         <ReportBugModal 
//         onBugReported={() => {
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//        // optional if subtasks might change
//     }}
//           onClose={() => setIsReportBugOpen(false)} 
//           subtask_id={subtask_id}
//           subtaskTitle={subTask?.title}
//           task_id={task_id}
//         />
//       )}
//       {/* Delay Reason Dialog */}
//       <Dialog open={isDelayDialogOpen} onOpenChange={setIsDelayDialogOpen}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle className="flex items-center gap-2 text-red-600">
//               <AlertCircle className="h-5 w-5" />
//               Deadline Passed!
//             </DialogTitle>
//           </DialogHeader>
//           <div className="py-4">
//             <p className="text-sm text-gray-600 mb-3">
//               The deadline for this subtask has passed. Please provide a reason for the delay.
//             </p>
//             <Label htmlFor="delayReason" className="text-sm font-medium">
//               Reason for Delay
//             </Label>
//             <textarea
//               id="delayReason"
//               value={delayReason}
//               onChange={(e) => setDelayReason(e.target.value)}
//               placeholder="Enter the reason for delay..."
//               className="w-full mt-2 min-h-[100px] p-3 bg-muted/10 rounded-md text-sm text-gray-800 placeholder:text-gray-400 focus:outline-1 focus:ring-0 border-0 resize-vertical"
//               rows={4}
//             />
//           </div>
//           <DialogFooter>
//             <Button 
//               variant="outline" 
//               onClick={() => {
//                 setIsDelayDialogOpen(false);
//                 setDelayReason("");
//                 setPendingStatus(null);
//               }}
//               disabled={updating}
//             >
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleSubmitDelayReason} 
//               disabled={!delayReason.trim() || updating}
//               className="bg-blue-600 hover:bg-blue-700"
//             >
//               {updating ? "Submitting..." : "Submit Delay Reason"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </TooltipProvider>
//   );
// };
// // Helper component for dynamic icons
// const DynamicIcon = ({ icon: IconComponent, ...props }) => {
//   return <IconComponent {...props} />;
// };
// export default SubTaskFullDetailsPage;
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   ChevronLeft,
//   User,
//   Calendar,
//   Clock,
//   Flag,
//   AlertCircle,
//   CheckCircle,
//   RotateCcw,
//   Bug as BugIcon,
//   Info,
//   ChevronDown,
//   ChevronUp,
//   History,
//   ListTodo,
// } from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getSubTaskById,
//   updateSubTaskStatus,
// } from "@/modules/project-management/task/slices/subTaskSlice";
// import { fetchTaskById } from "@/modules/project-management/task/slices/taskSlice";
// import { formatDateTimeIST } from "@/utils/formatDate";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { toast } from "sonner";
// import ReportBugModal from "@/modules/project-management/task/components/sub-task/ReportBugModal";
// const SubTaskFullDetailsPage = ({ task_id, subtask_id }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const subTask = useSelector((state) => state.subTask.currentSubTask);
//   const task = useSelector((state) => state.task.currentTask);
//   const loading = useSelector((state) => state.subTask.status === "loading");
//   const updating = useSelector((state) => state.subTask.updating);
//   const { currentUser } = useCurrentUser();
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [delayDialog, setDelayDialog] = useState(false);
//   const [delayReason, setDelayReason] = useState("");
//   const [pendingStatus, setPendingStatus] = useState(null);
//   const [isReportBugOpen, setIsReportBugOpen] = useState(false);
//   // Normalize assignees (supports both array and single object)
//   const assignees = React.useMemo(() => {
//     if (!subTask) return [];
//     if (Array.isArray(subTask.assignedTo)) return subTask.assignedTo;
//     if (subTask.assignedToDetails)
//       return Array.isArray(subTask.assignedToDetails)
//         ? subTask.assignedToDetails
//         : [subTask.assignedToDetails];
//     if (subTask.assignedTo) return [subTask.assignedTo];
//     return [];
//   }, [subTask]);
//   const isAssignedToMe = assignees.some(
//     (a) => a.memberId === currentUser?.id || a._id === currentUser?.id
//   );
//   const isTeamLeadOrCPC =
//     currentUser?.role === "cpc" ||
//     task?.teamLeadId === currentUser?.id ||
//     currentUser?.position === "Team Lead";
//   const isSubTaskFullyClosed =
//     subTask?.status === "Completed" && subTask?.reviewStatus === "Resolved";
//   useEffect(() => {
//     if (task_id && subtask_id) {
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//       dispatch(fetchTaskById(task_id));
//     }
//   }, [dispatch, task_id, subtask_id]);
//   const getInitials = (name = "") =>
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .slice(0, 2)
//       .toUpperCase();
//   // === Status Transition Logic ===
//   const getNextStatus = (current) => {
//     if (current === "Pending") return "In Progress";
//     if (current === "In Progress") return "Completed";
//     if (current === "Completed") return "In Progress"; // Reopen
//     return null;
//   };
//   const getButtonConfig = () => {
//     if (!isAssignedToMe || isSubTaskFullyClosed) return null;
//     const current = subTask.status;
//     if (current === "Pending")
//       return {
//         text: "Start Subtask",
//         color: "bg-orange-600 hover:bg-orange-700",
//         icon: Clock,
//       };
//     if (current === "In Progress")
//       return {
//         text: "Mark Completed",
//         color: "bg-teal-600 hover:bg-teal-700",
//         icon: CheckCircle,
//       };
//     if (current === "Completed" && subTask.reviewStatus !== "Resolved")
//       return {
//         text: "Reopen Subtask",
//         color: "bg-purple-600 hover:bg-purple-700",
//         icon: RotateCcw,
//       };
//     return null;
//   };
//   const handleStatusChange = async () => {
//     const next = getNextStatus(subTask.status);
//     // Deadline check for completion
//     if (next === "Completed" && subTask.deadline && new Date() > new Date(subTask.deadline)) {
//       setPendingStatus("Completed");
//       setDelayDialog(true);
//       return;
//     }
//     const payload = {
//       taskId: task_id,
//       subtaskId: subtask_id,
//       status: next,
//     };
//     // Reopen logic
//     if (subTask.status === "Completed") {
//       payload.updates = { reviewStatus: "N/A", reopened: true };
//     }
//     try {
//       await dispatch(updateSubTaskStatus(payload)).unwrap();
//       toast.success(
//         next === "Completed"
//           ? "Subtask completed"
//           : next === "In Progress" && subTask.status === "Completed"
//           ? "Subtask reopened"
//           : "Subtask started"
//       );
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     } catch (err) {
//       toast.error("Failed to update status");
//     }
//   };
//   const submitDelay = async () => {
//     if (!delayReason.trim()) return;
//     await dispatch(
//       updateSubTaskStatus({
//         taskId: task_id,
//         subtaskId: subtask_id,
//         status: "Completed",
//         delayReason: delayReason.trim(),
//       })
//     ).unwrap();
//     toast.success("Subtask completed with delay reason");
//     setDelayDialog(false);
//     setDelayReason("");
//     setPendingStatus(null);
//     dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//   };
//   // Mark as Resolved (TL/CPC only)
//   const handleMarkAsResolved = async () => {
//     try {
//       await dispatch(
//         updateSubTaskStatus({
//           taskId: task_id,
//           subtaskId: subtask_id,
//           updates: { reviewStatus: "Resolved", resolvedAt: new Date().toISOString() },
//         })
//       ).unwrap();
//       toast.success("Subtask marked as Resolved");
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     } catch (err) {
//       toast.error("Failed to resolve subtask");
//     }
//   };
//   const actionBtn = getButtonConfig();
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-teal-600 h-32" />
//         <div className="px-6 -mt-20">
//           <Card className="shadow-xl">
//             <CardContent className="p-10">
//               <div className="h-10 bg-gray-200 rounded w-96 mb-6 animate-pulse" />
//               <div className="space-y-4">
//                 <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
//                 <div className="h-64 bg-gray-100 rounded animate-pulse" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }
//   if (!subTask) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="text-center p-10">
//           <h2 className="text-2xl font-bold mb-4">Subtask Not Found</h2>
//           <Button onClick={() => router.back()} className="bg-teal-600 hover:bg-teal-700">
//             <ChevronLeft className="mr-2 h-4 w-4" /> Back
//           </Button>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <TooltipProvider>
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-teal-600 text-white">
//           <div className="px-6 py-6">
//             <div className="flex items-center gap-4">
//               <Button
//                 size="sm"
//                 onClick={() => router.back()}
//                 className="bg-teal-700 hover:bg-teal-800 rounded-lg"
//               >
//                 <ChevronLeft className="w-5 h-5 mr-1" /> Back
//               </Button>
//               <div>
//                 <h1 className="text-2xl font-bold">{subTask.title}</h1>
//                 <p className="text-teal-100 text-sm">
//                   Subtask ID: {subTask.subtask_id || subTask._id}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-6 -mt-20">
//           <Card className="shadow-xl border-0">
//             <CardContent className="p-8 space-y-10">
//               {/* Status + Actions */}
//               <div className="flex flex-wrap items-center justify-between gap-6">
//                 <div className="flex flex-wrap items-center gap-3">
//                   <Badge
//                     className={`px-4 py-1.5 text-sm font-medium text-white ${
//                       subTask.status === "Completed"
//                         ? "bg-gray-800"
//                         : subTask.status === "In Progress"
//                         ? "bg-blue-600"
//                         : "bg-orange-600"
//                     }`}
//                   >
//                     {subTask.status}
//                   </Badge>
//                   {subTask.reviewStatus && subTask.reviewStatus !== "N/A" && (
//                     <Badge
//                       className={`px-4 py-1.5 text-sm font-medium ${
//                         subTask.reviewStatus === "Resolved"
//                           ? "bg-green-100 text-green-800 border border-green-300"
//                           : "bg-yellow-100 text-yellow-800 border border-yellow-300"
//                       }`}
//                     >
//                       {subTask.reviewStatus}
//                     </Badge>
//                   )}
//                   <Badge
//                     className={`px-4 py-1.5 text-sm font-medium ${
//                       subTask.priority === "High"
//                         ? "bg-red-100 text-red-700"
//                         : subTask.priority === "Medium"
//                         ? "bg-amber-100 text-amber-700"
//                         : "bg-green-100 text-green-700"
//                     }`}
//                   >
//                     {subTask.priority} Priority
//                   </Badge>
//                 </div>
//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap gap-3">
//                   {actionBtn && (
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           onClick={handleStatusChange}
//                           disabled={updating}
//                           className={`${actionBtn.color} text-white rounded-lg`}
//                         >
//                           <actionBtn.icon className="w-4 h-4 mr-2" />
//                           {actionBtn.text}
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         {subTask.status === "Completed" ? "Reopen as In Progress" : actionBtn.text}
//                       </TooltipContent>
//                     </Tooltip>
//                   )}
//                   {/* Mark as Resolved */}
//                   {isTeamLeadOrCPC &&
//                     subTask.status === "Completed" &&
//                     subTask.reviewStatus === "N/A" && (
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             onClick={handleMarkAsResolved}
//                             disabled={updating}
//                             className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
//                           >
//                             <CheckCircle className="w-4 h-4 mr-2" />
//                             Mark as Resolved
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>Close subtask permanently</TooltipContent>
//                       </Tooltip>
//                     )}
//                   {/* Report Bug */}
//                   {isTeamLeadOrCPC && subTask.status === "Completed" && (
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           onClick={() => setIsReportBugOpen(true)}
//                           className="bg-red-600 hover:bg-red-700 text-white rounded-lg"
//                         >
//                           <BugIcon className="w-4 h-4 mr-2" /> Report Bug
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Report an issue with this completed work</TooltipContent>
//                     </Tooltip>
//                   )}
//                 </div>
//               </div>
//               {/* Info Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     <Calendar className="w-4 h-4" /> Deadline
//                   </p>
//                   <p
//                     className={`font-medium mt-1 ${
//                       subTask.deadline && new Date() > new Date(subTask.deadline)
//                         ? "text-red-600"
//                         : ""
//                     }`}
//                   >
//                     {formatDateTimeIST(subTask.deadline) || "No deadline"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     <Clock className="w-4 h-4" /> Created
//                   </p>
//                   <p className="font-medium mt-1">{formatDateTimeIST(subTask.createdAt)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     <Flag className="w-4 h-4" /> Project
//                   </p>
//                   <p className="font-medium mt-1">
//                     {subTask.projectName || task?.projectName || "—"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     <User className="w-4 h-4" /> Assigned To
//                   </p>
//                   <div className="flex -space-x-2 mt-2">
//                     {assignees.length > 0 ? (
//                       assignees.map((person, i) => (
//                         <div key={person._id || i} className="group relative">
//                           <Avatar className="w-10 h-10 ring-4 ring-white hover:z-10 transition-all">
//                             <AvatarImage src={person.avatar} />
//                             <AvatarFallback className="bg-teal-600 text-white text-xs font-bold">
//                               {getInitials(person.memberName || person.name)}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 transition-all bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
//                             {person.memberName || person.name}
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <span className="text-gray-400 mt-2">Unassigned</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               {/* Description */}
//               <div>
//                 <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
//                   <Info className="w-4 h-4" /> Description
//                 </p>
//                 <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
//                   {subTask.description?.length > 600 && !showFullDesc ? (
//                     <>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             subTask.description.slice(0, 600).replace(/\n/g, "<br/>") + "...",
//                         }}
//                       />
//                       <button
//                         onClick={() => setShowFullDesc(true)}
//                         className="text-teal-600 font-medium text-sm mt-3 hover:underline flex items-center"
//                       >
//                         Show more <ChevronDown className="w-4 h-4 ml-1" />
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: (subTask.description || "No description").replace(/\n/g, "<br/>"),
//                         }}
//                       />
//                       {subTask.description?.length > 600 && showFullDesc && (
//                         <button
//                           onClick={() => setShowFullDesc(false)}
//                           className="text-teal-600 font-medium text-sm mt-3 hover:underline flex items-center"
//                         >
//                           Show less <ChevronUp className="w-4 h-4 ml-1" />
//                         </button>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//               {/* Delay Reason */}
//               {subTask.delayReason && (
//                 <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
//                   <p className="font-medium text-amber-800 flex items-center gap-2">
//                     <AlertCircle className="w-5 h-5" /> Delay Reason
//                   </p>
//                   <p className="mt-2 text-amber-900">{subTask.delayReason}</p>
//                 </div>
//               )}
//               {/* Reported Bugs */}
//               {subTask.bugs && subTask.bugs.length > 0 && (
//                 <>
//                   <Separator />
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4 text-teal-700 flex items-center gap-2">
//                       <BugIcon className="w-5 h-5" /> Reported Bugs
//                     </h3>
//                     <div className="space-y-3">
//                       {subTask.bugs.map((bug, i) => (
//                         <div
//                           key={i}
//                           className="bg-red-50 border border-red-200 rounded-lg p-4 flex justify-between items-center"
//                         >
//                           <div>
//                             <p className="font-medium text-red-900">{bug.title}</p>
//                             <p className="text-sm text-red-700 mt-1">{bug.description}</p>
//                           </div>
//                           <div className="text-right text-sm">
//                             <Badge className="bg-red-600 text-white">{bug.status || "Open"}</Badge>
//                             <p className="text-xs text-gray-600 mt-1">
//                               {formatDateTimeIST(bug.createdAt)}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               )}
//               {/* Review History */}
//               {subTask.history && subTask.history.length > 0 && (
//                 <>
//                   <Separator />
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4 text-teal-700 flex items-center gap-2">
//                       <History className="w-5 h-5" /> Review & Activity History
//                     </h3>
//                     <div className="space-y-3 max-h-96 overflow-y-auto">
//                       {subTask.history.map((entry, i) => (
//                         <div
//                           key={i}
//                           className="bg-gray-50 border rounded-lg p-4 text-sm"
//                         >
//                           <div className="flex justify-between">
//                             <span className="font-medium">{entry.action || entry.type}</span>
//                             <span className="text-gray-500">
//                               {formatDateTimeIST(entry.timestamp || entry.createdAt)}
//                             </span>
//                           </div>
//                           {entry.comments && (
//                             <p className="mt-2 italic text-gray-700">"{entry.comments}"</p>
//                           )}
//                           {entry.user && (
//                             <p className="text-xs text-gray-500 mt-1">
//                               by {entry.user.name || entry.user.email}
//                             </p>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//         {/* Modals */}
//         <ReportBugModal
//           isOpen={isReportBugOpen}
//           onClose={() => setIsReportBugOpen(false)}
//           task_id={task_id}
//           subtask_id={subtask_id}
//           subtaskTitle={subTask.title}
//           onBugReported={() =>
//             dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }))
//           }
//         />
//         <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle className="text-red-600 flex items-center gap-2">
//                 <AlertCircle className="w-5 h-5" /> Deadline Passed
//               </DialogTitle>
//             </DialogHeader>
//             <div className="py-4">
//               <Label>Reason for delay</Label>
//               <textarea
//                 value={delayReason}
//                 onChange={(e) => setDelayReason(e.target.value)}
//                 className="w-full mt-2 p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                 placeholder="Explain why the subtask is being completed after the deadline..."
//               />
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => { setDelayDialog(false); setPendingStatus(null); }}>
//                 Cancel
//               </Button>
//               <Button
//                 onClick={submitDelay}
//                 disabled={!delayReason.trim() || updating}
//                 className="bg-teal-600 hover:bg-teal-700"
//               >
//                 Submit & Complete
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </TooltipProvider>
//   );
// };
// export default SubTaskFullDetailsPage;
}}),
"[project]/src/app/(protected)/workspace/task/[id]/[subtaskid]/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$sub$2d$task$2f$SubTaskFullDetailsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/components/sub-task/SubTaskFullDetailsPage.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    const { id, subtaskid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$sub$2d$task$2f$SubTaskFullDetailsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        task_id: id,
        subtask_id: subtaskid
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/workspace/task/[id]/[subtaskid]/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_add2b953._.js.map