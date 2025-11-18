"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUsers, FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { fetchTeamByProjectId } from "@/modules/project-management/team/slices/teamSlice";
import CreateTeamModal from "./CreateTeamModal";
import EditTeamModal from "./EditTeamModal";
import DeleteTeamModal from "./DeleteTeamModal";
import ViewTeam from "./TeamView";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TeamManagement({ projectId, project }) {
  const dispatch = useDispatch();
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // Fetch teams from Redux store
  const {
    teamsByProject: teams,
    status,
    error,
  } = useSelector((state) => state.team);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

  // Fetch teams on mount and select first team for larger screens
 

  useEffect(() => {
    if (!isCreateModalOpen || !isEditModalOpen ) {
      dispatch(fetchTeamByProjectId(projectId));
    }
  }, [isCreateModalOpen,isEditModalOpen, projectId, dispatch]);

  // Automatically select the first team for larger screens when teams are loaded
  useEffect(() => {
    if (
      status === "succeeded" &&
      teams.length > 0 &&
      !selectedTeamId &&
      window.innerWidth >= 768
    ) {
      setSelectedTeamId(teams[0].teamId);
    }
  }, [status, teams, selectedTeamId]);

  // Handle team selection
  const handleTeamSelect = (teamId) => {
    setSelectedTeamId(teamId);
    if (window.innerWidth < 768) {
      setIsDetailsModalOpen(true); // Open modal only on small screens when a team is selected
    }
  };

  // Find selected team for ViewTeam
  const selectedTeam = teams.find((team) => team.teamId === selectedTeamId);

  return (
    <Card className="bg-white border border-gray-200 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
        {/* Left Sidebar: Team List */}
        <div className="bg-white border-r border-gray-200 h-screen overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <FiUsers aria-hidden="true" />
              Teams
              <span className="text-sm text-green-600 ml-2">
                ({teams.length} Total)
              </span>
            </h2>
            {/* {(currentUser?.role === "cpc" ||
              isTeamLead ||
              currentUser?.position === "Team Lead") && (
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm p-2"
                aria-label="Create new team"
              >
                <FiPlus className="h-5 w-5" />
              </Button>
            )} */}
{(currentUser?.role === "cpc" ||
  isTeamLead ||
  currentUser?.position === "Team Lead") && (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        onClick={() => setIsCreateModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm p-2"
        aria-label="Create new team"
      >
        <FiPlus className="h-5 w-5" />
      </Button>
    </TooltipTrigger>
    <TooltipContent
      side="top"
      align="center"
      sideOffset={6}
      className="text-white bg-black border border-gray-200 rounded-md p-2 text-xs shadow-sm"
    >
      Create Team
    </TooltipContent>
  </Tooltip>
)}

        
          </div>

          {status === "succeeded" && teams.length === 0 && (
            <p className="p-4 text-sm text-gray-600">No teams found.</p>
          )}
          {teams.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {teams.map((team) => (
                <li
                  key={team.teamId}
                  className={`p-4 cursor-pointer transition-colors duration-200 text-sm font-medium ${
                    selectedTeamId === team.teamId
                      ? "bg-indigo-100 text-indigo-800"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={() => handleTeamSelect(team.teamId)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleTeamSelect(team.teamId);
                    }
                  }}
                  aria-label={`Select team ${team.teamName}`}
                >
                  {team.teamName}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Content: Team Details (Large Screens Only) */}
        {selectedTeam && (
          <div className="hidden md:block">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Team Details
              </CardTitle>
            </CardHeader>
            <ViewTeam
              project={project}
              teamId={selectedTeam.teamId}
              onEdit={() => setIsEditModalOpen(true)}
              onDelete={() => {
                setIsDeleteModalOpen(true);
              }}
            />
          </div>
        )}
      </div>

      {/* Details Modal (Small Screens Only) */}
      {selectedTeam && (
        <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
          <DialogContent className="max-h-[80vh] w-full sm:max-w-md overflow-y-auto p-4">
            <ViewTeam
              project={project}
              teamId={selectedTeam.teamId}
              onEdit={() => setIsEditModalOpen(true)}
              onDelete={() => setIsDeleteModalOpen(true)}
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Create Team Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent>
          <CreateTeamModal
            projectId={projectId}
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Team Modal */}
      {selectedTeam && (
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent>
            <EditTeamModal
              open={isEditModalOpen}
              projectId={projectId}
              teamId={selectedTeam.teamId}
              onClose={() => setIsEditModalOpen(false)}
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Team Modal */}
      {selectedTeam && (
        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <DialogContent>
            <DeleteTeamModal
              teamId={selectedTeam.teamId}
              onClose={() => {
                setIsDeleteModalOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}
