import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from "@/lib/axios";

// Async thunk for creating an issue with a single file
// export const createIssue = createAsyncThunk(
//   'issues/createIssue',
//   async (issueData, { rejectWithValue }) => {
//     try {
  

//       const response = await axiosInstance.post('/bug/createanybug', issueData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to create issue');
//     }
//   }
// );
export const createIssue = createAsyncThunk(
  "issues/createIssue",
  async (issueData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/bugs/createanybug", issueData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating issue:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create issue"
      );
    }
  }
);

// Create the slice
const issueSlice = createSlice({
  name: 'issues',
  initialState: {
    issue: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetIssueState: (state) => {
      state.issue = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.issue = action.payload;
      })
      .addCase(createIssue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetIssueState } = issueSlice.actions;
export default issueSlice.reducer;




























