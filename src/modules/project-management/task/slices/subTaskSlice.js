// src/redux/slices/subTaskSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ====================== Async Thunks ======================

// Fetch all subtasks by taskId
export const fetchSubTasksByTaskId = createAsyncThunk(
  "subTask/fetchByTaskId",
  async (taskId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/subtask/getallsubtasks/${taskId}`);
      return { taskId, subtasks: res.data.subtasks };
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Create a new subtask
export const createSubTask = createAsyncThunk(
  "subTask/create",
  async ({ taskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `/subtask/createsubtask/${taskId}`,
        subTaskData
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Get a single subtask by id
export const getSubTaskById = createAsyncThunk(
  "subTask/getById",
  async ({taskId,subTaskId}, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/subtask/getsubtask/${taskId}/${subTaskId}`);
      return res.data.subtask;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Generic update (partial)
export const updateSubTask = createAsyncThunk(
  "subTask/update",
  async ({ subTaskId,taskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/subtask/updatesubtask/${taskId}/${subTaskId}`,
        subTaskData
      );
      console.log(subTaskId,taskId, subTaskData);
      
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a subtask
export const deleteSubTask = createAsyncThunk(
  "subTask/delete",
  async ({ taskId, subtaskId }, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(
        `/subtask/softdeletesubtask/${taskId}/${subtaskId}`
      );
      return subtaskId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update subtask status
export const updateSubTaskStatus = createAsyncThunk(
  "subTask/updateStatus",
  async ({ taskId, subtaskId, status }, { rejectWithValue }) => {
    console.log("Updating subtask status:", { taskId, subtaskId, status });

    try {
      const res = await axiosInstance.put(
        `/subtask/updatesubtaskstatus/${taskId}/${subtaskId}`,
        { status }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ====================== Slice ======================
const subTaskSlice = createSlice({
  name: "subTask",
  initialState: {
    subtasks: [],
    currentSubTask: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentSubTask: (state) => {
      state.currentSubTask = null;
    },
    clearAllSubTasks: (state) => {
      state.subtasks = [];
    },
  },
  extraReducers: (builder) => {
    // ========== Fetch Subtasks ==========
    builder
      .addCase(fetchSubTasksByTaskId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubTasksByTaskId.fulfilled, (state, action) => {
        state.loading = false;
        const { taskId, subtasks } = action.payload;
        state.subtasks = subtasks; 
      })
      .addCase(fetchSubTasksByTaskId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ========== Create Subtask ==========
    builder
      .addCase(createSubTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubTask.fulfilled, (state, action) => {
        state.loading = false;
        state.subtasks.push(action.payload);
      })
      .addCase(createSubTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ========== Get Subtask By Id ==========
    builder
      .addCase(getSubTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubTaskById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentSubTask = action.payload;
      })
      .addCase(getSubTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ========== Update Subtask ==========
    builder
      .addCase(updateSubTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubTask.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.subtasks.findIndex(
          (s) => s._id === action.payload._id
        );
        if (idx !== -1) state.subtasks[idx] = action.payload;
        if (state.currentSubTask?._id === action.payload._id) {
          state.currentSubTask = action.payload;
        }
      })
      .addCase(updateSubTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ========== Delete Subtask ==========
    builder
      .addCase(deleteSubTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubTask.fulfilled, (state, action) => {
        state.loading = false;
        state.subtasks = state.subtasks.filter((s) => s._id !== action.payload);
      })
      .addCase(deleteSubTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ========== Update Subtask Status ==========
    builder
      .addCase(updateSubTaskStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubTaskStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSubtask = action.payload;
        const idx = state.subtasks.findIndex(
          (s) => s._id === updatedSubtask._id
        );
        if (idx !== -1) state.subtasks[idx] = updatedSubtask;
        if (state.currentSubTask?._id === updatedSubtask._id) {
          state.currentSubTask = updatedSubtask;
        }
      })
      .addCase(updateSubTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ====================== Exports ======================
export const { clearCurrentSubTask, clearAllSubTasks } = subTaskSlice.actions;
export default subTaskSlice.reducer;
