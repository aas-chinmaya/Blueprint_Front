


















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
import EditTaskModal from "./EditTaskModal";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AllTaskListByProjectId = ({ projectId, project }) => {
  const { currentUser, isTeamLead } = useCurrentUser(project?.teamLeadId);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
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

  useEffect(() => {
    if (projectId) {
      setShowLoader(true);
      dispatch(fetchTasksByProjectId(projectId))
        .unwrap()
        .finally(() => setShowLoader(false));
    }
  }, [dispatch, projectId]);

  const employeeId = currentUser?.id;
  const tasksFromStore = useSelector((state) => selectTasksByProjectId(state, projectId));
  const status = useSelector(selectTaskStatus);
  const employeeProjectTasks = useSelector((state) =>
    selectEmployeeProjectTasks(state, projectId, employeeId)
  );

  useEffect(() => {
    if (projectId && employeeId && (!isTeamLeadOrCpc || viewMode === "my")) {
      setShowLoader(true);
      dispatch(fetchEmployeeProjectTasks({ projectId, employeeId }))
        .unwrap()
        .finally(() => setShowLoader(false));
    }
  }, [dispatch, projectId, employeeId, isTeamLeadOrCpc, viewMode]);

  const tasks = useMemo(() => {
    return (!isTeamLeadOrCpc || viewMode === "my") ? employeeProjectTasks || [] : tasksFromStore || [];
  }, [isTeamLeadOrCpc, viewMode, tasksFromStore, employeeProjectTasks]);

  const showAllViewOption = isTeamLeadOrCpc;
  const showAssignedFilter = showAllViewOption && viewMode === "all";

  const refreshTasks = () => {
    dispatch(fetchTasksByProjectId(projectId));
    if (!isTeamLeadOrCpc || viewMode === "my") {
      dispatch(fetchEmployeeProjectTasks({ projectId, employeeId }));
    }
  };

  const handleDeleteTask = async () => {
    try {
      await dispatch(deleteTask(taskIdToDelete)).unwrap();
      toast.success("Task deleted successfully!");
      refreshTasks();
    } catch (err) {
      toast.error("Failed to delete task.");
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
    return Array.from(new Set(tasks.flatMap(t => t.assignedTo?.map(a => a.memberName) || []))).filter(Boolean);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(t =>
        t.title?.toLowerCase().includes(q) ||
        t.task_id?.toLowerCase().includes(q) ||
        t.assignedTo?.some(a => a.memberName?.toLowerCase().includes(q))
      );
    }

    if (priorityFilter !== "all") filtered = filtered.filter(t => t.priority === priorityFilter);
    if (statusFilter !== "all") filtered = filtered.filter(t => t.status === statusFilter);
    if (assignedToFilter !== "all" && showAssignedFilter) {
      filtered = filtered.filter(t => t.assignedTo?.some(a => a.memberName === assignedToFilter));
    }
    if (dateFrom || dateTo) {
      filtered = filtered.filter(t => {
        if (!t.deadline) return false;
        const d = new Date(t.deadline);
        return (!dateFrom || d >= dateFrom) && (!dateTo || d <= dateTo);
      });
    }

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aVal = sortConfig.key.includes(".") ? sortConfig.key.split(".").reduce((o, k) => o?.[k], a) : a[sortConfig.key];
        let bVal = sortConfig.key.includes(".") ? sortConfig.key.split(".").reduce((o, k) => o?.[k], b) : b[sortConfig.key];
        if (typeof aVal === "string") aVal = aVal.toLowerCase();
        if (typeof bVal === "string") bVal = bVal.toLowerCase();
        return (aVal < bVal ? -1 : 1) * (sortConfig.direction === "asc" ? 1 : -1);
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

  const totalPages = Math.max(1, Math.ceil(filteredTasks.length / tasksPerPage));
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * tasksPerPage, currentPage * tasksPerPage);

  const getInitials = (name) => {
    if (!name) return "NA";
    const words = name.split(" ");
    return words.length > 1 ? `${words[0][0]}${words[1][0]}`.toUpperCase() : name.slice(0, 2).toUpperCase();
  };

  const truncateTitle = (title) => title?.length > 70 ? `${title.slice(0, 70)}...` : title || "N/A";

  return (
    <TooltipProvider>
      <div className="w-full bg-white">
        <div className="space-y-2">

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[180px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {showAllViewOption && (
              <Select value={viewMode} onValueChange={handleViewModeChange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="my">My Tasks</SelectItem>
                  <SelectItem value="all">All Tasks</SelectItem>
                </SelectContent>
              </Select>
            )}

            <Button variant="outline" onClick={() => setShowFilterDialog(true)}>
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
            <Button variant="outline" onClick={handleResetFilters}>
              <X className="w-4 h-4 mr-2" /> Reset
            </Button>

            {isTeamLeadOrCpc && (
              <>
                <Button variant="default" onClick={() => dispatch(downloadTasksReport({ projectId }))}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button variant="default" onClick={() => setShowCreateTaskModal(true)}>
                  <Plus className="w-4 h-4 mr-2" /> Create Task
                </Button>
              </>
            )}
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-16">S.N</TableHead>
                  <TableHead onClick={() => handleSort("title")} className="cursor-pointer">Title</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead onClick={() => handleSort("priority")} className="cursor-pointer">Priority</TableHead>
                  <TableHead onClick={() => handleSort("deadline")} className="cursor-pointer">Deadline</TableHead>
                  <TableHead onClick={() => handleSort("status")} className="cursor-pointer">Status</TableHead>
                  <TableHead className="w-20">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {showLoader ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-10">Loading...</TableCell></TableRow>
                ) : paginatedTasks.length === 0 ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-10 text-gray-500">No tasks found</TableCell></TableRow>
                ) : (
                  paginatedTasks.map((task, idx) => (
                    <TableRow key={task._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/workspace/task/${task.task_id}`)}>
                      <TableCell>{(currentPage - 1) * tasksPerPage + idx + 1}</TableCell>
                      <TableCell className="font-medium">{truncateTitle(task.title)}</TableCell>

                      <TableCell>
                        {task.assignedTo?.length > 0 ? (
                          <div className="flex -space-x-2">
                            {task.assignedTo.slice(0, 3).map((a) => (
                              <Tooltip key={a.memberId || a._id}>
                                <TooltipTrigger asChild>
                                  <Avatar className="w-8 h-8 ring-2 ring-white">
                                    <AvatarFallback className="bg-teal-600 text-white text-xs">
                                      {getInitials(a.memberName)}
                                    </AvatarFallback>
                                  </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>{a.memberName}</TooltipContent>
                              </Tooltip>
                            ))}
                            {task.assignedTo.length > 3 && (
                              <div className="w-8 h-8 rounded-full bg-gray-300 text-xs flex items-center justify-center ring-2 ring-white">
                                +{task.assignedTo.length - 3}
                              </div>
                            )}
                          </div>
                        ) : "—"}
                      </TableCell>

                      <TableCell>
                        <span className={cn(
                          "px-2.5 py-0.5 rounded-full text-xs font-medium",
                          task.priority === "Low" && "bg-green-100 text-green-800",
                          task.priority === "Medium" && "bg-yellow-100 text-yellow-800",
                          task.priority === "High" && "bg-red-100 text-red-800"
                        )}>
                          {task.priority}
                        </span>
                      </TableCell>

                      <TableCell className="text-xs">
                        {formatDateTimeIST(task.deadline) || "—"}
                      </TableCell>

                      <TableCell>
                        <span className={cn(
                          "px-2.5 py-0.5 rounded-full text-xs font-medium",
                          task.status === "Pending" && "bg-yellow-100 text-yellow-800",
                          task.status === "In Progress" && "bg-blue-100 text-blue-800",
                          task.status === "Completed" && "bg-green-100 text-green-800"
                        )}>
                          {task.status}
                        </span>
                      </TableCell>

                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => router.push(`/workspace/task/${task.task_id}`)}>
                              <Eye className="w-4 h-4 mr-2" /> View
                            </DropdownMenuItem>
                            {isTeamLeadOrCpc && viewMode === "all" && (
                              <>
                                <DropdownMenuItem onClick={() => { setEditingTaskId(task.task_id); setShowEditModal(true); }}>
                                  <Edit className="w-4 h-4 mr-2" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => { setTaskIdToDelete(task.task_id); setShowDeleteModal(true); }} className="text-red-600">
                                  <Trash2 className="w-4 h-4 mr-2" /> Delete
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

          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Previous</Button>
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(page)}>
                    {page}
                  </Button>
                );
              })}
              <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</Button>
            </div>
          )}

          <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" /> Delete Task
                </DialogTitle>
              </DialogHeader>
              <p>Are you sure you want to delete this task? This action cannot be undone.</p>
              <div className="flex justify-end gap-3 mt-4">
                <Button variant="outline" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteTask}>Delete</Button>
              </div>
            </DialogContent>
          </Dialog>

          {isTeamLeadOrCpc && (
            <CreateTaskModal
              onTaskAssingn={refreshTasks}
              projectId={projectId}
              project={project}
              isOpen={showCreateTaskModal}
              onClose={() => setShowCreateTaskModal(false)}
            />
          )}

          {isTeamLeadOrCpc && (
            <EditTaskModal
              taskId={editingTaskId}
              isOpen={showEditModal}
              onClose={() => { setShowEditModal(false); setEditingTaskId(null); }}
              onTaskUpdated={refreshTasks}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AllTaskListByProjectId;