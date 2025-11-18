

// "use client";

// import * as React from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { LucideCalendar } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
// import { useCountUp } from "@/hooks/useCountUp";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { getAllTaskByEmployeeId, selectAllTaskListByEmployeeId } from "@/features/taskSlice";
// import { fetchProjectsByEmployeeId } from "@/features/projectSlice";
// import { fetchTeamsByEmployeeId } from "@/features/teamSlice";
// import { fetchBugByEmployeeId } from "@/features/bugSlice";
// import { formatDateUTC } from "@/utils/formatDate";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { fetchTodayAndOverdueTasks } from "@/features/dashboard/dashboardSlice";

// // Chart Configuration
// const chartConfig = {
//   metrics: { label: "Metrics" },
//   projects: { label: "Projects", color: "#3b82f6" }, // Blue-500
//   tasks: { label: "Tasks", color: "#10b981" }, // Emerald-500
//   issues: { label: "Issues", color: "#f43f5e" }, // Rose-500
//   teams: { label: "Teams", color: "#f59e0b" }, // Amber-500
// };

// // Skeleton Components
// const CardSkeleton = () => (
//   <div className="animate-pulse rounded-xl bg-gray-100 p-6 shadow-sm">
//     <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
//     <div className="h-8 w-16 bg-gray-300 rounded mb-4" />
//     <div className="h-4 w-40 bg-gray-300 rounded" />
//   </div>
// );

// const TaskSkeleton = () => (
//   <div className="animate-pulse p-3 mb-2 border rounded-lg bg-gray-100">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <div className="h-5 w-5 bg-gray-300 rounded-full" />
//         <div>
//           <div className="h-4 w-48 bg-gray-300 rounded mb-1" />
//           <div className="h-3 w-24 bg-gray-300 rounded" />
//         </div>
//       </div>
//       <div className="h-6 w-20 bg-gray-300 rounded-full" />
//     </div>
//   </div>
// );

// const FullPageSkeleton = () => (
//   <div className="p-4 md:p-6 space-y-6 min-h-screen bg-gray-50">
//     <div className="space-y-2">
//       <Skeleton className="h-8 w-48 rounded-xl" />
//       <Skeleton className="h-4 w-64 rounded" />
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//     </div>
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <Skeleton className="h-6 w-1/3 mb-4" />
//       <Skeleton className="h-[250px] w-full rounded-xl" />
//     </div>
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <Skeleton className="h-6 w-48 rounded" />
//         <Skeleton className="h-8 w-40 rounded" />
//       </div>
//       <div className="bg-white rounded-xl shadow-lg p-4">
//         <TaskSkeleton />
//         <TaskSkeleton />
//         <TaskSkeleton />
//       </div>
//     </div>
//   </div>
// );

// export default function EmployeeDashboard() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const isMobile = useIsMobile();
//   const { currentUser } = useCurrentUser();
//   const employeeId = currentUser?.id;
//   const displayName = currentUser?.name || "User";

//   // State
//   const [timeRange, setTimeRange] = useState("90d");
//   const [taskFilter, setTaskFilter] = useState("all");

//   // Redux states
//   const { employeeTasks = [], isLoading: taskLoading, error: taskError } = useSelector((state) => state.task);
//   const tasks = useSelector(selectAllTaskListByEmployeeId);
//   const { employeeProjects = [], status: projectStatus, error: projectError } = useSelector((state) => state.project);
//   const { teamsByEmployee = [], status: teamStatus, error: teamError } = useSelector((state) => state.team);
//   const { bugsByEmployeeId = [], loading: bugLoading } = useSelector((state) => state.bugs);
// //dd

//   const { data,status, error } = useSelector(
//     (state) => state.dashboard.todayOverdueTasks
//   );
//   // Loading and error states
//   const isProjectsLoading = projectStatus === "loading";
//   const isTasksLoading = taskLoading;
//   const isBugLoading = bugLoading?.bugsByEmployeeId === "loading";
//   const isTeamsLoading = teamStatus.fetchTeamsByEmployeeId === "loading";
//   const isLoading = isProjectsLoading || isTasksLoading || isBugLoading || isTeamsLoading;
//   const hasError = taskError || projectStatus === "failed" || teamStatus === "failed";

//   // Animated counts
//   const animatedProjects = useCountUp(employeeProjects.length || 0);
//   const animatedTasks = useCountUp(tasks.filter((task) => task.status !== "Completed").length || 0);
//   const animatedBugs = useCountUp(bugsByEmployeeId.length || 0);
//   const animatedTeams = useCountUp(teamsByEmployee.length || 0);

//   // Data fetching
//   useEffect(() => {
//     if (employeeId) {
//       dispatch(fetchProjectsByEmployeeId(employeeId));
//       dispatch(getAllTaskByEmployeeId(employeeId));
//       dispatch(fetchBugByEmployeeId(employeeId));
//       dispatch(fetchTeamsByEmployeeId(employeeId));
//       dispatch(fetchTodayAndOverdueTasks(employeeId));
//     }
//   }, [dispatch, employeeId]);

//   // Mobile time range adjustment
//   useEffect(() => {
//     if (isMobile) setTimeRange("7d");
//   }, [isMobile]);

