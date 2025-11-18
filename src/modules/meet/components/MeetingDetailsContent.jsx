

// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {

//   FileText,
//   Link,
//   History,
//   Check,
//   XCircle,
//   RefreshCw,
//   Edit3,
//   Users,
// } from "lucide-react";
// import { format } from "date-fns";

// export default function MeetingDetailsContent({
//   selectedMeeting,
//   formatDate,
//   formatDateTime,
//   hasEndNote,
//   canUpdateStatus,
//   openStatusUpdateModal,
//   setShowReschedule,
//   setIsEditing,
// }) {
//   // Extract Organizer (only one with role: "Organizer")
//   const organizer = selectedMeeting.ourParty?.find((party) => party.role === "Organizer") || null;

//   // Contact Party (optional)
//   const contactParty = selectedMeeting.contactParty || [];

//   return (
//     <div className="min-h-screen w-full space-y-6">
//       {/* ================= ACTION BAR ================= */}
//       <div className="w-full flex flex-wrap gap-3 items-center justify-between border-b pb-4">
//         <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
//           Meeting Information
//         </h2>

//         <div className="flex flex-wrap gap-2 w-full sm:w-auto">
//           <Button
//             className="bg-teal-600 hover:bg-teal-700 text-white flex-1 sm:flex-none"
//             onClick={() => setIsEditing(true)}
//           >
//             <Edit3 className="w-4 h-4 mr-1" /> Edit
//           </Button>

//           {canUpdateStatus && (
//             <>
//               <Button
//                 className="bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none"
//                 onClick={() => openStatusUpdateModal("completed")}
//               >
//                 <Check className="w-4 h-4 mr-1" /> Complete
//               </Button>

//               <Button
//                 className="bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-none"
//                 onClick={() => openStatusUpdateModal("canceled")}
//               >
//                 <XCircle className="w-4 h-4 mr-1" /> Cancel
//               </Button>

//               <Button
//                 variant="outline"
//                 className="border-teal-600 text-teal-700 hover:bg-teal-50 flex-1 sm:flex-none"
//                 onClick={() => setShowReschedule(true)}
//               >
//                 <RefreshCw className="w-4 h-4 mr-1" /> Reschedule
//               </Button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ================= MAIN CONTENT (2 Columns) ================= */}
//       <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6">
//         {/* LEFT COLUMN — Meeting Info */}
//         <div className="space-y-6">
//           {/* Basic Info */}
//           <section className="text-sm leading-relaxed">
//             <div className="grid md:grid-cols-2 gap-3">
//               <p><strong>Date:</strong> {formatDate(selectedMeeting.date)}</p>
//               <p>
//                 <strong>Time:</strong>{" "}
//                 {format(new Date(selectedMeeting.startTime), "h:mm a")} –{" "}
//                 {format(new Date(selectedMeeting.endTime), "h:mm a")}
//               </p>
//               <p><strong>Duration:</strong> {selectedMeeting.duration || 0} mins</p>
//               <p>
//                 <strong>Status:</strong>{" "}
//                 <Badge
//                   variant="outline"
//                   className={`ml-1 ${
//                     selectedMeeting.meetingStatus === "completed"
//                       ? "border-green-500 text-green-700"
//                       : selectedMeeting.meetingStatus === "canceled"
//                       ? "border-red-500 text-red-700"
//                       : "border-yellow-500 text-yellow-700"
//                   }`}
//                 >
//                   {selectedMeeting.meetingStatus.charAt(0).toUpperCase() +
//                     selectedMeeting.meetingStatus.slice(1)}
//                 </Badge>
//               </p>
//               <p>
//                 <strong>Mode:</strong>{" "}
//                 <span className="text-teal-700 font-medium">
//                   {selectedMeeting.mode}
//                 </span>
//               </p>
//             </div>
//           </section>

       

//           {/* Agenda */}
//           {selectedMeeting.agenda && (
//             <section>
//               <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
//                 <FileText className="w-5 h-5 text-gray-600" /> Agenda
//               </h3>
//               <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
//                 {selectedMeeting.agenda}
//               </p>
//             </section>
//           )}

//           {/* Meeting Link */}
//           {selectedMeeting.mode === "online" && selectedMeeting.meetingLink && (
//             <section>
//               <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
//                 <Link className="w-5 h-5 text-gray-600" /> Meeting Link
//               </h3>
//               <a
//                 href={selectedMeeting.meetingLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-cyan-700 underline break-all"
//               >
//                 {selectedMeeting.meetingLink}
//               </a>
//             </section>
//           )}

