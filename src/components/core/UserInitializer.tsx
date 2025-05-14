import { useSocket } from '@/context/SocketContext';
import { useRoomSocketListaner } from '@/hooks/useRoomSocketListaner';
import { useUserSocketListener } from '@/hooks/useUserSocketListener';
import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/userSlice';
import { useEffect } from 'react';

type UserData = {
  username: string;
  clientId: string;
};

export const Initializer = () => {
  const socket = useSocket();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!socket) return;
    const userData = localStorage.getItem('user');
    socket.emit('init', userData);
    socket.on('init-response', (data: UserData) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(setUser(data));
    });

    return () => {
      socket.off('init-response');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useUserSocketListener(socket, dispatch);
  useRoomSocketListaner(socket, dispatch);
  return null;
};
