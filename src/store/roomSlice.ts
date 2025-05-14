import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoomState {
  roomId: string;
  host: string;
  players: string[];
}

const initialState: RoomState[] = [];

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<RoomState[]>) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;
