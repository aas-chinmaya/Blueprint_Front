

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

















// app/projects/[projectId]/page.js
// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   X,
//   Plus,
//   Edit,
//   Trash2,
//   User,
//   Calendar,
//   Bug,
//   FileText,
//   Home,
//   Maximize2,
//   ArrowLeft,
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

//   // Data
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

//   // Sheet state
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [panelMode, setPanelMode] = useState("view");
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Sync URL with sheet
//   useEffect(() => {
//     if (!itemId && !action) {
//       setSelectedItem(null);
//       setIsFullscreen(false);
//       return;
//     }

//     if (action === "create") {
//       setPanelMode("create");
//       setSelectedItem({});
//       setIsFullscreen(false);
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

//   const closeSheet = () => {
//     router.push(`/projects/${projectId}/${module}`);
//   };

//   const toggleFullscreen = () => setIsFullscreen(prev => !prev);

//   const saveItem = (data) => {
//     if (panelMode === "create") {
//       let newId = 0;
//       let setter;
//       if (module === "task") { newId = Math.max(...tasks.map(t => t.id), 0) + 1; setter = setTasks; }
//       if (module === "bug") { newId = Math.max(...bugs.map(b => b.id), 0) + 1; setter = setBugs; }
//       if (module === "report") { newId = Math.max(...reports.map(r => r.id), 0) + 1; setter = setReports; }

//       setter(prev => [{ id: newId, ...data }, ...prev]);
//       toast.success("Created successfully!");
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
//     toast.success("Deleted");
//     closeSheet();
//   };

//   const openCreate = () => router.push(`/projects/${projectId}/${module}/create`);
//   const openEdit = () => router.push(`/projects/${projectId}/${module}/${itemId}/edit`);
//   const getModuleTitle = () => module.charAt(0).toUpperCase() + module.slice(1) + "s";

//   const isSheetOpen = !!selectedItem;

//   return (
//     <>
//       {/* Main List - Full Screen */}
//       <div className="min-h-screen bg-gray-50 p-6 lg:p-10">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold mb-10 text-gray-900">Project {projectId}</h1>

//           <Tabs value={module} onValueChange={(v) => router.push(`/projects/${projectId}/${v}`)}>
//             <TabsList className="grid w-full grid-cols-4 mb-10">
//               <TabsTrigger value="overview"><Home className="w-4 h-4 mr-2" /> Overview</TabsTrigger>
//               <TabsTrigger value="task">Tasks ({tasks.length})</TabsTrigger>
//               <TabsTrigger value="bug"><Bug className="w-4 h-4 mr-2" /> Bugs ({bugs.length})</TabsTrigger>
//               <TabsTrigger value="report"><FileText className="w-4 h-4 mr-2" /> Reports ({reports.length})</TabsTrigger>
//             </TabsList>

//             <TabsContent value="overview">
//               <Card className="p-20 text-center">
//                 <h2 className="text-4xl font-bold mb-6">Welcome to Project {projectId}</h2>
//                 <p className="text-xl text-gray-600">Select a module above to manage tasks, bugs, or reports.</p>
//               </Card>
//             </TabsContent>

//             {/* TASKS */}
//             <TabsContent value="task" className="space-y-6">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} size="lg" className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="w-5 h-5 mr-2" /> New Task
//                 </Button>
//               </div>
//               {tasks.map(task => (
//                 <Card
//                   key={task.id}
//                   className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 hover:border-blue-400"
//                   onClick={() => router.push(`/projects/${projectId}/task/${task.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold">{task.title}</h3>
//                       <div className="flex flex-wrap gap-4 mt-4 text-sm">
//                         <Badge variant={task.status === "Done" ? "outline" : "default"}>{task.status}</Badge>
//                         <span className="flex items-center gap-1"><User className="w-4 h-4" /> {task.assignee}</span>
//                         {task.dueDate && <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {format(new Date(task.dueDate), "MMM d")}</span>}
//                       </div>
//                     </div>
//                     <ChevronRight className="w-6 h-6 text-gray-400" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>

//             {/* BUGS */}
//             <TabsContent value="bug" className="space-y-6">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} size="lg" className="bg-red-600 hover:bg-red-700">
//                   <Plus className="w-5 h-5 mr-2" /> New Bug
//                 </Button>
//               </div>
//               {bugs.map(bug => (
//                 <Card
//                   key={bug.id}
//                   className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 hover:border-red-400"
//                   onClick={() => router.push(`/projects/${projectId}/bug/${bug.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold">{bug.title}</h3>
//                       <div className="flex flex-wrap gap-4 mt-4 text-sm">
//                         <Badge variant={bug.severity === "High" ? "destructive" : bug.severity === "Medium" ? "default" : "secondary"}>{bug.severity}</Badge>
//                         <Badge variant={bug.status === "Closed" ? "outline" : "secondary"}>{bug.status}</Badge>
//                         <span className="flex items-center gap-1"><User className="w-4 h-4" /> {bug.assignedTo}</span>
//                       </div>
//                     </div>
//                     <ChevronRight className="w-6 h-6 text-gray-400" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>

//             {/* REPORTS */}
//             <TabsContent value="report" className="space-y-6">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold">{getModuleTitle()}</h2>
//                 <Button onClick={openCreate} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
//                   <Plus className="w-5 h-5 mr-2" /> New Report
//                 </Button>
//               </div>
//               {reports.map(report => (
//                 <Card
//                   key={report.id}
//                   className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 hover:border-emerald-400"
//                   onClick={() => router.push(`/projects/${projectId}/report/${report.id}`)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold">{report.name}</h3>
//                       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
//                         <Badge variant="outline">{report.type}</Badge>
//                         <span className="flex items-center gap-1"><User className="w-4 h-4" /> {report.createdBy}</span>
//                         <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {format(new Date(report.createdAt), "MMM d")}</span>
//                       </div>
//                     </div>
//                     <ChevronRight className="w-6 h-6 text-gray-400" />
//                   </div>
//                 </Card>
//               ))}
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>

//       {/* Overlay Sheet */}
//       {isSheetOpen && (
//         <div className="fixed inset-0 z-50 flex justify-end">
//           {/* Backdrop */}
//           <div className="absolute inset-0 bg-black/40" onClick={closeSheet} />

//           {/* Sheet */}
//           <div
//             className={`relative bg-white flex flex-col transition-all duration-500 ease-out
//               ${isFullscreen 
//                 ? "w-full h-full" 
//                 : "w-full max-w-4xl h-full rounded-l-2xl shadow-2xl"
//               }`}
//           >
//             {/* Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 z-10 px-8 py-6 flex items-center justify-between">
//               <h1 className="text-2xl font-bold truncate pr-10">
//                 {panelMode === "create" && `New ${module.charAt(0).toUpperCase() + module.slice(1)}`}
//                 {panelMode === "edit" && `Edit ${selectedItem?.title || selectedItem?.name}`}
//                 {panelMode === "view" && (selectedItem?.title || selectedItem?.name || "Details")}
//               </h1>
//               <div className="flex gap-2">
//                 <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
//                   {isFullscreen ? <ArrowLeft className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//                 </Button>
//                 <Button variant="ghost" size="icon" onClick={closeSheet}>
//                   <X className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="flex-1 overflow-y-auto p-8 space-y-10">
//               {/* TASK VIEW */}
//               {panelMode === "view" && module === "task" && (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <div><Label className="text-gray-600">Assignee</Label><p className="text-xl font-medium mt-2">{selectedItem.assignee}</p></div>
//                     <div><Label className="text-gray-600">Status</Label><p className="mt-2"><Badge>{selectedItem.status}</Badge></p></div>
//                     <div><Label className="text-gray-600">Due Date</Label><p className="text-xl font-medium mt-2">{selectedItem.dueDate ? format(new Date(selectedItem.dueDate), "MMMM d, yyyy") : "—"}</p></div>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Description</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedItem.description}</p>
//                   </div>
//                   <div className="flex gap-4">
//                     <Button size="lg" onClick={openEdit}><Edit className="w-5 h-5 mr-2" /> Edit</Button>
//                     <Button size="lg" variant="destructive" onClick={deleteItem}><Trash2 className="w-5 h-5 mr-2" /> Delete</Button>
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
//                     <div><Label className="text-gray-600">Type</Label><p className="mt-2"><Badge variant="outline">{selectedItem.type}</Badge></p></div>
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
//                 <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.target); saveItem(Object.fromEntries(fd)); }} className="space-y-10">
//                   {module === "task" && (
//                     <>
//                       <div><Label>Title</Label><Input name="title" defaultValue={selectedItem?.title || ""} required className="mt-2 text-lg h-14" /></div>
//                       <div><Label>Description</Label><Textarea name="description" defaultValue={selectedItem?.description || ""} rows={8} className="mt-2" /></div>
//                       <div className="grid grid-cols-2 gap-6">
//                         <div><Label>Status</Label><Select name="status" defaultValue={selectedItem?.status || "Open"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Open">Open</SelectItem><SelectItem value="In Progress">In Progress</SelectItem><SelectItem value="Done">Done</SelectItem></SelectContent></Select></div>
//                         <div><Label>Assignee</Label><Input name="assignee" defaultValue={selectedItem?.assignee || ""} className="mt-2" /></div>
//                         <div className="col-span-2"><Label>Due Date</Label><Input type="date" name="dueDate" defaultValue={selectedItem?.dueDate || ""} className="mt-2" /></div>
//                       </div>
//                     </>
//                   )}

