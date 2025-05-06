import { io, Socket } from 'socket.io-client';
import { Data, useUser } from './UserHooks';
import { useEffect, useRef } from 'react';
import { Rooms } from '@/types/room.types';

const url = process.env.NEXT_PUBLIC_SOCKET!;

export const useSocket = () => {
  const user = useUser();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!user?.username) return;
    if (socketRef.current) return;
    if (!url) {
      console.log('Empty environtment : socket-url');
      return;
    }

    console.log('user: ', user);
    const socket = io(url, {
      auth: user,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log(`connected as ${user.clientId}`);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on('init', (data: Data) => {
      console.log(data);
      localStorage.setItem('data', JSON.stringify(data));
    });

    socket.on('update-room', (data: Rooms) => {
      console.log('rooms: ', data);
    });

    console.log('Data', { socket: socketRef.current });
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [user]);

  return { socket: socketRef.current, user };
};
