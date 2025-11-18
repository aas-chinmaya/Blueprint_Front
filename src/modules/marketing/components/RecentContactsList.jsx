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
  Loader2,
  Calendar,
  AlertCircle,
  PlusCircle,
  X,
  Filter,
  Search,
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

// Debounce utility for search input
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Skeleton Row Component
const SkeletonRow = () => (
  <TableRow className="border-b border-gray-100">
    <TableCell className="py-4 px-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    </TableCell>
    <TableCell className="py-4 px-4">
      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
    </TableCell>
    <TableCell className="py-4 px-4">
      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
    </TableCell>
    <TableCell className="py-4 px-4">
      <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
    </TableCell>
  </TableRow>
);

// Full Skeleton Component
const FullSkeleton = () => (
  <div className="p-4 sm:p-6 md:p-8">
    <div className="bg-gray-200 rounded-lg h-16 mb-6 animate-pulse"></div>
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="py-4 px-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </TableHead>
            <TableHead className="py-4 px-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </TableHead>
            <TableHead className="py-4 px-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </TableHead>
            <TableHead className="py-4 px-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(8)].map((_, index) => (
            <SkeletonRow key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="flex justify-between mt-6">
      <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
    </div>
  </div>
);

export default function RecentContactsList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { recentContacts, status, error } = useSelector(
    (state) => state.contact
  );

  // State declarations
  const [filterInquirySource, setFilterInquirySource] = useState("all");
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState("8");
  const [tempContactsPerPage, setTempContactsPerPage] = useState("8");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [timeFilter, setTimeFilter] = useState("all");

  // Configuration
  const inquirySources = [
    "all",
    "Website",
    "Social Media",
    "Event",
    "Referral",
    "Marketing Team",
    "Other",
  ];
  const chipColors = {
    Website: "bg-blue-100 text-blue-800",
    "Social Media": "bg-teal-100 text-teal-800",
    Event: "bg-indigo-100 text-indigo-800",
    Referral: "bg-gray-100 text-gray-800",
    "Marketing Team": "bg-blue-200 text-blue-900",
    Other: "bg-gray-200 text-gray-900",
  };
  const perPageOptions = ["5","8", "10", "20"];

  // Calculate source counts for filter labels
  const sourceCounts = useMemo(() => {
    const counts = { all: recentContacts?.length || 0 };
    inquirySources.forEach((source) => {
      if (source !== "all") {
        counts[source] = (recentContacts || []).filter(
          (contact) => (contact?.inquirySource || "Other") === source
        ).length;
      }
    });
    return counts;
  }, [recentContacts]);

  // Fetch contacts on mount
  useEffect(() => {
    dispatch(getRecentContacts()).catch(() => {
      toast.error("Failed to fetch contacts. Please try again.");
    });
  }, [dispatch]);

  // Handle API errors
  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error.message || "Failed to load contacts"}`);
    }
  }, [error]);

  // Memoized filtered and sorted contacts
  const filteredAndSortedContacts = useMemo(() => {
    let result = (recentContacts || []).filter(
      (contact) => !contact?.isDeleted
    );

    // Search filter
    if (deferredSearchQuery) {
      result = result.filter(
        (contact) =>
          contact?.fullName
            ?.toLowerCase()
            .includes(deferredSearchQuery.toLowerCase()) ||
          contact?.email
            ?.toLowerCase()
            .includes(deferredSearchQuery.toLowerCase()) ||
          contact?.phone
            ?.toLowerCase()
            .includes(deferredSearchQuery.toLowerCase())
      );
    }

    // Inquiry source filter
    if (filterInquirySource !== "all") {
      result = result.filter(
        (contact) => (contact?.inquirySource || "N/A") === filterInquirySource
      );
    }

    // Date range filter
    if (dateRange.from && dateRange.to) {
      result = result.filter((contact) =>
        contact?.createdAt
          ? isWithinInterval(parseISO(contact.createdAt), {
              start: dateRange.from,
              end: dateRange.to,
            })
          : false
      );
    }

    // Time filter
    if (timeFilter !== "all") {
      const now = new Date();
      const twentyFourHoursAgo = subHours(now, 24);
      result = result.filter((contact) => {
        if (!contact?.createdAt) return false;
        const createdAt = parseISO(contact.createdAt);
        return timeFilter === "within24"
          ? isWithinInterval(createdAt, { start: twentyFourHoursAgo, end: now })
          : !isWithinInterval(createdAt, {
              start: twentyFourHoursAgo,
              end: now,
            });
      });
    }

    return result;
  }, [
    recentContacts,
    filterInquirySource,
    dateRange,
    deferredSearchQuery,
    timeFilter,
  ]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredAndSortedContacts.length / Number(contactsPerPage)
  );
  const indexOfLastContact = currentPage * Number(contactsPerPage);
  const indexOfFirstContact = indexOfLastContact - Number(contactsPerPage);
  const currentContacts = filteredAndSortedContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalNewContacts = filteredAndSortedContacts.length;

  // Handlers
  const handleSearchChange = useCallback(
    debounce((value) => {
      setSearchQuery(value);
      const newTotalPages = Math.ceil(
        filteredAndSortedContacts.length / Number(contactsPerPage)
      );
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(1);
      }
    }, 300),
    [currentPage, contactsPerPage, filteredAndSortedContacts.length]
  );

  const handleContactsPerPageChange = useCallback(
    (value) => {
      if (!perPageOptions.includes(value) || value === tempContactsPerPage)
        return;
      setTempContactsPerPage(value);
    },
    [tempContactsPerPage]
  );

  const handleSelectOpenChange = useCallback(
    (isOpen) => {
      if (!isOpen && tempContactsPerPage !== contactsPerPage) {
        setContactsPerPage(tempContactsPerPage);
        const newTotalPages = Math.ceil(
          filteredAndSortedContacts.length / Number(tempContactsPerPage)
        );
        if (currentPage > newTotalPages && newTotalPages > 0) {
          setCurrentPage(1);
        }
      }
    },
    [
      tempContactsPerPage,
      contactsPerPage,
      currentPage,
      filteredAndSortedContacts.length,
    ]
  );

  const handleSort = useCallback((field) => {
    setSortField((prevField) => {
      if (prevField === field) {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
        return prevField;
      }
      setSortOrder("asc");
      return field;
    });
  }, []);

  const handlePageChange = useCallback(
    (pageNumber) => {
      if (
        pageNumber >= 1 &&
        pageNumber <= totalPages &&
        pageNumber !== currentPage
      ) {
        setCurrentPage(pageNumber);
      }
    },
    [currentPage, totalPages]
  );

  const handleAddContact = useCallback(
    (contactData) => {
      dispatch(addContact(contactData))
        .then((result) => {
          if (result.meta.requestStatus === "fulfilled") {
            toast.success("Contact added successfully.");
            dispatch(getRecentContacts());
            setIsAddModalOpen(false);
          } else {
            toast.error("Failed to add contact.");
          }
        })
        .catch(() => {
          toast.error("An error occurred while adding the contact.");
        });
    },
    [dispatch]
  );

  const handleViewContact = useCallback(
    (contactId) => {
      router.push(`/marketing/contacts/${contactId}`);
    },
    [router]
  );

  const resetDateRange = useCallback(() => {
    setDateRange({ from: null, to: null });
    const newTotalPages = Math.ceil(
      filteredAndSortedContacts.length / Number(contactsPerPage)
    );
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, contactsPerPage, filteredAndSortedContacts.length]);

  const handleTimeFilterChange = useCallback(
    (value) => {
      setTimeFilter(value);
      const newTotalPages = Math.ceil(
        filteredAndSortedContacts.length / Number(contactsPerPage)
      );
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(1);
      }
    },
    [currentPage, contactsPerPage, filteredAndSortedContacts.length]
  );

  const handleSourceFilterChange = useCallback(
    (value) => {
      setFilterInquirySource(value);
      const newTotalPages = Math.ceil(
        filteredAndSortedContacts.length / Number(contactsPerPage)
      );
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(1);
      }
    },
    [currentPage, contactsPerPage, filteredAndSortedContacts.length]
  );

  const getContactLabel = useCallback((createdAt) => {
    if (!createdAt) return "Immediate Action Required";
    const now = new Date();
    const twentyFourHoursAgo = subHours(now, 24);
    const contactDate = parseISO(createdAt);
    return isWithinInterval(contactDate, {
      start: twentyFourHoursAgo,
      end: now,
    })
      ? "Like to be Called"
      : "Immediate Call Required";
  }, []);

  return (
    <Tooltip.Provider>
      <div className="min-h-screen ">
        <Card className="overflow-hidden shadow-lg border-0 bg-white">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold truncate max-w-full">
              New Inquiries Received ({totalNewContacts})
            </h2>
          </div>
          <CardContent className="p-1 ">
            {status === "loading" && currentPage === 1 && !recentContacts ? (
              <FullSkeleton />
            ) : (
              <>
                {/* Filter Section */}

                <div className="w-full flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4 mb-4 p-4 bg-gray-100 rounded-lg shadow-sm items-stretch justify-between">
                  {/* Shared box style */}
                  {[
                    {
                      label: "Search Contact",
                      icon: <Search className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Input
                          type="text"
                          placeholder="Search by name, email, or phone..."
                          value={searchQuery}
                          onChange={(e) => handleSearchChange(e.target.value)}
                          className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10"
                          aria-label="Search contacts"
                        />
                      ),
                    },
                    {
                      label: "Filter by Source",
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select
                          value={filterInquirySource}
                          onValueChange={handleSourceFilterChange}
                        >
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10">
                            <SelectValue placeholder="All Sources" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            {inquirySources.map((source) => (
                              <SelectItem key={source} value={source}>
                                {source === "all"
                                  ? `All (${sourceCounts[source] || 0})`
                                  : `${source} (${sourceCounts[source] || 0})`}
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
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-white border-gray-300 hover:bg-gray-50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 px-3 py-1 h-10",
                                  !dateRange.from && "text-gray-500"
                                )}
                              >
                                <Calendar className="mr-2 h-4 w-4 text-teal-600" />
                                {dateRange.from && dateRange.to ? (
                                  <span className="truncate max-w-[120px] sm:max-w-[150px] md:max-w-[200px]">
                                    {`${format(
                                      dateRange.from,
                                      "MMM dd"
                                    )} - ${format(
                                      dateRange.to,
                                      "MMM dd, yyyy"
                                    )}`}
                                  </span>
                                ) : (
                                  <span>Select Date Range</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0 bg-white border-gray-300"
                              align="start"
                            >
                              <CalendarComponent
                                mode="range"
                                selected={dateRange}
                                onSelect={setDateRange}
                                initialFocus
                                className="rounded-md border border-gray-300"
                              />
                            </PopoverContent>
                          </Popover>

                          {dateRange.from && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200 rounded-full h-6 w-6"
                              onClick={resetDateRange}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      ),
                    },
                    {
                      label: "Time Filter",
                      icon: <Filter className="h-4 w-4 text-teal-600" />,
                      content: (
                        <Select
                          value={timeFilter}
                          onValueChange={handleTimeFilterChange}
                        >
                          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10">
                            <SelectValue placeholder="All Contacts" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            <SelectItem value="all">All Contacts</SelectItem>
                            <SelectItem value="within24">
                              Within 24 Hours
                            </SelectItem>
                            <SelectItem value="older">
                              Older than 24 Hours
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      ),
                    },
                  ].map((field, index) => (
                    <div
                      key={index}
                      className="flex flex-col flex-1 min-w-[240px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[280px] bg-gray-50 rounded-lg p-2 justify-between"
                    >
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        {field.icon}
                        <span>{field.label}</span>
                      </div>
                      {field.content}
                    </div>
                  ))}

                  {/* Add Contact Button */}
                  <div className="flex flex-col flex-1 min-w-[240px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[280px] justify-end">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button
                          className="w-full bg-teal-600 text-white hover:bg-teal-700 font-semibold transition-all duration-200 h-10"
                          onClick={() => setIsAddModalOpen(true)}
                        >
                          <PlusCircle className="h-5 w-5 mr-2" />
                          Add Contact
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                          sideOffset={5}
                        >
                          Add a new contact
                          <Tooltip.Arrow className="fill-gray-700" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </div>
                </div>

                {/* Contacts Table */}
                <div className="min-h-[65vh]  rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">
                  <div className="max-h-screen overflow-y-auto">
                    <Table>
                      <TableHeader className="sticky top-0 bg-gradient-to-r from-teal-50 to-blue-50 border-b-2 border-teal-100 z-10">
                        <TableRow>
                        <TableHead className="text-gray-700 font-semibold py-3 sm:py-4 px-3 sm:px-4 min-w-[120px]">
                          Contact Person
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700 py-3 sm:py-4 px-3 sm:px-4 min-w-[140px]">
                          Email / Phone
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700 py-3 sm:py-4 px-3 sm:px-4 min-w-[120px]">
                          Contact Source
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700 py-3 sm:py-4 px-3 sm:px-4 min-w-[150px]">
                          Hosted Domain
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700 py-3 sm:py-4 px-3 sm:px-4 min-w-[120px]">
                          Received At
                        </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {status === "loading" ? (
                          [...Array(Number(contactsPerPage))].map(
                            (_, index) => <SkeletonRow key={index} />
                          )
                        ) : error ? (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-16"
                            >
                              <div className="flex flex-col items-center space-y-3">
                                <AlertCircle
                                  className="h-12 w-12 text-gray-300"
                                  aria-hidden="true"
                                />
                                <span className="text-xl font-semibold text-gray-500">
                                  Error loading contacts
                                </span>
                                <p className="text-gray-400">
                                  An error occurred. Please try again later.
                                </p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : currentContacts.length === 0 ? (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-16"
                            >
                              <div className="flex flex-col items-center space-y-3">
                                <AlertCircle
                                  className="h-12 w-12 text-gray-300"
                                  aria-hidden="true"
                                />
                                <span className="text-xl font-semibold text-gray-500">
                                  No new contacts found
                                </span>
                                <p className="text-gray-400">
                                  Try adjusting your filters to see more
                                  results.
                                </p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          currentContacts.map((contact) => (
                            <Tooltip.Root key={contact.contactId}>
                              <Tooltip.Trigger asChild>
                                <TableRow
                                  className="relative bg-white hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 cursor-pointer group"
                                  onClick={() =>
                                    handleViewContact(contact.contactId)
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    handleViewContact(contact.contactId)
                                  }
                                >
                                  <TableCell className="py-3 sm:py-4 px-3 sm:px-4 font-medium text-gray-900 group-hover:text-teal-600 transition-colors relative">
                                    <span
                                      className={cn(
                                        "absolute left-0 top-0 h-full w-1",
                                        getContactLabel(contact.createdAt) ===
                                          "Like to be Called"
                                          ? "bg-teal-500"
                                          : "bg-red-500"
                                      )}
                                      aria-hidden="true"
                                    />
                                    <span
                                      className={cn(
                                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium absolute top-2 left-4",
                                        getContactLabel(contact.createdAt) ===
                                          "Like to be Called"
                                          ? "bg-teal-200 text-teal-800"
                                          : "bg-red-200 text-red-800"
                                      )}
                                    >
                                      {getContactLabel(contact.createdAt)}
                                    </span>
                                    <span className="block mt-6">
                                      {contact.fullName || "N/A"}
                                    </span>
                                  </TableCell>
                                  <TableCell className="py-3 sm:py-4 px-3 sm:px-4 text-gray-600">
                                    {contact.email || contact.phone || "N/A"}
                                  </TableCell>
                                  <TableCell className="py-3 sm:py-4 px-3 sm:px-4">
                                    <span
                                      className={cn(
                                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                                        chipColors[
                                          contact.inquirySource || "Other"
                                        ]
                                      )}
                                    >
                                      {contact.inquirySource || "Other"}
                                    </span>
                                  </TableCell>
                                  <TableCell className="py-3 sm:py-4 px-3 sm:px-4 text-gray-600 break-all">
                                    <span
                                                               
                                     
                                      className="text-gray-600 transition-colors"
                                      title={contact.hostedDomain}
                                    >
                                      {contact.hostedDomain || "N/A"}
                                    </span>
                                  </TableCell>
                                  <TableCell className="py-3 sm:py-4 px-3 sm:px-4 text-gray-600">
                                    {contact.createdAt
                                      ? format(
                                          parseISO(contact.createdAt),
                                          "MMM dd, yyyy"
                                        )
                                      : "N/A"}
                                  </TableCell>
                                </TableRow>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content
                                  className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                                  sideOffset={5}
                                >
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
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Label
                        className="font-medium"
                        htmlFor="contacts-per-page"
                      >
                        Show
                      </Label>
                      <Select
                        value={tempContactsPerPage}
                        onValueChange={handleContactsPerPageChange}
                        onOpenChange={handleSelectOpenChange}
                      >
                        <SelectTrigger
                          id="contacts-per-page"
                          className="w-16 bg-white border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 h-10"
                          aria-label="Select contacts per page"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          {perPageOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="focus:bg-teal-50"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>per page</span>
                      <span className="text-gray-400">
                        ({filteredAndSortedContacts.length} total)
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="bg-white border-gray-300 hover:bg-gray-50 text-gray-700 h-8 w-8 p-0"
                            aria-label="Previous page"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </Button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                            sideOffset={5}
                          >
                            Previous page
                            <Tooltip.Arrow className="fill-gray-700" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                      <div className="flex space-x-1">
                        {[...Array(totalPages).keys()].map((page) => (
                          <Tooltip.Root key={page + 1}>
                            <Tooltip.Trigger asChild>
                              <Button
                                variant={
                                  currentPage === page + 1
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                onClick={() => handlePageChange(page + 1)}
                                className={cn(
                                  "h-8 w-8 p-0 font-medium transition-colors duration-200",
                                  currentPage === page + 1
                                    ? "bg-teal-600 text-white hover:bg-teal-700"
                                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                                )}
                                aria-label={`Go to page ${page + 1}`}
                                aria-current={
                                  currentPage === page + 1 ? "page" : undefined
                                }
                              >
                                {page + 1}
                              </Button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                                sideOffset={5}
                              >
                                Go to page {page + 1}
                                <Tooltip.Arrow className="fill-gray-700" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        ))}
                      </div>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="bg-white border-gray-300 hover:bg-gray-50 text-gray-700 h-8 w-8 p-0"
                            aria-label="Next page"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-700 text-white text-sm rounded-md px-2 py-1 shadow-lg"
                            sideOffset={5}
                          >
                            Next page
                            <Tooltip.Arrow className="fill-gray-700" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-2xl p-0 overflow-hidden shadow-xl">
            <DialogHeader className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6">
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center space-x-3">
                <PlusCircle className="h-6 w-6 text-white" aria-hidden="true" />
                <span>Add New Contact</span>
              </DialogTitle>
            </DialogHeader>
            <div className="">
              <ManualAddContactForm
                onSubmit={handleAddContact}
                onCancel={() => setIsAddModalOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Tooltip.Provider>
  );
}