//                   {module === "bug" && (
//                     <>
//                       <div><Label>Title</Label><Input name="title" defaultValue={selectedItem?.title || ""} required className="mt-2 text-lg h-14" /></div>
//                       <div><Label>Description</Label><Textarea name="description" defaultValue={selectedItem?.description || ""} rows={8} className="mt-2" /></div>
//                       <div className="grid grid-cols-2 gap-6">
//                         <div><Label>Severity</Label><Select name="severity" defaultValue={selectedItem?.severity || "Medium"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Low">Low</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="High">High</SelectItem></SelectContent></Select></div>
//                         <div><Label>Status</Label><Select name="status" defaultValue={selectedItem?.status || "Open"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Open">Open</SelectItem><SelectItem value="In Progress">In Progress</SelectItem><SelectItem value="Closed">Closed</SelectItem></SelectContent></Select></div>
//                         <div className="col-span-2"><Label>Assigned To</Label><Input name="assignedTo" defaultValue={selectedItem?.assignedTo || ""} className="mt-2" /></div>
//                       </div>
//                     </>
//                   )}

//                   {module === "report" && (
//                     <>
//                       <div><Label>Name</Label><Input name="name" defaultValue={selectedItem?.name || ""} required className="mt-2 text-lg h-14" /></div>
//                       <div><Label>Type</Label><Select name="type" defaultValue={selectedItem?.type || "monthly"}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="monthly">Monthly</SelectItem><SelectItem value="quarterly">Quarterly</SelectItem><SelectItem value="compliance">Compliance</SelectItem></SelectContent></Select></div>
//                       <div><Label>Summary</Label><Textarea name="summary" defaultValue={selectedItem?.summary || ""} rows={12} className="mt-2" /></div>
//                       <div><Label>Created By</Label><Input name="createdBy" defaultValue={selectedItem?.createdBy || "You"} className="mt-2" /></div>
//                     </>
//                   )}

//                   <div className="flex justify-end gap-4 pt-10">
//                     <Button type="button" size="lg" variant="outline" onClick={closeSheet}>Cancel</Button>
//                     <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
//                       <CheckCircle2 className="w-5 h-5 mr-2" />
//                       {panelMode === "create" ? "Create" : "Save Changes"}
//                     </Button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }





