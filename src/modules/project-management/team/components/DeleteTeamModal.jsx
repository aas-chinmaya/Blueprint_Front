

import { useDispatch, useSelector } from "react-redux";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FiTrash } from "react-icons/fi";
import { deleteTeam } from "@/modules/project-management/team/slices/teamSlice"; // Assuming deleteTeam action exists

export default function DeleteTeamModal({ teamId, onClose }) {
  const dispatch = useDispatch();
  const { teamsByProject: teams } = useSelector((state) => state.team);
  const teamName = teams.find((t) => t.teamId === teamId)?.teamName || "Unknown";

  const handleDelete = () => {
    dispatch(deleteTeam(teamId)); // Dispatch delete action
    onClose();
  };

  return (
    <DialogContent className="max-w-full sm:max-w-md md:max-w-lg p-6 border-none">
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiTrash aria-hidden="true" />
          Delete Team
        </DialogTitle>
      </DialogHeader>
      <p className="text-sm text-gray-600">
        Are you sure you want to delete the team "{teamName}"? This action cannot be undone.
      </p>
      <DialogFooter className="mt-6">
        <Button
          variant="outline"
          onClick={onClose}
          className="border-gray-300 text-gray-800 hover:bg-gray-50 rounded-md text-sm h-10 px-4"
          aria-label="Cancel"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white rounded-md text-sm h-10 px-4"
          aria-label="Delete team"
        >
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}