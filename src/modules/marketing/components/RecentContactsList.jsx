











"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useDeferredValue,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  getRecentContacts,
  addContact,
} from "@/modules/marketing/slices/contactSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import {
  Search,
  ArrowUpDown,
  Calendar,
  AlertCircle,
  PlusCircle,
  X,
  Filter,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format, isWithinInterval, parseISO, subHours } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import ManualAddContactForm from "./ManualAddContactForm";
import * as Tooltip from "@radix-ui/react-tooltip";

// Debounce
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const SkeletonRow = () => (
  <TableRow className="border-b border-gray-100">
    <TableCell className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div></TableCell>
    <TableCell className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div></TableCell>
    <TableCell className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div></TableCell>
    <TableCell className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div></TableCell>
  </TableRow>
);

const FullSkeleton = () => (
  <div className="p-8">
    <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-6" />
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            {[...Array(4)].map((_, i) => (
              <TableHead key={i} className="py-4 px-4">
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(8)].map((_, i) => <SkeletonRow key={i} />)}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default function RecentContactsList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { recentContacts, status, error } = useSelector((state) => state.contact);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterInquirySource, setFilterInquirySource] = useState("all");
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [timeFilter, setTimeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState("8");
  const [tempContactsPerPage, setTempContactsPerPage] = useState("8");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Track user interaction
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    if (
      searchQuery ||
      filterInquirySource !== "all" ||
      dateRange.from ||
      timeFilter !== "all" ||
      sortField !== "createdAt" ||
      sortOrder !== "desc"
    ) {
      setHasUserInteracted(true);
    }
  }, [searchQuery, filterInquirySource, dateRange.from, timeFilter, sortField, sortOrder]);

  const inquirySources = ["all", "Website", "Social Media", "Event", "Referral", "Marketing Team", "Other"];
  const chipColors = {
    Website: "bg-blue-100 text-blue-800",
    "Social Media": "bg-teal-100 text-teal-800",
    Event: "bg-indigo-100 text-indigo-800",
    Referral: "bg-gray-100 text-gray-800",
    "Marketing Team": "bg-blue-200 text-blue-900",
    Other: "bg-gray-200 text-gray-900",
  };
  const perPageOptions = ["5", "8", "10", "20"];

  // Source counts
  const sourceCounts = useMemo(() => {
    const counts = { all: recentContacts?.length || 0 };
    inquirySources.forEach((source) => {
      if (source !== "all") {
        counts[source] = (recentContacts || []).filter(c => (c?.inquirySource || "Other") === source).length;
      }
    });
    return counts;
  }, [recentContacts]);

  // Fetch data
  useEffect(() => {
    dispatch(getRecentContacts()).catch(() => toast.error("Failed to fetch recent contacts"));
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error.message || "Failed to load contacts");
  }, [error]);

  // Filtered & Sorted Data
  const filteredAndSortedContacts = useMemo(() => {
    let result = (recentContacts || []).filter(c => !c?.isDeleted);

    // Return raw backend order if no interaction
    if (!hasUserInteracted) return result;

    // Search
    if (deferredSearchQuery) {
      const term = deferredSearchQuery.toLowerCase();
      result = result.filter(c =>
        c.fullName?.toLowerCase().includes(term) ||
        c.email?.toLowerCase().includes(term) ||
        c.phone?.toLowerCase().includes(term)
      );
    }

    // Source filter
    if (filterInquirySource !== "all") {
      result = result.filter(c => (c?.inquirySource || "Other") === filterInquirySource);
    }

    // Date range
    if (dateRange.from && dateRange.to) {
      result = result.filter(c =>
        c.createdAt ? isWithinInterval(parseISO(c.createdAt), { start: dateRange.from, end: dateRange.to }) : false
      );
    }

    // Time filter (24h)
    if (timeFilter !== "all") {
      const now = new Date();
      const twentyFourHoursAgo = subHours(now, 16);
      result = result.filter(c => {
        if (!c.createdAt) return false;
        const date = parseISO(c.createdAt);
        return timeFilter === "within16"
          ? date >= twentyFourHoursAgo
          : date < twentyFourHoursAgo;
      });
    }

    // Sorting
    result.sort((a, b) => {
      const A = a[sortField] || "";
      const B = b[sortField] || "";
      if (sortField === "createdAt") {
        const dateA = A ? parseISO(A) : new Date(0);
        const dateB = B ? parseISO(B) : new Date(0);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
      return sortOrder === "asc"
        ? String(A).localeCompare(String(B))
        : String(B).localeCompare(String(A));
    });

    return result;
  }, [
    recentContacts,
    hasUserInteracted,
    deferredSearchQuery,
    filterInquirySource,
    dateRange,
    timeFilter,
    sortField,
    sortOrder,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedContacts.length / Number(contactsPerPage));
  const currentContacts = filteredAndSortedContacts.slice(
    (currentPage - 1) * Number(contactsPerPage),
    currentPage * Number(contactsPerPage)
  );
  const totalNewContacts = filteredAndSortedContacts.length;

  // Handlers
  const handleSearchChange = useCallback(debounce((value) => setSearchQuery(value), 300), []);

  const handleSort = useCallback((field) => {
    setSortField(prev => {
      if (prev === field) {
        setSortOrder(o => o === "asc" ? "desc" : "asc");
      } else {
        setSortOrder("asc");
      }
      return field;
    });
  }, []);

  const resetDateRange = () => setDateRange({ from: null, to: null });

  const resetAllFilters = () => {
    setSearchQuery("");
    setFilterInquirySource("all");
    setDateRange({ from: null, to: null });
    setTimeFilter("all");
    setSortField("createdAt");
    setSortOrder("desc");
    setCurrentPage(1);
    setHasUserInteracted(false);
  };

  // Only show reset if real filters (not sorting) are active
  const hasActiveFilters = 
    searchQuery.trim() !== "" || 
    filterInquirySource !== "all" || 
    dateRange.from !== null || 
    timeFilter !== "all";

  const getContactLabel = (createdAt) => {
    if (!createdAt) return "Immediate Action Required";
    const hoursAgo = (Date.now() - parseISO(createdAt).getTime()) / (1000 * 60 * 60);
    return hoursAgo <= 24 ? "Like to be Called" : "Immediate Call Required";
  };

  return (
    <Tooltip.Provider>
      <div className="min-h-screen bg-gray-50">
        <Card className="overflow-hidden shadow-lg border-0 bg-white">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
              New Inquiries Received ({totalNewContacts})
            </h2>
          </div>

          <CardContent className="p-1">
            {status === "loading" && !recentContacts ? (
              <FullSkeleton />
            ) : (
              <>
                {/* Filters + Floating Reset */}
                <div className="relative w-full flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 mb-4 p-4 bg-gray-100 rounded-lg shadow-sm items-stretch justify-between">
                  {[
                    {
                      label: "Search Contact",
                      icon: <Search className="h-4 w-4 text-teal-600" />,
                      content: (
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Name, email, phone..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="pl-10 w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-10"
                          />
                          {searchQuery && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => { setSearchQuery(""); handleSearchChange(""); }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                            >
                              <X className="h-3.5 w-3.5" />
                            </Button>
                          )}
                        </div>
                      ),
                    },
                    {
                      label: "Filter by Source",
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select value={filterInquirySource} onValueChange={setFilterInquirySource}>
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {inquirySources.map(s => (
                              <SelectItem key={s} value={s}>
                                {s === "all" ? `All (${sourceCounts.all})` : `${s} (${sourceCounts[s] || 0})`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ),
                    },
                    {
                      label: "Date Range",
                      icon: <Calendar className="h-4 w-4 text-teal-600" />,
                      content: (
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-white h-10", !dateRange.from && "text-gray-500")}>
                                <Calendar className="mr-2 h-4 w-4 text-teal-600" />
                                {dateRange.from && dateRange.to
                                  ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd, yyyy")}`
                                  : "Select Date Range"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent mode="range" selected={dateRange} onSelect={setDateRange} />
                            </PopoverContent>
                          </Popover>
                          {dateRange.from && (
                            <Button variant="ghost" size="icon" onClick={resetDateRange} className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6">
                              <X className="h-3.5 w-3.5" />
                            </Button>
                          )}
                        </div>
                      ),
                    },
                    {
                      label: "Time Filter",
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select value={timeFilter} onValueChange={setTimeFilter}>
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Contacts</SelectItem>
                            <SelectItem value="within16">Within 16 Hours</SelectItem>
                            <SelectItem value="older">Older than 16 Hours</SelectItem>
                          </SelectContent>
                        </Select>
                      ),
                    },
                  ].map((field, i) => (
                    <div key={i} className="flex flex-col flex-1 min-w-[240px] bg-gray-50 rounded-lg p-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        {field.icon}
                        <span>{field.label}</span>
                      </div>
                      {field.content}
                    </div>
                  ))}

                  <div className="flex flex-col flex-1 min-w-[240px] justify-end">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 h-10" onClick={() => setIsAddModalOpen(true)}>
                      <PlusCircle className="h-5 w-5 mr-2" />
                      Add Contact
                    </Button>
                  </div>

                  {/* Floating Reset Button */}
                  {hasActiveFilters && (
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={resetAllFilters}
                          className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 z-10"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="bg-gray-700 text-white text-sm rounded-md px-2 py-1">
                          Reset all filters
                          <Tooltip.Arrow className="fill-gray-700" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  )}
                </div>

                {/* Table */}
                <div className="min-h-screen rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">
                  <div className="min-h-[50dvh] overflow-y-auto">
                    <Table>
                      <TableHeader className="sticky top-0 bg-gradient-to-r from-teal-50 to-blue-50 z-10">
                        <TableRow>
                          <TableHead className="cursor-pointer" onClick={() => handleSort("fullName")}>
                            <div className="flex items-center justify-between font-semibold text-gray-700">Contact Person <ArrowUpDown className="h-4 w-4 text-teal-600" /></div>
                          </TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
                            <div className="flex items-center justify-between font-semibold text-gray-700">Email / Phone <ArrowUpDown className="h-4 w-4 text-teal-600" /></div>
                          </TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort("inquirySource")}>
                            <div className="flex items-center justify-between font-semibold text-gray-700">Contact Source <ArrowUpDown className="h-4 w-4 text-teal-600" /></div>
                          </TableHead>
                          <TableHead className="cursor-pointer" onClick={() => handleSort("createdAt")}>
                            <div className="flex items-center justify-between font-semibold text-gray-700">Received At <ArrowUpDown className="h-4 w-4 text-teal-600" /></div>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentContacts.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-20">
                              <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                              <p className="text-xl font-medium text-gray-600">No new contacts found</p>
                              <p className="text-gray-500">Try adjusting your filters</p>
                            </TableCell>
                          </TableRow>
                        ) : (
                          currentContacts.map(contact => (
                            <Tooltip.Root key={contact.contactId}>
                              <Tooltip.Trigger asChild>
                                <TableRow
                                  className="cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                                  onClick={() => router.push(`/marketing/contacts/${contact.contactId}`)}
                                >
                                  <TableCell className="font-medium text-gray-900 group-hover:text-teal-600 relative">
                                    <span className={cn("absolute left-0 top-0 h-full w-1", getContactLabel(contact.createdAt) === "Like to be Called" ? "bg-teal-500" : "bg-red-500")} />
                                    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium absolute top-2 left-4", getContactLabel(contact.createdAt) === "Like to be Called" ? "bg-teal-200 text-teal-800" : "bg-red-200 text-red-800")}>
                                      {getContactLabel(contact.createdAt)}
                                    </span>
                                    <span className="block mt-6">{contact.fullName || "N/A"}</span>
                                  </TableCell>
                                  <TableCell className="text-gray-600">{contact.email || contact.phone || "N/A"}</TableCell>
                                  <TableCell>
                                    <span className={cn("px-3 py-1 rounded-full text-sm font-medium", chipColors[contact.inquirySource || "Other"])}>
                                      {contact.inquirySource || "Other"}
                                    </span>
                                  </TableCell>
                                  <TableCell className="text-gray-600">
                                    {contact.createdAt ? format(parseISO(contact.createdAt), "MMM dd, yyyy") : "N/A"}
                                  </TableCell>
                                </TableRow>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content className="bg-gray-700 text-white text-sm rounded-md px-2 py-1">
                                  View contact details
                                  <Tooltip.Arrow className="fill-gray-700" />
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Label>Show</Label>
                      <Select value={tempContactsPerPage} onValueChange={setTempContactsPerPage}
                        onOpenChange={(open) => !open && tempContactsPerPage !== contactsPerPage && setContactsPerPage(tempContactsPerPage)}>
                        <SelectTrigger className="w-16 h-10"><SelectValue /></SelectTrigger>
                        <SelectContent>{perPageOptions.map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
                      </Select>
                      <span>per page ({totalNewContacts} total)</span>
                    </div>
                    <div className="flex items-center gap-1 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="h-8 w-8 p-0">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </Button>
                      {[...Array(totalPages)].map((_, i) => (
                        <Button key={i + 1} variant={currentPage === i + 1 ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(i + 1)}
                          className={cn("h-8 w-8", currentPage === i + 1 && "bg-teal-600 hover:bg-teal-700")}>
                          {i + 1}
                        </Button>
                      ))}
                      <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="h-8 w-8 p-0">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Add Modal */}
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogContent className="">
           
            <ManualAddContactForm onSubmit={(data) => dispatch(addContact(data)).then(() => { toast.success("Added!"); dispatch(getRecentContacts()); setIsAddModalOpen(false); })} onCancel={() => setIsAddModalOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </Tooltip.Provider>
  );
}