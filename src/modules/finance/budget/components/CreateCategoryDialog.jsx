
"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addBudgetCategory } from "@/modules/finance/budget/slices/budgetCategorySlice";

export function CreateCategoryDialog({ open, BudgetAccount, onOpenChange }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.budgetCategory);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestedCategories = [
    "Analysis",
    "Design",
    "Development",
    "Testing & QA",
    "Deployment & Infrastructure",
    "Maintenance & Support",
    "Documentation",
    "Research",
  ];

  const filteredSuggestions = suggestedCategories.filter(
    (cat) => cat.toLowerCase().includes(name.toLowerCase()) && name.trim() !== ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const payload = {
      accountId:  BudgetAccount?.accountId, // ✅ FIXED here
      name: name.trim(),
      description: description.trim(),
    };

    console.log("Submitting payload:", payload); // 🧩 Debug check

    dispatch(addBudgetCategory(payload)).then((res) => {
      if (!res.error) {
        resetForm();
        onOpenChange(false);
      }
    });
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setShowSuggestions(false);
    // dispatch(clearError());
  };

  useEffect(() => {
    if (!open) resetForm();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Category</DialogTitle>
            <DialogDescription>
              Enter a name and brief description for your category.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Category Name */}
            <div className="relative">
              <Label htmlFor="categoryName">Category Name</Label>
              <Input
                id="categoryName"
                placeholder="e.g., Development"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setShowSuggestions(true);
                }}
                required
              />
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-sm max-h-40 overflow-auto">
                  <Label className="px-2 py-1 text-xs text-muted-foreground">
                    Suggestions
                  </Label>
                  <ul>
                    {filteredSuggestions.map((cat) => (
                      <li
                        key={cat}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setName(cat);
                          setShowSuggestions(false);
                        }}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="categoryDesc">Description (max 100 charactor.)</Label>
              <textarea
                id="categoryDesc"
                placeholder="description"
                 maxLength={100}
                value={description}
               
                onChange={(e) => {
  const value = e.target.value;
  if (value.length <= 100) { // for example, 100 characters max
    setDescription(value);
  }
}}

                className="border rounded p-2 resize-none w-full min-h-[80px]"
              />
              <p className="text-xs text-muted-foreground">
                {description.length}/100 charactor
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetForm();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}



