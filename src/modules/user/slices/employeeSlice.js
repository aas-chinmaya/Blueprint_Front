import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

// 🔹 All employees
export const fetchAllEmployees = createAsyncThunk(
  'employee/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get('/hrms/employees', { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch all employees');
    }
  }
);

// 🔹 IT Department employees
export const fetchAllITEmployees = createAsyncThunk(
  'employee/fetchAllIT',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get('/hrms/employee/it', { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch IT employees');
    }
  }
);

// 🔹 Biotech Department employees
export const fetchAllBiotechEmployees = createAsyncThunk(
  'employee/fetchAllBiotech',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get('/hrms/employee/biotech', { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch Biotech employees');
    }
  }
);

// 🔹 Admin Department employees
export const fetchAllAdminEmployees = createAsyncThunk(
  'employee/fetchAllAdmin',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get('/hrms/fetchalluserexpectitandbio', { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch Admin employees');
    }
  }
);

// 🔹 Single employee details
export const fetchEmployeeDetails = createAsyncThunk(
  'employee/fetchDetails',
  async (employeeId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/hrms/employee/${employeeId}`, { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch employee details');
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    allEmployees: [],
    itEmployees: [],
    biotechEmployees: [],
    adminEmployees: [],
    employeeDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearEmployeeDetails: (state) => {
      state.employeeDetails = null;
    },
  },
  extraReducers: (builder) => {
    const pending = (state) => {
      state.loading = true;
      state.error = null;
    };
    const rejected = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };

    builder
      // All
      .addCase(fetchAllEmployees.pending, pending)
      .addCase(fetchAllEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.allEmployees = action.payload;
      })
      .addCase(fetchAllEmployees.rejected, rejected)

      // IT
      .addCase(fetchAllITEmployees.pending, pending)
      .addCase(fetchAllITEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.itEmployees = action.payload;
      })
      .addCase(fetchAllITEmployees.rejected, rejected)

      // Biotech
      .addCase(fetchAllBiotechEmployees.pending, pending)
      .addCase(fetchAllBiotechEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.biotechEmployees = action.payload;
      })
      .addCase(fetchAllBiotechEmployees.rejected, rejected)

      // Admin
      .addCase(fetchAllAdminEmployees.pending, pending)
      .addCase(fetchAllAdminEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.adminEmployees = action.payload;
      })
      .addCase(fetchAllAdminEmployees.rejected, rejected)

      // Details
      .addCase(fetchEmployeeDetails.pending, pending)
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.employeeDetails = action.payload;
      })
      .addCase(fetchEmployeeDetails.rejected, rejected);
  },
});

export const { clearEmployeeDetails } = employeeSlice.actions;
export default employeeSlice.reducer;
