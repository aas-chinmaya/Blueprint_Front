


// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Switch } from "@/components/ui/switch";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Filler } from "chart.js";
// import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";
// import { fetchProjectAnalytics, fetchEmployeeAnalytics } from "@/modules/project-management/analytics/slices/projectAnalyticsSlice";
// import { useCurrentUser } from "@/hooks/useCurrentUser";

// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale, Filler);

// // Colors for charts
// const MIXED_COLORS = ["#3b82f6", "#22c55e", "#ef4444", "#eab308", "#f97316"];

// // Chart rendering function
// function renderChart(type, data, isTaskChart = false, noDataMessage = 'No data available') {
//   // Check for no valid data
//   if (!data || data.length === 0 || data.every((d) => !d || d.value == null || d.value === 0)) {
//     return (
//       <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
//         {noDataMessage}
//       </div>
//     );
//   }

//   const labels = data.map((d) => d.name || "Unknown");
//   const values = data.map((d) => Number(d.value) || 0);
//   const chartData = {
//     labels,
//     datasets: [
//       {
//         data: values,
//         backgroundColor: MIXED_COLORS.slice(0, values.length),
//         borderColor: MIXED_COLORS.slice(0, values.length).map((c) => c + "cc"),
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           font: { size: 10, family: "'Inter', sans-serif" },
//           color: "#1f2937",
//           padding: 5,
//         },
//       },
//       tooltip: {
//         backgroundColor: "#ffffff",
//         titleColor: "#1f2937",
//         bodyColor: "#1f2937",
//         borderColor: "#e5e7eb",
//         borderWidth: 1,
//         cornerRadius: 4,
//         padding: 6,
//         callbacks: {
//           label: function (context) {
//             const label = context.dataset.label || context.label || "";
//             const value = context.raw || 0;
//             return `${label}: ${value}`;
//           },
//           title: function (context) {
//             return context[0].label || "";
//           },
//         },
//       },
//       datalabels: isTaskChart
//         ? {
//             display: true,
//             color: "#1f2937",
//             font: { size: 10, family: "'Inter', sans-serif" },
//             formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}: ${value}`,
//             anchor: "center",
//             align: "center",
//           }
//         : { display: false },
//     },
//     hover: {
//       mode: "nearest",
//       intersect: true,
//     },
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//   };

//   switch (type) {
//     case "pie": return <Pie data={chartData} options={options} />;
//     case "doughnut": return <Doughnut data={chartData} options={{ ...options, cutout: "50%" }} />;
//     case "bar": return <Bar data={chartData} options={options} />;
//     case "line": return <Line data={chartData} options={options} />;
//     default: return null;
//   }
// }

// // Skeleton for loading state
// function ChartSkeleton() {
//   return <Skeleton className="w-full h-[150px] rounded-lg" />;
// }

// export default function ProjectMetrics({ projectId }) {
//   const dispatch = useDispatch();
//   const { analytics, employeeAnalytics, loading: analyticsLoading } = useSelector((state) => state.projectAnalytics);
//   const { project } = useSelector((state) => state.project);
//   const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

//   // Determine if user can toggle between full and personal views
//   // Toggle is only shown when isTeamLead is true
//   const canViewBoth = isTeamLead === true;

//   // Set view mode based on user role/position
//   // - Team Lead (isTeamLead === true): Can toggle, default to 'full'
//   // - CPC or position 'Team Lead' but not isTeamLead: Only 'full' view
//   // - Otherwise: Only 'personal' view
//   const initialViewMode = canViewBoth
//     ? 'full'
//     : (currentUser?.role === 'cpc' || currentUser?.position === 'Team Lead')
//       ? 'full'
//       : 'personal';
//   const [viewMode, setViewMode] = useState(initialViewMode);

//   // Fetch analytics based on view mode
//   useEffect(() => {
//     if (projectId && currentUser?.id) {
//       if (viewMode === 'full') {
//         dispatch(fetchProjectAnalytics(projectId));
//       } else {
//         dispatch(fetchEmployeeAnalytics({ projectId, employeeId: currentUser.id }));
//       }
//     }
//   }, [projectId, dispatch, viewMode, currentUser?.id]);

//   const chartData = viewMode === 'full' ? analytics : employeeAnalytics;

//   // Dynamic titles and messages based on view mode
//   const isPersonal = viewMode === 'personal';
//   const tasksTitle = isPersonal ? 'My Tasks' : 'All Tasks';
//   const bugsTitle = isPersonal ? 'My Bugs' : 'All Bugs';
//   const teamTitle = isPersonal ? 'Active Teams' : 'Active Teams';
//   const momTitle = isPersonal ? 'All MOM' : 'All MOM';

//   const tasksNoDataMessage = isPersonal ? 'No tasks assigned' : 'No tasks';
//   const bugsNoDataMessage = isPersonal ? 'No bugs assigned' : 'No bugs';
//   const teamNoDataMessage = isPersonal ? 'No teams involved' : 'No teams';
//   const momNoDataMessage = isPersonal ? 'No MOM available' : 'No MOM';

