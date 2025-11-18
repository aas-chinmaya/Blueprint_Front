


"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Filler } from "chart.js";
import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";
import { fetchProjectAnalytics, fetchEmployeeAnalytics } from "@/modules/project-management/analytics/slices/projectAnalyticsSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Filler);

// Colors for charts
const MIXED_COLORS = ["#3b82f6", "#22c55e", "#ef4444", "#eab308", "#f97316"];

// Chart rendering function
function renderChart(type, data, isTaskChart = false, noDataMessage = 'No data available') {
  // Check for no valid data
  if (!data || data.length === 0 || data.every((d) => !d || d.value == null || d.value === 0)) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
        {noDataMessage}
      </div>
    );
  }

  const labels = data.map((d) => d.name || "Unknown");
  const values = data.map((d) => Number(d.value) || 0);
  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: MIXED_COLORS.slice(0, values.length),
        borderColor: MIXED_COLORS.slice(0, values.length).map((c) => c + "cc"),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 10, family: "'Inter', sans-serif" },
          color: "#1f2937",
          padding: 5,
        },
      },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#1f2937",
        bodyColor: "#1f2937",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        cornerRadius: 4,
        padding: 6,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
          title: function (context) {
            return context[0].label || "";
          },
        },
      },
      datalabels: isTaskChart
        ? {
            display: true,
            color: "#1f2937",
            font: { size: 10, family: "'Inter', sans-serif" },
            formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}: ${value}`,
            anchor: "center",
            align: "center",
          }
        : { display: false },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  switch (type) {
    case "pie": return <Pie data={chartData} options={options} />;
    case "doughnut": return <Doughnut data={chartData} options={{ ...options, cutout: "50%" }} />;
    case "bar": return <Bar data={chartData} options={options} />;
    case "line": return <Line data={chartData} options={options} />;
    default: return null;
  }
}

// Skeleton for loading state
function ChartSkeleton() {
  return <Skeleton className="w-full h-[150px] rounded-lg" />;
}

export default function ProjectMetrics({ projectId }) {
  const dispatch = useDispatch();
  const { analytics, employeeAnalytics, loading: analyticsLoading } = useSelector((state) => state.projectAnalytics);
  const { project } = useSelector((state) => state.project);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

  // Determine if user can toggle between full and personal views
  // Toggle is only shown when isTeamLead is true
  const canViewBoth = isTeamLead === true;

  // Set view mode based on user role/position
  // - Team Lead (isTeamLead === true): Can toggle, default to 'full'
  // - CPC or position 'Team Lead' but not isTeamLead: Only 'full' view
  // - Otherwise: Only 'personal' view
  const initialViewMode = canViewBoth
    ? 'full'
    : (currentUser?.role === 'cpc' || currentUser?.position === 'Team Lead')
      ? 'full'
      : 'personal';
  const [viewMode, setViewMode] = useState(initialViewMode);

  // Fetch analytics based on view mode
  useEffect(() => {
    if (projectId && currentUser?.id) {
      if (viewMode === 'full') {
        dispatch(fetchProjectAnalytics(projectId));
      } else {
        dispatch(fetchEmployeeAnalytics({ projectId, employeeId: currentUser.id }));
      }
    }
  }, [projectId, dispatch, viewMode, currentUser?.id]);

  const chartData = viewMode === 'full' ? analytics : employeeAnalytics;

  // Dynamic titles and messages based on view mode
  const isPersonal = viewMode === 'personal';
  const tasksTitle = isPersonal ? 'My Tasks' : 'All Tasks';
  const bugsTitle = isPersonal ? 'My Bugs' : 'All Bugs';
  const teamTitle = isPersonal ? 'Active Teams' : 'Active Teams';
  const momTitle = isPersonal ? 'All MOM' : 'All MOM';

  const tasksNoDataMessage = isPersonal ? 'No tasks assigned' : 'No tasks';
  const bugsNoDataMessage = isPersonal ? 'No bugs assigned' : 'No bugs';
  const teamNoDataMessage = isPersonal ? 'No teams involved' : 'No teams';
  const momNoDataMessage = isPersonal ? 'No MOM available' : 'No MOM';

  // Chart data functions
  const getTaskChartData = () =>
    chartData?.summary?.taskStatusCounts
      ? Object.entries(chartData.summary.taskStatusCounts)
          .map(([name, value]) => ({ name, value: Number(value) }))
          .filter((item) => item?.name && item.value != null && item.value >= 0)
      : [];

  const getBugChartData = () =>
    chartData?.summary?.bugStatusCounts
      ? Object.entries(chartData.summary.bugStatusCounts)
          .map(([name, value]) => ({ name, value: Number(value) }))
          .filter((item) => item?.name && item.value != null && item.value >= 0)
      : [];

  const getTeamChartData = () => {
    if (chartData?.summary?.teamCount != null && chartData.summary.teamCount >= 0) {
      return [{ name: "Active Teams", value: Number(chartData.summary.teamCount) }];
    }
    return [];
  };

  const getMomChartData = () =>
    chartData?.summary?.mom
      ? [
          { name: "Online", value: Number(chartData.summary.mom.online) || 0 },
          { name: "Offline", value: Number(chartData.summary.mom.offline) || 0 },
        ].filter((item) => item?.name && item.value != null && item.value >= 0)
      : [];

  return (
    <section className="space-y-4">
      {canViewBoth && (
        <div className="flex justify-end items-center mb-4 cursor-pointer">
          <Switch
            checked={viewMode === "full"}
            onCheckedChange={(checked) =>
              setViewMode(checked ? "full" : "personal")
            }
            title={
              viewMode === "full"
                ? "Show My Analytics"
                : "Show Full Project Analytics"
            }
            className="data-[state=checked]:bg-blue-500 transition"
          />
        </div>
      )}
      {analyticsLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4).fill(0).map((_, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 rounded-xl overflow-hidden shadow-md">
              <CardHeader className="pb-2 bg-gray-200/50">
                <CardTitle className="text-sm font-medium text-gray-900"></CardTitle>
              </CardHeader>
              <CardContent className="p-4" style={{ height: "180px" }}>
                <ChartSkeleton />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : !chartData?.summary ? (
        <div className="w-full h-[180px] text-center text-gray-500">
          No analytics data available
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-xl overflow-hidden shadow-md">
            <CardHeader className="pb-2 bg-blue-200/50">
              <CardTitle className="text-sm font-medium text-blue-900">{tasksTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-4" style={{ height: "180px" }}>
              {renderChart("pie", getTaskChartData(), true, tasksNoDataMessage)}
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200/50 rounded-xl overflow-hidden shadow-md">
            <CardHeader className="pb-2 bg-red-200/50">
              <CardTitle className="text-sm font-medium text-red-900">{bugsTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-4" style={{ height: "180px" }}>
              {renderChart("doughnut", getBugChartData(), false, bugsNoDataMessage)}
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-xl overflow-hidden shadow-md">
            <CardHeader className="pb-2 bg-green-200/50">
              <CardTitle className="text-sm font-medium text-green-900">{teamTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-4" style={{ height: "180px" }}>
              {renderChart("pie", getTeamChartData(), false, teamNoDataMessage)}
            </CardContent>
          </Card>

          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-xl overflow-hidden shadow-md">
            <CardHeader className="pb-2 bg-purple-200/50">
              <CardTitle className="text-sm font-medium text-purple-900">{momTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-4" style={{ height: "180px" }}>
              {renderChart("pie", getMomChartData(), false, momNoDataMessage)}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}