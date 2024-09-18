import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await api.getUsers();
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      state.users[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
