

"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBugs } from "@/modules/project-management/issues/slices/bugSlice";
import {
  Bug as BugIcon,
  Loader2,
  Search,
  Filter,
  ChevronDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { FiX } from "react-icons/fi";
// import IssueDetailsViewModal from "@/modules/bug/IssueDetailsViewModal";
import { formatDateTimeIST } from "@/utils/formatDate";
import BugDetailsViewModal from "@/modules/project-management/issues/components/bug/BugDetailsViewModal";

// Status and priority styling
const statusColors = {
  open: "bg-red-100 text-red-700 border-red-200",
  resolved: "bg-green-100 text-green-700 border-green-200",
};

const priorityColors = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Low: "bg-green-100 text-green-700 border-green-200",
};

const reviewStatusColors = {
  NA: "bg-gray-100 text-gray-700 border-gray-200",
  INREVIEW: "bg-yellow-100 text-yellow-700 border-yellow-200",
  BUGREPORTED: "bg-yellow-100 text-yellow-700 border-yellow-200",
  RESOLVED: "bg-green-100 text-green-700 border-green-200",
};

// Status and priority filter options
const statusFilterOptions = [
  { value: "all", label: "All Issues" },
  { value: "open", label: "Open" },
  { value: "resolved", label: "Resolved" },
];

