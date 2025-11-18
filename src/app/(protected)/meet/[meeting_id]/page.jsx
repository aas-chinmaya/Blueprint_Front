

// app/meeting/[Id]/page.js
"use client";

import { useParams } from "next/navigation";
import MeetingController from "@/modules/meet/components/MeetingController";

export default function MeetingControllerPage() {
  const { meeting_id } = useParams(); // Extract meeting ID from URL
  return <MeetingController meetingId={meeting_id} />;
}






