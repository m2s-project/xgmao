import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchArticle = createAsyncThunk('article/fetchArticle', async () => {
  // const response = await api.getArticle();
  // return response.data;
});

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addArticle: (state, action) => {
      state.items.push(action.payload);
    },
    updateArticle: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      state.items[index].quantity = action.payload.quantity;
    },
    deleteArticle: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addArticle, updateArticle, deleteArticle } = articleSlice.actions;
export default articleSlice.reducer;
