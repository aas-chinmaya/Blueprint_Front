
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createBudgetEntity } from "@/modules/finance/budget/slices/budgetEntitySlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";

export function AddEntityDialog({ BudgetAccount, open, onOpenChange, categoryId, categoryName }) {
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const accountId = BudgetAccount?.accountId;

  const [entityName, setEntityName] = useState("");
  const [costType, setCostType] = useState("Fixed");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unitCost, setUnitCost] = useState(0);
  const [hours, setHours] = useState(1);
  const [ratePerHour, setRatePerHour] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  // Calculate final amount based on cost type
  useEffect(() => {
    let calculated = 0;
    if (costType === "Fixed") {
      calculated = parseFloat(amount) || 0;
    } else if (costType === "Quantity") {
      calculated = (parseFloat(quantity) || 0) * (parseFloat(unitCost) || 0);
    } else if (costType === "Hourly") {
      calculated = (parseFloat(hours) || 0) * (parseFloat(ratePerHour) || 0);
    }
    setFinalAmount(calculated);
  }, [costType, amount, quantity, unitCost, hours, ratePerHour]);

  useEffect(() => {
    setIsValid(entityName.trim() && finalAmount > 0);
  }, [entityName, finalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    const payload = {
      name: entityName,
      categoryId,
      categoryName,
      costType,
      finalAmount,
      accountId,
      details:
        costType === "Fixed"
          ? { amount: parseFloat(amount) }
          : costType === "Quantity"
          ? { quantity: parseFloat(quantity), unitCost: parseFloat(unitCost) }
          : { hours: parseFloat(hours), ratePerHour: parseFloat(ratePerHour) },
      createdBy: currentUser?.name || "Unknown",
      createdAt: new Date().toISOString(),
    };

    try {
      await dispatch(createBudgetEntity(payload)).unwrap();
      toast.success("Entity created successfully");

      // Reset form
      setEntityName("");
      setCostType("Fixed");
      setAmount(0);
      setQuantity(1);
      setUnitCost(0);
      setHours(1);
      setRatePerHour(0);

      onOpenChange(false);
    } catch (err) {
      toast.error("Failed to create entity");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Budget Entity</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Entity Name */}
            <div className="grid gap-2">
              <Label>Entity Name</Label>
              <Input
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                placeholder="Enter entity name"
                required
              />
            </div>

            {/* Cost Type */}
            <div className="grid gap-2">
              <Label>Cost Type</Label>
              <Select value={costType} onValueChange={setCostType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fixed">Fixed Amount</SelectItem>
                  <SelectItem value="Quantity">Quantity × Unit Cost</SelectItem>
                  <SelectItem value="Hourly">Hourly Rate × Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dynamic Inputs */}
            {costType === "Fixed" && (
              <div className="grid gap-2">
                <Label>Amount</Label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0.01"
                  step="0.01"
                />
              </div>
            )}

            {costType === "Quantity" && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    step="1"
                  />
                </div>
                <div>
                  <Label>Unit Cost</Label>
                  <Input
                    type="number"
                    value={unitCost}
                    onChange={(e) => setUnitCost(e.target.value)}
                    min="0.01"
                    step="0.01"
                  />
                </div>
              </div>
            )}

            {costType === "Hourly" && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Hours</Label>
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    min="0.01"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label>Rate per Hour</Label>
                  <Input
                    type="number"
                    value={ratePerHour}
                    onChange={(e) => setRatePerHour(e.target.value)}
                    min="0.01"
                    step="0.01"
                  />
                </div>
              </div>
            )}

            {/* Final Amount */}
            <div>
              <Label>Final Amount</Label>
              <Input type="text" value={finalAmount.toFixed(2)} readOnly />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Add Entity
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
