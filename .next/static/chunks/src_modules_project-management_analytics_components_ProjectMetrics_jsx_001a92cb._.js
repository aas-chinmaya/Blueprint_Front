(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectMetrics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/analytics/slices/projectAnalyticsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadialLinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"]);
// Colors for charts
const MIXED_COLORS = [
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#eab308",
    "#f97316"
];
// Chart rendering function
function renderChart(type, data, isTaskChart = false, noDataMessage = 'No data available') {
    // Check for no valid data
    if (!data || data.length === 0 || data.every((d)=>!d || d.value == null || d.value === 0)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center text-gray-500 text-sm",
            children: noDataMessage
        }, void 0, false, {
            fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    const labels = data.map((d)=>d.name || "Unknown");
    const values = data.map((d)=>Number(d.value) || 0);
    const chartData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: MIXED_COLORS.slice(0, values.length),
                borderColor: MIXED_COLORS.slice(0, values.length).map((c)=>c + "cc"),
                borderWidth: 1
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        size: 10,
                        family: "'Inter', sans-serif"
                    },
                    color: "#1f2937",
                    padding: 5
                }
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
                    label: function(context) {
                        const label = context.dataset.label || context.label || "";
                        const value = context.raw || 0;
                        return `${label}: ${value}`;
                    },
                    title: function(context) {
                        return context[0].label || "";
                    }
                }
            },
            datalabels: isTaskChart ? {
                display: true,
                color: "#1f2937",
                font: {
                    size: 10,
                    family: "'Inter', sans-serif"
                },
                formatter: (value, context)=>`${context.chart.data.labels[context.dataIndex]}: ${value}`,
                anchor: "center",
                align: "center"
            } : {
                display: false
            }
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        interaction: {
            mode: "index",
            intersect: false
        }
    };
    switch(type){
        case "pie":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                data: chartData,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 100,
                columnNumber: 24
            }, this);
        case "doughnut":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                data: chartData,
                options: {
                    ...options,
                    cutout: "50%"
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 101,
                columnNumber: 29
            }, this);
        case "bar":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                data: chartData,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 102,
                columnNumber: 24
            }, this);
        case "line":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                data: chartData,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 103,
                columnNumber: 25
            }, this);
        default:
            return null;
    }
}
// Skeleton for loading state
function ChartSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "w-full h-[150px] rounded-lg"
    }, void 0, false, {
        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
_c = ChartSkeleton;
function ProjectMetrics({ projectId }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { analytics, employeeAnalytics, loading: analyticsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProjectMetrics.useSelector": (state)=>state.projectAnalytics
    }["ProjectMetrics.useSelector"]);
    const { project } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProjectMetrics.useSelector": (state)=>state.project
    }["ProjectMetrics.useSelector"]);
    const { currentUser, isTeamLead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"])(project?.data?.teamLeadId);
    // Determine if user can toggle between full and personal views
    // Toggle is only shown when isTeamLead is true
    const canViewBoth = isTeamLead === true;
    // Set view mode based on user role/position
    // - Team Lead (isTeamLead === true): Can toggle, default to 'full'
    // - CPC or position 'Team Lead' but not isTeamLead: Only 'full' view
    // - Otherwise: Only 'personal' view
    const initialViewMode = canViewBoth ? 'full' : currentUser?.role === 'cpc' || currentUser?.position === 'Team Lead' ? 'full' : 'personal';
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialViewMode);
    // Fetch analytics based on view mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectMetrics.useEffect": ()=>{
            if (projectId && currentUser?.id) {
                if (viewMode === 'full') {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectAnalytics"])(projectId));
                } else {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchEmployeeAnalytics"])({
                        projectId,
                        employeeId: currentUser.id
                    }));
                }
            }
        }
    }["ProjectMetrics.useEffect"], [
        projectId,
        dispatch,
        viewMode,
        currentUser?.id
    ]);
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
    const getTaskChartData = ()=>chartData?.summary?.taskStatusCounts ? Object.entries(chartData.summary.taskStatusCounts).map(([name, value])=>({
                name,
                value: Number(value)
            })).filter((item)=>item?.name && item.value != null && item.value >= 0) : [];
    const getBugChartData = ()=>chartData?.summary?.bugStatusCounts ? Object.entries(chartData.summary.bugStatusCounts).map(([name, value])=>({
                name,
                value: Number(value)
            })).filter((item)=>item?.name && item.value != null && item.value >= 0) : [];
    const getTeamChartData = ()=>{
        if (chartData?.summary?.teamCount != null && chartData.summary.teamCount >= 0) {
            return [
                {
                    name: "Active Teams",
                    value: Number(chartData.summary.teamCount)
                }
            ];
        }
        return [];
    };
    const getMomChartData = ()=>chartData?.summary?.mom ? [
            {
                name: "Online",
                value: Number(chartData.summary.mom.online) || 0
            },
            {
                name: "Offline",
                value: Number(chartData.summary.mom.offline) || 0
            }
        ].filter((item)=>item?.name && item.value != null && item.value >= 0) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            canViewBoth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center mb-4 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                    checked: viewMode === "full",
                    onCheckedChange: (checked)=>setViewMode(checked ? "full" : "personal"),
                    title: viewMode === "full" ? "Show My Analytics" : "Show Full Project Analytics",
                    className: "data-[state=checked]:bg-blue-500 transition"
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            analyticsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: Array(4).fill(0).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 rounded-xl overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2 bg-gray-200/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                style: {
                                    height: "180px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartSkeleton, {}, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 208,
                columnNumber: 9
            }, this) : !chartData?.summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[180px] text-center text-gray-500",
                children: "No analytics data available"
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 221,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-xl overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2 bg-blue-200/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-blue-900",
                                    children: tasksTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                style: {
                                    height: "180px"
                                },
                                children: renderChart("pie", getTaskChartData(), true, tasksNoDataMessage)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-red-50 to-red-100 border border-red-200/50 rounded-xl overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2 bg-red-200/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-red-900",
                                    children: bugsTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                style: {
                                    height: "180px"
                                },
                                children: renderChart("doughnut", getBugChartData(), false, bugsNoDataMessage)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-xl overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2 bg-green-200/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-green-900",
                                    children: teamTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                style: {
                                    height: "180px"
                                },
                                children: renderChart("pie", getTeamChartData(), false, teamNoDataMessage)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-xl overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2 bg-purple-200/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-purple-900",
                                    children: momTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                style: {
                                    height: "180px"
                                },
                                children: renderChart("pie", getMomChartData(), false, momNoDataMessage)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project-management/analytics/components/ProjectMetrics.jsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(ProjectMetrics, "B8dbqbAxg3S3i1Ue8jciZK6yq58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"]
    ];
});
_c1 = ProjectMetrics;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChartSkeleton");
__turbopack_context__.k.register(_c1, "ProjectMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_modules_project-management_analytics_components_ProjectMetrics_jsx_001a92cb._.js.map