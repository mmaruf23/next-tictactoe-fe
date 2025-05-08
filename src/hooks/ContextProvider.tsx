import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { useSocket } from './SocketHooks';
import { Data, useUser } from './UserHooks';
import { Socket } from 'socket.io-client';

type SocketContextType = {
  socket: Socket | null;
  user: Data | null;
  setUser: Dispatch<SetStateAction<Data | null>>;
};

type ProviderProps = {
  children: ReactNode;
};

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const ContextProvider = ({ children }: ProviderProps) => {
  const { user, setUser } = useUser();
  const socket = useSocket(user, setUser);

  console.log('yang di terima context provider: ', socket);

  return (
    <SocketContext.Provider value={{ user, setUser, socket }}>
      {children}
    </SocketContext.Provider>
  );
};
