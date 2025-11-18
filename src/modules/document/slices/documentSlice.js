import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ---------------- Async Thunks ----------------

// Fetch all documents for a project
export const fetchDocuments = createAsyncThunk(
  "documents/fetchDocuments",
  async (projectId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/document/getalldocuments/${projectId}`);
    
      return res?.data?.documents;
      
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Upload single document - FIXED to match backend
export const uploadSingleDocument = createAsyncThunk(
  "documents/uploadSingleDocument",
  async ({ name, description, file, projectId }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('document', file); // File object, not file name

      const res = await axiosInstance.post(
        `/document/uploadprojectdocument/${projectId}`, 
        formData,
        {
          headers: { 
            "Content-Type": "multipart/form-data",
            // Remove Content-Type header so browser sets it with boundary
          },
        }
      );
      return res.data.document; // Return just the document object
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Delete single document
export const deleteSingleDocument = createAsyncThunk(
  "documents/deleteSingleDocument",
  async (docId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/document/softdeletedocument/${docId}`);
      return docId;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Delete multiple documents
export const deleteMultipleDocuments = createAsyncThunk(
  "documents/deleteMultipleDocuments",
  async (docIds, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/document/delete/bulk`, { docIds });
      return docIds;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Download document
export const downloadDocument = createAsyncThunk(
  "documents/downloadDocument",
  async ({ docId, fileName }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/document/view/${docId}/`, { 
        responseType: "blob" 
      });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName || `document_${docId}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      return { docId, fileName };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// Preview document
export const previewDocument = createAsyncThunk(
  "documents/previewDocument",
  async (docId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/document/${docId}/preview`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

// ---------------- Slice ----------------
const documentSlice = createSlice({
  name: "documents",
  initialState: {
    items: [],
    loading: false,
    uploading: false,
    deleting: false,
    downloading: false,
    previewing: false,
    error: null,
    previewFile: null,
  },
  reducers: {
    resetDocumentsState: (state) => {
      state.items = [];
      state.loading = false;
      state.uploading = false;
      state.deleting = false;
      state.downloading = false;
      state.previewing = false;
      state.error = null;
      state.previewFile = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    // Add document manually (for immediate UI feedback)
    addDocument: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Documents
      .addCase(fetchDocuments.pending, (state) => { 
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => { 
        state.loading = false; 
        state.items = action.payload || []; 
      })
      .addCase(fetchDocuments.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload?.message || "Failed to fetch documents";
      })

      // Upload Document
      .addCase(uploadSingleDocument.pending, (state) => { 
        state.uploading = true; 
        state.error = null; 
      })
      .addCase(uploadSingleDocument.fulfilled, (state, action) => { 
        state.uploading = false; 
        if (action.payload) {
          state.items.unshift(action.payload); // Add to beginning of array
        }
      })
      .addCase(uploadSingleDocument.rejected, (state, action) => { 
        state.uploading = false; 
        state.error = action.payload?.message || "Upload failed";
      })

      // Delete Single Document
      .addCase(deleteSingleDocument.pending, (state) => { 
        state.deleting = true; 
        state.error = null; 
      })
      .addCase(deleteSingleDocument.fulfilled, (state, action) => { 
        state.deleting = false; 
        state.items = state.items.filter(d => d._id !== action.payload); 
      })
      .addCase(deleteSingleDocument.rejected, (state, action) => { 
        state.deleting = false; 
        state.error = action.payload?.message || "Delete failed";
      })

      // Delete Multiple Documents
      .addCase(deleteMultipleDocuments.pending, (state) => { 
        state.deleting = true; 
        state.error = null; 
      })
      .addCase(deleteMultipleDocuments.fulfilled, (state, action) => {
        state.deleting = false;
        state.items = state.items.filter(d => !action.payload.includes(d._id));
      })
      .addCase(deleteMultipleDocuments.rejected, (state, action) => { 
        state.deleting = false; 
        state.error = action.payload?.message || "Bulk delete failed";
      })

      // Download Document
      .addCase(downloadDocument.pending, (state) => { 
        state.downloading = true; 
        state.error = null; 
      })
      .addCase(downloadDocument.fulfilled, (state) => { 
        state.downloading = false; 
      })
      .addCase(downloadDocument.rejected, (state, action) => { 
        state.downloading = false; 
        state.error = action.payload?.message || "Download failed";
      })

      // Preview Document
      .addCase(previewDocument.pending, (state) => { 
        state.previewing = true; 
        state.error = null; 
      })
      .addCase(previewDocument.fulfilled, (state, action) => { 
        state.previewing = false; 
        state.previewFile = action.payload; 
      })
      .addCase(previewDocument.rejected, (state, action) => { 
        state.previewing = false; 
        state.error = action.payload?.message || "Preview failed";
      });
  },
});

export const { resetDocumentsState, clearError, addDocument } = documentSlice.actions;
export default documentSlice.reducer;