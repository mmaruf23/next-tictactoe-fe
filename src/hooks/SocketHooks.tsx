import { io, Socket } from 'socket.io-client';

const url = process.env.NEXT_PUBLIC_SOCKET;

const useSocket = (): Socket => {
  const clientId = localStorage.getItem('user');
  const socket = io(url, {
    auth: {
      clientId: clientId,
    },
  });

  return socket;
};

export default useSocket;
