










// src/redux/slices/subTaskSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ====================== Async Thunks ======================

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

export const createSubTask = createAsyncThunk(
  "subTask/create",
  async ({ taskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/subtask/createsubtask/${taskId}`, subTaskData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getSubTaskById = createAsyncThunk(
  "subTask/getById",
  async ({ taskId, subTaskId }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/subtask/getsubtask/${taskId}/${subTaskId}`);
      return res.data.subtask;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateSubTask = createAsyncThunk(
  "subTask/update",
  async ({ subTaskId, taskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/subtask/updatesubtask/${taskId}/${subTaskId}`,
        subTaskData
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteSubTask = createAsyncThunk(
  "subTask/delete",
  async ({ taskId, subtaskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res =await axiosInstance.delete(`/subtask/softdeletesubtask/${taskId}/${subtaskId}`,subTaskData
);

console.log( taskId, subtaskId, subTaskData);

      return res;
      // await axiosInstance.delete(`/subtask/softdeletesubtask/${taskId}/${subtaskId}`);
      // return subtaskId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// FIXED: Now properly accepts all fields including actionedBy, delayReason
export const updateSubTaskStatus = createAsyncThunk(
  "subTask/updateStatus",
  async (
    {
      taskId,
      subtaskId,
      status,
      reviewStatus,
      delayReason,
      actionedBy, // ← This was missing in destructuring!
    },
    { rejectWithValue }
  ) => {
    try {
      // Build payload dynamically — only send what exists
      const payload = {};
      if (status) payload.status = status;
      if (reviewStatus !== undefined) payload.reviewStatus = reviewStatus;
      if (delayReason) payload.delayReason = delayReason;
      if (actionedBy) payload.actionedBy = actionedBy;

      console.log("Sending payload:", payload); // ← You will now see real data

      const res = await axiosInstance.put(
        `/subtask/updatesubtask/${taskId}/${subtaskId}`,
        payload
      );

      return res.data.subtask || res.data; // adjust based on your backend response
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
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
    builder
      // fetchSubTasksByTaskId ...
      .addCase(fetchSubTasksByTaskId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubTasksByTaskId.fulfilled, (state, action) => {
        state.loading = false;
        state.subtasks = action.payload.subtasks;
      })
      .addCase(fetchSubTasksByTaskId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // createSubTask ...
      .addCase(createSubTask.pending, (state) => { state.loading = true; })
      .addCase(createSubTask.fulfilled, (state, action) => {
        state.loading = false;
        state.subtasks.push(action.payload);
      })
      .addCase(createSubTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // getSubTaskById ...
      .addCase(getSubTaskById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubTaskById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentSubTask = action.payload;
      })
      .addCase(getSubTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // updateSubTask ...
      .addCase(updateSubTask.pending, (state) => { state.loading = true; })
      .addCase(updateSubTask.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const idx = state.subtasks.findIndex(s => s._id === updated._id);
        if (idx !== -1) state.subtasks[idx] = updated;
        if (state.currentSubTask?._id === updated._id) {
          state.currentSubTask = updated;
        }
      })
      .addCase(updateSubTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // deleteSubTask ...
      .addCase(deleteSubTask.fulfilled, (state, action) => {
        state.loading = false;
        state.subtasks = state.subtasks.filter(s => s._id !== action.payload);
      })

      // FIXED: updateSubTaskStatus — now properly updates currentSubTask
      .addCase(updateSubTaskStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubTaskStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        if (!updated) return;

        // Update in list
        const idx = state.subtasks.findIndex(s => s._id === updated._id);
        if (idx !== -1) state.subtasks[idx] = updated;

        // Update current
        if (state.currentSubTask?._id === updated._id) {
          state.currentSubTask = updated;
        }
      })
      .addCase(updateSubTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentSubTask, clearAllSubTasks } = subTaskSlice.actions;
export default subTaskSlice.reducer;