

"use client";

import { format } from "date-fns";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  fetchTasksByProjectId,
  deleteTask,
  downloadTasksReport,
  selectTasksByProjectId,
  selectTaskStatus,
  selectEmployeeProjectTasks,
  fetchEmployeeProjectTasks,
} from "@/modules/project-management/task/slices/taskSlice";
import {
  MoreVertical,
  CalendarIcon,
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
  Plus,
  Search,
  AlertCircle,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { formatDateTimeIST } from "@/utils/formatDate";
import CreateTaskModal from "./CreateTaskModal";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const AllTaskListByProjectId = ({ projectId, project }) => {
  const { currentUser, isTeamLead } = useCurrentUser(project?.teamLeadId);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const isCpc = currentUser?.role === "cpc";
  const isTeamLeadOrCpc = isCpc || isTeamLead;
  const [viewMode, setViewMode] = useState(isTeamLeadOrCpc ? "all" : "my");
  const [searchQuery, setSearchQuery] = useState("");
  const [tempPriorityFilter, setTempPriorityFilter] = useState("all");
  const [tempStatusFilter, setTempStatusFilter] = useState("all");
  const [tempAssignedToFilter, setTempAssignedToFilter] = useState("all");
  const [tempDateFrom, setTempDateFrom] = useState(null);
  const [tempDateTo, setTempDateTo] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [assignedToFilter, setAssignedToFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  // Fetch tasks
  useEffect(() => {
    if (projectId) {
      setShowLoader(true);
      dispatch(fetchTasksByProjectId(projectId))
        .unwrap()
        .then(() => setShowLoader(false))
        .catch((err) => {
          toast.error("Failed to fetch tasks: " + err);
          setShowLoader(false);
        });
    }
  }, [dispatch, projectId]);

  const employeeId = currentUser?.id;
  const tasksFromStore = useSelector((state) => selectTasksByProjectId(state, projectId));
  const status = useSelector(selectTaskStatus);
  const employeeProjectTasks = useSelector((state) =>
    selectEmployeeProjectTasks(state, projectId, employeeId)
  );

  // Fetch employee tasks for non-CPC, non-team-lead users or when viewMode is "my"
  useEffect(() => {
    if (projectId && employeeId && (!isTeamLeadOrCpc || viewMode === "my")) {
      setShowLoader(true);
      dispatch(fetchEmployeeProjectTasks({ projectId, employeeId }))
        .unwrap()
        .then(() => setShowLoader(false))
        .catch((err) => {
          toast.error("Failed to fetch employee tasks: " + err);
          setShowLoader(false);
        });
    }
  }, [dispatch, projectId, employeeId, isTeamLeadOrCpc, viewMode]);

  const tasks = useMemo(() => {
    if (!isTeamLeadOrCpc || viewMode === "my") {
      return employeeProjectTasks || [];
    }
    return tasksFromStore || [];
  }, [isTeamLeadOrCpc, viewMode, tasksFromStore, employeeProjectTasks]);

  const showAllViewOption = isTeamLeadOrCpc;
  const showAssignedFilter = showAllViewOption && viewMode === "all";

  const handleDeleteTask = async () => {
    try {
      await dispatch(deleteTask(taskIdToDelete)).unwrap();
      toast.success("Task deleted successfully!");
      setCurrentPage(1);
    } catch (err) {
      toast.error(err || "Failed to delete task.");
    }
    setShowDeleteModal(false);
    setTaskIdToDelete(null);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };

  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
    setCurrentPage(1);
    handleResetFilters();
  };

  const assignedMembers = useMemo(() => {
    if (!Array.isArray(tasks)) return [];
    return Array.from(
      new Set(tasks.map((t) => t?.assignedToDetails?.memberName).filter(Boolean))
    );
  }, [tasks]);

  const assignedMembersMap = useMemo(() => {
    if (!Array.isArray(tasks)) return {};
    return tasks.reduce((map, task) => {
      if (task.assignedToDetails?.memberName && task.assignedTo) {
        map[task.assignedToDetails.memberName] = task.assignedTo;
      }
      return map;
    }, {});
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    let filtered = Array.isArray(tasks) ? [...tasks] : [];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title?.toLowerCase().includes(query) ||
          task.task_id?.toLowerCase().includes(query) ||
          task?.assignedToDetails?.memberName?.toLowerCase().includes(query)
      );
    }

    if (priorityFilter !== "all") filtered = filtered.filter((task) => task.priority === priorityFilter);
    if (statusFilter !== "all") filtered = filtered.filter((task) => task.status === statusFilter);
    if (assignedToFilter !== "all" && showAssignedFilter) {
      filtered = filtered.filter((task) => task?.assignedToDetails?.memberName === assignedToFilter);
    }
    if (dateFrom || dateTo) {
      filtered = filtered.filter((task) => {
        if (!task.deadline) return false;
        const taskDate = new Date(task.deadline);
        return (!dateFrom || taskDate >= dateFrom) && (!dateTo || taskDate <= dateTo);
      });
    }

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = sortConfig.key.includes(".")
          ? sortConfig.key.split(".").reduce((obj, key) => obj?.[key], a)
          : a[sortConfig.key];
        let bValue = sortConfig.key.includes(".")
          ? sortConfig.key.split(".").reduce((obj, key) => obj?.[key], b)
          : b[sortConfig.key];

        if (typeof aValue === "string") aValue = aValue.toLowerCase();
        if (typeof bValue === "string") bValue = bValue.toLowerCase();

        return aValue < bValue
          ? sortConfig.direction === "asc" ? -1 : 1
          : aValue > bValue
          ? sortConfig.direction === "asc" ? 1 : -1
          : 0;
      });
    }

    return filtered;
  }, [tasks, searchQuery, priorityFilter, statusFilter, assignedToFilter, dateFrom, dateTo, sortConfig, showAssignedFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setPriorityFilter("all");
    setStatusFilter("all");
    setAssignedToFilter("all");
    setDateFrom(null);
    setDateTo(null);
    setTempPriorityFilter("all");
    setTempStatusFilter("all");
    setTempAssignedToFilter("all");
    setTempDateFrom(null);
    setTempDateTo(null);
    setSortConfig({ key: "", direction: "asc" });
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setPriorityFilter(tempPriorityFilter);
    setStatusFilter(tempStatusFilter);
    setAssignedToFilter(tempAssignedToFilter);
    setDateFrom(tempDateFrom);
    setDateTo(tempDateTo);
    setShowFilterDialog(false);
    setCurrentPage(1);
  };

  const handleDownloadReport = async () => {
    const filterObj = {
      search: searchQuery || undefined,
      priority: priorityFilter !== "all" ? priorityFilter : undefined,
      status: statusFilter !== "all" ? statusFilter : undefined,
      assignedTo: assignedToFilter !== "all" ? assignedMembersMap[assignedToFilter] : undefined,
      dateFrom: dateFrom ? format(dateFrom, "yyyy-MM-dd") : undefined,
      dateTo: dateTo ? format(dateTo, "yyyy-MM-dd") : undefined,
    };
    const sortKey = sortConfig.key ? `${sortConfig.key}_${sortConfig.direction}` : undefined;
    try {
      await dispatch(downloadTasksReport({ projectId, assignedTo: filterObj.assignedTo, filterObj, sortKey })).unwrap();
      toast.success("Report downloaded successfully!");
    } catch (err) {
      toast.error(err || "Failed to download report.");
    }
  };

  const totalPages = Math.max(1, Math.ceil(filteredTasks.length / tasksPerPage));
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const maxButtons = 8;
    const buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  const getInitials = (name) => {
    if (!name) return "N/A";
    if (name === currentUser?.name && (!isTeamLeadOrCpc || viewMode === "my")) return "Me";
    const words = name.split(" ");
    return words.length > 1
      ? `${words[0][0]}${words[1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };

  const truncateTitle = (title) => {
    if (!title) return "N/A";
    return title.length > 70 ? `${title.slice(0, 70)}...` : title;
  };

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={0}>
      <div className="w-full bg-white">
        <div className="space-y-2">
          {/* Search and Controls */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[180px]">
              <div className="relative w-full">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                />
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
                />
              </div>
            </div>
            {showAllViewOption && (
              <div className="flex-1 min-w-[140px]">
                <Select value={viewMode} onValueChange={handleViewModeChange}>
                  <SelectTrigger
                    className="text-sm w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
                  >
                    <SelectValue placeholder="View Mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                    <SelectItem value="my">My Tasks</SelectItem>
                    <SelectItem value="all">All Tasks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="flex-1 min-w-[140px]">
              <Button
                variant="outline"
                className="w-full bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg h-[38px] text-sm flex items-center justify-center"
                onClick={() => setShowFilterDialog(true)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="flex-1 min-w-[140px]">
              <Button
                variant="outline"
                className="w-full bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg h-[38px] text-sm flex items-center justify-center"
                onClick={handleResetFilters}
              >
                <X className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
            {isTeamLeadOrCpc && (
              <>
                <div className="flex-1 min-w-[140px]">
                  <Button
                    variant="default"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg h-[38px] text-sm flex items-center justify-center"
                    onClick={handleDownloadReport}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <Button
                    variant="default"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg h-[38px] text-sm flex items-center justify-center"
                    onClick={() => setShowCreateTaskModal(true)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Task
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Filter Dialog */}
          <Dialog open={showFilterDialog} onOpenChange={setShowFilterDialog}>
            <DialogContent className="max-w-[95vw] sm:max-w-md bg-white shadow-lg border-gray-200 rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold text-gray-900">
                  Filter Tasks
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Select value={tempPriorityFilter} onValueChange={setTempPriorityFilter}>
                  <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg text-sm">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={tempStatusFilter} onValueChange={setTempStatusFilter}>
                  <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg text-sm">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                {showAssignedFilter && (
                  <Select value={tempAssignedToFilter} onValueChange={setTempAssignedToFilter}>
                    <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg text-sm">
                      <SelectValue placeholder="Assignee" />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                      <SelectItem value="all">All Assignees</SelectItem>
                      {assignedMembers.map((name) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between bg-white border-gray-300 hover:bg-gray-100 rounded-lg text-sm",
                        !tempDateFrom && "text-gray-500"
                      )}
                    >
                      {tempDateFrom ? format(tempDateFrom, "PPP") : <span>From Date</span>}
                      <CalendarIcon className="ml-2 h-4 w-4 text-black" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white shadow-lg border-gray-200 rounded-lg">
                    <Calendar
                      mode="single"
                      selected={tempDateFrom}
                      onSelect={setTempDateFrom}
                      initialFocus
                      className="rounded-lg text-black"
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between bg-white border-gray-300 hover:bg-gray-100 rounded-lg text-sm",
                        !tempDateTo && "text-gray-500"
                      )}
                    >
                      {tempDateTo ? format(tempDateTo, "PPP") : <span>To Date</span>}
                      <CalendarIcon className="ml-2 h-4 w-4 text-black" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white shadow-lg border-gray-200 rounded-lg">
                    <Calendar
                      mode="single"
                      selected={tempDateTo}
                      onSelect={setTempDateTo}
                      initialFocus
                      className="rounded-lg text-black"
                    />
                  </PopoverContent>
                </Popover>
                <Button
                  onClick={handleApplyFilters}
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm"
                >
                  Apply Filters
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Table */}
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 text-xs sm:text-sm">
                  <TableHead className="font-bold text-gray-700 w-[60px]">S.N</TableHead>
                  <TableHead
                    className="font-bold text-gray-700 cursor-pointer w-[300px] sm:w-[400px]"
                    onClick={() => handleSort("title")}
                  >
                    Title
                  </TableHead>
                  <TableHead
                    className="font-bold text-gray-700 cursor-pointer w-[100px]"
                    onClick={() => handleSort("assignedToDetails.memberName")}
                  >
                    Assignee
                  </TableHead>
                  <TableHead
                    className="font-bold text-gray-700 cursor-pointer w-[100px]"
                    onClick={() => handleSort("priority")}
                  >
                    Priority
                  </TableHead>
                  <TableHead
                    className="font-bold text-gray-700 cursor-pointer w-[150px]"
                    onClick={() => handleSort("deadline")}
                  >
                    Deadline
                  </TableHead>
                  <TableHead
                    className="font-bold text-gray-700 cursor-pointer w-[100px]"
                    onClick={() => handleSort("status")}
                  >
                    Status
                  </TableHead>
                  <TableHead className="font-bold text-gray-700 w-[60px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {showLoader ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-gray-500 py-6 text-sm">
                      Loading tasks...
                    </TableCell>
                  </TableRow>
                ) : status === "failed" ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-red-500 py-6 text-sm">
                      Failed to load tasks. Please try again.
                    </TableCell>
                  </TableRow>
                ) : paginatedTasks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-gray-500 py-6 text-sm">
                      No tasks found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedTasks.map((task, index) => (
                    <TableRow
                      key={task._id}
                      className="
                        text-xs sm:text-sm cursor-pointer
                        transition-all duration-300 ease-in-out
                        hover:bg-gray-600 hover:bg-opacity-100
                        hover:shadow-md
                      "
                      onClick={() => router.push(`/workspace/task/${task.task_id}`)}
                    >
                      <TableCell>{(currentPage - 1) * tasksPerPage + index + 1}</TableCell>
                      <TableCell>
                        <span className="line-clamp-1">{truncateTitle(task.title)}</span>
                      </TableCell>
                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">
                              {getInitials(task?.assignedToDetails?.memberName)}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gradient-to-br from-blue-50 to-indigo-50/80 backdrop-blur-sm border border-blue-100/50 shadow-xl shadow-blue-100/20 max-w-[300px] p-4 rounded-xl">
                            <p className="text-xs text-gray-700">
                              {task?.assignedToDetails?.memberName || "N/A"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            task.priority === "Low"
                              ? "bg-green-200 text-green-800"
                              : task.priority === "Medium"
                              ? "bg-yellow-200 text-yellow-800"
                              : task.priority === "High"
                              ? "bg-red-200 text-red-800"
                              : "bg-gray-200 text-gray-800"
                          )}
                        >
                          {task.priority || "N/A"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <p className="text-xs text-gray-700">
                          {formatDateTimeIST(task.deadline) || "N/A"}
                        </p>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            task.status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : task.status === "In Progress"
                              ? "bg-blue-200 text-blue-800"
                              : task.status === "Completed"
                              ? "bg-green-200 text-green-800"
                              : "bg-gray-200 text-gray-800"
                          )}
                        >
                          {task.status || "N/A"}
                        </span>
                        {task.isResolved === false && (
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
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreVertical className="h-4 w-4 text-gray-600" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-white shadow-lg border-gray-200 rounded-lg"
                          >
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/workspace/task/${task.task_id}`);
                              }}
                              className="flex items-center gap-2 cursor-pointer focus:bg-blue-50 text-sm"
                            >
                              <Eye className="w-4 h-4 text-blue-700" />
                              View
                            </DropdownMenuItem>
                            {isTeamLeadOrCpc && viewMode === "all" && (
                              <>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/workspace/task/edit/${task.task_id}`);
                                  }}
                                  className="flex items-center gap-2 cursor-pointer focus:bg-green-50 text-sm"
                                >
                                  <Edit className="w-4 h-4 text-green-700" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setTaskIdToDelete(task.task_id);
                                    setShowDeleteModal(true);
                                  }}
                                  className="flex items-center gap-2 cursor-pointer focus:bg-red-50 text-sm"
                                >
                                  <Trash2 className="w-4 h-4 text-red-700" />
                                  Delete
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 sm:gap-0">
            <div className="text-xs sm:text-sm text-gray-700">
              Showing {Math.min((currentPage - 1) * tasksPerPage + 1, filteredTasks.length)}-
              {Math.min(currentPage * tasksPerPage, filteredTasks.length)} of {filteredTasks.length} tasks
            </div>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg text-xs sm:text-sm"
                >
                  Previous
                </Button>
                {getPaginationButtons().map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      "w-8 h-8 p-0",
                      currentPage === page
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100",
                      "rounded-lg text-xs sm:text-sm"
                    )}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg text-xs sm:text-sm"
                >
                  Next
                </Button>
              </div>
            )}
          </div>

          {/* Delete Confirmation Dialog */}
          {isTeamLeadOrCpc && viewMode === "all" && (
            <Dialog
              open={showDeleteModal}
              onOpenChange={() => {
                setShowDeleteModal(false);
                setTaskIdToDelete(null);
              }}
            >
              <DialogContent className="max-w-[95vw] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Delete Task
                  </DialogTitle>
                  <p className="text-sm text-gray-600">
                    Are you sure you want to delete this task? This action cannot be undone.
                  </p>
                </DialogHeader>
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowDeleteModal(false);
                      setTaskIdToDelete(null);
                    }}
                    className="flex-1 text-sm bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDeleteTask}
                    className="flex-1 text-sm bg-red-600 text-white hover:bg-red-700 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}

          {/* Create Task Modal */}
          {isTeamLeadOrCpc && (
            <CreateTaskModal
              onTaskAssingn={() => {
                dispatch(fetchTasksByProjectId(projectId));
                if (!isTeamLeadOrCpc || viewMode === "my") {
                  dispatch(fetchEmployeeProjectTasks({ projectId, employeeId }));
                }
              }}
              projectId={projectId}
              project={project}
              isOpen={showCreateTaskModal}
              onClose={() => setShowCreateTaskModal(false)}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AllTaskListByProjectId;