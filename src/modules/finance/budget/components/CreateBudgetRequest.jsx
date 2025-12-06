


"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBudgetRequest } from "@/modules/finance/budget/slices/budgetRequestSlice";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CreateBudgetRequest({ projectId, open, onOpenChange }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requestedAmount: 0,
    currency: "INR",
    requestType: "General",
    remarks: "",
  });

  const handleFormChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleCreate = async () => {
    if (!projectId) return alert("Project ID is missing!");
    await dispatch(createBudgetRequest({ projectId, ...formData }));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-5xl overflow-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Create Budget Request</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={formData.title}
              onChange={(e) => handleFormChange("title", e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Label>Description</Label>
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
          </div>
          <div>
            <Label>Amount (INR)</Label>
            <Input
              type="number"
              value={formData.requestedAmount}
              onChange={(e) => handleFormChange("requestedAmount", Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter className="mt-6 flex flex-wrap gap-2 justify-end">
          <Button
            onClick={handleCreate}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Create Request
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}