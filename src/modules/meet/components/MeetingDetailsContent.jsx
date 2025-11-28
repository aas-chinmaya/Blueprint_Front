

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Link,
  History,
  Check,
  XCircle,
  RefreshCw,
  Edit3,
  Users,
} from "lucide-react";
import { format } from "date-fns";

export default function MeetingDetailsContent({
  selectedMeeting,
  formatDate,
  formatDateTime,
  hasEndNote,
  canUpdateStatus,
  openStatusUpdateModal,
  setShowReschedule,
  setIsEditing,
}) {
  // Our internal team (Organizer + Attendees)
  const ourParty = selectedMeeting.ourParty || [];

  // External contacts
  const contactParty = selectedMeeting.contactParty || [];

  return (
    <div className="min-h-screen w-full space-y-6">
      {/* ================= ACTION BAR ================= */}
      <div className="w-full flex flex-wrap gap-3 items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
          Meeting Information
        </h2>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
     {selectedMeeting?.meetingStatus?.toLowerCase() !== "completed" && (
  <Button
    className="bg-teal-600 hover:bg-teal-700 text-white flex-1 sm:flex-none"
    onClick={() => setIsEditing(true)}
  >
    <Edit3 className="w-4 h-4 mr-1" /> Edit
  </Button>
)}


          {canUpdateStatus && (
            <>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none"
                onClick={() => openStatusUpdateModal("completed")}
              >
                <Check className="w-4 h-4 mr-1" /> Complete
              </Button>

              <Button
                className="bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-none"
                onClick={() => openStatusUpdateModal("canceled")}
              >
                <XCircle className="w-4 h-4 mr-1" /> Cancel
              </Button>

              <Button
                variant="outline"
                className="border-teal-600 text-teal-700 hover:bg-teal-50 flex-1 sm:flex-none"
                onClick={() => setShowReschedule(true)}
              >
                <RefreshCw className="w-4 h-4 mr-1" /> Reschedule
              </Button>
            </>
          )}
        </div>
      </div>

      {/* ================= MAIN CONTENT (2 Columns) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6">
        {/* LEFT COLUMN — Meeting Info */}
        <div className="space-y-6">
          {/* Basic Info */}
          <section className="text-sm leading-relaxed">
            <div className="grid md:grid-cols-2 gap-3">
                            <p><strong>Meeting Id:</strong> {selectedMeeting.meetingId}</p>

              <p><strong>Date:</strong> {formatDate(selectedMeeting.date)}</p>
              <p>
                <strong>Time:</strong>{" "}
                {format(new Date(selectedMeeting.startTime), "h:mm a")} –{" "}
                {format(new Date(selectedMeeting.endTime), "h:mm a")}
              </p>
              <p><strong>Duration:</strong> {selectedMeeting.duration || 0} mins</p>
              <p>
                <strong>Status:</strong>{" "}
                <Badge
                  variant="outline"
                  className={`ml-1 ${
                    selectedMeeting.meetingStatus === "completed"
                      ? "border-green-500 text-green-700"
                      : selectedMeeting.meetingStatus === "canceled"
                      ? "border-red-500 text-red-700"
                      : "border-yellow-500 text-yellow-700"
                  }`}
                >
                  {selectedMeeting.meetingStatus.charAt(0).toUpperCase() +
                    selectedMeeting.meetingStatus.slice(1)}
                </Badge>
              </p>
              <p>
                <strong>Mode:</strong>{" "}
                <span className="text-teal-700 font-medium capitalize">
                  {selectedMeeting.mode}
                </span>
              </p>
            </div>
          </section>

          {/* Title */}
          {selectedMeeting.agenda && (
            <section>
              <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-gray-600" /> Title
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
                {selectedMeeting.title}
              </p>
            </section>
          )}
          {/* Agenda */}
          {selectedMeeting.agenda && (
            <section>
              <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-gray-600" /> Agenda
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
                {selectedMeeting.agenda}
              </p>
            </section>
          )}

          {/* Meeting Link */}
          {selectedMeeting.mode === "online" && selectedMeeting.meetingLink && (
            <section>
              <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <Link className="w-5 h-5 text-gray-600" /> Meeting Link
              </h3>
              <a
                href={selectedMeeting.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-700 underline break-all"
              >
                {selectedMeeting.meetingLink}
              </a>
            </section>
          )}

          {/* End Note */}
          {hasEndNote && selectedMeeting.endNote && (
            <section>
              <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-gray-600" /> End Note
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
                {selectedMeeting.endNote}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Updated: {formatDateTime(selectedMeeting.updatedAt)}
              </p>
            </section>
          )}

          {/* ================= ATTENDEES ================= */}
          <section>
            <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-gray-600" /> Attendees
            </h3>

            {(ourParty.length > 0 || contactParty.length > 0) ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {/* === Our Team (Organizer + Attendees) === */}
                {ourParty.map((person) => (
                  <div
                    key={person.employeeID || person._id}
                    className={`p-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow text-center space-y-1 ${
                      person.role === "Organizer"
                        ? "bg-green-50 border-green-300"
                        : "bg-blue-50 border-blue-300"
                    }`}
                  >
                    <p className="text-xs font-semibold text-gray-900 truncate">
                      {person.name || "Unknown User"}
                    </p>
                    <p className={`text-xs font-medium ${
                      person.role === "Organizer" ? "text-green-700" : "text-blue-700"
                    }`}>
                      {person.role}
                    </p>
                  </div>
                ))}

                {/* === External Contacts === */}
                {contactParty.map((contact, index) => (
                  <div
                    key={contact.contactId || index}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center space-y-1"
                  >
                    <p className="text-xs font-semibold text-gray-900 truncate">
                      {contact.fullName || "Unknown Contact"}
                    </p>
                    <p className="text-xs text-gray-600">Contact</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No attendees listed</p>
            )}
          </section>
        </div>

        {/* RIGHT COLUMN — History */}
        <aside className="lg:border-l lg:pl-6 space-y-4 text-sm">
          <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2 mb-3">
            <History className="w-5 h-5" /> History
          </h3>
          {selectedMeeting.history?.length > 0 ? (
            selectedMeeting.history.map((event, i) => (
              <div key={i} className="border-l-2 border-teal-500 pl-4 py-1">
                <p className="font-medium text-gray-700">
                  {event.action === "created"
                    ? "Meeting Created"
                    : event.action.charAt(0).toUpperCase() + event.action.slice(1)}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDateTime(event.updatedAt)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No history available.</p>
          )}
        </aside>
      </div>
    </div>
  );
}