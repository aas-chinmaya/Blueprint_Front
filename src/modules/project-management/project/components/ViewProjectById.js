



"use client";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectById,
  changeProjectStatus,
  resetSuccessMessage,
} from "@/modules/project-management/project/slices/projectSlice";
import {
  FiArrowLeft,
  FiDownload,
  FiUsers,
  FiList,
  FiFileText,
  FiInfo,
  FiCalendar,
  FiUser,
  FiPaperclip,
  FiFile,
} from "react-icons/fi";
import {
  Briefcase,
  TrendingUp,
  FileStack,
  BugIcon,
  Dock,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import AllTaskListByProjectId from "@/modules/project-management/task/components/AllTaskListByProjectId";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LuFolderClock } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ProjectbugList from "../../issues/components/bug/ProjectbugList";
import Spinner from "@/components/loader/Spinner";
import ProjectwiseAllMeetingAndMom from "@/modules/meet/components/ProjectwiseAllmeetingMom";
import { formatDateUTC } from "@/utils/formatDate";
import DocumentManager from "@/modules/document/components/DocumentManager";
import ProjectMetrics from "../../analytics/components/ProjectMetrics";
import TeamManagement from "@/modules/project-management/team/components/TeamManagement";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function ViewProjectById({ projectId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "details";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isProjectActive, setIsProjectActive] = useState(false);

  // Dynamic tabs with overflow detection only on sm/md (below lg)
  const tabsContainerRef = useRef(null);
  const [visibleTabs, setVisibleTabs] = useState([]);
  const [hiddenTabs, setHiddenTabs] = useState([]);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const tabs = [
    { id: "details", label: "Details", icon: <FiInfo className="h-5 w-5" /> },
    { id: "team", label: "Team", icon: <FiUsers className="h-5 w-5" /> },
    { id: "task", label: "Task", icon: <FiList className="h-5 w-5" /> },
    { id: "issues", label: "Issues", icon: <BugIcon className="h-5 w-5" /> },
    { id: "mom", label: "Mom", icon: <LuFolderClock className="h-5 w-5" /> },
    { id: "document", label: "Document", icon: <Dock className="h-5 w-5" /> },
  ];

  // Track screen size: lg+ shows all tabs, sm/md uses dynamic overflow
  useEffect(() => {
    const checkScreenSize = () => {
      const large = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
      setIsLargeScreen(large);
      if (large) {
        setVisibleTabs(tabs);
        setHiddenTabs([]);
      } else {
        updateTabVisibility();
      }
    };

    const updateTabVisibility = () => {
      if (!tabsContainerRef.current) return;

      const container = tabsContainerRef.current;
      const containerWidth = container.offsetWidth;
      const tabElements = container.querySelectorAll(".tab-button");
      const moreButton = container.querySelector(".more-button");
      const moreWidth = moreButton ? moreButton.offsetWidth + 24 : 100; // padding + margin

      let totalWidth = 0;
      let visibleCount = 0;

      tabElements.forEach((btn, index) => {
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
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Recalculate visible/hidden on tab change or content load (for sm/md only)
  useEffect(() => {
    if (!isLargeScreen) {
      const timer = setTimeout(() => {
        if (tabsContainerRef.current) {
          updateTabVisibility();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isLargeScreen,tabs]);

  const updateTabVisibility = () => {}; // Defined inside useEffect above

  useEffect(() => {
    if (activeTab !== initialTab) {
      const params = new URLSearchParams(window.location.search);
      params.set("tab", activeTab);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [activeTab, initialTab, router]);

  const dispatch = useDispatch();
  const { project, status, error, successMessage } = useSelector((state) => state.project);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(projectId));
    }
  }, [projectId, dispatch]);

  const [newStatus, setNewStatus] = useState("");
  const [statusUpdateMessage, setStatusUpdateMessage] = useState("");
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasFetchedAfterStatusChange, setHasFetchedAfterStatusChange] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (project?.data?.status && project.data.status !== "Planned") {
      setIsProjectActive(true);
    }
  }, [project?.data?.status]);

  useEffect(() => {
    if (successMessage && !hasFetchedAfterStatusChange) {
      setStatusUpdateMessage(successMessage);
      setHasFetchedAfterStatusChange(true);
      dispatch(fetchProjectById(projectId));
      setNewStatus("");
      setTimeout(() => {
        setStatusUpdateMessage("");
        dispatch(resetSuccessMessage());
        setHasFetchedAfterStatusChange(false);
      }, 3000);
    }
    if (error?.statusChange) {
      setStatusUpdateMessage(error.statusChange);
      setTimeout(() => setStatusUpdateMessage(""), 3000);
    }
  }, [successMessage, error?.statusChange, dispatch, projectId, hasFetchedAfterStatusChange]);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  const handleDownload = (url, filename) => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const handleStatusSubmit = () => {
    if (newStatus) {
      setIsStatusModalOpen(false);
      setIsConfirmModalOpen(true);
    }
  };

  const handleConfirmStatusChange = () => {
    if (newStatus && projectId) {
      dispatch(changeProjectStatus({ projectId, status: newStatus }));
      setIsConfirmModalOpen(false);
      toast.success("Status Updated!");
      setIsProjectActive(true);
    }
  };

  const statusOptions = ["In Progress", "Completed"];

  const canEditStatus =
    currentUser?.role?.toLowerCase() === "cpc" ||
    isTeamLead ||
    currentUser?.position === "Team Lead";

  const getFileTypeInfo = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return { icon: <FiFileText className="h-5 w-5 text-red-600" />, bg: "bg-red-50" };
      case "doc":
      case "docx":
        return { icon: <FiFileText className="h-5 w-5 text-blue-600" />, bg: "bg-blue-50" };
      case "xls":
      case "xlsx":
        return { icon: <FiFileText className="h-5 w-5 text-green-600" />, bg: "bg-green-50" };
      case "ppt":
      case "pptx":
        return { icon: <FiFileText className="h-5 w-5 text-orange-600" />, bg: "bg-orange-50" };
      case "csv":
        return { icon: <FiFileText className="h-5 w-5 text-yellow-600" />, bg: "bg-yellow-50" };
      default:
        return { icon: <FiFile className="h-5 w-5 text-gray-600" />, bg: "bg-gray-50" };
    }
  };

  if (status?.fetchProject === "loading" || showLoader) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-64px)]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="shadow-2xl border border-gray-200 mx-auto max-w-full">
        <CardHeader className="border-b border-gray-200 bg-white">
          {/* <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back
              </button>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {project?.data?.projectName || "Unnamed Project"}
              </CardTitle>
            </div>
            <div className="flex items-center gap-4">
              {statusUpdateMessage && (
                <p
                  className={`text-sm font-medium ${
                    successMessage ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {statusUpdateMessage}
                </p>
              )}
              {canEditStatus && (
                <Button
                  onClick={() => setIsStatusModalOpen(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  {isProjectActive ? "Update Status" : "Start Project"}
                </Button>
              )}
            </div>
          </div> */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
  {/* Left side: Back + Project name */}
  <div className="flex items-center min-w-0 gap-2 sm:gap-4">
    <Button
      onClick={() => router.back()}
      className="inline-flex shrink-0 items-center gap-2 bg-blue-600 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
    >
      <FiArrowLeft className="h-4 w-4" />
      <span className="hidden sm:inline">Back</span>
    </Button>

    <CardTitle
      className="truncate text-base sm:text-xl font-semibold text-gray-900 max-w-[150px] sm:max-w-[250px] md:max-w-[400px]"
      title={project?.data?.projectName || "Unnamed Project"}
    >
      {project?.data?.projectName || "Unnamed Project"}
    </CardTitle>
  </div>

  {/* Right side: Status + message */}
  <div className="flex items-center flex-wrap justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
    {statusUpdateMessage && (
      <p
        className={`text-xs sm:text-sm font-medium ${
          successMessage ? "text-green-600" : "text-red-600"
        }`}
      >
        {statusUpdateMessage}
      </p>
    )}
    {canEditStatus && (
      <Button
        onClick={() => setIsStatusModalOpen(true)}
        className="bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2"
      >
        {isProjectActive ? "Update Status" : "Start Project"}
      </Button>
    )}
  </div>
</div>

        </CardHeader>

        <CardContent className="p-0">
          {!isProjectActive && project?.data?.status === "Planned" && canEditStatus ? (
            // <div className="p-16 text-center bg-gray-100 min-h-screen flex flex-col justify-center item-center">
            //   <h2 className="text-3xl font-bold text-gray-800 mb-6">
            //     Project is in Planned Stage
            //   </h2>
            //   <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            //     This project is currently in the planning phase. To access tasks, team, issues, documents, and other features, 
            //     please start the project by changing its status to In Progress.
            //   </p>
            //   <Button
            //     onClick={() => {
            //       setNewStatus("In Progress");
            //       setIsStatusModalOpen(true);
            //     }}
            //     className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-xl shadow-lg w-[1"
            //   >
            //     Start Project Now
            //   </Button>
            // </div>
            <div className="min-h-screen flex items-center justify-center  p-6">
  <div className=" p-10 max-w-md w-full text-center">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Project is in Planned Stage
    </h2>
    <p className="text-gray-600 mb-8 leading-relaxed">
      This project is currently in the planning phase. To access tasks, team, issues, 
      documents, and other features, please start the project by changing its status 
      to <span className="font-medium text-blue-600">In Progress</span>.
    </p>
    <Button
      onClick={() => {
        setNewStatus("In Progress");
        setIsStatusModalOpen(true);
      }}
      className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200 w-full"
    >
      Start Project Now
    </Button>
  </div>
</div>

          ) : (
            <>
              {/* Responsive Tab Navigation - 3 dots only on sm/md */}
              <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
                <div
                  ref={tabsContainerRef}
                  className="flex overflow-x-auto scrollbar-hide px-4"
                  onScroll={() => setShowMoreMenu(false)}
                >
                  {visibleTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-button flex items-center gap-3 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                        activeTab === tab.id
                          ? "border-blue-600 text-blue-600 bg-blue-50"
                          : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}

                  {/* 3-dot More menu - only shows when needed on sm/md */}
                  {!isLargeScreen && hiddenTabs.length > 0 && (
                    <Popover open={showMoreMenu} onOpenChange={setShowMoreMenu}>
                      <PopoverTrigger asChild>
                        <button
                          className={`more-button flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
                            showMoreMenu
                              ? "border-blue-600 text-blue-600 bg-blue-50"
                              : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-2xl leading-none">⋯</span>
                          <span className="hidden sm:inline">More</span>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-0 rounded-xl shadow-2xl border border-gray-200 mt-2">
                        <div className="py-2">
                          {hiddenTabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => {
                                setActiveTab(tab.id);
                                setShowMoreMenu(false);
                              }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {tab.icon}
                              <span>{tab.label}</span>
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-2 min-h-screen">
                {activeTab === "details" && (
                  <div className="space-y-12">
                    
                      <ProjectMetrics projectId={projectId} />
                  

                    <div className="">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
                        <FiInfo className="h-7 w-7 text-blue-600" />
                        Project Information
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-7">
                          <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
                            <div className="p-3 bg-green-100 rounded-lg">
                              <Briefcase className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600">Project ID</p>
                              <p className="text-xl font-bold text-gray-900 mt-1">{project?.data?.projectId || "N/A"}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
                            <div className="p-3 bg-green-100 rounded-lg">
                              <FiPaperclip className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600">Category</p>
                              <p className="text-xl font-bold text-gray-900 mt-1">
                                {project?.data?.category
                                  ? project.data.category
                                      .toLowerCase()
                                      .split(" ")
                                      .map((w) => w[0].toUpperCase() + w.slice(1))
                                      .join(" ")
                                  : "N/A"}
                              </p>
                            </div>
                          </div>
                          {project?.data?.clientId?.trim() && (
                            <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
                              <div className="p-3 bg-green-100 rounded-lg">
                                <FiUser className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-600">Client ID</p>
                                <p className="text-xl font-bold text-gray-900 mt-1">{project.data.clientId}</p>
                              </div>
                            </div>
                          )}
                          <div className="flex items-start gap-5 p-4 bg-green-50 rounded-xl">
                            <div className="p-3 bg-green-100 rounded-lg">
                              <FiUser className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600">Team Lead</p>
                              <p className="text-xl font-bold text-gray-900 mt-1">{project?.data?.teamLeadName || "Unassigned"}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-7">
                          <div className="flex items-start gap-5 p-4 bg-blue-50 rounded-xl">
                            <div className="p-3 bg-blue-100 rounded-lg">
                              <TrendingUp className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600">Status</p>
                              <span
                                className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-bold mt-2 ${
                                  project?.data?.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : project?.data?.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {project?.data?.status || "N/A"}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 p-4 bg-purple-50 rounded-xl">
                            <div className="p-3 bg-purple-100 rounded-lg">
                              <FiCalendar className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600">Onboarding Date</p>
                              <p className="text-xl font-bold text-gray-900 mt-1">
                                {project?.data?.createdAt ? formatDateUTC(project.data.createdAt) : "N/A"}
                              </p>
                            </div>
                          </div>
                          {project?.data?.startDate && (
                            <div className="flex items-start gap-5 p-4 bg-indigo-50 rounded-xl">
                              <div className="p-3 bg-indigo-100 rounded-lg">
                                <FiCalendar className="h-6 w-6 text-indigo-600" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-600">Start Date</p>
                                <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.startDate)}</p>
                              </div>
                            </div>
                          )}
                          {project?.data?.endDate && (
                            <div className="flex items-start gap-5 p-4 bg-red-50 rounded-xl">
                              <div className="p-3 bg-red-100 rounded-lg">
                                <FiCalendar className="h-6 w-6 text-red-600" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-600">End Date</p>
                                <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.endDate)}</p>
                              </div>
                            </div>
                          )}
                          {project?.data?.expectedEndDate && (
                            <div className="flex items-start gap-5 p-4 bg-orange-50 rounded-xl">
                              <div className="p-3 bg-orange-100 rounded-lg">
                                <FiCalendar className="h-6 w-6 text-orange-600" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-600">Expected End Date</p>
                                <p className="text-xl font-bold text-gray-900 mt-1">{formatDateUTC(project.data.expectedEndDate)}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {project?.data?.attachments?.length > 0 && (
                      <div className="">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
                          <FileStack className="h-7 w-7 text-blue-600" />
                          Attachments
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {project.data.attachments.map((attachment, index) => {
                            const fileInfo = getFileTypeInfo(attachment.filename);
                            return (
                              <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                              >
                                <button
                                  onClick={() => handleDownload(attachment.url, attachment.filename)}
                                  disabled={isDownloading}
                                  className="cursor-pointer w-full p-6 text-left space-y-4 hover:bg-white/50 transition-all"
                                >
                                  <div className={`p-4 rounded-xl ${fileInfo.bg} w-fit shadow-md`}>
                                    {fileInfo.icon}
                                  </div>
                                  <div>
                                    <p className="font-semibold text-gray-900 truncate text-base">{attachment.filename}</p>
                                    <p className="text-sm text-gray-500 mt-1">Click to download</p>
                                  </div>
                                  <div className="flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiDownload className="h-5 w-5" />
                                    <span className="font-medium">Download</span>
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8 border-b-2 border-gray-200 pb-4">
                        <FiFileText className="h-7 w-7 text-blue-600" />
                        Description
                      </h3>
                      <div className="prose prose-lg max-w-none">
                        {project?.data?.description ? (
                          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">
                            {project.data.description}
                          </p>
                        ) : (
                          <p className="text-gray-500 italic text-lg">No description provided for this project.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "task" && (
                  <div className="">
                    <AllTaskListByProjectId project={project?.data} projectId={project?.data?.projectId} />
                  </div>
                )}

                {activeTab === "team" && <TeamManagement project={project} projectId={projectId} />}

                {activeTab === "issues" && (
                  <div className="">
                    <ProjectbugList project={project} projectId={projectId} teamLeadId={project?.data?.teamLeadId} />
                  </div>
                )}

                {activeTab === "mom" && (
                  <div className="">
                    <ProjectwiseAllMeetingAndMom
                      projectName={project?.data?.projectName}
                      project={project?.data}
                      projectId={projectId}
                      teamLeadId={project?.data?.teamLeadId}
                    />
                  </div>
                )}

                {activeTab === "document" && (
                  <div className="">
                    <DocumentManager
                      project={project?.data}
                      projectId={projectId}
                      teamLeadId={project?.data?.teamLeadId}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Status Modals remain unchanged */}
      <Dialog open={isStatusModalOpen} onOpenChange={setIsStatusModalOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {project?.data?.status === "Planned" ? "Start Project" : "Update Project Status"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select New Status</label>
            <Select value={newStatus} onValueChange={setNewStatus}>
              <SelectTrigger className="w-full h-12 text-base border-2">
                <SelectValue placeholder="Choose status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions
                  .filter((s) => s !== project?.data?.status)
                  .map((s) => (
                    <SelectItem key={s} value={s} className="text-base">
                      {s}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStatusModalOpen(false)} className="px-6 py-3 text-base">
              Cancel
            </Button>
            <Button onClick={handleStatusSubmit} disabled={!newStatus} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base">
              Proceed
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Confirm Status Change</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <p className="text-lg text-gray-700">
              Are you sure you want to change the project status to{" "}
              <span className="font-bold text-blue-600 text-xl">{newStatus}</span>?
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmModalOpen(false)} className="px-6 py-3 text-base">
              Cancel
            </Button>
            <Button onClick={handleConfirmStatusChange} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}


