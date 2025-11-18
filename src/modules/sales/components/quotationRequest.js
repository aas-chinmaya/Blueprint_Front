import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotationRequests } from "@/modules/sales/slices/quotationRequestSlice"; // Correct import
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Plus, Eye, FileText } from "lucide-react";

export default function QuotationRequestList() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Correct selector path
  const { items: quotationRequests = [], loading } = useSelector(
    (state) => state.quotationRequests
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  // Fetch on mount
  useEffect(() => {
    dispatch(fetchQuotationRequests());
  }, [dispatch]);

  // Format date
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // Normalize status to lowercase for filtering
  const normalizeStatus = (status) => status?.toLowerCase();

  // Filter & Sort
  const filteredRequests = quotationRequests
    ?.filter((req) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        (req?.quotationRequestId || "").toLowerCase().includes(searchLower) ||
        (req?.requestedBy || "").toLowerCase().includes(searchLower) ||
        (req?.companyName || "").toLowerCase().includes(searchLower);

      const reqStatus = normalizeStatus(req?.status);
      const matchesStatus =
        statusFilter === "all" || reqStatus === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    })
    ?.sort((a, b) => {
      if (sortBy === "date-desc") {
        return new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0);
      } else if (sortBy === "date-asc") {
        return new Date(a?.createdAt || 0) - new Date(b?.createdAt || 0);
      } else if (sortBy === "id-desc") {
        return (b?.quotationRequestId || "").localeCompare(a?.quotationRequestId || "");
      } else if (sortBy === "id-asc") {
        return (a?.quotationRequestId || "").localeCompare(b?.quotationRequestId || "");
      }
      return 0;
    });

  const handleCreateQuotation = (requestId) => {
    router.push(`/sales/quotation/create?requestId=${requestId}`);
  };

  const handleViewRequest = (requestId) => {
    router.push(`/sales/quotation-request/view/${requestId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quotation Requests</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage incoming client requests and create quotations
          </p>
        </div>

        <Button
          onClick={() => router.push("/sales/quotation/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Create Quotation
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by Request ID, Client or Company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="quoted">Quoted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date (Newest First)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
              <SelectItem value="id-desc">Request ID (Z-A)</SelectItem>
              <SelectItem value="id-asc">Request ID (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <TableRow>
                <TableHead className="text-white font-semibold text-center">S.No.</TableHead>
                <TableHead className="text-white font-semibold">Request ID</TableHead>
                <TableHead className="text-white font-semibold">Client</TableHead>
                <TableHead className="text-white font-semibold">Project</TableHead>
                <TableHead className="text-white font-semibold text-center">Status</TableHead>
                <TableHead className="text-white font-semibold text-center">Date</TableHead>
                <TableHead className="text-white font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                    Loading requests...
                  </TableCell>
                </TableRow>
              ) : filteredRequests?.length > 0 ? (
                filteredRequests.map((req, index) => {
                  const status = normalizeStatus(req.status);

                  return (
                    <TableRow key={req._id} className="hover:bg-gray-50">
                      <TableCell className="text-center font-medium">{index + 1}</TableCell>
                      <TableCell className="font-mono text-sm">
                        {req.quotationRequestId}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{req.requestedBy}</p>
                          <p className="text-xs text-gray-500">{req.companyName}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-medium">{req.title}</p>
                        <p className="text-xs text-gray-500 truncate max-w-xs">
                          {req.notes?.substring(0, 60) || "No notes"}...
                        </p>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize
                            ${
                              status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : status === "approved"
                                ? "bg-green-100 text-green-800"
                                : status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : status === "quoted"
                                ? "bg-indigo-100 text-indigo-800"
                                : status === "rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center text-sm">
                        {formatDate(req.createdAt)}
                      </TableCell>
                      <TableCell className="text-center">
                        <TooltipProvider>
                          <div className="flex justify-center gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleViewRequest(req.quotationRequestId)}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>View Request</TooltipContent>
                            </Tooltip>

                            {status === "pending" && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleCreateQuotation(req.quotationRequestId)}
                                    className="text-green-600 hover:text-green-800"
                                  >
                                    <FileText className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Create Quotation</TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12 text-gray-500">
                    <div className="flex flex-col items-center">
                      <FileText className="h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-lg font-medium">No quotation requests found</p>
                      <p className="text-sm text-gray-400 mt-1">
                        New client inquiries will appear here.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}