//   // Card data
//   const cards = [
//     {
//       title: "My Projects",
//       count: animatedProjects,
//       description: "Contributed Projects",
//       bgColor: "bg-blue-500",
//     },
//     {
//       title: "My Tasks",
//       count: animatedTasks,
//       description: "Tasks Assigned to Me",
//       bgColor: "bg-emerald-500",
//     },
//     {
//       title: "My Issues",
//       count: animatedBugs,
//       description: "Issues Assigned to Me",
//       bgColor: "bg-rose-500",
//     },
//     {
//       title: "My Teams",
//       count: animatedTeams,
//       description: "Collaborated Teams",
//       bgColor: "bg-amber-500",
//     },
//   ];
// console.log("qefwefwef",data);

//   // Task filtering
//   const today = new Date().toISOString().split("T")[0];
//   const dueTodayTasks = employeeTasks.filter(
//     (task) => task.status !== "Completed" && formatDateUTC(task.deadline) === today
//   );
//   const allDueTasks = employeeTasks.filter((task) => task.status !== "Completed");
//   const displayedTasks = taskFilter === "today" ? dueTodayTasks : allDueTasks;

//   // Chart data
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toISOString().split("T")[0];
//   };

//   const getDateRange = (range) => {
//     const endDate = new Date();
//     const startDate = new Date();
//     if (range === "7d") startDate.setDate(endDate.getDate() - 7);
//     else if (range === "30d") startDate.setDate(endDate.getDate() - 30);
//     else startDate.setDate(endDate.getDate() - 90);
//     return { startDate, endDate };
//   };

//   const chartData = React.useMemo(() => {
//     const { startDate, endDate } = getDateRange(timeRange);
//     const dateMap = new Map();

//     // Tasks
//     if (Array.isArray(employeeTasks)) {
//       employeeTasks.forEach((task) => {
//         const createdAt = task.createdAt || task.created_at;
//         if (createdAt) {
//           const date = new Date(createdAt);
//           if (date >= startDate && date <= endDate) {
//             const key = formatDate(createdAt);
//             const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//             dateMap.set(key, { ...existing, tasks: existing.tasks + 1 });
//           }
//         }
//       });
//     }

//     // Projects
//     if (Array.isArray(employeeProjects)) {
//       employeeProjects.forEach((project) => {
//         const createdAt = project.createdAt || project.created_at;
//         if (createdAt) {
//           const date = new Date(createdAt);
//           if (date >= startDate && date <= endDate) {
//             const key = formatDate(createdAt);
//             const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//             dateMap.set(key, { ...existing, projects: existing.projects + 1 });
//           }
//         }
//       });
//     }

//     // Issues (Bugs)
//     if (Array.isArray(bugsByEmployeeId)) {
//       bugsByEmployeeId.forEach((bug) => {
//         const createdAt = bug.createdAt || bug.created_at;
//         if (createdAt) {
//           const date = new Date(createdAt);
//           if (date >= startDate && date <= endDate) {
//             const key = formatDate(createdAt);
//             const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//             dateMap.set(key, { ...existing, issues: existing.issues + 1 });
//           }
//         }
//       });
//     }

//     // Teams
//     if (Array.isArray(teamsByEmployee)) {
//       teamsByEmployee.forEach((team) => {
//         const createdAt = team.createdAt || team.created_at;
//         if (createdAt) {
//           const date = new Date(createdAt);
//           if (date >= startDate && date <= endDate) {
//             const key = formatDate(createdAt);
//             const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//             dateMap.set(key, { ...existing, teams: existing.teams + 1 });
//           }
//         }
//       });
//     }

//     return Array.from(dateMap.values()).sort(
//       (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//     );
//   }, [employeeTasks, employeeProjects, bugsByEmployeeId, teamsByEmployee, timeRange]);

//   const safeChartData =
//     chartData.length > 0
//       ? chartData
//       : [{ date: new Date().toISOString().split("T")[0], tasks: 0, projects: 0, issues: 0, teams: 0 }];

//   // Animation variants
//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.3,
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 5,
//       },
//     }),
//   };

//   const headerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   if (isLoading) return <FullPageSkeleton />;

