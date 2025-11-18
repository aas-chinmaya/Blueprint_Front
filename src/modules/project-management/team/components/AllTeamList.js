


"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeams } from "@/modules/project-management/team/slices/teamSlice";
import { FiSearch, FiArrowUp, FiArrowDown, FiX, FiChevronLeft, FiChevronRight, FiUsers, FiAlertCircle, FiMail, FiUser, FiBriefcase, FiFilter, FiChevronDown } from "react-icons/fi";
import { Users, Briefcase, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const statusConfig = {
  Active: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <FiAlertCircle className="w-4 h-4 text-emerald-600" /> },
  Inactive: { badge: "bg-red-50 text-red-700 border-red-200", icon: <FiX className="w-4 h-4 text-red-600" /> },
};

const AllTeamList = () => {
  const dispatch = useDispatch();
  const { allTeams, status, error } = useSelector((state) => state.team);
  const isLoading = status === "loading";

  const [searchTerm, setSearchTerm] = useState("");
  const [projectSearch, setProjectSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState("all");
  const [sortField, setSortField] = useState("teamId");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 8;

  useEffect(() => {
    dispatch(fetchAllTeams());
  }, [dispatch]);

  const teamStats = Array.isArray(allTeams)
    ? {
        total: allTeams.length,
        active: allTeams.filter((t) => !t.isDeleted).length,
        inactive: allTeams.filter((t) => t.isDeleted).length,
      }
    : { total: 0, active: 0, inactive: 0 };

  const projectOptions = useMemo(() => {
    const projects = [...new Set(allTeams.map((team) => team.projectName))];
    return ["all", ...projects];
  }, [allTeams]);

  const filteredProjects = useMemo(() => {
    if (!projectSearch.trim()) return projectOptions;
    const term = projectSearch.toLowerCase();
    return projectOptions.filter((proj) => proj === "all" || proj.toLowerCase().includes(term));
  }, [projectOptions, projectSearch]);

  const getFilteredSorted = () => {
    if (!Array.isArray(allTeams)) return [];
    let list = [...allTeams];
    if (selectedProject !== "all") list = list.filter((t) => t.projectName === selectedProject);
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
      const A = (a[sortField] ?? "").toString().toLowerCase();
      const B = (b[sortField] ?? "").toString().toLowerCase();
      return A.localeCompare(B) * (sortDirection === "asc" ? 1 : -1);
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
    if (sortField === field) setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleProjectFilter = (project) => {
    setSelectedProject(project);
    setProjectSearch("");
  };

  const clearFilters = () => {
    setSearchTerm("");
    setProjectSearch("");
    setSelectedProject("all");
    setSortField("teamId");
    setSortDirection("asc");
    setCurrentPage(1);
  };

  const HeaderSkeleton = () => (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <Skeleton className="h-10 w-64" />
        <div className="flex-1" />
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Skeleton className="h-11 w-full sm:w-72" />
          <Skeleton className="h-11 w-44" />
          <Skeleton className="h-11 w-44" />
        </div>
      </div>
    </div>
  );

  const TeamCardSkeleton = () => (
    <Card className="overflow-hidden border rounded-xl shadow-sm">
      <CardHeader className="pb-3"><Skeleton className="h-7 w-32 rounded-full" /></CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-6 w-4/5 rounded" />
        <Separator />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <HeaderSkeleton />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <TeamCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <Card className="p-12 text-center">
          <CardContent>
            <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <FiAlertCircle className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Error loading teams</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">All Teams</h1>
            <div className="flex-1" />
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
              <div className="relative flex-1 sm:max-w-md">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by team ID, project, or lead..."
                  className="pl-10"
                />
                {searchTerm && (
                  <Button variant="ghost" size="icon" onClick={() => setSearchTerm("")} className="absolute right-2 top-1/2 -translate-y-1/2">
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
                      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
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
                          <span className="truncate">{proj === "all" ? "All Projects" : proj}</span>
                          <Badge variant="secondary" className="ml-2">
                            {proj === "all" ? teamStats.total : allTeams.filter((t) => t.projectName === proj).length}
                          </Badge>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  {selectedProject !== "all" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleProjectFilter("all")} className="text-destructive">
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
                  {["teamId", "projectName", "teamLeadName"].map((f) => (
                    <DropdownMenuItem key={f} onClick={() => handleSort(f)}>
                      <div className="flex items-center justify-between w-full">
                        <span>{f === "teamId" ? "Team ID" : f === "projectName" ? "Project" : "Lead"}</span>
                        {sortField === f && (sortDirection === "asc" ? <FiArrowUp className="h-4 w-4" /> : <FiArrowDown className="h-4 w-4" />)}
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={clearFilters} className="text-destructive">Clear All Filters</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {teamsToShow.length === 0 ? (
          <Card className="p-12 text-center">
            <CardContent>
              <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No teams found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || selectedProject !== "all" ? "No matches found." : "No collaborated teams available."}
              </p>
              {(searchTerm || selectedProject !== "all") && (
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedTeams.map((team) => {
                const config = statusConfig[team.isDeleted ? "Inactive" : "Active"] || {};
                const memberCount = team.teamMembers?.length || 0;
                return (
                  <Tooltip key={team.teamId}>
                    <TooltipTrigger asChild>
                    
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                              <CardHeader className="pb-3 bg-muted/30">
                                <Badge variant="outline" className={`${config.badge} border`}>
                                  {config.icon}
                                  <span className="ml-1">{team.isDeleted ? "Inactive" : "Active"}</span>
                                </Badge>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div>
                                  <h3 className="font-semibold text-lg line-clamp-2 text-primary">
                                    {team.projectName || "Untitled Project"}
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
                                      <p className="font-medium">{team.teamLeadName || "Unassigned"}</p>
                                      <p className="text-muted-foreground">Lead</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                      <FiUsers className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                      <p className="font-medium">{memberCount} Member{memberCount !== 1 ? "s" : ""}</p>
                                      <p className="text-muted-foreground">Team Size</p>
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


  {/* Body */}
  <ScrollArea className="h-full p-6">
    <div className="space-y-3">
      {/* Section Header */}
      <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
        <FiUsers className="h-4 w-4 text-primary" aria-hidden="true" />
        {team.projectName}-{team.teamName}
        {team.teamMembers?.length > 0 && (
          <span className="text-muted-foreground font-normal">
            ({team.teamMembers.length})
          </span>
        )}
      </h4>

      {/* Member Grid */}
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
                      
                    </TooltipTrigger>
                    <TooltipContent>Click to view team details</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <FiChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1))
                    .map((page, idx, arr) => (
                      <div key={page}>
                        {idx > 0 && arr[idx - 1] !== page - 1 && <span className="px-2 text-muted-foreground">...</span>}
                        <Button variant={currentPage === page ? "default" : "outline"} size="sm" onClick={() => handlePageChange(page)}>
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
};

export default AllTeamList;