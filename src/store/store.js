import { configureStore } from "@reduxjs/toolkit";

//1.setting/commom slice
import sidebarReducer from "@/modules/settings/slices/sidebarSlice";
//2. Communication
import notificationReducer from "@/modules/communication/slices/notificationSlice";

//3. Auth & User
import profileReducer from "@/modules/user/slices/profileSlice";
import authReducer from "@/modules/auth/slices/authSlice";
import userReducer from "@/modules/user/slices/userSlice";
import employeeReducer from "@/modules/user/slices/employeeSlice";

//2.dashbaord/overview
import dashboardReducer from "@/modules/dashboard/slices/dashboardSlice";

//3.marketing
import contactReducer from "@/modules/marketing/slices/contactSlice";
import MarketingOverviewReducer from "@/modules/marketing/slices/MarketingOverviewSlice";

//4.sales
import quotationReducer from "@/modules/sales/slices/quotationSlice";
import quotationRequestsReducer from "@/modules/sales/slices/quotationRequestSlice";

//6. meeting
import meetReducer from "@/modules/meet/slices/meetSlice";

//5.client
import clientReducer from "@/modules/client-management/slices/clientSlice";

//6.project management
import projectAnalyticsReducer from "@/modules/project-management/analytics/slices/projectAnalyticsSlice";
import projectReducer from "@/modules/project-management/project/slices/projectSlice";
import teamReducer from "@/modules/project-management/team/slices/teamSlice";
import taskReducer from "@/modules/project-management/task/slices/taskSlice";
import subTaskReducer from "@/modules/project-management/task/slices/subTaskSlice";

import bugReducer from "@/modules/project-management/issues/slices/bugSlice";
import issuesReducer from "@/modules/project-management/issues/slices/issuesSlice";

import teamMembersReducer from "@/modules/project-management/team/slices/teamMembersSlice";
import viewTeamByProjectIdReducer from "@/modules/project-management/team/slices/viewTeamByProjectIdSlice";
//7.document
import documentReducer from "@/modules/document/slices/documentSlice";

// module reducer
import meetingReducer from "@/features/meetingSlice";
// import meetingCalendarReducer from "@/features/calender/meetingCalendarSlice";
import momReducer from "@/modules/meet/slices/momSlice";
import causeReducer from "@/modules/escalation/slices/causeSlice";

import projectMeetingMomReducer from "@/features/projectmeetingmomSlice"; // Adjust path as needed
import projectShowCauseReducer from "@/features/projectShowCauseSlice";

//master table
import slotReducer from "@/modules/master/slices/slotMasterSlice";
import serviceReducer from "@/modules/master/slices/serviceMasterSlice";
import industriesReducer from "@/modules/master/slices/industriesMasterSlice";




//budget

import budgetReducer from '@/modules/finance/budget/slices/budgetSlice'; // Import the budget request reducer
import budgetRequestReducer from '@/modules/finance/budget/slices/budgetRequestSlice'; // Import the budget request reducer
import budgetCategoryReducer from '@/modules/finance/budget/slices/budgetCategorySlice'; // Import the budget request reducer
import budgetEntityReducer from '@/modules/finance/budget/slices/budgetEntitySlice'; // Import the budget request reducer


const initialState = {
  initialized: false,
  loading: false,
  error: null,
};

export const store = configureStore({
  reducer: {
    app: (state = initialState, action) => {
      switch (action.type) {
        case "app/initialize":
          return { ...state, initialized: true };
        case "app/setLoading":
          return { ...state, loading: action.payload };
        case "app/setError":
          return { ...state, error: action.payload };
        default:
          return state;
      }
    },

    //1 setting
    sidebar: sidebarReducer,
    //2 user & auth
    profile: profileReducer,
    auth: authReducer,
    notifications: notificationReducer,
    user: userReducer,
    employee: employeeReducer,  // ✅ Registered here

    //3 dashboard
    dashboard: dashboardReducer,

    //4 marketing phase
    marketingOverview: MarketingOverviewReducer,
    contact: contactReducer,

    //6 sales & Meet phase
    quotation: quotationReducer,
    quotationRequests: quotationRequestsReducer,
    meet: meetReducer,

    // module reducer
    meetings: meetingReducer,
    // meetingCalendar: meetingCalendarReducer,
    mom: momReducer,

    //7 client management
    client: clientReducer,

    //8 project management
    project: projectReducer,
    projectAnalytics: projectAnalyticsReducer,

    teamMembers: teamMembersReducer,
    projectTeam: viewTeamByProjectIdReducer,
    
        //project meeting
        projectMeetingMom: projectMeetingMomReducer,
        projectShowCause: projectShowCauseReducer,

    task: taskReducer,
    subTask: subTaskReducer,
    team: teamReducer,
    bugs: bugReducer,
    issues: issuesReducer,
    //9 escalation
    cause: causeReducer,
    
    //10 document
    documents: documentReducer,

    //11 master
    slots: slotReducer,
    services: serviceReducer,
    industries: industriesReducer,


    //budget
     budgetRequest: budgetRequestReducer,
  budget: budgetReducer,
  budgetCategory: budgetCategoryReducer,
budgetEntity: budgetEntityReducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Initialize store
store.dispatch({ type: "app/initialize" });

export default store;
