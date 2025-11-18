"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers, createTeam } from "@/modules/project-management/team/slices/teamSlice";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Check, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { fetchTeamByProjectId } from "@/modules/project-management/team/slices/viewTeamByProjectIdSlice";

export default function CreateTeamModal({ projectId, onClose, isOpen }) {
  const dispatch = useDispatch();
  const { allMembers, createTeamError } = useSelector((state) => state.team);
  const { project } = useSelector((state) => state.project);
  const {
    teamsByProject: teams,
    status,
    error,
  } = useSelector((state) => state.team);

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTeamMembers());
    if (projectId) {
      dispatch(fetchTeamByProjectId(projectId));
    }
  }, [dispatch, projectId]);

  // Flatten existing members from teams
  const existingMember = teams.flatMap((team) => team.teamMembers);

  // Step 1: Filter unique members by memberId, ensuring it's defined
  const uniqueMembers = Array.from(
    new Map(
      existingMember
        .filter((member) => member.memberId) // Filter out invalid entries
        .map((member) => [member.memberId.trim(), member])
    ).values()
  );

  // Step 2: Create a set of memberIds from uniqueMembers
  const uniqueMemberIds = new Set(
    uniqueMembers.map((member) => member.memberId.trim())
  );

  // Step 3: Filter allMembers to exclude members already in uniqueMembers
  const finalMembers = allMembers.filter((member) => {
    if (!member.employeeID) {
      // console.warn("Member missing employeeID:", member);
      return true; // Keep or handle as needed
    }
    const id = member.employeeID.trim();
    return !uniqueMemberIds.has(id);
  });

  // Step 4: Log the results
  // console.log("All Members", allMembers);
  // console.log("Unique Existing Members", uniqueMembers);
  // console.log("Final Members after excluding existing", finalMembers);

  const memberOptions = useMemo(() => {
    if (!finalMembers || !Array.isArray(finalMembers)) return [];

    return finalMembers.map((member) => ({
      value: member.employeeID,
      label: member.name || `${member.firstName} ${member.lastName}`.trim(),
      email: member.email,
      firstName: member.firstName,
      lastName: member.lastName,
      id: member.employeeID,
      designation: member.designation || "Not specified",
    }));
  }, [finalMembers]);

  const availableMembers = useMemo(() => {
    return memberOptions.filter(
      (member) =>
        !selectedMembers.some((selected) => selected.value === member.value) &&
        (searchQuery === "" ||
          member.label.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [memberOptions, selectedMembers, searchQuery]);

  const validateForm = () => {
    const errors = {};
    if (!teamName.trim()) errors.teamName = "Team name is required";
    if (selectedMembers.length === 0)
      errors.teamMembers = "Please select at least one team member";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    setFormErrors({});
    setSuccessMessage("");

    const formattedTeamMembers = selectedMembers.map((member) => ({
      memberId: member.value,
      memberName: member.label,
      role: member.designation,
      email: member.email,
    }));

    const teamData = {
      projectId,
      teamName: teamName.trim(),
      projectName: project?.data?.name || "N/A",
      teamLeadName: project?.data?.teamLeadName?.trim() || "N/A",
      teamLeadId: project?.data?.teamLeadId?.trim() || "N/A",
      teamMembers: formattedTeamMembers,
    };



    try {
      const resultAction = await dispatch(createTeam(teamData));

      if (createTeam.fulfilled.match(resultAction)) {
        toast.success(
          resultAction.payload?.message || "Team created successfully!"
        );
        await dispatch(fetchTeamByProjectId(projectId)); // ✅ Only here, after success
        setTeamName("");
        setSelectedMembers([]);
        setSearchQuery("");
        onClose();
      } else {
        throw new Error(
          resultAction.payload?.message || "Failed to create team"
        );
      }
    } catch (err) {
      toast.error(err.message || createTeamError || "Failed to create team");
    } finally {
      setIsLoading(false);
    }
  };

  const addTeamMember = (value) => {
    const selected = memberOptions.find((member) => member.value === value);
    if (selected && !selectedMembers.some((m) => m.value === selected.value)) {
      setSelectedMembers([...selectedMembers, selected]);
      setFormErrors((prev) => ({ ...prev, teamMembers: "" }));
      setSuccessMessage("");
      setSearchQuery(""); // Clear search query after selection
      setIsSelectOpen(true); // Keep dropdown open
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus(); // Refocus on search input
        }
      }, 0);
    }
  };

  const removeTeamMember = (memberToRemove) => {
    setSelectedMembers(
      selectedMembers.filter((member) => member.value !== memberToRemove.value)
    );
    setFormErrors((prev) => ({ ...prev, teamMembers: "" }));
    setSuccessMessage("");
  };

  const handleClose = () => {
    setTeamName("");
    setSelectedMembers([]);
    setFormErrors({});
    setSuccessMessage("");
    setSearchQuery("");
    setIsSelectOpen(false);
    onClose();
    
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSelectOpen(true); // Keep dropdown open while typing
  };

  const handleSelectTriggerClick = () => {
    setIsSelectOpen(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus(); // Focus on search input when trigger is clicked
      }
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <DialogContent className="h-[90vh] max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl p-0 border-none overflow-y-auto max-h-[85vh]">
      <Card className="w-full bg-white border border-gray-200 shadow-lg rounded-xl">
        <CardHeader className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <CardTitle className="text-xl font-bold text-black flex items-center gap-2">
              <Users className="h-6 w-6 text-black" /> Create Team
            </CardTitle>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition-colors"
                aria-label="Cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
                aria-label="Create team"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="inline-block mr-2 animate-spin h-4 w-4" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Check className="inline-block mr-2 h-4 w-4" />
                    Create Team
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label className="block text-sm font-bold text-black mb-2 flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-black" /> Team Name
                  {formErrors.teamName && (
                    <span className="text-xs ml-2 text-red-500">
                      ({formErrors.teamName})
                    </span>
                  )}
                </Label>
                <Input
                  type="text"
                  value={teamName}
                  onChange={(e) => {
                    setTeamName(e.target.value);
                    setFormErrors((prev) => ({ ...prev, teamName: "" }));
                    setSuccessMessage("");
                  }}
                  placeholder="Enter team name"
                  className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-colors"
                />
              </div>
              <div>
                <Label className="block text-sm font-bold text-black mb-2 flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-black" /> Add Member
                  {formErrors.teamMembers && (
                    <span className="text-xs ml-2 text-red-500">
                      ({formErrors.teamMembers})
                    </span>
                  )}
                </Label>
                <Select
                  open={isSelectOpen}
                  onOpenChange={(open) => {
                    setIsSelectOpen(open);
                    if (open && searchInputRef.current) {
                      setTimeout(() => searchInputRef.current.focus(), 0);
                    }
                  }}
                  onValueChange={addTeamMember}
                >
                  <SelectTrigger
                    ref={selectRef}
                    onClick={handleSelectTriggerClick}
                    className={`w-full h-10 border ${
                      formErrors.teamMembers
                        ? "border-red-300"
                        : "border-gray-300"
                    } bg-white text-black focus:ring-indigo-500 relative`}
                  >
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                      Search and add Team members
                    </span>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 max-h-60 overflow-y-auto">
                    <div className="p-2 border-b border-gray-200">
                      <Input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search Team Members"
                        className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-colors"
                        onKeyDown={(e) => e.stopPropagation()} // Prevent dropdown from closing on keypress
                      />
                    </div>
                    <div className="p-2 text-sm text-green-600 font-medium border-b border-gray-200">
                      Available Members ({availableMembers.length} )
                    </div>
                    {isLoading ? (
                      <div className="p-2 text-sm text-black">Loading...</div>
                    ) : availableMembers.length === 0 ? (
                      <div className="p-2 text-sm text-black">
                        {searchQuery
                          ? "No matching team members found"
                          : "No team members available"}
                      </div>
                    ) : (
                      availableMembers.map((member) => (
                        <SelectItem
                          key={member.value}
                          value={member.value}
                          className="text-black hover:bg-gray-100 focus:bg-gray-100"
                        >
                          {member.label}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold text-black flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-black" /> Selected Team Members
                </h3>
                <span className="text-sm text-green-600 font-medium">
                  Total: {selectedMembers.length}{" "}
                  {selectedMembers.length === 1 ? "member" : "members"}
                </span>
              </div>
              {selectedMembers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-black bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Users className="h-8 w-8 mb-2 text-gray-400" />
                  <p className="text-sm font-medium">
                    No team members selected
                  </p>
                  <p className="text-xs text-gray-400">
                    Add team members using the selector above
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-4">
                  {selectedMembers.map((member) => (
                    <div
                      key={member.value}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium text-black">
                          {member.label}
                        </div>
                        <div className="text-sm text-black">{member.email}</div>
                        <div className="text-sm text-black">
                          {member.designation}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeTeamMember(member)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        aria-label={`Remove ${member.label}`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {formErrors.general && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600 font-medium">
                  {formErrors.general}
                </p>
              </div>
            )}
            {successMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-600 font-medium">
                  {successMessage}
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </DialogContent>
  );
}
