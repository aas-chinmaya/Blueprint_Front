// src/store/features/contactSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {axiosInstance} from '@/lib/axios';


export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/contact/createcontact', contactData);

      if (!response.data || !response.data.contact) {
        throw new Error('Invalid response format');
      }

      return response.data.contact;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to add contact';
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk: Get all contacts
export const getAllContacts = createAsyncThunk(
  'contact/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/contact/getallcontact');
      return response.data.contacts;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
  }
);
// Thunk: Get all contacts
export const getAllApprovedContacts = createAsyncThunk(
  'contact/geApprovedContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/contact/approved');
      return response.data.contacts;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
  }
);

// Thunk: Get contact by ID
export const getContactById = createAsyncThunk(
  'contact/getContactById',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/contact/getcontactby/${contactId}`);
      return response.data.contact;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contact');
    }
  }
);

// Thunk: Delete contact
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/contact/deletecontact/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete contact');
    }
  }
);

// Thunk: Update contact status
export const updateContactStatus = createAsyncThunk(
  'contact/updateContactStatus',
  async ({ contactId,status,feedback,internalNote,actionedBy }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/contact/updatecontact/${contactId}`, {
        status,feedback,internalNote,actionedBy
      });
      
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update contact status');
    }
  }
);
// export const updateContactStatus = createAsyncThunk(
//   'contact/updateContactStatus',
//   async ({ contactId,status,feedback }, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.put(`/contact/updatecontact/${contactId}`, {
//         status,feedback
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to update contact status');
//     }
//   }
// );
// Thunk: Get Recent Contacts Received (e.g., last 7 days)
export const getRecentContacts = createAsyncThunk(
  'contact/getRecentContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/contact/received'); // API endpoint to fetch recent contacts
      return response.data.data||[]; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch recent contacts');
    }
  }
);


// Initial State
const initialState = {
  contacts: [],
  Approvedcontacts: [],
  recentContacts: [], 
  selectedContact: null,

  status: 'idle',
  error: null,
};

// Slice
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    clearSelectedContact: (state) => {
      state.selectedContact = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // Add Contact
      .addCase(addContact.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get All Contacts
      .addCase(getAllContacts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get All approvedContacts
      .addCase(getAllApprovedContacts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllApprovedContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Approvedcontacts = action.payload;
      })
      .addCase(getAllApprovedContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Get Contact by ID
      .addCase(getContactById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getContactById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedContact = action.payload;
      })
      .addCase(getContactById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Delete Contact
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = state.contacts.filter((c) => c._id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Update Contact Status
      .addCase(updateContactStatus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateContactStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.contacts.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
        if (state.selectedContact && state.selectedContact._id === action.payload._id) {
          state.selectedContact = action.payload;
        }
      })
      .addCase(updateContactStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Recent Contacts
builder
  .addCase(getRecentContacts.pending, (state) => {
    state.status = 'loading';
    state.error = null;
  })
  .addCase(getRecentContacts.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.recentContacts = action.payload;
  })
  .addCase(getRecentContacts.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  });

  },
});

export const { clearSelectedContact } = contactSlice.actions;
export default contactSlice.reducer;
