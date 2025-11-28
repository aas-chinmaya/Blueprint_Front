






"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  createMeeting,
  resetCreateStatus,
  clearError,
} from "@/modules/meet/slices/meetSlice";

// Changed: Use fetchAllEmployees instead of fetchAllAdminEmployees
import { fetchAllEmployees } from "@/modules/user/slices/employeeSlice";
import { getContactById } from "@/modules/marketing/slices/contactSlice";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Clock, Link, MapPin, Check, Users } from "lucide-react";

export default function ScheduleMeeting({ meetingRefs, contactId, onClose }) {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { selectedContact } = useSelector((state) => state.contact);

  // Changed: Use allEmployees instead of adminEmployees
  const { allEmployees, loading: employeesLoading, error: employeeError } = useSelector(
    (state) => state.employee
  );

  const dropdownRef = useRef(null);

  // Auto-detect reference from URL
  const urlRef = (() => {
    if (meetingRefs) return null;
    for (const [key, value] of searchParams.entries()) {
      if (key.endsWith("Id")) {
        const cleanKey = key.replace(/Id$/, "");
        return `${cleanKey}:${value}`;
      }
    }
    return null;
  })();

  const finalRef = meetingRefs || urlRef;

  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    mode: "offline",
    meetingLink: "",
    agenda: "",
    contactId: contactId,
    reference: finalRef,
    ourParty: [],
    contactParty: [],
  });

  const [duration, setDuration] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(clearError());
    dispatch(resetCreateStatus());
    if (contactId) {
      dispatch(getContactById(contactId));
    }

    // Changed: Fetch ALL employees (not just admin)
    dispatch(fetchAllEmployees());
  }, [dispatch, contactId, finalRef]);

  // Fixed: Use fullName directly if exists, fallback safely
  useEffect(() => {
    if (selectedContact) {
      const fullName =
        selectedContact.fullName?.trim() ||
        `${selectedContact.firstName || ""} ${selectedContact.lastName || ""}`.trim() ||
        "Unnamed Contact";

      setForm((prev) => ({
        ...prev,
        contactParty: [
          {
            contactId: selectedContact.contactId,
            fullName,
            email: selectedContact.email || "",
            phone: selectedContact.phone || "",
          },
        ],
      }));
    }
  }, [selectedContact]);

  // Duration calculation
  useEffect(() => {
    if (form.startTime && form.endTime) {
      const [sh, sm] = form.startTime.split(":");
      const [eh, em] = form.endTime.split(":");
      const start = new Date(2025, 0, 1, sh, sm);
      const end = new Date(2025, 0, 1, eh, em);
      if (end > start) {
        setDuration(Math.round((end - start) / 60000));
      } else {
        setDuration(0);
      }
    }
  }, [form.startTime, form.endTime]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasOrganizer = form.ourParty.some((p) => p.role === "Organizer");
  const dropdownPlaceholder = hasOrganizer ? "Search and add attendees" : "Select Organizer";
  const searchPlaceholder = hasOrganizer ? "Search Attendees" : "Search Organizer";

  // Filter all employees (not just admin)
  const selectedemployeeIDs = form.ourParty.map((p) => p.employeeID);
  const filteredEmployees = Array.isArray(allEmployees)
    ? allEmployees.filter(
        (employee) =>
          !selectedemployeeIDs.includes(employee.employeeID) &&
          ((employee.firstName?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
           (employee.lastName?.toLowerCase() || "").includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleEmployeeSelect = (employee) => {
    setForm((prev) => ({
      ...prev,
      ourParty: [
        ...prev.ourParty,
        {
          employeeID: employee.employeeID,
          name: `${employee.firstName} ${employee.lastName}`.trim(),
          email: employee.email || "",
          role: prev.ourParty.some((p) => p.role === "Organizer") ? "Attendee" : "Organizer",
        },
      ],
    }));
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const handleRemove = (id) => {
    setForm((prev) => ({
      ...prev,
      ourParty: prev.ourParty.filter((p) => p.employeeID !== id),
    }));
  };

  const handleReset = () => {
    const contactParty = selectedContact
      ? [
          {
            contactId: selectedContact.contactId,
            fullName:
              selectedContact.fullName?.trim() ||
              `${selectedContact.firstName || ""} ${selectedContact.lastName || ""}`.trim() ||
              "Unnamed Contact",
            email: selectedContact.email || "",
            phone: selectedContact.phone || "",
          },
        ]
      : [];

    setForm({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      mode: "offline",
      meetingLink: "",
      agenda: "",
      contactId: contactId,
      reference: finalRef,
      ourParty: [],
      contactParty,
    });
    setDuration(0);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const required =
      form.title &&
      form.date &&
      form.startTime &&
      form.endTime &&
      form.ourParty.some((p) => p.role === "Organizer");
    const onlineLink = form.mode === "online" ? form.meetingLink : true;
    if (!required || !onlineLink) {
      toast.error("Please fill all required fields, including an Organizer.");
      return;
    }

    const payload = {
      title: form.title,
      agenda: form.agenda,
      contactId: form.contactId || null,
      date: form.date,
      startTime: `${form.date}T${form.startTime}:00.000Z`,
      endTime: `${form.date}T${form.endTime}:00.000Z`,
      duration,
      mode: form.mode,
      meetingLink: form.mode === "online" ? form.meetingLink : null,
      reference: form.reference,
      ourParty: form.ourParty.map(({ employeeID, name, email, role }) => ({
        employeeID,
        name,
        email,
        role,
      })),
      contactParty: form.contactParty.map(({ contactId, fullName, email, phone }) => ({
        contactId,
        fullName,
        email,
        phone,
      })),
    };

    setIsSubmitting(true);
    const result = await dispatch(createMeeting(payload));
    setIsSubmitting(false);

    if (result.type.endsWith("fulfilled")) {
      toast.success("Meeting scheduled successfully!");
      onClose();
    } else {
      toast.error(result.error?.message || "Failed to schedule meeting. Please try again.");
    }
  };

  const isValid =
    form.title &&
    form.date &&
    form.startTime &&
    form.endTime &&
    form.ourParty.some((p) => p.role === "Organizer") &&
    (form.mode === "offline" || form.meetingLink);

  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow-sm">
      {/* Buttons (Top Right) */}
      <div className="flex justify-end gap-3 mb-4">
        <Button
          onClick={handleReset}
          className="px-3 py-1 bg-green-600 text-white rounded-md text-xs font-medium hover:bg-green-700 transition-colors"
          aria-label="Reset"
        >
          Reset
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={!isValid || isSubmitting}
          className="px-3 py-1 bg-green-600 text-white rounded-md text-xs font-medium hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors"
          aria-label="Schedule Meeting"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="inline-block mr-1 animate-spin h-3 w-3" />
              Scheduling...
            </>
          ) : (
            <>
              <Check className="inline-block mr-1 h-3 w-3" />
              Schedule Meeting
            </>
          )}
        </Button>
      </div>

      {/* Reference Chip */}
      {form.reference && (
        <div className="mb-4 inline-flex px-2 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-900 shadow-sm">
          {form.reference}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
        {/* Left Column: Form Fields */}
        <div className="space-y-4">
          {/* TITLE */}
          <div>
            <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gray-900" /> Title
              <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Q4 Sales Review"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
              maxLength="100"
            />
          </div>

          {/* DATE */}
          <div>
            <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gray-900" /> Date
              <span className="text-red-500">*</span>
            </Label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
            />
          </div>

          {/* TIME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-900" /> Start Time
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="time"
                value={form.startTime}
                onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
              />
            </div>
            <div>
              <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-900" /> End Time
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="time"
                value={form.endTime}
                onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
              />
            </div>
          </div>

          {/* DURATION */}
          {duration > 0 && (
            <div className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full shadow-sm">
              <Clock className="h-3 w-3" />
              {duration} min
            </div>
          )}

          {/* MODE */}
          <div>
            <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gray-900" /> Mode
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={form.mode}
              onValueChange={(v) =>
                setForm({
                  ...form,
                  mode: v,
                  meetingLink: v === "offline" ? "" : form.meetingLink,
                })
              }
              className="mt-1"
            >
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <RadioGroupItem value="offline" id="offline" className="h-3 w-3 text-green-600" />
                  <Label
                    htmlFor="offline"
                    className="cursor-pointer flex items-center gap-1 text-gray-900 text-xs hover:text-gray-700 transition-colors"
                  >
                    <MapPin className="h-3 w-3" /> Offline
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="online" id="online" className="h-3 w-3 text-green-600" />
                  <Label
                    htmlFor="online"
                    className="cursor-pointer flex items-center gap-1 text-gray-900 text-xs hover:text-gray-700 transition-colors"
                  >
                    <Link className="h-3 w-3" /> Online
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* ONLINE LINK */}
          {form.mode === "online" && (
            <div>
              <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-gray-900" /> Join Link
                <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="https://zoom.us/j/..."
                value={form.meetingLink}
                onChange={(e) => setForm({ ...form, meetingLink: e.target.value })}
                className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
              />
            </div>
          )}

          {/* AGENDA */}
          <div>
            <Label className="block text-xs font-bold text-gray-900 mb-1 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gray-900" /> Agenda
              <span className="text-red-500">*</span>
            </Label>
            <Textarea
              placeholder="1. Review targets, 2. Demo new features..."
              rows={4}
              maxLength="500"
              className="w-full rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors min-h-[20dvh]"
              value={form.agenda}
              onChange={(e) => setForm({ ...form, agenda: e.target.value })}
            />
            <div className="text-xs text-gray-600 mt-1">{form.agenda.length}/500</div>
          </div>
        </div>

        {/* Right Column: Attendees */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
            <Users className="h-4 w-4 text-gray-900" /> Attendees
          </h3>

          <div className="space-y-1.5" ref={dropdownRef}>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                disabled={employeesLoading}
                className={`w-full h-8 px-2 rounded-md border ${
                  employeesLoading
                    ? "border-gray-300 bg-gray-100 cursor-not-allowed"
                    : "border-gray-300 focus:ring-2 focus:ring-green-500"
                } bg-white text-gray-900 text-xs flex items-center justify-between transition-colors`}
              >
                <span>{employeesLoading ? "Loading..." : dropdownPlaceholder}</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  <div className="p-2 border-b border-gray-200">
                    <Input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={searchPlaceholder}
                      className="w-full h-8 px-2 rounded-md border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-colors"
                    />
                  </div>
                  {employeeError && (
                    <div className="p-2 text-xs text-red-600">{employeeError}</div>
                  )}
                  {filteredEmployees.length === 0 && !employeesLoading && (
                    <div className="p-2 text-xs text-gray-900">
                      {searchQuery ? "No matching employees" : "No employees available"}
                    </div>
                  )}
                  {filteredEmployees.map((employee) => (
                    <button
                      key={employee.employeeID}
                      onClick={() => handleEmployeeSelect(employee)}
                      className="w-full px-2 py-1 text-left text-xs text-gray-900 hover:bg-gray-100 focus:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium">{`${employee.firstName} ${employee.lastName}`}</div>
                      <div className="text-xs text-gray-600">{employee.email || "No email"}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Display selected Attendees */}
            {form.ourParty.length === 0 && form.contactParty.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm">
                <Users className="h-6 w-6 mb-2 text-gray-400" />
                <p className="text-xs font-medium text-gray-600">No attendees selected</p>
                {!hasOrganizer && (
                  <p className="text-xs text-red-600 font-medium mt-1">Choose Organizer</p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {form.contactParty.map((party) => (
                  <div
                    key={party.contactId}
                    className="p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-0.5"
                  >
                    <p className="text-xs font-medium text-gray-900">{party.fullName}</p>
                    <p className="text-xs text-gray-600">Contact</p>
                  </div>
                ))}
                {form.ourParty.map((party) => (
                  <div
                    key={party.employeeID}
                    className={`group relative p-2 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 space-y-0.5 ${
                      party.role === "Organizer"
                        ? "bg-green-50 border-green-200 hover:bg-green-100"
                        : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(party.employeeID)}
                      className="absolute top-1 right-1 text-green-500 hover:text-green-700 hover:bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Remove ${party.name}`}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <p className="text-xs font-medium text-gray-900">{party.name}</p>
                    <p className="text-xs text-gray-600">{party.role}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}