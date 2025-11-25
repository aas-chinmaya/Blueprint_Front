module.exports = {

"[project]/src/modules/project-management/task/components/sub-task/SubTaskFullDetailsPage.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
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
//   User,Tag,
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
// } from "lucide-react";
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
//   const [isReportBugOpen, setIsReportBugOpen] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setInitialLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);
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
//   const isAssignedToMe = assignees.some((a) => a.memberId === currentUser?.id);
//   const isTeamLeadOrCPC =
//     currentUser?.role === "cpc" ||
//     task?.teamLeadId === currentUser?.id ||
//     currentUser?.position === "Team Lead";
//   const isFullyResolved = subTask?.reviewStatus === "Resolved";
//   useEffect(() => {
//     if (task_id && subtask_id) {
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//       dispatch(fetchTaskById(task_id));
//     }
//   }, [dispatch, task_id, subtask_id]);
//   const getInitials = (name = "") =>
//     name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
//   const getNextStatus = (current) => {
//     if (current === "Pending") return "In Progress";
//     if (current === "In Progress") return "Completed";
//     if (current === "Completed") return "In Progress";
//     return null;
//   };
//   const getButtonConfig = () => {
//     if (!isAssignedToMe || isFullyResolved) return null;
//     const current = subTask.status;
//     if (current === "Pending")
//       return { text: "Start Work", color: "bg-blue-600", icon: Clock };
//     if (current === "In Progress")
//       return { text: "Mark Complete", color: "bg-teal-600", icon: CheckCircle };
//     if (current === "Completed")
//       return { text: "Reopen", color: "bg-purple-600", icon: RotateCcw };
//     return null;
//   };
//   const handleStatusChange = async () => {
//     const next = getNextStatus(subTask.status);
//     if (next === "Completed" && subTask.deadline && new Date() > new Date(subTask.deadline)) {
//       setDelayDialog(true);
//       return;
//     }
//     const payload = { taskId: task_id, subtaskId: subtask_id, status: next };
//     if (subTask.status === "Completed") {
//       payload.updates = { reviewStatus: "N/A", reopened: true };
//     }
//     try {
//       await dispatch(updateSubTaskStatus(payload)).unwrap();
//       toast.success(next === "Completed" ? "Marked as Complete" : "Status updated");
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
//     toast.success("Completed with delay reason");
//     setDelayDialog(false);
//     setDelayReason("");
//     dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//   };
//   const handleMarkAsResolved = async () => {
//     try {
//       await dispatch(
//         updateSubTaskStatus({
//           taskId: task_id,
//           subtaskId: subtask_id,
//           reviewStatus: "Approved",
//         })
//       ).unwrap();
//       toast.success("Subtask Approved!");
//       dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }));
//     } catch (err) {
//       toast.error("Failed to resolve");
//     }
//   };
//   const actionBtn = getButtonConfig();
//   if (initialLoading || loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-teal-600 text-white py-8 px-6">
//           <div className="flex items-center gap-4">
//             <div className="h-9 w-24 bg-teal-700 rounded-lg animate-pulse" />
//             <div>
//               <div className="h-8 w-96 bg-teal-500 rounded animate-pulse" />
//               <div className="h-4 w-48 bg-teal-400 rounded mt-2 animate-pulse" />
//             </div>
//           </div>
//         </div>
//         <Card className="w-full min-h-screen mx-auto mt-8 shadow-xl border-0">
//           <CardContent className="p-8 space-y-10 animate-pulse">
//             <div className="flex justify-end gap-3">
//               <div className="h-10 w-40 bg-gray-300 rounded-lg" />
//             </div>
//             <div className="h-8 w-full bg-gray-200 rounded" />
//             <div className="space-y-4">
//               <div className="h-4 bg-gray-200 rounded w-full" />
//               <div className="h-4 bg-gray-200 rounded w-11/12" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               {[1,2,3,4,5,6].map(i => (
//                 <div key={i} className="space-y-2">
//                   <div className="h-4 w-24 bg-gray-300 rounded" />
//                   <div className="h-6 w-32 bg-gray-200 rounded" />
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
//   if (!subTask) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="text-center p-12 shadow-xl">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Subtask Not Found</h1>
//           <Button onClick={() => router.back()} className="bg-teal-600 hover:bg-teal-700">
//             <ChevronLeft className="mr-2" /> Go Back
//           </Button>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-teal-600 text-white py-8 px-6">
//         <div className="flex items-center gap-4">
//           <Button size="sm" onClick={() => router.back()} className="bg-teal-700 hover:bg-teal-800 rounded-lg">
//             <ChevronLeft className="w-5 h-5 mr-1" /> Back
//           </Button>
//           <div>
//             <p className="text-teal-100 text-sm">SubTask ID • {subTask.subtask_id || subTask._id}</p>
//           </div>
//         </div>
//       </div>
//       <Card className="shadow-xl border-0 min-h-screen">
//   <CardContent className="p-6 sm:p-8 space-y-5">
//     {/* Action Buttons - Top Right */}
//     <div className="flex flex-wrap justify-end gap-3">
//       {actionBtn && (
//         <Button onClick={handleStatusChange} disabled={updating} className={`${actionBtn.color} text-white`}>
//           <actionBtn.icon className="w-4 h-4 mr-2" />
//           {actionBtn.text}
//         </Button>
//       )}
//       {isTeamLeadOrCPC && subTask.status === "Completed" && subTask.reviewStatus === "N/A" && (
//         <Button onClick={handleMarkAsResolved} className="bg-emerald-600 hover:bg-emerald-700 text-white">
//           <CheckCircle className="w-4 h-4 mr-2" /> Approve & Close
//         </Button>
//       )}
//       {isTeamLeadOrCPC && subTask.status === "Completed" && !isFullyResolved && (
//         <Button onClick={() => setIsReportBugOpen(true)} className="bg-gray-700 hover:bg-gray-800 text-white">
//           <BugIcon className="w-4 h-4 mr-2" /> Report Issue
//         </Button>
//       )}
//     </div>
//     {/* Title - Only show if exists */}
//     {subTask.title && (
//       <div>
//         <p className="text-sm  font-bold text-gray-900"> Title</p>
//         <h1 className="text-sm text-gray-900">
//           {subTask.title}
//         </h1>
//       </div>
//     )}
//   {/* delay reason */}
//     {subTask.delayReason && (
//       <div>
//         <p className="text-sm  font-bold text-gray-900"> Reason of delays</p>
//         <h1 className="text-sm text-gray-900">
//           {subTask.delayReason}
//         </h1>
//       </div>
//     )}
//     {/* Description with Show More/Less */}
//     {subTask.description && (
//       <div className="text-gray-700 leading-relaxed">
//         <p className="text-sm text-gray-900  font-bold">Description</p>
//         {subTask.description.length > 600 && !showFullDesc ? (
//           <>
//             <div dangerouslySetInnerHTML={{ 
//               __html: subTask.description.slice(0, 600).replace(/\n/g, "<br/>") + "..." 
//             }} />
//             <button 
//               onClick={() => setShowFullDesc(true)} 
//               className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline"
//             >
//               Show more <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//           </>
//         ) : (
//           <>
//             <div dangerouslySetInnerHTML={{ 
//               __html: (subTask.description || "").replace(/\n/g, "<br/>") 
//             }} />
//             {subTask.description.length > 600 && showFullDesc && (
//               <button 
//                 onClick={() => setShowFullDesc(false)} 
//                 className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline"
//               >
//                 Show less <ChevronUp className="w-4 h-4 ml-1" />
//               </button>
//             )}
//           </>
//         )}
//       </div>
//     )}
//     {/* Main Info Grid - Clean & Responsive */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
//       {/* Project Name */}
//       {(subTask.projectName || task?.projectName) && (
//         <div className="flex items-start gap-3">
//           <Flag className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//           <div>
//             <p className="text-gray-500">Project</p>
//             <p className="font-medium text-gray-800 mt-0.5">
//               {subTask.projectName || task?.projectName}
//             </p>
//           </div>
//         </div>
//       )}
//       {/* Priority */}
// {subTask.priority && (
//   <div className="flex items-start gap-3">
//     {/* Icon */}
//     <Flag className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//     <div>
//       <p className="text-gray-500">Priority</p>
//       <span
//         className={`
//           mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium text-white
//           ${
//             subTask.priority === "High"
//               ? "bg-red-600"
//               : subTask.priority === "Medium"
//               ? "bg-amber-500"
//               : "bg-emerald-600"
//           }
//         `}
//       >
//         {subTask.priority}
//       </span>
//     </div>
//   </div>
// )}
//       {/* Assigned To */}
//       <div className="flex items-start gap-3">
//         <User className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//         <div className="flex-1">
//           <p className="text-gray-500">Assigned to</p>
//           <div className="flex -space-x-3 mt-1.5">
//             {assignees.length > 0 ? (
//               assignees.map((p, i) => (
//                 <Avatar key={i} className="w-9 h-9 ring-4 ring-white border-2 border-white">
//                   <AvatarImage src={p.avatar} alt={p.memberName || p.name} />
//                   <AvatarFallback className="bg-teal-600 text-white text-xs font-medium">
//                     {getInitials(p.memberName || p.name)}
//                   </AvatarFallback>
//                 </Avatar>
//               ))
//             ) : (
//               <span className="text-gray-500 text-sm mt-1">Unassigned</span>
//             )}
//           </div>
//         </div>
//       </div>
// {/* Status */}
// <div className="flex items-start gap-3">
//   {/* Icon (same alignment as your dot) */}
//   <Tag className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//   {/* Label + Chip stacked vertically */}
//   <div>
//     <p className="text-gray-500">Status</p>
//     <span
//       className={`
//         mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium text-white
//         ${
//           subTask.status === "Completed"
//             ? "bg-gray-700"
//             : subTask.status === "In Progress"
//             ? "bg-blue-600"
//             : "bg-orange-600"
//         }
//       `}
//     >
//       {subTask.status === "Completed" ? "Complete" : subTask.status}
//     </span>
//   </div>
// </div>
//       {/* Created At */}
//       <div className="flex items-start gap-3">
//         <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//         <div>
//           <p className="text-gray-500">Created</p>
//           <p className="font-medium text-gray-800 mt-0.5">
//             {formatDateTimeIST(subTask.createdAt)}
//           </p>
//         </div>
//       </div>
//       {/* Deadline */}
//       {subTask.deadline && (
//         <div className="flex items-start gap-3">
//           <Calendar className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//           <div>
//             <p className="text-gray-500">Deadline</p>
//             <p className="font-medium text-gray-800 mt-0.5">
//               {formatDateTimeIST(subTask.deadline)}
//             </p>
//           </div>
//         </div>
//       )}
//       {/* Review Status */}
//       {subTask.reviewStatus && subTask.reviewStatus !== "N/A" && (
//         <div className="flex items-start gap-3">
//           <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
//           <div>
//             <p className="text-gray-500">Review</p>
//             <Badge className={`mt-1 text-xs ${subTask.reviewStatus === "Approved" ? "bg-green-600" : "bg-red-600"} text-white`}>
//               {subTask.reviewStatus || "N/A"}
//             </Badge>
//           </div>
//         </div>
//       )}
//     </div>
//     {/* Delay Reason */}
//     {subTask.delayReason && (
//       <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
//         <p className="font-medium text-amber-900 flex items-center gap-2">
//           <AlertCircle className="w-5 h-5" /> Delay Reason
//         </p>
//         <p className="mt-2 text-amber-800 leading-relaxed">{subTask.delayReason}</p>
//       </div>
//     )}
//     {/* Reported Bugs */}
//     {subTask.bugs && subTask.bugs.length > 0 && (
//       <>
//         <Separator className="my-10" />
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-5">Reported Issues</h3>
//           <div className="space-y-4">
//             {subTask.bugs.map((bug, i) => (
//               <div key={i} className=" border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//                 <div>
//                   <p className="font-medium text-gray-900">{bug.title}</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Reported on {formatDateTimeIST(bug.createdAt)}
//                   </p>
//                 </div>
//                 <Badge className={bug.status === "Resolved" ? "bg-green-600" : "bg-orange-600"}>
//                   {bug.status || "Open"}
//                 </Badge>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     )}
//   </CardContent>
// </Card>
//       {/* Report Bug Modal - Now shows Task + Subtask + Description */}
//       <ReportBugModal
//         isOpen={isReportBugOpen}
//         onClose={() => setIsReportBugOpen(false)}
//         task_id={task_id}
//         subtask_id={subtask_id}
//         taskTitle={task?.title || "Unknown Task"}
//         subtaskTitle={subTask.title}
//         subtaskDescription={subTask.description || ""}
//         onBugReported={() => dispatch(getSubTaskById({ taskId: task_id, subTaskId: subtask_id }))}
//       />
//       {/* Delay Dialog */}
//       <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className="text-red-600">Deadline Missed</DialogTitle>
//           </DialogHeader>
//           <div className="py-4">
//             <Label>Reason for delay (required)</Label>
//             <textarea
//               value={delayReason}
//               onChange={(e) => setDelayReason(e.target.value)}
//               className="w-full mt-2 p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Please explain why this was completed after the deadline..."
//             />
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
//             <Button onClick={submitDelay} disabled={!delayReason.trim() || updating} className="bg-teal-600 hover:bg-teal-700">
//               Complete with Reason
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
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