module.exports = {

"[project]/.next-internal/server/app/(protected)/projects/[projectId]/[[...slug]]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(protected)/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protected)/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // app/projects/[projectId]/page.js
// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   Maximize2,
//   ArrowLeft,
//   X,
//   Plus,
//   Edit,
//   Trash2,
//   User,
//   Calendar,
//   Bug,
//   FileText,
//   Home,
//   AlertCircle,
//   CheckCircle2,
//   ChevronRight,
// } from "lucide-react";
// import { format } from "date-fns";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { toast } from "sonner";
// export default function ProjectPage() {
//   const router = useRouter();
//   const { projectId, slug = [] } = useParams();
//   const slugArray = Array.isArray(slug) ? slug : [slug];
//   const module = slugArray[0] || "overview";
//   const itemId = slugArray[1] ? Number(slugArray[1]) : null;
//   const action = slugArray[2]; // "create" | "edit"
//   // ── Data ─────────────────────────────────────
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Design dashboard", description: "Create new analytics dashboard with charts and metrics", status: "In Progress", assignee: "Alice", dueDate: "2025-12-01" },
//     { id: 2, title: "Fix login bug", description: "Users can't login with Google OAuth", status: "Open", assignee: "Bob", dueDate: null },
//     { id: 3, title: "Implement dark mode", description: "Add toggle and save preference", status: "Done", assignee: "You", dueDate: "2025-11-25" },
//   ]);
//   const [bugs, setBugs] = useState([
//     { id: 101, title: "Button not clickable on mobile", description: "Tap area too small on iOS Safari", severity: "High", status: "Open", assignedTo: "Carol", reportedDate: "2025-11-18" },
//     { id: 102, title: "Typo in footer copyright", description: "Year shows 2024 instead of 2025", severity: "Low", status: "Closed", assignedTo: "Dave", reportedDate: "2025-11-15" },
//   ]);
//   const [reports, setReports] = useState([
//     { id: 201, name: "Q4 2025 Progress Report", type: "quarterly", createdBy: "Eve", createdAt: "2025-11-10", summary: "Overall velocity up 23% from last quarter..." },
//     { id: 202, name: "Security Audit November", type: "compliance", createdBy: "Frank", createdAt: "2025-11-19", summary: "No critical vulnerabilities found." },
//   ]);
//   // ── Panel State ──────────────────────────────
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [panelMode, setPanelMode] = useState("view"); // view | create | edit
//   // Sync URL with Panel
//   useEffect(() => {
//     if (!itemId && !action) {
//       setSelectedItem(null);
//       setIsExpanded(false);
//       return;
//     }
//     if (action === "create") {
//       setPanelMode("create");
//       setSelectedItem({});
//       setIsExpanded(false);
//     } else if (action === "edit" && itemId) {
//       setPanelMode("edit");
//       const item = getItemById(module, itemId);
//       setSelectedItem(item);
//     } else if (itemId) {
//       setPanelMode("view");
//       const item = getItemById(module, itemId);
//       setSelectedItem(item);
//     }
//   }, [module, itemId, action]);
//   const getItemById = (mod, id) => {
//     if (mod === "task") return tasks.find(t => t.id === id);
//     if (mod === "bug") return bugs.find(b => b.id === id);
//     if (mod === "report") return reports.find(r => r.id === id);
//     return null;
//   };
//   const closePanel = () => router.push(`/projects/${projectId}/${module}`);
//   const saveItem = (data) => {
//     if (panelMode === "create") {
//       let newId = 0;
//       let setter;
//       if (module === "task") { newId = Math.max(...tasks.map(t => t.id), 0) + 1; setter = setTasks; }
//       if (module === "bug") { newId = Math.max(...bugs.map(b => b.id), 0) + 1; setter = setBugs; }
//       if (module === "report") { newId = Math.max(...reports.map(r => r.id), 0) + 1; setter = setReports; }
//       setter(prev => [{ id: newId, ...data }, ...prev]);
//       toast.success(`${module.charAt(0).toUpperCase() + module.slice(1)} created successfully!`);
//       router.push(`/projects/${projectId}/${module}/${newId}`);
//     } else if (panelMode === "edit") {
//       if (module === "task") setTasks(prev => prev.map(t => t.id === selectedItem.id ? { ...t, ...data } : t));
//       if (module === "bug") setBugs(prev => prev.map(b => b.id === selectedItem.id ? { ...b, ...data } : b));
//       if (module === "report") setReports(prev => prev.map(r => r.id === selectedItem.id ? { ...r, ...data } : r));
//       toast.success("Changes saved!");
//       router.push(`/projects/${projectId}/${module}/${selectedItem.id}`);
//     }
//   };
//   const deleteItem = () => {
//     if (!selectedItem?.id) return;
//     if (module === "task") setTasks(prev => prev.filter(t => t.id !== selectedItem.id));
//     if (module === "bug") setBugs(prev => prev.filter(b => b.id !== selectedItem.id));
//     if (module === "report") setReports(prev => prev.filter(r => r.id !== selectedItem.id));
//     toast.success("Item deleted");
//     closePanel();
//   };
//   const openCreate = () => router.push(`/projects/${projectId}/${module}/create`);
//   const openEdit = () => router.push(`/projects/${projectId}/${module}/${itemId}/edit`);
//   const getItems = () => {
//     if (module === "task") return tasks;
//     if (module === "bug") return bugs;
//     if (module === "report") return reports;
//     return [];
//   };
//   const getModuleTitle = () => module.charAt(0).toUpperCase() + module.slice(1) + "s";
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* LEFT: List Panel */}
//       <div className={`transition-all duration-500 ease-in-out bg-white border-r border-gray-200 ${isExpanded ? "w-0 opacity-0 overflow-hidden" : "w-full max-w-2xl"}`}>
//         <div className="p-8 h-full overflow-y-auto">
//           <h1 className="text-3xl font-bold mb-8 text-gray-900">Project {projectId}</h1>
//           <Tabs value={module} onValueChange={(v) => router.push(`/projects/${projectId}/${v}`)}>
//             <TabsList className="grid w-full grid-cols-4 mb-10">
//               <TabsTrigger value="overview"><Home className="w-4 h-4 mr-2" /> Overview</TabsTrigger>
//               <TabsTrigger value="task">Tasks ({tasks.length})</TabsTrigger>
//               <TabsTrigger value="bug"><Bug className="w-4 h-4 mr-2" /> Bugs ({bugs.length})</TabsTrigger>
//               <TabsTrigger value="report"><FileText className="w-4 h-4 mr-2" /> Reports ({reports.length})</TabsTrigger>
//             </TabsList>
//             <TabsContent value="overview">
//               <Card className="p-16 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Project {projectId}</h2>
//                 <p className="text-lg text-gray-600">Select a module from above to manage tasks, bugs, or reports.</p>
//               </Card>
//             </TabsContent>
//             {/* TASKS */}
//             <TabsContent value="task" className="space-y-5">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="w-4 h-4 mr-2" /> New Task
//                 </Button>
//               </div>
//               {tasks.map(task => (
//                 <Card
//                   key={task.id}
//                   className={`p-5 cursor-pointer transition-all hover:shadow-lg ${selectedItem?.id === task.id ? "border-blue-500 border-2 shadow-xl" : "border"}`}
//                   onClick={() => router.push(`/projects/${projectId}/task/${task.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
//                       <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
//                         <Badge variant={task.status === "Open" ? "secondary" : task.status === "In Progress" ? "default" : "outline"}>
//                           {task.status}
//                         </Badge>
//                         <span className="flex items-center gap-1 text-gray-600"><User className="w-3.5 h-3.5" /> {task.assignee}</span>
//                         {task.dueDate && <span className="flex items-center gap-1 text-gray-600"><Calendar className="w-3.5 h-3.5" /> {format(new Date(task.dueDate), "MMM d")}</span>}
//                       </div>
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>
//             {/* BUGS */}
//             <TabsContent value="bug" className="space-y-5">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} className="bg-red-600 hover:bg-red-700">
//                   <Plus className="w-4 h-4 mr-2" /> New Bug
//                 </Button>
//               </div>
//               {bugs.map(bug => (
//                 <Card
//                   key={bug.id}
//                   className={`p-5 cursor-pointer transition-all hover:shadow-lg ${selectedItem?.id === bug.id ? "border-red-500 border-2 shadow-xl" : "border"}`}
//                   onClick={() => router.push(`/projects/${projectId}/bug/${bug.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900">{bug.title}</h3>
//                       <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
//                         <Badge variant={bug.severity === "High" ? "destructive" : bug.severity === "Medium" ? "default" : "secondary"}>
//                           {bug.severity}
//                         </Badge>
//                         <Badge variant={bug.status === "Closed" ? "outline" : "secondary"}>{bug.status}</Badge>
//                         <span className="flex items-center gap-1 text-gray-600"><User className="w-3.5 h-3.5" /> {bug.assignedTo}</span>
//                       </div>
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>
//             {/* REPORTS */}
//             <TabsContent value="report" className="space-y-5">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} className="bg-emerald-600 hover:bg-emerald-700">
//                   <Plus className="w-4 h-4 mr-2" /> New Report
//                 </Button>
//               </div>
//               {reports.map(report => (
//                 <Card
//                   key={report.id}
//                   className={`p-5 cursor-pointer transition-all hover:shadow-lg ${selectedItem?.id === report.id ? "border-emerald-500 border-2 shadow-xl" : "border"}`}
//                   onClick={() => router.push(`/projects/${projectId}/report/${report.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900">{report.name}</h3>
//                       <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
//                         <Badge variant="outline">{report.type}</Badge>
//                         <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {report.createdBy}</span>
//                         <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {format(new Date(report.createdAt), "MMM d")}</span>
//                       </div>
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//       {/* RIGHT: Detail Panel (Slide-in + Fullscreen) */}
//       <div className={`transition-all duration-500 ease-in-out bg-white flex flex-col ${selectedItem ? (isExpanded ? "w-full" : "w-full max-w-4xl ml-auto shadow-2xl") : "w-0"}`}>
//         {selectedItem !== null && (
//           <>
//             {/* Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 z-10 px-8 py-6 flex items-center justify-between">
//               <h1 className="text-2xl font-bold text-gray-900 pr-10 truncate">
//                 {panelMode === "create" && `New ${module.charAt(0).toUpperCase() + module.slice(1)}`}
//                 {panelMode === "edit" && `Edit ${selectedItem.title || selectedItem.name}`}
//                 {panelMode === "view" && (selectedItem.title || selectedItem.name || "Details")}
//               </h1>
//               <div className="flex items-center gap-2">
//                 <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
//                   {isExpanded ? <ArrowLeft className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//                 </Button>
//                 <Button variant="ghost" size="icon" onClick={closePanel}>
//                   <X className="w-5 h frutto-5" />
//                 </Button>
//               </div>
//             </div>
//             {/* Body */}
//             <div className="flex-1 overflow-y-auto p-8 space-y-10">
//               {/* TASK VIEW */}
//               {panelMode === "view" && module === "task" && (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <div><Label className="text-gray-600">Assignee</Label><p className="text-xl font-medium mt-2">{selectedItem.assignee}</p></div>
//                     <div><Label className="text-gray-600">Status</Label><p className="text-xl font-medium mt-2"><Badge>{selectedItem.status}</Badge></p></div>
//                     <div><Label className="text-gray-600">Due Date</Label><p className="text-xl font-medium mt-2">{selectedItem.dueDate ? format(new Date(selectedItem.dueDate), "MMMM d, yyyy") : "—"}</p></div>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Description</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedItem.description}</p>
//                   </div>
//                   <div className="flex gap-3">
//                     <Button onClick={openEdit}><Edit className="w-4 h-4 mr-2" /> Edit</Button>
//                     <Button variant="destructive" onClick={deleteItem}><Trash2 className="w-4 h-4 mr-2" /> Delete</Button>
//                   </div>
//                 </>
//               )}
//               {/* BUG VIEW */}
//               {panelMode === "view" && module === "bug" && (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <div><Label className="text-gray-600">Severity</Label><p className="mt-2"><Badge variant={selectedItem.severity === "High" ? "destructive" : "secondary"}>{selectedItem.severity}</Badge></p></div>
//                     <div><Label className="text-gray-600">Status</Label><p className="mt-2"><Badge>{selectedItem.status}</Badge></p></div>
//                     <div><Label className="text-gray-600">Assigned To</Label><p className="text-xl font-medium mt-2">{selectedItem.assignedTo}</p></div>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Description</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedItem.description}</p>
//                   </div>
//                 </>
//               )}
//               {/* REPORT VIEW */}
//               {panelMode === "view" && module === "report" && (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div><Label className="text-gray-600">Type</Label><p className="text-xl font-medium mt-2"><Badge variant="outline">{selectedItem.type}</Badge></p></div>
//                     <div><Label className="text-gray-600">Created By</Label><p className="text-xl font-medium mt-2">{selectedItem.createdBy}</p></div>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Summary</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedItem.summary}</p>
//                   </div>
//                 </>
//               )}
//               {/* CREATE / EDIT FORMS */}
//               {(panelMode === "create" || panelMode === "edit") && (
//                 <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.target); saveItem(Object.fromEntries(fd)); }} className="space-y-8">
//                   {/* TASK FORM */}
//                   {module === "task" && (
//                     <>
//                       <div><Label>Title</Label><Input name="title" defaultValue={selectedItem?.title || ""} required className="mt-2 text-lg" /></div>
//                       <div><Label>Description</Label><Textarea name="description" defaultValue={selectedItem?.description || ""} rows={6} className="mt-2" /></div>
//                       <div className="grid grid-cols-2 gap-6">
//                         <div><Label>Status</Label><Select name="status" defaultValue={selectedItem?.status || "Open"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Open">Open</SelectItem><SelectItem value="In Progress">In Progress</SelectItem><SelectItem value="Done">Done</SelectItem></SelectContent></Select></div>
//                         <div><Label>Assignee</Label><Input name="assignee" defaultValue={selectedItem?.assignee || ""} className="mt-2" /></div>
//                         <div><Label>Due Date</Label><Input type="date" name="dueDate" defaultValue={selectedItem?.dueDate || ""} className="mt-2" /></div>
//                       </div>
//                     </>
//                   )}
//                   {/* BUG FORM */}
//                   {module === "bug" && (
//                     <>
//                       <div><Label>Title</Label><Input name="title" defaultValue={selectedItem?.title || ""} required className="mt-2 text-lg" /></div>
//                       <div><Label>Description</Label><Textarea name="description" defaultValue={selectedItem?.description || ""} rows={6} className="mt-2" /></div>
//                       <div className="grid grid-cols-2 gap-6">
//                         <div><Label>Severity</Label><Select name="severity" defaultValue={selectedItem?.severity || "Medium"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Low">Low</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="High">High</SelectItem></SelectContent></Select></div>
//                         <div><Label>Status</Label><Select name="status" defaultValue={selectedItem?.status || "Open"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Open">Open</SelectItem><SelectItem value="In Progress">In Progress</SelectItem><SelectItem value="Closed">Closed</SelectItem></SelectContent></Select></div>
//                         <div className="col-span-2"><Label>Assigned To</Label><Input name="assignedTo" defaultValue={selectedItem?.assignedTo || ""} className="mt-2" /></div>
//                       </div>
//                     </>
//                   )}
//                   {/* REPORT FORM */}
//                   {module === "report" && (
//                     <>
//                       <div><Label>Name</Label><Input name="name" defaultValue={selectedItem?.name || ""} required className="mt-2 text-lg" /></div>
//                       <div><Label>Type</Label><Select name="type" defaultValue={selectedItem?.type || "monthly"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="monthly">Monthly</SelectItem><SelectItem value="quarterly">Quarterly</SelectItem><SelectItem value="compliance">Compliance</SelectItem></SelectContent></Select></div>
//                       <div><Label>Summary</Label><Textarea name="summary" defaultValue={selectedItem?.summary || ""} rows={10} className="mt-2" /></div>
//                       <div><Label>Created By</Label><Input name="createdBy" defaultValue={selectedItem?.createdBy || "You"} className="mt-2" /></div>
//                     </>
//                   )}
//                   <div className="flex justify-end gap-4 pt-8">
//                     <Button type="button" variant="outline" onClick={closePanel}>Cancel</Button>
//                     <Button type="submit" className="bg-green-600 hover:bg-green-700">
//                       <CheckCircle2 className="w-4 h-4 mr-2" />
//                       {panelMode === "create" ? "Create" : "Save Changes"}
//                     </Button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
// components/ProjectHub.jsx
__turbopack_context__.s({
    "default": (()=>ProjectHub)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-router-dom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-rsc] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-rsc] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-rsc] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-rsc] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-rsc] (ecmascript) <export default as Trash2>");
