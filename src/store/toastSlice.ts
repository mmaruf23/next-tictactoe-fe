import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type ToastType = 'success' | 'warning' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

const initialState: Toast[] = [];

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showToast: {
      reducer: (state, action: PayloadAction<Toast>) => {
        state.push(action.payload);
      },
      prepare: (params: {
        message: string;
        type?: ToastType;
        duration?: number;
      }) => {
        const { message, duration = 3000, type = 'info' } = params;
        return {
          payload: {
            id: nanoid(),
            message,
            duration,
            type,
          },
        };
      },
    },
    removeToast: (state, action: PayloadAction<string>) => {
      return state.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { showToast, removeToast } = notificationSlice.actions;
export default notificationSlice.reducer;