//   // Chart data functions
//   const getTaskChartData = () =>
//     chartData?.summary?.taskStatusCounts
//       ? Object.entries(chartData.summary.taskStatusCounts)
//           .map(([name, value]) => ({ name, value: Number(value) }))
//           .filter((item) => item?.name && item.value != null && item.value >= 0)
//       : [];

//   const getBugChartData = () =>
//     chartData?.summary?.bugStatusCounts
//       ? Object.entries(chartData.summary.bugStatusCounts)
//           .map(([name, value]) => ({ name, value: Number(value) }))
//           .filter((item) => item?.name && item.value != null && item.value >= 0)
//       : [];

//   const getTeamChartData = () => {
//     if (chartData?.summary?.teamCount != null && chartData.summary.teamCount >= 0) {
//       return [{ name: "Active Teams", value: Number(chartData.summary.teamCount) }];
//     }
//     return [];
//   };

//   const getMomChartData = () =>
//     chartData?.summary?.mom
//       ? [
//           { name: "Online", value: Number(chartData.summary.mom.online) || 0 },
//           { name: "Offline", value: Number(chartData.summary.mom.offline) || 0 },
//         ].filter((item) => item?.name && item.value != null && item.value >= 0)
//       : [];

//   return (
//     <section className="space-y-4">
//       {canViewBoth && (
//         <div className="flex justify-end items-center mb-4 cursor-pointer">
//           <Switch
//             checked={viewMode === "full"}
//             onCheckedChange={(checked) =>
//               setViewMode(checked ? "full" : "personal")
//             }
//             title={
//               viewMode === "full"
//                 ? "Show My Analytics"
//                 : "Show Full Project Analytics"
//             }
//             className="data-[state=checked]:bg-blue-500 transition"
//           />
//         </div>
//       )}
//       {analyticsLoading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {Array(4).fill(0).map((_, index) => (
//             <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 rounded-xl overflow-hidden shadow-md">
//               <CardHeader className="pb-2 bg-gray-200/50">
//                 <CardTitle className="text-sm font-medium text-gray-900"></CardTitle>
//               </CardHeader>
//               <CardContent className="p-4" style={{ height: "180px" }}>
//                 <ChartSkeleton />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : !chartData?.summary ? (
//         <div className="w-full h-[180px] text-center text-gray-500">
//           No analytics data available
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-xl overflow-hidden shadow-md">
//             <CardHeader className="pb-2 bg-blue-200/50">
//               <CardTitle className="text-sm font-medium text-blue-900">{tasksTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="p-4" style={{ height: "180px" }}>
//               {renderChart("pie", getTaskChartData(), true, tasksNoDataMessage)}
//             </CardContent>
//           </Card>
//           <Card className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200/50 rounded-xl overflow-hidden shadow-md">
//             <CardHeader className="pb-2 bg-red-200/50">
//               <CardTitle className="text-sm font-medium text-red-900">{bugsTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="p-4" style={{ height: "180px" }}>
//               {renderChart("doughnut", getBugChartData(), false, bugsNoDataMessage)}
//             </CardContent>
//           </Card>
//           <Card className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-xl overflow-hidden shadow-md">
//             <CardHeader className="pb-2 bg-green-200/50">
//               <CardTitle className="text-sm font-medium text-green-900">{teamTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="p-4" style={{ height: "180px" }}>
//               {renderChart("pie", getTeamChartData(), false, teamNoDataMessage)}
//             </CardContent>
//           </Card>

          
//           <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-xl overflow-hidden shadow-md">
//             <CardHeader className="pb-2 bg-purple-200/50">
//               <CardTitle className="text-sm font-medium text-purple-900">{momTitle}</CardTitle>
//             </CardHeader>
//             <CardContent className="p-4" style={{ height: "180px" }}>
//               {renderChart("pie", getMomChartData(), false, momNoDataMessage)}
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </section>
//   );
// }
















"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { TrendingUp, Bug, Users, FileText } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Pie, Doughnut} from "react-chartjs-2";
import { fetchProjectAnalytics, fetchEmployeeAnalytics } from "@/modules/project-management/analytics/slices/projectAnalyticsSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";

// Register only needed components
ChartJS.register(ArcElement, Tooltip, Legend);

// Consistent modern colors
const CHART_COLORS = {
  teal: "rgb(20, 184, 166)",
  orange: "rgb(251, 146, 60)",
  green: "rgb(34, 197, 94)",
  red: "rgb(239, 68, 68)",
  gray: "rgb(156, 163, 175)",
  purple: "rgb(139, 92, 246)",
};

