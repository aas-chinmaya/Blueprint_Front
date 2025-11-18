import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axios';

const BASE_URL = '/quotation-requests'; // Backend API endpoint

// 🟢 Fetch all quotation requests
export const fetchQuotationRequests = createAsyncThunk(
  'quotationRequests/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axiosInstance.get(BASE_URL);
      // return data; // Uncomment when backend is ready

      // Temporary mock data (for testing)
      return [
        {
          _id: '67301a1a9f8a23ab12345678',
          quotationRequestId: 'QREQ-october-31-001',
          title: 'Office Interior Material Supply',
          requestedBy: 'John Doe',
          companyName: 'ABC Constructions',
          email: 'john@abcconstructions.com',
          phone: '9876543210',
          projectId: 'PRJ-2025-009',
          status: 'Pending',
          budgetRange: '₹1,00,000 - ₹1,50,000',
          items: [
            { item: 'Cement Bags', quantity: 200, unit: 'bags' },
            { item: 'Steel Rods', quantity: 100, unit: 'pieces' },
          ],
          notes: 'Need delivery by next week.',
          createdAt: '2025-10-31T08:00:00.000Z',
          updatedAt: '2025-10-31T08:00:00.000Z',
        },
        {
          _id: '67301a2b9f8a23ab12345679',
          quotationRequestId: 'QREQ-october-31-002',
          title: 'IT Equipment for New Office',
          requestedBy: 'Aas Information Technology',
          companyName: 'Aas InfoTech Pvt Ltd',
          email: 'it@aasinfotech.com',
          phone: '9360011223',
          projectId: 'PRJ-2025-010',
          status: 'Approved',
          budgetRange: '₹2,50,000 - ₹3,00,000',
          items: [
            { item: 'Laptops', quantity: 10, unit: 'pcs' },
            { item: 'Monitors', quantity: 15, unit: 'pcs' },
          ],
          notes: 'Include Dell and HP quotes.',
          createdAt: '2025-10-30T09:00:00.000Z',
          updatedAt: '2025-10-31T06:00:00.000Z',
        },
      ];
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch quotation requests');
    }
  }
);

// 🟢 Fetch single quotation request by ID
export const fetchQuotationRequestById = createAsyncThunk(
  'quotationRequests/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`${BASE_URL}/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch quotation request');
    }
  }
);

// 🟢 Create a new quotation request
export const createQuotationRequest = createAsyncThunk(
  'quotationRequests/create',
  async (quotationData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(BASE_URL, quotationData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to create quotation request');
    }
  }
);

// 🟢 Update an existing quotation request
export const updateQuotationRequest = createAsyncThunk(
  'quotationRequests/update',
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(`${BASE_URL}/${id}`, updates);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to update quotation request');
    }
  }
);

// 🧩 Slice
const quotationRequestSlice = createSlice({
  name: 'quotationRequests',
  initialState: {
    items: [],
    selectedQuotationRequest: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedQuotationRequest: (state) => {
      state.selectedQuotationRequest = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchQuotationRequests.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotationRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchQuotationRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch single
      .addCase(fetchQuotationRequestById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedQuotationRequest = action.payload;
      })
      // Create
      .addCase(createQuotationRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      // Update
      .addCase(updateQuotationRequest.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((q) => q._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export const { clearSelectedQuotationRequest } = quotationRequestSlice.actions;
export default quotationRequestSlice.reducer;
