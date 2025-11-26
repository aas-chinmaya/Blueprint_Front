





"use client";

import { format } from "date-fns";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  fetchBugByProjectId,
  downloadBugsByProjectId,
  downloadBugsByMemberId,
  fetchEmployeeProjectBugs,
} from "@/modules/project-management/issues/slices/bugSlice";
import { fetchProjectById } from "@/modules/project-management/project/slices/projectSlice";
import { getTeamMembersByProjectId } from "@/modules/project-management/team/slices/teamSlice";
import {
  X,
  CalendarIcon,
  Filter,
  Download,
  Edit,
  Plus,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { formatDateTimeIST } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import BugDetailsViewModal from "./BugDetailsViewModal";
import BugEditModal from "./BugEditModal";
import BugAssignModal from "./BugAssignModal"; // Import the new component
import ReportIssueForm from "./ReportIssueForm";

const ProjectbugList = ({ projectId, teamLeadId }) => {
  const { currentUser, isTeamLead } = useCurrentUser(teamLeadId);
  const { project: { data: projectData } } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const router = useRouter();

  /* ----------  STATE  ---------- */
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBugForEdit, setSelectedBugForEdit] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false); // New state for assign modal
  const [selectedBugForAssign, setSelectedBugForAssign] = useState(null); // New state for selected bug to assign
  const [viewMode, setViewMode] = useState("all");
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
  const bugsPerPage = 10;
  const [showCreateIssue, setShowCreateIssue] = useState(false);

  /* ----------  REDUX SELECTORS  ---------- */
  const bugsByProjectId = useSelector((state) => state.bugs.bugsByProjectId);
  const employeeProjectBugs = useSelector((state) => state.bugs.employeeProjectBugs);
  const teamMembersByProjectId = useSelector((state) => state.team.teamMembersByProjectId);
  const loading = useSelector((state) => state.bugs.loading);

  const employeeId = currentUser?.id;

  /* ----------  FETCH DATA  ---------- */
  useEffect(() => {
    if (projectId) {
      dispatch(fetchBugByProjectId(projectId));
      dispatch(getTeamMembersByProjectId(projectId));
    }
  }, [dispatch, projectId]);

  useEffect(() => {
    if (viewMode === "my" && employeeId) {
      dispatch(fetchEmployeeProjectBugs({ projectId, employeeId }));
    } else {
      dispatch(fetchBugByProjectId(projectId));
    }
  }, [dispatch, viewMode, employeeId,projectId]);

  /* ----------  ROLE LOGIC  ---------- */
  const isCpc = currentUser?.role === "cpc";
  const showAllViewOption = isCpc || isTeamLead;
  const showAssignedFilter = showAllViewOption && viewMode === "all";
  const showActionColumn = viewMode === "all" && (isCpc || isTeamLead);

  useEffect(() => {
    if (!showAllViewOption) setViewMode("my");
  }, [showAllViewOption]);

  /* ----------  BUG LIST  ---------- */
  const bugs = useMemo(() => {
    return viewMode === "my" ? employeeProjectBugs || [] : bugsByProjectId || [];
  }, [viewMode, employeeProjectBugs, bugsByProjectId]);

  /* ----------  HELPERS  ---------- */
  const getInitials = (name) => {
    if (!name) return "N/A";
    if (name === currentUser?.name && viewMode === "my") return "Me";
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };
  const truncate = (s) => (s?.length > 50 ? `${s.slice(0, 50)}...` : s || "");

  const assignedMembersMap = useMemo(() => {
    const map = {};
    (teamMembersByProjectId || []).forEach((m) => {
      map[m.memberName] = m.memberId;
    });
    return map;
  }, [teamMembersByProjectId]);

  /* ----------  FILTER / SORT / SEARCH  ---------- */
  const filteredBugs = useMemo(() => {
    let list = [...bugs];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.bug_id?.toLowerCase().includes(q) ||
          b?.assignedToDetails?.memberName?.toLowerCase().includes(q)
      );
    }
    if (priorityFilter !== "all") list = list.filter((b) => b.priority === priorityFilter);
    if (statusFilter !== "all") list = list.filter((b) => b.status === statusFilter);
    if (assignedToFilter !== "all")
      list = list.filter((b) => b?.assignedToDetails?.memberName === assignedToFilter);
    if (dateFrom || dateTo) {
      list = list.filter((b) => {
        const d = new Date(b.createdAt);
        return (!dateFrom || d >= dateFrom) && (!dateTo || d <= dateTo);
      });
    }
    if (sortConfig.key) {
      list.sort((a, b) => {
        const getVal = (obj, path) =>
          path.split(".").reduce((o, k) => (o ? o[k] : ""), obj);
        const aVal = getVal(a, sortConfig.key);
        const bVal = getVal(b, sortConfig.key);
        const cmp = String(aVal || "").localeCompare(String(bVal || ""));
        return sortConfig.direction === "asc" ? cmp : -cmp;
      });
    }
    return list;
  }, [
    bugs,
    searchQuery,
    priorityFilter,
    statusFilter,
    assignedToFilter,
    dateFrom,
    dateTo,
    sortConfig,
  ]);

  /* ----------  HANDLERS  ---------- */
  const handleViewBug = (bug) => {
    setSelectedBug(bug);
    setShowViewModal(true);
  };
  const handleEditBug = (bug) => {
    setSelectedBugForEdit(bug);
    setShowEditModal(true);
  };
  const handleAssignBug = (bug) => {
    setSelectedBugForAssign(bug);
    setShowAssignModal(true);
  };
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1);
  };
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
    if (showAssignedFilter) setAssignedToFilter(tempAssignedToFilter);
    setDateFrom(tempDateFrom);
    setDateTo(tempDateTo);
    setShowFilterDialog(false);
    setCurrentPage(1);
  };
  const handleDownloadReport = async () => {
    try {
      if (assignedToFilter !== "all" && assignedMembersMap[assignedToFilter]) {
        await dispatch(
          downloadBugsByMemberId({
            projectId,
            memberId: assignedMembersMap[assignedToFilter],
          })
        ).unwrap();
      } else {
        await dispatch(downloadBugsByProjectId(projectId)).unwrap();
      }
      toast.success("Report downloaded!");
    } catch {
      toast.error("No Bug Found");
    }
  };
  const onIssueCreated = () => {
    dispatch(fetchBugByProjectId(projectId));
    toast.success("Issue created – it will appear in the list shortly.");
  };

  /* ----------  PAGINATION  ---------- */
  const totalPages = Math.max(1, Math.ceil(filteredBugs.length / bugsPerPage));
  const paginatedBugs = filteredBugs.slice(
    (currentPage - 1) * bugsPerPage,
    currentPage * bugsPerPage
  );

  const getPaginationButtons = () => {
    const maxButtons = 8;
    const buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    for (let page = startPage; page <= endPage; page++) buttons.push(page);
    return buttons;
  };

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={0}>
      <div className="w-full bg-white">
        <div className="space-y-2">
          {/* ---------- TOP BAR ---------- */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[180px]">
              <div className="relative w-full">
                <Input
                  placeholder="Search bugs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
                />
              </div>
            </div>
            {showAllViewOption && (
              <div className="flex-1 min-w-[140px]">
                <Select value={viewMode} onValueChange={setViewMode}>
                  <SelectTrigger className="text-sm w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg">
                    <SelectValue placeholder="View Mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                    <SelectItem value="my">My Bugs</SelectItem>
                    <SelectItem value="all">All Bugs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="flex-1 min-w-[140px]">
              <Button
                variant="outline"
                className="w-full bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg text-sm flex items-center justify-center"
                onClick={() => setShowFilterDialog(true)}
              >
                Apply Filters <Filter className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex-1 min-w-[140px]">
              <Button
                variant="outline"
                className="w-full bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg text-sm flex items-center justify-center"
                onClick={handleResetFilters}
              >
                Reset Filters <X className="w-4 h-4 ml-2" />
              </Button>
            </div>
            {showAllViewOption && (
              <div className="flex-1 min-w-[140px]">
                <Button
                  variant="default"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg flex items-center justify-center"
                  onClick={handleDownloadReport}
                >
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm flex items-center gap-2"
              onClick={() => setShowCreateIssue(true)}
            >
              <Plus className="h-4 w-4" />
              Create Issue
            </Button>
          </div>

          {/* ---------- FILTER DIALOG ---------- */}
          <Dialog open={showFilterDialog} onOpenChange={setShowFilterDialog}>
            <DialogContent className="max-w-[95vw] sm:max-w-md bg-white shadow-lg border-gray-200 rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold text-gray-900">Filter Bugs</DialogTitle>
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
                    <SelectItem value="Resolved">Resolved</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                {showAssignedFilter && (
                  <Select value={tempAssignedToFilter} onValueChange={setTempAssignedToFilter}>
                    <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg text-sm">
                      <SelectValue placeholder="Assigned To" />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg border-gray-200 rounded-lg">
                      <SelectItem value="all">All Assigned</SelectItem>
                      {(teamMembersByProjectId || []).map((m) => (
                        <SelectItem key={m.memberId} value={m.memberName}>
                          {m.memberName}
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

          {/* ---------- TABLE ---------- */}
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
                  {showActionColumn && <TableHead className="font-bold text-gray-700 w-[60px]">Action</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedBugs.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={showActionColumn ? 7 : 6}
                      className="text-center text-gray-500 py-6 text-sm"
                    >
                      No bugs found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedBugs.map((bug, index) => (
                    <TableRow
                      key={bug._id}
                      className="text-xs sm:text-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:bg-opacity-100 hover:shadow-md"
                      onClick={() => handleViewBug(bug)}
                    >
                      <TableCell>{(currentPage - 1) * bugsPerPage + index + 1}</TableCell>
                      <TableCell>
                        <span className="line-clamp-1">{truncate(bug.title)}</span>
                      </TableCell>
                      <TableCell>
                        {bug?.assignedToDetails?.memberName ? (
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">
                                {getInitials(bug.assignedToDetails.memberName)}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gradient-to-br from-blue-50 to-indigo-50/80 backdrop-blur-sm border border-blue-100/50 shadow-xl shadow-blue-100/20 max-w-[300px] p-4 rounded-xl">
                              <p className="text-xs text-gray-700">
                                {bug.assignedToDetails.memberName}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          showActionColumn && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-2 text-xs bg-white border-gray-300 hover:bg-gray-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAssignBug(bug);
                              }}
                            >
                              Assign
                            </Button>
                          )
                        )}
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            bug.priority === "Low"
                              ? "bg-green-200 text-green-800"
                              : bug.priority === "Medium"
                              ? "bg-yellow-200 text-yellow-800"
                              : bug.priority === "High"
                              ? "bg-red-200 text-red-800"
                              : "bg-gray-200 text-gray-800"
                          )}
                        >
                          {bug.priority || "N/A"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <p className="text-xs text-gray-700">{formatDateTimeIST(bug.deadline) || "N/A"}</p>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            bug.status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : bug.status === "In Progress"
                              ? "bg-blue-200 text-blue-800"
                              : bug.status === "Resolved"
                              ? "bg-purple-200 text-purple-800"
                              : bug.status === "Completed"
                              ? "bg-green-200 text-green-800"
                              : "bg-gray-200 text-gray-800"
                          )}
                        >
                          {bug.status || "N/A"}
                        </span>
                      </TableCell>
                      {showActionColumn && (
                        <TableCell>
                          <Button
                            title="Edit Bug"
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditBug(bug);
                            }}
                          >
                            <Edit className="h-4 w-4 text-green-700" />
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* ---------- PAGINATION ---------- */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 sm:gap-0">
            <div className="text-xs sm:text-sm text-gray-700">
              Showing {Math.min((currentPage - 1) * bugsPerPage + 1, filteredBugs.length)}-
              {Math.min(currentPage * bugsPerPage, filteredBugs.length)} of {filteredBugs.length} bugs
            </div>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
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
                    onClick={() => setCurrentPage(page)}
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
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="bg-white text-black border-gray-300 hover:bg-gray-100 rounded-lg text-xs sm:text-sm"
                >
                  Next
                </Button>
              </div>
            )}
          </div>

          {/* ---------- CREATE ISSUE MODAL ---------- */}
          <ReportIssueForm
            projectData={projectData}
            isOpen={showCreateIssue}
            onClose={() => setShowCreateIssue(false)}
            onIssueReported={onIssueCreated}
          />

          {/* ---------- VIEW / EDIT / ASSIGN MODALS ---------- */}
          <BugDetailsViewModal
            isOpen={showViewModal}
            onOpenChange={setShowViewModal}
            bug={selectedBug}
            bugId={selectedBug?.bug_id}
          />
          <BugEditModal
            isOpen={showEditModal}
            onOpenChange={setShowEditModal}
            bug={selectedBugForEdit}
            bugId={selectedBugForEdit?.bug_id}
          />
          <BugAssignModal
            isOpen={showAssignModal}
            onOpenChange={setShowAssignModal}
            bug={selectedBugForAssign}
            projectId={projectId}
            bugId={selectedBugForAssign?.bug_id}
            teamMembers={teamMembersByProjectId || []}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ProjectbugList;