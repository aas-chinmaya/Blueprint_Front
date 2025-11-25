module.exports = {

"[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
// app/projects/[slug]/page.jsx
__turbopack_context__.s({
    "default": (()=>ProjectPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
;
const DEFAULT_PROJECTS = {
    "AAS-IT-MOB-001": {
        name: "AAS IT Mobile App",
        tasks: [
            {
                id: "1",
                title: "Design Login Screen",
                assignee: "John",
                status: "in-progress",
                subtasks: [
                    {
                        id: "s1",
                        title: "Wireframe",
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
                title: "Setup React Native Project",
                assignee: "Sarah",
                status: "completed",
                subtasks: []
            },
            {
                id: "3",
                title: "API Integration",
                assignee: "Mike",
                status: "todo",
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
                name: "api_docs.pdf",
                size: "1.1 MB",
                uploadedBy: "Sarah"
            }
        ]
    }
};
const TABS = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        id: "task",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        id: "issues",
        label: "Issues",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
    },
    {
        id: "files",
        label: "Files",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    }
];
function ProjectPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // SAFELY get slug – this fixes the "undefined.replace" error
    const slug = params?.slug ? Array.isArray(params.slug) ? params.slug[0] : params.slug : null;
    // If slug not ready yet (Next.js hydration), show nothing or fallback
    if (!slug) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl text-gray-600",
                children: "Loading project..."
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 445,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
            lineNumber: 444,
            columnNumber: 7
        }, this);
    }
    // Determine current tab
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    const currentTab = lastSegment === slug ? "dashboard" : lastSegment;
    // In-memory project state
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: DEFAULT_PROJECTS[slug]?.name || slug.replace(/-/g, " ").toUpperCase(),
        tasks: DEFAULT_PROJECTS[slug]?.tasks || [],
        issues: DEFAULT_PROJECTS[slug]?.issues || [],
        files: DEFAULT_PROJECTS[slug]?.files || []
    });
    const [showDialog, setShowDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTask, setEditingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        assignee: ""
    });
    const navigate = (tab)=>{
        const url = tab === "dashboard" ? `/projects/${slug}` : `/projects/${slug}/${tab}`;
        window.history.replaceState(null, "", url);
    };
    const saveTask = ()=>{
        if (editingTask) {
            setProject((prev)=>({
                    ...prev,
                    tasks: prev.tasks.map((t)=>t.id === editingTask.id ? {
                            ...t,
                            title: form.title || t.title,
                            assignee: form.assignee || t.assignee
                        } : t)
                }));
        } else {
            setProject((prev)=>({
                    ...prev,
                    tasks: [
                        ...prev.tasks,
                        {
                            id: Date.now().toString(),
                            title: form.title || "New Task",
                            assignee: form.assignee || "Unassigned",
                            status: "todo",
                            subtasks: []
                        }
                    ]
                }));
        }
        setShowDialog(false);
        setEditingTask(null);
        setForm({
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
                tasks: prev.tasks.map((t)=>t.id === taskId ? {
                        ...t,
                        subtasks: t.subtasks.map((st)=>st.id === subId ? {
                                ...st,
                                done: !st.done
                            } : st)
                    } : t)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-white border-r border-gray-200 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: slug
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-1",
                        children: TABS.map((tab)=>{
                            const Icon = tab.icon;
                            const active = currentTab === tab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate(tab.id),
                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 543,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 544,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 536,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                    children: "CD"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-sm",
                                            children: "Chinmaya Das"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "chinmaya.das"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 550,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white border-b px-6 py-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: TABS.find((t)=>t.id === currentTab)?.label || "Project"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm font-medium",
                                        children: "Invite Team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this),
                                    currentTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditingTask(null);
                                            setForm({
                                                title: "",
                                                assignee: ""
                                            });
                                            setShowDialog(true);
                                        },
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 582,
                                                columnNumber: 17
                                            }, this),
                                            " New Task"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6 overflow-auto",
                        children: [
                            currentTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-8 rounded-xl shadow-sm border text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold",
                                                children: project.tasks.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 mt-2",
                                                children: "Total Tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-8 rounded-xl shadow-sm border text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-green-600",
                                                children: project.tasks.filter((t)=>t.status === "completed").length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 596,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 mt-2",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 599,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 595,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-8 rounded-xl shadow-sm border text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-red-600",
                                                children: project.issues.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 mt-2",
                                                children: "Open Issues"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this),
                            currentTab === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: project.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: task.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 614,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1",
                                                            children: [
                                                                "Assigned to: ",
                                                                task.assignee
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 615,
                                                            columnNumber: 23
                                                        }, this),
                                                        task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 space-y-2",
                                                            children: task.subtasks.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 text-sm cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: st.done,
                                                                            onChange: ()=>toggleSubtask(task.id, st.id),
                                                                            className: "w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                            lineNumber: 621,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: st.done ? "line-through text-gray-500" : "",
                                                                            children: st.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                            lineNumber: 627,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, st.id, true, {
                                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                    lineNumber: 620,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 618,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 613,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setEditingTask(task);
                                                                setForm({
                                                                    title: task.title,
                                                                    assignee: task.assignee
                                                                });
                                                                setShowDialog(true);
                                                            },
                                                            className: "p-2 hover:bg-gray-100 rounded-lg transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 18,
                                                                className: "text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                lineNumber: 645,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 637,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteTask(task.id),
                                                            className: "p-2 hover:bg-red-50 rounded-lg transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 18,
                                                                className: "text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                lineNumber: 651,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 647,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 636,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this)
                                    }, task.id, false, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 611,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 609,
                                columnNumber: 13
                            }, this),
                            currentTab === "issues" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: project.issues.map((issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl shadow-sm border flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-lg",
                                                        children: issue.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 665,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block px-3 py-1 text-xs rounded-full mt-2 font-medium ${issue.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: issue.priority.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 666,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 664,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600 capitalize",
                                                children: issue.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, issue.id, true, {
                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                        lineNumber: 663,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            currentTab === "files" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm border overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50 border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-5 font-medium text-gray-700",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 685,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-5 font-medium text-gray-700",
                                                        children: "Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 686,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left p-5 font-medium text-gray-700",
                                                        children: "Uploaded By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                        lineNumber: 687,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                lineNumber: 684,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: project.files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b hover:bg-gray-50 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-5 flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    size: 20,
                                                                    className: "text-gray-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                                    lineNumber: 694,
                                                                    columnNumber: 25
                                                                }, this),
                                                                file.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 693,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-5 text-gray-600",
                                                            children: file.size
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 697,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-5 text-gray-600",
                                                            children: file.uploadedBy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                            lineNumber: 698,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, file.id, true, {
                                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                                    lineNumber: 692,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                            lineNumber: 690,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                lineNumber: 681,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            showDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-2xl w-full max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6",
                            children: editingTask ? "Edit Task" : "Create New Task"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Task title",
                            value: form.title,
                            onChange: (e)=>setForm({
                                    ...form,
                                    title: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 715,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Assignee (optional)",
                            value: form.assignee,
                            onChange: (e)=>setForm({
                                    ...form,
                                    assignee: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 721,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveTask,
                                    className: "flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition",
                                    children: [
                                        editingTask ? "Update" : "Create",
                                        " Task"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDialog(false);
                                        setEditingTask(null);
                                        setForm({
                                            title: "",
                                            assignee: ""
                                        });
                                    },
                                    className: "flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                    lineNumber: 711,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
                lineNumber: 710,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protected)/projects/[projectId]/[[...slug]]/page.js",
        lineNumber: 523,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>House)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
];
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("house", __iconNode);
;
 //# sourceMappingURL=house.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Home": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>SquareCheckBig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
            key: "2acyp4"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const SquareCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("square-check-big", __iconNode);
;
 //# sourceMappingURL=square-check-big.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CheckSquare": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>CircleAlert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Plus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Plus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Pen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ]
];
const Pen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pen", __iconNode);
;
 //# sourceMappingURL=pen.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Edit2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_6a774856._.js.map