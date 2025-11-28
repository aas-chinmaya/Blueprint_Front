"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotationsByMeeting,
  clearMeetingQuotations,
} from "@/modules/sales/slices/quotationSlice";
import { Button } from "@/components/ui/button";
import { FileText, Edit2, Eye, Plus, Loader2 } from "lucide-react";

export default function QuotationContent({ meetingId,contactId }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { meetingQuotations, loading } = useSelector(
    (state) => state.quotation
  );

  // === Fetch quotations when meetingId changes ===
  useEffect(() => {
    if (meetingId) {
      dispatch(fetchQuotationsByMeeting(meetingId));
    }
  }, [meetingId, dispatch]);

  // === Cleanup on unmount ===
  useEffect(() => {
    return () => {
      dispatch(clearMeetingQuotations());
    };
  }, [dispatch]);

  // === Handlers ===
  const handleCreate = () => {
    router.push(`/sales/quotation/create/${contactId}`);
  };

  const handleEdit = (quotationNumber) => {
    // Navigate to edit page
    router.push(`/sales/quotation/edit/${meetingQuotations.quotationNumber}`);
  };

  const handleView = (quotationNumber) => {
    // Open in a new tab
    const url = `/quotation/view/${quotationNumber}?contactId=${contactId}`;
    window.open(url, "_blank");
  };

  // === Loading State ===
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-background rounded-xl shadow-md">
        <Loader2 className="h-10 w-10 text-teal-600 animate-spin" />
        <p className="mt-3 text-gray-600">Loading quotations...</p>
      </div>
    );
  }

  // === Render ===
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-teal-600 flex items-center">
          <FileText className="h-6 w-6 mr-2" />
          Quotations
        </h2>
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={handleCreate}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Quotation
        </Button>
      </div>

      {/* No Data */}
      {(!meetingQuotations || meetingQuotations.length === 0) ? (
        <div className="text-center py-12 text-gray-500 border border-dashed border-gray-300 rounded-lg bg-gray-50">
          <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p className="text-gray-600">No quotations found for this meeting.</p>
        </div>
      ) : (
        /* Quotations Grid */
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {meetingQuotations.map((q) => {
            const isDraft = q.status?.toLowerCase() === "draft";
            return (
              <div
                key={q.quotationNumber}
                className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-lg text-teal-700">
                      {q.quotationNumber}
                    </p>
                    <p className="text-sm text-gray-600">{q.clientName}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      isDraft
                        ? "bg-yellow-100 text-yellow-800"
                        : q.status === "draft"
                        ? "bg-green-100 text-green-800"
                        : q.status === "final"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {q.status}
                  </span>
                </div>

                <div className="text-sm text-gray-600 space-y-1 mb-3">
                  <p>Date: {new Date(q.date).toLocaleDateString()}</p>
                  <p>Amount: ₹{q.totalAmount?.toLocaleString()}</p>
                </div>

                <div className="flex justify-end">
                  {isDraft ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      onClick={() => handleEdit(q.quotationNumber)}
                    >
                      <Edit2 className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      onClick={() => handleView(q.quotationNumber)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
