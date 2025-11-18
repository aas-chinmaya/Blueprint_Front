



import { useSelector } from "react-redux";
import { FiUser, FiBriefcase, FiMail, FiUsers, FiEdit, FiTrash } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ViewTeam({ teamId, project,onEdit, onDelete }) {
  // Fetch team data from Redux store
  const { teamsByProject: teams } = useSelector((state) => state.team);
  const team = teams.find((t) => t.teamId === teamId);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

  return (
    <div className="p-3 bg-white  space-y-3">
      {team ? (
        <>
          <div className="flex  flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h3 className="text-base font-bold text-gray-900">{team.teamName}</h3>
            {
              (currentUser?.role === "cpc" || isTeamLead || currentUser?.position === "Team Lead") &&(

            <div className="flex gap-1.5">

              <Button
                onClick={onEdit}
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-1.5 h-7 w-7 flex items-center justify-center transition-colors duration-200"
                aria-label={`Edit team ${team.teamName}`}
              >
                <FiEdit className="h-3.5 w-3.5" />
              </Button>
              <Button
                onClick={onDelete}
                className="bg-red-700 hover:bg-red-800 text-white rounded-full p-1.5 h-7 w-7 flex items-center justify-center transition-colors duration-200"
                aria-label={`Delete team ${team.teamName}`}
              >
                <FiTrash className="h-3.5 w-3.5" />
              </Button>
            </div>
              )
            }
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-gray-600 flex items-center gap-1">
                <FiBriefcase className="h-3 w-3" aria-hidden="true" />
                Project Name
              </p>
              <p className="text-xs text-gray-800">{team.projectName}</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-gray-600 flex items-center gap-1">
                <FiUser className="h-3 w-3" aria-hidden="true" />
                Team Lead
              </p>
              <p className="text-xs text-gray-800">{team.teamLeadName}</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
              <FiUsers className="h-3.5 w-3.5" aria-hidden="true" />
              All Members {team.teamMembers.length > 0 ? `(${team.teamMembers.length})` : ""}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {team.teamMembers.map((member) => (
                <div
                  key={member.memberId}
                  className="p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-0.5"
                >
                  <p className="text-xs font-medium text-gray-900">{member.memberName}</p>
                  <p className="text-xs text-gray-600">{member.role}</p>
               
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-xs text-gray-600 text-center">No team selected</p>
      )}
    </div>
  );
}