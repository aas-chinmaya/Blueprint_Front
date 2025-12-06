"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBudgetAccountsByProject,
  createBudgetAccount,
} from "@/modules/finance/budget/slices/budgetSlice";

import { FundOverview } from "@/modules/finance/budget/components/FundOverview";
import BudgetRequestsPanel from "@/modules/finance/budget/components/BudgetRequestsPanel";
import { TransactionHistory } from "@/modules/finance/budget/components/TransactionHistory";
import { AddFundDialog } from "@/modules/finance/budget/components/AddFundDialog";
import { CreateCategoryDialog } from "@/modules/finance/budget/components/CreateCategoryDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Wallet, CheckCircle } from "lucide-react";
import  CategoryList  from "@/modules/finance/budget/components/CategoryList";

export default function ProjectBudgetWrapper({ projectId, projectName }) {
  const dispatch = useDispatch();
  const { projectAccounts, loading, error } = useSelector(
    (state) => state.budget
  );
  const BudgetAccount = projectAccounts?.[0] || null;

  const ClientBudget = "50cr";
  const [state, setState] = useState({
    mainAccount: 0,
    categories: [],
    budgetRequests: [],
    transactions: [],
  });

  // ----- Dialog States -----
  const [addFundDialogOpen, setAddFundDialogOpen] = useState(false);
  const [createCategoryDialogOpen, setCreateCategoryDialogOpen] =
    useState(false);

 
  // ----- Create Budget Account Dialog -----
  const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false);
  const [initialBudget, setInitialBudget] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [creating, setCreating] = useState(false);

  // Fetch project accounts on mount
  useEffect(() => {
    if (projectId) dispatch(fetchBudgetAccountsByProject(projectId));
  }, [dispatch, projectId]);

  // ----- Totals -----
  const totalAllocated = state.categories.reduce(
    (sum, cat) => sum + cat.allocated,
    0
  );
  const totalSpent = state.categories.reduce((sum, cat) => sum + cat.spent, 0);
  const availableFunds = state.mainAccount - totalSpent;


  const handleCreateBudgetAccount = async () => {
    if (!initialBudget || !agreed) return;

    const amount = parseFloat(initialBudget);
    if (isNaN(amount) || amount <= 0) return;

    setCreating(true);

    try {
      // Dispatch the thunk to create account
      await dispatch(
        createBudgetAccount({
          projectId,
          accountData: { initialAmount: amount },
        })
      ).unwrap();

      setState((prev) => ({ ...prev, mainAccount: amount }));
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setOpenCreateAccountDialog(false);
        setInitialBudget("");
        setAgreed(false);
      }, 1500);
    } catch (err) {
      alert(err.message || "Failed to create account");
    } finally {
      setCreating(false);
    }
  };

  // ----- Loading or Empty State -----
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading budget accounts...</p>
      </div>
    );
  }

  if (!BudgetAccount || BudgetAccount.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-4 text-center">
        <h1 className="text-2xl font-bold">{projectName || "Project"}</h1>
        <p className="text-muted-foreground">
          Client Budget INR: {ClientBudget || 0}
        </p>

        <Button onClick={() => setOpenCreateAccountDialog(true)}>
          Create Budget Account
        </Button>

        {/* Create Budget Account Dialog */}
        {openCreateAccountDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-md w-96 space-y-4">
              <h2 className="text-xl font-bold">
                Create Project Budget Account
              </h2>
              <p>Enter the initial budget and agree to create a new account.</p>

              {!success ? (
                <>
                  <Input
                    type="number"
                    placeholder="Initial Budget Amount in INR"
                    value={initialBudget}
                    onChange={(e) => setInitialBudget(e.target.value)}
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={agreed}
                      onCheckedChange={(val) => setAgreed(!!val)}
                    />
                    <span>I agree to create this account</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setOpenCreateAccountDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateBudgetAccount}
                      disabled={!agreed || !initialBudget || creating}
                    >
                      {creating ? "Creating..." : "Create Account"}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-2" />
                  <p className="text-green-600 font-medium">
                    Budget Account Created!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----- Normal UI if accounts exist -----
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto space-y-6">
     <div className="flex items-center justify-end gap-2">
  <Button onClick={() => setAddFundDialogOpen(true)}>
    <Wallet className="h-4 w-4 mr-2" />
    Add Funds
  </Button>
  <Button
    onClick={() => setCreateCategoryDialogOpen(true)}
    // variant="outline"
  >
    <Plus className="h-4 w-4 mr-2" />
    New Category
  </Button>
</div>


        <FundOverview
          BudgetAccount={BudgetAccount}
          mainAccount={state.mainAccount}
          totalAllocated={totalAllocated}
          totalSpent={totalSpent}
        />

        <Tabs defaultValue="categories" className="space-y-2">
          <TabsList>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="categories">
            <CategoryList BudgetAccount={BudgetAccount} projectId={projectId} />
          </TabsContent>

          <TabsContent value="requests">
            <BudgetRequestsPanel projectId={projectId} />
          </TabsContent>

          <TabsContent value="transactions">
            <TransactionHistory
              transactions={BudgetAccount?.transactions}
              projectId={projectId}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialogs */}
      <AddFundDialog
        accountId={BudgetAccount?.accountId}
        open={addFundDialogOpen}
        onOpenChange={setAddFundDialogOpen}
      />
      <CreateCategoryDialog
        BudgetAccount={BudgetAccount}
        open={createCategoryDialogOpen}
        onOpenChange={setCreateCategoryDialogOpen}
        onCreateCategory={() => {}}
        availableFunds={availableFunds}
      />

      
    </div>
  );
}









