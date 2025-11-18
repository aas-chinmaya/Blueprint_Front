


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

export const fetchCurrentProject = createAsyncThunk(
  'dashboard/fetchCurrentProject',
  async () => {
    try {
      const response = await axiosInstance.get('/projects/getallprojectswithallteams');
      // console.log('fetchCurren/tProject response:', response.data);
      return response.data || {};
    } catch (error) {
      // console.error('fetchCurrentProject error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch current project');
    }
  }
);

export const fetchAllClients = createAsyncThunk(
  'dashboard/fetchAllClients',
  async () => {
    try {
      const response = await axiosInstance.get('/client/getAllClients');
      // console.log('fetchAllClients response:', response.data);
      return {
        data: response.data.clients || [],
        totalClients: response.data.totalClients || 0,
      };
    } catch (error) {
      // console.error('fetchAllClients error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch clients');
    }
  }
);

export const fetchClientInsights = createAsyncThunk(
  'dashboard/fetchClientInsights',
  async () => {
    try {
      const response = await axiosInstance.get('/client/insights');
      // console.log('fetchClientInsights response:', response.data);
      return {
        activeClients: response.data.clientsWithInProgressProjects?.total || 0,
        newClients: response.data.clientsOnboardedLast3Months?.total || 0,
        data: response.data || {},
      };
    } catch (error) {
      // console.error('fetchClientInsights error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch client insights');
    }
  }
);

export const fetchProjectTasks = createAsyncThunk(
  'dashboard/fetchProjectTasks',
  async () => {
    try {
      const response = await axiosInstance.get('/projects/projectswithtasks');
      // console.log('fetchProjectTasks response:', response.data);
      return response.data || [];
    } catch (error) {
      // console.error('fetchProjectTasks error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch project tasks');
    }
  }
);

export const fetchProjectActivities = createAsyncThunk(
  'dashboard/fetchProjectActivities',
  async () => {
    try {
      const response = await axiosInstance.get('/projects/near-ending');
      console.log('fetchProjectActivities response:', response.data);
      const transformedData = (response.data.projects || []).map((project) => ({
        userInitials: project.teamLeadName?.charAt(0) || '#',
        project: {
          name: project.projectName || 'Unknown',
          id: project.projectId || '',
        },
        teamLead: project.teamLeadName || 'Unknown',
        leadId: project.leadId || '',
        endDate: project.endDate || '',
        category: project.category || '',
        daysRemaining: project.endDate
          ? Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24))
          : 0,
        color: project.endDate
          ? Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 7
            ? 'red'
            : Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 30
            ? 'amber'
            : 'blue'
          : 'blue',
      }));
      return transformedData;
    } catch (error) {
      console.error('fetchProjectActivities error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch project activities');
    }
  }
);

export const fetchProjectById = createAsyncThunk(
  'dashboard/fetchProjectById',
  async (projectId) => {
    try {
      const response = await axiosInstance.get(`/projects/getProjectById/${projectId}`);
      console.log('fetchProjectById response:', response.data);
      return response.data || {};
    } catch (error) {
      console.error('fetchProjectById error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch project details');
    }
  }
);

