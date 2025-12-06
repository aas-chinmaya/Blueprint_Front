






"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function OveralBudgetDashboard() {
  // Dummy data for cards
  const stats = [
    { title: "Total Budget Requests", value: 24, color: "bg-blue-500" },
    { title: "Approved Budget", value: "$45,000", color: "bg-green-500" },
    { title: "Pending Budget", value: "$15,000", color: "bg-yellow-400" },
    { title: "Rejected Budget", value: "$5,000", color: "bg-red-500" },
  ];

  // Dummy data for mini chart (budget trend)
  const trendData = [
    { month: "Jan", amount: 5000 },
    { month: "Feb", amount: 12000 },
    { month: "Mar", amount: 9000 },
    { month: "Apr", amount: 15000 },
    { month: "May", amount: 20000 },
    { month: "Jun", amount: 18000 },
  ];

  // Dummy data for categories
  const categories = [
    { name: "Software", amount: 20000, color: "bg-blue-500" },
    { name: "Training", amount: 12000, color: "bg-green-500" },
    { name: "Campaign", amount: 15000, color: "bg-yellow-400" },
    { name: "Consulting", amount: 8000, color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-4">
            <CardContent className="space-y-2">
              <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mini Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="amount" stroke="#4f46e5" fill="#c7d2fe" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Categories Distribution */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Card key={cat.name} className="p-4">
            <CardContent className="space-y-2">
              <div className={`w-2 h-2 rounded-full ${cat.color}`}></div>
              <p className="text-sm text-muted-foreground">{cat.name}</p>
              <Progress value={Math.min((cat.amount / 20000) * 100, 100)} className="h-2" />
              <p className="text-sm font-semibold">${cat.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
