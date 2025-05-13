import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  clientId: string | null;
  username: string | null;
}

const initialState: UserState = {
  clientId: null,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        clientId: string;
        username: string;
      }>
    ) => {
      state.username = action.payload.username;
      state.clientId = action.payload.clientId;
    },
    setUsername: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
    },
  },
});

export const { setUser, setUsername } = userSlice.actions;
export default userSlice.reducer;
