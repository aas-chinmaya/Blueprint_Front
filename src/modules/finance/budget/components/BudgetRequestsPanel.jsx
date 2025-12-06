



"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBudgetRequestsByProject,
  deleteBudgetRequest,
} from "@/modules/finance/budget/slices/budgetRequestSlice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { CreateBudgetRequest } from "./CreateBudgetRequest";
import { BudgetRequestModal } from "./BudgetRequestModal";

export default function BudgetRequestsTable({ projectId }) {
  const dispatch = useDispatch();
  const { projectRequests, loading } = useSelector((state) => state.budgetRequest);

  const [modal, setModal] = useState({ type: null, open: false });
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (projectId) dispatch(fetchBudgetRequestsByProject(projectId));
  }, [dispatch, projectId]);

  const openModal = (type, data = null) => {
    setCurrentData(data);
    setModal({ type, open: true });
  };

  const closeModal = () => setModal({ type: null, open: false });

  const handleDelete = async () => {
    await dispatch(deleteBudgetRequest(currentData.requestId));
    closeModal();
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
    <div className="w-full space-y-4 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Request Received</h2>
        <Button
          onClick={() => openModal("create")}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
        >
          + New Request
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border w-full shadow-sm">
        <Table className="w-full text-sm">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px] py-3">Request ID</TableHead>
              <TableHead className="py-3">Amount</TableHead>
              <TableHead className="py-3">Type</TableHead>
              <TableHead className="py-3">Date</TableHead>
              <TableHead className="py-3">Status</TableHead>
              <TableHead className="text-center py-3">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-4">
                  Loading requests...
                </TableCell>
              </TableRow>
            ) : projectRequests?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-4">
                  No budget requests found.
                </TableCell>
              </TableRow>
            ) : (
              projectRequests.slice().reverse().map((req) => (
                <TableRow
                  key={req.requestId}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => openModal("view", req)}
                >
                  <TableCell className="font-mono text-gray-700 py-3">{req.requestId}</TableCell>
                  <TableCell className="flex items-center gap-1 text-gray-800 py-3">
                    {formatCurrency(req.requestedAmount)}
                  </TableCell>
                  <TableCell className="py-3">{req.requestType || "N/A"}</TableCell>
                  <TableCell className="py-3">{new Date(req.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="py-3">
                    <Badge variant={getStatusColor(req.status)} className="capitalize">
                      {req.status}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className="flex gap-2 justify-center py-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-blue-600 hover:bg-blue-50"
                      onClick={() => openModal("edit", req)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:bg-red-50"
                      onClick={() => openModal("delete", req)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create Modal */}
      {modal.type === "create" && (
        <CreateBudgetRequest
          projectId={projectId}
          open={modal.open}
          onOpenChange={closeModal}
        />
      )}

      {/* View/Edit Modal */}
      {(modal.type === "view" || modal.type === "edit") && currentData && (
        <BudgetRequestModal
          open={modal.open}
          onOpenChange={closeModal}
          requestData={currentData}
          mode={modal.type}
        />
      )}

      {/* Delete Modal */}
      {modal.type === "delete" && (
        <Dialog open={modal.open} onOpenChange={closeModal}>
          <DialogContent className="w-full max-w-full h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-5xl overflow-auto p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800">
                Delete Confirmation
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <DialogDescription>
                Are you sure you want to delete this request? This action cannot be undone.
              </DialogDescription>
            </div>
            <DialogFooter className="mt-6 flex flex-wrap gap-2 justify-end">
              <Button
                onClick={handleDelete}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Delete
              </Button>
              <Button variant="outline" onClick={closeModal}>
                No, Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}