





import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProjectMeetingMom,
  fetchAllProjectMoms,
  updateProjectMeetingMom,
  fetchMeetingMomById,
  fetchMeetingMomView,
  resetSelectedMom,
  resetMeetingMomView,
} from '@/features/projectmeetingmomSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Calendar } from '@/components/ui/calendar';
import {
  Plus,
  Search,
  Calendar as CalendarIcon,
  Video,
  Eye,
  Edit,
  X,
  Loader2,
  Filter,
} from 'lucide-react';
import { toast } from 'sonner';
import { format, parseISO, isValid, subYears, set } from 'date-fns';
import { cn } from '@/lib/utils';
import MomForm from './MomForm';
import ViewMomModal from './ViewMomModal';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectwiseAllmeetingMom = ({ project, projectId }) => {
  const dispatch = useDispatch();
  const projectName = project?.projectName;
  const { userData, loading } = useSelector((state) => state.user);
  const currentUser = userData?.fullName;

  const { moms, momsLoading, momsError, selectedMom, selectedMomLoading, selectedMomError, meetingMomView, meetingMomViewLoading, meetingMomViewError } = useSelector(
    (state) => state.projectMeetingMom
  );

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingMom, setEditingMom] = useState(null);
  const [viewingPdf, setViewingPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ projectId, meetingMode: 'all', status: 'all' });
  const [sortBy, setSortBy] = useState('date-desc');
  const ITEMS_PER_PAGE = 10;
  
  // Fetch meeting minutes
  useEffect(() => {
    dispatch(fetchAllProjectMoms(projectId));
  }, [dispatch, projectId]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters.meetingMode, filters.status, dateRange, sortBy]);

  // Client-side filtering and searching
  const filteredAndSortedMoms = useMemo(() => {
    let result = [...moms];

    // Search by MOM ID, title, or summary
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (mom) =>
          mom.momId?.toLowerCase().includes(lowerQuery) ||
          mom.title?.toLowerCase().includes(lowerQuery) ||
          mom.summary?.toLowerCase().includes(lowerQuery)
      );
    }

    // Filters
    if (filters.meetingMode && filters.meetingMode !== 'all') {
      result = result.filter((mom) => mom.meetingMode === filters.meetingMode);
    }
    if (filters.status && filters.status !== 'all') {
      result = result.filter((mom) => mom.status === filters.status);
    }
    if (dateRange.from && dateRange.to) {
      result = result.filter((mom) => {
        const meetingDate = new Date(mom.meetingDate);
        return meetingDate >= dateRange.from && meetingDate <= dateRange.to;
      });
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'momId-asc':
          return (a.momId || '').localeCompare(b.momId || '');
        case 'momId-desc':
          return (b.momId || '').localeCompare(a.momId || '');
        case 'date-desc':
          return (
            new Date(b.meetingDate || b.createdAt) -
            new Date(a.meetingDate || a.createdAt)
          );
        case 'date-asc':
          return (
            new Date(a.meetingDate || a.createdAt) -
            new Date(b.meetingDate || b.createdAt)
          );
        default:
          return 0;
      }
    });

    return result;
  }, [moms, searchQuery, filters, dateRange, sortBy]);

  const handleSubmit = async (e, status, formData) => {
    e.preventDefault();
    const data = new FormData();
    const allowedFields = [
      'projectName',
      'projectId',
      'agenda',
      'meetingMode',
      'meetingId',
      'title',
      'meetingDate',
      'duration',
      'attendees',
      'summary',
      'notes',
      'createdBy',
      'status',
      'signature',
    ];
    const meetingDate = formData.meetingDate && formData.startTime
      ? set(formData.meetingDate, {
          hours: parseInt(formData.startTime.split(':')[0]),
          minutes: parseInt(formData.startTime.split(':')[1]),
        }).toISOString()
      : '';
    Object.entries({
      ...formData,
      meetingDate,
      status,
      attendees: formData.attendees,
    }).forEach(([key, value]) => {
      if (allowedFields.includes(key)) {
        if (key === 'meetingId' && formData.meetingMode === 'offline') return;
        if (key === 'signature' && value instanceof File) {
          data.append(key, value);
        } else if (value !== null && value !== undefined && value !== '') {
          data.append(key, value);
        }
      }
    });

    try {
      editingMom
        ? await dispatch(updateProjectMeetingMom({ momId: editingMom.momId, updatedData: data })).unwrap()
        : await dispatch(createProjectMeetingMom(data)).unwrap();
      toast.success(`Meeting minute ${editingMom ? 'updated' : 'created'} successfully!`);
      handleFormClose();
    } catch (error) {
      toast.error(error || 'Failed to save meeting minute');
    }
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === 'all' ? undefined : value,
    }));
  };

  const handleDateRangeChange = ({ from, to }) => {
    setDateRange({ from, to });
  };

  const clearAllFilters = () => {
    setDateRange({ from: null, to: null });
    setSearchQuery('');
    setFilters({ projectId, meetingMode: 'all', status: 'all' });
    setSortBy('date-desc');
    setCurrentPage(1);
    toast.success('Filters cleared!');
  };

  const handleEdit = async (mom) => {
    setEditingMom(mom);
    try {
      await dispatch(fetchMeetingMomById(mom.momId)).unwrap();
      setShowCreateForm(true);
    } catch (error) {
      toast.error('Failed to fetch meeting minute details');
    }
  };

  const handleViewPdf = async (mom) => {
    try {
      await dispatch(fetchMeetingMomView(mom.momId)).unwrap();
      setViewingPdf(mom);
    } catch (error) {
      toast.error('PDF not found.');
    }
  };

  const handleFormClose = () => {
    setShowCreateForm(false);
    setEditingMom(null);
    dispatch(resetSelectedMom());
  };

  // Get meeting mode variant and icon
  const getModeVariant = (mode) => (mode === 'online' ? 'default' : 'secondary');
  const getModeIcon = (mode) => (mode === 'online' ? <Video className="h-4 w-4" /> : <CalendarIcon className="h-4 w-4" />);

  // Format date and time
  const formatDateTime = (dateString) => {
    if (!dateString || !isValid(new Date(dateString))) return 'No date';
    return format(new Date(dateString), 'MMM dd, yyyy | HH:mm');
  };

  // Get status badge variant
  const getStatusVariant = (status) => {
    switch (status) {
      case 'final':
        return 'default';
      case 'draft':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const totalPages = Math.ceil(filteredAndSortedMoms.length / ITEMS_PER_PAGE);
  const paginatedMoms = filteredAndSortedMoms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Loading skeleton for table
  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <TableRow key={i} className="animate-pulse">
          <TableCell><Skeleton className="h-4 w-32" /></TableCell>
          <TableCell><Skeleton className="h-4 w-32" /></TableCell>
          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
          <TableCell><Skeleton className="h-4 w-20" /></TableCell>
          <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
        </TableRow>
      ))}
    </div>
  );

  // No results message
  const NoResults = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <CalendarIcon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No meeting minutes found
      </h3>
      <p className="text-gray-600 mb-6">
        Try adjusting your search terms or filters.
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        <Button
          onClick={clearAllFilters}
          variant="outline"
          className="text-sm"
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="text-sm bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New
        </Button>
      </div>
    </div>
  );

  if (momsLoading && filteredAndSortedMoms.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white p-4 sm:p-8">
        <Card className="mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Loading Search */}
              <div className="flex-1 min-w-[180px]">
                <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
              {/* Loading Filters */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex-1 min-w-[140px]">
                  <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-700 text-xs sm:text-sm">MOM ID</TableHead>
                    <TableHead className="font-semibold text-gray-700 text-xs sm:text-sm">Date & Time</TableHead>
                    <TableHead className="font-semibold text-gray-700 text-xs sm:text-sm">Mode</TableHead>
                    <TableHead className="font-semibold text-gray-700 text-xs sm:text-sm">Status</TableHead>
                    <TableHead className="w-24 font-semibold text-gray-700 text-xs sm:text-sm text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <LoadingSkeleton />
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={0}>
      <div className="w-full bg-white">
    
          <div className=" space-y-2">
            {/* Search and Controls - All in one line like DocumentManager */}
            <div className="flex flex-wrap gap-4">
              {/* Search */}
              <div className="flex-1 min-w-[180px]">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by MOM ID, title, or summary..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 text-sm w-full"
                  />
                </div>
              </div>

              {/* Meeting Mode Filter */}
              <div className="flex-1 min-w-[140px]">
                <Select
                  value={filters.meetingMode || 'all'}
                  onValueChange={(value) => handleFilterChange('meetingMode', value)}
                >
                  <SelectTrigger className="text-sm w-full">
                    <SelectValue placeholder="All Modes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="offline">Offline</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Filter */}
              <div className="flex-1 min-w-[140px]">
                <Select
                  value={filters.status || 'all'}
                  onValueChange={(value) => handleFilterChange('status', value)}
                >
                  <SelectTrigger className="text-sm w-full">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="final">Final</SelectItem>
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
                    <SelectItem value="momId-asc">MOM ID (A-Z)</SelectItem>
                    <SelectItem value="momId-desc">MOM ID (Z-A)</SelectItem>
                    <SelectItem value="date-desc">Newest First</SelectItem>
                    <SelectItem value="date-asc">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div className="flex-1 min-w-[140px]">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-[38px] w-full justify-start text-left font-normal text-sm"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          `${format(dateRange.from, 'MMM dd')} - ${format(dateRange.to, 'MMM dd')}`
                        ) : (
                          format(dateRange.from, 'MMM dd, yyyy')
                        )
                      ) : (
                        <span className="text-gray-500">Date Range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={handleDateRangeChange}
                      initialFocus
                      disabled={{ before: subYears(new Date(), 5), after: new Date() }}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Create Button */}
              <div className="flex-1 min-w-[140px]">
                <Button
                  onClick={() => setShowCreateForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm h-[38px] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create
                </Button>
              </div>

              {/* Clear Filters Button - Conditional */}
              {(searchQuery || filters.meetingMode !== 'all' || filters.status !== 'all' || dateRange.from) && (
                <div className="flex-1 min-w-[140px]">
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                    className="w-full text-sm h-[38px] border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Documents Table */}
            {momsLoading && filteredAndSortedMoms.length > 0 ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-5 h-5 mr-2 animate-spin text-blue-600" />
                <span className="text-gray-600 text-sm">Updating results...</span>
              </div>
            ) : filteredAndSortedMoms.length === 0 ? (
              <NoResults />
            ) : (
              <>
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 text-xs sm:text-sm">
                        <TableHead className="w-auto font-bold text-gray-700">MOM ID</TableHead>
                        <TableHead className="w-[100px] sm:w-[250px] font-bold text-gray-700">Date & Time</TableHead>
                        <TableHead className="w-[80px] sm:w-[250px] font-bold text-gray-700">Mode</TableHead>
                        <TableHead className="w-[80px] sm:w-[250px] font-bold text-gray-700">Status</TableHead>
                        <TableHead className="w-[80px] sm:w-[250px] font-bold text-gray-700">Created By</TableHead>
                        <TableHead className="w-[60px] sm:w-[250px] font-bold text-gray-700 text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedMoms.map((mom) => (
                        <TableRow key={mom.momId} className="border-b border-gray-100 transition-colors text-xs sm:text-sm">
                          {/* MOM ID */}
                          <TableCell className="font-medium text-gray-900">
                            <span className="font-mono text-sm">{mom.momId || 'N/A'}</span>
                          </TableCell>
                          
                          {/* Date & Time */}
                          <TableCell className="text-gray-600">
                            {formatDateTime(mom.meetingDate)}
                          </TableCell>
                       
                          
                          {/* Mode */}
                          <TableCell>
                            <Badge
                              variant={getModeVariant(mom.meetingMode)}
                              className={cn(
                                'text-xs font-medium',
                                mom.meetingMode === 'online'
                                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                                  : 'bg-green-100 text-green-800 border-green-200'
                              )}
                            >
                              {getModeIcon(mom.meetingMode)}
                              <span className="ml-1 capitalize">{mom.meetingMode || 'Offline'}</span>
                            </Badge>
                          </TableCell>
                          
                          {/* Status */}
                          <TableCell>
                            <Badge
                              variant={getStatusVariant(mom.status)}
                              className={cn(
                                'text-xs font-medium',
                                mom.status === 'final'
                                  ? 'bg-green-100 text-green-800 border-green-200'
                                  : 'bg-gray-100 text-gray-800 border-gray-200'
                              )}
                            >
                              <span className="capitalize">{mom.status || 'Draft'}</span>
                            </Badge>
                          </TableCell>
                             {/* createdBy */}
                          <TableCell className="text-gray-600">
                            {mom.createdBy}
                          </TableCell>

                          {/* Actions */}
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-2">
                              {mom.status === 'final' ? (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      onClick={() => handleViewPdf(mom)}
                                      className="h-8 w-8 p-0 rounded-full border-gray-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                      title="View PDF"
                                    >
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top">
                                    View PDF document
                                  </TooltipContent>
                                </Tooltip>
                              ) : (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      onClick={() => handleEdit(mom)}
                                      className="h-8 w-8 p-0 rounded-full border-gray-300 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                                      title="Edit meeting minute"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top">
                                    Edit meeting minute
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination Section - always show label */}
                <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 sm:gap-0">
                  <div className="text-xs sm:text-sm text-gray-700">
                    Page {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                    {Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedMoms.length)}{' '}
                    of {filteredAndSortedMoms.length} Meeting Minutes
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
       

        <MomForm
          open={showCreateForm}
          onOpenChange={handleFormClose}
          selectedMom={selectedMom}
          selectedMomLoading={selectedMomLoading}
          selectedMomError={selectedMomError}
          editingMom={editingMom}
          currentUser={currentUser}
          projectName={projectName}
          projectId={projectId}
          handleSubmit={handleSubmit}
        />

        <ViewMomModal
          open={!!viewingPdf}
          onOpenChange={() => {
            setViewingPdf(null);
            dispatch(resetMeetingMomView());
          }}
          meetingMomView={meetingMomView}
          meetingMomViewLoading={meetingMomViewLoading}
          status={viewingPdf?.status}
        />
      </div>
    </TooltipProvider>
  );
};

export default ProjectwiseAllmeetingMom;