module.exports = {

"[project]/src/modules/project-management/project/components/ViewProjectById.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/project/slices/projectSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BugIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as BugIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dock.js [app-ssr] (ecmascript) <export default as Dock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$AllTaskListByProjectId$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/components/AllTaskListByProjectId.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$components$2f$bug$2f$ProjectbugList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/issues/components/bug/ProjectbugList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$Spinner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loader/Spinner.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProjectwiseAllmeetingMom$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/ProjectwiseAllmeetingMom.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$components$2f$DocumentManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/document/components/DocumentManager.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$components$2f$ProjectMetrics$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$components$2f$TeamManagement$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/team/components/TeamManagement.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$finance$2f$budget$2f$components$2f$budgetWraper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/finance/budget/components/budgetWraper.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
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
;
;
function ViewProjectById({ projectId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialTab = searchParams.get("tab") || "details";
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [isProjectActive, setIsProjectActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dynamic tabs with overflow detection only on sm/md (below lg)
    const tabsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleTabs, setVisibleTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hiddenTabs, setHiddenTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMoreMenu, setShowMoreMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const tabs = [
        {
            id: "details",
            label: "Details",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiInfo"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 791,
                columnNumber: 46
            }, this)
        },
        {
            id: "team",
            label: "Team",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 792,
                columnNumber: 40
            }, this)
        },
        // { id: "budget", label: "Budget", icon: <FiUsers className="h-5 w-5" /> },
        {
            id: "task",
            label: "Task",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiList"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 794,
                columnNumber: 40
            }, this)
        },
        {
            id: "issues",
            label: "Issues",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BugIcon$3e$__["BugIcon"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 795,
                columnNumber: 44
            }, this)
        },
        {
            id: "mom",
            label: "Mom",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuFolderClock"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 796,
                columnNumber: 38
            }, this)
        },
        {
            id: "document",
            label: "Document",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dock$3e$__["Dock"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 797,
                columnNumber: 48
            }, this)
        }
    ];
    // Track screen size: lg+ shows all tabs, sm/md uses dynamic overflow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            const large = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
            setIsLargeScreen(large);
            if (large) {
                setVisibleTabs(tabs);
                setHiddenTabs([]);
            } else {
                updateTabVisibility();
            }
        };
        const updateTabVisibility = ()=>{
            if (!tabsContainerRef.current) return;
            const container = tabsContainerRef.current;
            const containerWidth = container.offsetWidth;
            const tabElements = container.querySelectorAll(".tab-button");
            const moreButton = container.querySelector(".more-button");
            const moreWidth = moreButton ? moreButton.offsetWidth + 24 : 100; // padding + margin
            let totalWidth = 0;
            let visibleCount = 0;
            tabElements.forEach((btn, index)=>{
                const btnWidth = btn.offsetWidth + 16; // gap + padding
                if (totalWidth + btnWidth < containerWidth - moreWidth) {
                    totalWidth += btnWidth;
                    visibleCount = index + 1;
                }
            });
            setVisibleTabs(tabs.slice(0, visibleCount));
            setHiddenTabs(tabs.slice(visibleCount));
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return ()=>window.removeEventListener("resize", checkScreenSize);
    }, []);
    // Recalculate visible/hidden on tab change or content load (for sm/md only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLargeScreen) {
            const timer = setTimeout(()=>{
                if (tabsContainerRef.current) {
                    updateTabVisibility();
                }
            }, 50);
            return ()=>clearTimeout(timer);
        }
    }, [
        activeTab,
        isLargeScreen,
        tabs
    ]);
    const updateTabVisibility = ()=>{}; // Defined inside useEffect above
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab !== initialTab) {
            const params = new URLSearchParams(window.location.search);
            params.set("tab", activeTab);
            router.replace(`?${params.toString()}`, {
                scroll: false
            });
        }
    }, [
        activeTab,
        initialTab,
        router
    ]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { project, status, error, successMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.project);
    const { currentUser, isTeamLead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentUser"])(project?.data?.teamLeadId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (projectId) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId));
        }
    }, [
        projectId,
        dispatch
    ]);
    const [newStatus, setNewStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusUpdateMessage, setStatusUpdateMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStatusModalOpen, setIsStatusModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasFetchedAfterStatusChange, setHasFetchedAfterStatusChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (project?.data?.status && project.data.status !== "Planned") {
            setIsProjectActive(true);
        }
    }, [
        project?.data?.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (successMessage && !hasFetchedAfterStatusChange) {
            setStatusUpdateMessage(successMessage);
            setHasFetchedAfterStatusChange(true);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId));
            setNewStatus("");
            setTimeout(()=>{
                setStatusUpdateMessage("");
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetSuccessMessage"])());
                setHasFetchedAfterStatusChange(false);
            }, 3000);
        }
        if (error?.statusChange) {
            setStatusUpdateMessage(error.statusChange);
            setTimeout(()=>setStatusUpdateMessage(""), 3000);
        }
    }, [
        successMessage,
        error?.statusChange,
        dispatch,
        projectId,
        hasFetchedAfterStatusChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setShowLoader(false), 1000);
        return ()=>clearTimeout(timer);
    }, []);
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
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["changeProjectStatus"])({
                projectId,
                status: newStatus
            }));
            setIsConfirmModalOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Status Updated!");
            setIsProjectActive(true);
        }
    };
    const statusOptions = [
        "In Progress",
        "Completed"
    ];
    const canEditStatus = currentUser?.role?.toLowerCase() === "cpc" || isTeamLead || currentUser?.position === "Team Lead";
    const getFileTypeInfo = (filename)=>{
        const ext = filename.split(".").pop().toLowerCase();
        switch(ext){
            case "pdf":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 950,
                        columnNumber: 24
                    }, this),
                    bg: "bg-red-50"
                };
            case "doc":
            case "docx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 953,
                        columnNumber: 24
                    }, this),
                    bg: "bg-blue-50"
                };
            case "xls":
            case "xlsx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-green-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 956,
                        columnNumber: 24
                    }, this),
                    bg: "bg-green-50"
                };
            case "ppt":
            case "pptx":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-orange-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 959,
                        columnNumber: 24
                    }, this),
                    bg: "bg-orange-50"
                };
            case "csv":
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {
                        className: "h-5 w-5 text-yellow-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 961,
                        columnNumber: 24
                    }, this),
                    bg: "bg-yellow-50"
                };
            default:
                return {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFile"], {
                        className: "h-5 w-5 text-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 963,
                        columnNumber: 24
                    }, this),
                    bg: "bg-gray-50"
                };
        }
    };
    if (status?.fetchProject === "loading" || showLoader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center w-full h-[calc(100vh-64px)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loader$2f$Spinner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 970,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
            lineNumber: 969,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-2xl border border-gray-200 mx-auto max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "border-b border-gray-200 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center min-w-0 gap-2 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>router.back(),
                                            className: "inline-flex shrink-0 items-center gap-2 bg-blue-600 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 987,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 988,
                                                    columnNumber: 7
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 983,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "truncate text-base sm:text-xl font-semibold text-gray-900 max-w-[150px] sm:max-w-[250px] md:max-w-[400px]",
                                            title: project?.data?.projectName || "Unnamed Project",
                                            children: project?.data?.projectName || "Unnamed Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 991,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 982,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center flex-wrap justify-end gap-2 sm:gap-4 mt-2 sm:mt-0",
                                    children: [
                                        statusUpdateMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm font-medium ${successMessage ? "text-green-600" : "text-red-600"}`,
                                            children: statusUpdateMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1002,
                                            columnNumber: 7
                                        }, this),
                                        canEditStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsStatusModalOpen(true),
                                            className: "bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2",
                                            children: isProjectActive ? "Update Status" : "Start Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1011,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1000,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 980,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 978,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: !isProjectActive && project?.data?.status === "Planned" && canEditStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-screen flex items-center justify-center  p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " p-10 max-w-md w-full text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-gray-800 mb-4",
                                        children: "Project is in Planned Stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1028,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 leading-relaxed",
                                        children: [
                                            "This project is currently in the planning phase. To access tasks, team, issues, documents, and other features, please start the project by changing its status to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-blue-600",
                                                children: "In Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1034,
                                                columnNumber: 10
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1031,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setNewStatus("In Progress");
                                            setIsStatusModalOpen(true);
                                        },
                                        className: "bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200 w-full",
                                        children: "Start Project Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1036,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1027,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1026,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-200 bg-white sticky top-0 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: tabsContainerRef,
                                        className: "flex overflow-x-auto scrollbar-hide px-4",
                                        onScroll: ()=>setShowMoreMenu(false),
                                        children: [
                                            visibleTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab(tab.id),
                                                    className: `tab-button flex items-center gap-3 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 flex-shrink-0 whitespace-nowrap ${activeTab === tab.id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"}`,
                                                    children: [
                                                        tab.icon,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: tab.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1068,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tab.id, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1058,
                                                    columnNumber: 21
                                                }, this)),
                                            !isLargeScreen && hiddenTabs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                open: showMoreMenu,
                                                onOpenChange: setShowMoreMenu,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: `more-button flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${showMoreMenu ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl leading-none",
                                                                    children: "⋯"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden sm:inline",
                                                                    children: "More"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1076,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                        lineNumber: 1075,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "w-56 p-0 rounded-xl shadow-2xl border border-gray-200 mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-2",
                                                            children: hiddenTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setActiveTab(tab.id);
                                                                        setShowMoreMenu(false);
                                                                    },
                                                                    className: "flex items-center gap-3 w-full px-4 py-3 text-sm text-left hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl",
                                                                    children: [
                                                                        tab.icon,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: tab.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1099,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, tab.id, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1090,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1088,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                        lineNumber: 1087,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1074,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1052,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1051,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 min-h-screen",
                                    children: [
                                        activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$components$2f$ProjectMetrics$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    projectId: projectId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1299,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 pb-4 border-b-2 border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "w-7 h-7 text-teal-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1304,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: "Project Information"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1305,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1303,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1313,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Project ID"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1314,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: project?.data?.projectId || "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1315,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1312,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1319,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Category"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1320,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900 capitalize",
                                                                                    children: project?.data?.category ? project.data.category.toLowerCase().split(" ").map((w)=>w[0].toUpperCase() + w.slice(1)).join(" ") : "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1321,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1318,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        project?.data?.clientId?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1330,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Client ID"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1331,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: project.data.clientId
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1332,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1329,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1337,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Team Lead"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1338,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: project?.data?.teamLeadName || "Unassigned"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1339,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1336,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1311,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1346,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Status"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1347,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${project?.data?.status === "Completed" ? "bg-gray-100 text-gray-800" : project?.data?.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-orange-100 text-orange-800"}`,
                                                                                    children: project?.data?.status || "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1348,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1345,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1358,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Onboarding Date"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1359,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: project?.data?.createdAt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.createdAt) : "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1360,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1357,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        project?.data?.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1367,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Start Date"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1368,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.startDate)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1369,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1366,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        project?.data?.expectedEndDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1375,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Expected End Date"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1376,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.expectedEndDate)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1377,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1374,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        project?.data?.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    className: "w-5 h-5 text-gray-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1383,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-600 w-36",
                                                                                    children: "Completed On"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1384,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-gray-900",
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateUTC"])(project.data.endDate)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1385,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1382,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1344,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1308,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1302,
                                                    columnNumber: 5
                                                }, this),
                                                project?.data?.attachments?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 pb-4 border-b-2 border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                    className: "w-7 h-7 text-teal-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: "Attachments"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1395,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                                            children: project.data.attachments.map((attachment, index)=>{
                                                                const fileInfo = getFileTypeInfo(attachment.filename);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDownload(attachment.url, attachment.filename),
                                                                    disabled: isDownloading,
                                                                    className: "group flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all hover:shadow-lg text-left w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mb-4 p-4 bg-white rounded-lg shadow",
                                                                            children: fileInfo.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1410,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-gray-900 truncate w-full text-center",
                                                                            children: attachment.filename
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1413,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 flex items-center gap-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1417,
                                                                                    columnNumber: 19
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-medium",
                                                                                    children: "Download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                                    lineNumber: 1418,
                                                                                    columnNumber: 19
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                            lineNumber: 1416,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1404,
                                                                    columnNumber: 15
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1400,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1394,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 pb-4 border-b-2 border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "w-7 h-7 text-teal-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1430,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold text-gray-900",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                                    lineNumber: 1431,
                                                                    columnNumber: 9
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1429,
                                                            columnNumber: 7
                                                        }, this),
                                                        project?.data?.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-700 leading-relaxed prose max-w-none text-base whitespace-pre-wrap",
                                                            children: project.data.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1435,
                                                            columnNumber: 9
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 italic",
                                                            children: "No description provided for this project."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                            lineNumber: 1439,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1428,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1296,
                                            columnNumber: 3
                                        }, this),
                                        activeTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$AllTaskListByProjectId$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                project: project?.data,
                                                projectId: project?.data?.projectId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1447,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1446,
                                            columnNumber: 19
                                        }, this),
                                        activeTab === "team" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$components$2f$TeamManagement$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            project: project,
                                            projectId: projectId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1456,
                                            columnNumber: 42
                                        }, this),
                                        activeTab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$components$2f$bug$2f$ProjectbugList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                project: project,
                                                projectId: projectId,
                                                teamLeadId: project?.data?.teamLeadId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1460,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1459,
                                            columnNumber: 19
                                        }, this),
                                        activeTab === "mom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProjectwiseAllmeetingMom$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                projectName: project?.data?.projectName,
                                                project: project?.data,
                                                projectId: projectId,
                                                teamLeadId: project?.data?.teamLeadId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1466,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1465,
                                            columnNumber: 19
                                        }, this),
                                        activeTab === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$components$2f$DocumentManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                project: project?.data,
                                                projectId: projectId,
                                                teamLeadId: project?.data?.teamLeadId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1477,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                        lineNumber: 1023,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 977,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isStatusModalOpen,
                onOpenChange: setIsStatusModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold text-gray-900",
                                children: project?.data?.status === "Planned" ? "Start Project" : "Update Project Status"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1494,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1493,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-3",
                                    children: "Select New Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1499,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: newStatus,
                                    onValueChange: setNewStatus,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-full h-12 text-base border-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Choose status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                lineNumber: 1502,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1501,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: statusOptions.filter((s)=>s !== project?.data?.status).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: s,
                                                    className: "text-base",
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                                    lineNumber: 1508,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                            lineNumber: 1504,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1500,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1498,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsStatusModalOpen(false),
                                    className: "px-6 py-3 text-base",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleStatusSubmit,
                                    disabled: !newStatus,
                                    className: "bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base",
                                    children: "Proceed"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1519,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1515,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                    lineNumber: 1492,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 1491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isConfirmModalOpen,
                onOpenChange: setIsConfirmModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Confirm Status Change"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1529,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1528,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700",
                                children: [
                                    "Are you sure you want to change the project status to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-blue-600 text-xl",
                                        children: newStatus
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                        lineNumber: 1534,
                                        columnNumber: 15
                                    }, this),
                                    "?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                lineNumber: 1532,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsConfirmModalOpen(false),
                                    className: "px-6 py-3 text-base",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1538,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleConfirmStatusChange,
                                    className: "bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base",
                                    children: "Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                                    lineNumber: 1541,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                            lineNumber: 1537,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                    lineNumber: 1527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
                lineNumber: 1526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project-management/project/components/ViewProjectById.js",
        lineNumber: 976,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_modules_project-management_project_components_ViewProjectById_453153be.js.map