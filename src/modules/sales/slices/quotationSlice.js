

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

// Initial State
const initialState = {
  quotations: [],
  meetingQuotations: [],
  quotation: null,
  clientStatus: null,
  loading: false,
  error: null,

};

// === NEW: Fetch Quotations by Meeting ID ===
export const fetchQuotationsByMeeting = createAsyncThunk(
  'quotation/fetchByMeeting',
  async (meetingId, { rejectWithValue }) => {
    try {
      // Normally you’d call the API:
      // const res = await axiosInstance.get(`/quotation/getbyMeetingId/${meetingId}`);
      // return res.data;

      // But for now, we return dummy data:
      return [
        {
          quotationNumber: 'Q-1001',
          meetingId: 'M-500',
          clientName: 'Acme Corp.',
          date: '2025-11-10',
          totalAmount: 12500,
          status: 'draft',
        },
        {
          quotationNumber: 'Q-1002',
          meetingId: 'M-500',
          clientName: 'Beta Industries',
          date: '2025-11-09',
          totalAmount: 9800,
          status: 'final',
        },
      ];
      // return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// === FIXED: Update uses correct endpoint ===
export const updateQuotation = createAsyncThunk(
  'quotation/updateQuotation',
  async (updatedData, { rejectWithValue }) => {
    try {
      const { quotationNumber } = updatedData;
      const res = await axiosInstance.put(`/quotation/update/${quotationNumber}`, updatedData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// === Existing Thunks (unchanged but cleaned) ===
export const createQuotation = createAsyncThunk(
  'quotation/createQuotation',
  async (quotationData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/quotation/create', quotationData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getQuotations = createAsyncThunk(
  'quotation/getQuotations',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get('/quotation/getAllquotations');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getQuotationById = createAsyncThunk(
  'quotation/getQuotationById',
  async (quotationNumber, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/quotation/qoutationbynumber/${quotationNumber}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateQuotationStatus = createAsyncThunk(
  'quotation/updateQuotationStatus',
  async ({ quotationNumber, statusData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(`/quotation/updatequotationstatus/${quotationNumber}/status`, statusData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteQuotation = createAsyncThunk(
  'quotation/deleteQuotation',
  async (quotationNumber, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/quotation/${quotationNumber}`);
      return quotationNumber;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getPdfById = createAsyncThunk(
  'quotation/getPdfById',
  async (quotationNumber, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/quotation/pdfbyqoutationnumber/${quotationNumber}`, {
        responseType: 'blob',
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getClientStatusByQuotationId = createAsyncThunk(
  'quotation/getClientStatusByQuotationId',
  async (quotationId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/quotation/client-status-by-quotation/${quotationId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// === Slice ===
const quotationSlice = createSlice({
  name: 'quotation',
  initialState,
  reducers: {
    clearQuotationState: (state) => {
      state.quotation = null;
      state.error = null;
    },
    // === NEW: Clear quotations list (used in ProposalContent cleanup) ===
    clearQuotations: (state) => {
      state.quotations = [];
      state.quotation = null;
      state.clientStatus = null;
    },
     clearMeetingQuotations: (state) => {   // <-- NEW
    state.meetingQuotations = [];
  },
  },
  extraReducers: (builder) => {
    builder
      // === FETCH BY MEETING ===
     // === FETCH BY MEETING ===
.addCase(fetchQuotationsByMeeting.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchQuotationsByMeeting.fulfilled, (state, action) => {
  state.loading = false;
  state.meetingQuotations = action.payload; // store separately
})
.addCase(fetchQuotationsByMeeting.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})


      // === CREATE ===
      .addCase(createQuotation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuotation.fulfilled, (state, action) => {
        state.loading = false;
        state.quotations.unshift(action.payload);
        state.quotation = action.payload;
      })
      .addCase(createQuotation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === GET ALL ===
      .addCase(getQuotations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuotations.fulfilled, (state, action) => {
        state.loading = false;
        state.quotations = action.payload;
      })
      .addCase(getQuotations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === GET BY ID ===
      .addCase(getQuotationById.pending, (state) => {
        state.loading = true;
        state.quotation = null;
      })
      .addCase(getQuotationById.fulfilled, (state, action) => {
        state.loading = false;
        state.quotation = action.payload;
      })
      .addCase(getQuotationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === UPDATE ===
      .addCase(updateQuotation.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuotation.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.quotation = updated;
        state.quotations = state.quotations.map((q) =>
          q.quotationNumber === updated.quotationNumber ? updated : q
        );
      })
      .addCase(updateQuotation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === UPDATE STATUS ===
      .addCase(updateQuotationStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuotationStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload.quotation;
        state.quotation = updated;
        state.quotations = state.quotations.map((q) =>
          q.quotationNumber === updated.quotationNumber ? updated : q
        );
      })
      .addCase(updateQuotationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === DELETE ===
      .addCase(deleteQuotation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteQuotation.fulfilled, (state, action) => {
        state.loading = false;
        state.quotations = state.quotations.filter(
          (q) => q.quotationNumber !== action.payload
        );
        if (state.quotation?.quotationNumber === action.payload) {
          state.quotation = null;
        }
      })
      .addCase(deleteQuotation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === GET PDF ===
      .addCase(getPdfById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPdfById.fulfilled, (state, action) => {
        state.loading = false;
        // PDF blob stored if needed
      })
      .addCase(getPdfById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === CLIENT STATUS ===
      .addCase(getClientStatusByQuotationId.pending, (state) => {
        state.loading = true;
        state.clientStatus = null;
      })
      .addCase(getClientStatusByQuotationId.fulfilled, (state, action) => {
        state.loading = false;
        state.clientStatus = action.payload;
      })
      .addCase(getClientStatusByQuotationId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export Actions & Reducer
export const { clearQuotationState, clearMeetingQuotations,clearQuotations } = quotationSlice.actions;
export default quotationSlice.reducer;