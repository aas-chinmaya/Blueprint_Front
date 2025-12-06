




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ==============================
// THUNKS
// ==============================

// Create a new budget request
export const createBudgetRequest = createAsyncThunk(
  "budgetRequest/create",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/budget/create", payload);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch all budget requests (global)
export const fetchBudgetRequests = createAsyncThunk(
  "budgetRequest/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/budget/getallbudget");
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch budget requests by projectId
export const fetchBudgetRequestsByProject = createAsyncThunk(
  "budgetRequest/fetchByProject",
  async (projectId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/budget/getallbudget/project/${projectId}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Get a specific budget request by requestId
export const fetchBudgetRequestById = createAsyncThunk(
  "budgetRequest/fetchById",
  async (requestId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/budget/getbudget/${requestId}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update a budget request
export const updateBudgetRequest = createAsyncThunk(
  "budgetRequest/update",
  async ({ requestId, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/budget/updatebudget/${requestId}`, data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a budget request
export const deleteBudgetRequest = createAsyncThunk(
  "budgetRequest/delete",
  async (requestId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/budget/deletebudget/${requestId}`);
      return requestId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update only the status field of a budget request
export const updateBudgetRequestStatus = createAsyncThunk(
  "budgetRequest/updateStatus",
  async ({ requestId, status, remarks, userId }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/budget/updatebudget/${requestId}/status`,
        { status, remarks, userId }
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ==============================
// SLICE
// ==============================

const budgetRequestSlice = createSlice({
  name: "budgetRequest",
  initialState: {
    allRequests: [],       // All budget requests (admin/global view)
    projectRequests: [],   // Requests filtered by project
    currentRequest: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentRequest: (state) => {
      state.currentRequest = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ---------- CREATE ----------
    builder
      .addCase(createBudgetRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBudgetRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.allRequests.unshift(action.payload);
        state.projectRequests.unshift(action.payload); // if project matches current view
      })
      .addCase(createBudgetRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- FETCH ALL ----------
    builder
      .addCase(fetchBudgetRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.allRequests = action.payload;
      })
      .addCase(fetchBudgetRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- FETCH BY PROJECT ----------
    builder
      .addCase(fetchBudgetRequestsByProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetRequestsByProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectRequests = action.payload;
      })
      .addCase(fetchBudgetRequestsByProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- FETCH BY ID ----------
    builder
      .addCase(fetchBudgetRequestById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetRequestById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRequest = action.payload;
      })
      .addCase(fetchBudgetRequestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- UPDATE ----------
    builder
      .addCase(updateBudgetRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBudgetRequest.fulfilled, (state, action) => {
        state.loading = false;
        const updateInArray = (arr) => {
          const idx = arr.findIndex(r => r.requestId === action.payload.requestId);
          if (idx !== -1) arr[idx] = action.payload;
        };
        updateInArray(state.allRequests);
        updateInArray(state.projectRequests);
      })
      .addCase(updateBudgetRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- DELETE ----------
    builder
      .addCase(deleteBudgetRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBudgetRequest.fulfilled, (state, action) => {
        state.loading = false;
        const removeFromArray = (arr) => arr.filter(r => r.requestId !== action.payload);
        state.allRequests = removeFromArray(state.allRequests);
        state.projectRequests = removeFromArray(state.projectRequests);
      })
      .addCase(deleteBudgetRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- UPDATE STATUS ----------
    builder
      .addCase(updateBudgetRequestStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBudgetRequestStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updateInArray = (arr) => {
          const idx = arr.findIndex(r => r.requestId === action.payload.requestId);
          if (idx !== -1) arr[idx] = action.payload;
        };
        updateInArray(state.allRequests);
        updateInArray(state.projectRequests);
      })
      .addCase(updateBudgetRequestStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentRequest, clearError } = budgetRequestSlice.actions;
export default budgetRequestSlice.reducer;
