"use client";

import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  deleteSingleDocument,
  downloadDocument,
  clearError,
} from "@/modules/document/slices/documentSlice";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UploadDocument from "./UploadDocument";
import { format } from "date-fns";
import {
  Loader2,
  Download,
  Trash2,
  AlertCircle,
  FileText,
  Upload,
  X,
  Search,
  Filter,
  HelpCircle,
  Info,
} from "lucide-react";
import { toast } from "sonner";
import { useCurrentUser } from "@/hooks/useCurrentUser";

// File type badges

const getFileTypeBadge = (filePath) => {
  const filename = filePath?.split("/").pop();
  const ext = filename?.split(".").pop()?.toLowerCase();

  const types = {
    pdf: { 
      text: "PDF", 
      className: "bg-red-100 text-red-700 border-red-200" 
    },
    docx: { 
      text: "Word", 
      className: "bg-blue-100 text-blue-700 border-blue-200" 
    },
    doc: { 
      text: "Word", 
      className: "bg-blue-100 text-blue-700 border-blue-200" 
    },
    xlsx: { 
      text: "Excel", 
      className: "bg-green-100 text-green-700 border-green-200" 
    },
    xls: { 
      text: "Excel", 
      className: "bg-green-100 text-green-700 border-green-200" 
    },
    pptx: {
      text: "PowerPoint",
      className: "bg-orange-100 text-orange-700 border-orange-200"
    },
    ppt: { 
      text: "PowerPoint", 
      className: "bg-orange-100 text-orange-700 border-orange-200" 
    },
    jpg: { 
      text: "Image", 
      className: "bg-purple-100 text-purple-700 border-purple-200" 
    },
    jpeg: { 
      text: "Image", 
      className: "bg-purple-100 text-purple-700 border-purple-200" 
    },
    png: { 
      text: "Image", 
      className: "bg-purple-100 text-purple-700 border-purple-200" 
    },
    gif: { 
      text: "Image", 
      className: "bg-purple-100 text-purple-700 border-purple-200" 
    },
    txt: { 
      text: "Text", 
      className: "bg-gray-100 text-gray-700 border-gray-200" 
    },
    zip: { 
      text: "Archive", 
      className: "bg-yellow-100 text-yellow-700 border-yellow-200" 
    },
    default: { 
      text: "Other", 
      className: "bg-gray-100 text-gray-700 border-gray-200" 
    },
  };

  return types[ext] || types.default;
};

// File type options for filter - combined duplicates, added other
const fileTypeOptions = [
  { value: "all", label: "All Types" },
  { value: "pdf", label: "PDF" },
  { value: "word", label: "Word" },
  { value: "excel", label: "Excel" },
  { value: "powerpoint", label: "PowerPoint" },
  { value: "image", label: "Image" },
  { value: "text", label: "Text" },
  { value: "archive", label: "Archive" },
  { value: "other", label: "Other" },
];

// Date filter options
const dateFilterOptions = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "this-week", label: "This Week" },
  { value: "this-month", label: "This Month" },
  { value: "last-30-days", label: "Last 30 Days" },
];

// Sort options
const sortOptions = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
];

