



// ProjectList.jsx (Admin View - All Projects)
'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects, deleteProject } from '@/modules/project-management/project/slices/projectSlice';
import { useRouter } from 'next/navigation';
import {
  FiPaperclip,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiPlus,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiArrowUp,
  FiArrowDown,
  FiX,
  FiTrash2,
  FiEdit3,
  FiCalendar,
  FiTarget,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { Briefcase } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

const statusConfig = {
  Planned: { badge: 'bg-amber-50 text-amber-700 border-amber-200', icon: <FiClock className="w-4 h-4 text-amber-600" /> },
  'In Progress': { badge: 'bg-blue-50 text-blue-700 border-blue-200', icon: <FiAlertCircle className="w-4 h-4 text-blue-600" /> },
  Completed: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: <FiCheckCircle className="w-4 h-4 text-emerald-600" /> },
};

export default function ProjectList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projects = [], status } = useSelector((state) => state.project || {});
  const isLoading = status.fetchAllProjects === 'loading';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortField, setSortField] = useState('projectName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [deleteProjectId, setDeleteProjectId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  useEffect(() => { dispatch(fetchAllProjects()); }, [dispatch]);

  const projectStats = Array.isArray(projects)
    ? {
        total: projects.length,
        planned: projects.filter(p => p.status === 'Planned').length,
        inprogress: projects.filter(p => p.status === 'In Progress').length,
        completed: projects.filter(p => p.status === 'Completed').length,
      }
    : { total: 0, planned: 0, inprogress: 0, completed: 0 };

  const getFilteredSorted = () => {
    if (!Array.isArray(projects)) return [];
    let list = [...projects];
    if (selectedStatus !== 'all') list = list.filter(p => p.status === selectedStatus);
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.projectName?.toLowerCase().includes(term) ||
        p.teamLeadName?.toLowerCase().includes(term) ||
        String(p.projectId).includes(term)
      );
    }
    list.sort((a, b) => {
      const A = (a[sortField] ?? '').toString().toLowerCase();
      const B = (b[sortField] ?? '').toString().toLowerCase();
      return A.localeCompare(B) * (sortDirection === 'asc' ? 1 : -1);
    });
    return list;
  };

  const projectsToShow = getFilteredSorted();
  const totalPages = Math.ceil(projectsToShow.length / projectsPerPage);
  const paginatedProjects = projectsToShow.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

  const handlePageChange = (page) => { if (page >= 1 && page <= totalPages) setCurrentPage(page); };
  const handleView = (projectId) => router.push(`/project/${projectId}`);
  const handleEdit = (projectId) => router.push(`/project/edit/${projectId}`);
  const handleCreate = () => router.push('/project/onboarding');
  const handleSort = (field) => {
    if (sortField === field) setSortDirection(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDirection('asc'); }
  };
  const handleStatusFilter = (status) => setSelectedStatus(status);
  const clearFilters = () => { setSearchTerm(''); setSelectedStatus('all'); setSortField('projectName'); setSortDirection('asc'); setCurrentPage(1); };

  const openDeleteDialog = (projectId) => { setDeleteProjectId(projectId); setIsDeleteModalOpen(true); };
  const confirmDelete = async () => {
    if (!deleteProjectId) return;
    try {
      await dispatch(deleteProject(deleteProjectId)).unwrap();
      toast.success('Project deleted successfully!');
      dispatch(fetchAllProjects());
      if (paginatedProjects.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
    } catch (e) { toast.error(e?.message || 'Failed to delete project.'); }
    finally { setIsDeleteModalOpen(false); setDeleteProjectId(null); }
  };

  const HeaderSkeleton = () => (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <Skeleton className="h-10 w-48" />
        <div className="flex-1" />
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Skeleton className="h-11 w-full sm:w-72" />
          <Skeleton className="h-11 w-44" />
          <Skeleton className="h-11 w-36" />
        </div>
      </div>
    </div>
  );

  const ProjectCardSkeleton = () => (
    <Card className="overflow-hidden border rounded-xl shadow-sm">
      <CardHeader className="pb-3"><Skeleton className="h-7 w-32 rounded-full" /></CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-6 w-4/5 rounded" />
        <Separator />
        <div className="space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-4 w-28 rounded" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t bg-muted/50">
        <Skeleton className="h-5 w-full rounded" />
      </CardFooter>
    </Card>
  );

  if (isLoading) return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <HeaderSkeleton />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_,i)=><ProjectCardSkeleton key={i}/>)}
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">All Projects</h1>
            <div className="flex-1" />
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
              <div className="relative flex-1 sm:max-w-md">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search by name, ID, or lead..."
                  className="pl-10"
                />
                {searchTerm && (
                  <Button variant="ghost" size="icon" onClick={() => setSearchTerm('')} className="absolute right-2 top-1/2 -translate-y-1/2">
                    <FiX className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 whitespace-nowrap">
                    <FiFilter className="h-4 w-4" />
                    <span>Filters</span>
                    <FiChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  {['all', 'Planned', 'In Progress', 'Completed'].map(st => (
                    <DropdownMenuItem key={st} onClick={() => handleStatusFilter(st)}>
                      <div className="flex items-center justify-between w-full">
                        <span className="flex items-center gap-2">
                          {st !== 'all' && statusConfig[st].icon}
                          {st === 'all' ? 'All Status' : st}
                        </span>
                        <Badge variant="secondary">
                          {st === 'all' ? projectStats.total : projectStats[st.toLowerCase().replace(/ /g, '')] ?? 0}
                        </Badge>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                  {['projectName', 'projectId', 'status'].map(f => (
                    <DropdownMenuItem key={f} onClick={() => handleSort(f)}>
                      <div className="flex items-center justify-between w-full">
                        <span>{f === 'projectName' ? 'Name' : f === 'projectId' ? 'ID' : 'Status'}</span>
                        {sortField === f && (sortDirection === 'asc' ? <FiArrowUp className="h-4 w-4" /> : <FiArrowDown className="h-4 w-4" />)}
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={clearFilters} className="text-destructive">Clear All Filters</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="gap-2 bg-blue-700 whitespace-nowrap" onClick={handleCreate}>
                <FiPlus className="h-4 w-4" />
                <span>New Project</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Project</DialogTitle>
              <DialogDescription>This action cannot be undone. This will permanently delete the project.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmDelete}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* No Projects */}
        {projectsToShow.length === 0 ? (
          <Card className="p-12 text-center">
            <CardContent>
              <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <FiPaperclip className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || selectedStatus !== 'all' ? 'Try adjusting your filters.' : 'Create your first project.'}
              </p>
              {(searchTerm || selectedStatus !== 'all') && (
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Project Cards Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProjects.map(project => {
                const config = statusConfig[project.status] || {};
                return (
                  <Tooltip key={project.projectId}>
                    <TooltipTrigger asChild>
                      <Card
                        className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                        onClick={() => handleView(project.projectId)}
                      >
                        <CardHeader className="pb-3 bg-muted/30">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={`${config.badge} border`}>
                              {config.icon}
                              <span className="ml-1">{project.status}</span>
                            </Badge>

                            {/* Edit & Delete Actions */}
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleEdit(project.projectId);
                                    }}
                                  >
                                    <FiEdit3 className="h-4 w-4 text-blue-600" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Edit Project</TooltipContent>
                              </Tooltip>

                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openDeleteDialog(project.projectId);
                                    }}
                                  >
                                    <FiTrash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Delete Project</TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                              {project.projectName || 'Untitled'}
                            </h3>
                            <p className="text-sm text-muted-foreground">ID: {project.projectId}</p>
                          </div>
                          <Separator />
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9">
                                <AvatarFallback className="bg-primary/10">
                                  <Briefcase className="h-4 w-4 text-primary" />
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{project.teamLeadName || 'Unassigned'}</p>
                                <p className="text-muted-foreground">Lead</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-lg bg-amber-50 flex items-center justify-center">
                                <FiCalendar className="h-4 w-4 text-amber-600" />
                              </div>
                              <div>
                                <p className="font-medium">{project.startDate || 'N/A'}</p>
                                <p className="text-muted-foreground">Start</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                <FiTarget className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium">{project.expectedEndDate || 'N/A'}</p>
                                <p className="text-muted-foreground">End</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="pt-4 border-t bg-muted/50">
                          <Button variant="ghost" className="w-full text-primary font-medium">
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>Click to view details</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <FiChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1))
                    .map((page, idx, arr) => (
                      <div key={page}>
                        {idx > 0 && arr[idx - 1] !== page - 1 && <span className="px-2 text-muted-foreground">...</span>}
                        <Button
                          variant={currentPage === page ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      </div>
                    ))}
                  <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <FiChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </TooltipProvider>
  );
}