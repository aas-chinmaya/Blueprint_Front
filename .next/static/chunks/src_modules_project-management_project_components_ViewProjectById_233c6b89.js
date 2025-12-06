(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/modules/project-management/project/components/ViewProjectById.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProjectById,
//   changeProjectStatus,
//   resetSuccessMessage,
// } from "@/modules/project-management/project/slices/projectSlice";
// import {
//   FiArrowLeft,
//   FiDownload,
//   FiUsers,
//   FiList,
//   FiFileText,
//   FiInfo,
//   FiCalendar,
//   FiUser,
//   FiPaperclip,
//   FiFile,
// } from "react-icons/fi";
// import {
//   Briefcase,
//   TrendingUp,
//   FileStack,
//   BugIcon,
//   Dock,
// } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import AllTaskListByProjectId from "@/modules/project-management/task/components/AllTaskListByProjectId";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { LuFolderClock } from "react-icons/lu";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import ProjectbugList from "../../issues/components/bug/ProjectbugList";
// import Spinner from "@/components/loader/Spinner";
// import ProjectwiseAllMeetingAndMom from "@/modules/meet/components/ProjectwiseAllmeetingMom";
// import { formatDateUTC } from "@/utils/formatDate";
// import DocumentManager from "@/modules/document/components/DocumentManager";
// import ProjectMetrics from "../../analytics/components/ProjectMetrics";
// import TeamManagement from "@/modules/project-management/team/components/TeamManagement";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import ProjectBudgetWrapper from "@/modules/finance/budget/components/budgetWraper";
// export default function ViewProjectById({ projectId }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialTab = searchParams.get("tab") || "details";
//   const [activeTab, setActiveTab] = useState(initialTab);
//   const [isProjectActive, setIsProjectActive] = useState(false);
//   // Dynamic tabs with overflow detection only on sm/md (below lg)
//   const tabsContainerRef = useRef(null);
//   const [visibleTabs, setVisibleTabs] = useState([]);
//   const [hiddenTabs, setHiddenTabs] = useState([]);
//   const [showMoreMenu, setShowMoreMenu] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(true);
//   const tabs = [
//     { id: "details", label: "Details", icon: <FiInfo className="h-5 w-5" /> },
//     { id: "team", label: "Team", icon: <FiUsers className="h-5 w-5" /> },
//     { id: "budget", label: "Budget", icon: <FiUsers className="h-5 w-5" /> },
//     { id: "task", label: "Task", icon: <FiList className="h-5 w-5" /> },
//     { id: "issues", label: "Issues", icon: <BugIcon className="h-5 w-5" /> },
//     { id: "mom", label: "Mom", icon: <LuFolderClock className="h-5 w-5" /> },
//     { id: "document", label: "Document", icon: <Dock className="h-5 w-5" /> },
//   ];
//   // Track screen size: lg+ shows all tabs, sm/md uses dynamic overflow
//   useEffect(() => {
//     const checkScreenSize = () => {
//       const large = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
//       setIsLargeScreen(large);
//       if (large) {
//         setVisibleTabs(tabs);
//         setHiddenTabs([]);
//       } else {
//         updateTabVisibility();
//       }
//     };
//     const updateTabVisibility = () => {
//       if (!tabsContainerRef.current) return;
//       const container = tabsContainerRef.current;
//       const containerWidth = container.offsetWidth;
//       const tabElements = container.querySelectorAll(".tab-button");
//       const moreButton = container.querySelector(".more-button");
//       const moreWidth = moreButton ? moreButton.offsetWidth + 24 : 100; // padding + margin
//       let totalWidth = 0;
//       let visibleCount = 0;
//       tabElements.forEach((btn, index) => {
//         const btnWidth = btn.offsetWidth + 16; // gap + padding
//         if (totalWidth + btnWidth < containerWidth - moreWidth) {
//           totalWidth += btnWidth;
//           visibleCount = index + 1;
//         }
//       });
//       setVisibleTabs(tabs.slice(0, visibleCount));
//       setHiddenTabs(tabs.slice(visibleCount));
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);
//   // Recalculate visible/hidden on tab change or content load (for sm/md only)
//   useEffect(() => {
//     if (!isLargeScreen) {
//       const timer = setTimeout(() => {
//         if (tabsContainerRef.current) {
//           updateTabVisibility();
//         }
//       }, 50);
//       return () => clearTimeout(timer);
//     }
//   }, [activeTab, isLargeScreen,tabs]);
//   const updateTabVisibility = () => {}; // Defined inside useEffect above
//   useEffect(() => {
//     if (activeTab !== initialTab) {
//       const params = new URLSearchParams(window.location.search);
//       params.set("tab", activeTab);
//       router.replace(`?${params.toString()}`, { scroll: false });
//     }
//   }, [activeTab, initialTab, router]);
//   const dispatch = useDispatch();
//   const { project, status, error, successMessage } = useSelector((state) => state.project);
//   const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
//   useEffect(() => {
//     if (projectId) {
//       dispatch(fetchProjectById(projectId));
//     }
//   }, [projectId, dispatch]);
//   const [newStatus, setNewStatus] = useState("");
//   const [statusUpdateMessage, setStatusUpdateMessage] = useState("");
//   const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
//   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [hasFetchedAfterStatusChange, setHasFetchedAfterStatusChange] = useState(false);
//   const [showLoader, setShowLoader] = useState(true);
//   useEffect(() => {
//     if (project?.data?.status && project.data.status !== "Planned") {
//       setIsProjectActive(true);
//     }
//   }, [project?.data?.status]);
//   useEffect(() => {
//     if (successMessage && !hasFetchedAfterStatusChange) {
//       setStatusUpdateMessage(successMessage);
//       setHasFetchedAfterStatusChange(true);
//       dispatch(fetchProjectById(projectId));
//       setNewStatus("");
//       setTimeout(() => {
//         setStatusUpdateMessage("");
//         dispatch(resetSuccessMessage());
//         setHasFetchedAfterStatusChange(false);
//       }, 3000);
//     }
//     if (error?.statusChange) {
//       setStatusUpdateMessage(error.statusChange);
//       setTimeout(() => setStatusUpdateMessage(""), 3000);
//     }
//   }, [successMessage, error?.statusChange, dispatch, projectId, hasFetchedAfterStatusChange]);
//   useEffect(() => {
//     const timer = setTimeout(() => setShowLoader(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);
//   const handleDownload = (url, filename) => {
//     setIsDownloading(true);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setTimeout(() => setIsDownloading(false), 1000);
//   };
//   const handleStatusSubmit = () => {
//     if (newStatus) {
//       setIsStatusModalOpen(false);
//       setIsConfirmModalOpen(true);
//     }
//   };
//   const handleConfirmStatusChange = () => {
//     if (newStatus && projectId) {
//       dispatch(changeProjectStatus({ projectId, status: newStatus }));
//       setIsConfirmModalOpen(false);
//       toast.success("Status Updated!");
//       setIsProjectActive(true);
//     }
//   };
//   const statusOptions = ["In Progress", "Completed"];
//   const canEditStatus =
//     currentUser?.role?.toLowerCase() === "cpc" ||
//     isTeamLead ||
//     currentUser?.position === "Team Lead";
//   const getFileTypeInfo = (filename) => {
//     const ext = filename.split(".").pop().toLowerCase();
//     switch (ext) {
//       case "pdf":
//         return { icon: <FiFileText className="h-5 w-5 text-red-600" />, bg: "bg-red-50" };
//       case "doc":
//       case "docx":
//         return { icon: <FiFileText className="h-5 w-5 text-blue-600" />, bg: "bg-blue-50" };
//       case "xls":
//       case "xlsx":
//         return { icon: <FiFileText className="h-5 w-5 text-green-600" />, bg: "bg-green-50" };
//       case "ppt":
//       case "pptx":
//         return { icon: <FiFileText className="h-5 w-5 text-orange-600" />, bg: "bg-orange-50" };
//       case "csv":
//         return { icon: <FiFileText className="h-5 w-5 text-yellow-600" />, bg: "bg-yellow-50" };
//       default:
//         return { icon: <FiFile className="h-5 w-5 text-gray-600" />, bg: "bg-gray-50" };
//     }
//   };
//   if (status?.fetchProject === "loading" || showLoader) {
//     return (
//       <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-64px)]">
//         <Spinner />
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Card className="shadow-2xl border border-gray-200 mx-auto max-w-full">
//         <CardHeader className="border-b border-gray-200 bg-white">
//           <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
//   {/* Left side: Back + Project name */}
//   <div className="flex items-center min-w-0 gap-2 sm:gap-4">
//     <Button
//       onClick={() => router.back()}
//       className="inline-flex shrink-0 items-center gap-2 bg-blue-600 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
//     >
//       <FiArrowLeft className="h-4 w-4" />
//       <span className="hidden sm:inline">Back</span>
//     </Button>
//     <CardTitle
//       className="truncate text-base sm:text-xl font-semibold text-gray-900 max-w-[150px] sm:max-w-[250px] md:max-w-[400px]"
//       title={project?.data?.projectName || "Unnamed Project"}
//     >
//       {project?.data?.projectName || "Unnamed Project"}
//     </CardTitle>
//   </div>
//   {/* Right side: Status + message */}
//   <div className="flex items-center flex-wrap justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
//     {statusUpdateMessage && (
//       <p
//         className={`text-xs sm:text-sm font-medium ${
//           successMessage ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {statusUpdateMessage}
//       </p>
//     )}
//     {canEditStatus && (
//       <Button
//         onClick={() => setIsStatusModalOpen(true)}
//         className="bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2"
//       >
//         {isProjectActive ? "Update Status" : "Start Project"}
//       </Button>
//     )}
//   </div>
// </div>
//         </CardHeader>
//         <CardContent className="p-0">
//           {!isProjectActive && project?.data?.status === "Planned" && canEditStatus ? (
//             <div className="min-h-screen flex items-center justify-center  p-6">
//   <div className=" p-10 max-w-md w-full text-center">
//     <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//       Project is in Planned Stage
//     </h2>
//     <p className="text-gray-600 mb-8 leading-relaxed">
//       This project is currently in the planning phase. To access tasks, team, issues, 
//       documents, and other features, please start the project by changing its status 
//       to <span className="font-medium text-blue-600">In Progress</span>.
//     </p>
//     <Button
//       onClick={() => {
//         setNewStatus("In Progress");
//         setIsStatusModalOpen(true);
//       }}
//       className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200 w-full"
//     >
//       Start Project Now
//     </Button>
//   </div>
// </div>
//           ) : (
//             <>
//               {/* Responsive Tab Navigation - 3 dots only on sm/md */}
//               <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
//                 <div
//                   ref={tabsContainerRef}
//                   className="flex overflow-x-auto scrollbar-hide px-4"
//                   onScroll={() => setShowMoreMenu(false)}
//                 >
//                   {visibleTabs.map((tab) => (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`tab-button flex items-center gap-3 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
//                         activeTab === tab.id
//                           ? "border-blue-600 text-blue-600 bg-blue-50"
//                           : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
//                       }`}
//                     >
//                       {tab.icon}
//                       <span className="hidden sm:inline">{tab.label}</span>
//                     </button>
//                   ))}
//                   {/* 3-dot More menu - only shows when needed on sm/md */}
//                   {!isLargeScreen && hiddenTabs.length > 0 && (
//                     <Popover open={showMoreMenu} onOpenChange={setShowMoreMenu}>
//                       <PopoverTrigger asChild>
//                         <button
//                           className={`more-button flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
//                             showMoreMenu
//                               ? "border-blue-600 text-blue-600 bg-blue-50"
//                               : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
//                           }`}
//                         >
//                           <span className="text-2xl leading-none">⋯</span>
//                           <span className="hidden sm:inline">More</span>
//                         </button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-56 p-0 rounded-xl shadow-2xl border border-gray-200 mt-2">
//                         <div className="py-2">
//                           {hiddenTabs.map((tab) => (
//                             <button
//                               key={tab.id}
//                               onClick={() => {
//                                 setActiveTab(tab.id);
//                                 setShowMoreMenu(false);
//                               }}
//                               className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
//                             >
//                               {tab.icon}
//                               <span>{tab.label}</span>
//                             </button>
//                           ))}
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                   )}
//                 </div>
//               </div>
//               {/* Tab Content */}
//               <div className="p-2 min-h-screen">
//                 {activeTab === "details" && (
//                   <div className="space-y-12">
//                       <ProjectMetrics projectId={projectId} />
//                     <div className="">
//                       <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
//                         <FiInfo className="h-7 w-7 text-blue-600" />
//                         Project Information
//                       </h3>
//                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                         <div className="space-y-7">
//                           <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
//                             <div className="p-3 bg-green-100 rounded-lg">
//                               <Briefcase className="h-6 w-6 text-green-600" />
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-600">Project ID</p>
//                               <p className="text-xl font-bold text-gray-900 mt-1">{project?.data?.projectId || "N/A"}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
//                             <div className="p-3 bg-green-100 rounded-lg">
//                               <FiPaperclip className="h-6 w-6 text-green-600" />
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-600">Category</p>
//                               <p className="text-xl font-bold text-gray-900 mt-1">
//                                 {project?.data?.category
//                                   ? project.data.category
//                                       .toLowerCase()
//                                       .split(" ")
//                                       .map((w) => w[0].toUpperCase() + w.slice(1))
//                                       .join(" ")
//                                   : "N/A"}
//                               </p>
//                             </div>
//                           </div>
//                           {project?.data?.clientId?.trim() && (
//                             <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
//                               <div className="p-3 bg-green-100 rounded-lg">
//                                 <FiUser className="h-6 w-6 text-green-600" />
//                               </div>
//                               <div>
//                                 <p className="text-sm font-semibold text-gray-600">Client ID</p>
//                                 <p className="text-xl font-bold text-gray-900 mt-1">{project.data.clientId}</p>
//                               </div>
//                             </div>
//                           )}
//                           <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
//                             <div className="p-3 bg-green-100 rounded-lg">
//                               <FiUser className="h-6 w-6 text-green-600" />
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-600">Team Lead</p>
//                               <p className="text-xl font-bold text-gray-900 mt-1">{project?.data?.teamLeadName || "Unassigned"}</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="space-y-7">
//                           <div className="flex items-start gap-5 p-4 bg-blue-50 rounded-xl">
//                             <div className="p-3 bg-blue-100 rounded-lg">
//                               <TrendingUp className="h-6 w-6 text-blue-600" />
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-600">Status</p>
//                               <span
//                                 className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-bold mt-2 ${
//                                   project?.data?.status === "Completed"
//                                     ? "bg-green-100 text-green-800"
//                                     : project?.data?.status === "In Progress"
//                                     ? "bg-blue-100 text-blue-800"
//                                     : "bg-gray-100 text-gray-800"
//                                 }`}
//                               >
//                                 {project?.data?.status || "N/A"}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="flex items-start gap-5 p-4 bg-purple-50 rounded-xl">
//                             <div className="p-3 bg-purple-100 rounded-lg">
//                               <FiCalendar className="h-6 w-6 text-purple-600" />
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-600">Onboarding Date</p>
//                               <p className="text-xl font-bold text-gray-900 mt-1">
//                                 {project?.data?.createdAt ? formatDateUTC(project.data.createdAt) : "N/A"}
//                               </p>
//                             </div>
//                           </div>
//                           {project?.data?.startDate && (
//                             <div className="flex items-start gap-5 p-4 bg-indigo-50 rounded-xl">
//                               <div className="p-3 bg-indigo-100 rounded-lg">
//                                 <FiCalendar className="h-6 w-6 text-indigo-600" />
//                               </div>
//                               <div>
//                                 <p className="text-sm font-semibold text-gray-600">Start Date</p>
//                                 <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.startDate)}</p>
//                               </div>
//                             </div>
//                           )}
//                           {project?.data?.endDate && (
//                             <div className="flex items-start gap-5 p-4 bg-red-50 rounded-xl">
//                               <div className="p-3 bg-red-100 rounded-lg">
//                                 <FiCalendar className="h-6 w-6 text-red-600" />
//                               </div>
//                               <div>
//                                 <p className="text-sm font-semibold text-gray-600">End Date</p>
//                                 <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.endDate)}</p>
//                               </div>
//                             </div>
//                           )}
//                           {project?.data?.expectedEndDate && (
//                             <div className="flex items-start gap-5 p-4 bg-orange-50 rounded-xl">
//                               <div className="p-3 bg-orange-100 rounded-lg">
//                                 <FiCalendar className="h-6 w-6 text-orange-600" />
//                               </div>
//                               <div>
//                                 <p className="text-sm font-semibold text-gray-600">Expected End Date</p>
//                                 <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.expectedEndDate)}</p>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     {project?.data?.attachments?.length > 0 && (
//                       <div className="">
//                         <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
//                           <FileStack className="h-7 w-7 text-blue-600" />
//                           Attachments
//                         </h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                           {project.data.attachments.map((attachment, index) => {
//                             const fileInfo = getFileTypeInfo(attachment.filename);
//                             return (
//                               <div
//                                 key={index}
//                                 className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//                               >
//                                 <button
//                                   onClick={() => handleDownload(attachment.url, attachment.filename)}
//                                   disabled={isDownloading}
//                                   className="cursor-pointer w-full p-6 text-left space-y-4 hover:bg-white/50 transition-all"
//                                 >
//                                   <div className={`p-4 rounded-xl ${fileInfo.bg} w-fit shadow-md`}>
//                                     {fileInfo.icon}
//                                   </div>
//                                   <div>
//                                     <p className="font-semibold text-gray-900 truncate text-base">{attachment.filename}</p>
//                                     <p className="text-sm text-gray-500 mt-1">Click to download</p>
//                                   </div>
//                                   <div className="flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <FiDownload className="h-5 w-5" />
//                                     <span className="font-medium">Download</span>
//                                   </div>
//                                 </button>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}
//                     <div className="">
//                       <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
//                         <FiFileText className="h-7 w-7 text-blue-600" />
//                         Description
//                       </h3>
//                       <div className="prose prose-lg max-w-none">
//                         {project?.data?.description ? (
//                           <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">
//                             {project.data.description}
//                           </p>
//                         ) : (
//                           <p className="text-gray-500 italic text-lg">No description provided for this project.</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {activeTab === "task" && (
//                   <div className="">
//                     <AllTaskListByProjectId project={project?.data} projectId={project?.data?.projectId} />
//                   </div>
//                 )}
//                 {activeTab === "budget" && (
//                   <div className="">
//                 <ProjectBudgetWrapper projectId={projectId} />
//                   </div>
//                 )}
//                 {activeTab === "team" && <TeamManagement project={project} projectId={projectId} />}
//                 {activeTab === "issues" && (
//                   <div className="">
//                     <ProjectbugList project={project} projectId={projectId} teamLeadId={project?.data?.teamLeadId} />
//                   </div>
//                 )}
//                 {activeTab === "mom" && (
//                   <div className="">
//                     <ProjectwiseAllMeetingAndMom
//                       projectName={project?.data?.projectName}
//                       project={project?.data}
//                       projectId={projectId}
//                       teamLeadId={project?.data?.teamLeadId}
//                     />
//                   </div>
//                 )}
//                 {activeTab === "document" && (
//                   <div className="">
//                     <DocumentManager
//                       project={project?.data}
//                       projectId={projectId}
//                       teamLeadId={project?.data?.teamLeadId}
//                     />
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </CardContent>
//       </Card>
//       {/* Status Modals remain unchanged */}
//       <Dialog open={isStatusModalOpen} onOpenChange={setIsStatusModalOpen}>
//         <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold text-gray-900">
//               {project?.data?.status === "Planned" ? "Start Project" : "Update Project Status"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="py-6">
//             <label className="block text-sm font-semibold text-gray-700 mb-3">Select New Status</label>
//             <Select value={newStatus} onValueChange={setNewStatus}>
//               <SelectTrigger className="w-full h-12 text-base border-2">
//                 <SelectValue placeholder="Choose status" />
//               </SelectTrigger>
//               <SelectContent>
//                 {statusOptions
//                   .filter((s) => s !== project?.data?.status)
//                   .map((s) => (
//                     <SelectItem key={s} value={s} className="text-base">
//                       {s}
//                     </SelectItem>
//                   ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsStatusModalOpen(false)} className="px-6 py-3 text-base">
//               Cancel
//             </Button>
//             <Button onClick={handleStatusSubmit} disabled={!newStatus} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base">
//               Proceed
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
//         <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold text-gray-900">Confirm Status Change</DialogTitle>
//           </DialogHeader>
//           <div className="py-6">
//             <p className="text-lg text-gray-700">
//               Are you sure you want to change the project status to{" "}
//               <span className="font-bold text-blue-600 text-xl">{newStatus}</span>?
//             </p>
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsConfirmModalOpen(false)} className="px-6 py-3 text-base">
//               Cancel
//             </Button>
//             <Button onClick={handleConfirmStatusChange} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base">
//               Confirm
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>ViewProjectById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/project/slices/projectSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileStack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-stack.js [app-client] (ecmascript) <export default as FileStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BugIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as BugIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dock.js [app-client] (ecmascript) <export default as Dock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$AllTaskListByProjectId$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/components/AllTaskListByProjectId.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$components$2f$bug$2f$ProjectbugList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/issues/components/bug/ProjectbugList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$Spinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loader/Spinner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProjectwiseAllmeetingMom$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/ProjectwiseAllmeetingMom.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$components$2f$DocumentManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/document/components/DocumentManager.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$components$2f$ProjectMetrics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$components$2f$TeamManagement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/team/components/TeamManagement.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$finance$2f$budget$2f$components$2f$budgetWraper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/finance/budget/components/budgetWraper.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ViewProjectById({ projectId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialTab = searchParams.get("tab") || "details";
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [isProjectActive, setIsProjectActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tabsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleTabs, setVisibleTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hiddenTabs, setHiddenTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMoreMenu, setShowMoreMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { project, status, error, successMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ViewProjectById.useSelector": (state)=>state.project
    }["ViewProjectById.useSelector"]);
    const { currentUser, isTeamLead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"])(project?.data?.teamLeadId);
    // Permission: Only CPC or Team Lead can see Budget tab
    const canViewBudget = currentUser?.role?.toLowerCase() === "cpc" || isTeamLead || currentUser?.position === "Team Lead";
    const canEditStatus = currentUser?.role?.toLowerCase() === "cpc" || isTeamLead || currentUser?.position === "Team Lead";
    // Base tabs (without budget)
    const baseTabs = [
        {
            id: "details",
            label: "Details",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 802,
                columnNumber: 46
            }, this)
        },
        {
            id: "team",
            label: "Team",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 803,
                columnNumber: 40
            }, this)
        },
        {
            id: "task",
            label: "Task",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiList"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 804,
                columnNumber: 40
            }, this)
        },
        {
            id: "issues",
            label: "Issues",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BugIcon$3e$__["BugIcon"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 805,
                columnNumber: 44
            }, this)
        },
        {
            id: "mom",
            label: "MoM",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuFolderClock"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 806,
                columnNumber: 38
            }, this)
        },
        {
            id: "document",
            label: "Document",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dock$3e$__["Dock"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 807,
                columnNumber: 48
            }, this)
        }
    ];
    // Insert Budget tab after "Team" only if allowed
    const tabs = canViewBudget ? [
        ...baseTabs.slice(0, 2),
        {
            id: "budget",
            label: "Budget",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 814,
                columnNumber: 48
            }, this)
        },
        ...baseTabs.slice(2)
    ] : baseTabs;
    // Screen size & dynamic tab overflow logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            const checkScreenSize = {
                "ViewProjectById.useEffect.checkScreenSize": ()=>{
                    const large = window.innerWidth >= 1024;
                    setIsLargeScreen(large);
                    if (large) {
                        setVisibleTabs(tabs);
                        setHiddenTabs([]);
                    } else {
                        updateTabVisibility();
                    }
                }
            }["ViewProjectById.useEffect.checkScreenSize"];
            const updateTabVisibility = {
                "ViewProjectById.useEffect.updateTabVisibility": ()=>{
                    if (!tabsContainerRef.current) return;
                    const container = tabsContainerRef.current;
                    const containerWidth = container.offsetWidth;
                    const tabElements = container.querySelectorAll(".tab-button");
                    const moreButton = container.querySelector(".more-button");
                    const moreWidth = moreButton ? moreButton.offsetWidth + 24 : 100;
                    let totalWidth = 0;
                    let visibleCount = 0;
                    tabElements.forEach({
                        "ViewProjectById.useEffect.updateTabVisibility": (btn, index)=>{
                            const btnWidth = btn.offsetWidth + 16;
                            if (totalWidth + btnWidth < containerWidth - moreWidth) {
                                totalWidth += btnWidth;
                                visibleCount = index + 1;
                            }
                        }
                    }["ViewProjectById.useEffect.updateTabVisibility"]);
                    setVisibleTabs(tabs.slice(0, visibleCount));
                    setHiddenTabs(tabs.slice(visibleCount));
                }
            }["ViewProjectById.useEffect.updateTabVisibility"];
            checkScreenSize();
            window.addEventListener("resize", checkScreenSize);
            return ({
                "ViewProjectById.useEffect": ()=>window.removeEventListener("resize", checkScreenSize)
            })["ViewProjectById.useEffect"];
        }
    }["ViewProjectById.useEffect"], [
        tabs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            if (!isLargeScreen) {
                const timer = setTimeout({
                    "ViewProjectById.useEffect.timer": ()=>{
                        if (tabsContainerRef.current) {
                            const container = tabsContainerRef.current;
                            const containerWidth = container.offsetWidth;
                            const tabElements = container.querySelectorAll(".tab-button");
                            const moreButton = container.querySelector(".more-button");
                            const moreWidth = moreButton ? moreButton.offsetWidth + 24 : 100;
                            let totalWidth = 0;
                            let visibleCount = 0;
                            tabElements.forEach({
                                "ViewProjectById.useEffect.timer": (btn, index)=>{
                                    const btnWidth = btn.offsetWidth + 16;
                                    if (totalWidth + btnWidth < containerWidth - moreWidth) {
                                        totalWidth += btnWidth;
                                        visibleCount = index + 1;
                                    }
                                }
                            }["ViewProjectById.useEffect.timer"]);
                            setVisibleTabs(tabs.slice(0, visibleCount));
                            setHiddenTabs(tabs.slice(visibleCount));
                        }
                    }
                }["ViewProjectById.useEffect.timer"], 50);
                return ({
                    "ViewProjectById.useEffect": ()=>clearTimeout(timer)
                })["ViewProjectById.useEffect"];
            }
        }
    }["ViewProjectById.useEffect"], [
        activeTab,
        isLargeScreen,
        tabs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            if (activeTab !== initialTab) {
                const params = new URLSearchParams(window.location.search);
                params.set("tab", activeTab);
                router.replace(`?${params.toString()}`, {
                    scroll: false
                });
            }
        }
    }["ViewProjectById.useEffect"], [
        activeTab,
        initialTab,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            if (projectId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId));
            }
        }
    }["ViewProjectById.useEffect"], [
        projectId,
        dispatch
    ]);
    const [newStatus, setNewStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusUpdateMessage, setStatusUpdateMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStatusModalOpen, setIsStatusModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasFetchedAfterStatusChange, setHasFetchedAfterStatusChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            if (project?.data?.status && project.data.status !== "Planned") {
                setIsProjectActive(true);
            }
        }
    }["ViewProjectById.useEffect"], [
        project?.data?.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            if (successMessage && !hasFetchedAfterStatusChange) {
                setStatusUpdateMessage(successMessage);
                setHasFetchedAfterStatusChange(true);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId));
                setNewStatus("");
                setTimeout({
                    "ViewProjectById.useEffect": ()=>{
                        setStatusUpdateMessage("");
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetSuccessMessage"])());
                        setHasFetchedAfterStatusChange(false);
                    }
                }["ViewProjectById.useEffect"], 3000);
            }
            if (error?.statusChange) {
                setStatusUpdateMessage(error.statusChange);
                setTimeout({
                    "ViewProjectById.useEffect": ()=>setStatusUpdateMessage("")
                }["ViewProjectById.useEffect"], 3000);
            }
        }
    }["ViewProjectById.useEffect"], [
        successMessage,
        error?.statusChange,
        dispatch,
        projectId,
        hasFetchedAfterStatusChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewProjectById.useEffect": ()=>{
            const timer = setTimeout({
                "ViewProjectById.useEffect.timer": ()=>setShowLoader(false)
            }["ViewProjectById.useEffect.timer"], 1000);
            return ({
                "ViewProjectById.useEffect": ()=>clearTimeout(timer)
            })["ViewProjectById.useEffect"];
        }
    }["ViewProjectById.useEffect"], []);
    const handleDownload = (url, filename)=>{
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(()=>setIsDownloading(false), 1000);
    };
    const handleStatusSubmit = ()=>{
        if (newStatus) {
            setIsStatusModalOpen(false);
            setIsConfirmModalOpen(true);
        }
    };
    const handleConfirmStatusChange = ()=>{
        if (newStatus && projectId) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changeProjectStatus"])({
                projectId,
                status: newStatus
            }));
            setIsConfirmModalOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Status Updated!");
            setIsProjectActive(true);
        }
    };
    const statusOptions = [
        "In Progress",
        "Completed"
    ];
    const getFileTypeInfo = (filename)=>{
        const ext = filename.split(".").pop().toLowerCase();
        switch(ext){
            case "pdf":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 973,
                        columnNumber: 34
                    }, this),
                    bg: "bg-red-50"
                };
            case "doc":
            case "docx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 974,
                        columnNumber: 47
                    }, this),
                    bg: "bg-blue-50"
                };
            case "xls":
            case "xlsx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-green-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 975,
                        columnNumber: 47
                    }, this),
                    bg: "bg-green-50"
                };
            case "ppt":
            case "pptx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-orange-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 976,
                        columnNumber: 47
                    }, this),
                    bg: "bg-orange-50"
                };
            case "csv":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-yellow-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 977,
                        columnNumber: 34
                    }, this),
                    bg: "bg-yellow-50"
                };
            default:
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFile"], {
                        className: "h-5 w-5 text-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 978,
                        columnNumber: 31
                    }, this),
                    bg: "bg-gray-50"
                };
        }
    };
    if (status?.fetchProject === "loading" || showLoader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center w-full h-[calc(100vh-64px)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$Spinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 985,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
            lineNumber: 984,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-2xl border border-gray-200 mx-auto max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "border-b border-gray-200 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center min-w-0 gap-2 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>router.back(),
                                            className: "inline-flex shrink-0 items-center gap-2 bg-blue-600 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1000,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1001,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 996,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "truncate text-base sm:text-xl font-semibold text-gray-900 max-w-[150px] sm:max-w-[250px] md:max-w-[400px]",
                                            title: project?.data?.projectName || "Unnamed Project",
                                            children: project?.data?.projectName || "Unnamed Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1004,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 995,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center flex-wrap justify-end gap-2 sm:gap-4 mt-2 sm:mt-0",
                                    children: [
                                        statusUpdateMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm font-medium ${successMessage ? "text-green-600" : "text-red-600"}`,
                                            children: statusUpdateMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1014,
                                            columnNumber: 17
                                        }, this),
                                        canEditStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsStatusModalOpen(true),
                                            className: "bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2",
                                            children: isProjectActive ? "Update Status" : "Start Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 994,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 993,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: !isProjectActive && project?.data?.status === "Planned" && canEditStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-screen flex items-center justify-center p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-10 max-w-md w-full text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-gray-800 mb-4",
                                        children: "Project is in Planned Stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 leading-relaxed",
                                        children: [
                                            "This project is currently in the planning phase. To access tasks, team, issues, documents, and other features, please start the project by changing its status to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-blue-600",
                                                children: "In Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1040,
                                                columnNumber: 22
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1037,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setNewStatus("In Progress");
                                            setIsStatusModalOpen(true);
                                        },
                                        className: "bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200 w-full",
                                        children: "Start Project Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1042,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1033,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1032,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-200 bg-white sticky top-0 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: tabsContainerRef,
                                        className: "flex overflow-x-auto scrollbar-hide px-4",
                                        onScroll: ()=>setShowMoreMenu(false),
                                        children: [
                                            visibleTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab(tab.id),
                                                    className: `tab-button flex items-center gap-3 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 flex-shrink-0 whitespace-nowrap ${activeTab === tab.id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"}`,
                                                    children: [
                                                        tab.icon,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: tab.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1073,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tab.id, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, this)),
                                            !isLargeScreen && hiddenTabs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                open: showMoreMenu,
                                                onOpenChange: setShowMoreMenu,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: `more-button flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${showMoreMenu ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl leading-none",
                                                                    children: "..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden sm:inline",
                                                                    children: "More"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1086,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1080,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                        lineNumber: 1079,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "w-56 p-0 rounded-xl shadow-2xl border border-gray-200 mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-2",
                                                            children: hiddenTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setActiveTab(tab.id);
                                                                        setShowMoreMenu(false);
                                                                    },
                                                                    className: "flex items-center gap-3 w-full px-4 py-3 text-sm text-left hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl",
                                                                    children: [
                                                                        tab.icon,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: tab.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1101,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, tab.id, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1090,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                        lineNumber: 1089,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1078,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1057,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1056,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 min-h-screen",
                                    children: [
                                        activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$components$2f$ProjectMetrics$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    projectId: projectId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInfo"], {
                                                                    className: "h-7 w-7 text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1119,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Project Information"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1118,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-green-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-green-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                                        className: "h-6 w-6 text-green-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1125,
                                                                                        columnNumber: 74
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1125,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Project ID"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1127,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: project?.data?.projectId || "N/A"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1128,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1126,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1124,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-green-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-green-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPaperclip"], {
                                                                                        className: "h-6 w-6 text-green-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1132,
                                                                                        columnNumber: 74
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1132,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Category"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1134,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: project?.data?.category ? project.data.category.toLowerCase().split(" ").map((w)=>w[0].toUpperCase() + w.slice(1)).join(" ") : "N/A"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1135,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1133,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1131,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        project?.data?.clientId?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-green-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-green-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                                        className: "h-6 w-6 text-green-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1144,
                                                                                        columnNumber: 76
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1144,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Client ID"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1146,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: project.data.clientId
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1147,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1145,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1143,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-green-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-green-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                                        className: "h-6 w-6 text-green-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1152,
                                                                                        columnNumber: 74
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1152,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Team Lead"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1154,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: project?.data?.teamLeadName || "Unassigned"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1155,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1153,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1151,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1123,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-7",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-blue-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-blue-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                                        className: "h-6 w-6 text-blue-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1162,
                                                                                        columnNumber: 73
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1162,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Status"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1164,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `inline-flex items-center px-5 py-2 rounded-full text-sm font-bold mt-2 ${project?.data?.status === "Completed" ? "bg-green-100 text-green-800" : project?.data?.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`,
                                                                                            children: project?.data?.status || "N/A"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1165,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1163,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1161,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-purple-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-purple-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                        className: "h-6 w-6 text-purple-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1175,
                                                                                        columnNumber: 75
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1175,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Onboarding Date"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1177,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: project?.data?.createdAt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.createdAt) : "N/A"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1178,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1176,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1174,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        project?.data?.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-indigo-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-indigo-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                        className: "h-6 w-6 text-indigo-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1185,
                                                                                        columnNumber: 77
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1185,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Start Date"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1187,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.startDate)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1188,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1186,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        project?.data?.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-red-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-red-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                        className: "h-6 w-6 text-red-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1194,
                                                                                        columnNumber: 74
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1194,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "End Date"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1196,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.endDate)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1197,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1195,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1193,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        project?.data?.expectedEndDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-5 p-4 bg-orange-50 rounded-xl",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-orange-100 rounded-lg",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                        className: "h-6 w-6 text-orange-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1203,
                                                                                        columnNumber: 77
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1203,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-gray-600",
                                                                                            children: "Expected End Date"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1205,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-gray-900 mt-1",
                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.expectedEndDate)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                            lineNumber: 1206,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1204,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1202,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1122,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1117,
                                                    columnNumber: 21
                                                }, this),
                                                project?.data?.attachments?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileStack$3e$__["FileStack"], {
                                                                    className: "h-7 w-7 text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1217,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Attachments"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1216,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                                            children: project.data.attachments.map((attachment, index)=>{
                                                                const fileInfo = getFileTypeInfo(attachment.filename);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDownload(attachment.url, attachment.filename),
                                                                        disabled: isDownloading,
                                                                        className: "cursor-pointer w-full p-6 text-left space-y-4 hover:bg-white/50 transition-all",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `p-4 rounded-xl ${fileInfo.bg} w-fit shadow-md`,
                                                                                children: fileInfo.icon
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                lineNumber: 1230,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold text-gray-900 truncate text-base",
                                                                                        children: attachment.filename
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1234,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500 mt-1",
                                                                                        children: "Click to download"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1235,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                lineNumber: 1233,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDownload"], {
                                                                                        className: "h-5 w-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1238,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "Download"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                        lineNumber: 1239,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                lineNumber: 1237,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                        lineNumber: 1225,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, index, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1224,
                                                                    columnNumber: 31
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1220,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1215,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                                    className: "h-7 w-7 text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1251,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Description"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1250,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "prose prose-lg max-w-none",
                                                            children: project?.data?.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 whitespace-pre-wrap leading-relaxed text-base",
                                                                children: project.data.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                lineNumber: 1256,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-500 italic text-lg",
                                                                children: "No description provided for this project."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                lineNumber: 1260,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1254,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1114,
                                            columnNumber: 19
                                        }, this),
                                        activeTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$AllTaskListByProjectId$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            project: project?.data,
                                            projectId: project?.data?.projectId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1267,
                                            columnNumber: 42
                                        }, this),
                                        activeTab === "team" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$components$2f$TeamManagement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            project: project,
                                            projectId: projectId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1268,
                                            columnNumber: 42
                                        }, this),
                                        activeTab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$components$2f$bug$2f$ProjectbugList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            project: project,
                                            projectId: projectId,
                                            teamLeadId: project?.data?.teamLeadId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1269,
                                            columnNumber: 44
                                        }, this),
                                        activeTab === "mom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProjectwiseAllmeetingMom$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            projectName: project?.data?.projectName,
                                            project: project?.data,
                                            projectId: projectId,
                                            teamLeadId: project?.data?.teamLeadId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1270,
                                            columnNumber: 41
                                        }, this),
                                        activeTab === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$components$2f$DocumentManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            project: project?.data,
                                            projectId: projectId,
                                            teamLeadId: project?.data?.teamLeadId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1271,
                                            columnNumber: 46
                                        }, this),
                                        activeTab === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: canViewBudget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$finance$2f$budget$2f$components$2f$budgetWraper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                projectId: projectId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1277,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-96 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                            className: "h-16 w-16 text-gray-400 mx-auto mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1281,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold text-gray-700",
                                                            children: "Access Restricted"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1282,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 mt-2",
                                                            children: "You don't have permission to view the budget."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1283,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1280,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1279,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 1030,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 992,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isStatusModalOpen,
                onOpenChange: setIsStatusModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold text-gray-900",
                                children: project?.data?.status === "Planned" ? "Start Project" : "Update Project Status"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1299,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-3",
                                    children: "Select New Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: newStatus,
                                    onValueChange: setNewStatus,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-full h-12 text-base border-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Choose status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1307,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: statusOptions.filter((s)=>s !== project?.data?.status).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: s,
                                                    className: "text-base",
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1313,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsStatusModalOpen(false),
                                    className: "px-6 py-3 text-base",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleStatusSubmit,
                                    disabled: !newStatus,
                                    className: "bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base",
                                    children: "Proceed"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1320,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                    lineNumber: 1297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 1296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isConfirmModalOpen,
                onOpenChange: setIsConfirmModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Confirm Status Change"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1334,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700",
                                children: [
                                    "Are you sure you want to change the project status to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-blue-600 text-xl",
                                        children: newStatus
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1339,
                                        columnNumber: 15
                                    }, this),
                                    "?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1337,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsConfirmModalOpen(false),
                                    className: "px-6 py-3 text-base",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleConfirmStatusChange,
                                    className: "bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base",
                                    children: "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                    lineNumber: 1332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 1331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
        lineNumber: 991,
        columnNumber: 5
    }, this);
}
_s(ViewProjectById, "nHJ65Z/yN00POovRrtSYw+Mh8xo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"]
    ];
});
_c = ViewProjectById;
var _c;
__turbopack_context__.k.register(_c, "ViewProjectById");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_modules_project-management_project_components_ViewProjectById_233c6b89.js.map