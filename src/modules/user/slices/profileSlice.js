// store/profileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "@/lib/axios"; // your pre-configured axios

// Async thunk: Upload profile image
export const uploadProfileImage = createAsyncThunk(
  "profile/uploadProfileImage",
  async ({ employeeID, file }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axiosInstance.post(`/hrms/upload/${employeeID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data; // { message, profile }
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Async thunk: Fetch profile image URL or blob
export const fetchProfileImage = createAsyncThunk(
  "profile/fetchProfileImage",
  async (employeeID, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/hrms/view/${employeeID}`, {
        responseType: "blob", // get image as blob
      });

      // Convert blob to object URL for display
      const imageUrl = URL.createObjectURL(response.data);
      return imageUrl;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    profileImageUrl: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProfileImageUrl: (state) => {
      if (state.profileImageUrl) {
        URL.revokeObjectURL(state.profileImageUrl); // cleanup
      }
      state.profileImageUrl = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload
      .addCase(uploadProfileImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload.profile;
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to upload profile image";
      })
      // Fetch
      .addCase(fetchProfileImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.profileImageUrl = action.payload;
      })
      .addCase(fetchProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to fetch profile image";
      });
  },
});

export const { clearProfileImageUrl } = profileSlice.actions;
export default profileSlice.reducer;
