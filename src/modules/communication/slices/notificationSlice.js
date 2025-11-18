





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

// Fetch notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (recipientId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/notification/getnotications/${recipientId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch notifications');
    }
  }
);

// Delete single notification
export const deleteNotification = createAsyncThunk(
  'notifications/deleteNotification',
  async (_id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/notification/soft/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete notification');
    }
  }
);

// Delete all notifications
export const deleteAllNotifications = createAsyncThunk(
  'notifications/deleteAllNotifications',
  async (recipientId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/notification/softdeleteall/${recipientId}`);
      return recipientId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete all notifications');
    }
  }
);

// Mark single notification as read
export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/notification/markasread/${_id}`);
      return response.data; // updated notification
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to mark as read');
    }
  }
);

// Mark all notifications as read
export const markAllNotificationsAsRead = createAsyncThunk(
  'notifications/markAllNotificationsAsRead',
  async (recipientId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/notification/markallasread/${recipientId}`);
      return response.data; // success flag or updated list
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to mark all as read');
    }
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: [],
    loading: {
      fetch: false,
      delete: false,
      deleteAll: false,
      update: false,
      updateAll: false,
    },
    error: {
      fetch: null,
      delete: null,
      deleteAll: null,
      update: null,
      updateAll: null,
    },
  },
  reducers: {
    clearErrors: (state) => {
      state.error.fetch = null;
      state.error.delete = null;
      state.error.deleteAll = null;
      state.error.update = null;
      state.error.updateAll = null;
    },
    // Optimistic update for single notification
  markAsReadLocal: (state, action) => {
    const id = action.payload;
    state.items = state.items.map(n =>
      n._id === id ? { ...n, read: true } : n
    );
  },
  },
  extraReducers: (builder) => {
    builder
      // Fetch notifications
      .addCase(fetchNotifications.pending, (state) => {
        state.loading.fetch = true;
        state.error.fetch = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data
          ? action.payload.data
          : [];
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error.fetch = action.payload;
      })

      // Delete single
      .addCase(deleteNotification.pending, (state) => {
        state.loading.delete = true;
        state.error.delete = null;
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.loading.delete = false;
        state.items = state.items.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.loading.delete = false;
        state.error.delete = action.payload;
      })

      // Delete all
      .addCase(deleteAllNotifications.pending, (state) => {
        state.loading.deleteAll = true;
        state.error.deleteAll = null;
      })
      .addCase(deleteAllNotifications.fulfilled, (state) => {
        state.loading.deleteAll = false;
        state.items = [];
      })
      .addCase(deleteAllNotifications.rejected, (state, action) => {
        state.loading.deleteAll = false;
        state.error.deleteAll = action.payload;
      })

      // Mark single as read
      .addCase(markNotificationAsRead.pending, (state) => {
        state.loading.update = true;
        state.error.update = null;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.loading.update = false;
        const updated = action.payload;
        state.items = state.items.map((n) =>
          n._id === updated._id ? { ...n, read: true } : n
        );
      })
      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.loading.update = false;
        state.error.update = action.payload;
      })

      // Mark all as read
      .addCase(markAllNotificationsAsRead.pending, (state) => {
        state.loading.updateAll = true;
        state.error.updateAll = null;
      })
      .addCase(markAllNotificationsAsRead.fulfilled, (state) => {
        state.loading.updateAll = false;
        state.items = state.items.map((n) => ({ ...n, read: true }));
      })
      .addCase(markAllNotificationsAsRead.rejected, (state, action) => {
        state.loading.updateAll = false;
        state.error.updateAll = action.payload;
      });
  },
});

export const { clearErrors,markAsReadLocal  } = notificationSlice.actions;
export default notificationSlice.reducer;






