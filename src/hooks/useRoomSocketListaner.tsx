import { setRoom } from '@/store/roomSlice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

type Room = {
  roomId: string;
  host: string;
  players: string[];
};

export const useRoomSocketListaner = (
  socket: Socket | null,
  dispatch: AppDispatch
) => {
  console.log('RoomListener berhasil di registrasi');
  useEffect(() => {
    if (!socket) return;
    socket.on('update-room', (data: Room[]) => {
      console.log(data);
      dispatch(setRoom(data));
    });
  }, [socket]);
};
