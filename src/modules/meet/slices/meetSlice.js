














// src/store/features/meet/meetSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

const BASE_URL = "/meet";

// ------------------------------------------------------------------
// 1️⃣ CREATE MEETING  → POST /meet/create
// ------------------------------------------------------------------
export const createMeeting = createAsyncThunk(
  "meet/createMeeting",
  async (meetData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/create`, meetData);
      return response.data.meeting || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create meeting"
      );
    }
  }
);

// ------------------------------------------------------------------
// 2️⃣ GET ALL MEETINGS → GET /meet/all
// ------------------------------------------------------------------
export const fetchAllMeetings = createAsyncThunk(
  "meet/fetchAllMeetings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${BASE_URL}/all`);
      return response.data.meetings || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch meetings"
      );
    }
  }
);

// ------------------------------------------------------------------
// 3️⃣ GET SINGLE MEETING BY ID → GET /meet/getMeetByMeetId/:meetingId
// ------------------------------------------------------------------
export const fetchMeetingById = createAsyncThunk(
  "meet/fetchMeetingById",
  async (meetingId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${BASE_URL}/getMeetByMeetId/${meetingId}`
      );
      
      return  response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch meeting"
      );
    }
  }
);

// ------------------------------------------------------------------
// 4️⃣ UPDATE MEETING → PUT /meet/update/:meetingId
// ------------------------------------------------------------------
export const updateMeeting = createAsyncThunk(
  "meet/updateMeeting",
  async ({ meetingId, updates }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `${BASE_URL}/update/${meetingId}`,
        updates
      );
      return response.data.meeting || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update meeting"
      );
    }
  }
);
export const rescheduleMeet = createAsyncThunk(
  "meet/rescheduleMeet",
  async ({ meetingId, updates }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `${BASE_URL}/update/${meetingId}`,
        updates
      );
      return response.data.meeting || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update meeting"
      );
    }
  }
);

// ------------------------------------------------------------------
// 5️⃣ DELETE MEETING → DELETE /meet/delete/:meetingId
// ------------------------------------------------------------------
export const deleteMeeting = createAsyncThunk(
  "meet/deleteMeeting",
  async (meetingId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${BASE_URL}/delete/${meetingId}`);
      return meetingId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete meeting"
      );
    }
  }
);

// ------------------------------------------------------------------
// 6️⃣ GET MEETINGS BY CONTACT → GET /meet/contact/:contactId
// ------------------------------------------------------------------
export const fetchMeetingsByContact = createAsyncThunk(
  "meet/fetchMeetingsByContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${BASE_URL}/contact/${contactId}`);
      console.log(response.data.meetings);
      
      return response.data.meetings || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch meetings by contact"
      );
    }
  }
);

// ------------------------------------------------------------------
// 7️⃣ UPDATE MEETING STATUS → PATCH /meet/updatestatus/:meetingId
// ------------------------------------------------------------------
export const updateMeetingStatus = createAsyncThunk(
  "meet/updateMeetingStatus",
  async ({ meetingId, meetingStatus, endNote }, { rejectWithValue }) => {
    try {
      const payload = { meetingStatus, endNote };
      const response = await axiosInstance.patch(
        `${BASE_URL}/updatestatus/${meetingId}`,
        payload
      );
      return response.data.meeting || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update meeting status"
      );
    }
  }
);

// ------------------------------------------------------------------
// SLICE
// ------------------------------------------------------------------
const meetSlice = createSlice({
  name: "meet",
  initialState: {
    meetings: [],
    selectedMeeting: null,
    status: "idle",
    createStatus: "idle", // ✅ Added createStatus here
    error: null,
  },
  reducers: {
    clearSelectedMeeting: (state) => {
      state.selectedMeeting = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetCreateStatus: (state) => {
      state.createStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // Create meeting
      .addCase(createMeeting.pending, (state) => {
        state.createStatus = "loading";
      })
      .addCase(createMeeting.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        state.meetings.push(action.payload);
      })
      .addCase(createMeeting.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.payload;
      })

      // Fetch all meetings
      .addCase(fetchAllMeetings.fulfilled, (state, action) => {
        state.meetings = action.payload;
      })

      // Fetch meeting by ID
      .addCase(fetchMeetingById.fulfilled, (state, action) => {
        state.selectedMeeting = action.payload;
      })

      // Update meeting
      .addCase(updateMeeting.fulfilled, (state, action) => {
        const index = state.meetings.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.meetings[index] = action.payload;
      })
      .addCase(rescheduleMeet.fulfilled, (state, action) => {
        const index = state.meetings.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.meetings[index] = action.payload;
      })

      // Delete meeting
      .addCase(deleteMeeting.fulfilled, (state, action) => {
        state.meetings = state.meetings.filter((m) => m._id !== action.payload);
      })

      // Fetch meetings by contact
      .addCase(fetchMeetingsByContact.fulfilled, (state, action) => {
        state.meetings = action.payload;
      })

      // Update meeting status
      .addCase(updateMeetingStatus.fulfilled, (state, action) => {
        const index = state.meetings.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.meetings[index] = action.payload;
      })

      // Handle general errors
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

// ✅ Export all reducers
export const { clearSelectedMeeting, clearError, resetCreateStatus } =
  meetSlice.actions;

export default meetSlice.reducer;