//   return (
//     <div className="p-4 md:p-6 space-y-8 min-h-screen">
//       {/* Header Section */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={headerVariants}
//         className="text-left"
//       >
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-1">
//           {"Hi, ".split("").map((char, i) => (
//             <motion.span
//               key={`hi-${i}`}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={letterVariants}
//             >
//               {char}
//             </motion.span>
//           ))}
//           <motion.span
//             className="text-blue-600"
//             initial="hidden"
//             animate="visible"
//             variants={headerVariants}
//           >
//             {displayName.split("").map((char, i) => (
//               <motion.span
//                 key={`name-${i}`}
//                 custom={i + 4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={letterVariants}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.span>
//         </h1>
//         <motion.p
//           className="text-sm md:text-base text-gray-600 mt-2"
//           initial="hidden"
//           animate="visible"
//           variants={headerVariants}
//         >
//           {"Welcome to BluePrint!".split("").map((char, i) => (
//             <motion.span
//               key={`welcome-${i}`}
//               custom={i + displayName.length + 4}
//               initial="hidden"
//               animate="visible"
//               variants={letterVariants}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.p>
//       </motion.div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <AnimatePresence>
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//               transition={{ delay: index * 0.1 }}
//               className={`${card.bgColor} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
//             >
//               <h3 className="text-sm opacity-90">{card.title}</h3>
//               <p className="text-2xl font-bold mt-1">{card.count}</p>
//               <p className="text-sm mt-2 flex items-center gap-2">
//                 {card.description} <IconTrendingUp className="h-4 w-4" />
//               </p>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Chart Section */}
//       <div className="bg-white rounded-xl shadow-lg @container/card">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Project Metrics</h2>
//               <p className="text-sm text-gray-600 hidden @[540px]/card:block">
//                 Project, task, issue, and team activity
//               </p>
//             </div>
//             <Select value={timeRange} onValueChange={setTimeRange}>
//               <SelectTrigger className="w-40 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500" size="sm">
//                 <SelectValue placeholder="Select time range" />
//               </SelectTrigger>
//               <SelectContent className="rounded-xl">
//                 <SelectItem value="7d">Last 7 days</SelectItem>
//                 <SelectItem value="30d">Last 30 days</SelectItem>
//                 <SelectItem value="90d">Last 3 months</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <ChartContainer config={chartConfig} className="h-[250px] w-full">
//             <AreaChart data={safeChartData}>
//               <defs>
//                 <linearGradient id="fillProjects" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={1.0} />
//                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillTasks" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillIssues" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillTeams" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
//                   <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="date"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 minTickGap={32}
//                 tickFormatter={(value) =>
//                   new Date(value).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                   })
//                 }
//               />
//               <ChartTooltip
//                 cursor={false}
//                 defaultIndex={isMobile ? -1 : 10}
//                 content={
//                   <ChartTooltipContent
//                     labelFormatter={(value) =>
//                       new Date(value).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                       })
//                     }
//                     indicator="dot"
//                   />
//                 }
//               />
//               <Area dataKey="projects" type="natural" fill="url(#fillProjects)" stroke="#3b82f6" stackId="a" />
//               <Area dataKey="tasks" type="natural" fill="url(#fillTasks)" stroke="#10b981" stackId="a" />
//               <Area dataKey="issues" type="natural" fill="url(#fillIssues)" stroke="#f43f5e" stackId="a" />
//               <Area dataKey="teams" type="natural" fill="url(#fillTeams)" stroke="#f59e0b" stackId="a" />
//             </AreaChart>
//           </ChartContainer>
//           {chartData.length === 0 && (
//             <p className="text-center text-sm text-gray-600 mt-4">
//               No data available for the selected time range
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Tasks Section */}
//       <div className="space-y-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Upcoming Tasks in Due</h2>
//           <Select value={taskFilter} onValueChange={setTaskFilter}>
//             <SelectTrigger className="w-40 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500" size="sm">
//               <SelectValue placeholder="Select filter" />
//             </SelectTrigger>
//             <SelectContent className="rounded-xl bg-white shadow-lg">
//               <SelectItem value="all">All Due</SelectItem>
//               <SelectItem value="today">Due Today</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="bg-white rounded-xl shadow-lg p-6 max-h-[400px] overflow-y-auto">
//           {displayedTasks.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-lg font-medium text-gray-600">
//                 No {taskFilter === "today" ? "tasks due today" : "upcoming tasks"} to show.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">
//                 {taskFilter === "today"
//                   ? "Check back tomorrow or view all due tasks."
//                   : "You're all caught up! Enjoy a task-free moment."}
//               </p>
//             </div>
//           ) : (
//             displayedTasks.map((task) => (
//               <div
//                 key={task._id}
//                 onClick={() => router.push(`/workspace/task/${task.task_id}`)}
//                 className="flex items-center justify-between p-4 mb-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
//               >
//                 <div className="flex items-center gap-4">
//                   <LucideCalendar className="h-5 w-5 text-gray-500" />
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
//                     <p className="text-xs text-gray-500">Priority: {task.priority || "N/A"}</p>
//                   </div>
//                 </div>
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     task.status === "In Progress"
//                       ? "bg-emerald-100 text-emerald-600"
//                       : task.status === "To Do"
//                       ? "bg-blue-100 text-blue-600"
//                       : task.status === "Completed"
//                       ? "bg-rose-100 text-rose-600"
//                       : "bg-amber-100 text-amber-600"
//                   }`}
//                 >
//                   {task.status}
//                 </span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }















// "use client";

// import * as React from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
// import { IconTrendingUp } from "@tabler/icons-react";
// import { LucideCalendar } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
// import { useCountUp } from "@/hooks/useCountUp";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { getAllTaskByEmployeeId, selectAllTaskListByEmployeeId } from "@/features/taskSlice";
// import { fetchProjectsByEmployeeId } from "@/features/projectSlice";
// import { fetchTeamsByEmployeeId } from "@/features/teamSlice";
// import { fetchBugByEmployeeId } from "@/features/bugSlice";
// import { formatDateUTC } from "@/utils/formatDate";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { fetchTodayAndOverdueTasks } from "@/features/dashboard/dashboardSlice";