export default function DocumentManager({ project, projectId }) {
  const { currentUser } = useCurrentUser();
  const dispatch = useDispatch();
  const {
    items: documents,
    loading,
    deleting,
    error,
    downloading,
  } = useSelector((state) => state.documents);

  // State for filters and pagination
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    docId: null,
    docName: null,
  });

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [fileTypeFilter, setFileTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Fetch documents on mount
  useEffect(() => {
    if (projectId) {
      dispatch(fetchDocuments(projectId));
    }
  }, [dispatch, projectId]);

  // Clear error on unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  // Filter documents by date
  const filterByDate = (doc) => {
    if (dateFilter === "all") return true;

    const uploadedDate = new Date(doc.uploadedAt || doc.createdAt);
    const now = new Date();

    switch (dateFilter) {
      case "today":
        return uploadedDate.toDateString() === now.toDateString();
      case "this-week":
        const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
        return uploadedDate >= weekStart;
      case "this-month":
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return uploadedDate >= monthStart;
      case "last-30-days":
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        return uploadedDate >= thirtyDaysAgo;
      default:
        return true;
    }
  };

  // Filter documents by file type - updated logic for combined types
  const filterByFileType = (doc) => {
    if (fileTypeFilter === "all") return true;

    const filename = doc.filePath?.split("/").pop();
    const ext = filename?.split(".").pop()?.toLowerCase();

    switch (fileTypeFilter) {
      case "pdf":
        return ext === "pdf";
      case "word":
        return ["doc", "docx"].includes(ext);
      case "excel":
        return ["xls", "xlsx"].includes(ext);
      case "powerpoint":
        return ["ppt", "pptx"].includes(ext);
      case "image":
        return ["jpg", "jpeg", "png", "gif"].includes(ext);
      case "text":
        return ext === "txt";
      case "archive":
        return ext === "zip";
      case "other":
        const knownExts = [
          "pdf",
          "doc",
          "docx",
          "xls",
          "xlsx",
          "ppt",
          "pptx",
          "jpg",
          "jpeg",
          "png",
          "gif",
          "txt",
          "zip",
        ];
        return !knownExts.includes(ext);
      default:
        return true;
    }
  };

  // Search documents
  const searchDocuments = (doc) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      doc.name?.toLowerCase().includes(searchLower) ||
      doc.description?.toLowerCase().includes(searchLower)
    );
  };

  // Sort documents
  const sortDocuments = (a, b) => {
    switch (sortBy) {
      case "name-asc":
        return (a.name || "").localeCompare(b.name || "");
      case "name-desc":
        return (b.name || "").localeCompare(a.name || "");
      case "date-desc":
        return (
          new Date(b.uploadedAt || b.createdAt) -
          new Date(a.uploadedAt || a.createdAt)
        );
      case "date-asc":
        return (
          new Date(a.uploadedAt || a.createdAt) -
          new Date(b.uploadedAt || b.createdAt)
        );
      default:
        return 0;
    }
  };

  // Filtered, searched, and sorted documents
  const processedDocuments = useMemo(() => {
    return documents
      .filter(filterByDate)
      .filter(filterByFileType)
      .filter(searchDocuments)
      .sort(sortDocuments);
  }, [documents, searchTerm, fileTypeFilter, dateFilter, sortBy]);

  // Pagination
  const totalPages = Math.ceil(processedDocuments.length / ITEMS_PER_PAGE);
  const paginatedDocuments = processedDocuments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, fileTypeFilter, dateFilter, sortBy]);

  // Handle document deletion confirmation
  const confirmDeleteDocument = (docId, docName) => {
    setDeleteDialog({ open: true, docId, docName });
  };

  // Handle confirmed document deletion
  const handleDeleteDocument = async () => {
    if (!deleteDialog.docId || !deleteDialog.docName) return;

    try {
      await dispatch(deleteSingleDocument(deleteDialog.docId)).unwrap();
      toast.success(`"${deleteDialog.docName}" deleted successfully`);
    } catch (err) {
      toast.error("Failed to delete document");
    } finally {
      setDeleteDialog({ open: false, docId: null, docName: null });
    }
  };

  // Handle document download
  const handleDownloadDocument = async (doc) => {
    try {
      const filename =
        doc.filePath?.split("/").pop() ||
        `document_${doc.documentId || doc._id}`;

      await dispatch(
        downloadDocument({
          docId: doc.documentId || doc._id,
          fileName: filename,
        })
      ).unwrap();

      toast.success(`"File downloaded!`);
    } catch (err) {
      toast.error("Failed to download document");
    }
  };

  // Handle upload success - refresh documents
  const handleUploadSuccess = () => {
    dispatch(fetchDocuments(projectId));
    toast.success("Document uploaded successfully");
    setIsUploadOpen(false);
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
        <Search className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No documents found
      </h3>
      <p className="text-gray-600 mb-6">
        Try adjusting your search terms or filters.
      </p>
      <Button
        onClick={() => {
          setSearchTerm("");
          setFileTypeFilter("all");
          setDateFilter("all");
          setSortBy("date-desc");
        }}
        variant="outline"
      >
        Clear All Filters
      </Button>
    </div>
  );

  if (loading && documents.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white p-4 sm:p-8">
        <Card className=" mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className=" text-white rounded-t-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div className="animate-pulse">
                <div className="h-6 bg-blue-400 rounded w-32 mb-2"></div>
                <div className="h-4 bg-blue-300 rounded w-24"></div>
              </div>
              <div className="h-10 w-20 bg-blue-400 rounded animate-pulse"></div>
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
    <TooltipProvider delayDuration={150} skipDelayDuration={0}>
      <div className="w-full bg-white ">
        
          <div className="space-y-2">
            {/* Search and Controls - two main elements */}

            <div className="flex flex-wrap gap-4">
              {/* Search */}
              <div className="flex-1 min-w-[180px]">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-sm w-full"
                  />
                </div>
              </div>

              {/* File Type Filter */}
              <div className="flex-1 min-w-[140px]">
                <Select
                  value={fileTypeFilter}
                  onValueChange={setFileTypeFilter}
                >
                  <SelectTrigger className="text-sm w-full">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    {fileTypeOptions.map((option) => (
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

              {/* Date Filter */}
              <div className="flex-1 min-w-[140px]">
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="text-sm w-full">
                    <SelectValue placeholder="All Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {dateFilterOptions.map((option) => (
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

              {/* Upload Button */}
              <div className="flex-1 min-w-[140px]">
                <Button
                  onClick={() => setIsUploadOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm h-[38px] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={deleting || downloading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>

            {/* Documents Table - with overflow for mobile */}
            {loading && processedDocuments.length > 0 ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-5 h-5 mr-2 animate-spin text-blue-600" />
                {/* <span className="text-gray-600 text-sm">Updating...</span> */}
              </div>
            ) : processedDocuments.length === 0 ? (
              <NoResults />
            ) : (
              <>
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 text-xs sm:text-sm">
                        <TableHead className="w-auto font-bold text-gray-700 ">
                          Document Name
                        </TableHead>
                        <TableHead className="w-[100px] sm:w-[150px] font-bold text-gray-700 ">
                          Type
                        </TableHead>
                        <TableHead className="w-[100px] sm:w-[120px]  font-bold text-gray-700 ">
                          Uploaded Date
                        </TableHead>
                        <TableHead className="w-[120px] sm:w-[150px] text-right font-bold text-gray-700 ">
                          {" "}
                          Doc ID
                        </TableHead>
                        <TableHead className="w-[40px] sm:w-[50px] font-bold text-gray-700 ">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedDocuments.map((doc) => {
                        const fileType = getFileTypeBadge(doc.filePath);
                        const formattedDate = format(
                          new Date(doc.uploadedAt || doc.createdAt),
                          "MMM dd, yyyy"
                        );
                        const docId = doc.documentId || doc._id;
                        const description =
                          doc.description || "No description available";
                        const hasDescription =
                          doc.description && doc.description.trim().length > 0;

                        return (
                          <TableRow key={docId} className=" text-xs sm:text-sm">
                            <TableCell className="font-medium">
                              <div className="flex items-center space-x-2">
                                <div className="flex-1 space-y-0.5 sm:space-y-1">
                                  <h3 className="font-semibold text-gray-900 line-clamp-1">
                                    {doc.name}
                                  </h3>
                                </div>
                                {/* Fancy Description Icon */}
                                {hasDescription && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 rounded-full bg-green-50 text-green-600 transition-all duration-200 group relative"
                                        aria-label="View description"
                                      >
                                        <HelpCircle className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
                                        <div className="absolute -inset-1  rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                      side="top"
                                      align="center"
                                      sideOffset={8}
                                      className="bg-gradient-to-br from-blue-50 to-indigo-50/80 backdrop-blur-sm border border-blue-100/50 shadow-xl shadow-blue-100/20 max-w-[300px] p-4 rounded-xl z-[9999]"
                                    >
                                      <div className="flex items-start gap-2">
                                        <div className="flex-shrink-0 mt-0.5">
                                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="text-xs text-gray-700 leading-relaxed ">
                                          <p className="font-medium text-gray-900 mb-1">
                                            Description
                                          </p>
                                          <p className="text-gray-600">
                                            {description}
                                          </p>
                                        </div>
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={fileType.variant}
                             
                                className={`text-xs ${fileType.className}`}
                              >
                                {fileType.text}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right text-gray-600">
                              {formattedDate}
                            </TableCell>
                            <TableCell className="text-right text-gray-500 truncate">
                              {docId}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                                    disabled={deleting || downloading}
                                  >
                                    <span className="sr-only">Open menu</span>⋮
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    onClick={() => handleDownloadDocument(doc)}
                                    className="flex items-center gap-2 cursor-pointer focus:bg-blue-50 text-sm"
                                    disabled={downloading}
                                  >
                                    <Download className="w-4 h-4 text-blue-700" />
                                    Download
                                    {downloading && (
                                      <Loader2 className="w-4 h-4 ml-auto animate-spin text-blue-600" />
                                    )}
                                  </DropdownMenuItem>
                                  {(currentUser?.role === "cpc" ||
                                    currentUser?.position === "Team Lead") && (
                                    <DropdownMenuItem
                                      onClick={() =>
                                        confirmDeleteDocument(docId, doc.name)
                                      }
                                      className="flex items-center gap-2 text-red-600 cursor-pointer focus:bg-red-50 text-sm"
                                      disabled={deleting}
                                    >
                                      <Trash2 className="w-4 h-4 text-red-700" />
                                      Delete
                                      {deleting && (
                                        <Loader2 className="w-4 h-4 ml-auto animate-spin text-red-600" />
                                      )}
                                    </DropdownMenuItem>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination Section - always show label */}
                <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 sm:gap-0">
                  <div className="text-xs sm:text-sm text-gray-700">
                    Page {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                    {Math.min(
                      currentPage * ITEMS_PER_PAGE,
                      processedDocuments.length
                    )}{" "}
                    of {processedDocuments.length} Documents
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
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>

                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
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
                          }
                        )}

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
                              setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                              );
                            }}
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </div>
              </>
            )}
          </div>
      

        {/* Upload Dialog - responsive max-width */}
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-md rounded-lg p-0 max-h-[90vh] overflow-hidden">
            <DialogHeader className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <DialogTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Document
              </DialogTitle>
            </DialogHeader>
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              <UploadDocument
                projectId={projectId}
                project={project}
                onSuccess={handleUploadSuccess}
                onCancel={() => setIsUploadOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialog.open}
          onOpenChange={() =>
            setDeleteDialog({ open: false, docId: null, docName: null })
          }
        >
          <DialogContent className="max-w-[95vw] sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Delete Document
              </DialogTitle>
              <p className="text-sm text-gray-600">
                Are you sure you want to delete "
                <strong>{deleteDialog.docName}</strong>"? This action cannot be
                undone.
              </p>
            </DialogHeader>
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  setDeleteDialog({ open: false, docId: null, docName: null })
                }
                className="flex-1 text-sm"
                disabled={deleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteDocument}
                className="flex-1 text-sm"
                disabled={deleting}
              >
                {deleting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}
