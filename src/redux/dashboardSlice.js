import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchDashboardData = createAsyncThunk('dashboard/fetchData', async () => {
  const response = await api.getDashboardData();
  return response.data;
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