// // Chart Configuration
// const chartConfig = {
//   metrics: { label: "Metrics" },
//   projects: { label: "Projects", color: "#3b82f6" },
//   tasks: { label: "Tasks", color: "#10b981" },
//   issues: { label: "Issues", color: "#f43f5e" },
//   teams: { label: "Teams", color: "#f59e0b" },
// };

// // Skeleton Components
// const CardSkeleton = () => (
//   <div className="animate-pulse rounded-xl bg-gray-100 p-6 shadow-sm">
//     <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
//     <div className="h-8 w-16 bg-gray-300 rounded mb-4" />
//     <div className="h-4 w-40 bg-gray-300 rounded" />
//   </div>
// );

// const TaskSkeleton = () => (
//   <div className="animate-pulse p-3 mb-2 border rounded-lg bg-gray-100">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <div className="h-5 w-5 bg-gray-300 rounded-full" />
//         <div>
//           <div className="h-4 w-48 bg-gray-300 rounded mb-1" />
//           <div className="h-3 w-24 bg-gray-300 rounded" />
//         </div>
//       </div>
//       <div className="h-6 w-20 bg-gray-300 rounded-full" />
//     </div>
//   </div>
// );

// const FullPageSkeleton = () => (
//   <div className="p-4 md:p-6 space-y-6 min-h-screen bg-gray-50">
//     <div className="space-y-2">
//       <Skeleton className="h-8 w-48 rounded-xl" />
//       <Skeleton className="h-4 w-64 rounded" />
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//       <CardSkeleton />
//     </div>
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <Skeleton className="h-6 w-1/3 mb-4" />
//       <Skeleton className="h-[250px] w-full rounded-xl" />
//     </div>
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <Skeleton className="h-6 w-48 rounded" />
//         <Skeleton className="h-8 w-40 rounded" />
//       </div>
//       <div className="bg-white rounded-xl shadow-lg p-4">
//         <TaskSkeleton />
//         <TaskSkeleton />
//         <TaskSkeleton />
//       </div>
//     </div>
//   </div>
// );

// export default function EmployeeDashboard() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const isMobile = useIsMobile();
//   const { currentUser } = useCurrentUser();
//   const employeeId = currentUser?.id;
//   const displayName = currentUser?.name || "User";

//   // State
//   const [timeRange, setTimeRange] = useState("90d");
//   const [taskFilter, setTaskFilter] = useState("all");

//   // Redux states
//   const tasks = useSelector(selectAllTaskListByEmployeeId);
//   const { employeeProjects = [], status: projectStatus } = useSelector((state) => state.project);
//   const { teamsByEmployee = [], status: teamStatus } = useSelector((state) => state.team);
//   const { bugsByEmployeeId = [], loading: bugLoading } = useSelector((state) => state.bugs);
//   const { todayOverdueTasks: { data: todayOverdueTasks = [], status, error } } = useSelector((state) => state.dashboard);

//   // Loading states
//   const isProjectsLoading = projectStatus === "loading";
//   const isTasksLoading = status === "loading";
//   const isBugLoading = bugLoading?.bugsByEmployeeId === "loading";
//   const isTeamsLoading = teamStatus.fetchTeamsByEmployeeId === "loading";
//   const isLoading = isProjectsLoading || isTasksLoading || isBugLoading || isTeamsLoading;

//   // Animated counts
//   const animatedProjects = useCountUp(employeeProjects.length || 0);
//   const animatedTasks = useCountUp(tasks.filter((task) => task.status !== "Completed").length || 0);
//   const animatedBugs = useCountUp(bugsByEmployeeId.length || 0);
//   const animatedTeams = useCountUp(teamsByEmployee.length || 0);

//   // Data fetching
//   useEffect(() => {
//     if (employeeId) {
//       dispatch(fetchProjectsByEmployeeId(employeeId));
//       dispatch(getAllTaskByEmployeeId(employeeId));
//       dispatch(fetchBugByEmployeeId(employeeId));
//       dispatch(fetchTeamsByEmployeeId(employeeId));
//       dispatch(fetchTodayAndOverdueTasks(employeeId));
//     }
//   }, [dispatch, employeeId]);

//   // Mobile time range adjustment
//   useEffect(() => {
//     if (isMobile) setTimeRange("7d");
//   }, [isMobile]);

//   // Card data
//   const cards = [
//     {
//       title: "My Projects",
//       count: animatedProjects,
//       description: "Contributed Projects",
//       bgColor: "bg-blue-500",
//     },
//     {
//       title: "My Tasks",
//       count: animatedTasks,
//       description: "Tasks Assigned to Me",
//       bgColor: "bg-emerald-500",
//     },
//     {
//       title: "My Issues",
//       count: animatedBugs,
//       description: "Issues Assigned to Me",
//       bgColor: "bg-rose-500",
//     },
//     {
//       title: "My Teams",
//       count: animatedTeams,
//       description: "Collaborated Teams",
//       bgColor: "bg-amber-500",
//     },
//   ];

