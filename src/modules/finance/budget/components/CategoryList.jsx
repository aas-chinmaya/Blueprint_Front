



"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBudgetCategories } from "@/modules/finance/budget/slices/budgetCategorySlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit } from "lucide-react";
import { AddEntityDialog } from "@/modules/finance/budget/components/AddEntityDialog";
import { EditCategoryDialog } from "@/modules/finance/budget/components/EditCategoryDialog";
import { CategoryCardModal } from "./CategoryCardModal";
import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CategoryList({ BudgetAccount }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.budgetCategory.categories);

  const [addEntityDialogOpen, setAddEntityDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModalCategory, setSelectedModalCategory] = useState(null);

  const handleOpenAddEntity = (category) => {
    setSelectedCategory(category);
    setAddEntityDialogOpen(true);
  };

  const handleOpenEditCategory = (category) => {
    setEditCategoryId(category.categoryId);
    setEditDialogOpen(true);
  };

  const handleOpenCategoryModal = (category) => {
    setSelectedModalCategory(category);
    setModalOpen(true);
  };

  useEffect(() => {
    if (BudgetAccount?.accountId) {
      dispatch(fetchBudgetCategories(BudgetAccount.accountId));
    }
  }, [BudgetAccount?.accountId, dispatch]);

  return (
    <div className="w-full p-6">
      {categories && categories.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .slice()
            .reverse()
            .map((category) => {
              const entityCount = category.entityIds?.length || 0;
              const isActive = category.isActive;

              return (
                <Card
                  key={category.categoryId}
                  className={`relative cursor-pointer border border-gray-200 rounded-md shadow-sm bg-gradient-to-br ${
                    isActive
                      ? "from-green-50 via-white to-green-100/50"
                      : "from-red-50 via-white to-red-100/50"
                  } transition-none`}
                  onClick={() => handleOpenCategoryModal(category)}
                  title={category.name}
                >
                  {/* Top Action Buttons */}
                  <div
                    className="absolute top-2 right-2 flex items-center gap-2 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenAddEntity(category)}
                            className="bg-green-100 hover:bg-green-100"
                          >
                            <Plus className="h-4 w-4 text-green-700" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add Entity</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenEditCategory(category)}
                            className="bg-blue-100 hover:bg-blue-100"
                          >
                            <Edit className="h-4 w-4 text-blue-700" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit Category</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {/* Card Header */}
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg font-semibold text-gray-800 pr-10 truncate">
                      {category.name}
                    </CardTitle>
                  </CardHeader>

                  {/* Card Body */}
                  <CardContent className="pt-3 space-y-3">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Entities</span>
                      <span className="font-semibold text-gray-800">
                        {entityCount}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Status</span>
                      {isActive ? (
                        <span className="px-2 py-0.5 bg-green-200 text-green-800 rounded-md text-xs font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-red-200 text-red-800 rounded-md text-xs font-medium">
                          Inactive
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Created</span>
                      <span>
                        {category.createdAt
                          ? format(new Date(category.createdAt), "dd MMM yyyy")
                          : "-"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground p-4">
          No categories available.
        </p>
      )}

      {/* Add Entity Dialog */}
      {selectedCategory && (
        <AddEntityDialog
          BudgetAccount={BudgetAccount}
          open={addEntityDialogOpen}
          onOpenChange={setAddEntityDialogOpen}
          categoryId={selectedCategory.categoryId}
          categoryName={selectedCategory.name}
        />
      )}

      {/* Edit Category Dialog */}
      {editCategoryId && (
        <EditCategoryDialog
          BudgetAccount={BudgetAccount}
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          categoryId={editCategoryId}
        />
      )}

      {/* Category Modal */}
      {selectedModalCategory && (
        <CategoryCardModal
          BudgetAccount={BudgetAccount}
          categoryId={selectedModalCategory.categoryId}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      )}
    </div>
  );
}
