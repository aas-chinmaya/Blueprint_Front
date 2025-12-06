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
import {
  getBudgetCategoryById,
  updateBudgetCategory,
  clearError,
} from "@/modules/finance/budget/slices/budgetCategorySlice";

export function EditCategoryDialog({ open, BudgetAccount, onOpenChange, categoryId }) {
  const dispatch = useDispatch();
  const { status, error, category } = useSelector((state) => state.budgetCategory);

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

  // Fetch category details for editing
  useEffect(() => {
    if (categoryId) {
      dispatch(getBudgetCategoryById(categoryId));
    }
  }, [categoryId, dispatch]);

  // Populate form when category data is loaded
  useEffect(() => {
    if (category) {
      setName(category.name || "");
      setDescription(category.description || "");
    }
  }, [category]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setShowSuggestions(false);
    dispatch(clearError());
  };

  useEffect(() => {
    if (!open) resetForm();
  }, [open, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const payload = {
      accountId: BudgetAccount?.accountId,
      name: name.trim(),
      description: description.trim(),
    };

    // Edit mode only
    dispatch(updateBudgetCategory({ id: categoryId, ...payload })).then((res) => {
      if (!res.error) {
        resetForm();
        onOpenChange(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Update the name and description of your category.
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
              <Label htmlFor="categoryDesc">Description (max 100 characters)</Label>
              <textarea
                id="categoryDesc"
                placeholder="Description"
                maxLength={100}
                value={description}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 100) setDescription(value);
                }}
                className="border rounded p-2 resize-none w-full min-h-[80px]"
              />
              <p className="text-xs text-muted-foreground">
                {description.length}/100 characters
              </p>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

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
              {status === "loading" ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
