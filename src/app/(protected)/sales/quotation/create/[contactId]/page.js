"use client";

import { useParams, useSearchParams } from "next/navigation";
import CreateQuotationForm from "@/modules/sales/components/CreateQuotationForm";

export default function CreateQuotationPage() {
  const { contactId } = useParams(); // from dynamic route
  const searchParams = useSearchParams();
  const meetingId = searchParams.get("meetingId"); // from ?meetingId=123

  // ✅ Here you can render your component and pass both params
  return (
    <div className="p-6 space-y-4">
     <CreateQuotationForm meetingId={meetingId} contactId={contactId}/>
    </div>
  );
}
