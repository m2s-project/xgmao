import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUtilisateur = createAsyncThunk('utilisateur/fetchUtilisateur', async () => {
  // const response = await api.getUtilisateur();
  // return response.data;
});

const utilisateurSlice = createSlice({
  name: 'utilisateur',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addUtilisateur: (state, action) => {
      state.items.push(action.payload);
    },
    updateUtilisateur: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteUtilisateur: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUtilisateur.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUtilisateur.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchUtilisateur.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addUtilisateur, updateUtilisateur, deleteUtilisateur } = utilisateurSlice.actions;
export default utilisateurSlice.reducer;
