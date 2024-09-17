import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk pour récupérer les données depuis le serveur
export const fetch = createAsyncThunk("slice/action", async () => {
  // Fonction pour les appels API
  // const response = await api.get();
  // return response.data;
});

const slice = createSlice({
  name: "slice",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    update: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { add, update, remove } = slice.actions;

export default slice.reducer;
