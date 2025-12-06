









"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBudgetCategoryById } from "@/modules/finance/budget/slices/budgetCategorySlice";
import { fetchAllEntitiesByCategoryId } from "@/modules/finance/budget/slices/budgetEntitySlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Layers, XCircle } from "lucide-react";

export function CategoryCardModal({ open, onOpenChange, categoryId }) {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.budgetCategory);
  const { entities: allEntities, status } = useSelector((state) => state.budgetEntity);

  const [visibleEntities, setVisibleEntities] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const observerRef = useRef();

  // Fetch category and entities when modal opens
  useEffect(() => {
    if (open && categoryId) {
      dispatch(getBudgetCategoryById(categoryId));
      dispatch(fetchAllEntitiesByCategoryId(categoryId));
    } else {
      setVisibleEntities([]);
      setVisibleCount(0);
    }
  }, [open, categoryId, dispatch]);

  // Smooth incremental load
  useEffect(() => {
    if (!allEntities || visibleCount === 0) return;

    const timeout = setTimeout(() => {
      setVisibleEntities(allEntities.slice(0, visibleCount));
    }, 100);

    return () => clearTimeout(timeout);
  }, [visibleCount, allEntities]);

  // Lazy load on scroll
  const lastEntityRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < allEntities.length) {
          setVisibleCount((prev) => prev + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, allEntities]
  );

  // Initialize first batch
  useEffect(() => {
    if (allEntities.length > 0) setVisibleCount(5);
  }, [allEntities]);

  return (

    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-5xl flex flex-col overflow-hidden">
        {/* ===== Header ===== */}
        <DialogHeader className="flex-shrink-0 border-b px-6 py-4 ">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {category?.name || "Category Details"}
            </DialogTitle>
    
            <div className="flex items-center gap-3">
              {category && (
                <Badge
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full ${
                    category.isActive
                      ? "bg-green-500 text-white"
                      : "bg-red-400 text-white"
                  }`}
                >
                  {category.isActive ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" /> Active
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" /> Inactive
                    </>
                  )}
                </Badge>
              )}
    
              <Badge
                variant="outline"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 border-purple-200 text-sm"
              >
                <Layers className="w-5 h-5" />
                {allEntities.length} Entities
              </Badge>
            </div>
          </div>
        </DialogHeader>
    
        {/* ===== Body: Entities ===== */}
        <div className="flex-1 overflow-y-auto p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {status === "loading" && visibleEntities.length === 0 ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <svg
                className="animate-spin h-10 w-10 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : visibleEntities.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-10">
              No entities added yet.
            </p>
          ) : (
            visibleEntities.map((entity, idx) => {
              const isLast = idx === visibleEntities.length - 1;
    
              return (
                <Card
                  key={entity._id}
                  className="rounded-lg border hover:shadow-sm transition-all w-full aspect-[4/3] flex flex-col"
                  ref={isLast ? lastEntityRef : null}
                >
                  <CardContent className="p-3 flex flex-col justify-between space-y-2">
                    {/* Entity Name + ID */}
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-gray-900 truncate">
                        {entity.name}
                      </span>
                      <Badge className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">
                        {entity.entityId}
                      </Badge>
                    </div>
    
                    {/* Cost Info */}
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>
                        Type:{" "}
                        <span className="font-medium text-gray-800">{entity.costType}</span>
                      </p>
                      <p>
                        Units:{" "}
                        <span className="font-medium text-gray-800">{entity.totalUnits}</span>
                      </p>
                      <p>
                        Amount:{" "}
                        <span className="font-medium text-gray-800">
                          {entity.currency} {entity.finalAmount?.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
    

              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>

  );
}