const priorityFilterOptions = [
  { value: "all", label: "All Priorities" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

// Sort options
const sortOptions = [
  { value: "title-asc", label: "Title (A-Z)" },
  { value: "title-desc", label: "Title (Z-A)" },
  { value: "status-asc", label: "Status (A-Z)" },
  { value: "status-desc", label: "Status (Z-A)" },
  { value: "priority-asc", label: "Priority (Low to High)" },
  { value: "priority-desc", label: "Priority (High to Low)" },
  { value: "deadline-desc", label: "Newest First" },
  { value: "deadline-asc", label: "Oldest First" },
];

export default function AllissuesList() {
  const dispatch = useDispatch();

  // Define selectors inside component
  const selectAllBugs = (state) => state.bugs.allBugs;
  const selectLoading = (state) => state.bugs.loading;
  const selectError = (state) => state.bugs.error;

  const allBugs = useSelector(selectAllBugs);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [sortBy, setSortBy] = useState("deadline-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedBug, setSelectedBug] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllBugs());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus, selectedPriority]);

  // Update currentPage if it exceeds totalPages
  useEffect(() => {
    const totalPages = Math.ceil((allBugs?.length || 0) / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [allBugs, itemsPerPage, currentPage]);

  // Calculate issue statistics
  const issueStats = {
    total: allBugs?.length || 0,
    open: allBugs?.filter((bug) => bug.status.toLowerCase() === "open").length || 0,
    resolved: allBugs?.filter((bug) => bug.status.toLowerCase() === "resolved").length || 0,
    highPriority: allBugs?.filter((bug) => bug.priority === "High").length || 0,
    mediumPriority: allBugs?.filter((bug) => bug.priority === "Medium").length || 0,
    lowPriority: allBugs?.filter((bug) => bug.priority === "Low").length || 0,
  };

  // Filter and sort issues
  const filteredAndSortedBugs = () => {
    let filtered = allBugs || [];

    if (selectedStatus !== "all") {
      filtered = filtered.filter((bug) => bug.status.toLowerCase() === selectedStatus);
    }

    if (selectedPriority !== "all") {
      filtered = filtered.filter((bug) => bug.priority === selectedPriority);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (bug) =>
          bug.bug_id?.toLowerCase().includes(term) ||
          bug.title?.toLowerCase().includes(term) ||
          bug.description?.toLowerCase().includes(term) ||
          bug.taskRef?.toLowerCase().includes(term)
      );
    }

    // Create a shallow copy of the filtered array before sorting
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return (a.title || "").localeCompare(b.title || "");
        case "title-desc":
          return (b.title || "").localeCompare(a.title || "");
        case "status-asc":
          return (a.status || "").localeCompare(b.status || "");
        case "status-desc":
          return (b.status || "").localeCompare(a.status || "");
        case "priority-asc":
          return (a.priority || "").localeCompare(b.priority || "");
        case "priority-desc":
          return (b.priority || "").localeCompare(a.priority || "");
        case "deadline-desc":
          return new Date(b.deadline) - new Date(a.deadline);
        case "deadline-asc":
          return new Date(a.deadline) - new Date(b.deadline);
        default:
          return 0;
      }
    });
  };

  // Pagination logic
  const sortedBugs = filteredAndSortedBugs();
  const totalPages = Math.ceil(sortedBugs.length / itemsPerPage);
  const paginatedBugs = sortedBugs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewClick = (bug) => {
    setSelectedBug(bug);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBug(null);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("all");
    setSelectedPriority("all");
    setSortBy("deadline-desc");
  };

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-gray-100 rounded-lg p-4 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="flex items-center gap-4">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-8 w-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );

  // No results message
  const NoResults = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <BugIcon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No issues found
      </h3>
      <p className="text-gray-600 mb-6">
        {selectedStatus === "all" && selectedPriority === "all" && !searchTerm
          ? "No issues available."
          : "No issues match your current filters. Try adjusting your search or filter criteria."}
      </p>
      <Button
        onClick={clearFilters}
        variant="outline"
        className="text-sm"
      >
        Clear All Filters
      </Button>
    </div>
  );

  if (loading.allBugsFetch && allBugs.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white p-4 sm:p-8">
        <Card className="mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="bg-gray-100 text-white rounded-t-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div className="animate-pulse">
                <div className="h-6 bg-blue-400 rounded w-32 mb-2"></div>
                <div className="h-4 bg-blue-300 rounded w-24"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <LoadingSkeleton />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full bg-white ">
      <Card className="mx-auto bg-white border border-gray-200 rounded-xl shadow-sm ">
        <CardHeader className="bg-gray-200 rounded-t-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h1 className="text-xl sm:text-2xl font-bold">All Issues</h1>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6 ">
          {/* Search and Controls */}
          <div className="flex flex-wrap gap-4">
            {/* Search */}
            <div className="flex-1 min-w-[180px]">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search issues..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-sm w-full"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FiX className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex-1 min-w-[140px]">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="text-sm w-full">
                  <SelectValue placeholder="All Issues" />
                </SelectTrigger>
                <SelectContent>
                  {statusFilterOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm"
                    >
                      <div className="flex justify-between w-full">
                        <span>{option.label}</span>
                        <Badge variant="secondary" className={`ml-2 ${statusColors[option.value] || "bg-gray-100 text-gray-700"}`}>
                          {option.value === "all"
                            ? issueStats.total
                            : option.value === "open"
                            ? issueStats.open
                            : issueStats.resolved}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Priority Filter */}
            <div className="flex-1 min-w-[140px]">
              <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                <SelectTrigger className="text-sm w-full">
                  <SelectValue placeholder="All Priorities" />
                </SelectTrigger>
                <SelectContent>
                  {priorityFilterOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm"
                    >
                      <div className="flex justify-between w-full">
                        <span>{option.label}</span>
                        <Badge variant="secondary" className={`ml-2 ${priorityColors[option.value] || "bg-gray-100 text-gray-700"}`}>
                          {option.value === "all"
                            ? issueStats.total
                            : option.value === "High"
                            ? issueStats.highPriority
                            : option.value === "Medium"
                            ? issueStats.mediumPriority
                            : issueStats.lowPriority}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="flex-1 min-w-[140px]">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="text-sm w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Issues Table */}
          {loading.allBugsFetch && sortedBugs.length > 0 ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-5 h-5 mr-2 animate-spin text-blue-600" />
            </div>
          ) : sortedBugs.length === 0 ? (
            <NoResults />
          ) : (
            <>
              <div className="overflow-x-auto rounded-md border min-h-screen">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 text-xs sm:text-sm">
      <TableHead className="font-bold text-gray-700 w-1/2">Title</TableHead>
      <TableHead className="font-bold text-gray-700 hidden md:table-cell w-1/5">Project Name</TableHead>
                      <TableHead className="font-bold text-gray-700">Status</TableHead>
                      <TableHead className="font-bold text-gray-700 hidden lg:table-cell">Deadline</TableHead>
                      <TableHead className="font-bold text-gray-700 hidden sm:table-cell">Priority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedBugs.map((bug) => (
                      <TableRow 
                        key={bug._id} 
                        className="text-xs sm:text-sm cursor-pointer hover:bg-gray-50" 
                        onClick={() => handleViewClick(bug)}
                        role="button"
                        tabIndex={0}
                      >
                        <TableCell className="font-medium text-gray-900 max-w-xs truncate">
                          {bug.title}
                        </TableCell>
                        <TableCell className="text-gray-600 hidden md:table-cell">
                          {bug.projectName || "NA"}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[bug.status.toLowerCase()]} text-xs capitalize`}>
                            {bug.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600 hidden lg:table-cell">
                          {
                            formatDateTimeIST(bug.deadline)||"No Deadline Given"
                          }
                        
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className={`${priorityColors[bug.priority]} text-xs`}>
                            {bug.priority}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 sm:gap-0">
                <div className="text-xs sm:text-sm text-gray-700">
                  Page {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, sortedBugs.length)} of{" "}
                  {sortedBugs.length} Issues
                </div>
                {totalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) => Math.max(prev - 1, 1));
                          }}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>

                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }

                        if (pageNum > 0 && pageNum <= totalPages) {
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationLink
                                href="#"
                                isActive={currentPage === pageNum}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(pageNum);
                                }}
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      {totalPages > 5 && currentPage < totalPages - 2 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                          }}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Issue Details Modal (View Only) */}
      <BugDetailsViewModal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        bug={selectedBug}
        bugId={selectedBug?.bug_id}
        readOnly={true}
      />
    </div>
  );
}