export const fetchTasksByDeadline = createAsyncThunk(
  'dashboard/fetchTasksByDeadline',
  async () => {
    try {
      const response = await axiosInstance.get('/task/bydeadline');
     
      
      return response.data.tasks;
    } catch (error) {
      // console.error('fetchTasksByDeadline error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch deadline tasks');
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  'dashboard/fetchTaskById',
  async (taskId) => {
    try {
      const response = await axiosInstance.get(`/task/getbyid/${taskId}`);
      // console.log('fetchTaskById response:', response.data);
      return response.data || {};
    } catch (error) {
      // console.error('fetchTaskById error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch task details');
    }
  }
);
export const fetchTodayAndOverdueTasks = createAsyncThunk(
  'dashboard/fetchTodayAndOverdueTasks',
  async (employeeId) => {
    try {
      const response = await axiosInstance.get(`/task/employee/today-overdue/${employeeId}`);
      // console.log('fetchTodayAndOverdueTasks response:', response.data);
      return response.data.tasks || [];
    } catch (error) {
      // console.error('fetchTodayAndOverdueTasks error:', error.response?.data?.message || error.message);
      throw Error(error.response?.data?.message || 'Failed to fetch today & overdue tasks');
    }
  }
);
const initialState = {
  currentProject: {
    data: {},
    status: 'idle',
    error: null,
  },
  clients: {
    data: [],
    totalClients: 0,
    status: 'idle',
    error: null,
  },
  clientInsights: {
    data: {},
    activeClients: 0,
    newClients: 0,
    status: 'idle',
    error: null,
  },
  projectTasks: {
    data: [],
    status: 'idle',
    error: null,
  },
  projectActivities: {
    data: [],
    status: 'idle',
    error: null,
  },
  selectedProject: {
    data: {},
    status: 'idle',
    error: null,
  },
  deadlineTasks: {
    data: [],
    status: 'idle',
    error: null,
  },
  /* 🔹 NEW: Today & Overdue Tasks */
  todayOverdueTasks: {
    data: [],
    status: 'idle',
    error: null,
  },
  selectedTask: {
    data: {},
    status: 'idle',
    error: null,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Current Project
    builder
      .addCase(fetchCurrentProject.pending, (state) => {
        state.currentProject.status = 'loading';
        state.currentProject.error = null;
      })
      .addCase(fetchCurrentProject.fulfilled, (state, action) => {
        state.currentProject.status = 'succeeded';
        state.currentProject.data = action.payload || {};
        state.currentProject.error = null;
      })
      .addCase(fetchCurrentProject.rejected, (state, action) => {
        state.currentProject.status = 'failed';
        state.currentProject.data = {};
        state.currentProject.error = action.error.message;
      });

    // Clients
    builder
      .addCase(fetchAllClients.pending, (state) => {
        state.clients.status = 'loading';
        state.clients.error = null;
      })
      .addCase(fetchAllClients.fulfilled, (state, action) => {
        state.clients.status = 'succeeded';
        state.clients.data = action.payload.data || [];
        state.clients.totalClients = action.payload.totalClients || 0;
        state.clients.error = null;
      })
      .addCase(fetchAllClients.rejected, (state, action) => {
        state.clients.status = 'failed';
        state.clients.data = [];
        state.clients.error = action.error.message;
      });

    // Client Insights
    builder
      .addCase(fetchClientInsights.pending, (state) => {
        state.clientInsights.status = 'loading';
        state.clientInsights.error = null;
      })
      .addCase(fetchClientInsights.fulfilled, (state, action) => {
        state.clientInsights.status = 'succeeded';
        state.clientInsights.activeClients = action.payload.activeClients || 0;
        state.clientInsights.newClients = action.payload.newClients || 0;
        state.clientInsights.data = action.payload.data || {};
        state.clientInsights.error = null;
      })
      .addCase(fetchClientInsights.rejected, (state, action) => {
        state.clientInsights.status = 'failed';
        state.clientInsights.data = {};
        state.clientInsights.error = action.error.message;
      });

    // Project Tasks
    builder
      .addCase(fetchProjectTasks.pending, (state) => {
        state.projectTasks.status = 'loading';
        state.projectTasks.error = null;
      })
      .addCase(fetchProjectTasks.fulfilled, (state, action) => {
        state.projectTasks.status = 'succeeded';
        state.projectTasks.data = action.payload || [];
        state.projectTasks.error = null;
      })
      .addCase(fetchProjectTasks.rejected, (state, action) => {
        state.projectTasks.status = 'failed';
        state.projectTasks.data = [];
        state.projectTasks.error = action.error.message;
      });

    // Project Activities
    builder
      .addCase(fetchProjectActivities.pending, (state) => {
        state.projectActivities.status = 'loading';
        state.projectActivities.error = null;
      })
      .addCase(fetchProjectActivities.fulfilled, (state, action) => {
        state.projectActivities.status = 'succeeded';
        state.projectActivities.data = action.payload || [];
        state.projectActivities.error = null;
      })
      .addCase(fetchProjectActivities.rejected, (state, action) => {
        state.projectActivities.status = 'failed';
        state.projectActivities.data = [];
        state.projectActivities.error = action.error.message;
      });

    // Selected Project
    builder
      .addCase(fetchProjectById.pending, (state) => {
        state.selectedProject.status = 'loading';
        state.selectedProject.error = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.selectedProject.status = 'succeeded';
        state.selectedProject.data = action.payload || {};
        state.selectedProject.error = null;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.selectedProject.status = 'failed';
        state.selectedProject.data = {};
        state.selectedProject.error = action.error.message;
      });

    // Deadline Tasks
    builder
      .addCase(fetchTasksByDeadline.pending, (state) => {
        state.deadlineTasks.status = 'loading';
        state.deadlineTasks.error = null;
      })
      .addCase(fetchTasksByDeadline.fulfilled, (state, action) => {
        state.deadlineTasks.status = 'succeeded';
        state.deadlineTasks.data = action.payload || [];
        state.deadlineTasks.error = null;
      })
      .addCase(fetchTasksByDeadline.rejected, (state, action) => {
        state.deadlineTasks.status = 'failed';
        state.deadlineTasks.data = [];
        state.deadlineTasks.error = action.error.message;
      });

    // Selected Task
    builder
      .addCase(fetchTaskById.pending, (state) => {
        state.selectedTask.status = 'loading';
        state.selectedTask.error = null;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.selectedTask.status = 'succeeded';
        state.selectedTask.data = action.payload || {};
        state.selectedTask.error = null;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.selectedTask.status = 'failed';
        state.selectedTask.data = {};
        state.selectedTask.error = action.error.message;
      })
       builder
      .addCase(fetchTodayAndOverdueTasks.pending, (state) => {
        state.todayOverdueTasks.status = 'loading';
        state.todayOverdueTasks.error = null;
      })
      .addCase(fetchTodayAndOverdueTasks.fulfilled, (state, action) => {
        state.todayOverdueTasks.status = 'succeeded';
        state.todayOverdueTasks.data = action.payload || [];
        state.todayOverdueTasks.error = null;
      })
      .addCase(fetchTodayAndOverdueTasks.rejected, (state, action) => {
        state.todayOverdueTasks.status = 'failed';
        state.todayOverdueTasks.data = [];
        state.todayOverdueTasks.error = action.error.message;
      })
      ;
  },
});

export default dashboardSlice.reducer;