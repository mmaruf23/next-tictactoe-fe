import { createContext } from 'react';
import type { Socket } from 'socket.io-client';
type InitialContext = {
  username?: string;
  socket?: Socket;
};

const init: InitialContext = {};
export const SocketContext = createContext(init);
