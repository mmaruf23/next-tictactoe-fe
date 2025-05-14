import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

export const useUserSocketListener = (
  socket: Socket | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: AppDispatch
) => {
  useEffect(() => {
    if (!socket) return;

    socket.on('opponent-name-response', () => {
      console.log('Lawan merubah username!, dispatchlah sesuatu!');
    });
  }, [socket]);
};
