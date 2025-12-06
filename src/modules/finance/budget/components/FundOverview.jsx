



import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Wallet, DollarSign, Activity } from "lucide-react";

export function FundOverview({ BudgetAccount }) {
  if (!BudgetAccount) return null;

  // Use values directly from BudgetAccount
  const mainAccount = BudgetAccount.initialAmount;
  const totalAllocated = BudgetAccount.totalCredit;
  const totalSpent = BudgetAccount.totalSpent;
  const remaining = BudgetAccount.availableBalance;
  const pendingFunds = totalAllocated - totalSpent; // still calculated
  const utilizationRatio = totalAllocated > 0 ? (totalSpent / totalAllocated) * 100 : 0;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Available Funds</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{formatCurrency(remaining)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Main Account: {formatCurrency(mainAccount)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Total Allocated</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{formatCurrency(totalAllocated)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Across all categories
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Total Spent</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{formatCurrency(totalSpent)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Pending: {formatCurrency(pendingFunds)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm">Utilization Ratio</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl">{utilizationRatio.toFixed(1)}%</div>
          <Progress value={utilizationRatio} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
}
