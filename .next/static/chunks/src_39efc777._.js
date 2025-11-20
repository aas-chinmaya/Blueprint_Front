(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/constants/sidebarNavList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fullNav": (()=>fullNav),
    "iconMap": (()=>iconMap),
    "roleGroups": (()=>roleGroups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-closed.js [app-client] (ecmascript) <export default as FolderClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
"use client";
;
const iconMap = {
    LayoutDashboard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
    Inbox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
    CalendarDays: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    ListChecks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
    Bug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
    FolderClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__["FolderClosed"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    PhoneCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"],
    User: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    Folder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"]
};
const roleGroups = {
    cpcGroup: [
        "cpc",
        "Team Lead"
    ],
    employeeGroup: [
        "employee(regular)"
    ]
};
// 🧩 Utility — prefix + alias generator
const withBase = (base, items)=>items.map((item)=>({
            ...item,
            alias: item.alias || `${base.replace("/", "")}-${item.path || "root"}`,
            url: `${base}${item.path ? `/${item.path}` : ""}`
        }));
// 📦 Base paths
const WORKSPACE_BASE = "/workspace";
const PROJECT_BASE = "/project";
const MARKETING_BASE = "/marketing";
const SALES_BASE = "/sales";
const FINANCE_BASE = "/finance";
const REPORTS_BASE = "/reports";
const MASTER_BASE = "/master";
const CLIENT_BASE = "/client";
const ESCALATION_BASE = "/escalation";
const fullNav = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: "LayoutDashboard",
        alias: "dashboard",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: "Inbox",
        alias: "inbox",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    // {
    //   title: "Calendar",
    //   url: "/calendar",
    //   icon: "CalendarDays",
    //   alias: "planner",
    //   roles: ["cpcGroup", "employeeGroup"],
    // },
    // 🧠 Project
    {
        title: "Projects",
        icon: "Folder",
        roles: [
            "cpcGroup"
        ],
        alias: "project-root",
        items: withBase(PROJECT_BASE, [
            // CPC / Team Lead
            {
                title: "All Projects",
                path: "all",
                alias: "projects-all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Onboarding",
                path: "onboarding",
                alias: "projects-onboarding",
                roles: [
                    "cpcGroup"
                ]
            }
        ])
    },
    // 🧠 Workspace
    {
        title: "Workspace",
        icon: "Folder",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ],
        alias: "workspace-root",
        items: withBase(WORKSPACE_BASE, [
            // CPC / Team Lead
            {
                title: "All Teams",
                path: "team/all",
                alias: "workspace-teams-all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Task Board",
                path: "task/all",
                alias: "workspace-tasks-all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Issue Tracker",
                path: "issues/all",
                alias: "workspace-issues-all",
                roles: [
                    "cpcGroup"
                ]
            },
            // Employee
            {
                title: "Assigned Projects",
                path: "my-projects",
                alias: "workspace-projects-my",
                roles: [
                    "employeeGroup"
                ]
            },
            {
                title: "Assigned Tasks",
                path: "task/my-tasks",
                alias: "workspace-tasks-my",
                roles: [
                    "employeeGroup"
                ]
            },
            {
                title: "Assigned Issues",
                path: "issues/my-issues",
                alias: "workspace-issues-all",
                roles: [
                    "employeeGroup"
                ]
            },
            {
                title: "Worked Teams",
                path: "team/my-teams",
                alias: "workspace-teams-my",
                roles: [
                    "employeeGroup"
                ]
            }
        ])
    },
    // 📣 Marketing
    {
        title: "Contacts",
        url: "#",
        icon: "Inbox",
        roles: [
            "cpcGroup"
        ],
        items: withBase(MARKETING_BASE, [
            {
                title: "Overview",
                path: "contacts/overview",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            },
            {
                title: "Recent Inquiry",
                path: "contacts/recent",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            },
            //  { title: "Follow-Up Action", path: "contacts/follow-ups", roles: ["cpcGroup", "employeeGroup"] },
            {
                title: "All Inquiry",
                path: "contacts/all",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            }
        ])
    },
    {
        title: "Client",
        url: "#",
        icon: "Inbox",
        roles: [
            "cpcGroup"
        ],
        items: withBase(CLIENT_BASE, [
            {
                title: "All Clients",
                path: "all",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            },
            {
                title: "Onboarding",
                path: "onboarding",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            }
        ])
    },
    // // 💰 Sales
    // {
    //   title: "Sales",
    //   icon: "Users",
    //   alias: "sales-root",
    //   roles: ["cpcGroup"],
    //   items: withBase(SALES_BASE, [
    //     { title: "Quotation", path: "quotation", alias: "sales-quotations-all", roles: ["cpcGroup", "employeeGroup"] },
    //     // { title: "Approved Quotations", path: "quotations/approved", alias: "sales-quotations-approved", roles: ["cpcGroup", "employeeGroup"] },
    //   ]),
    // },
    // // 💰 Sales (WITHOUT base)
    //   {
    //     title: "Sales",
    //     icon: "Users",
    //     alias: "sales-root",
    //     roles: ["cpcGroup"],
    //     items: [
    //           { title: "Quotation", path: "quotation", alias: "sales-quotations-all", roles: ["cpcGroup", "employeeGroup"] },
    //       { title: "Approved Quotations", path: "quotations/approved", alias: "sales-quotations-approved", roles: ["cpcGroup", "employeeGroup"] },
    //     ],
    //   },
    {
        title: "Quotations",
        url: "#",
        icon: "Inbox",
        roles: [
            "cpcGroup"
        ],
        items: [
            {
                title: "All Quotations",
                url: "/quotation",
                roles: [
                    "cpcGroup",
                    "employeeGroup"
                ]
            }
        ]
    },
    // ⚙️ Master Data
    {
        title: "Escalation",
        icon: "FolderClosed",
        alias: "master-root",
        roles: [
            "cpcGroup"
        ],
        items: withBase(ESCALATION_BASE, [
            {
                title: "Show cause",
                path: "show-cause",
                alias: "show-cause",
                roles: [
                    "cpcGroup"
                ]
            }
        ])
    },
    // ⚙️ Master Data
    {
        title: "Master",
        icon: "FolderClosed",
        alias: "master-root",
        roles: [
            "cpcGroup"
        ],
        items: withBase(MASTER_BASE, [
            {
                title: "Service Catalog",
                path: "services",
                alias: "master-services-all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Industry Setup",
                path: "industry",
                alias: "master-industry-all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Meeting Slots",
                path: "slots",
                alias: "master-slots-all",
                roles: [
                    "cpcGroup"
                ]
            }
        ])
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/settings/slices/sidebarSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// store/sidebarSlice.js
__turbopack_context__.s({
    "clearSidebar": (()=>clearSidebar),
    "default": (()=>__TURBOPACK__default__export__),
    "setSidebarByRole": (()=>setSidebarByRole)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2f$sidebarNavList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constants/sidebarNavList.js [app-client] (ecmascript)");
;
;
const initialState = {
    navItems: [],
    userGroup: null
};
const sidebarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "sidebar",
    initialState,
    reducers: {
        setSidebarByRole: (state, action)=>{
            const { role, position } = action.payload;
            // Determine the correct group
            const userGroup = role === "cpc" || position === "Team Lead" ? "cpcGroup" : "employeeGroup";
            state.userGroup = userGroup;
            // Filter navigation items based on group
            state.navItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2f$sidebarNavList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullNav"].filter((item)=>item.roles.includes(userGroup)).map((item)=>{
                if (item.items) {
                    const filteredItems = item.items.filter((sub)=>sub.roles.includes(userGroup));
                    return {
                        ...item,
                        items: filteredItems
                    };
                }
                return item;
            });
        },
        clearSidebar: (state)=>{
            state.navItems = [];
            state.userGroup = null;
        }
    }
});
const { setSidebarByRole, clearSidebar } = sidebarSlice.actions;
const __TURBOPACK__default__export__ = sidebarSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/auth/slices/authSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkAuth": (()=>checkAuth),
    "clearAuthError": (()=>clearAuthError),
    "default": (()=>__TURBOPACK__default__export__),
    "login": (()=>login),
    "logoutUser": (()=>logoutUser),
    "refreshToken": (()=>refreshToken),
    "verifyOtp": (()=>verifyOtp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
;
;
const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/checkAuth', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/checkCookies');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || {
            message: 'Token check failed',
            dashboard: false
        });
    }
});
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/login', async ({ email, password }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance2"].post('/hrms/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Login failed');
    }
});
const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/verifyOtp', async ({ email, otp }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/verifyOtp', {
            email,
            otp
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'OTP verification failed');
    }
});
const logoutUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/logout', async (_, { rejectWithValue })=>{
    try {
        const email = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('email');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/logout', {
            email
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('token');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('email');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Logout failed');
    }
});
const refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/refreshToken", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/refresh-token");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        otpSent: false,
        user: null,
        token: null,
        email: null,
        isTokenChecked: false
    },
    reducers: {
        clearAuthError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Check Auth cases
        .addCase(checkAuth.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })// .addCase(checkAuth.fulfilled, (state, action) => {
        //   state.isTokenChecked = true;
        //   state.isAuthenticated = action.payload.dashboard;
        //   state.loading = false;
        // })
        .addCase(checkAuth.fulfilled, (state, action)=>{
            state.isTokenChecked = true;
            state.isAuthenticated = action.payload.dashboard || false;
            if (action.payload.accessToken) {
                state.token = action.payload.accessToken;
            }
            state.loading = false;
        }).addCase(checkAuth.rejected, (state, action)=>{
            state.isTokenChecked = true;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = action.payload?.message;
        })// Login cases
        .addCase(login.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading = false;
            state.otpSent = true;
            state.email = action.payload.email;
        }).addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
            state.otpSent = false;
        })// Verify OTP cases
        .addCase(verifyOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(verifyOtp.fulfilled, (state, action)=>{
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = null;
        }).addCase(verifyOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        })// Logout cases
        .addCase(logoutUser.fulfilled, (state)=>{
            return {
                ...state,
                isAuthenticated: false,
                otpSent: false,
                user: null,
                token: null,
                email: null,
                error: null
            };
        }).addCase(logoutUser.rejected, (state, action)=>{
            state.error = action.payload?.message;
        }).addCase(refreshToken.fulfilled, (state, action)=>{
            state.isAuthenticated = true;
        }).addCase(refreshToken.rejected, (state)=>{
            state.isAuthenticated = false;
            state.user = null;
        });
    }
});
const { clearAuthError } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/axios.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "axiosInstance": (()=>axiosInstance),
    "axiosInstance2": (()=>axiosInstance2),
    "axiosInstance3": (()=>axiosInstance3),
    "axiosInstancePublic": (()=>axiosInstancePublic),
    "default": (()=>__TURBOPACK__default__export__),
    "injectStore": (()=>injectStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/slices/authSlice.js [app-client] (ecmascript)");
;
;
// Remove store import and add getStore function
let storeInstance = null;
const injectStore = (_store)=>{
    storeInstance = _store;
};
// 🌍 Root Domain from .env
//  const BASE_ROOT = 'https://bluapi.aas.technology';
const BASE_ROOT = "http://localhost:8080";
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    credentials: "include",
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
const axiosInstance2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
});
const axiosInstance3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
const axiosInstancePublic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});
const axiosInstanceRefresh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create();
axiosInstanceRefresh.interceptors.response.use((response)=>response, async (error)=>{
    if (!storeInstance) {
        return Promise.reject(new Error('Store not initialized'));
    }
    const originalRequest = error.config;
    const status = error.response?.status;
    if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            await storeInstance.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshToken"])()).unwrap();
            return axiosInstanceRefresh(originalRequest);
        } catch (refreshError) {
            // Handle refresh token failure
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
// Add response interceptors to all axios instances
[
    axiosInstance,
    axiosInstance2,
    axiosInstance3,
    axiosInstancePublic
].forEach((instance)=>{
    instance.interceptors.response.use((response)=>response, (error)=>{
        // Handle case where response or data is null
        if (!error.response?.data) {
            return Promise.reject(new Error('Network error or invalid response'));
        }
        return Promise.reject(error);
    });
});
const __TURBOPACK__default__export__ = axiosInstanceRefresh;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/communication/slices/notificationSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearErrors": (()=>clearErrors),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteAllNotifications": (()=>deleteAllNotifications),
    "deleteNotification": (()=>deleteNotification),
    "fetchNotifications": (()=>fetchNotifications),
    "markAllNotificationsAsRead": (()=>markAllNotificationsAsRead),
    "markAsReadLocal": (()=>markAsReadLocal),
    "markNotificationAsRead": (()=>markNotificationAsRead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/fetchNotifications', async (recipientId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/notification/getnotications/${recipientId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch notifications');
    }
});
const deleteNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/deleteNotification', async (_id, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/notification/soft/${_id}`);
        return _id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete notification');
    }
});
const deleteAllNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/deleteAllNotifications', async (recipientId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/notification/softdeleteall/${recipientId}`);
        return recipientId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete all notifications');
    }
});
const markNotificationAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/markNotificationAsRead', async (_id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/notification/markasread/${_id}`);
        return response.data; // updated notification
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to mark as read');
    }
});
const markAllNotificationsAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/markAllNotificationsAsRead', async (recipientId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/notification/markallasread/${recipientId}`);
        return response.data; // success flag or updated list
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to mark all as read');
    }
});
const notificationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'notifications',
    initialState: {
        items: [],
        loading: {
            fetch: false,
            delete: false,
            deleteAll: false,
            update: false,
            updateAll: false
        },
        error: {
            fetch: null,
            delete: null,
            deleteAll: null,
            update: null,
            updateAll: null
        }
    },
    reducers: {
        clearErrors: (state)=>{
            state.error.fetch = null;
            state.error.delete = null;
            state.error.deleteAll = null;
            state.error.update = null;
            state.error.updateAll = null;
        },
        // Optimistic update for single notification
        markAsReadLocal: (state, action)=>{
            const id = action.payload;
            state.items = state.items.map((n)=>n._id === id ? {
                    ...n,
                    read: true
                } : n);
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch notifications
        .addCase(fetchNotifications.pending, (state)=>{
            state.loading.fetch = true;
            state.error.fetch = null;
        }).addCase(fetchNotifications.fulfilled, (state, action)=>{
            state.loading.fetch = false;
            state.items = Array.isArray(action.payload) ? action.payload : action.payload?.data ? action.payload.data : [];
        }).addCase(fetchNotifications.rejected, (state, action)=>{
            state.loading.fetch = false;
            state.error.fetch = action.payload;
        })// Delete single
        .addCase(deleteNotification.pending, (state)=>{
            state.loading.delete = true;
            state.error.delete = null;
        }).addCase(deleteNotification.fulfilled, (state, action)=>{
            state.loading.delete = false;
            state.items = state.items.filter((item)=>item._id !== action.payload);
        }).addCase(deleteNotification.rejected, (state, action)=>{
            state.loading.delete = false;
            state.error.delete = action.payload;
        })// Delete all
        .addCase(deleteAllNotifications.pending, (state)=>{
            state.loading.deleteAll = true;
            state.error.deleteAll = null;
        }).addCase(deleteAllNotifications.fulfilled, (state)=>{
            state.loading.deleteAll = false;
            state.items = [];
        }).addCase(deleteAllNotifications.rejected, (state, action)=>{
            state.loading.deleteAll = false;
            state.error.deleteAll = action.payload;
        })// Mark single as read
        .addCase(markNotificationAsRead.pending, (state)=>{
            state.loading.update = true;
            state.error.update = null;
        }).addCase(markNotificationAsRead.fulfilled, (state, action)=>{
            state.loading.update = false;
            const updated = action.payload;
            state.items = state.items.map((n)=>n._id === updated._id ? {
                    ...n,
                    read: true
                } : n);
        }).addCase(markNotificationAsRead.rejected, (state, action)=>{
            state.loading.update = false;
            state.error.update = action.payload;
        })// Mark all as read
        .addCase(markAllNotificationsAsRead.pending, (state)=>{
            state.loading.updateAll = true;
            state.error.updateAll = null;
        }).addCase(markAllNotificationsAsRead.fulfilled, (state)=>{
            state.loading.updateAll = false;
            state.items = state.items.map((n)=>({
                    ...n,
                    read: true
                }));
        }).addCase(markAllNotificationsAsRead.rejected, (state, action)=>{
            state.loading.updateAll = false;
            state.error.updateAll = action.payload;
        });
    }
});
const { clearErrors, markAsReadLocal } = notificationSlice.actions;
const __TURBOPACK__default__export__ = notificationSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/user/slices/profileSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// store/profileSlice.js
__turbopack_context__.s({
    "clearProfileImageUrl": (()=>clearProfileImageUrl),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchProfileImage": (()=>fetchProfileImage),
    "uploadProfileImage": (()=>uploadProfileImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)"); // your pre-configured axios
;
;
const uploadProfileImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/uploadProfileImage", async ({ employeeID, file }, { rejectWithValue })=>{
    try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/hrms/upload/${employeeID}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data; // { message, profile }
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const fetchProfileImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/fetchProfileImage", async (employeeID, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/hrms/view/${employeeID}`, {
            responseType: "blob"
        });
        // Convert blob to object URL for display
        const imageUrl = URL.createObjectURL(response.data);
        return imageUrl;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const profileSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "profile",
    initialState: {
        profileData: null,
        profileImageUrl: null,
        loading: false,
        error: null
    },
    reducers: {
        clearProfileImageUrl: (state)=>{
            if (state.profileImageUrl) {
                URL.revokeObjectURL(state.profileImageUrl); // cleanup
            }
            state.profileImageUrl = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Upload
        .addCase(uploadProfileImage.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(uploadProfileImage.fulfilled, (state, action)=>{
            state.loading = false;
            state.profileData = action.payload.profile;
        }).addCase(uploadProfileImage.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.message || "Failed to upload profile image";
        })// Fetch
        .addCase(fetchProfileImage.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProfileImage.fulfilled, (state, action)=>{
            state.loading = false;
            state.profileImageUrl = action.payload;
        }).addCase(fetchProfileImage.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.message || "Failed to fetch profile image";
        });
    }
});
const { clearProfileImageUrl } = profileSlice.actions;
const __TURBOPACK__default__export__ = profileSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/user/slices/userSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchUserByEmail": (()=>fetchUserByEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchUserByEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('user/fetchByEmail', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/user/profile', {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch user data');
    }
});
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'user',
    initialState: {
        userData: null,
        employeeData: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchUserByEmail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchUserByEmail.fulfilled, (state, action)=>{
            state.loading = false;
            state.userData = action.payload.user;
            state.employeeData = action.payload.employee;
        }).addCase(fetchUserByEmail.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/user/slices/employeeSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearEmployeeDetails": (()=>clearEmployeeDetails),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchAllAdminEmployees": (()=>fetchAllAdminEmployees),
    "fetchAllBiotechEmployees": (()=>fetchAllBiotechEmployees),
    "fetchAllEmployees": (()=>fetchAllEmployees),
    "fetchAllITEmployees": (()=>fetchAllITEmployees),
    "fetchEmployeeDetails": (()=>fetchEmployeeDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchAllEmployees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('employee/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees', {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch all employees');
    }
});
const fetchAllITEmployees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('employee/fetchAllIT', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employee/it', {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch IT employees');
    }
});
const fetchAllBiotechEmployees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('employee/fetchAllBiotech', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employee/biotech', {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch Biotech employees');
    }
});
const fetchAllAdminEmployees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('employee/fetchAllAdmin', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/fetchalluserexpectitandbio', {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch Admin employees');
    }
});
const fetchEmployeeDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('employee/fetchDetails', async (employeeId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/hrms/employee/${employeeId}`, {
            withCredentials: true
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch employee details');
    }
});
const employeeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'employee',
    initialState: {
        allEmployees: [],
        itEmployees: [],
        biotechEmployees: [],
        adminEmployees: [],
        employeeDetails: null,
        loading: false,
        error: null
    },
    reducers: {
        clearEmployeeDetails: (state)=>{
            state.employeeDetails = null;
        }
    },
    extraReducers: (builder)=>{
        const pending = (state)=>{
            state.loading = true;
            state.error = null;
        };
        const rejected = (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        };
        builder// All
        .addCase(fetchAllEmployees.pending, pending).addCase(fetchAllEmployees.fulfilled, (state, action)=>{
            state.loading = false;
            state.allEmployees = action.payload;
        }).addCase(fetchAllEmployees.rejected, rejected)// IT
        .addCase(fetchAllITEmployees.pending, pending).addCase(fetchAllITEmployees.fulfilled, (state, action)=>{
            state.loading = false;
            state.itEmployees = action.payload;
        }).addCase(fetchAllITEmployees.rejected, rejected)// Biotech
        .addCase(fetchAllBiotechEmployees.pending, pending).addCase(fetchAllBiotechEmployees.fulfilled, (state, action)=>{
            state.loading = false;
            state.biotechEmployees = action.payload;
        }).addCase(fetchAllBiotechEmployees.rejected, rejected)// Admin
        .addCase(fetchAllAdminEmployees.pending, pending).addCase(fetchAllAdminEmployees.fulfilled, (state, action)=>{
            state.loading = false;
            state.adminEmployees = action.payload;
        }).addCase(fetchAllAdminEmployees.rejected, rejected)// Details
        .addCase(fetchEmployeeDetails.pending, pending).addCase(fetchEmployeeDetails.fulfilled, (state, action)=>{
            state.loading = false;
            state.employeeDetails = action.payload;
        }).addCase(fetchEmployeeDetails.rejected, rejected);
    }
});
const { clearEmployeeDetails } = employeeSlice.actions;
const __TURBOPACK__default__export__ = employeeSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/dashboard/slices/dashboardSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchAllClients": (()=>fetchAllClients),
    "fetchClientInsights": (()=>fetchClientInsights),
    "fetchCurrentProject": (()=>fetchCurrentProject),
    "fetchProjectActivities": (()=>fetchProjectActivities),
    "fetchProjectById": (()=>fetchProjectById),
    "fetchProjectTasks": (()=>fetchProjectTasks),
    "fetchTaskById": (()=>fetchTaskById),
    "fetchTasksByDeadline": (()=>fetchTasksByDeadline),
    "fetchTodayAndOverdueTasks": (()=>fetchTodayAndOverdueTasks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchCurrentProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchCurrentProject', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/getallprojectswithallteams');
        // console.log('fetchCurren/tProject response:', response.data);
        return response.data || {};
    } catch (error) {
        // console.error('fetchCurrentProject error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch current project');
    }
});
const fetchAllClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchAllClients', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        // console.log('fetchAllClients response:', response.data);
        return {
            data: response.data.clients || [],
            totalClients: response.data.totalClients || 0
        };
    } catch (error) {
        // console.error('fetchAllClients error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch clients');
    }
});
const fetchClientInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchClientInsights', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/insights');
        // console.log('fetchClientInsights response:', response.data);
        return {
            activeClients: response.data.clientsWithInProgressProjects?.total || 0,
            newClients: response.data.clientsOnboardedLast3Months?.total || 0,
            data: response.data || {}
        };
    } catch (error) {
        // console.error('fetchClientInsights error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch client insights');
    }
});
const fetchProjectTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectTasks', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/projectswithtasks');
        // console.log('fetchProjectTasks response:', response.data);
        return response.data || [];
    } catch (error) {
        // console.error('fetchProjectTasks error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch project tasks');
    }
});
const fetchProjectActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectActivities', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/near-ending');
        console.log('fetchProjectActivities response:', response.data);
        const transformedData = (response.data.projects || []).map((project)=>({
                userInitials: project.teamLeadName?.charAt(0) || '#',
                project: {
                    name: project.projectName || 'Unknown',
                    id: project.projectId || ''
                },
                teamLead: project.teamLeadName || 'Unknown',
                leadId: project.leadId || '',
                endDate: project.endDate || '',
                category: project.category || '',
                daysRemaining: project.endDate ? Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) : 0,
                color: project.endDate ? Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 7 ? 'red' : Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 30 ? 'amber' : 'blue' : 'blue'
            }));
        return transformedData;
    } catch (error) {
        console.error('fetchProjectActivities error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch project activities');
    }
});
const fetchProjectById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectById', async (projectId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getProjectById/${projectId}`);
        console.log('fetchProjectById response:', response.data);
        return response.data || {};
    } catch (error) {
        console.error('fetchProjectById error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch project details');
    }
});
const fetchTasksByDeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTasksByDeadline', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/bydeadline');
        return response.data.tasks;
    } catch (error) {
        // console.error('fetchTasksByDeadline error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch deadline tasks');
    }
});
const fetchTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTaskById', async (taskId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getbyid/${taskId}`);
        // console.log('fetchTaskById response:', response.data);
        return response.data || {};
    } catch (error) {
        // console.error('fetchTaskById error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch task details');
    }
});
const fetchTodayAndOverdueTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTodayAndOverdueTasks', async (employeeId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/employee/today-overdue/${employeeId}`);
        // console.log('fetchTodayAndOverdueTasks response:', response.data);
        return response.data.tasks || [];
    } catch (error) {
        // console.error('fetchTodayAndOverdueTasks error:', error.response?.data?.message || error.message);
        throw Error(error.response?.data?.message || 'Failed to fetch today & overdue tasks');
    }
});
const initialState = {
    currentProject: {
        data: {},
        status: 'idle',
        error: null
    },
    clients: {
        data: [],
        totalClients: 0,
        status: 'idle',
        error: null
    },
    clientInsights: {
        data: {},
        activeClients: 0,
        newClients: 0,
        status: 'idle',
        error: null
    },
    projectTasks: {
        data: [],
        status: 'idle',
        error: null
    },
    projectActivities: {
        data: [],
        status: 'idle',
        error: null
    },
    selectedProject: {
        data: {},
        status: 'idle',
        error: null
    },
    deadlineTasks: {
        data: [],
        status: 'idle',
        error: null
    },
    /* 🔹 NEW: Today & Overdue Tasks */ todayOverdueTasks: {
        data: [],
        status: 'idle',
        error: null
    },
    selectedTask: {
        data: {},
        status: 'idle',
        error: null
    }
};
const dashboardSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        // Current Project
        builder.addCase(fetchCurrentProject.pending, (state)=>{
            state.currentProject.status = 'loading';
            state.currentProject.error = null;
        }).addCase(fetchCurrentProject.fulfilled, (state, action)=>{
            state.currentProject.status = 'succeeded';
            state.currentProject.data = action.payload || {};
            state.currentProject.error = null;
        }).addCase(fetchCurrentProject.rejected, (state, action)=>{
            state.currentProject.status = 'failed';
            state.currentProject.data = {};
            state.currentProject.error = action.error.message;
        });
        // Clients
        builder.addCase(fetchAllClients.pending, (state)=>{
            state.clients.status = 'loading';
            state.clients.error = null;
        }).addCase(fetchAllClients.fulfilled, (state, action)=>{
            state.clients.status = 'succeeded';
            state.clients.data = action.payload.data || [];
            state.clients.totalClients = action.payload.totalClients || 0;
            state.clients.error = null;
        }).addCase(fetchAllClients.rejected, (state, action)=>{
            state.clients.status = 'failed';
            state.clients.data = [];
            state.clients.error = action.error.message;
        });
        // Client Insights
        builder.addCase(fetchClientInsights.pending, (state)=>{
            state.clientInsights.status = 'loading';
            state.clientInsights.error = null;
        }).addCase(fetchClientInsights.fulfilled, (state, action)=>{
            state.clientInsights.status = 'succeeded';
            state.clientInsights.activeClients = action.payload.activeClients || 0;
            state.clientInsights.newClients = action.payload.newClients || 0;
            state.clientInsights.data = action.payload.data || {};
            state.clientInsights.error = null;
        }).addCase(fetchClientInsights.rejected, (state, action)=>{
            state.clientInsights.status = 'failed';
            state.clientInsights.data = {};
            state.clientInsights.error = action.error.message;
        });
        // Project Tasks
        builder.addCase(fetchProjectTasks.pending, (state)=>{
            state.projectTasks.status = 'loading';
            state.projectTasks.error = null;
        }).addCase(fetchProjectTasks.fulfilled, (state, action)=>{
            state.projectTasks.status = 'succeeded';
            state.projectTasks.data = action.payload || [];
            state.projectTasks.error = null;
        }).addCase(fetchProjectTasks.rejected, (state, action)=>{
            state.projectTasks.status = 'failed';
            state.projectTasks.data = [];
            state.projectTasks.error = action.error.message;
        });
        // Project Activities
        builder.addCase(fetchProjectActivities.pending, (state)=>{
            state.projectActivities.status = 'loading';
            state.projectActivities.error = null;
        }).addCase(fetchProjectActivities.fulfilled, (state, action)=>{
            state.projectActivities.status = 'succeeded';
            state.projectActivities.data = action.payload || [];
            state.projectActivities.error = null;
        }).addCase(fetchProjectActivities.rejected, (state, action)=>{
            state.projectActivities.status = 'failed';
            state.projectActivities.data = [];
            state.projectActivities.error = action.error.message;
        });
        // Selected Project
        builder.addCase(fetchProjectById.pending, (state)=>{
            state.selectedProject.status = 'loading';
            state.selectedProject.error = null;
        }).addCase(fetchProjectById.fulfilled, (state, action)=>{
            state.selectedProject.status = 'succeeded';
            state.selectedProject.data = action.payload || {};
            state.selectedProject.error = null;
        }).addCase(fetchProjectById.rejected, (state, action)=>{
            state.selectedProject.status = 'failed';
            state.selectedProject.data = {};
            state.selectedProject.error = action.error.message;
        });
        // Deadline Tasks
        builder.addCase(fetchTasksByDeadline.pending, (state)=>{
            state.deadlineTasks.status = 'loading';
            state.deadlineTasks.error = null;
        }).addCase(fetchTasksByDeadline.fulfilled, (state, action)=>{
            state.deadlineTasks.status = 'succeeded';
            state.deadlineTasks.data = action.payload || [];
            state.deadlineTasks.error = null;
        }).addCase(fetchTasksByDeadline.rejected, (state, action)=>{
            state.deadlineTasks.status = 'failed';
            state.deadlineTasks.data = [];
            state.deadlineTasks.error = action.error.message;
        });
        // Selected Task
        builder.addCase(fetchTaskById.pending, (state)=>{
            state.selectedTask.status = 'loading';
            state.selectedTask.error = null;
        }).addCase(fetchTaskById.fulfilled, (state, action)=>{
            state.selectedTask.status = 'succeeded';
            state.selectedTask.data = action.payload || {};
            state.selectedTask.error = null;
        }).addCase(fetchTaskById.rejected, (state, action)=>{
            state.selectedTask.status = 'failed';
            state.selectedTask.data = {};
            state.selectedTask.error = action.error.message;
        });
        builder.addCase(fetchTodayAndOverdueTasks.pending, (state)=>{
            state.todayOverdueTasks.status = 'loading';
            state.todayOverdueTasks.error = null;
        }).addCase(fetchTodayAndOverdueTasks.fulfilled, (state, action)=>{
            state.todayOverdueTasks.status = 'succeeded';
            state.todayOverdueTasks.data = action.payload || [];
            state.todayOverdueTasks.error = null;
        }).addCase(fetchTodayAndOverdueTasks.rejected, (state, action)=>{
            state.todayOverdueTasks.status = 'failed';
            state.todayOverdueTasks.data = [];
            state.todayOverdueTasks.error = action.error.message;
        });
    }
});
const __TURBOPACK__default__export__ = dashboardSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/marketing/slices/contactSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/features/contactSlice.js
__turbopack_context__.s({
    "addContact": (()=>addContact),
    "clearSelectedContact": (()=>clearSelectedContact),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteContact": (()=>deleteContact),
    "getAllApprovedContacts": (()=>getAllApprovedContacts),
    "getAllContacts": (()=>getAllContacts),
    "getContactById": (()=>getContactById),
    "getRecentContacts": (()=>getRecentContacts),
    "updateContactStatus": (()=>updateContactStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const addContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/addContact', async (contactData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/contact/createcontact', contactData);
        if (!response.data || !response.data.contact) {
            throw new Error('Invalid response format');
        }
        return response.data.contact;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to add contact';
        return rejectWithValue(errorMessage);
    }
});
const getAllContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/getAllContacts', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/contact/getallcontact');
        return response.data.contacts;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
});
const getAllApprovedContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/geApprovedContacts', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/contact/approved');
        return response.data.contacts;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
});
const getContactById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/getContactById', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/contact/getcontactby/${contactId}`);
        return response.data.contact;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contact');
    }
});
const deleteContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/deleteContact', async (contactId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/contact/deletecontact/${contactId}`);
        return contactId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete contact');
    }
});
const updateContactStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/updateContactStatus', async ({ contactId, status, feedback, internalNote, actionedBy }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/contact/updatecontact/${contactId}`, {
            status,
            feedback,
            internalNote,
            actionedBy
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update contact status');
    }
});
const getRecentContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/getRecentContacts', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/contact/received'); // API endpoint to fetch recent contacts
        return response.data.data || [];
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch recent contacts');
    }
});
// Initial State
const initialState = {
    contacts: [],
    Approvedcontacts: [],
    recentContacts: [],
    selectedContact: null,
    status: 'idle',
    error: null
};
// Slice
const contactSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'contact',
    initialState,
    reducers: {
        clearSelectedContact: (state)=>{
            state.selectedContact = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Add Contact
        .addCase(addContact.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(addContact.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.contacts.push(action.payload);
        }).addCase(addContact.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All Contacts
        .addCase(getAllContacts.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllContacts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.contacts = action.payload;
        }).addCase(getAllContacts.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All approvedContacts
        .addCase(getAllApprovedContacts.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllApprovedContacts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.Approvedcontacts = action.payload;
        }).addCase(getAllApprovedContacts.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get Contact by ID
        .addCase(getContactById.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getContactById.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.selectedContact = action.payload;
        }).addCase(getContactById.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Delete Contact
        .addCase(deleteContact.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(deleteContact.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.contacts = state.contacts.filter((c)=>c._id !== action.payload);
        }).addCase(deleteContact.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Contact Status
        .addCase(updateContactStatus.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateContactStatus.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.contacts.findIndex((c)=>c._id === action.payload._id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
            }
            if (state.selectedContact && state.selectedContact._id === action.payload._id) {
                state.selectedContact = action.payload;
            }
        }).addCase(updateContactStatus.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
        // Recent Contacts
        builder.addCase(getRecentContacts.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getRecentContacts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.recentContacts = action.payload;
        }).addCase(getRecentContacts.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});
const { clearSelectedContact } = contactSlice.actions;
const __TURBOPACK__default__export__ = contactSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/marketing/slices/MarketingOverviewSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MarketingOverviewReducer": (()=>MarketingOverviewReducer),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchMarketingOverview": (()=>fetchMarketingOverview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// Comprehensive dummy data for 2024 and 2025, 2–4 records per month
const dummyData = {
    statistics: [
        {
            title: 'Total Contacts Received',
            value: 1240
        },
        {
            title: 'New Contacts',
            value: 380
        },
        {
            title: 'Converted Leads',
            value: 110
        },
        {
            title: 'Follow-ups Taken',
            value: 220
        }
    ],
    kpis: [
        {
            title: 'Converted Lead Rate',
            value: 28.95,
            max: 100
        },
        {
            title: 'Response Rate',
            value: 75.0,
            max: 100
        },
        {
            title: 'Deal Closure Rate',
            value: 50.0,
            max: 100
        },
        {
            title: 'Lead Quality Score',
            value: 82,
            max: 100
        }
    ],
    leadSources: [
        // 2025: 2–4 records per month
        {
            name: 'Website Form',
            value: 18,
            date: '2025-01-10'
        },
        {
            name: 'Social Media',
            value: 10,
            date: '2025-01-15'
        },
        {
            name: 'Referral',
            value: 6,
            date: '2025-01-20'
        },
        {
            name: 'Direct Call',
            value: 5,
            date: '2025-02-12'
        },
        {
            name: 'Event / Expo',
            value: 3,
            date: '2025-02-18'
        },
        {
            name: 'Partner Network',
            value: 2,
            date: '2025-03-07'
        },
        {
            name: 'Advertising',
            value: 7,
            date: '2025-03-14'
        },
        {
            name: 'Webinar',
            value: 4,
            date: '2025-04-10'
        },
        {
            name: 'Cold Outreach',
            value: 3,
            date: '2025-04-15'
        },
        {
            name: 'Website Form',
            value: 15,
            date: '2025-05-20'
        },
        {
            name: 'Social Media',
            value: 8,
            date: '2025-05-25'
        },
        {
            name: 'Referral',
            value: 5,
            date: '2025-06-05'
        },
        {
            name: 'Event / Expo',
            value: 3,
            date: '2025-06-10'
        },
        {
            name: 'Email Campaign',
            value: 4,
            date: '2025-07-12'
        },
        {
            name: 'Direct Call',
            value: 6,
            date: '2025-07-18'
        },
        {
            name: 'Partner Network',
            value: 3,
            date: '2025-08-08'
        },
        {
            name: 'Advertising',
            value: 8,
            date: '2025-08-15'
        },
        {
            name: 'Webinar',
            value: 5,
            date: '2025-09-10'
        },
        {
            name: 'Cold Outreach',
            value: 2,
            date: '2025-09-20'
        },
        {
            name: 'Website Form',
            value: 20,
            date: '2025-10-27'
        },
        {
            name: 'Social Media',
            value: 10,
            date: '2025-10-26'
        },
        {
            name: 'Referral',
            value: 6,
            date: '2025-10-25'
        },
        {
            name: 'Event / Expo',
            value: 4,
            date: '2025-11-05'
        },
        {
            name: 'Email Campaign',
            value: 3,
            date: '2025-11-15'
        },
        {
            name: 'Direct Call',
            value: 5,
            date: '2025-12-10'
        },
        {
            name: 'Partner Network',
            value: 2,
            date: '2025-12-20'
        },
        // 2024: 2–4 records per month
        {
            name: 'Website Form',
            value: 16,
            date: '2024-01-08'
        },
        {
            name: 'Social Media',
            value: 9,
            date: '2024-01-14'
        },
        {
            name: 'Referral',
            value: 5,
            date: '2024-02-10'
        },
        {
            name: 'Email Campaign',
            value: 3,
            date: '2024-02-15'
        },
        {
            name: 'Direct Call',
            value: 4,
            date: '2024-03-12'
        },
        {
            name: 'Event / Expo',
            value: 2,
            date: '2024-03-18'
        },
        {
            name: 'Partner Network',
            value: 3,
            date: '2024-04-07'
        },
        {
            name: 'Advertising',
            value: 6,
            date: '2024-04-14'
        },
        {
            name: 'Webinar',
            value: 3,
            date: '2024-05-10'
        },
        {
            name: 'Cold Outreach',
            value: 2,
            date: '2024-05-15'
        },
        {
            name: 'Website Form',
            value: 14,
            date: '2024-06-20'
        },
        {
            name: 'Social Media',
            value: 7,
            date: '2024-06-25'
        },
        {
            name: 'Referral',
            value: 4,
            date: '2024-07-05'
        },
        {
            name: 'Event / Expo',
            value: 2,
            date: '2024-07-10'
        },
        {
            name: 'Email Campaign',
            value: 3,
            date: '2024-08-12'
        },
        {
            name: 'Direct Call',
            value: 5,
            date: '2024-08-18'
        },
        {
            name: 'Partner Network',
            value: 2,
            date: '2024-09-08'
        },
        {
            name: 'Advertising',
            value: 7,
            date: '2024-09-15'
        },
        {
            name: 'Webinar',
            value: 4,
            date: '2024-10-10'
        },
        {
            name: 'Cold Outreach',
            value: 2,
            date: '2024-10-15'
        },
        {
            name: 'Website Form',
            value: 15,
            date: '2024-11-20'
        },
        {
            name: 'Social Media',
            value: 8,
            date: '2024-11-25'
        },
        {
            name: 'Referral',
            value: 5,
            date: '2024-12-05'
        },
        {
            name: 'Event / Expo',
            value: 3,
            date: '2024-12-10'
        }
    ],
    leadTrend: [
        // 2025: 2–4 records per month
        {
            day: 'Mon',
            leads: 8,
            date: '2025-01-06'
        },
        {
            day: 'Wed',
            leads: 10,
            date: '2025-01-15'
        },
        {
            day: 'Fri',
            leads: 12,
            date: '2025-01-20'
        },
        {
            day: 'Tue',
            leads: 9,
            date: '2025-02-04'
        },
        {
            day: 'Thu',
            leads: 7,
            date: '2025-02-13'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2025-02-22'
        },
        {
            day: 'Mon',
            leads: 6,
            date: '2025-03-03'
        },
        {
            day: 'Wed',
            leads: 8,
            date: '2025-03-12'
        },
        {
            day: 'Fri',
            leads: 10,
            date: '2025-03-21'
        },
        {
            day: 'Tue',
            leads: 7,
            date: '2025-04-01'
        },
        {
            day: 'Thu',
            leads: 9,
            date: '2025-04-10'
        },
        {
            day: 'Sat',
            leads: 6,
            date: '2025-04-19'
        },
        {
            day: 'Mon',
            leads: 8,
            date: '2025-05-05'
        },
        {
            day: 'Wed',
            leads: 10,
            date: '2025-05-14'
        },
        {
            day: 'Fri',
            leads: 12,
            date: '2025-05-23'
        },
        {
            day: 'Tue',
            leads: 9,
            date: '2025-06-03'
        },
        {
            day: 'Thu',
            leads: 7,
            date: '2025-06-12'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2025-06-21'
        },
        {
            day: 'Mon',
            leads: 6,
            date: '2025-07-07'
        },
        {
            day: 'Wed',
            leads: 8,
            date: '2025-07-16'
        },
        {
            day: 'Fri',
            leads: 10,
            date: '2025-07-25'
        },
        {
            day: 'Tue',
            leads: 7,
            date: '2025-08-05'
        },
        {
            day: 'Thu',
            leads: 9,
            date: '2025-08-14'
        },
        {
            day: 'Sat',
            leads: 6,
            date: '2025-08-23'
        },
        {
            day: 'Mon',
            leads: 8,
            date: '2025-09-01'
        },
        {
            day: 'Wed',
            leads: 10,
            date: '2025-09-10'
        },
        {
            day: 'Fri',
            leads: 12,
            date: '2025-09-19'
        },
        {
            day: 'Tue',
            leads: 9,
            date: '2025-10-07'
        },
        {
            day: 'Thu',
            leads: 7,
            date: '2025-10-16'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2025-10-25'
        },
        {
            day: 'Mon',
            leads: 6,
            date: '2025-11-03'
        },
        {
            day: 'Wed',
            leads: 8,
            date: '2025-11-12'
        },
        {
            day: 'Fri',
            leads: 10,
            date: '2025-11-21'
        },
        {
            day: 'Tue',
            leads: 7,
            date: '2025-12-02'
        },
        {
            day: 'Thu',
            leads: 9,
            date: '2025-12-11'
        },
        {
            day: 'Sat',
            leads: 6,
            date: '2025-12-20'
        },
        // 2024: 2–4 records per month
        {
            day: 'Mon',
            leads: 7,
            date: '2024-01-08'
        },
        {
            day: 'Wed',
            leads: 9,
            date: '2024-01-17'
        },
        {
            day: 'Fri',
            leads: 11,
            date: '2024-01-26'
        },
        {
            day: 'Tue',
            leads: 8,
            date: '2024-02-06'
        },
        {
            day: 'Thu',
            leads: 6,
            date: '2024-02-15'
        },
        {
            day: 'Sat',
            leads: 4,
            date: '2024-02-24'
        },
        {
            day: 'Mon',
            leads: 5,
            date: '2024-03-04'
        },
        {
            day: 'Wed',
            leads: 7,
            date: '2024-03-13'
        },
        {
            day: 'Fri',
            leads: 9,
            date: '2024-03-22'
        },
        {
            day: 'Tue',
            leads: 6,
            date: '2024-04-02'
        },
        {
            day: 'Thu',
            leads: 8,
            date: '2024-04-11'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2024-04-20'
        },
        {
            day: 'Mon',
            leads: 7,
            date: '2024-05-06'
        },
        {
            day: 'Wed',
            leads: 9,
            date: '2024-05-15'
        },
        {
            day: 'Fri',
            leads: 11,
            date: '2024-05-24'
        },
        {
            day: 'Tue',
            leads: 8,
            date: '2024-06-04'
        },
        {
            day: 'Thu',
            leads: 6,
            date: '2024-06-13'
        },
        {
            day: 'Sat',
            leads: 4,
            date: '2024-06-22'
        },
        {
            day: 'Mon',
            leads: 5,
            date: '2024-07-01'
        },
        {
            day: 'Wed',
            leads: 7,
            date: '2024-07-10'
        },
        {
            day: 'Fri',
            leads: 9,
            date: '2024-07-19'
        },
        {
            day: 'Tue',
            leads: 6,
            date: '2024-08-06'
        },
        {
            day: 'Thu',
            leads: 8,
            date: '2024-08-15'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2024-08-24'
        },
        {
            day: 'Mon',
            leads: 7,
            date: '2024-09-02'
        },
        {
            day: 'Wed',
            leads: 9,
            date: '2024-09-11'
        },
        {
            day: 'Fri',
            leads: 11,
            date: '2024-09-20'
        },
        {
            day: 'Tue',
            leads: 8,
            date: '2024-10-01'
        },
        {
            day: 'Thu',
            leads: 6,
            date: '2024-10-10'
        },
        {
            day: 'Sat',
            leads: 4,
            date: '2024-10-19'
        },
        {
            day: 'Mon',
            leads: 5,
            date: '2024-11-04'
        },
        {
            day: 'Wed',
            leads: 7,
            date: '2024-11-13'
        },
        {
            day: 'Fri',
            leads: 9,
            date: '2024-11-22'
        },
        {
            day: 'Tue',
            leads: 6,
            date: '2024-12-03'
        },
        {
            day: 'Thu',
            leads: 8,
            date: '2024-12-12'
        },
        {
            day: 'Sat',
            leads: 5,
            date: '2024-12-21'
        }
    ]
};
const fetchMarketingOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('marketingOverview/fetchOverview', async (_, { rejectWithValue })=>{
    try {
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return dummyData;
    } catch (error) {
        return rejectWithValue({
            message: 'Failed to load dummy data'
        });
    }
});
const MarketingOverviewSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'marketingOverview',
    initialState: {
        overviewData: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMarketingOverview.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchMarketingOverview.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.overviewData = action.payload;
        }).addCase(fetchMarketingOverview.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload || {
                message: 'Unknown error'
            };
        });
    }
});
const MarketingOverviewReducer = MarketingOverviewSlice.reducer;
const __TURBOPACK__default__export__ = MarketingOverviewReducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/sales/slices/quotationSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearMeetingQuotations": (()=>clearMeetingQuotations),
    "clearQuotationState": (()=>clearQuotationState),
    "clearQuotations": (()=>clearQuotations),
    "createQuotation": (()=>createQuotation),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteQuotation": (()=>deleteQuotation),
    "fetchQuotationsByMeeting": (()=>fetchQuotationsByMeeting),
    "getClientStatusByQuotationId": (()=>getClientStatusByQuotationId),
    "getPdfById": (()=>getPdfById),
    "getQuotationById": (()=>getQuotationById),
    "getQuotations": (()=>getQuotations),
    "updateQuotation": (()=>updateQuotation),
    "updateQuotationStatus": (()=>updateQuotationStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
// Initial State
const initialState = {
    quotations: [],
    meetingQuotations: [],
    quotation: null,
    clientStatus: null,
    loading: false,
    error: null
};
const fetchQuotationsByMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/fetchByMeeting', async (meetingId, { rejectWithValue })=>{
    try {
        // Normally you’d call the API:
        // const res = await axiosInstance.get(`/quotation/getbyMeetingId/${meetingId}`);
        // return res.data;
        // But for now, we return dummy data:
        return [
            {
                quotationNumber: 'Q-1001',
                meetingId: 'M-500',
                clientName: 'Acme Corp.',
                date: '2025-11-10',
                totalAmount: 12500,
                status: 'draft'
            },
            {
                quotationNumber: 'Q-1002',
                meetingId: 'M-500',
                clientName: 'Beta Industries',
                date: '2025-11-09',
                totalAmount: 9800,
                status: 'final'
            }
        ];
    // return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/updateQuotation', async (updatedData, { rejectWithValue })=>{
    try {
        const { quotationNumber } = updatedData;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/quotation/update/${quotationNumber}`, updatedData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const createQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/createQuotation', async (quotationData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/quotation/create', quotationData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getQuotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getQuotations', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/quotation/getAllquotations');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getQuotationById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getQuotationById', async (quotationNumber, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/qoutationbynumber/${quotationNumber}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateQuotationStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/updateQuotationStatus', async ({ quotationNumber, statusData }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/quotation/updatequotationstatus/${quotationNumber}/status`, statusData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const deleteQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/deleteQuotation', async (quotationNumber, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/quotation/${quotationNumber}`);
        return quotationNumber;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getPdfById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getPdfById', async (quotationNumber, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/pdfbyqoutationnumber/${quotationNumber}`, {
            responseType: 'blob'
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getClientStatusByQuotationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getClientStatusByQuotationId', async (quotationId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/client-status-by-quotation/${quotationId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
// === Slice ===
const quotationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'quotation',
    initialState,
    reducers: {
        clearQuotationState: (state)=>{
            state.quotation = null;
            state.error = null;
        },
        // === NEW: Clear quotations list (used in ProposalContent cleanup) ===
        clearQuotations: (state)=>{
            state.quotations = [];
            state.quotation = null;
            state.clientStatus = null;
        },
        clearMeetingQuotations: (state)=>{
            state.meetingQuotations = [];
        }
    },
    extraReducers: (builder)=>{
        builder// === FETCH BY MEETING ===
        // === FETCH BY MEETING ===
        .addCase(fetchQuotationsByMeeting.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchQuotationsByMeeting.fulfilled, (state, action)=>{
            state.loading = false;
            state.meetingQuotations = action.payload; // store separately
        }).addCase(fetchQuotationsByMeeting.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === CREATE ===
        .addCase(createQuotation.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations.unshift(action.payload);
            state.quotation = action.payload;
        }).addCase(createQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === GET ALL ===
        .addCase(getQuotations.pending, (state)=>{
            state.loading = true;
        }).addCase(getQuotations.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations = action.payload;
        }).addCase(getQuotations.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === GET BY ID ===
        .addCase(getQuotationById.pending, (state)=>{
            state.loading = true;
            state.quotation = null;
        }).addCase(getQuotationById.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotation = action.payload;
        }).addCase(getQuotationById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === UPDATE ===
        .addCase(updateQuotation.pending, (state)=>{
            state.loading = true;
        }).addCase(updateQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            const updated = action.payload;
            state.quotation = updated;
            state.quotations = state.quotations.map((q)=>q.quotationNumber === updated.quotationNumber ? updated : q);
        }).addCase(updateQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === UPDATE STATUS ===
        .addCase(updateQuotationStatus.pending, (state)=>{
            state.loading = true;
        }).addCase(updateQuotationStatus.fulfilled, (state, action)=>{
            state.loading = false;
            const updated = action.payload.quotation;
            state.quotation = updated;
            state.quotations = state.quotations.map((q)=>q.quotationNumber === updated.quotationNumber ? updated : q);
        }).addCase(updateQuotationStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === DELETE ===
        .addCase(deleteQuotation.pending, (state)=>{
            state.loading = true;
        }).addCase(deleteQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations = state.quotations.filter((q)=>q.quotationNumber !== action.payload);
            if (state.quotation?.quotationNumber === action.payload) {
                state.quotation = null;
            }
        }).addCase(deleteQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === GET PDF ===
        .addCase(getPdfById.pending, (state)=>{
            state.loading = true;
        }).addCase(getPdfById.fulfilled, (state, action)=>{
            state.loading = false;
        // PDF blob stored if needed
        }).addCase(getPdfById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// === CLIENT STATUS ===
        .addCase(getClientStatusByQuotationId.pending, (state)=>{
            state.loading = true;
            state.clientStatus = null;
        }).addCase(getClientStatusByQuotationId.fulfilled, (state, action)=>{
            state.loading = false;
            state.clientStatus = action.payload;
        }).addCase(getClientStatusByQuotationId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearQuotationState, clearMeetingQuotations, clearQuotations } = quotationSlice.actions;
const __TURBOPACK__default__export__ = quotationSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/sales/slices/quotationRequestSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearSelectedQuotationRequest": (()=>clearSelectedQuotationRequest),
    "createQuotationRequest": (()=>createQuotationRequest),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchQuotationRequestById": (()=>fetchQuotationRequestById),
    "fetchQuotationRequests": (()=>fetchQuotationRequests),
    "updateQuotationRequest": (()=>updateQuotationRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const BASE_URL = '/quotation-requests'; // Backend API endpoint
const fetchQuotationRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotationRequests/fetchAll', async (_, { rejectWithValue })=>{
    try {
        // const { data } = await axiosInstance.get(BASE_URL);
        // return data; // Uncomment when backend is ready
        // Temporary mock data (for testing)
        return [
            {
                _id: '67301a1a9f8a23ab12345678',
                quotationRequestId: 'QREQ-october-31-001',
                title: 'Office Interior Material Supply',
                requestedBy: 'John Doe',
                companyName: 'ABC Constructions',
                email: 'john@abcconstructions.com',
                phone: '9876543210',
                projectId: 'PRJ-2025-009',
                status: 'Pending',
                budgetRange: '₹1,00,000 - ₹1,50,000',
                items: [
                    {
                        item: 'Cement Bags',
                        quantity: 200,
                        unit: 'bags'
                    },
                    {
                        item: 'Steel Rods',
                        quantity: 100,
                        unit: 'pieces'
                    }
                ],
                notes: 'Need delivery by next week.',
                createdAt: '2025-10-31T08:00:00.000Z',
                updatedAt: '2025-10-31T08:00:00.000Z'
            },
            {
                _id: '67301a2b9f8a23ab12345679',
                quotationRequestId: 'QREQ-october-31-002',
                title: 'IT Equipment for New Office',
                requestedBy: 'Aas Information Technology',
                companyName: 'Aas InfoTech Pvt Ltd',
                email: 'it@aasinfotech.com',
                phone: '9360011223',
                projectId: 'PRJ-2025-010',
                status: 'Approved',
                budgetRange: '₹2,50,000 - ₹3,00,000',
                items: [
                    {
                        item: 'Laptops',
                        quantity: 10,
                        unit: 'pcs'
                    },
                    {
                        item: 'Monitors',
                        quantity: 15,
                        unit: 'pcs'
                    }
                ],
                notes: 'Include Dell and HP quotes.',
                createdAt: '2025-10-30T09:00:00.000Z',
                updatedAt: '2025-10-31T06:00:00.000Z'
            }
        ];
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch quotation requests');
    }
});
const fetchQuotationRequestById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotationRequests/fetchById', async (id, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/${id}`);
        return data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to fetch quotation request');
    }
});
const createQuotationRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotationRequests/create', async (quotationData, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(BASE_URL, quotationData);
        return data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to create quotation request');
    }
});
const updateQuotationRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotationRequests/update', async ({ id, updates }, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${BASE_URL}/${id}`, updates);
        return data;
    } catch (err) {
        return rejectWithValue(err.response?.data || 'Failed to update quotation request');
    }
});
// 🧩 Slice
const quotationRequestSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'quotationRequests',
    initialState: {
        items: [],
        selectedQuotationRequest: null,
        loading: false,
        error: null
    },
    reducers: {
        clearSelectedQuotationRequest: (state)=>{
            state.selectedQuotationRequest = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch all
        .addCase(fetchQuotationRequests.pending, (state)=>{
            state.loading = true;
        }).addCase(fetchQuotationRequests.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchQuotationRequests.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Fetch single
        .addCase(fetchQuotationRequestById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedQuotationRequest = action.payload;
        })// Create
        .addCase(createQuotationRequest.fulfilled, (state, action)=>{
            state.loading = false;
            state.items.push(action.payload);
        })// Update
        .addCase(updateQuotationRequest.fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.items.findIndex((q)=>q._id === action.payload._id);
            if (index !== -1) state.items[index] = action.payload;
        });
    }
});
const { clearSelectedQuotationRequest } = quotationRequestSlice.actions;
const __TURBOPACK__default__export__ = quotationRequestSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/slices/meetSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/features/meet/meetSlice.js
__turbopack_context__.s({
    "clearError": (()=>clearError),
    "clearSelectedMeeting": (()=>clearSelectedMeeting),
    "createMeeting": (()=>createMeeting),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteMeeting": (()=>deleteMeeting),
    "fetchAllMeetings": (()=>fetchAllMeetings),
    "fetchMeetingById": (()=>fetchMeetingById),
    "fetchMeetingsByContact": (()=>fetchMeetingsByContact),
    "rescheduleMeet": (()=>rescheduleMeet),
    "resetCreateStatus": (()=>resetCreateStatus),
    "updateMeeting": (()=>updateMeeting),
    "updateMeetingStatus": (()=>updateMeetingStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const BASE_URL = "/meet";
const createMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/createMeeting", async (meetData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`${BASE_URL}/create`, meetData);
        return response.data.meeting || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to create meeting");
    }
});
const fetchAllMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/fetchAllMeetings", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`${BASE_URL}/all`);
        return response.data.meetings || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch meetings");
    }
});
const fetchMeetingById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/fetchMeetingById", async (meetingId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`${BASE_URL}/getMeetByMeetId/${meetingId}`);
        return response.data.meeting || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch meeting");
    }
});
const updateMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/updateMeeting", async ({ meetingId, updates }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`${BASE_URL}/update/${meetingId}`, updates);
        return response.data.meeting || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update meeting");
    }
});
const rescheduleMeet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/rescheduleMeet", async ({ meetingId, updates }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`${BASE_URL}/update/${meetingId}`, updates);
        return response.data.meeting || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update meeting");
    }
});
const deleteMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/deleteMeeting", async (meetingId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`${BASE_URL}/delete/${meetingId}`);
        return meetingId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to delete meeting");
    }
});
const fetchMeetingsByContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/fetchMeetingsByContact", async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`${BASE_URL}/contact/${contactId}`);
        console.log(response.data.meetings);
        return response.data.meetings || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch meetings by contact");
    }
});
const updateMeetingStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("meet/updateMeetingStatus", async ({ meetingId, meetingStatus, endNote }, { rejectWithValue })=>{
    try {
        const payload = {
            meetingStatus,
            endNote
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`${BASE_URL}/updatestatus/${meetingId}`, payload);
        return response.data.meeting || response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update meeting status");
    }
});
// ------------------------------------------------------------------
// SLICE
// ------------------------------------------------------------------
const meetSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "meet",
    initialState: {
        meetings: [],
        selectedMeeting: null,
        status: "idle",
        createStatus: "idle",
        error: null
    },
    reducers: {
        clearSelectedMeeting: (state)=>{
            state.selectedMeeting = null;
        },
        clearError: (state)=>{
            state.error = null;
        },
        resetCreateStatus: (state)=>{
            state.createStatus = "idle";
        }
    },
    extraReducers: (builder)=>{
        builder// Create meeting
        .addCase(createMeeting.pending, (state)=>{
            state.createStatus = "loading";
        }).addCase(createMeeting.fulfilled, (state, action)=>{
            state.createStatus = "succeeded";
            state.meetings.push(action.payload);
        }).addCase(createMeeting.rejected, (state, action)=>{
            state.createStatus = "failed";
            state.error = action.payload;
        })// Fetch all meetings
        .addCase(fetchAllMeetings.fulfilled, (state, action)=>{
            state.meetings = action.payload;
        })// Fetch meeting by ID
        .addCase(fetchMeetingById.fulfilled, (state, action)=>{
            state.selectedMeeting = action.payload;
        })// Update meeting
        .addCase(updateMeeting.fulfilled, (state, action)=>{
            const index = state.meetings.findIndex((m)=>m._id === action.payload._id);
            if (index !== -1) state.meetings[index] = action.payload;
        }).addCase(rescheduleMeet.fulfilled, (state, action)=>{
            const index = state.meetings.findIndex((m)=>m._id === action.payload._id);
            if (index !== -1) state.meetings[index] = action.payload;
        })// Delete meeting
        .addCase(deleteMeeting.fulfilled, (state, action)=>{
            state.meetings = state.meetings.filter((m)=>m._id !== action.payload);
        })// Fetch meetings by contact
        .addCase(fetchMeetingsByContact.fulfilled, (state, action)=>{
            state.meetings = action.payload;
        })// Update meeting status
        .addCase(updateMeetingStatus.fulfilled, (state, action)=>{
            const index = state.meetings.findIndex((m)=>m._id === action.payload._id);
            if (index !== -1) state.meetings[index] = action.payload;
        })// Handle general errors
        .addMatcher((action)=>action.type.endsWith("/rejected"), (state, action)=>{
            state.error = action.payload;
        });
    }
});
const { clearSelectedMeeting, clearError, resetCreateStatus } = meetSlice.actions;
const __TURBOPACK__default__export__ = meetSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/client-management/slices/clientSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addClient": (()=>addClient),
    "addFile": (()=>addFile),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchClientById": (()=>fetchClientById),
    "fetchClients": (()=>fetchClients),
    "fetchProjectsByClientId": (()=>fetchProjectsByClientId),
    "removeFile": (()=>removeFile),
    "resetForm": (()=>resetForm),
    "updateClient": (()=>updateClient),
    "updateFormData": (()=>updateFormData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
// Format file data from response or input
const formatFileData = (files, isFromServer = false)=>{
    if (!files) return [];
    return files.map((file, index)=>({
            name: file.name,
            downloadLink: isFromServer ? file.url : null,
            index,
            type: file.type || (file.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : file.name.toLowerCase().endsWith('.jpeg') || file.name.toLowerCase().endsWith('.jpg') ? 'image/jpeg' : file.name.toLowerCase().endsWith('.png') ? 'image/png' : 'application/octet-stream'),
            size: file.size || null
        }));
};
const addClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/addClient', async (formData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/client/clientOnboard', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || {
            message: 'Network error occurred'
        });
    }
});
const fetchClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchClients', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        return response.data.clients;
    } catch (error) {
        console.error('Error fetching clients:', {
            error: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch clients');
    }
});
const fetchClientById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchClientById', async (clientId, { rejectWithValue })=>{
    try {
        if (!clientId) throw new Error('No client ID provided');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/client/getClientById/${clientId}`);
        if (!response.data?.success || !response.data?.client) {
            throw new Error('Invalid response format from server');
        }
        const client = response.data.client;
        if (client.onboardingDate) {
            const date = new Date(client.onboardingDate);
            if (!isNaN(date.getTime())) {
                client.onboardingDate = date.toISOString().split('T')[0];
            }
        }
        return {
            success: response.data.success,
            message: response.data.message,
            client: {
                ...client,
                fileData: formatFileData(client.fileDownloadLinks || [], true)
            }
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch client data');
    }
});
const fetchProjectsByClientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchProjectsByClientId', async (clientId, { rejectWithValue })=>{
    try {
        if (!clientId) throw new Error('No client ID provided');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getallprojectsbyclientid/${clientId}`);
        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response format from server');
        }
        const formattedProjects = response.data.map((project)=>({
                projectId: project.projectId || '',
                projectName: project.projectName || '',
                startDate: project.startDate || '',
                endDate: project.endDate || '',
                teamLeadName: project.teamLeadName || '',
                status: project.status || 'Planned'
            }));
        return formattedProjects;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project data');
    }
});
const updateClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/updateClient', async (formData, { rejectWithValue })=>{
    try {
        const clientId = formData.get('clientId');
        if (!clientId) throw new Error('No client ID provided');
        formData.append('preserveFiles', 'true');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/client/updateClient/${clientId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        let data = response.data;
        if (data?.client) {
            data.client.fileData = formatFileData(data.client.fileDownloadLinks || [], true);
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
});
// Initial State
const initialState = {
    formData: {
        clientName: '',
        industryType: '',
        contactEmail: '',
        contactNo: '',
        contactPersonName: '',
        address: '',
        onboardingDate: '',
        website: '',
        fileData: []
    },
    clients: [],
    projects: [],
    addLoading: false,
    addError: null,
    addSuccess: false,
    fetchClientsLoading: false,
    fetchClientsError: null,
    fetchClientLoading: false,
    fetchClientError: null,
    fetchProjectsLoading: false,
    fetchProjectsError: null,
    updateLoading: false,
    updateError: null,
    updateSuccess: false
};
// Slice
const clientSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'client',
    initialState,
    reducers: {
        updateFormData: (state, action)=>{
            state.formData = {
                ...state.formData,
                ...action.payload
            };
        },
        addFile: (state, action)=>{
            if (!state.formData.fileData) state.formData.fileData = [];
            state.formData.fileData.push({
                ...action.payload,
                index: state.formData.fileData.length,
                downloadLink: null
            });
        },
        removeFile: (state, action)=>{
            if (state.formData.fileData) {
                state.formData.fileData = state.formData.fileData.filter((_, index)=>index !== action.payload);
            }
        },
        resetForm: (state)=>{
            state.formData = {
                clientName: '',
                industryType: '',
                contactEmail: '',
                contactNo: '',
                contactPersonName: '',
                address: '',
                onboardingDate: '',
                website: '',
                fileData: []
            };
            state.addLoading = false;
            state.addError = null;
            state.addSuccess = false;
        }
    },
    extraReducers: (builder)=>{
        builder// addClient
        .addCase(addClient.pending, (state)=>{
            state.addLoading = true;
            state.addError = null;
            state.addSuccess = false;
        }).addCase(addClient.fulfilled, (state)=>{
            state.addLoading = false;
            state.addSuccess = true;
        }).addCase(addClient.rejected, (state, action)=>{
            state.addLoading = false;
            state.addError = action.payload?.message || 'Failed to add client';
        })// fetchClients
        .addCase(fetchClients.pending, (state)=>{
            state.fetchClientsLoading = true;
            state.fetchClientsError = null;
        }).addCase(fetchClients.fulfilled, (state, action)=>{
            state.fetchClientsLoading = false;
            state.clients = action.payload || [];
        }).addCase(fetchClients.rejected, (state, action)=>{
            console.error('API call failed', action.payload);
            state.fetchClientsLoading = false;
            state.fetchClientsError = action.payload || 'Something went wrong';
        })// fetchClientById
        .addCase(fetchClientById.pending, (state)=>{
            state.fetchClientLoading = true;
            state.fetchClientError = null;
        }).addCase(fetchClientById.fulfilled, (state, action)=>{
            state.fetchClientLoading = false;
            if (action.payload?.client) {
                state.formData = action.payload.client;
            }
        }).addCase(fetchClientById.rejected, (state, action)=>{
            state.fetchClientLoading = false;
            state.fetchClientError = action.payload || 'Failed to fetch client data';
        })// fetchProjectsByClientId
        .addCase(fetchProjectsByClientId.pending, (state)=>{
            state.fetchProjectsLoading = true;
            state.fetchProjectsError = null;
        }).addCase(fetchProjectsByClientId.fulfilled, (state, action)=>{
            state.fetchProjectsLoading = false;
            state.projects = action.payload;
        }).addCase(fetchProjectsByClientId.rejected, (state, action)=>{
            state.fetchProjectsLoading = false;
            state.fetchProjectsError = action.payload || 'Failed to fetch project data';
        })// updateClient
        .addCase(updateClient.pending, (state)=>{
            state.updateLoading = true;
            state.updateError = null;
            state.updateSuccess = false;
        }).addCase(updateClient.fulfilled, (state, action)=>{
            state.updateLoading = false;
            state.updateSuccess = true;
            if (action.payload?.client) {
                state.formData = {
                    ...action.payload.client,
                    fileData: action.payload.client.fileData || []
                };
            }
        }).addCase(updateClient.rejected, (state, action)=>{
            state.updateLoading = false;
            state.updateError = action.payload || 'Failed to update client';
        });
    }
});
const { updateFormData, addFile, removeFile, resetForm } = clientSlice.actions;
const __TURBOPACK__default__export__ = clientSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/analytics/slices/projectAnalyticsSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// // src/redux/slices/projectAnalyticsSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {axiosInstance} from '@/lib/axios';
// // ✅ Async thunk to fetch project analytics
// export const fetchProjectAnalytics = createAsyncThunk(
//   "projectAnalytics/fetchProjectAnalytics",
//   async (projectId, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get(`/projects/analytics/${projectId}`);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch project analytics"
//       );
//     }
//   }
// );
// // ✅ Slice definition
// const projectAnalyticsSlice = createSlice({
//   name: "projectAnalytics",
//   initialState: {
//     analytics: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     resetProjectAnalytics: (state) => {
//       state.analytics = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProjectAnalytics.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProjectAnalytics.fulfilled, (state, action) => {
//         state.loading = false;
//         state.analytics = action.payload;
//       })
//       .addCase(fetchProjectAnalytics.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// export const { resetProjectAnalytics } = projectAnalyticsSlice.actions;
// export default projectAnalyticsSlice.reducer;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchEmployeeAnalytics": (()=>fetchEmployeeAnalytics),
    "fetchProjectAnalytics": (()=>fetchProjectAnalytics),
    "resetProjectAnalytics": (()=>resetProjectAnalytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchProjectAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("projectAnalytics/fetchProjectAnalytics", async (projectId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/analytics/${projectId}`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch project analytics");
    }
});
const fetchEmployeeAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("projectAnalytics/fetchEmployeeAnalytics", async ({ projectId, employeeId }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/analytics/${projectId}/${employeeId}`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch employee analytics");
    }
});
// ✅ Slice definition
const projectAnalyticsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "projectAnalytics",
    initialState: {
        analytics: null,
        employeeAnalytics: null,
        loading: false,
        error: null
    },
    reducers: {
        resetProjectAnalytics: (state)=>{
            state.analytics = null;
            state.employeeAnalytics = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// ---- Project Analytics ----
        .addCase(fetchProjectAnalytics.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProjectAnalytics.fulfilled, (state, action)=>{
            state.loading = false;
            state.analytics = action.payload;
        }).addCase(fetchProjectAnalytics.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// ---- Employee Analytics ----
        .addCase(fetchEmployeeAnalytics.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchEmployeeAnalytics.fulfilled, (state, action)=>{
            state.loading = false;
            state.employeeAnalytics = action.payload;
        }).addCase(fetchEmployeeAnalytics.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { resetProjectAnalytics } = projectAnalyticsSlice.actions;
const __TURBOPACK__default__export__ = projectAnalyticsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/project/slices/projectSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "changeProjectStatus": (()=>changeProjectStatus),
    "clearEmployeeProjects": (()=>clearEmployeeProjects),
    "clearErrors": (()=>clearErrors),
    "clearProjects": (()=>clearProjects),
    "createProject": (()=>createProject),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProject": (()=>deleteProject),
    "fetchAllProjects": (()=>fetchAllProjects),
    "fetchClients": (()=>fetchClients),
    "fetchProjectById": (()=>fetchProjectById),
    "fetchProjectsByEmployeeId": (()=>fetchProjectsByEmployeeId),
    "fetchTeamLeads": (()=>fetchTeamLeads),
    "resetProjectCreation": (()=>resetProjectCreation),
    "resetSuccessMessage": (()=>resetSuccessMessage),
    "updateProject": (()=>updateProject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchProjectById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchById', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getProjectById/${projectId}`);
        if (!response.data) {
            throw new Error('No data found for the given project ID');
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project');
    }
});
const updateProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/editById', async ({ projectId, updatedData }, { rejectWithValue })=>{
    // console.log(updatedData);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projects/updateProject/${projectId}`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to edit project');
    }
});
const fetchClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchClients', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch clients');
    }
});
const fetchTeamLeads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchTeamLeads', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch team leads');
    }
});
const deleteProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/deleteProject', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/projects/soft-delete/${projectId}`);
        return {
            projectId,
            message: response.data?.message || 'Project deleted successfully'
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete project');
    }
});
const createProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/createProject', async (projectData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projects/onboard', projectData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to create project');
    }
});
const changeProjectStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/changeProjectStatus', async ({ projectId, status }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projects/status/${projectId}`, {
            status
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to change project status');
    }
});
const fetchAllProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/getallprojects');
        if (response.data) {
            const projectData = Array.isArray(response.data) ? response.data : response.data.data || response.data.projects || [];
            return projectData;
        }
        console.log(response);
        return [];
    } catch (error) {
        console.error('Error fetching projects:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch projects');
    }
});
const fetchProjectsByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchProjectsByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/by-person/${employeeId}`);
        return response.data.projects;
        "TURBOPACK unreachable";
    } catch (error) {
        console.error('Error fetching projects by employee ID:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch employee projects');
    }
});
const initialState = {
    project: null,
    projects: [],
    employeeProjects: [],
    clients: [],
    teamLeads: [],
    status: {
        fetchProject: 'idle',
        updateProject: 'idle',
        fetchClients: 'idle',
        fetchTeamLeads: 'idle',
        projectCreation: 'idle',
        statusChange: 'idle',
        fetchAllProjects: 'idle',
        fetchEmployeeProjects: 'idle',
        deleteProject: 'idle'
    },
    error: {
        fetchProject: null,
        updateProject: null,
        clients: null,
        teamLeads: null,
        projectCreation: null,
        statusChange: null,
        fetchAllProjects: null,
        fetchEmployeeProjects: null,
        deleteProject: null
    },
    successMessage: null
};
const projectSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'project',
    initialState,
    reducers: {
        resetProjectCreation: (state)=>{
            state.status.projectCreation = 'idle';
            state.error.projectCreation = null;
            state.successMessage = null;
        },
        clearErrors: (state)=>{
            state.error = {
                fetchProject: null,
                updateProject: null,
                clients: null,
                teamLeads: null,
                projectCreation: null,
                statusChange: null,
                fetchAllProjects: null,
                fetchEmployeeProjects: null
            };
        },
        resetSuccessMessage: (state)=>{
            state.successMessage = null;
        },
        clearProjects: (state)=>{
            state.projects = [];
            state.status.fetchAllProjects = 'idle';
            state.error.fetchAllProjects = null;
        },
        clearEmployeeProjects: (state)=>{
            state.employeeProjects = [];
            state.status.fetchEmployeeProjects = 'idle';
            state.error.fetchEmployeeProjects = null;
        }
    },
    extraReducers: (builder)=>{
        // Fetch Project by ID
        builder.addCase(fetchProjectById.pending, (state)=>{
            state.status.fetchProject = 'loading';
            state.error.fetchProject = null;
        }).addCase(fetchProjectById.fulfilled, (state, action)=>{
            state.status.fetchProject = 'succeeded';
            state.project = action.payload;
            state.error.fetchProject = null;
        }).addCase(fetchProjectById.rejected, (state, action)=>{
            state.status.fetchProject = 'failed';
            state.error.fetchProject = action.payload;
        })// Update Project
        .addCase(updateProject.pending, (state)=>{
            state.status.updateProject = 'updating';
            state.error.updateProject = null;
        }).addCase(updateProject.fulfilled, (state, action)=>{
            state.status.updateProject = 'updated';
            state.project = action.payload;
            state.error.updateProject = null;
        }).addCase(updateProject.rejected, (state, action)=>{
            state.status.updateProject = 'update_failed';
            state.error.updateProject = action.payload;
        })// Fetch Clients
        .addCase(fetchClients.pending, (state)=>{
            state.status.fetchClients = 'loading';
            state.error.clients = null;
        }).addCase(fetchClients.fulfilled, (state, action)=>{
            state.status.fetchClients = 'succeeded';
            state.clients = action.payload.clients || [];
            state.error.clients = null;
        }).addCase(fetchClients.rejected, (state, action)=>{
            state.status.fetchClients = 'failed';
            state.error.clients = action.payload;
        })// Fetch Team Leads
        .addCase(fetchTeamLeads.pending, (state)=>{
            state.status.fetchTeamLeads = 'loading';
            state.error.teamLeads = null;
        }).addCase(fetchTeamLeads.fulfilled, (state, action)=>{
            state.status.fetchTeamLeads = 'succeeded';
            state.teamLeads = action.payload;
            state.error.teamLeads = null;
        }).addCase(fetchTeamLeads.rejected, (state, action)=>{
            state.status.fetchTeamLeads = 'failed';
            state.error.teamLeads = action.payload;
        })// Create Project
        .addCase(createProject.pending, (state)=>{
            state.status.projectCreation = 'loading';
            state.error.projectCreation = null;
            state.successMessage = null;
        }).addCase(createProject.fulfilled, (state, action)=>{
            state.status.projectCreation = 'succeeded';
            state.successMessage = 'Project created successfully';
            state.error.projectCreation = null;
        }).addCase(createProject.rejected, (state, action)=>{
            state.status.projectCreation = 'failed';
            state.error.projectCreation = action.payload;
        })// Change Project Status
        .addCase(changeProjectStatus.pending, (state)=>{
            state.status.statusChange = 'loading';
            state.error.statusChange = null;
            state.successMessage = null;
        }).addCase(changeProjectStatus.fulfilled, (state, action)=>{
            state.status.statusChange = 'succeeded';
            state.successMessage = 'Project status updated successfully';
            state.error.statusChange = null;
        }).addCase(changeProjectStatus.rejected, (state, action)=>{
            state.status.statusChange = 'failed';
            state.error.statusChange = action.payload;
        })// Fetch All Projects
        .addCase(fetchAllProjects.pending, (state)=>{
            state.status.fetchAllProjects = 'loading';
            state.error.fetchAllProjects = null;
        }).addCase(fetchAllProjects.fulfilled, (state, action)=>{
            state.status.fetchAllProjects = 'succeeded';
            state.projects = action.payload;
            state.error.fetchAllProjects = null;
        }).addCase(fetchAllProjects.rejected, (state, action)=>{
            state.status.fetchAllProjects = 'failed';
            state.error.fetchAllProjects = action.payload;
        })// Fetch Projects by Employee ID
        .addCase(fetchProjectsByEmployeeId.pending, (state)=>{
            state.status.fetchEmployeeProjects = 'loading';
            state.error.fetchEmployeeProjects = null;
        }).addCase(fetchProjectsByEmployeeId.fulfilled, (state, action)=>{
            state.status.fetchEmployeeProjects = 'succeeded';
            state.employeeProjects = action.payload;
            state.error.fetchEmployeeProjects = null;
        }).addCase(fetchProjectsByEmployeeId.rejected, (state, action)=>{
            state.status.fetchEmployeeProjects = 'failed';
            state.error.fetchEmployeeProjects = action.payload;
        })// Delete Project
        .addCase(deleteProject.pending, (state)=>{
            state.status.deleteProject = 'loading';
            state.error.deleteProject = null;
            state.successMessage = null;
        }).addCase(deleteProject.fulfilled, (state, action)=>{
            state.status.deleteProject = 'succeeded';
            state.projects = state.projects.filter((project)=>project._id !== action.payload.projectId);
            state.successMessage = action.payload.message;
            state.error.deleteProject = null;
        }).addCase(deleteProject.rejected, (state, action)=>{
            state.status.deleteProject = 'failed';
            state.error.deleteProject = action.payload;
        });
    }
});
const { resetProjectCreation, clearErrors, resetSuccessMessage, clearProjects, clearEmployeeProjects } = projectSlice.actions;
const __TURBOPACK__default__export__ = projectSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/team/slices/teamSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearSelectedTeam": (()=>clearSelectedTeam),
    "createTeam": (()=>createTeam),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteTeam": (()=>deleteTeam),
    "fetchAllTeams": (()=>fetchAllTeams),
    "fetchTeamByProjectId": (()=>fetchTeamByProjectId),
    "fetchTeamDetails": (()=>fetchTeamDetails),
    "fetchTeamMembers": (()=>fetchTeamMembers),
    "fetchTeamMembersByTeamId": (()=>fetchTeamMembersByTeamId),
    "fetchTeamsByEmployeeId": (()=>fetchTeamsByEmployeeId),
    "getTeamMembersByProjectId": (()=>getTeamMembersByProjectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchTeamByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getallteamsbyprojectid/${projectId}`);
        // console.log('Fetch teams by project ID API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error /fetching teams by project ID:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const fetchAllTeams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchAllTeams', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/team/getallteams');
        // console.log('Fetch all teams API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching all teams:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch teams');
    }
});
const fetchTeamDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamDetails', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getteamid/${teamId}`);
        // console.log('Fetch team details API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching team details:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const fetchTeamMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamMembers', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        // console.log('Fetch all team members API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Fetch all team members error:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members');
    }
});
const createTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/createTeam', async (teamData, { rejectWithValue })=>{
    try {
        // console.log('Creating team with data:', teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/team/createteam', {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log('Create team API response:', response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error('Team creation error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create team');
    }
});
// Thunk: Update a team by team ID
const updateTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/updateTeam', async ({ teamId, teamData }, { rejectWithValue })=>{
    try {
        // console.log(`Updating tea/m ${teamId} with data:`, teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/team/updateteam/${teamId}`, {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log(`Update team ${teamId} API response:`, response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error(`Update team ///${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update team');
    }
});
const fetchTeamMembersByTeamId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamMembersByTeamId', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/api/team/teammembers/${teamId}`);
        // console.log(`Fetch team members for team ${teamId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch team members for team ${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch team members by team ID');
    }
});
const fetchTeamsByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamsByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/user/${employeeId}`);
        // console.log(`Fetch teams for employee ${employeeId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch teams for employee ${employeeId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch teams by employee ID');
    }
});
const getTeamMembersByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/getTeamMembersByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/members/by-project/${projectId}`);
        return response.data.teamMembers; // return full response as-is
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members by project ID');
    }
});
const deleteTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/deleteTeam', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/team/soft-delete/${teamId}`);
        return {
            teamId,
            message: response.data?.message || 'Team deleted successfully'
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete team');
    }
});
const teamSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'team',
    initialState: {
        teamsByProject: [],
        allTeams: [],
        selectedTeam: null,
        allMembers: [],
        teamMembersByTeamId: [],
        status: 'idle',
        createTeamStatus: 'idle',
        error: null,
        teamsByEmployee: [],
        teamMembersByProjectId: [],
        deleteTeamStatus: 'idle'
    },
    reducers: {
        clearSelectedTeam: (state)=>{
            state.selectedTeam = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch teams by project ID
        .addCase(fetchTeamByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.teamsByProject = Array.isArray(action.payload.data) ? action.payload.data : action.payload.data ? [
                action.payload.data
            ] : [];
        // console.log('Processed teams by project:', state.teamsByProject);
        }).addCase(fetchTeamByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamsByProject = [];
        })// Fetch all teams
        .addCase(fetchAllTeams.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchAllTeams.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.allTeams = Array.isArray(action.payload) ? action.payload : [];
        // console.log('Processed all teams:', state.allTeams);
        }).addCase(fetchAllTeams.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.allTeams = [];
        })// Fetch team details
        .addCase(fetchTeamDetails.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamDetails.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.selectedTeam = action.payload;
        // console.log('Processed team details:', state.selectedTeam);
        }).addCase(fetchTeamDetails.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch all team members
        .addCase(fetchTeamMembers.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembers.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.allMembers = responseData.map((member)=>({
                        employeeID: member.employeeID || member.id,
                        firstName: member.firstName || member.name?.split(' ')[0] || '',
                        lastName: member.lastName || member.name?.split(' ')[1] || '',
                        email: member.email || '',
                        designation: member.designation || ''
                    }));
            } else {
                state.allMembers = [];
            }
        // console.log('Processed all team members:', state.allMembers);
        }).addCase(fetchTeamMembers.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.allMembers = [];
        })// Create team
        .addCase(createTeam.pending, (state)=>{
            state.createTeamStatus = 'loading';
            state.error = null;
        }).addCase(createTeam.fulfilled, (state)=>{
            state.createTeamStatus = 'succeeded';
        }).addCase(createTeam.rejected, (state, action)=>{
            state.createTeamStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members by team ID
        .addCase(fetchTeamMembersByTeamId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersByTeamId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersByTeamId = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersByTeamId = [];
            }
        // console.log('Processed team members by team ID:', state.teamMembersByTeamId);
        }).addCase(fetchTeamMembersByTeamId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamMembersByTeamId = [];
        })// Fetch teams by employee ID
        // Fetch teams by employee ID
        .addCase(fetchTeamsByEmployeeId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamsByEmployeeId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            state.teamsByEmployee = Array.isArray(responseData) ? responseData : [];
        // console.log('Processed teams by employee ID:', state.teamsByEmployee);
        }).addCase(fetchTeamsByEmployeeId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamsByEmployee = [];
        })//getTeamMembersByProjectId
        .addCase(getTeamMembersByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getTeamMembersByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.teamMembersByProjectId = action.payload; // save full data directly
        }).addCase(getTeamMembersByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamMembersByProjectId = [];
        })// Update team
        .addCase(updateTeam.pending, (state)=>{
            state.updateTeamStatus = 'loading';
            state.error = null;
        }).addCase(updateTeam.fulfilled, (state, action)=>{
            state.updateTeamStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            // Optionally update teamMembersByTeamId if the updated team data is returned
            if (responseData && Array.isArray(responseData.teamMembers)) {
                state.teamMembersByTeamId = responseData.teamMembers.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            }
        // console.log('Team updated successfully:', responseData);
        }).addCase(updateTeam.rejected, (state, action)=>{
            state.updateTeamStatus = 'failed';
            state.error = action.payload;
        })// Delete team
        .addCase(deleteTeam.pending, (state)=>{
            state.deleteTeamStatus = 'loading';
            state.error = null;
        }).addCase(deleteTeam.fulfilled, (state, action)=>{
            state.deleteTeamStatus = 'succeeded';
            const { teamId } = action.payload;
            state.allTeams = state.allTeams.filter((team)=>team.teamId !== teamId);
            state.teamsByProject = state.teamsByProject.filter((team)=>team.teamId !== teamId);
        }).addCase(deleteTeam.rejected, (state, action)=>{
            state.deleteTeamStatus = 'failed';
            state.error = action.payload;
        });
        ;
    }
});
const { clearSelectedTeam } = teamSlice.actions;
const __TURBOPACK__default__export__ = teamSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/task/slices/taskSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearError": (()=>clearError),
    "createTask": (()=>createTask),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteTask": (()=>deleteTask),
    "downloadTasksReport": (()=>downloadTasksReport),
    "fetchEmployeeProjectTasks": (()=>fetchEmployeeProjectTasks),
    "fetchTaskById": (()=>fetchTaskById),
    "fetchTasks": (()=>fetchTasks),
    "fetchTasksByProjectId": (()=>fetchTasksByProjectId),
    "getAllSubTaskByEmployeeId": (()=>getAllSubTaskByEmployeeId),
    "getAllTaskByEmployeeId": (()=>getAllTaskByEmployeeId),
    "getAllTaskList": (()=>getAllTaskList),
    "resetCurrentTask": (()=>resetCurrentTask),
    "selectAllSubTaskListByEmployeeId": (()=>selectAllSubTaskListByEmployeeId),
    "selectAllTaskList": (()=>selectAllTaskList),
    "selectAllTaskListByEmployeeId": (()=>selectAllTaskListByEmployeeId),
    "selectAllTasks": (()=>selectAllTasks),
    "selectCurrentTask": (()=>selectCurrentTask),
    "selectEmployeeProjectTasks": (()=>selectEmployeeProjectTasks),
    "selectTaskError": (()=>selectTaskError),
    "selectTaskStatus": (()=>selectTaskStatus),
    "selectTasksByProjectId": (()=>selectTasksByProjectId),
    "updateTask": (()=>updateTask),
    "updateTaskReviewStatus": (()=>updateTaskReviewStatus),
    "updateTaskStatus": (()=>updateTaskStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const createTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/createTask', async (taskData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/task/assign', taskData, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No data received from server');
        }
        return response.data.task || response.data;
    } catch (error) {
        // console.error('Create Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create task');
    }
});
const fetchTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTasks', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/getall', {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.tasks) {
            throw new Error('No tasks received from server');
        }
        const activeTasks = response.data.tasks.filter((task)=>!task.isDeleted);
        return activeTasks;
    } catch (error) {
        // console.error('Fetch Tasks Error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch tasks');
    }
});
const fetchTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTaskById', async (task_id, { rejectWithValue })=>{
    try {
        // console.log('Fetching task with ID:', task_id);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getbyid/${task_id}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.task) {
            throw new Error('Task not found');
        }
        // console.log('Task data received:', response.data.task);
        return response.data.task;
    } catch (error) {
        // console.error('Fetch Task By ID Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch task');
    }
});
const fetchTasksByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTasksByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        // console.log('Fetching tasks for project ID:', projectId);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/project-tasks/${projectId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No tasks received from server');
        }
        const tasksArray = Array.isArray(response.data) ? response.data : Array.isArray(response.data.tasks) ? response.data.tasks : response.data.data ? Array.isArray(response.data.data) ? response.data.data : [
            response.data.data
        ] : [];
        const activeTasks = tasksArray.filter((task)=>!task.isDeleted);
        // console.log('Tasks for project received:', activeTasks);
        return {
            projectId,
            tasks: activeTasks
        };
    } catch (error) {
        // console.error('Fetch Tasks By Project ID Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.error || error.message || 'Failed to fetch tasks for project');
    }
});
const updateTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTask', async (taskData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/update/${taskData.task_id}`, taskData, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.task) {
            throw new Error('Failed to update task');
        }
        return response.data.task;
    } catch (error) {
        // console.error('Update Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update task');
    }
});
const updateTaskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTaskStatus', async ({ taskId, status, delayReason }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/update/${taskId}`, {
            status,
            delayReason
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        return response.data.task;
    } catch (error) {
        // console.error('Update Task Status Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update task status');
    }
});
const deleteTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/deleteTask', async (task_id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/task/delete/${task_id}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.message.includes('successfully')) {
            throw new Error('Failed to delete task');
        }
        return task_id;
    } catch (error) {
        // console.error('Delete Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to delete task');
    }
});
const getAllTaskList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/getAllTaskList', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/getall', {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !Array.isArray(response.data.tasks)) {
            throw new Error('No task list received from server');
        }
        return response.data.tasks;
    } catch (error) {
        // console.error('Get All Task List Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to retrieve task list');
    }
});
const getAllTaskByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/getAllTaskByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/member/${employeeId}`);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch tasks for employee');
    }
});
const getAllSubTaskByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("task/getAllSubTaskByEmployeeId", async (employeeId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/subtask/member/${employeeId}`);
        // console.log(res.data.subtasks);
        return res.data.subtasks;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
const updateTaskReviewStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTaskReviewStatus', async ({ task_id, reviewStatus }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/review-status/${task_id}`, {
            reviewStatus
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Update failed');
    }
});
const downloadTasksReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/downloadTasksReport', async (payload, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/task/export-tasks', payload, {
            responseType: 'blob',
            timeout: 10000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        // If it's NOT an Excel file, treat it as an error and parse JSON
        const contentType = response.headers['content-type'] || '';
        if (!contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
            // Convert blob to text
            const text = await response.data.text();
            try {
                // If backend sent JSON, extract its message
                const parsed = JSON.parse(text);
                return rejectWithValue(parsed.message || text);
            } catch  {
                // If backend sent plain text, just use that
                return rejectWithValue(text);
            }
        }
        // ✅ Excel file case → download
        let fileName = `tasks_report_${payload.projectId}_${new Date().toISOString().split('T')[0]}.xlsx`;
        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition) {
            const match = contentDisposition.match(/filename="(.+)"/);
            if (match?.[1]) fileName = match[1];
        }
        const blob = new Blob([
            response.data
        ], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        return true;
    } catch (error) {
        return rejectWithValue(error.message || 'Error from server');
    }
});
const fetchEmployeeProjectTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchEmployeeProjectTasks', async ({ projectId, employeeId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getalltaskbyprojectid/${employeeId}/${projectId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No tasks found');
        }
        return response.data; // ✅ Return the data as-is without wrapping
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Fetch failed');
    }
});
const initialState = {
    tasks: [],
    currentTask: null,
    projectTasks: {},
    status: 'idle',
    error: null,
    allTaskList: [],
    employeeTasks: [],
    isLoading: false,
    employeeSubTasks: [],
    employeeProjectTasks: {},
    loading: false,
    error: null,
    successMessage: null
};
const taskSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'task',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
            state.status = 'idle';
        },
        clearTaskMessages: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        resetCurrentTask: (state)=>{
            state.currentTask = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create Task
        .addCase(createTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(createTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks.push(action.payload);
            if (action.payload.projectId) {
                state.projectTasks[action.payload.projectId] = [
                    ...state.projectTasks[action.payload.projectId] || [],
                    action.payload
                ];
            }
        }).addCase(createTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch All Tasks
        .addCase(fetchTasks.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTasks.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks = action.payload;
            state.projectTasks = action.payload.reduce((acc, task)=>{
                if (task.projectId) {
                    acc[task.projectId] = [
                        ...acc[task.projectId] || [],
                        task
                    ];
                }
                return acc;
            }, {});
        }).addCase(fetchTasks.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch Task By ID
        .addCase(fetchTaskById.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTaskById.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.currentTask = action.payload;
        }).addCase(fetchTaskById.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.currentTask = null;
        })// Fetch Tasks By Project ID
        .addCase(fetchTasksByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTasksByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.projectTasks[action.payload.projectId] = action.payload.tasks;
        }).addCase(fetchTasksByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Task
        .addCase(updateTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.tasks.findIndex((task)=>task.task_id === action.payload.task_id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
            state.currentTask = action.payload;
            if (action.payload.projectId) {
                const projectTasks = state.projectTasks[action.payload.projectId] || [];
                const taskIndex = projectTasks.findIndex((task)=>task.task_id === action.payload.task_id);
                if (taskIndex !== -1) {
                    state.projectTasks[action.payload.projectId][taskIndex] = action.payload;
                } else {
                    state.projectTasks[action.payload.projectId] = [
                        ...projectTasks,
                        action.payload
                    ];
                }
            }
        }).addCase(updateTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Task Status
        .addCase(updateTaskStatus.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateTaskStatus.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.tasks.findIndex((task)=>task.task_id === action.payload.task_id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
            if (state.currentTask && state.currentTask.task_id === action.payload.task_id) {
                state.currentTask = action.payload;
            }
            if (action.payload.projectId) {
                const projectTasks = state.projectTasks[action.payload.projectId] || [];
                const taskIndex = projectTasks.findIndex((task)=>task.task_id === action.payload.task_id);
                if (taskIndex !== -1) {
                    state.projectTasks[action.payload.projectId][taskIndex] = action.payload;
                } else {
                    state.projectTasks[action.payload.projectId] = [
                        ...projectTasks,
                        action.payload
                    ];
                }
            }
        }).addCase(updateTaskStatus.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Delete Task
        .addCase(deleteTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(deleteTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks = state.tasks.filter((task)=>task.task_id !== action.payload);
            state.currentTask = null;
            Object.keys(state.projectTasks).forEach((projectId)=>{
                state.projectTasks[projectId] = state.projectTasks[projectId].filter((task)=>task.task_id !== action.payload);
                if (state.projectTasks[projectId].length === 0) {
                    delete state.projectTasks[projectId];
                }
            });
        }).addCase(deleteTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All Task List
        .addCase(getAllTaskList.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllTaskList.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.allTaskList = action.payload;
        }).addCase(getAllTaskList.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All Task By Employee ID
        .addCase(getAllTaskByEmployeeId.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(getAllTaskByEmployeeId.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.employeeTasks = action.payload;
        }).addCase(getAllTaskByEmployeeId.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateTaskReviewStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateTaskReviewStatus.fulfilled, (state, action)=>{
            state.loading = false;
            state.successMessage = action.payload.message;
        // No local task update — payload can be shown via toast or component
        }).addCase(updateTaskReviewStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(downloadTasksReport.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        }).addCase(downloadTasksReport.fulfilled, (state)=>{
            state.status = "succeeded";
        }).addCase(downloadTasksReport.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload || "Failed to download report";
        }).addCase(fetchEmployeeProjectTasks.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchEmployeeProjectTasks.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const { projectId, employeeId } = action.meta.arg; // ✅ Get projectId and employeeId from arguments
            const tasks = action.payload.data; // ✅ Use the response data as-is
            if (!state.employeeProjectTasks[projectId]) {
                state.employeeProjectTasks[projectId] = {};
            }
            state.employeeProjectTasks[projectId][employeeId] = tasks; // ✅ Store it exactly as received
        }).addCase(fetchEmployeeProjectTasks.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        }).addCase(getAllSubTaskByEmployeeId.pending, (s)=>{
            s.status = "loading";
        }).addCase(getAllSubTaskByEmployeeId.fulfilled, (s, a)=>{
            s.status = "succeeded";
            s.employeeSubTasks = a.payload;
        }).addCase(getAllSubTaskByEmployeeId.rejected, (s, a)=>{
            s.status = "failed";
            s.error = a.payload;
        });
    }
});
const { clearError, resetCurrentTask } = taskSlice.actions;
const selectTaskStatus = (state)=>state.task.status;
const selectTaskError = (state)=>state.task.error;
const selectTasksByProjectId = (state, projectId)=>state.task.projectTasks[projectId] || [];
const selectAllTasks = (state)=>state.task.tasks;
const selectCurrentTask = (state)=>state.task.currentTask;
const selectAllTaskList = (state)=>state.task.allTaskList;
const selectAllTaskListByEmployeeId = (state)=>state.task.employeeTasks;
const selectAllSubTaskListByEmployeeId = (state)=>state.task.employeeSubTasks;
const selectEmployeeProjectTasks = (state, projectId, employeeId)=>{
    return state.task.employeeProjectTasks[projectId]?.[employeeId] || [];
};
const __TURBOPACK__default__export__ = taskSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/task/slices/subTaskSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/redux/slices/subTaskSlice.js
__turbopack_context__.s({
    "clearAllSubTasks": (()=>clearAllSubTasks),
    "clearCurrentSubTask": (()=>clearCurrentSubTask),
    "createSubTask": (()=>createSubTask),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteSubTask": (()=>deleteSubTask),
    "fetchSubTasksByTaskId": (()=>fetchSubTasksByTaskId),
    "getSubTaskById": (()=>getSubTaskById),
    "updateSubTask": (()=>updateSubTask),
    "updateSubTaskStatus": (()=>updateSubTaskStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchSubTasksByTaskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/fetchByTaskId", async (taskId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/subtask/getallsubtasks/${taskId}`);
        return {
            taskId,
            subtasks: res.data.subtasks
        };
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const createSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/create", async ({ taskId, subTaskData }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/subtask/createsubtask/${taskId}`, subTaskData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getSubTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/getById", async ({ taskId, subTaskId }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/subtask/getsubtask/${taskId}/${subTaskId}`);
        return res.data.subtask;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/update", async ({ subTaskId, taskId, subTaskData }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/subtask/updatesubtask/${taskId}/${subTaskId}`, subTaskData);
        console.log(subTaskId, taskId, subTaskData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const deleteSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/delete", async ({ taskId, subtaskId }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/subtask/softdeletesubtask/${taskId}/${subtaskId}`);
        return subtaskId;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateSubTaskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/updateStatus", async ({ taskId, subtaskId, status }, { rejectWithValue })=>{
    console.log("Updating subtask status:", {
        taskId,
        subtaskId,
        status
    });
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/subtask/updatesubtaskstatus/${taskId}/${subtaskId}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
// ====================== Slice ======================
const subTaskSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "subTask",
    initialState: {
        subtasks: [],
        currentSubTask: null,
        loading: false,
        error: null
    },
    reducers: {
        clearCurrentSubTask: (state)=>{
            state.currentSubTask = null;
        },
        clearAllSubTasks: (state)=>{
            state.subtasks = [];
        }
    },
    extraReducers: (builder)=>{
        // ========== Fetch Subtasks ==========
        builder.addCase(fetchSubTasksByTaskId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchSubTasksByTaskId.fulfilled, (state, action)=>{
            state.loading = false;
            const { taskId, subtasks } = action.payload;
            state.subtasks = subtasks;
        }).addCase(fetchSubTasksByTaskId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Create Subtask ==========
        builder.addCase(createSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            state.subtasks.push(action.payload);
        }).addCase(createSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Get Subtask By Id ==========
        builder.addCase(getSubTaskById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getSubTaskById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentSubTask = action.payload;
        }).addCase(getSubTaskById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Update Subtask ==========
        builder.addCase(updateSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            const idx = state.subtasks.findIndex((s)=>s._id === action.payload._id);
            if (idx !== -1) state.subtasks[idx] = action.payload;
            if (state.currentSubTask?._id === action.payload._id) {
                state.currentSubTask = action.payload;
            }
        }).addCase(updateSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Delete Subtask ==========
        builder.addCase(deleteSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            state.subtasks = state.subtasks.filter((s)=>s._id !== action.payload);
        }).addCase(deleteSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Update Subtask Status ==========
        builder.addCase(updateSubTaskStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateSubTaskStatus.fulfilled, (state, action)=>{
            state.loading = false;
            const updatedSubtask = action.payload;
            const idx = state.subtasks.findIndex((s)=>s._id === updatedSubtask._id);
            if (idx !== -1) state.subtasks[idx] = updatedSubtask;
            if (state.currentSubTask?._id === updatedSubtask._id) {
                state.currentSubTask = updatedSubtask;
            }
        }).addCase(updateSubTaskStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearCurrentSubTask, clearAllSubTasks } = subTaskSlice.actions;
const __TURBOPACK__default__export__ = subTaskSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/issues/slices/bugSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "assignBug": (()=>assignBug),
    "clearAllBugs": (()=>clearAllBugs),
    "clearErrors": (()=>clearErrors),
    "clearProjectBugs": (()=>clearProjectBugs),
    "createBug": (()=>createBug),
    "default": (()=>__TURBOPACK__default__export__),
    "downloadBugsByMemberId": (()=>downloadBugsByMemberId),
    "downloadBugsByProjectId": (()=>downloadBugsByProjectId),
    "editBug": (()=>editBug),
    "fetchAllBugs": (()=>fetchAllBugs),
    "fetchAllBugsByProjectId": (()=>fetchAllBugsByProjectId),
    "fetchBugByEmployeeId": (()=>fetchBugByEmployeeId),
    "fetchBugByProjectId": (()=>fetchBugByProjectId),
    "fetchEmployeeProjectBugs": (()=>fetchEmployeeProjectBugs),
    "getBugById": (()=>getBugById),
    "resetBugCreation": (()=>resetBugCreation),
    "resolveBug": (()=>resolveBug),
    "selectEmployeeProjectBugs": (()=>selectEmployeeProjectBugs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
//
// ✅ Initial State
//
const initialState = {
    assignBugLoading: false,
    assignBugError: null,
    assignBugSuccess: null,
    bug: null,
    bugs: [],
    allBugs: [],
    bugsByProjectId: [],
    bugsByEmployeeId: [],
    employeeProjectBugs: [],
    bugDetails: null,
    loading: {
        bugCreation: false,
        bugsFetch: false,
        allBugsFetch: false,
        bugsByProjectId: false,
        bugResolve: false,
        bugsByEmployeeId: false,
        bugDownload: false,
        memberBugDownload: false,
        bugEdit: false,
        bugDetailsFetch: false,
        employeeProjectBugs: false
    },
    error: {
        bugCreation: null,
        bugsFetch: null,
        allBugsFetch: null,
        bugsByProjectId: null,
        bugResolve: null,
        bugsByEmployeeId: null,
        bugDownload: null,
        memberBugDownload: null,
        bugEdit: null,
        bugDetailsFetch: null,
        employeeProjectBugs: null
    },
    successMessage: null
};
// Ensure state is initialized with loading and error
const ensureStateIntegrity = (state)=>{
    if (!state.loading) {
        // console.warn("state.loading is null, resetting to initialState.loading");
        state.loading = initialState.loading;
    }
    if (!state.error) {
        // console.warn("state.error is null, resetting to initialState.error");
        state.error = initialState.error;
    }
};
const createBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/createBug", async (bugData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("/bugs/create", bugData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to create bug");
    }
});
const fetchAllBugsByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchAllBugsByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getallbugByProjectId/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch bugs");
    }
});
const fetchBugByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchBugByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getallbugByProjectId/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bugs for project:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch bugs by project");
    }
});
const resolveBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/resolveBug", async ({ bugId, delayReason, resolutionNote }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/bugs/resolve/${bugId}`, {
            delayReason,
            resolutionNote
        });
        return response.data;
    } catch (error) {
        console.error("Error resolving bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to resolve bug");
    }
});
const fetchBugByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchBugByEmployeeId", async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/assigned/${employeeId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching bugs for employee:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch employee bugs");
    }
});
const fetchAllBugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchAllBugs", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getallbugs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch all bugs");
    }
});
const downloadBugsByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/downloadBugsByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/download/${projectId}`, {
            responseType: "blob"
        });
        const blob = new Blob([
            response.data
        ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bugs_${projectId}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return "Download successful";
    } catch (error) {
        console.error("Error downloading bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to download bugs");
    }
});
const downloadBugsByMemberId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/downloadBugsByMemberId", async ({ projectId, memberId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/download-by-assignee/${projectId}/${memberId}`, {
            responseType: "blob"
        });
        const blob = new Blob([
            response.data
        ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bugs_member_${memberId}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return "Member bug report downloaded successfully";
    } catch (error) {
        console.error("Error downloading member bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to download member bug report");
    }
});
const fetchEmployeeProjectBugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchEmployeeProjectBugs", async ({ projectId, employeeId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getbugbyprojectandbmemberid/${projectId}/${employeeId}`);
        if (!response.data) {
            throw new Error("No Bugs found");
        }
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || "Fetch failed");
    }
});
const editBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/editBug", async ({ bugId, bugData }, { rejectWithValue })=>{
    try {
        const formData = new FormData();
        Object.keys(bugData).forEach((key)=>{
            if (key === "attachment" && bugData[key]) {
                formData.append("bugImage", bugData[key]);
            } else if (bugData[key] !== undefined && bugData[key] !== null) {
                formData.append(key, bugData[key]);
            }
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/bugs/editbug/${bugId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error editing bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to edit bug");
    }
});
const getBugById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/getBugById", async (bugId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getbugBybug_id/${bugId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching bug details:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch bug details");
    }
});
const assignBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/assignBug", async ({ bug_id, payload }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/bugs/assign/${bug_id}`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error assigning bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to assign bug");
    }
});
//
// ✅ Slice
//
const bugSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "bugs",
    initialState,
    reducers: {
        resetBugCreation: (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugCreation = false;
            state.error.bugCreation = null;
            state.successMessage = null;
            state.bug = null;
        },
        clearErrors: (state)=>{
            ensureStateIntegrity(state);
            state.error.bugCreation = null;
            state.error.bugsFetch = null;
            state.error.bugResolve = null;
            state.error.bugsByProjectId = null;
            state.error.bugEdit = null;
            state.error.bugDetailsFetch = null;
        },
        clearProjectBugs: (state)=>{
            ensureStateIntegrity(state);
            state.bugsByProjectId = [];
        },
        clearAllBugs: (state)=>{
            ensureStateIntegrity(state);
            state.allBugs = [];
        }
    },
    extraReducers: (builder)=>{
        // Create Bug
        builder.addCase(createBug.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugCreation = true;
            state.error.bugCreation = null;
            state.successMessage = null;
        }).addCase(createBug.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugCreation = false;
            state.bug = action.payload;
            state.bugs.push(action.payload);
            state.successMessage = "Bug created successfully";
        }).addCase(createBug.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugCreation = false;
            state.error.bugCreation = action.payload;
        });
        // Fetch All Bugs
        builder.addCase(fetchAllBugsByProjectId.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugsFetch = true;
            state.error.bugsFetch = null;
        }).addCase(fetchAllBugsByProjectId.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsFetch = false;
            state.bugs = action.payload;
        }).addCase(fetchAllBugsByProjectId.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsFetch = false;
            state.error.bugsFetch = action.payload;
        });
        // Fetch All Bugs (New)
        builder.addCase(fetchAllBugs.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.allBugsFetch = true;
            state.error.allBugsFetch = null;
        }).addCase(fetchAllBugs.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.allBugsFetch = false;
            state.allBugs = action.payload;
        }).addCase(fetchAllBugs.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.allBugsFetch = false;
            state.error.allBugsFetch = action.payload;
        });
        // Fetch Bugs for One Project
        builder.addCase(fetchBugByProjectId.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByProjectId = true;
            state.error.bugsByProjectId = null;
        }).addCase(fetchBugByProjectId.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByProjectId = false;
            state.bugsByProjectId = Array.isArray(action.payload) ? action.payload : [];
        }).addCase(fetchBugByProjectId.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByProjectId = false;
            state.error.bugsByProjectId = action.payload;
        });
        // Resolve Bug
        builder.addCase(resolveBug.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugResolve = true;
            state.error.bugResolve = null;
            state.successMessage = null;
        }).addCase(resolveBug.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugResolve = false;
            state.successMessage = action.payload.message;
            const updatedBug = action.payload.bug;
            state.bugs = state.bugs.map((bug)=>bug.bug_id === updatedBug.bug_id ? updatedBug : bug);
            state.bugsByProjectId = state.bugsByProjectId.map((bug)=>bug.bug_id === updatedBug.bug_id ? updatedBug : bug);
        }).addCase(resolveBug.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugResolve = false;
            state.error.bugResolve = action.payload;
        });
        // Fetch Bugs for Employee
        builder.addCase(fetchBugByEmployeeId.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByEmployeeId = true;
            state.error.bugsByEmployeeId = null;
        }).addCase(fetchBugByEmployeeId.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByEmployeeId = false;
            state.bugsByEmployeeId = action.payload;
        }).addCase(fetchBugByEmployeeId.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugsByEmployeeId = false;
            state.error.bugsByEmployeeId = action.payload;
        });
        // Download Bugs
        builder.addCase(downloadBugsByProjectId.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugDownload = true;
            state.error.bugDownload = null;
            state.successMessage = null;
        }).addCase(downloadBugsByProjectId.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugDownload = false;
            state.successMessage = action.payload;
        }).addCase(downloadBugsByProjectId.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugDownload = false;
            state.error.bugDownload = action.payload;
        });
        // Download Member Bugs
        builder.addCase(downloadBugsByMemberId.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.memberBugDownload = true;
            state.error.memberBugDownload = null;
            state.successMessage = null;
        }).addCase(downloadBugsByMemberId.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.memberBugDownload = false;
            state.successMessage = action.payload;
        }).addCase(downloadBugsByMemberId.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.memberBugDownload = false;
            state.error.memberBugDownload = action.payload;
        });
        // Fetch Bugs by Project + Employee
        builder.addCase(fetchEmployeeProjectBugs.pending, (state)=>{
            ensureStateIntegrity(state);
            state.status = "loading";
            state.error = null;
        }).addCase(fetchEmployeeProjectBugs.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.status = "succeeded";
            state.employeeProjectBugs = action.payload;
        }).addCase(fetchEmployeeProjectBugs.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.status = "failed";
            state.error = action.payload;
        });
        // Edit Bug
        builder.addCase(editBug.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugEdit = true;
            state.error.bugEdit = null;
            state.successMessage = null;
        }).addCase(editBug.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugEdit = false;
            state.bug = action.payload;
            state.successMessage = "Bug updated successfully";
            state.bugs = state.bugs.map((bug)=>bug.bug_id === action.payload.bug_id ? action.payload : bug);
            state.bugsByProjectId = state.bugsByProjectId.map((bug)=>bug.bug_id === action.payload.bug_id ? action.payload : bug);
        }).addCase(editBug.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugEdit = false;
            state.error.bugEdit = action.payload;
        });
        // Get Bug Details by ID
        builder.addCase(getBugById.pending, (state)=>{
            ensureStateIntegrity(state);
            state.loading.bugDetailsFetch = true;
            state.error.bugDetailsFetch = null;
            state.bugDetails = null;
        }).addCase(getBugById.fulfilled, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugDetailsFetch = false;
            state.bugDetails = action.payload;
        }).addCase(getBugById.rejected, (state, action)=>{
            ensureStateIntegrity(state);
            state.loading.bugDetailsFetch = false;
            state.error.bugDetailsFetch = action.payload;
        });
        builder.addCase(assignBug.pending, (state)=>{
            state.assignBugLoading = true;
            state.assignBugError = null;
            state.assignBugSuccess = null;
        }).addCase(assignBug.fulfilled, (state, action)=>{
            state.assignBugLoading = false;
            state.assignBugSuccess = action.payload?.message || "Bug assigned successfully";
        }).addCase(assignBug.rejected, (state, action)=>{
            state.assignBugLoading = false;
            state.assignBugError = action.payload;
        });
    }
});
const { resetBugCreation, clearErrors, clearProjectBugs, clearAllBugs } = bugSlice.actions;
const selectEmployeeProjectBugs = (state, projectId, employeeId)=>{
    return state.bugs.employeeProjectBugs[projectId]?.[employeeId] || [];
};
const __TURBOPACK__default__export__ = bugSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/issues/slices/issuesSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createIssue": (()=>createIssue),
    "default": (()=>__TURBOPACK__default__export__),
    "resetIssueState": (()=>resetIssueState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const createIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("issues/createIssue", async (issueData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("/bugs/createanybug", issueData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating issue:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to create issue");
    }
});
// Create the slice
const issueSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'issues',
    initialState: {
        issue: null,
        loading: false,
        error: null
    },
    reducers: {
        resetIssueState: (state)=>{
            state.issue = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createIssue.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createIssue.fulfilled, (state, action)=>{
            state.loading = false;
            state.issue = action.payload;
        }).addCase(createIssue.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { resetIssueState } = issueSlice.actions;
const __TURBOPACK__default__export__ = issueSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/team/slices/teamMembersSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTeam": (()=>createTeam),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchTeamMembers": (()=>fetchTeamMembers),
    "fetchTeamMembersByTeamId": (()=>fetchTeamMembersByTeamId),
    "fetchTeamMembersExcludingLead": (()=>fetchTeamMembersExcludingLead),
    "updateTeam": (()=>updateTeam)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
// Thunk: Fetch all team members (e.g., all employees)
const fetchTeamMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        // console.log('Fetch all team members API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Fetch all team members error:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members');
    }
});
// Thunk: Create a new team
const createTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/createTeam', async (teamData, { rejectWithValue })=>{
    try {
        // console.log('Creating team with data:', teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/team/createteam', {
            projectId: teamData.projectId,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log('Create team API response:', response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error('Team creation error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create team');
    }
});
// Thunk: Fetch team members by specific team ID (includes team lead)
const fetchTeamMembersByTeamId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchByTeamId', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/teammembers/${teamId}`);
        // console.log(`Fetch team members for team ${teamId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch team members for team ${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch team members by team ID');
    }
});
// Thunk: Fetch team members EXCLUDING team lead
const fetchTeamMembersExcludingLead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchExcludingLead', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/teamlead/${teamId}`);
        // console.log(`Fetch team members excluding lead for team ${teamId}:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Error fetching team members excluding lead for ${teamId}:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch members excluding team lead');
    }
});
// Thunk: Update a team by team ID
const updateTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/updateTeam', async ({ teamId, teamData }, { rejectWithValue })=>{
    try {
        // console.log(`Updating tea/m ${teamId} with data:`, teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/team/updateteam/${teamId}`, {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            console.log(`Update team ${teamId} API response:`, response);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error(`Update team ///${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update team');
    }
});
// Slice
const teamMembersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'teamMembers',
    initialState: {
        members: [],
        teamMembersByTeamId: [],
        teamMembersExcludingLead: [],
        status: 'idle',
        createTeamStatus: 'idle',
        fetchByTeamIdStatus: 'idle',
        fetchExcludingLeadStatus: 'idle',
        updateTeamStatus: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder// Fetch all team members
        .addCase(fetchTeamMembers.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembers.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.members = responseData.map((member)=>({
                        employeeID: member.employeeID || member.id,
                        firstName: member.firstName || member.name?.split(' ')[0] || '',
                        lastName: member.lastName || member.name?.split(' ')[1] || '',
                        email: member.email || ''
                    }));
            } else {
                state.members = [];
            }
        // console.log('Processed all team members:', state.members);
        }).addCase(fetchTeamMembers.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Create team
        .addCase(createTeam.pending, (state)=>{
            state.createTeamStatus = 'loading';
            state.error = null;
        }).addCase(createTeam.fulfilled, (state)=>{
            state.createTeamStatus = 'succeeded';
        }).addCase(createTeam.rejected, (state, action)=>{
            state.createTeamStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members by team ID (includes team lead)
        .addCase(fetchTeamMembersByTeamId.pending, (state)=>{
            state.fetchByTeamIdStatus = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersByTeamId.fulfilled, (state, action)=>{
            state.fetchByTeamIdStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersByTeamId = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersByTeamId = [];
            }
        // console.log('Processed team members by team ID:', state.teamMembersByTeamId);
        }).addCase(fetchTeamMembersByTeamId.rejected, (state, action)=>{
            state.fetchByTeamIdStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members excluding team lead
        .addCase(fetchTeamMembersExcludingLead.pending, (state)=>{
            state.fetchExcludingLeadStatus = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersExcludingLead.fulfilled, (state, action)=>{
            state.fetchExcludingLeadStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersExcludingLead = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersExcludingLead = [];
            }
        // console.log('Processed members excluding team lead:', state.teamMembersExcludingLead);
        }).addCase(fetchTeamMembersExcludingLead.rejected, (state, action)=>{
            state.fetchExcludingLeadStatus = 'failed';
            state.error = action.payload;
        })// Update team
        .addCase(updateTeam.pending, (state)=>{
            state.updateTeamStatus = 'loading';
            state.error = null;
        }).addCase(updateTeam.fulfilled, (state, action)=>{
            state.updateTeamStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            // Optionally update teamMembersByTeamId if the updated team data is returned
            if (responseData && Array.isArray(responseData.teamMembers)) {
                state.teamMembersByTeamId = responseData.teamMembers.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            }
        // console.log('Team updated successfully:', responseData);
        }).addCase(updateTeam.rejected, (state, action)=>{
            state.updateTeamStatus = 'failed';
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = teamMembersSlice.reducer;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project-management/team/slices/viewTeamByProjectIdSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchTeamByProjectId": (()=>fetchTeamByProjectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchTeamByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectTeam/fetchByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getallteamsbyprojectid/${projectId}`);
        // console.log('Team data response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching team:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const projectTeamSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectTeam',
    initialState: {
        teams: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchTeamByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            // Ensure teams is always an array and extract from data property
            state.teams = Array.isArray(action.payload.data) ? action.payload.data : action.payload.data ? [
                action.payload.data
            ] : [];
        // console.log('Processed teams:', state.teams); // Debug log
        }).addCase(fetchTeamByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teams = [];
        });
    }
});
const __TURBOPACK__default__export__ = projectTeamSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/document/slices/documentSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addDocument": (()=>addDocument),
    "clearError": (()=>clearError),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteMultipleDocuments": (()=>deleteMultipleDocuments),
    "deleteSingleDocument": (()=>deleteSingleDocument),
    "downloadDocument": (()=>downloadDocument),
    "fetchDocuments": (()=>fetchDocuments),
    "previewDocument": (()=>previewDocument),
    "resetDocumentsState": (()=>resetDocumentsState),
    "uploadSingleDocument": (()=>uploadSingleDocument)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchDocuments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/fetchDocuments", async (projectId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/document/getalldocuments/${projectId}`);
        return res?.data?.documents;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const uploadSingleDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/uploadSingleDocument", async ({ name, description, file, projectId }, { rejectWithValue })=>{
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('document', file); // File object, not file name
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/document/uploadprojectdocument/${projectId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data.document; // Return just the document object
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const deleteSingleDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/deleteSingleDocument", async (docId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/document/softdeletedocument/${docId}`);
        return docId;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const deleteMultipleDocuments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/deleteMultipleDocuments", async (docIds, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/document/delete/bulk`, {
            docIds
        });
        return docIds;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const downloadDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/downloadDocument", async ({ docId, fileName }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/document/view/${docId}/`, {
            responseType: "blob"
        });
        // Create download link
        const url = window.URL.createObjectURL(new Blob([
            res.data
        ]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName || `document_${docId}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        return {
            docId,
            fileName
        };
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
const previewDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("documents/previewDocument", async (docId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/document/${docId}/preview`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: err.message
        });
    }
});
// ---------------- Slice ----------------
const documentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "documents",
    initialState: {
        items: [],
        loading: false,
        uploading: false,
        deleting: false,
        downloading: false,
        previewing: false,
        error: null,
        previewFile: null
    },
    reducers: {
        resetDocumentsState: (state)=>{
            state.items = [];
            state.loading = false;
            state.uploading = false;
            state.deleting = false;
            state.downloading = false;
            state.previewing = false;
            state.error = null;
            state.previewFile = null;
        },
        clearError: (state)=>{
            state.error = null;
        },
        // Add document manually (for immediate UI feedback)
        addDocument: (state, action)=>{
            state.items.unshift(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch Documents
        .addCase(fetchDocuments.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchDocuments.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload || [];
        }).addCase(fetchDocuments.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message || "Failed to fetch documents";
        })// Upload Document
        .addCase(uploadSingleDocument.pending, (state)=>{
            state.uploading = true;
            state.error = null;
        }).addCase(uploadSingleDocument.fulfilled, (state, action)=>{
            state.uploading = false;
            if (action.payload) {
                state.items.unshift(action.payload); // Add to beginning of array
            }
        }).addCase(uploadSingleDocument.rejected, (state, action)=>{
            state.uploading = false;
            state.error = action.payload?.message || "Upload failed";
        })// Delete Single Document
        .addCase(deleteSingleDocument.pending, (state)=>{
            state.deleting = true;
            state.error = null;
        }).addCase(deleteSingleDocument.fulfilled, (state, action)=>{
            state.deleting = false;
            state.items = state.items.filter((d)=>d._id !== action.payload);
        }).addCase(deleteSingleDocument.rejected, (state, action)=>{
            state.deleting = false;
            state.error = action.payload?.message || "Delete failed";
        })// Delete Multiple Documents
        .addCase(deleteMultipleDocuments.pending, (state)=>{
            state.deleting = true;
            state.error = null;
        }).addCase(deleteMultipleDocuments.fulfilled, (state, action)=>{
            state.deleting = false;
            state.items = state.items.filter((d)=>!action.payload.includes(d._id));
        }).addCase(deleteMultipleDocuments.rejected, (state, action)=>{
            state.deleting = false;
            state.error = action.payload?.message || "Bulk delete failed";
        })// Download Document
        .addCase(downloadDocument.pending, (state)=>{
            state.downloading = true;
            state.error = null;
        }).addCase(downloadDocument.fulfilled, (state)=>{
            state.downloading = false;
        }).addCase(downloadDocument.rejected, (state, action)=>{
            state.downloading = false;
            state.error = action.payload?.message || "Download failed";
        })// Preview Document
        .addCase(previewDocument.pending, (state)=>{
            state.previewing = true;
            state.error = null;
        }).addCase(previewDocument.fulfilled, (state, action)=>{
            state.previewing = false;
            state.previewFile = action.payload;
        }).addCase(previewDocument.rejected, (state, action)=>{
            state.previewing = false;
            state.error = action.payload?.message || "Preview failed";
        });
    }
});
const { resetDocumentsState, clearError, addDocument } = documentSlice.actions;
const __TURBOPACK__default__export__ = documentSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/meetingSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearError": (()=>clearError),
    "clearSelectedMeeting": (()=>clearSelectedMeeting),
    "closeAllModals": (()=>closeAllModals),
    "createMeeting": (()=>createMeeting),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteMeeting": (()=>deleteMeeting),
    "fetchMeetings": (()=>fetchMeetings),
    "fetchMeetingsByContactId": (()=>fetchMeetingsByContactId),
    "getMeetingById": (()=>getMeetingById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedMeeting": (()=>setSelectedMeeting),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateMeeting": (()=>updateMeeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/fetchMeetings', async (email, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/upcoming/${email}`);
        console.log('Fetched meetings:', response.data);
        return response.data.events;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meetings');
    }
});
const createMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/createMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].post('/create-meeting', meetingData);
        // console.log("User not authorized",response.data);
        return response.data;
    } catch (error) {
        //  console.log("Error in createMeeting:", error.response?.url );
        return rejectWithValue(error);
    }
});
const updateMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/updateMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].post(`/meeting/update`, meetingData);
        // console.log(response)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update meeting');
    }
});
const deleteMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/deleteMeeting', async ({ id, email }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].delete(`/meeting/${email}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete meeting');
    }
});
const getMeetingById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/getMeetingById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meeting/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meeting');
    }
});
const fetchMeetingsByContactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/fetchMeetingsByContactId', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/contact/${contactId}`);
        // console.log("Fetched contact meetings:", response.data);
        return response.data;
    } catch (error) {
        // console.error("Error in fetchMeetingsByContactId:", error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meetings by contactId');
    }
});
const initialState = {
    meetings: [],
    selectedMeeting: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    contactMeetings: [],
    contactMeetingsLoading: false,
    contactMeetingsError: null,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const meetingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'meetings',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedMeeting: (state, action)=>{
            state.selectedMeeting = action.payload;
        },
        clearSelectedMeeting: (state)=>{
            state.selectedMeeting = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch meetings
        .addCase(fetchMeetings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchMeetings.fulfilled, (state, action)=>{
            state.loading = false;
            state.meetings = action.payload;
        }).addCase(fetchMeetings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create meeting
        .addCase(createMeeting.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(createMeeting.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.meetings.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(createMeeting.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update meeting
        .addCase(updateMeeting.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateMeeting.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.meetings.findIndex((m)=>m.id === action.payload.id);
            if (index !== -1) {
                state.meetings[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateMeeting.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete meeting
        .addCase(deleteMeeting.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteMeeting.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.meetings = state.meetings.filter((m)=>m.id !== action.payload);
        }).addCase(deleteMeeting.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get meeting by ID
        .addCase(getMeetingById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getMeetingById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedMeeting = action.payload;
        }).addCase(getMeetingById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Fetch meetings by contact ID
        .addCase(fetchMeetingsByContactId.pending, (state)=>{
            state.contactMeetingsLoading = true;
            state.contactMeetingsError = null;
        }).addCase(fetchMeetingsByContactId.fulfilled, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactMeetings = action.payload.events;
        }).addCase(fetchMeetingsByContactId.rejected, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactMeetingsError = action.payload;
        });
    }
});
const { clearError, setSelectedMeeting, clearSelectedMeeting, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = meetingSlice.actions;
const __TURBOPACK__default__export__ = meetingSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/slices/momSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMoM": (()=>createMoM),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchMoMByMeetingId": (()=>fetchMoMByMeetingId),
    "fetchMoMView": (()=>fetchMoMView),
    "fetchMoMs": (()=>fetchMoMs),
    "resetMoMByMeetingId": (()=>resetMoMByMeetingId),
    "updateMoM": (()=>updateMoM)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchMoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMs', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/mom/getallmoms');
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoMs');
    }
});
const fetchMoMByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMByMeetingId', async (meetingId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/mom/byMeeting/${meetingId}`);
        console.log(response);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoM by meeting ID');
    }
});
const fetchMoMView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMView', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/mom/view/${momId}`, {
            responseType: 'blob'
        });
        // Log response details for debugging
        // console.log('fetchMoMView response:', {
        //   status: response.status,
        //   headers: response.headers,
        //   contentType: response.headers['content-type'],
        // });
        // Validate response is a PDF
        const contentType = response.headers['content-type'];
        if (!contentType.includes('application/pdf')) {
            throw new Error('Response is not a valid PDF');
        }
        const pdfUrl = URL.createObjectURL(response.data); // Use response.data directly
        return {
            pdfUrl,
            momId
        };
    } catch (error) {
        // console.error('fetchMoMView error:', {
        //   message: error.message,
        //   response: error.response,
        //   status: error.response?.status,
        //   data: error.response?.data,
        // });
        return rejectWithValue(error.message || 'Failed to fetch MoM PDF');
    }
});
const createMoM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("mom/createMoM", async (momData, { rejectWithValue })=>{
    try {
        console.log("Payload being sent:", momData); // Debug: Log the FormData
        for (let [key, value] of momData.entries()){
        // console.log(`${key}:`, value); // Debug: Log FormData entries
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("/mom/createmom", momData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        // console.error("Error in createMoM:", error); // Debug: Log errors
        return rejectWithValue(error.response?.data?.message || "Failed to create MoM");
    }
});
const updateMoM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("mom/updateMoM", async (momData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("/mom/createmom", momData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update MoM");
    }
});
const momSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'mom',
    initialState: {
        // All MoMs
        mom: [],
        momLoading: false,
        momError: null,
        // MoM by Meeting ID
        momByMeetingId: null,
        momByMeetingIdLoading: false,
        momByMeetingIdError: null,
        // MoM View (PDF)
        momView: null,
        momViewLoading: false,
        momViewError: null
    },
    reducers: {
        resetMoMByMeetingId: (state)=>{
            if (state.momView?.pdfUrl) {
                URL.revokeObjectURL(state.momView.pdfUrl); // Clean up blob URL
            }
            state.momByMeetingId = null;
            state.momByMeetingIdLoading = false;
            state.momByMeetingIdError = null;
            state.momView = null;
            state.momViewLoading = false;
            state.momViewError = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch all MoMs
        .addCase(fetchMoMs.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(fetchMoMs.fulfilled, (state, action)=>{
            state.momLoading = false;
            state.mom = action.payload;
        }).addCase(fetchMoMs.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        })// Fetch MoM by Meeting ID
        .addCase(fetchMoMByMeetingId.pending, (state)=>{
            state.momByMeetingIdLoading = true;
            state.momByMeetingIdError = null;
        }).addCase(fetchMoMByMeetingId.fulfilled, (state, action)=>{
            state.momByMeetingIdLoading = false;
            state.momByMeetingId = action.payload;
        }).addCase(fetchMoMByMeetingId.rejected, (state, action)=>{
            state.momByMeetingIdLoading = false;
            state.momByMeetingIdError = action.payload;
        })// Fetch MoM View (PDF)
        .addCase(fetchMoMView.pending, (state)=>{
            state.momViewLoading = true;
            state.momViewError = null;
        }).addCase(fetchMoMView.fulfilled, (state, action)=>{
            state.momViewLoading = false;
            state.momView = action.payload;
        }).addCase(fetchMoMView.rejected, (state, action)=>{
            state.momViewLoading = false;
            state.momViewError = action.payload;
        })// Create MoM
        .addCase(createMoM.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(createMoM.fulfilled, (state, action)=>{
            state.momLoading = false;
            state.mom.push(action.payload); // Add new MoM to list
            state.momByMeetingId = action.payload; // Update current MoM
        }).addCase(createMoM.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        })// Update MoM
        .addCase(updateMoM.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(updateMoM.fulfilled, (state, action)=>{
            state.momLoading = false;
            const updated = action.payload;
            state.mom = state.mom.map((m)=>m._id === updated._id ? updated : m);
            if (state.momByMeetingId && state.momByMeetingId._id === updated._id) {
                state.momByMeetingId = updated;
            }
        }).addCase(updateMoM.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        });
    }
});
const { resetMoMByMeetingId } = momSlice.actions;
const __TURBOPACK__default__export__ = momSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/escalation/slices/causeSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearCauseState": (()=>clearCauseState),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllCauses": (()=>getAllCauses),
    "getCauseByMeetingId": (()=>getCauseByMeetingId),
    "submitCause": (()=>submitCause),
    "updateCauseStatusById": (()=>updateCauseStatusById),
    "updateCauseStatusByMeetingId": (()=>updateCauseStatusByMeetingId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const submitCause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/submit', async ({ meetingId, reason, submittedBy }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/showcause/submit', {
            meetingId,
            reason,
            submittedBy
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Submit failed'
        });
    }
});
const getCauseByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/getByMeetingId', async (meetingId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/showcause/meeting/${meetingId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Not found'
        });
    }
});
const getAllCauses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/getAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/showcause/all');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Fetch failed'
        });
    }
});
const updateCauseStatusById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/updateStatusById', async ({ id, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/showcause/updatestatus/${id}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
const updateCauseStatusByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/updateStatusByMeetingId', async ({ meetingId, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/api/showcause/meeting/${meetingId}/status`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
// ========================
// INITIAL STATE
// ========================
const initialState = {
    loading: false,
    error: null,
    cause: null,
    allCauses: [],
    submittedData: null // For submit
};
// ========================
// SLICE
// ========================
const causeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'cause',
    initialState,
    reducers: {
        clearCauseState: (state)=>{
            state.loading = false;
            state.error = null;
            state.cause = null;
            state.submittedData = null;
        }
    },
    extraReducers: (builder)=>{
        // === Submit Cause ===
        builder.addCase(submitCause.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(submitCause.fulfilled, (state, action)=>{
            state.loading = false;
            state.submittedData = action.payload.data;
        });
        builder.addCase(submitCause.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get Cause by Meeting ID ===
        builder.addCase(getCauseByMeetingId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getCauseByMeetingId.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(getCauseByMeetingId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get All Causes ===
        builder.addCase(getAllCauses.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCauses.fulfilled, (state, action)=>{
            state.loading = false;
            state.allCauses = action.payload.data;
        });
        builder.addCase(getAllCauses.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by ID ===
        builder.addCase(updateCauseStatusById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateCauseStatusById.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(updateCauseStatusById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by Meeting ID ===
        builder.addCase(updateCauseStatusByMeetingId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateCauseStatusByMeetingId.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(updateCauseStatusByMeetingId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
    }
});
const { clearCauseState } = causeSlice.actions;
const __TURBOPACK__default__export__ = causeSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/projectmeetingmomSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createProjectMeetingMom": (()=>createProjectMeetingMom),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProjectMeetingMom": (()=>deleteProjectMeetingMom),
    "fetchAllProjectMoms": (()=>fetchAllProjectMoms),
    "fetchMeetingMomById": (()=>fetchMeetingMomById),
    "fetchMeetingMomView": (()=>fetchMeetingMomView),
    "resetMeetingMomView": (()=>resetMeetingMomView),
    "resetSelectedMom": (()=>resetSelectedMom),
    "updateProjectMeetingMom": (()=>updateProjectMeetingMom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const createProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/create', async (momData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projectmom/creatprojectmom', momData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to create project MoM');
    }
});
const fetchAllProjectMoms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchAll', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/fetchallmom/${projectId}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoMs');
    }
});
const fetchMeetingMomById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchById', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/getmombymomId/${momId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoM');
    }
});
const updateProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/update', async ({ momId, updatedData }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/projectmom/creatprojectmom`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update MoM');
    }
});
const deleteProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/delete', async (momId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/projectmom/${momId}`);
        return momId; // return deleted ID so we can remove from state
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete MoM');
    }
});
const fetchMeetingMomView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchPdf', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/view/${momId}`, {
            responseType: 'blob'
        });
        const contentType = response.headers['content-type'];
        if (!contentType.includes('application/pdf')) {
            throw new Error('Response is not a valid PDF');
        }
        const pdfUrl = URL.createObjectURL(response.data);
        return {
            pdfUrl,
            momId
        };
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to fetch MoM PDF');
    }
});
/* ========== Slice ========== */ const projectMeetingMomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectMeetingMom',
    initialState: {
        moms: [],
        momsLoading: false,
        momsError: null,
        selectedMom: null,
        selectedMomLoading: false,
        selectedMomError: null,
        deleteSuccess: false,
        meetingMomView: null,
        meetingMomViewLoading: false,
        meetingMomViewError: null
    },
    reducers: {
        resetSelectedMom: (state)=>{
            state.selectedMom = null;
            state.selectedMomLoading = false;
            state.selectedMomError = null;
            state.deleteSuccess = false;
        },
        resetMeetingMomView: (state)=>{
            state.meetingMomView = null;
            state.meetingMomViewLoading = false;
            state.meetingMomViewError = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create MoM
        .addCase(createProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(createProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
            state.moms.unshift(action.payload); // add new mom to top
        }).addCase(createProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Fetch all MoMs
        .addCase(fetchAllProjectMoms.pending, (state)=>{
            state.momsLoading = true;
            state.momsError = null;
        }).addCase(fetchAllProjectMoms.fulfilled, (state, action)=>{
            state.momsLoading = false;
            state.moms = action.payload;
        }).addCase(fetchAllProjectMoms.rejected, (state, action)=>{
            state.momsLoading = false;
            state.momsError = action.payload;
        })// Fetch by ID
        .addCase(fetchMeetingMomById.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(fetchMeetingMomById.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
        }).addCase(fetchMeetingMomById.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Update MoM
        .addCase(updateProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(updateProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
            state.moms = state.moms.map((mom)=>mom.id === action.payload.id ? action.payload : mom);
        }).addCase(updateProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Delete MoM
        .addCase(deleteProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
            state.deleteSuccess = false;
        }).addCase(deleteProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = null;
            state.deleteSuccess = true;
            state.moms = state.moms.filter((mom)=>mom.id !== action.payload);
        }).addCase(deleteProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
            state.deleteSuccess = false;
        })// Fetch MoM PDF
        .addCase(fetchMeetingMomView.pending, (state)=>{
            state.meetingMomViewLoading = true;
            state.meetingMomViewError = null;
            state.meetingMomView = null;
        }).addCase(fetchMeetingMomView.fulfilled, (state, action)=>{
            state.meetingMomViewLoading = false;
            state.meetingMomView = action.payload;
        }).addCase(fetchMeetingMomView.rejected, (state, action)=>{
            state.meetingMomViewLoading = false;
            state.meetingMomViewError = action.payload;
            state.meetingMomView = null;
        });
    }
});
const { resetSelectedMom, resetMeetingMomView } = projectMeetingMomSlice.actions;
const __TURBOPACK__default__export__ = projectMeetingMomSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/projectShowCauseSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProjectShowCauseState": (()=>clearProjectShowCauseState),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllProjectShowCauses": (()=>getAllProjectShowCauses),
    "getProjectShowCauseByMomId": (()=>getProjectShowCauseByMomId),
    "submitProjectShowCause": (()=>submitProjectShowCause),
    "updateProjectShowCauseStatusById": (()=>updateProjectShowCauseStatusById),
    "updateProjectShowCauseStatusByMomId": (()=>updateProjectShowCauseStatusByMomId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const submitProjectShowCause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/submit', async ({ projectId, reason, submittedBy }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projectshowcause/submit', {
            projectId,
            reason,
            submittedBy
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Submit failed'
        });
    }
});
const getProjectShowCauseByMomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/getByMomId', async (momId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectshowcause/mom/${momId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Not found'
        });
    }
});
const getAllProjectShowCauses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/getAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projectshowcause/all');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Fetch failed'
        });
    }
});
const updateProjectShowCauseStatusById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/updateStatusById', async ({ id, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projectshowcause/updatestatus/${id}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
const updateProjectShowCauseStatusByMomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/updateStatusByMomId', async ({ momId, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/api/projectshowcause/mom/${momId}/status`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
// ========================
// INITIAL STATE
// ========================
const initialState = {
    loading: false,
    error: null,
    projectShowCause: null,
    allProjectShowCauses: [],
    submittedData: null // For submit
};
// ========================
// SLICE
// ========================
const projectShowCauseSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectShowCause',
    initialState,
    reducers: {
        clearProjectShowCauseState: (state)=>{
            state.loading = false;
            state.error = null;
            state.projectShowCause = null;
            state.submittedData = null;
        }
    },
    extraReducers: (builder)=>{
        // === Submit ===
        builder.addCase(submitProjectShowCause.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(submitProjectShowCause.fulfilled, (state, action)=>{
            state.loading = false;
            state.submittedData = action.payload.data;
        });
        builder.addCase(submitProjectShowCause.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get by MOM ID ===
        builder.addCase(getProjectShowCauseByMomId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProjectShowCauseByMomId.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(getProjectShowCauseByMomId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get All ===
        builder.addCase(getAllProjectShowCauses.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllProjectShowCauses.fulfilled, (state, action)=>{
            state.loading = false;
            state.allProjectShowCauses = action.payload.data;
        });
        builder.addCase(getAllProjectShowCauses.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by ID ===
        builder.addCase(updateProjectShowCauseStatusById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateProjectShowCauseStatusById.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(updateProjectShowCauseStatusById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by MOM ID ===
        builder.addCase(updateProjectShowCauseStatusByMomId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateProjectShowCauseStatusByMomId.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(updateProjectShowCauseStatusByMomId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
    }
});
const { clearProjectShowCauseState } = projectShowCauseSlice.actions;
const __TURBOPACK__default__export__ = projectShowCauseSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/master/slices/slotMasterSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// store/features/slot/slotSlice.js
__turbopack_context__.s({
    "createSlot": (()=>createSlot),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteSlot": (()=>deleteSlot),
    "fetchAllSlots": (()=>fetchAllSlots)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const createSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/create', async (slotData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/slot/createslot', slotData);
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
const fetchAllSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/slot/getallslots');
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
const deleteSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/delete', async (slotNo, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/slot/delteslot/${slotNo}`);
        return res.data.deleted;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
// 🧠 Initial state
const initialState = {
    slots: [],
    loading: false,
    error: null
};
const slotSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'slots',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder// Fetch All Slots
        .addCase(fetchAllSlots.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchAllSlots.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots = action.payload;
        }).addCase(fetchAllSlots.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create Slot
        .addCase(createSlot.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createSlot.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots.push(action.payload);
        }).addCase(createSlot.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Delete Slot
        .addCase(deleteSlot.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteSlot.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots = state.slots.filter((s)=>s.slotNo !== action.payload.slotNo);
        }).addCase(deleteSlot.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = slotSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/master/slices/serviceMasterSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addService": (()=>addService),
    "clearError": (()=>clearError),
    "clearSelectedService": (()=>clearSelectedService),
    "closeAllModals": (()=>closeAllModals),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteService": (()=>deleteService),
    "fetchServices": (()=>fetchServices),
    "getServiceById": (()=>getServiceById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedService": (()=>setSelectedService),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateService": (()=>updateService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/fetchServices', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/service/getservice');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch services');
    }
});
const addService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/addService', async (serviceData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/service/createservice', serviceData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add service');
    }
});
const updateService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/updateService', async (serviceData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/service/updateservice/${serviceData.id}`, serviceData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update service');
    }
});
const deleteService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/deleteService', async (serviceId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/service/deleteservice/${serviceId}`);
        return serviceId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete service');
    }
});
const getServiceById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/getServiceById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/service/getServiceById/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch service');
    }
});
const initialState = {
    services: [],
    selectedService: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const serviceSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'services',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedService: (state, action)=>{
            state.selectedService = action.payload;
        },
        clearSelectedService: (state)=>{
            state.selectedService = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch services
        .addCase(fetchServices.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchServices.fulfilled, (state, action)=>{
            state.loading = false;
            state.services = action.payload;
        }).addCase(fetchServices.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Add service
        .addCase(addService.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(addService.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.services.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(addService.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update service
        .addCase(updateService.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateService.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.services.findIndex((s)=>s.id === action.payload.id);
            if (index !== -1) {
                state.services[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateService.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete service
        .addCase(deleteService.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteService.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.services = state.services.filter((s)=>s.id !== action.payload);
        }).addCase(deleteService.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get service by ID
        .addCase(getServiceById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getServiceById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedService = action.payload;
        }).addCase(getServiceById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearError, setSelectedService, clearSelectedService, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = serviceSlice.actions;
const __TURBOPACK__default__export__ = serviceSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/master/slices/industriesMasterSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addIndustry": (()=>addIndustry),
    "clearError": (()=>clearError),
    "clearSelectedIndustry": (()=>clearSelectedIndustry),
    "closeAllModals": (()=>closeAllModals),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteIndustry": (()=>deleteIndustry),
    "fetchIndustries": (()=>fetchIndustries),
    "getIndustryById": (()=>getIndustryById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedIndustry": (()=>setSelectedIndustry),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateIndustry": (()=>updateIndustry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
;
const fetchIndustries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/fetchIndustries', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/industry/getindustry');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch industries');
    }
});
const addIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/addIndustry', async (industryData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/industry/createindustry', industryData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add industry');
    }
});
const updateIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/updateIndustry', async (industryData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/industry/updateIndustry/${industryData.id}`, industryData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update industry');
    }
});
const deleteIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/deleteIndustry', async (industryId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/industry/deleteIndustry/${industryId}`);
        return industryId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete industry');
    }
});
const getIndustryById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/getIndustryById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/industry/IndustryById/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch industry');
    }
});
const initialState = {
    industries: [],
    selectedIndustry: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const industrySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'industries',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedIndustry: (state, action)=>{
            state.selectedIndustry = action.payload;
        },
        clearSelectedIndustry: (state)=>{
            state.selectedIndustry = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch industries
        .addCase(fetchIndustries.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchIndustries.fulfilled, (state, action)=>{
            state.loading = false;
            state.industries = action.payload;
        }).addCase(fetchIndustries.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Add industry
        .addCase(addIndustry.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(addIndustry.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.industries.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(addIndustry.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update industry
        .addCase(updateIndustry.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateIndustry.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.industries.findIndex((i)=>i._id === action.payload._id);
            if (index !== -1) {
                state.industries[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateIndustry.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete industry
        .addCase(deleteIndustry.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteIndustry.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.industries = state.industries.filter((i)=>i._id !== action.payload);
        }).addCase(deleteIndustry.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get industry by ID
        .addCase(getIndustryById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getIndustryById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedIndustry = action.payload;
        }).addCase(getIndustryById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearError, setSelectedIndustry, clearSelectedIndustry, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = industrySlice.actions;
const __TURBOPACK__default__export__ = industrySlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
//1.setting/commom slice
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$slices$2f$sidebarSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/settings/slices/sidebarSlice.js [app-client] (ecmascript)");
//2. Communication
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$communication$2f$slices$2f$notificationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/communication/slices/notificationSlice.js [app-client] (ecmascript)");
//3. Auth & User
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$profileSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/user/slices/profileSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/slices/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/user/slices/userSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$employeeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/user/slices/employeeSlice.js [app-client] (ecmascript)");
//2.dashbaord/overview
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$slices$2f$dashboardSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/slices/dashboardSlice.js [app-client] (ecmascript)");
//3.marketing
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketing$2f$slices$2f$contactSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketing/slices/contactSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketing$2f$slices$2f$MarketingOverviewSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketing/slices/MarketingOverviewSlice.js [app-client] (ecmascript)");
//4.sales
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/sales/slices/quotationSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationRequestSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/sales/slices/quotationRequestSlice.js [app-client] (ecmascript)");
//6. meeting
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/slices/meetSlice.js [app-client] (ecmascript)");
//5.client
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$client$2d$management$2f$slices$2f$clientSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/client-management/slices/clientSlice.js [app-client] (ecmascript)");
//6.project management
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/analytics/slices/projectAnalyticsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/project/slices/projectSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$teamSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/team/slices/teamSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/slices/taskSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$subTaskSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/slices/subTaskSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$slices$2f$bugSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/issues/slices/bugSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$slices$2f$issuesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/issues/slices/issuesSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$teamMembersSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/team/slices/teamMembersSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$viewTeamByProjectIdSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/team/slices/viewTeamByProjectIdSlice.js [app-client] (ecmascript)");
//7.document
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$slices$2f$documentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/document/slices/documentSlice.js [app-client] (ecmascript)");
// module reducer
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meetingSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/meetingSlice.js [app-client] (ecmascript)");
// import meetingCalendarReducer from "@/features/calender/meetingCalendarSlice";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/slices/momSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$escalation$2f$slices$2f$causeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/escalation/slices/causeSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetingmomSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectmeetingmomSlice.js [app-client] (ecmascript)"); // Adjust path as needed
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectShowCauseSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectShowCauseSlice.js [app-client] (ecmascript)");
//master table
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$slotMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/master/slices/slotMasterSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$serviceMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/master/slices/serviceMasterSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$industriesMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/master/slices/industriesMasterSlice.js [app-client] (ecmascript)");
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
;
;
const initialState = {
    initialized: false,
    loading: false,
    error: null
};
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        app: (state = initialState, action)=>{
            switch(action.type){
                case "app/initialize":
                    return {
                        ...state,
                        initialized: true
                    };
                case "app/setLoading":
                    return {
                        ...state,
                        loading: action.payload
                    };
                case "app/setError":
                    return {
                        ...state,
                        error: action.payload
                    };
                default:
                    return state;
            }
        },
        //1 setting
        sidebar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$slices$2f$sidebarSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //2 user & auth
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$profileSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        notifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$communication$2f$slices$2f$notificationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        employee: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$user$2f$slices$2f$employeeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //3 dashboard
        dashboard: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$slices$2f$dashboardSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //4 marketing phase
        marketingOverview: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketing$2f$slices$2f$MarketingOverviewSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        contact: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketing$2f$slices$2f$contactSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //6 sales & Meet phase
        quotation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        quotationRequests: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationRequestSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        // module reducer
        meetings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meetingSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        // meetingCalendar: meetingCalendarReducer,
        mom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //7 client management
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$client$2d$management$2f$slices$2f$clientSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //8 project management
        project: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        projectAnalytics: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$analytics$2f$slices$2f$projectAnalyticsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        teamMembers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$teamMembersSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        projectTeam: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$viewTeamByProjectIdSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //project meeting
        projectMeetingMom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetingmomSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        projectShowCause: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectShowCauseSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        task: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        subTask: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$subTaskSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        team: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$team$2f$slices$2f$teamSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        bugs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$slices$2f$bugSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$issues$2f$slices$2f$issuesSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //9 escalation
        cause: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$escalation$2f$slices$2f$causeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //10 document
        documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$document$2f$slices$2f$documentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        //11 master
        slots: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$slotMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$serviceMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        industries: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$master$2f$slices$2f$industriesMasterSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
// Initialize store
store.dispatch({
    type: "app/initialize"
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/provider.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sonner.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client"
// import { useTheme } from "next-themes"
// import { Toaster as Sonner } from "sonner";
// const Toaster = ({
//   ...props
// }) => {
//   const { theme = "system" } = useTheme()
//   return (
//     <Sonner
//       theme={theme}
//       className="toaster group"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)"
//         }
//       }
//       {...props} />
//   );
// }
// export { Toaster }
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = (props)=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        position: "top-right",
        richColors: true,
        closeButton: true,
        toastOptions: {
            // Default toast style
            style: {
                background: "var(--toast-bg, #1f2937)",
                color: "var(--toast-text, #f9fafb)",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255,255,255,0.1)"
            },
            // ✅ Success toast
            success: {
                style: {
                    background: "#16a34a",
                    color: "#ffffff",
                    border: "1px solid #15803d"
                }
            },
            // ✅ Error toast
            error: {
                style: {
                    background: "#dc2626",
                    color: "#ffffff",
                    border: "1px solid #991b1b"
                }
            },
            // ✅ Warning toast
            warning: {
                style: {
                    background: "#f59e0b",
                    color: "#ffffff",
                    border: "1px solid #b45309"
                }
            },
            // ✅ Info toast
            info: {
                style: {
                    background: "#3b82f6",
                    color: "#ffffff",
                    border: "1px solid #1d4ed8"
                }
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/loader/Toast.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientOnlyToaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ClientOnlyToaster(props) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnlyToaster.useEffect": ()=>{
            setMounted(true);
        }
    }["ClientOnlyToaster.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/loader/Toast.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_s(ClientOnlyToaster, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientOnlyToaster;
var _c;
__turbopack_context__.k.register(_c, "ClientOnlyToaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_39efc777._.js.map