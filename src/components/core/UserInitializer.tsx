import { useSocket } from '@/context/SocketContext';
import { setUser } from '@/store/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const UserInitializer = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;

    const userData = localStorage.getItem('user');

    socket.emit('init', userData);

    socket.on(
      'init-response',
      (data: { username: string; clientId: string }) => {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(setUser(data));
      }
    );

    return () => {
      socket.off('init-response');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return null;
};
