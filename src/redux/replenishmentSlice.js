import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchReplenishments = createAsyncThunk('replenishment/fetchReplenishments', async () => {
  const response = await api.getReplenishments();
  return response.data;
});

export const createReplenishment = createAsyncThunk('replenishment/createReplenishment', async (newReplenishment) => {
  const response = await api.createReplenishment(newReplenishment);
  return response.data;
});

const replenishmentSlice = createSlice({
  name: 'replenishment',
  initialState: {
    replenishments: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    triggerReplenishment: (state, action) => {
      const part = state.replenishments.find(r => r.id === action.payload.partId);
      part.replenishmentNeeded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReplenishments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReplenishments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.replenishments = action.payload;
      })
      .addCase(fetchReplenishments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createReplenishment.fulfilled, (state, action) => {
        state.replenishments.push(action.payload);
      });
  },
});

export const { triggerReplenishment } = replenishmentSlice.actions;
export default replenishmentSlice.reducer;
