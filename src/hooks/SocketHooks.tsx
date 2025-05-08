import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Data } from './UserHooks';
import { Rooms } from '@/types/room.types';

const url = process.env.NEXT_PUBLIC_SOCKET!;

export const useSocket = (
  user: Data | null,
  setUser: Dispatch<SetStateAction<Data | null>>
) => {
  const socketRef = useRef<Socket | null>(null);
  const [socketState, setSocketState] = useState<Socket | null>(null);

  useEffect(() => {
    if (!user?.username || socketRef.current || !url) return;

    const socket = io(url, {
      auth: user,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socketRef.current = socket;
    setSocketState(socket);

    socket.on('connect', () => {
      console.log(`connected as ${user.clientId}`);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on('init', (data: Data) => {
      console.log('init data:', data);
      localStorage.setItem('data', JSON.stringify(data));
      setUser(data);
    });

    socket.on('update-room', (data: Rooms) => {
      console.log('rooms: ', data);
    });

    socket.on('update-name-response', (newName: string) => {
      console.log('Updated username:', newName);
      const updated = { ...user, username: newName };
      localStorage.setItem('data', JSON.stringify(updated));
      setUser(updated);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
      setSocketState(null);
    };
  }, [user?.username]);

  return socketState;
};
