"use client";

import { useParams, useSearchParams } from "next/navigation";
import EditQuotationForm from "@/modules/sales/components/QuotationEditForm";

export default function CreateQuotationPage() {
  const { contactId } = useParams(); // from dynamic route
  const searchParams = useSearchParams();
  const meetingId = searchParams.get("meetingId"); // from ?meetingId=123

  // ✅ Here you can render your component and pass both params
  return (
    <div className="p-6 space-y-4">
     <EditQuotationForm meetingId={meetingId} quotationNumber={quotationNumber} contactId={contactId}/>
    </div>
  );
}
