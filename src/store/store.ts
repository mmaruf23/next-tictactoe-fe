import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import roomReducer from './roomSlice';
import toastReducer from './toastSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
