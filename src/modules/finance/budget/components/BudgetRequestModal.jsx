
"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBudgetRequest, updateBudgetRequestStatus } from "@/modules/finance/budget/slices/budgetRequestSlice";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function BudgetRequestModal({ open, onOpenChange, requestData, mode }) {
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const [isEditMode, setIsEditMode] = useState(mode === "edit");
  const [formData, setFormData] = useState({
    title: requestData?.title || "",
    description: requestData?.description || "",
    requestedAmount: requestData?.requestedAmount || 0,
    currency: requestData?.currency || "INR",
    requestType: requestData?.requestType || "General",
    remarks: "",
  });

  const handleFormChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleUpdate = async () => {
    await dispatch(
      updateBudgetRequest({
        requestId: requestData.requestId,
        data: { ...formData, remarks: formData.remarks || "" },
      })
    );
    setIsEditMode(false); // Return to view mode after saving
  };

  const handleStatusChange = async (status) => {
    await dispatch(
      updateBudgetRequestStatus({
        requestId: requestData.requestId,
        status,
        remarks: formData.remarks || "",
        userId: currentUser?.id,
      })
    );
    onOpenChange(false);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "success";
      case "rejected":
        return "destructive";
      case "revision":
        return "secondary";
      default:
        return "default";
    }
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-5xl overflow-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            {isEditMode ? "Edit Budget Request" : "Budget Request Details"}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4 text-gray-800">
            <div>
              <p className="text-sm text-gray-500">Request ID</p>
              <p className="text-lg font-mono text-gray-700">{requestData.requestId}</p>
            </div>

            <div>
              <Label>Title</Label>
              {isEditMode ? (
                <Input
                  value={formData.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-lg font-semibold text-gray-800">{formData.title}</p>
              )}
            </div>

            <div>
              <Label>Description</Label>
              {isEditMode ? (
                <>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => {
                      const words = e.target.value.split(/\s+/).filter(Boolean);
                      if (words.length <= 500) handleFormChange("description", e.target.value);
                    }}
                    className="w-full min-h-[100px] resize-y"
                    placeholder="Enter description..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.description.split(/\s+/).filter(Boolean).length} / 500 words
                  </p>
                </>
              ) : (
                <p className="text-base text-gray-700">{formData.description}</p>
              )}
            </div>

            <div>
              <Label>Amount</Label>
              {isEditMode ? (
                <Input
                  type="number"
                  value={formData.requestedAmount}
                  onChange={(e) => handleFormChange("requestedAmount", Number(e.target.value))}
                  className="w-full"
                />
              ) : (
                <p className="text-lg font-semibold text-gray-800">
                  {formatCurrency(formData.requestedAmount)}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge variant={getStatusColor(requestData.status)} className="capitalize">
                {requestData.status}
              </Badge>
            </div>

            {requestData.status === "created" && (
              <div className="space-y-3">
                <Label>Remarks (optional, max 500 words)</Label>
                <Textarea
                  placeholder="Add remarks..."
                  value={formData.remarks}
                  onChange={(e) => {
                    const words = e.target.value.split(/\s+/).filter(Boolean);
                    if (words.length <= 500) handleFormChange("remarks", e.target.value);
                  }}
                  className="w-full min-h-[120px] resize-y"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.remarks.split(/\s+/).filter(Boolean).length} / 500 words
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => handleStatusChange("approved")}
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleStatusChange("rejected")}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleStatusChange("revision")}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Request Revision
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-md space-y-2 overflow-y-auto max-h-[70vh]">
            <h3 className="font-semibold text-gray-800 mb-3">Action History</h3>
            {requestData.actionHistory?.length > 0 ? (
              requestData.actionHistory.map((act, idx) => (
                <div key={idx} className="p-3 border rounded-md bg-white">
                  <p className="text-sm text-gray-500"><strong>Action:</strong> {act.action}</p>
                  <p className="text-sm text-gray-500"><strong>By:</strong> {act.by}</p>
                  <p className="text-sm text-gray-500"><strong>Remarks:</strong> {act.remarks}</p>
                  <p className="text-xs text-gray-400">{new Date(act.at).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No actions yet.</p>
            )}
          </div>
        </div>

        <DialogFooter className="mt-6 flex flex-wrap gap-2 justify-end">
          {isEditMode ? (
            <>
              <Button
                onClick={handleUpdate}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditMode(false);
                  setFormData({
                    title: requestData?.title || "",
                    description: requestData?.description || "",
                    requestedAmount: requestData?.requestedAmount || 0,
                    currency: requestData?.currency || "INR",
                    requestType: requestData?.requestType || "General",
                    remarks: "",
                  });
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setIsEditMode(true)}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Edit
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}