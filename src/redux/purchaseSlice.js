
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchPurchases = createAsyncThunk('purchase/fetchPurchases', async () => {
  const response = await api.getPurchases();
  return response.data;
});

export const createPurchase = createAsyncThunk('purchase/createPurchase', async (newPurchase) => {
  const response = await api.createPurchase(newPurchase);
  return response.data;
});

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState: {
    purchases: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updatePurchaseStatus: (state, action) => {
      const index = state.purchases.findIndex(p => p.id === action.payload.id);
      state.purchases[index].status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchases.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPurchases.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.purchases = action.payload;
      })
      .addCase(fetchPurchases.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPurchase.fulfilled, (state, action) => {
        state.purchases.push(action.payload);
      });
  },
});

export const { updatePurchaseStatus } = purchaseSlice.actions;
export default purchaseSlice.reducer;