//   // Task filtering
//   const today = new Date().toISOString().split("T")[0];
//   const dueTodayTasks = todayOverdueTasks.filter(
//     (task) => task.status !== "Completed" && formatDateUTC(task.deadline) === today
//   );
//   const allDueTasks = todayOverdueTasks.filter((task) => task.status !== "Completed");
//   const displayedTasks = taskFilter === "today" ? dueTodayTasks : allDueTasks;

//   // Chart data
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toISOString().split("T")[0];
//   };

//   const getDateRange = (range) => {
//     const endDate = new Date();
//     const startDate = new Date();
//     if (range === "7d") startDate.setDate(endDate.getDate() - 7);
//     else if (range === "30d") startDate.setDate(endDate.getDate() - 30);
//     else startDate.setDate(endDate.getDate() - 90);
//     return { startDate, endDate };
//   };

//   const chartData = React.useMemo(() => {
//     const { startDate, endDate } = getDateRange(timeRange);
//     const dateMap = new Map();

//     // Tasks
//     todayOverdueTasks.forEach((task) => {
//       const createdAt = task.createdAt || task.created_at;
//       if (createdAt) {
//         const date = new Date(createdAt);
//         if (date >= startDate && date <= endDate) {
//           const key = formatDate(createdAt);
//           const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//           dateMap.set(key, { ...existing, tasks: existing.tasks + 1 });
//         }
//       }
//     });

//     // Projects
//     employeeProjects.forEach((project) => {
//       const createdAt = project.createdAt || project.created_at;
//       if (createdAt) {
//         const date = new Date(createdAt);
//         if (date >= startDate && date <= endDate) {
//           const key = formatDate(createdAt);
//           const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//           dateMap.set(key, { ...existing, projects: existing.projects + 1 });
//         }
//       }
//     });

//     // Issues (Bugs)
//     bugsByEmployeeId.forEach((bug) => {
//       const createdAt = bug.createdAt || bug.created_at;
//       if (createdAt) {
//         const date = new Date(createdAt);
//         if (date >= startDate && date <= endDate) {
//           const key = formatDate(createdAt);
//           const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//           dateMap.set(key, { ...existing, issues: existing.issues + 1 });
//         }
//       }
//     });

//     // Teams
//     teamsByEmployee.forEach((team) => {
//       const createdAt = team.createdAt || team.created_at;
//       if (createdAt) {
//         const date = new Date(createdAt);
//         if (date >= startDate && date <= endDate) {
//           const key = formatDate(createdAt);
//           const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
//           dateMap.set(key, { ...existing, teams: existing.teams + 1 });
//         }
//       }
//     });

//     return Array.from(dateMap.values()).sort(
//       (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//     );
//   }, [todayOverdueTasks, employeeProjects, bugsByEmployeeId, teamsByEmployee, timeRange]);

//   const safeChartData =
//     chartData.length > 0
//       ? chartData
//       : [{ date: new Date().toISOString().split("T")[0], tasks: 0, projects: 0, issues: 0, teams: 0 }];

//   // Animation variants
//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.3,
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 5,
//       },
//     }),
//   };

//   const headerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   if (isLoading) return <FullPageSkeleton />;