//           {/* End Note */}
//           {hasEndNote && (
//             <section>
//               <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
//                 <FileText className="w-5 h-5 text-gray-600" /> End Note
//               </h3>
//               <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
//                 {selectedMeeting.endNote}
//               </p>
//               <p className="text-xs text-gray-500 mt-2">
//                 Updated: {formatDateTime(selectedMeeting.updatedAt)}
//               </p>
//             </section>
//           )}
//              {/* Attendees (Organizer + Contact Party) */}
//           <section>
//             <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
//               <Users className="w-5 h-5 text-gray-600" /> Attendees
//             </h3>
//             {organizer || contactParty.length > 0 ? (
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
//                 {/* Contact Party */}
//                 {contactParty.map((party, index) => (
//                   <div
//                     key={index}
//                     className="p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-0.5"
//                   >
//                     <p className="text-xs font-medium text-gray-900">
//                       {party.fullName ||  "Unknown Contact"}
//                     </p>
//                     <p className="text-xs text-gray-600">Contact</p>
//                   </div>
//                 ))}
//                 {/* Organizer */}
//                 {organizer && (
//                   <div
//                     className="p-2 bg-green-50 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-0.5"
//                   >
//                     <p className="text-xs font-medium text-gray-900">
//                       {organizer.name || organizer.userId || "Unknown Organizer"}
//                     </p>
//                     <p className="text-xs text-gray-600">Organizer</p>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <p className="text-xs text-gray-600">No attendees selected</p>
//             )}
//           </section>


//         </div>

//         {/* RIGHT COLUMN — History */}
//         <aside className="lg:border-l lg:pl-6 space-y-3 text-sm">
//           <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2 mb-2">
//             <History className="w-5 h-5" /> History
//           </h3>
//           {selectedMeeting.history?.length ? (
//             selectedMeeting.history.map((event, i) => (
//               <div key={i} className="border-l-2 border-teal-500 pl-3">
//                 <p className="font-medium text-gray-700">
//                   {event.action === "created" ? "Meeting Created" : event.action.charAt(0).toUpperCase() + event.action.slice(1)}
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   {formatDateTime(event.updatedAt)}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No history available.</p>
//           )}
//         </aside>
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Link, History, Check, XCircle, RefreshCw, Edit3, Users } from "lucide-react";

export default function MeetingDetailsContent({
  selectedMeeting,
  formatDate,
  formatTime,
  formatDateTime,
  hasEndNote,
  canUpdateStatus,
  isFinalStatus,
  openStatusUpdateModal,
  setShowReschedule,
  setIsEditing,
}) {
  const organizer = selectedMeeting.ourParty?.find((p) => p.role === "Organizer") || null;
  const contactParty = selectedMeeting.contactParty || [];

  return (
    <div className="space-y-6">
      {/* ACTION BAR */}
      <div className="flex flex-wrap gap-3 items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold text-gray-800">Meeting Information</h2>
        <div className="flex flex-wrap gap-2">
          {!isFinalStatus && (
            <>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 className="w-4 h-4 mr-1" /> Edit
              </Button>

              {canUpdateStatus && (
                <>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => openStatusUpdateModal("completed")}
                  >
                    <Check className="w-4 h-4 mr-1" /> Complete
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => openStatusUpdateModal("canceled")}
                  >
                    <XCircle className="w-4 h-4 mr-1" /> Cancel
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-700 hover:bg-teal-50"
                    onClick={() => setShowReschedule(true)}
                  >
                    <RefreshCw className="w-4 h-4 mr-1" /> Reschedule
                  </Button>
                </>
              )}
            </>
          )}
          {isFinalStatus && (
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">
              Meeting Closed
            </Badge>
          )}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6">
        <div className="space-y-6">
          <section className="text-sm">
            <div className="grid md:grid-cols-2 gap-3">
              <p><strong>Date:</strong> {formatDate(selectedMeeting.date)}</p>
              <p>
                <strong>Time:</strong>{" "}
                {formatTime(selectedMeeting.startTime)} – {formatTime(selectedMeeting.endTime)}
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
                  {selectedMeeting.meetingStatus.charAt(0).toUpperCase() + selectedMeeting.meetingStatus.slice(1)}
                </Badge>
              </p>
              <p>
                <strong>Mode:</strong>{" "}
                <span className="text-teal-700 font-medium">{selectedMeeting.mode}</span>
              </p>
            </div>
          </section>

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

          {hasEndNote && (
            <section>
              <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-gray-600" /> End Note
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3">
                {selectedMeeting.endNote}
              </p>
              {/* <p className="text-xs text-gray-500 mt-2">
                Updated: {formatDateTime(selectedMeeting.updatedAt)}
              </p> */}
            </section>
          )}

          <section>
            <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <Users className="w-5 h-5 text-gray-600" /> Attendees
            </h3>
            {organizer || contactParty.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {contactParty.map((p, i) => (
                  <div key={i} className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs font-medium text-gray-900">{p.fullName || "Contact"}</p>
                    <p className="text-xs text-gray-600">Contact</p>
                  </div>
                ))}
                {organizer && (
                  <div className="p-2 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs font-medium text-gray-900">
                      {organizer.name || organizer.userId || "Organizer"}
                    </p>
                    <p className="text-xs text-gray-600">Organizer</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-gray-600">No attendees</p>
            )}
          </section>
        </div>

        <aside className="lg:border-l lg:pl-6 space-y-3 text-sm">
          <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2 mb-2">
            <History className="w-5 h-5" /> History
          </h3>
          {selectedMeeting.history?.length ? (
            selectedMeeting.history.map((event, i) => (
              <div key={i} className="border-l-2 border-teal-500 pl-3">
                <p className="font-medium text-gray-700">
                  {event.action === "created" ? "Meeting Created" : event.action.charAt(0).toUpperCase() + event.action.slice(1)}
                </p>
                <p className="text-xs text-gray-500">{formatDateTime(event.updatedAt)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No history</p>
          )}
        </aside>
      </div>
    </div>
  );
}