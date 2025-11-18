


'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsByEmployeeId } from '@/modules/project-management/team/slices/teamSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Users, Briefcase, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { FiX,FiArrowDown, FiFilter, FiChevronDown, FiSearch as FiSearchIcon, FiChevronLeft, FiChevronRight, FiAlertCircle, FiArrowUp } from 'react-icons/fi';

const statusConfig = {
  Active: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <FiAlertCircle className="w-4 h-4 text-emerald-600" /> },
  Inactive: { badge: "bg-red-50 text-red-700 border-red-200", icon: <FiX className="w-4 h-4 text-red-600" /> },
};

const TeamListByEmployeeId = () => {
  const dispatch = useDispatch();
  const { teamsByEmployee, status, error } = useSelector((state) => state.team);
  const { currentUser } = useCurrentUser();
  const employeeId = currentUser?.id;

  const [searchTerm, setSearchTerm] = useState('');
  const [projectSearch, setProjectSearch] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');
  const [sortField, setSortField] = useState('teamId');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 8;

  useEffect(() => {
    if (employeeId) {
      dispatch(fetchTeamsByEmployeeId(employeeId));
    }
  }, [dispatch, employeeId]);

  const teamStats = useMemo(() => {
    if (!Array.isArray(teamsByEmployee)) return { total: 0, active: 0, inactive: 0 };
    return {
      total: teamsByEmployee.length,
      active: teamsByEmployee.filter((t) => !t.isDeleted).length,
      inactive: teamsByEmployee.filter((t) => t.isDeleted).length,
    };
  }, [teamsByEmployee]);

  const projectOptions = useMemo(() => {
    const projects = [...new Set(teamsByEmployee.map((team) => team.projectName))];
    return ['all', ...projects];
  }, [teamsByEmployee]);

  const filteredProjects = useMemo(() => {
    if (!projectSearch.trim()) return projectOptions;
    const term = projectSearch.toLowerCase();
    return projectOptions.filter((proj) => proj === 'all' || proj.toLowerCase().includes(term));
  }, [projectOptions, projectSearch]);

  const getFilteredSorted = () => {
    if (!Array.isArray(teamsByEmployee)) return [];
    let list = [...teamsByEmployee];

    if (projectFilter !== 'all') {
      list = list.filter((t) => t.projectName === projectFilter);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (t) =>
          t.teamId.toLowerCase().includes(term) ||
          t.projectName.toLowerCase().includes(term) ||
          t.teamLeadName?.toLowerCase().includes(term)
      );
    }

    list.sort((a, b) => {
      const A = (a[sortField] ?? '').toString().toLowerCase();
      const B = (b[sortField] ?? '').toString().toLowerCase();
      return A.localeCompare(B) * (sortDirection === 'asc' ? 1 : -1);
    });

    return list;
  };

  const teamsToShow = getFilteredSorted();
  const totalPages = Math.ceil(teamsToShow.length / teamsPerPage);
  const paginatedTeams = teamsToShow.slice((currentPage - 1) * teamsPerPage, currentPage * teamsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleProjectFilter = (project) => {
    setProjectFilter(project);
    setProjectSearch('');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setProjectSearch('');
    setProjectFilter('all');
    setSortField('teamId');
    setSortDirection('asc');
    setCurrentPage(1);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="h-10 w-64 bg-muted rounded animate-pulse" />
            <div className="flex-1" />
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="h-11 w-full sm:w-72 bg-muted rounded animate-pulse" />
              <div className="h-11 w-44 bg-muted rounded animate-pulse" />
              <div className="h-11 w-44 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden border rounded-xl shadow-sm">
              <CardHeader className="pb-3"><div className="h-7 w-32 bg-muted rounded-full animate-pulse" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="h-6 w-4/5 bg-muted rounded animate-pulse" />
                <div className="h-px bg-border" />
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-muted rounded-lg animate-pulse" />
                      <div className="h-4 w-28 bg-muted rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="pt-4 border-t bg-muted/50">
                <div className="h-5 w-full bg-muted rounded animate-pulse" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error || status === 'failed') {
    return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <Card className="p-12 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <FiAlertCircle className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Error loading teams</h3>
          <p className="text-muted-foreground mb-6">{error || 'Something went wrong.'}</p>
        </Card>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">My Worked Teams</h1>
            <div className="flex-1" />
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
              <div className="relative flex-1 sm:max-w-md">
                <FiSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by team ID, project, or lead..."
                  className="pl-10"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    <FiX className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 whitespace-nowrap">
                    <FiFilter className="h-4 w-4" />
                    <span>Project Filter</span>
                    <FiChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <div className="p-3">
                    <div className="relative">
                      <FiSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        value={projectSearch}
                        onChange={(e) => setProjectSearch(e.target.value)}
                        placeholder="Search projects..."
                        className="pl-10 text-sm"
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="max-h-64 overflow-y-auto">
                    {filteredProjects.map((proj) => (
                      <DropdownMenuItem key={proj} onClick={() => handleProjectFilter(proj)}>
                        <div className="flex items-center justify-between w-full">
                          <span className="truncate">{proj === 'all' ? 'All Projects' : proj}</span>
                          <Badge variant="secondary" className="ml-2">
                            {proj === 'all' ? teamStats.total : teamsByEmployee.filter((t) => t.projectName === proj).length}
                          </Badge>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  {projectFilter !== 'all' && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleProjectFilter('all')} className="text-destructive">
                        Clear Project Filter
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 whitespace-nowrap">
                    <ArrowUpDown className="h-4 w-4" />
                    <span>Sort</span>
                    <FiChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                  {['teamId', 'projectName', 'teamLeadName'].map((f) => (
                    <DropdownMenuItem key={f} onClick={() => handleSort(f)}>
                      <div className="flex items-center justify-between w-full">
                        <span>{f === 'teamId' ? 'Team ID' : f === 'projectName' ? 'Project' : 'Lead'}</span>
                        {sortField === f && (sortDirection === 'asc' ? <FiArrowUp className="h-4 w-4" /> : <FiArrowDown className="h-4 w-4" />)}
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={clearFilters} className="text-destructive">
                    Clear All Filters
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {teamsToShow.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No teams found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || projectFilter !== 'all' ? 'No matches found.' : 'You are not part of any teams yet.'}
            </p>
            {(searchTerm || projectFilter !== 'all') && (
              <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
            )}
          </Card>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedTeams.map((team) => {
                const config = statusConfig[team.isDeleted ? 'Inactive' : 'Active'] || {};
                const memberCount = team.teamMembers?.length || 0;

                return (
                  <Tooltip key={team.teamId}>
                    <TooltipTrigger asChild>
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                              <CardHeader className="pb-3 bg-muted/30">
                                <Badge variant="outline" className={`${config.badge} border`}>
                                  {config.icon}
                                  <span className="ml-1">{team.isDeleted ? 'Inactive' : 'Active'}</span>
                                </Badge>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div>
                                  <h3 className="font-semibold text-lg line-clamp-2 text-primary">
                                    {team.projectName || 'Untitled Project'}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">Team Name: {team.teamName}</p>

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
                                      <p className="font-medium">{team.teamLeadName || 'Unassigned'}</p>
                                      <p className="text-muted-foreground">Lead</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                      <Users className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                      <p className="font-medium">{memberCount} Member{memberCount !== 1 ? 's' : ''}</p>
                                      <p className="text-muted-foreground">Team Size</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                              <div className="pt-4 border-t bg-muted/50">
                                <Button variant="ghost" className="w-full text-primary font-medium">
                                  View Details
                                </Button>
                              </div>
                            </Card>
                          </DialogTrigger>

                          <DialogContent
                            className="
                              w-full
                              sm:max-w-xl
                              md:max-w-2xl
                              lg:max-w-3xl
                              xl:max-w-4xl
                              2xl:max-w-5xl
                              3xl:max-w-6xl
                              h-[90vh]
                              p-0
                              overflow-hidden
                              transition-all
                              duration-300
                              ease-in-out
                            "
                          >
                            <ScrollArea className="h-full p-6">
                              <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                                  {team.projectName}-{team.teamName}
                                  {team.teamMembers?.length > 0 && (
                                    <span className="text-muted-foreground font-normal">
                                      ({team.teamMembers.length})
                                    </span>
                                  )}
                                </h4>

                                {team.teamMembers?.length > 0 ? (
                                  <div className="flex flex-wrap gap-2">
                                    {team.teamMembers.map((member) => (
                                      <div
                                        key={member.memberId}
                                        className="flex items-center gap-2 p-2 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors duration-150"
                                      >
                                        <Avatar className="h-7 w-7">
                                          <AvatarFallback className="bg-primary/10 text-[10px] text-primary font-medium">
                                            {member.memberName?.charAt(0).toUpperCase()}
                                          </AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col min-w-0">
                                          <p className="text-sm font-medium text-foreground truncate">
                                            {member.memberName}
                                          </p>
                                          <p className="text-[11px] text-muted-foreground truncate">
                                            {member.role}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-xs text-muted-foreground py-6 text-center border rounded-md bg-muted/10">
                                    No members in this team.
                                  </p>
                                )}
                              </div>
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Click to view team details</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <FiChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1))
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
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
};

export default TeamListByEmployeeId;