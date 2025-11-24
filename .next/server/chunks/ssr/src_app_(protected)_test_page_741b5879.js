module.exports = {

"[project]/src/app/(protected)/test/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // app/test/page.js
// "use client";
// import React, { useState } from "react";
// import { format } from "date-fns";
// import {
//   ChevronRight,
//   ChevronsLeft,
//   ChevronsRight,
//   X,
//   Maximize2,   // ← new icon
//   ArrowLeft,    // ← new icon for full-screen back
//   User,
//   Calendar,
//   MessageSquare,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// const tasks = [
//   {
//     id: "t1",
//     title: "Design new homepage hero",
//     description: "Bold animated hero section with new brand colors and smooth scroll animations.",
//     assignee: "Sarah Chen",
//     dueDate: "2025-11-25",
//     subtasks: [
//       { id: "s1", title: "Gather references", completed: true },
//       { id: "s2", title: "Create wireframes", completed: true },
//       { id: "s3", title: "High-fidelity mockup", completed: false },
//     ],
//     comments: [
//       { author: "John", text: "Loving the direction!", date: "2025-11-20" },
//     ],
//   },
//   {
//     id: "t2",
//     title: "Build responsive navigation",
//     description: "Convert design to code with mobile hamburger menu.",
//     assignee: "Mike Torres",
//     dueDate: "2025-11-30",
//     subtasks: [],
//     comments: [],
//   },
//   {
//     id: "t3",
//     title: "Add dark mode support",
//     assignee: "You",
//     dueDate: null,
//     subtasks: [{ id: "s4", title: "Design toggle", completed: false }],
//     comments: [],
//   },
// ];
// export default function TeamworkClone() {
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false); // ← your original full-screen toggle
//   const [newComment, setNewComment] = useState("");
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* LEFT SIDEBAR - Task List */}
//       <div className={`transition-all duration-500 ease-in-out ${isExpanded ? "w-0 opacity-0" : "w-96"} border-r border-gray-200 bg-white overflow-hidden`}>
//         <div className="p-6 border-b">
//           <h1 className="text-2xl font-bold">Website Redesign</h1>
//           <p className="text-sm text-gray-500">kkk Project</p>
//         </div>
//         <div className="p-4 space-y-3">
//           {tasks.map((task) => (
//             <Card
//               key={task.id}
//               className={`p-4 cursor-pointer transition-all hover:shadow-md ${
//                 selectedTask?.id === task.id ? "border-blue-500 border-2" : ""
//               }`}
//               onClick={() => {
//                 setSelectedTask(task);
//                 setIsExpanded(false);
//               }}
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold">{task.title}</h3>
//                   <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
//                     <span>{task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length} subtasks</span>
//                     {task.comments.length > 0 && (
//                       <span className="flex items-center gap-1">
//                         <MessageSquare className="w-3.5 h-3.5" /> {task.comments.length}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <ChevronRight className="w-5 h-5 text-gray-400" />
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//       {/* RIGHT PANEL - Your original slide & expand logic */}
//       <div
//         className={`transition-all duration-500 ease-in-out bg-white flex-1 ${
//           selectedTask
//             ? isExpanded
//               ? "w-full"
//               : "w-full max-w-3xl ml-auto"
//             : "w-0"
//         } shadow-2xl overflow-hidden`}
//       >
//         {selectedTask && (
//           <>
//             {/* Header - Only icons changed */}
//             <div className="sticky top-0 bg-white border-b z-10 px-8 py-6 flex items-center justify-between">
//               <h1 className="text-2xl font-bold pr-10">{selectedTask.title}</h1>
//               <div className="flex items-center gap-2">
//                 {/* Expand button → now uses Maximize2 icon */}
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setIsExpanded(!isExpanded)}
//                   title={isExpanded ? "Collapse" : "Expand"}
//                 >
//                   {isExpanded ? <ArrowLeft className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//                 </Button>
//                 {/* Close button */}
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => {
//                     setSelectedTask(null);
//                     setIsExpanded(false);
//                   }}
//                 >
//                   <X className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>
//             {/* Rest of your original content - untouched */}
//             <div className="p-8 space-y-10 overflow-y-auto h-full">
//               {/* Meta */}
//               <div className="grid grid-cols-2 gap-10">
//                 <div>
//                   <Label className="flex items-center gap-2 text-gray-600">
//                     <User className="w-4 h-4" /> Assignee
//                   </Label>
//                   <p className="text-xl font-medium mt-2">{selectedTask.assignee}</p>
//                 </div>
//                 <div>
//                   <Label className="flex items-center gap-2 text-gray-600">
//                     <Calendar className="w-4 h-4" /> Due Date
//                   </Label>
//                   <p className="text-xl font-medium mt-2">
//                     {selectedTask.dueDate ? format(new Date(selectedTask.dueDate), "MMMM d, yyyy") : "No due date"}
//                   </p>
//                 </div>
//               </div>
//               {/* Description */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Description</h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">{selectedTask.description}</p>
//               </div>
//               {/* Subtasks */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-5">
//                   Subtasks ({selectedTask.subtasks.filter((s) => s.completed).length}/{selectedTask.subtasks.length})
//                 </h3>
//                 <div className="space-y-4">
//                   {selectedTask.subtasks.map((sub) => (
//                     <div key={sub.id} className="flex items-center gap-4">
//                       <Checkbox checked={sub.completed} disabled />
//                       <span className={`text-lg ${sub.completed ? "line-through text-gray-500" : ""}`}>
//                         {sub.title}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Comments */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-6">Comments</h3>
//                 <div className="space-y-8">
//                   {selectedTask.comments.map((c, i) => (
//                     <div key={i} className="flex gap-4">
//                       <Avatar>
//                         <AvatarFallback className="bg-blue-600 text-white">{c.author[0]}</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <p className="font-semibold">{c.author}</p>
//                         <p className="text-gray-700 mt-1">{c.text}</p>
//                         <p className="text-sm text-gray-500 mt-2">{c.date}</p>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="flex gap-4 mt-10">
//                     <Avatar><AvatarFallback>YOU</AvatarFallback></Avatar>
//                     <div className="flex-1">
//                       <Textarea
//                         placeholder="Add a comment..."
//                         value={newComment}
//                         onChange={(e) => setNewComment(e.target.value)}
//                         className="min-h-32"
//                       />
//                       <Button className="mt-4" disabled={!newComment.trim()}>
//                         Add Comment
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
// app/test/page.js
// "use client";
// import React, { useState } from "react";
// import { format } from "date-fns";
// import {
//   X,
//   Maximize2,
//   ArrowLeft,
//   User,
//   Calendar,
//   MessageSquare,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// const tasks = [
//   {
//     id: "t1",
//     title: "Design new homepage hero",
//     description: "Bold animated hero section with new brand colors and smooth scroll animations.",
//     assignee: "Sarah Chen",
//     dueDate: "2025-11-25",
//     subtasks: [
//       { id: "s1", title: "Gather references", completed: true },
//       { id: "s2", title: "Create wireframes", completed: true },
//       { id: "s3", title: "High-fidelity mockup", completed: false },
//     ],
//     comments: [{ author: "John", text: "Loving the direction!", date: "2025-11-20" }],
//   },
//   {
//     id: "t2",
//     title: "Build responsive navigation",
//     description: "Convert design to code with mobile hamburger menu.",
//     assignee: "Mike Torres",
//     dueDate: "2025-11-30",
//     subtasks: [],
//     comments: [],
//   },
//   {
//     id: "t3",
//     title: "Add dark mode support",
//     assignee: "You",
//     dueDate: null,
//     subtasks: [{ id: "s4", title: "Design toggle", completed: false }],
//     comments: [],
//   },
// ];
// export default function TeamworkClone() {
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* LEFT: Full-width Task List (takes remaining space when no detail) */}
//       <div
//         className={`transition-all duration-500 ease-in-out overflow-y-auto ${
//           selectedTask
//             ? isExpanded
//               ? "w-0 opacity-0"
//               : "w-full lg:w-1/2"
//             : "w-full"
//         }`}
//       >
//         <div className="max-w-4xl mx-auto pt-12 px-8">
//           <h1 className="text-4xl font-bold mb-3">Website Redesign</h1>
//           <p className="text-gray-500 mb-12">kkk Project</p>
//           <div className="space-y-6">
//             {tasks.map((task) => (
//               <Card
//                 key={task.id}
//                 className={`p-8 cursor-pointer hover:shadow-xl transition-all border-2 ${
//                   selectedTask?.id === task.id
//                     ? "border-blue-500 shadow-lg"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => {
//                   setSelectedTask(task);
//                   setIsExpanded(false);
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-semibold">{task.title}</h3>
//                     <div className="flex items-center gap-8 mt-4 text-gray-600">
//                       <span className="text-sm">
//                         {task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length} subtasks
//                       </span>
//                       {task.comments.length > 0 && (
//                         <span className="flex items-center gap-1 text-sm">
//                           <MessageSquare className="w-4 h-4" />
//                           {task.comments.length}
//                         </span>
//                       )}
//                       <span className="ml-auto font-medium">{task.assignee}</span>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* RIGHT: Detail Panel - slides in on the right half or full screen */}
//       <div
//         className={`transition-all duration-500 ease-in-out bg-white shadow-2xl overflow-hidden ${
//           selectedTask
//             ? isExpanded
//               ? "w-full"
//               : "w-full lg:w-1/2"
//             : "w-0"
//         }`}
//       >
//         {selectedTask && (
//           <>
//             {/* Header with your favorite icons */}
//             <div className="sticky top-0 bg-white border-b z-10 px-8 py-6 flex items-center justify-between">
//               <h1 className="text-2xl font-bold pr-10">{selectedTask.title}</h1>
//               <div className="flex items-center gap-2">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setIsExpanded(!isExpanded)}
//                 >
//                   {isExpanded ? <ArrowLeft className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => {
//                     setSelectedTask(null);
//                     setIsExpanded(false);
//                   }}
//                 >
//                   <X className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>
//             {/* Detail Content - exactly as you love it */}
//             <div className="p-8 space-y-10 overflow-y-auto h-full">
//               <div className="grid grid-cols-2 gap-10">
//                 <div>
//                   <Label className="flex items-center gap-2 text-gray-600">
//                     <User className="w-4 h-4" /> Assignee
//                   </Label>
//                   <p className="text-xl font-medium mt-2">{selectedTask.assignee}</p>
//                 </div>
//                 <div>
//                   <Label className="flex items-center gap-2 text-gray-600">
//                     <Calendar className="w-4 h-4" /> Due Date
//                   </Label>
//                   <p className="text-xl font-medium mt-2">
//                     {selectedTask.dueDate
//                       ? format(new Date(selectedTask.dueDate), "MMMM d, yyyy")
//                       : "No due date"}
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Description</h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">{selectedTask.description}</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-5">
//                   Subtasks ({selectedTask.subtasks.filter((s) => s.completed).length}/{selectedTask.subtasks.length})
//                 </h3>
//                 <div className="space-y-4">
//                   {selectedTask.subtasks.map((sub) => (
//                     <div key={sub.id} className="flex items-center gap-4">
//                       <Checkbox checked={sub.completed} disabled />
//                       <span className={`text-lg ${sub.completed ? "line-through text-gray-500" : ""}`}>
//                         {sub.title}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-6">Comments</h3>
//                 <div className="space-y-8">
//                   {selectedTask.comments.map((c, i) => (
//                     <div key={i} className="flex gap-4">
//                       <Avatar>
//                         <AvatarFallback className="bg-blue-600 text-white">{c.author[0]}</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <p className="font-semibold">{c.author}</p>
//                         <p className="text-gray-700 mt-1">{c.text}</p>
//                         <p className="text-sm text-gray-500 mt-2">{c.date}</p>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="flex gap-4 mt-10">
//                     <Avatar><AvatarFallback>YOU</AvatarFallback></Avatar>
//                     <div className="flex-1">
//                       <Textarea
//                         placeholder="Add a comment..."
//                         value={newComment}
//                         onChange={(e) => setNewComment(e.target.value)}
//                         className="min-h-32"
//                       />
//                       <Button className="mt-4" disabled={!newComment.trim()}>
//                         Add Comment
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>NotFound)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function NotFound({ title = "Page Not Found", description = "The page you are looking for was not found." }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-gray-900 mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/test/page.js",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-lg max-w-lg mb-8",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/test/page.js",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                className: "px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition",
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/test/page.js",
                lineNumber: 489,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protected)/test/page.js",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_%28protected%29_test_page_741b5879.js.map