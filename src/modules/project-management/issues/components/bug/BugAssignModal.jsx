

"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Users, User, Calendar, X } from "lucide-react";
import { toast } from "sonner";

import { fetchTeamByProjectId } from "@/modules/project-management/team/slices/teamSlice";
import { assignBug, fetchBugByProjectId } from "@/modules/project-management/issues/slices/bugSlice";

const BugAssignModal = ({ isOpen, onOpenChange, bug, bugId, projectId, onAssign }) => {
  const dispatch = useDispatch();
  const { teamsByProject: teams, status: teamStatus } = useSelector(
    (state) => state.team
  );

  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedMember, setSelectedMember] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch team when modal opens
  useEffect(() => {
    if (projectId && isOpen) dispatch(fetchTeamByProjectId(projectId));
  }, [dispatch, projectId, isOpen]);

  // Reset state on modal close
  useEffect(() => {
    if (!isOpen) {
      setSelectedTeam(null);
      setSelectedMember("");
      setDeadline("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleTeamSelect = (value) => {
    const team = teams.find((t) => t.teamId === value);
    setSelectedTeam(team);
    setSelectedMember("");
  };

  const handleAssign = async () => {
    if (!selectedTeam) return toast.error("Please select a team");
    if (!selectedMember) return toast.error("Please select a team member");
    if (!deadline) return toast.error("Please select a deadline");

    const payload = {
      assignedTo: selectedMember,
      deadline,
    };

    setIsSubmitting(true);
    try {
      await dispatch(assignBug({ bug_id: bugId, payload })).unwrap();

      // ✅ Refresh bug list after success
      await dispatch(fetchBugByProjectId(projectId));

      toast.success("Bug assigned successfully!");
      if (onAssign) onAssign({ ...payload, bug_id: bugId });

      onOpenChange(false);
    } catch (error) {
      toast.error(error || "Failed to assign bug");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-md bg-white shadow-lg border border-gray-200 rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
            <span>
              Assign Bug:{" "}
              {bug?.bug_id
                }
            </span>
           
          </DialogTitle>
        </DialogHeader>

        {/* FORM FIELDS */}
        <div className="space-y-4 mt-4">
          {/* Select Team */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
              <Users className="h-4 w-4 text-blue-500 mr-2" />
              Select Team
            </label>
            <Select
              value={selectedTeam?.teamId || ""}
              onValueChange={handleTeamSelect}
              disabled={teamStatus === "loading"}
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-lg text-sm h-10">
                <SelectValue
                  placeholder={
                    teamStatus === "loading" ? "Loading teams..." : "Select team"
                  }
                />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black max-h-48">
                {teams.map((team) => (
                  <SelectItem key={team.teamId} value={team.teamId}>
                    {team.teamName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Team Member (Dropdown) */}
          {selectedTeam && (
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                <User className="h-4 w-4 text-blue-500 mr-2" />
                Select Team Member
              </label>
              {selectedTeam.teamMembers?.length > 0 ? (
                <Select
                  value={selectedMember || ""}
                  onValueChange={setSelectedMember}
                >
                  <SelectTrigger className="w-full border border-gray-300 rounded-lg text-sm h-10">
                    <SelectValue placeholder="Select member" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black max-h-48">
                    {selectedTeam.teamMembers.map((member) => (
                      <SelectItem key={member.memberId} value={member.memberId}>
                        {member.memberName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <p className="text-sm text-gray-500">No members in this team.</p>
              )}
            </div>
          )}

          {/* Deadline */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
              <Calendar className="h-4 w-4 text-blue-500 mr-2" />
              Deadline (Date & Time)
            </label>
            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="text-gray-700 border border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleAssign}
            disabled={isSubmitting || teamStatus === "loading"}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Assigning...
              </>
            ) : (
              "Assign Bug"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BugAssignModal;
