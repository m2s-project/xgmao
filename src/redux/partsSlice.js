import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchParts = createAsyncThunk('parts/fetchParts', async () => {
  const response = await api.getParts();
  return response.data;
});

const partsSlice = createSlice({
  name: 'parts',
  initialState: {
    parts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addPart: (state, action) => {
      state.parts.push(action.payload);
    },
    updatePart: (state, action) => {
      const index = state.parts.findIndex(p => p.id === action.payload.id);
      state.parts[index] = action.payload;
    },
    deletePart: (state, action) => {
      state.parts = state.parts.filter(p => p.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchParts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.parts = action.payload;
      })
      .addCase(fetchParts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addPart, updatePart, deletePart } = partsSlice.actions;
export default partsSlice.reducer;
