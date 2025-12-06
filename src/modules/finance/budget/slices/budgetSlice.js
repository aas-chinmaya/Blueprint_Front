// src/features/budget/budgetSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ==============================
// THUNKS
// ==============================

// Create a budget account for a specific project
export const createBudgetAccount = createAsyncThunk(
  "budget/createAccount",
  async ({ projectId, accountData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `/budget/createBudgetAccount/${projectId}`,
        accountData
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch all budget accounts for a specific project
export const fetchBudgetAccountsByProject = createAsyncThunk(
  "budget/fetchByProject",
  async (projectId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/budget/fetchBudgetAccountsByProject/${projectId}`
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch single account by accountId
export const fetchBudgetAccountById = createAsyncThunk(
  "budget/fetchById",
  async (accountId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/budget/fetchBudgetAccountById/${accountId}`
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Add new budget/fund allocation to the account
export const addBudgetAllocation = createAsyncThunk(
  "budget/addAllocation",
  async ({ accountId, allocationData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `/budget/addBudgetAllocation/${accountId}`,
        allocationData
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

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    projectAccounts: [],    // Accounts only for selected project
    currentAccount: null,   // Selected account details
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentAccount: (state) => {
      state.currentAccount = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ---------- CREATE ACCOUNT ----------
    builder
      .addCase(createBudgetAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBudgetAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.projectAccounts.unshift(action.payload);
      })
      .addCase(createBudgetAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- FETCH PROJECT ACCOUNTS ----------
    builder
      .addCase(fetchBudgetAccountsByProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetAccountsByProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectAccounts = action.payload;
      })
      .addCase(fetchBudgetAccountsByProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- FETCH SINGLE ACCOUNT ----------
    builder
      .addCase(fetchBudgetAccountById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetAccountById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAccount = action.payload;
      })
      .addCase(fetchBudgetAccountById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------- ADD NEW ALLOCATION ----------
    builder
      .addCase(addBudgetAllocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBudgetAllocation.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.projectAccounts.findIndex(
          (acc) => acc.accountId === action.payload.accountId
        );
        if (idx !== -1) state.projectAccounts[idx] = action.payload;
        if (state.currentAccount?.accountId === action.payload.accountId)
          state.currentAccount = action.payload;
      })
      .addCase(addBudgetAllocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentAccount, clearError } = budgetSlice.actions;
export default budgetSlice.reducer;
