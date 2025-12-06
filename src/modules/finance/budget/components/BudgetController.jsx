




"use client";

import { fetchAllProjects } from '@/features/projectSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import OveralBudgetDashboard from './OveralBudgetDashboard';
import ProjectBudgetDashboard from './ProjectBudgetDashboard';

const BudgetController = () => {
  const dispatch = useDispatch();
  const { projects = [] } = useSelector((state) => state.project);

  // null means Overall; object means specific project selected
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProjects()).then(() => {
      setTimeout(() => setShowContent(true), 800);
    });
  }, [dispatch]);

  const filteredProjects = projects.filter(p =>
    (p.projectName || p.name)?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (project) => {
    // If project is null, it's Overall
    if (!project) {
      setSelectedProject(null);
    } else {
      setSelectedProject({ projectId: project.projectId, projectName: project.projectName });
    
    }
    setOpen(false);
    setSearchTerm('');
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-background border-b p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="w-64 h-10" />
          </div>
        </header>
        <main className="p-4">
          <Skeleton className="h-40 w-full" />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Budget</h1>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="w-64 h-10 flex items-center justify-between border rounded-md px-3">
                <span>{selectedProject ? selectedProject.projectName : 'Overall'}</span>
                <ChevronsUpDown className="h-4 w-4"/>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput
                  value={searchTerm}
                  onValueChange={setSearchTerm}
                  placeholder="Search projects..."
                />
                <CommandGroup className="max-h-60 overflow-auto">
                  {/* Overall selection */}
                  <CommandItem
                    value="overall"
                    onSelect={() => handleSelect(null)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        !selectedProject ? "opacity-100" : "opacity-0"
                      )}
                    />
                    Overall
                  </CommandItem>

                  {/* Project selections */}
                  {filteredProjects.map(p => (
                    <CommandItem
                      key={p._id}
                      value={p.projectName}
                      onSelect={() => handleSelect(p)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedProject?.projectId === p.projectId ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {p.projectName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          
        </div>
      </header>

      {/* Content */}
      <main className="p-4">
        <div className="w-full mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedProject
                ? <ProjectBudgetDashboard 
                    projectId={selectedProject.projectId} 
                    projectName={selectedProject.projectName} 
                  />
                : <OveralBudgetDashboard />
              }
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BudgetController;