//   return (
//     <div className="p-4 md:p-6 space-y-8 min-h-screen">
//       {/* Header Section */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={headerVariants}
//         className="text-left"
//       >
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-1">
//           {"Hi, ".split("").map((char, i) => (
//             <motion.span
//               key={`hi-${i}`}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={letterVariants}
//             >
//               {char}
//             </motion.span>
//           ))}
//           <motion.span
//             className="text-blue-600"
//             initial="hidden"
//             animate="visible"
//             variants={headerVariants}
//           >
//             {displayName.split("").map((char, i) => (
//               <motion.span
//                 key={`name-${i}`}
//                 custom={i + 4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={letterVariants}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.span>
//         </h1>
//         <motion.p
//           className="text-sm md:text-base text-gray-600 mt-2"
//           initial="hidden"
//           animate="visible"
//           variants={headerVariants}
//         >
//           {"Welcome to BluePrint!".split("").map((char, i) => (
//             <motion.span
//               key={`welcome-${i}`}
//               custom={i + displayName.length + 4}
//               initial="hidden"
//               animate="visible"
//               variants={letterVariants}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.p>
//       </motion.div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <AnimatePresence>
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//               transition={{ delay: index * 0.1 }}
//               className={`${card.bgColor} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
//             >
//               <h3 className="text-sm opacity-90">{card.title}</h3>
//               <p className="text-2xl font-bold mt-1">{card.count}</p>
//               <p className="text-sm mt-2 flex items-center gap-2">
//                 {card.description} <IconTrendingUp className="h-4 w-4" />
//               </p>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Chart Section */}
//       <div className="bg-white rounded-xl shadow-lg @container/card">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Project Metrics</h2>
//               <p className="text-sm text-gray-600 hidden @[540px]/card:block">
//                 Project, task, issue, and team activity
//               </p>
//             </div>
//             <Select value={timeRange} onValueChange={setTimeRange}>
//               <SelectTrigger className="w-40 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500" size="sm">
//                 <SelectValue placeholder="Select time range" />
//               </SelectTrigger>
//               <SelectContent className="rounded-xl">
//                 <SelectItem value="7d">Last 7 days</SelectItem>
//                 <SelectItem value="30d">Last 30 days</SelectItem>
//                 <SelectItem value="90d">Last 3 months</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <ChartContainer config={chartConfig} className="h-[250px] w-full">
//             <AreaChart data={safeChartData}>
//               <defs>
//                 <linearGradient id="fillProjects" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={1.0} />
//                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillTasks" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillIssues" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient id="fillTeams" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
//                   <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="date"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 minTickGap={32}
//                 tickFormatter={(value) =>
//                   new Date(value).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                   })
//                 }
//               />
//               <ChartTooltip
//                 cursor={false}
//                 defaultIndex={isMobile ? -1 : 10}
//                 content={
//                   <ChartTooltipContent
//                     labelFormatter={(value) =>
//                       new Date(value).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                       })
//                     }
//                     indicator="dot"
//                   />
//                 }
//               />
//               <Area dataKey="projects" type="natural" fill="url(#fillProjects)" stroke="#3b82f6" stackId="a" />
//               <Area dataKey="tasks" type="natural" fill="url(#fillTasks)" stroke="#10b981" stackId="a" />
//               <Area dataKey="issues" type="natural" fill="url(#fillIssues)" stroke="#f43f5e" stackId="a" />
//               <Area dataKey="teams" type="natural" fill="url(#fillTeams)" stroke="#f59e0b" stackId="a" />
//             </AreaChart>
//           </ChartContainer>
//           {chartData.length === 0 && (
//             <p className="text-center text-sm text-gray-600 mt-4">
//               No data available for the selected time range
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Tasks Section */}
//       <div className="space-y-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Upcoming Tasks in Due</h2>
//           <Select value={taskFilter} onValueChange={setTaskFilter}>
//             <SelectTrigger className="w-40 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500" size="sm">
//               <SelectValue placeholder="Select filter" />
//             </SelectTrigger>
//             <SelectContent className="rounded-xl bg-white shadow-lg">
//               <SelectItem value="all">All Due</SelectItem>
//               <SelectItem value="today">Due Today</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="bg-white rounded-xl shadow-lg p-6 max-h-[400px] overflow-y-auto">
//           {displayedTasks.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-lg font-medium text-gray-600">
//                 No {taskFilter === "today" ? "tasks due today" : "upcoming tasks"} to show.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">
//                 {taskFilter === "today"
//                   ? "Check back tomorrow or view all due tasks."
//                   : "You're all caught up! Enjoy a task-free moment."}
//               </p>
//             </div>
//           ) : (
//             displayedTasks.map((task) => (
//               <div
//                 key={task._id}
//                 onClick={() => router.push(`/workspace/task/${task.task_id}`)}
//                 className="flex items-center justify-between p-4 mb-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
//               >
//                 <div className="flex items-center gap-4">
//                   <LucideCalendar className="h-5 w-5 text-gray-500" />
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
//                     <p className="text-xs text-gray-500">Priority: {task.priority || "N/A"}</p>
//                   </div>
//                 </div>
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     task.status === "In Progress"
//                       ? "bg-emerald-100 text-emerald-600"
//                       : task.status === "To Do"
//                       ? "bg-blue-100 text-blue-600"
//                       : task.status === "Completed"
//                       ? "bg-rose-100 text-rose-600"
//                       : "bg-amber-100 text-amber-600"
//                   }`}
//                 >
//                   {task.status}
//                 </span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { IconTrendingUp } from "@tabler/icons-react";
import { LucideCalendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useCountUp } from "@/hooks/useCountUp";
import { useIsMobile } from "@/hooks/use-mobile";
import { getAllTaskByEmployeeId, selectAllTaskListByEmployeeId } from "@/modules/project-management/task/slices/taskSlice";
import { fetchProjectsByEmployeeId } from "@/modules/project-management/project/slices/projectSlice";
import { fetchTeamsByEmployeeId } from "@/modules/project-management/team/slices/teamSlice";
import { fetchBugByEmployeeId } from "@/modules/project-management/issues/slices/bugSlice";
import { formatDateUTC } from "@/utils/formatDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { fetchTodayAndOverdueTasks } from "@/modules/dashboard/slices/dashboardSlice";

// Chart Configuration
const chartConfig = {
  metrics: { label: "Metrics" },
  projects: { label: "Projects", color: "#3b82f6" }, // Blue-500
  tasks: { label: "Tasks", color: "#10b981" }, // Emerald-500
  issues: { label: "Issues", color: "#f43f5e" }, // Rose-500
  teams: { label: "Teams", color: "#f59e0b" }, // Amber-500
};

// Skeleton Components
const CardSkeleton = () => (
  <div className="animate-pulse rounded-xl bg-gray-100 p-6 shadow-sm">
    <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
    <div className="h-8 w-16 bg-gray-300 rounded mb-4" />
    <div className="h-4 w-40 bg-gray-300 rounded" />
  </div>
);

