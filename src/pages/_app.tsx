import { SocketContext } from '@/contexts/SocketContext';
import useSocket from '@/hooks/SocketHooks';
import { useUser } from '@/hooks/UserHooks';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const socket = useSocket();
  const username = useUser();
  const init = {
    username: username,
    socket: socket,
  };
  return (
    <SocketContext.Provider value={init}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}
