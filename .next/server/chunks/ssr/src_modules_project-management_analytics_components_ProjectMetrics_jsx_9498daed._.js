module.exports = {

"[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>ProjectMetrics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/analytics/slices/projectAnalyticsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Register only needed components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// Consistent modern colors
const CHART_COLORS = {
    teal: "rgb(20, 184, 166)",
    orange: "rgb(251, 146, 60)",
    green: "rgb(34, 197, 94)",
    red: "rgb(239, 68, 68)",
    gray: "rgb(156, 163, 175)",
    purple: "rgb(139, 92, 246)"
};
function ProjectMetrics({ projectId }) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { analytics, employeeAnalytics, loading: analyticsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.projectAnalytics);
    const { project } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.project);
    const { currentUser, isTeamLead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentUser"])(project?.data?.teamLeadId);
    // Determine if user can toggle between full and personal views
    const canViewBoth = isTeamLead === true;
    // Set initial view mode exactly like your original logic
    const initialViewMode = canViewBoth ? "full" : currentUser?.role === "cpc" || currentUser?.position === "Team Lead" ? "full" : "personal";
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialViewMode);
    // Fetch data on mount or when viewMode/projectId/user changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (projectId && currentUser?.id) {
            if (viewMode === "full") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProjectAnalytics"])(projectId));
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEmployeeAnalytics"])({
                    projectId,
                    employeeId: currentUser.id
                }));
            }
        }
    }, [
        projectId,
        dispatch,
        viewMode,
        currentUser?.id
    ]);
    const chartData = viewMode === "full" ? analytics : employeeAnalytics;
    const isPersonal = viewMode === "personal";
    // Helper to generate chart data
    const getChartData = (counts, colors)=>{
        if (!counts || Object.values(counts).every((v)=>v == null || v === 0)) return null;
        return {
            labels: Object.keys(counts),
            datasets: [
                {
                    data: Object.values(counts).map(Number),
                    backgroundColor: colors,
                    borderColor: "#fff",
                    borderWidth: 3
                }
            ]
        };
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        size: 11
                    },
                    padding: 16
                }
            },
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                bodyColor: "#fff"
            }
        }
    };
    // Extract data exactly as before
    const taskData = chartData?.summary?.taskStatusCounts ? getChartData(chartData.summary.taskStatusCounts, [
        CHART_COLORS.teal,
        CHART_COLORS.orange,
        CHART_COLORS.green,
        CHART_COLORS.gray
    ]) : null;
    const bugData = chartData?.summary?.bugStatusCounts ? getChartData(chartData.summary.bugStatusCounts, [
        CHART_COLORS.red,
        CHART_COLORS.orange,
        CHART_COLORS.green
    ]) : null;
    const teamCount = chartData?.summary?.teamCount || 0;
    const momData = chartData?.summary?.mom ? getChartData({
        Online: chartData.summary.mom.online || 0,
        Offline: chartData.summary.mom.offline || 0
    }, [
        CHART_COLORS.green,
        CHART_COLORS.gray
    ]) : null;
    // Reusable placeholder when no data
    const ChartPlaceholder = ({ icon: Icon, title, message })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-10 h-10 mb-3 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                    lineNumber: 403,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                    lineNumber: 404,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs mt-1",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                    lineNumber: 405,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
            lineNumber: 402,
            columnNumber: 5
        }, this);
    const isLoading = analyticsLoading || !currentUser;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            canViewBoth && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-600",
                        children: viewMode === "full" ? "Full Project" : "My Analytics"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Switch"], {
                        checked: viewMode === "full",
                        onCheckedChange: (checked)=>setViewMode(checked ? "full" : "personal"),
                        className: "data-[state=checked]:bg-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 416,
                columnNumber: 9
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                children: Array.from({
                    length: 4
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-5 w-32 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-40 w-full rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 433,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 431,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-6 h-6 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900",
                                        children: isPersonal ? "My Tasks" : "All Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40",
                                children: taskData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: taskData,
                                    options: chartOptions
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartPlaceholder, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                    title: "No Tasks",
                                    message: isPersonal ? "Not assigned" : "None created"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 454,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                        className: "w-6 h-6 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900",
                                        children: isPersonal ? "My Bugs" : "All Bugs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40",
                                children: bugData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doughnut"], {
                                    data: bugData,
                                    options: {
                                        ...chartOptions,
                                        cutout: "65%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 473,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartPlaceholder, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
                                    title: "No Bugs",
                                    message: "All clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 475,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-6 h-6 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900",
                                        children: " Teams"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40 flex items-center justify-center",
                                children: teamCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-5xl font-bold text-teal-600",
                                            children: teamCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                            lineNumber: 489,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mt-2",
                                            children: [
                                                "Team",
                                                teamCount !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 488,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartPlaceholder, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                    title: "No Teams",
                                    message: "Not assigned"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 495,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-6 h-6 text-purple-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900",
                                        children: "MOM "
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-40",
                                children: momData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: momData,
                                    options: chartOptions
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 508,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartPlaceholder, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                    title: "No MOM",
                                    message: "Not uploaded"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 510,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 440,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
        lineNumber: 412,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_modules_project-management_analytics_components_ProjectMetrics_jsx_9498daed._.js.map