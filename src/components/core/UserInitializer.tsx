import { useSocket } from '@/context/SocketContext';
import { useRoomSocketListaner } from '@/hooks/useRoomSocketListaner';
import { useUserSocketListener } from '@/hooks/useUserSocketListener';
import { setUser } from '@/store/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

type UserData = {
  username: string;
  clientId: string;
};

export const Initializer = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

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
