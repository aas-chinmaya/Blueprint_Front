"use client";

import {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  Users,
  ListChecks,
  Bug,
  FolderClosed,
  FileText,
  PhoneCall,
  User,
  Folder,
} from "lucide-react";

// 🧠 Icon Map
export const iconMap = {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  Users,
  ListChecks,
  Bug,
  FolderClosed,
  FileText,
  PhoneCall,
  User,
  Folder,
};

// 👥 Role Groups
export const roleGroups = {
  cpcGroup: ["cpc", "Team Lead"],
  employeeGroup: ["employee(regular)"],
};

// 🧩 Utility — prefix + alias generator
const withBase = (base, items) =>
  items.map((item) => ({
    ...item,
    alias: item.alias || `${base.replace("/", "")}-${item.path || "root"}`,
    url: `${base}${item.path ? `/${item.path}` : ""}`,
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

// 🧭 Unified Navigation
export const fullNav = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "LayoutDashboard",
    alias: "dashboard",
    roles: ["cpcGroup", "employeeGroup"],
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: "Inbox",
    alias: "inbox",
    roles: ["cpcGroup", "employeeGroup"],
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
    roles: ["cpcGroup"],
    alias: "project-root",
    items: withBase(PROJECT_BASE, [

      // CPC / Team Lead
      { title: "All Projects", path: "all", alias: "projects-all", roles: ["cpcGroup"] },
      { title: "Onboarding", path: "onboarding", alias: "projects-onboarding", roles: ["cpcGroup"] },
    
      
    ]),
  },
  // 🧠 Workspace
  {
    title: "Workspace",
    icon: "Folder",
    roles: ["cpcGroup", "employeeGroup"],
    alias: "workspace-root",
    items: withBase(WORKSPACE_BASE, [

      // CPC / Team Lead
      { title: "All Teams", path: "team/all", alias: "workspace-teams-all", roles: ["cpcGroup"] },
      { title: "Task Board", path: "task/all", alias: "workspace-tasks-all", roles: ["cpcGroup"] },
      { title: "Issue Tracker", path: "issues/all", alias: "workspace-issues-all", roles: ["cpcGroup"] },
      
      
      // Employee
      { title: "Assigned Projects", path: "my-projects", alias: "workspace-projects-my", roles: ["employeeGroup"] },
      { title: "Assigned Tasks", path: "task/my-tasks", alias: "workspace-tasks-my", roles: ["employeeGroup"] },
      { title: "Assigned Issues", path: "issues/my-issues", alias: "workspace-issues-all", roles: ["employeeGroup"] },
      { title: "Worked Teams", path: "team/my-teams", alias: "workspace-teams-my", roles: ["employeeGroup"] },
      
    ]),
  },

  // 📣 Marketing
  {
   title: "Contacts",
   url: "#",
   icon: "Inbox",
   roles: ["cpcGroup"],
   items: withBase(MARKETING_BASE,[
     { title: "Overview", path: "contacts/overview", roles: ["cpcGroup", "employeeGroup"] },
     { title: "Recent Inquiry", path: "contacts/recent", roles: ["cpcGroup", "employeeGroup"] },
    //  { title: "Follow-Up Action", path: "contacts/follow-ups", roles: ["cpcGroup", "employeeGroup"] },
     { title: "All Inquiry", path: "contacts/all", roles: ["cpcGroup", "employeeGroup"] },
    //  { title: "Reports", path: "/contacts/reports", roles: ["cpcGroup", "employeeGroup"] },
   ]),
 },

   {
   title: "Client",
   url: "#",
   icon: "Inbox",
   roles: ["cpcGroup"],
   items: withBase(CLIENT_BASE,[
     { title: "All Clients", path: "all", roles: ["cpcGroup", "employeeGroup"] },
     { title: "Onboarding", path: "onboarding", roles: ["cpcGroup", "employeeGroup"] },

   
   ]),
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
   roles: ["cpcGroup"],
   items: [
     { title: "All Quotations", url: "/quotation", roles: ["cpcGroup", "employeeGroup"] },
   ],
 },


  // ⚙️ Master Data
  {
    title: "Escalation",
    icon: "FolderClosed",
    alias: "master-root",
    roles: ["cpcGroup"],
    items: withBase(ESCALATION_BASE, [
      { title: "Show cause", path: "show-cause", alias: "show-cause", roles: ["cpcGroup"] },
      
    ]),
  },
  // ⚙️ Master Data
  {
    title: "Master",
    icon: "FolderClosed",
    alias: "master-root",
    roles: ["cpcGroup"],
    items: withBase(MASTER_BASE, [
      { title: "Service Catalog", path: "services", alias: "master-services-all", roles: ["cpcGroup"] },
      { title: "Industry Setup", path: "industry", alias: "master-industry-all", roles: ["cpcGroup"] },
      { title: "Meeting Slots", path: "slots", alias: "master-slots-all", roles: ["cpcGroup"] },
    ]),
  },
];
