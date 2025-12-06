import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

export function TransactionHistory({ transactions }) {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const getTypeIcon = (type) => {
    if (type === "credit")
      return <ArrowDownCircle className="h-4 w-4 text-green-600" />;
    if (type === "debit")
      return <ArrowUpCircle className="h-4 w-4 text-red-600" />;
    return null;
  };

  const getTypeColor = (type) => {
    if (type === "credit") return "success"; // green badge
    if (type === "debit") return "destructive"; // red badge
    return "default";
  };

  return (
  
    
        <div className="rounded-md border w-full">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Done By</TableHead>
                <TableHead>Date & Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    No transactions yet
                  </TableCell>
                </TableRow>
              ) : (
                transactions
                  .slice() // copy to avoid mutating the original array
                  .reverse()
                  .map((tx) => {
                    const dateObj = new Date(tx.timestamp);
                    const dateStr = dateObj.toLocaleDateString("en-GB");
                    const timeStr = dateObj.toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <TableRow key={tx._id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getTypeIcon(tx.type)}
                            <Badge
                              variant={getTypeColor(tx.type)}
                              className="text-xs"
                            >
                              {tx.type === "credit" ? "Credit" : "Debit"}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>{formatCurrency(tx.amount)}</TableCell>

                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {tx.category}
                          </Badge>
                        </TableCell>
                        <TableCell>{tx.by || "—"}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{dateStr}</div>
                            <div className="text-xs text-muted-foreground">
                              {timeStr}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
              )}
            </TableBody>
          </Table>
        </div>

  );
}
