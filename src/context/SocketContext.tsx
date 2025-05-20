import useToast from '@/hooks/useToast';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();
  const url = process.env.NEXT_PUBLIC_SOCKET;
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    if (!url) return;
    const socketInstance = io(url, {
      transports: ['websocket'],
      reconnectionAttempts: 1,
    });

    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      toast.success('Connected!', 2000);
    });

    socketInstance.io.on('reconnect_failed', () => {
      toast.error('S-Servernya lagi error, b-baka!', 5000);
    });

    socketInstance.on('disconnect', () => {
      toast.warning('Disconnected, hmph!');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  if (!socket) return <p>Connecting...</p>;

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
