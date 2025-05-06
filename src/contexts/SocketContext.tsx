import { createContext } from 'react';
import { Socket } from 'socket.io-client';

type SocketContextType = {
  socket: Socket | null;
  user: {
    username?: string;
    clientId?: string;
  } | null;
};

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);
