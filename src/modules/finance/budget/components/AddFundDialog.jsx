
"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addBudgetAllocation } from "@/modules/finance/budget/slices/budgetSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";

export function AddFundDialog({ open, accountId, onOpenChange }) {
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Validate: only amount is required
  useEffect(() => {
    const amountNum = parseFloat(amount);
    setIsValid(!isNaN(amountNum) && amountNum > 0);
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const payload = {
      type: "credit", // always credit
      category: "Operations Fund", // default category
      amount: parseFloat(amount),
      by: currentUser.name, // auto-filled
      note: "Fund Added", // default note
      date: new Date().toISOString(),
    };

    try {
      await dispatch(addBudgetAllocation({ accountId, allocationData: payload })).unwrap();
      toast.success("Funds added successfully");
      setAmount("");
      onOpenChange(false);
    } catch (err) {
      // console.error("Error adding fund:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Funds</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0.01"
                step="0.01"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Add Funds
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
