
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

const API_URL = '/budgetcategory';

// ==========================
// Async Thunks
// ==========================

// Fetch all budget categories
export const fetchBudgetCategories = createAsyncThunk(
  'budgetCategories/fetchBudgetCategories',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/getallcategories/${id}`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Create a new budget category
export const addBudgetCategory = createAsyncThunk(
  'budgetCategories/addBudgetCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${API_URL}/createcatgory`, categoryData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Get a single budget category by ID
export const getBudgetCategoryById = createAsyncThunk(
  'budgetCategories/getBudgetCategoryById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/getcatgorybyid/${id}`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update an existing budget category
export const updateBudgetCategory = createAsyncThunk(
  'budgetCategories/updateBudgetCategory',
  async ({ id, ...categoryData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`${API_URL}/updatecatgory/${id}`, categoryData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a budget category
export const deleteBudgetCategory = createAsyncThunk(
  'budgetCategories/deleteBudgetCategory',
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${API_URL}/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ==========================
// Initial State
// ==========================
const initialState = {
  categories: [],
  category: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// ==========================
// Slice
// ==========================
const budgetCategorySlice = createSlice({
  name: 'budgetCategory',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchBudgetCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBudgetCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchBudgetCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })

      // Add new
      .addCase(addBudgetCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(addBudgetCategory.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })

      // Get by ID
      .addCase(getBudgetCategoryById.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })
      .addCase(getBudgetCategoryById.fulfilled, (state, action) => {
        state.category = action.payload ;
      })

      // Update
      .addCase(updateBudgetCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (cat) => cat._id === action.payload._id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateBudgetCategory.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })

      // Delete
      .addCase(deleteBudgetCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (cat) => cat._id !== action.payload
        );
      })
      .addCase(deleteBudgetCategory.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearError } = budgetCategorySlice.actions;
export default budgetCategorySlice.reducer;














