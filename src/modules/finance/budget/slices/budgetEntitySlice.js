import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

const API_URL = '/budgetentity';

// ==========================
// Async Thunks
// ==========================

// Create a new budget entity
export const createBudgetEntity = createAsyncThunk(
  'budgetEntity/createBudgetEntity',
  async (entityData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${API_URL}/createbudgetentity`, entityData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch all budget entities
export const fetchAllEntitiesByCategoryId = createAsyncThunk(
  'budgetEntity/fetchAllEntitiesByCategoryId',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/fetchAllEntitiesByCategoryId/${categoryId}`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch a single budget entity by ID
export const getBudgetEntityById = createAsyncThunk(
  'budgetEntity/getBudgetEntityById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/getbudgetentitybyid/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update a budget entity
export const updateBudgetEntity = createAsyncThunk(
  'budgetEntity/updateBudgetEntity',
  async ({ id, ...entityData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`${API_URL}/updatebudgetentity/${id}`, entityData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Soft delete a budget entity
export const deleteBudgetEntity = createAsyncThunk(
  'budgetEntity/deleteBudgetEntity',
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${API_URL}/deletebudgetentity/${id}`);
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
  entities: [],               // All entities
  selectedEntity: null,       // For viewing a single entity
  status: 'idle',             // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// ==========================
// Slice
// ==========================
const budgetEntitySlice = createSlice({
  name: 'budgetEntity',
  initialState,
  reducers: {
    clearBudgetEntityError: (state) => {
      state.error = null;
    },
    clearSelectedEntity: (state) => {
      state.selectedEntity = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All
      .addCase(fetchAllEntitiesByCategoryId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllEntitiesByCategoryId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchAllEntitiesByCategoryId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })

      // Get by ID
      .addCase(getBudgetEntityById.pending, (state) => {
        state.status = 'loading';
        state.selectedEntity = null;
      })
      .addCase(getBudgetEntityById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedEntity = action.payload;
      })
      .addCase(getBudgetEntityById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
        state.selectedEntity = null;
      })

      // Create
      .addCase(createBudgetEntity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBudgetEntity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities.push(action.payload);
      })
      .addCase(createBudgetEntity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })

      // Update
      .addCase(updateBudgetEntity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBudgetEntity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.entities.findIndex(
          (entity) => entity._id === action.payload._id
        );
        if (index !== -1) {
          state.entities[index] = action.payload;
        }
      })
      .addCase(updateBudgetEntity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })

      // Delete
      .addCase(deleteBudgetEntity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBudgetEntity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = state.entities.filter(
          (entity) => entity._id !== action.payload
        );
      })
      .addCase(deleteBudgetEntity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearBudgetEntityError, clearSelectedEntity } = budgetEntitySlice.actions;

export default budgetEntitySlice.reducer;
