import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import moduleSlice from './moduleSlice';
import articleSlice from './articleSlice';
import employeSlice from './employeSlice';
import utilisateurSlice from './utilisateurSlice';
import chartSlice from './chartSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    charts:chartSlice,
    articles:articleSlice,
    employes:employeSlice,
    modules: moduleSlice,
    utilisateurs:utilisateurSlice,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false})
});
