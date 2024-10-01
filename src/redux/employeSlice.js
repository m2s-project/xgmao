import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchEmploye = createAsyncThunk('employe/fetchEmploye', async () => {
  // const response = await api.getEmploye();
  // return response.data;
});

const employeSlice = createSlice({
  name: 'employe',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addEmploye: (state, action) => {
      state.items.push(action.payload);
    },
    updateEmploye: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteEmploye: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmploye.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmploye.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEmploye.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addEmploye, updateEmploye, deleteEmploye } = employeSlice.actions;
export default employeSlice.reducer;