export default function ProjectMetrics({ projectId }) {
  const dispatch = useDispatch();
  const { analytics, employeeAnalytics, loading: analyticsLoading } = useSelector(
    (state) => state.projectAnalytics
  );
  const { project } = useSelector((state) => state.project);
  const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);

  // Determine if user can toggle between full and personal views
  const canViewBoth = isTeamLead === true;

  // Set initial view mode exactly like your original logic
  const initialViewMode = canViewBoth
    ? "full"
    : currentUser?.role === "cpc" || currentUser?.position === "Team Lead"
    ? "full"
    : "personal";

  const [viewMode, setViewMode] = useState(initialViewMode);

  // Fetch data on mount or when viewMode/projectId/user changes
  useEffect(() => {
    if (projectId && currentUser?.id) {
      if (viewMode === "full") {
        dispatch(fetchProjectAnalytics(projectId));
      } else {
        dispatch(fetchEmployeeAnalytics({ projectId, employeeId: currentUser.id }));
      }
    }
  }, [projectId, dispatch, viewMode, currentUser?.id]);

  const chartData = viewMode === "full" ? analytics : employeeAnalytics;
  const isPersonal = viewMode === "personal";

  // Helper to generate chart data
  const getChartData = (counts, colors) => {
    if (!counts || Object.values(counts).every((v) => v == null || v === 0)) return null;

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          data: Object.values(counts).map(Number),
          backgroundColor: colors,
          borderColor: "#fff",
          borderWidth: 3,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { size: 11 }, padding: 16 },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  // Extract data exactly as before
  const taskData = chartData?.summary?.taskStatusCounts
    ? getChartData(chartData.summary.taskStatusCounts, [
        CHART_COLORS.teal,
        CHART_COLORS.orange,
        CHART_COLORS.green,
        CHART_COLORS.gray,
      ])
    : null;

  const bugData = chartData?.summary?.bugStatusCounts
    ? getChartData(chartData.summary.bugStatusCounts, [
        CHART_COLORS.red,
        CHART_COLORS.orange,
        CHART_COLORS.green,
      ])
    : null;

  const teamCount = chartData?.summary?.teamCount || 0;

  const momData = chartData?.summary?.mom
    ? getChartData(
        { Online: chartData.summary.mom.online || 0, Offline: chartData.summary.mom.offline || 0 },
        [CHART_COLORS.green, CHART_COLORS.gray]
      )
    : null;

  // Reusable placeholder when no data
  const ChartPlaceholder = ({ icon: Icon, title, message }) => (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
      <Icon className="w-10 h-10 mb-3 text-gray-400" />
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs mt-1">{message}</p>
    </div>
  );

  const isLoading = analyticsLoading || !currentUser;

  return (
    <div className="space-y-6">

      {/* Toggle — visible only to actual team lead */}
      {canViewBoth && !isLoading && (
        <div className="flex justify-end items-center gap-4">
          <span className="text-sm text-gray-600">
            {viewMode === "full" ? "Full Project":"My Analytics" }
          </span>
          <Switch
            checked={viewMode === "full"}
            onCheckedChange={(checked) => setViewMode(checked ? "full" : "personal")}
            className="data-[state=checked]:bg-blue-600"
          />
       
        </div>
      )}

      {/* Loading skeletons */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <Skeleton className="h-5 w-32 mb-4" />
              <Skeleton className="h-40 w-full rounded-lg" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Tasks */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-teal-600" />
              <h3 className="font-semibold text-gray-900">
                {isPersonal ? "My Tasks" : "All Tasks"}
              </h3>
            </div>
            <div className="h-40">
              {taskData ? (
                <Pie data={taskData} options={chartOptions} />
              ) : (
                <ChartPlaceholder
                  icon={TrendingUp}
                  title="No Tasks"
                  message={isPersonal ? "Not assigned" : "None created"}
                />
              )}
            </div>
          </div>

          {/* Bugs */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <Bug className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-gray-900">
                {isPersonal ? "My Bugs" : "All Bugs"}
              </h3>
            </div>
            <div className="h-40">
              {bugData ? (
                <Doughnut data={bugData} options={{ ...chartOptions, cutout: "65%" }} />
              ) : (
                <ChartPlaceholder icon={Bug} title="No Bugs" message="All clear" />
              )}
            </div>
          </div>

          {/* Active Teams */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-teal-600" />
              <h3 className="font-semibold text-gray-900"> Teams</h3>
            </div>
            <div className="h-40 flex items-center justify-center">
              {teamCount > 0 ? (
                <div className="text-center">
                  <p className="text-5xl font-bold text-teal-600">{teamCount}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Team{teamCount !== 1 ? "s" : ""}
                  </p>
                </div>
              ) : (
                <ChartPlaceholder icon={Users} title="No Teams" message="Not assigned" />
              )}
            </div>
          </div>

          {/* MOM Status */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">MOM </h3>
            </div>
            <div className="h-40">
              {momData ? (
                <Pie data={momData} options={chartOptions} />
              ) : (
                <ChartPlaceholder icon={FileText} title="No MOM" message="Not uploaded" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