// app/projects/[projectId]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  X,
  Plus,
  Edit,
  Trash2,
  User,
  Calendar,
  Bug,
  Maximize2,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId, slug = [] } = useParams();
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const module = slugArray[0] || "tasks"; // "tasks" or "issues"
  const itemId = slugArray[1] ? Number(slugArray[1]) : null;
  const action = slugArray[2]; // "create" | "edit"

  // === DATA ===
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design dashboard", description: "Create analytics dashboard", status: "In Progress", assignee: "Alice", dueDate: "2025-12-01" },
    { id: 2, title: "Fix login", description: "Google login broken", status: "Open", assignee: "Bob", dueDate: null },
    { id: 3, title: "Add dark mode", description: "Toggle + save preference", status: "Done", assignee: "You", dueDate: "2025-11-25" },
  ]);

  const [issues, setIssues] = useState([
    { id: 101, title: "Button not clickable on mobile", description: "Tap area too small", severity: "High", status: "Open", assignedTo: "Carol" },
    { id: 102, title: "Footer typo", description: "Shows 2024 instead of 2025", severity: "Low", status: "Closed", assignedTo: "Dave" },
  ]);

  // === SHEET STATE ===
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [panelMode, setPanelMode] = useState<"view" | "edit" | "create">("view");
  const [isMaximized, setIsMaximized] = useState(false);

  // === SYNC URL WITH SHEET ===
  useEffect(() => {
    if (!itemId && !action) {
      setSelectedItem(null);
      setIsMaximized(false);
      return;
    }

    if (action === "create") {
      setPanelMode("create");
      setSelectedItem({});
      setIsMaximized(false);
    } else if (action === "edit" && itemId) {
      setPanelMode("edit");
      setSelectedItem(getItemById(module, itemId));
    } else if (itemId) {
      setPanelMode("view");
      setSelectedItem(getItemById(module, itemId));
    }
  }, [module, itemId, action]);

  const getItemById = (mod: string, id: number) => {
    if (mod === "tasks") return tasks.find(t => t.id === id);
    if (mod === "issues") return issues.find(i => i.id === id);
    return null;
  };

  const closeSheet = () => router.push(`/projects/${projectId}/${module}`);
  const toggleMaximize = () => setIsMaximized(!isMaximized);

  const saveItem = (data: any) => {
    if (panelMode === "create") {
      const newId = module === "tasks"
        ? Math.max(...tasks.map(t => t.id), 0) + 1
        : Math.max(...issues.map(i => i.id), 0) + 1;
      const setter = module === "tasks" ? setTasks : setIssues;
      setter(prev => [{ id: newId, ...data }, ...prev]);
      toast.success("Created successfully!");
      router.push(`/projects/${projectId}/${module}/${newId}`);
    } else {
      const setter = module === "tasks" ? setTasks : setIssues;
      setter(prev => prev.map(item => item.id === selectedItem.id ? { ...item, ...data } : item));
      toast.success("Saved!");
      router.push(`/projects/${projectId}/${module}/${selectedItem.id}`);
    }
  };

  const deleteItem = () => {
    const setter = module === "tasks" ? setTasks : setIssues;
    setter(prev => prev.filter(item => item.id !== selectedItem.id));
    toast.success("Deleted");
    closeSheet();
  };

  const openCreate = () => router.push(`/projects/${projectId}/${module}/create`);
  const openEdit = () => router.push(`/projects/${projectId}/${module}/${itemId}/edit`);

  const isSheetOpen = !!selectedItem;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* LEFT SIDEBAR (your existing sidebar) */}
      <aside className="w-64 bg-white border-r border-gray-200">
        {/* Your sidebar content */}
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* TOP HEADER (your existing header) */}
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center">
          <h1 className="text-2xl font-bold">Project {projectId}</h1>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-auto p-8">
          <Tabs value={module} onValueChange={(v) => router.push(`/projects/${projectId}/${v}`)}>
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-10">
              <TabsTrigger value="tasks">Tasks ({tasks.length})</TabsTrigger>
              <TabsTrigger value="issues">Issues ({issues.length})</TabsTrigger>
            </TabsList>

            {/* TASKS LIST */}
            <TabsContent value="tasks" className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Tasks</h2>
                <Button onClick={openCreate} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-5 h-5 mr-2" /> New Task
                </Button>
              </div>
              {tasks.map(task => (
                <Card
                  key={task.id}
                  className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-blue-400"
                  onClick={() => router.push(`/projects/${projectId}/tasks/${task.id}`)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{task.title}</h3>
                      <div className="flex gap-4 mt-3 text-sm">
                        <Badge variant={task.status === "Done" ? "outline" : "default"}>{task.status}</Badge>
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> {task.assignee}</span>
                        {task.dueDate && <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {format(new Date(task.dueDate), "MMM d")}</span>}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* ISSUES LIST */}
            <TabsContent value="issues" className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Issues</h2>
                <Button onClick={openCreate} className="bg-red-600 hover:bg-red-700">
                  <Plus className="w-5 h-5 mr-2" /> New Issue
                </Button>
              </div>
              {issues.map(issue => (
                <Card
                  key={issue.id}
                  className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-red-400"
                  onClick={() => router.push(`/projects/${projectId}/issues/${issue.id}`)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{issue.title}</h3>
                      <div className="flex gap-4 mt-3 text-sm">
                        <Badge variant={issue.severity === "High" ? "destructive" : "secondary"}>{issue.severity}</Badge>
                        <Badge variant={issue.status === "Closed" ? "outline" : "secondary"}>{issue.status}</Badge>
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> {issue.assignedTo}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* SINGLE SHEET — ONE FOR ALL */}
        {isSheetOpen && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 pointer-events-auto" onClick={closeSheet} />

            {/* Sheet */}
            <div className="absolute inset-y-0 right-0 pointer-events-auto">
              <div
                className={`bg-white h-full flex flex-col shadow-2xl transition-all duration-500 ease-out
                  ${isMaximized ? "w-full" : "w-full max-w-4xl rounded-l-2xl"}`}
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
                  <h1 className="text-2xl font-bold truncate pr-10">
                    {panelMode === "create" && `New ${module === "tasks" ? "Task" : "Issue"}`}
                    {panelMode === "edit" && `Edit ${selectedItem?.title}`}
                    {panelMode === "view" && selectedItem?.title}
                  </h1>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={toggleMaximize}>
                      {isMaximized ? <ArrowLeft className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={closeSheet}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Dynamic Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-10">
                  {/* VIEW MODE */}
                  {panelMode === "view" && (
                    <>
                      {module === "tasks" && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div><Label>Assignee</Label><p className="text-xl font-medium mt-2">{selectedItem.assignee}</p></div>
                            <div><Label>Status</Label><p className="mt-2"><Badge>{selectedItem.status}</Badge></p></div>
                            <div><Label>Due Date</Label><p className="text-xl mt-2">{selectedItem.dueDate ? format(new Date(selectedItem.dueDate), "MMM d, yyyy") : "—"}</p></div>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Description</h3>
                            <p className="text-lg text-gray-700 whitespace-pre-wrap">{selectedItem.description}</p>
                          </div>
                        </>
                      )}

                      {module === "issues" && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div><Label>Severity</Label><p className="mt-2"><Badge variant={selectedItem.severity === "High" ? "destructive" : "secondary"}>{selectedItem.severity}</Badge></p></div>
                            <div><Label>Status</Label><p className="mt-2"><Badge>{selectedItem.status}</Badge></p></div>
                            <div><Label>Assigned To</Label><p className="text-xl font-medium mt-2">{selectedItem.assignedTo}</p></div>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Description</h3>
                            <p className="text-lg text-gray-700 whitespace-pre-wrap">{selectedItem.description}</p>
                          </div>
                        </>
                      )}

                      <div className="flex gap-4 pt-6">
                        <Button size="lg" onClick={openEdit}><Edit className="w-5 h-5 mr-2" /> Edit</Button>
                        <Button size="lg" variant="destructive" onClick={deleteItem}><Trash2 className="w-5 h-5 mr-2" /> Delete</Button>
                      </div>
                    </>
                  )}

                  {/* CREATE / EDIT FORM — ONE FORM FOR BOTH */}
                  {(panelMode === "create" || panelMode === "edit") && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = Object.fromEntries(new FormData(e.currentTarget));
                        saveItem(formData);
                      }}
                      className="space-y-8 max-w-3xl"
                    >
                      <div>
                        <Label className="text-lg">Title</Label>
                        <Input name="title" defaultValue={selectedItem?.title || ""} required className="mt-2 text-lg h-14" />
                      </div>

                      <div>
                        <Label className="text-lg">Description</Label>
                        <Textarea name="description" defaultValue={selectedItem?.description || ""} rows={8} className="mt-2" />
                      </div>

                      {/* TASK FIELDS */}
                      {module === "tasks" && (
                        <>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <Label>Status</Label>
                              <Select name="status" defaultValue={selectedItem?.status || "Open"}>
                                <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Open">Open</SelectItem>
                                  <SelectItem value="In Progress">In Progress</SelectItem>
                                  <SelectItem value="Done">Done</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Assignee</Label>
                              <Input name="assignee" defaultValue={selectedItem?.assignee || ""} className="mt-2" />
                            </div>
                          </div>
                          <div>
                            <Label>Due Date</Label>
                            <Input type="date" name="dueDate" defaultValue={selectedItem?.dueDate || ""} className="mt-2" />
                          </div>
                        </>
                      )}

                      {/* ISSUE FIELDS */}
                      {module === "issues" && (
                        <>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <Label>Severity</Label>
                              <Select name="severity" defaultValue={selectedItem?.severity || "Medium"}>
                                <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Low">Low</SelectItem>
                                  <SelectItem value="Medium">Medium</SelectItem>
                                  <SelectItem value="High">High</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Status</Label>
                              <Select name="status" defaultValue={selectedItem?.status || "Open"}>
                                <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Open">Open</SelectItem>
                                  <SelectItem value="In Progress">In Progress</SelectItem>
                                  <SelectItem value="Closed">Closed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label>Assigned To</Label>
                            <Input name="assignedTo" defaultValue={selectedItem?.assignedTo || ""} className="mt-2" />
                          </div>
                        </>
                      )}

                      <div className="flex justify-end gap-4 pt-10">
                        <Button type="button" size="lg" variant="outline" onClick={closeSheet}>
                          Cancel
                        </Button>
                        <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          {panelMode === "create" ? "Create" : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}















