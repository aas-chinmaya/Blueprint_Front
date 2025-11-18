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






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ✅ Thunk: Fetch overall project analytics
export const fetchProjectAnalytics = createAsyncThunk(
  "projectAnalytics/fetchProjectAnalytics",
  async (projectId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/projects/analytics/${projectId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch project analytics"
      );
    }
  }
);

// ✅ Thunk: Fetch employee-level analytics within a project
export const fetchEmployeeAnalytics = createAsyncThunk(
  "projectAnalytics/fetchEmployeeAnalytics",
  async ({ projectId, employeeId }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/projects/analytics/${projectId}/${employeeId}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch employee analytics"
      );
    }
  }
);

// ✅ Slice definition
const projectAnalyticsSlice = createSlice({
  name: "projectAnalytics",
  initialState: {
    analytics: null,          // project-level analytics
    employeeAnalytics: null,  // employee-level analytics
    loading: false,
    error: null,
  },
  reducers: {
    resetProjectAnalytics: (state) => {
      state.analytics = null;
      state.employeeAnalytics = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ---- Project Analytics ----
      .addCase(fetchProjectAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.analytics = action.payload;
      })
      .addCase(fetchProjectAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ---- Employee Analytics ----
      .addCase(fetchEmployeeAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.employeeAnalytics = action.payload;
      })
      .addCase(fetchEmployeeAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProjectAnalytics } = projectAnalyticsSlice.actions;
export default projectAnalyticsSlice.reducer;
