import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchMovements = createAsyncThunk('movements/fetchMovements', async () => {
  const response = await api.getMovements();
  return response.data;
});

const movementSlice = createSlice({
  name: 'movements',
  initialState: {
    movements: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addMovement: (state, action) => {
      state.movements.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movements = action.payload;
      })
      .addCase(fetchMovements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addMovement } = movementSlice.actions;
export default movementSlice.reducer;