const TaskSkeleton = () => (
  <div className="animate-pulse p-3 mb-2 border rounded-lg bg-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 bg-gray-300 rounded-full" />
        <div>
          <div className="h-4 w-48 bg-gray-300 rounded mb-1" />
          <div className="h-3 w-24 bg-gray-300 rounded" />
        </div>
      </div>
      <div className="h-6 w-20 bg-gray-300 rounded-full" />
    </div>
  </div>
);

const FullPageSkeleton = () => (
  <div className="p-4 md:p-6 space-y-6 min-h-screen bg-gray-50">
    <div className="space-y-2">
      <Skeleton className="h-8 w-48 rounded-xl" />
      <Skeleton className="h-4 w-64 rounded" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
    <div className="bg-white rounded-xl shadow-lg p-6">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-[250px] w-full rounded-xl" />
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-48 rounded" />
        <Skeleton className="h-8 w-40 rounded" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4">
        <TaskSkeleton />
        <TaskSkeleton />
        <TaskSkeleton />
      </div>
    </div>
  </div>
);

export default function EmployeeDashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isMobile = useIsMobile();
  const { currentUser } = useCurrentUser();
  const employeeId = currentUser?.id;
  const displayName = currentUser?.name || "User";

  // State
  const [timeRange, setTimeRange] = useState("90d");

  // Redux states
  const tasks = useSelector(selectAllTaskListByEmployeeId);
  const { employeeProjects = [], status: projectStatus, error: projectError } = useSelector((state) => state.project);
  const { teamsByEmployee = [], status: teamStatus, error: teamError } = useSelector((state) => state.team);
  const { bugsByEmployeeId = [], loading: bugLoading, error: bugError } = useSelector((state) => state.bugs);
  const { data: todayOverdueTasks = [], status: todayOverdueStatus, error: todayOverdueError } = useSelector(
    (state) => state.dashboard.todayOverdueTasks
  );

  // Loading and error states
  const isProjectsLoading = projectStatus === "loading";
  const isTasksLoading = todayOverdueStatus === "loading";
  const isBugLoading = bugLoading?.bugsByEmployeeId === "loading";
  const isTeamsLoading = teamStatus.fetchTeamsByEmployeeId === "loading";
  const isLoading = isProjectsLoading || isTasksLoading || isBugLoading || isTeamsLoading;
  const hasError = projectError || teamError || bugError || todayOverdueError;

  // Animated counts
  const animatedProjects = useCountUp(employeeProjects.length || 0);
  const animatedTasks = useCountUp(tasks.length || 0); // Use tasks for total task count
  const animatedBugs = useCountUp(bugsByEmployeeId.length || 0);
  const animatedTeams = useCountUp(teamsByEmployee.length || 0);

  // Data fetching
  useEffect(() => {
    if (employeeId) {
      dispatch(fetchProjectsByEmployeeId(employeeId));
      dispatch(getAllTaskByEmployeeId(employeeId)); // Fetch all tasks for chart and count
      dispatch(fetchBugByEmployeeId(employeeId));
      dispatch(fetchTeamsByEmployeeId(employeeId));
      dispatch(fetchTodayAndOverdueTasks(employeeId)); // Fetch due/overdue tasks for tasks section
    }
  }, [dispatch, employeeId]);

  // Mobile time range adjustment
  useEffect(() => {
    if (isMobile) setTimeRange("7d");
  }, [isMobile]);

  // Card data
  const cards = [
    {
      title: "My Projects",
      count: animatedProjects,
      description: "Contributed Projects",
      bgColor: "bg-blue-500",
    },
    {
      title: "My Tasks",
      count: animatedTasks,
      description: "Assigned Tasks",
      bgColor: "bg-emerald-500",
    },
    {
      title: "My Issues",
      count: animatedBugs,
      description: "Issues Assigned to Me",
      bgColor: "bg-rose-500",
    },
    {
      title: "My Teams",
      count: animatedTeams,
      description: "Collaborated Teams",
      bgColor: "bg-amber-500",
    },
  ];

  // Chart data
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toISOString().split("T")[0];
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const getDateRange = (range) => {
    const endDate = new Date();
    const startDate = new Date();
    if (range === "7d") startDate.setDate(endDate.getDate() - 7);
    else if (range === "30d") startDate.setDate(endDate.getDate() - 30);
    else startDate.setDate(endDate.getDate() - 90);
    return { startDate, endDate };
  };

  const chartData = React.useMemo(() => {
    const { startDate, endDate } = getDateRange(timeRange);
    const dateMap = new Map();

    // Tasks (using tasks from selectAllTaskListByEmployeeId)
    if (Array.isArray(tasks)) {
      tasks.forEach((task) => {
        const createdAt = task.createdAt || task.created_at;
        if (createdAt) {
          const date = new Date(createdAt);
          if (date >= startDate && date <= endDate) {
            const key = formatDate(createdAt);
            const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
            dateMap.set(key, { ...existing, tasks: existing.tasks + 1 });
          }
        }
      });
    }

    // Projects
    if (Array.isArray(employeeProjects)) {
      employeeProjects.forEach((project) => {
        const createdAt = project.createdAt || project.created_at;
        if (createdAt) {
          const date = new Date(createdAt);
          if (date >= startDate && date <= endDate) {
            const key = formatDate(createdAt);
            const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
            dateMap.set(key, { ...existing, projects: existing.projects + 1 });
          }
        }
      });
    }

    // Issues (Bugs)
    if (Array.isArray(bugsByEmployeeId)) {
      bugsByEmployeeId.forEach((bug) => {
        const createdAt = bug.createdAt || bug.created_at;
        if (createdAt) {
          const date = new Date(createdAt);
          if (date >= startDate && date <= endDate) {
            const key = formatDate(createdAt);
            const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
            dateMap.set(key, { ...existing, issues: existing.issues + 1 });
          }
        }
      });
    }

    // Teams
    if (Array.isArray(teamsByEmployee)) {
      teamsByEmployee.forEach((team) => {
        const createdAt = team.createdAt || team.created_at;
        if (createdAt) {
          const date = new Date(createdAt);
          if (date >= startDate && date <= endDate) {
            const key = formatDate(createdAt);
            const existing = dateMap.get(key) || { date: key, tasks: 0, projects: 0, issues: 0, teams: 0 };
            dateMap.set(key, { ...existing, teams: existing.teams + 1 });
          }
        }
      });
    }

    return Array.from(dateMap.values()).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [tasks, employeeProjects, bugsByEmployeeId, teamsByEmployee, timeRange]);

  const safeChartData =
    chartData.length > 0
      ? chartData
      : [{ date: new Date().toISOString().split("T")[0], tasks: 0, projects: 0, issues: 0, teams: 0 }];

  // Animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 5,
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if (isLoading) return <FullPageSkeleton />;

  return (
    <div className="p-4 md:p-6 space-y-8 min-h-screen">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-1">
          {"Hi, ".split("").map((char, i) => (
            <motion.span
              key={`hi-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-blue-600"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            {displayName.split("").map((char, i) => (
              <motion.span
                key={`name-${i}`}
                custom={i + 4}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.p
          className="text-sm md:text-base text-gray-600 mt-2"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          {"Welcome to BluePrint!".split("").map((char, i) => (
            <motion.span
              key={`welcome-${i}`}
              custom={i + displayName.length + 4}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className={`${card.bgColor} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-sm opacity-90">{card.title}</h3>
              <p className="text-2xl font-bold mt-1">{card.count}</p>
              <p className="text-sm mt-2 flex items-center gap-2">
                {card.description} <IconTrendingUp className="h-4 w-4" />
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-lg @container/card">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Project Metrics</h2>
              <p className="text-sm text-gray-600 hidden @[540px]/card:block">
                Project, task, issue, and team activity
              </p>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40 bg-gray-100 hover:bg-blue-100 focus:ring-blue-500" size="sm">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={safeChartData}>
              <defs>
                <linearGradient id="fillProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={1.0} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillIssues" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillTeams" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <ChartTooltip
                cursor={false}
                defaultIndex={isMobile ? -1 : 10}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                    indicator="dot"
                  />
                }
              />
              <Area dataKey="projects" type="natural" fill="url(#fillProjects)" stroke="#3b82f6" stackId="a" />
              <Area dataKey="tasks" type="natural" fill="url(#fillTasks)" stroke="#10b981" stackId="a" />
              <Area dataKey="issues" type="natural" fill="url(#fillIssues)" stroke="#f43f5e" stackId="a" />
              <Area dataKey="teams" type="natural" fill="url(#fillTeams)" stroke="#f59e0b" stackId="a" />
            </AreaChart>
          </ChartContainer>
          {chartData.length === 0 && (
            <p className="text-center text-sm text-gray-600 mt-4">
              No data available for the selected time range
            </p>
          )}
        </div>
      </div>

      {/* Tasks Section */}
      <div className="p-5 text-gray-700">
        <h2 className="text-lg font-semibold mb-2">Due or Overdue Tasks</h2>
       
        <div className="bg-white rounded-xl shadow-lg p-6 h-[400px] overflow-y-auto">
          {todayOverdueStatus === "failed" ? (
            <div className="text-center py-12">
              <p className="text-lg font-medium text-red-600">Failed to load tasks: {todayOverdueError}</p>
              <p className="text-sm text-gray-500 mt-2">Please try again later.</p>
            </div>
          ) : todayOverdueTasks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-medium text-gray-600">No due or overdue tasks to show.</p>
              <p className="text-sm text-gray-500 mt-2">You're all caught up! Enjoy a task-free moment.</p>
            </div>
          ) : (
            todayOverdueTasks
              .map((task) => (
                <div
                  key={task._id}
                  onClick={() => router.push(`/workspace/task/${task.task_id}`)}
                  className="flex items-center justify-between p-4 mb-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <LucideCalendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
                      <p className="text-xs text-gray-500">
                        Deadline: {task.deadline ? formatDateUTC(task.deadline) : "N/A"}
                      </p>
                      <p className="text-xs text-gray-500">Priority: {task.priority || "N/A"}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      task.status === "In Progress"
                        ? "bg-emerald-100 text-emerald-600"
                        : task.status === "To Do"
                        ? "bg-indigo-100 text-indigo-600"
                        : task.status === "Completed"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {task.status || "Unknown"}
                  </span>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}