;
;
;
;
const TABS = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        id: "task",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        id: "issues",
        label: "Issues",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
    },
    {
        id: "files",
        label: "Files",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    }
];
function ProjectHub() {
    const { slug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    // Get current tab from URL
    const currentTab = location.pathname.split("/").pop() || "dashboard";
    // Load data from localStorage or create default
    const getProjectData = ()=>{
        const saved = localStorage.getItem(`project_${slug}`);
        if (saved) return JSON.parse(saved);
        // Default dummy data if first time
        return {
            name: slug.replace(/-/g, " ").toUpperCase(),
            tasks: [
                {
                    id: "1",
                    title: "Design Login Screen",
                    assignee: "John",
                    status: "in-progress",
                    subtasks: [
                        {
                            id: "s1",
                            title: "Create wireframes",
                            done: true
                        },
                        {
                            id: "s2",
                            title: "High-fidelity mockup",
                            done: false
                        }
                    ]
                },
                {
                    id: "2",
                    title: "Setup React Native",
                    assignee: "Sarah",
                    status: "completed",
                    subtasks: []
                }
            ],
            issues: [
                {
                    id: "i1",
                    title: "App crashes on Android 14",
                    priority: "high",
                    status: "open"
                },
                {
                    id: "i2",
                    title: "Login button not responsive",
                    priority: "medium",
                    status: "in-progress"
                }
            ],
            files: [
                {
                    id: "f1",
                    name: "login_mockup.fig",
                    size: "2.4 MB",
                    uploadedBy: "John"
                },
                {
                    id: "f2",
                    name: "api_spec.pdf",
                    size: "1.1 MB",
                    uploadedBy: "Sarah"
                }
            ]
        };
    };
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(getProjectData());
    const [showTaskDialog, setShowTaskDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTask, setEditingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [taskForm, setTaskForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        assignee: ""
    });
    // Save to localStorage whenever project changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem(`project_${slug}`, JSON.stringify(project));
    }, [
        project,
        slug
    ]);
    const saveTask = ()=>{
        if (editingTask) {
            setProject((prev)=>({
                    ...prev,
                    tasks: prev.tasks.map((t)=>t.id === editingTask.id ? {
                            ...t,
                            title: taskForm.title,
                            assignee: taskForm.assignee || "Unassigned"
                        } : t)
                }));
        } else {
            const newTask = {
                id: Date.now().toString(),
                title: taskForm.title || "New Task",
                assignee: taskForm.assignee || "Unassigned",
                status: "todo",
                subtasks: []
            };
            setProject((prev)=>({
                    ...prev,
                    tasks: [
                        ...prev.tasks,
                        newTask
                    ]
                }));
        }
        setShowTaskDialog(false);
        setEditingTask(null);
        setTaskForm({
            title: "",
            assignee: ""
        });
    };
    const deleteTask = (id)=>{
        setProject((prev)=>({
                ...prev,
                tasks: prev.tasks.filter((t)=>t.id !== id)
            }));
    };
    const toggleSubtask = (taskId, subId)=>{
        setProject((prev)=>({
                ...prev,
                tasks: prev.tasks.map((task)=>task.id === taskId ? {
                        ...task,
                        subtasks: task.subtasks.map((st)=>st.id === subId ? {
                                ...st,
                                done: !st.done
                            } : st)
                    } : task)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-white border-r border-gray-200 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: slug
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-1",
                        children: TABS.map((tab)=>{
                            const Icon = tab.icon;
                            const isActive = currentTab === tab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate(`/projects/${slug}/${tab.id}`),
                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-700 hover:bg-gray-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 501,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                    children: "CD"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-sm",
                                            children: "Chinmaya Das"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "chinmaya.das"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white border-b px-6 py-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: TABS.find((t)=>t.id === currentTab)?.label || "Project"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm font-medium",
                                        children: "Invite Team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    currentTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditingTask(null);
                                            setTaskForm({
                                                title: "",
                                                assignee: ""
                                            });
                                            setShowTaskDialog(true);
                                        },
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            " New Task"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6 overflow-auto",
                        children: [
                            currentTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold",
                                                children: project.tasks.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Total Tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-green-600",
                                                children: project.tasks.filter((t)=>t.status === "completed").length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-red-600",
                                                children: project.issues.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Open Issues"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this),
                            currentTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: project.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: task.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 579,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1",
                                                            children: [
                                                                "Assigned to: ",
                                                                task.assignee
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 580,
                                                            columnNumber: 23
                                                        }, this),
                                                        task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 space-y-2",
                                                            children: task.subtasks.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: st.done,
                                                                            onChange: ()=>toggleSubtask(task.id, st.id),
                                                                            className: "w-4 h-4 rounded border-gray-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                            lineNumber: 586,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: st.done ? "line-through text-gray-500" : "",
                                                                            children: st.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                            lineNumber: 592,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, st.id, true, {
                                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                    lineNumber: 585,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 583,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 578,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setEditingTask(task);
                                                                setTaskForm({
                                                                    title: task.title,
                                                                    assignee: task.assignee
                                                                });
                                                                setShowTaskDialog(true);
                                                            },
                                                            className: "p-2 hover:bg-gray-100 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 18,
                                                                className: "text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                lineNumber: 606,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 602,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteTask(task.id),
                                                            className: "p-2 hover:bg-red-50 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 18,
                                                                className: "text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                lineNumber: 612,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 608,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 601,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this)
                                    }, task.id, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this),
                            currentTab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: project.issues.map((issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold",
                                                        children: issue.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block px-3 py-1 text-xs rounded-full mt-2 ${issue.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: issue.priority.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 628,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 626,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600 capitalize",
                                                children: issue.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 634,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, issue.id, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 625,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 623,
                                columnNumber: 13
                            }, this),
                            currentTab === "files" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm border overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50 border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-4 font-medium",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-4 font-medium",
                                                        children: "Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-4 font-medium",
                                                        children: "Uploaded By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 648,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: project.files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    size: 20,
                                                                    className: "text-gray-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                    lineNumber: 655,
                                                                    columnNumber: 25
                                                                }, this),
                                                                file.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 654,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-600",
                                                            children: file.size
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 658,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-600",
                                                            children: file.uploadedBy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 659,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, file.id, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 653,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            showTaskDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-96 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold mb-4",
                            children: editingTask ? "Edit Task" : "Create New Task"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 673,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border rounded-lg px-4 py-3 mb-3",
                            placeholder: "Task title",
                            value: taskForm.title,
                            onChange: (e)=>setTaskForm({
                                    ...taskForm,
                                    title: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border rounded-lg px-4 py-3 mb-6",
                            placeholder: "Assignee (optional)",
                            value: taskForm.assignee,
                            onChange: (e)=>setTaskForm({
                                    ...taskForm,
                                    assignee: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 682,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveTask,
                                    className: "flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700",
                                    children: editingTask ? "Update" : "Create"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowTaskDialog(false);
                                        setEditingTask(null);
                                    },
                                    className: "flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                    lineNumber: 672,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 671,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_97bd495e._.js.map