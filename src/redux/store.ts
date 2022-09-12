import { configureStore } from '@reduxjs/toolkit';
import PendingReducer from '../slices/PendingSlice';

export const store = configureStore({
  reducer: {
    todo: PendingReducer,
  },
});