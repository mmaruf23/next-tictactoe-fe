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
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    console.log('Socket berhasil dibuat!');
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      toast.success('Connected', 2000);
      console.log('Connected:', socketInstance.id);
    });

    socketInstance.on('reconnect_failed', () => {
      toast.error('Server error, hmph!');
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected');
    });

    return () => {
      console.log('re-render Socket dihapus!');
      socketInstance.disconnect();
    };
  }, [url]);

  if (!socket) return <p>Connecting...</p>;

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
