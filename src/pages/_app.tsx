import { SocketContext } from '@/contexts/SocketContext';
import { useSocket } from '@/hooks/SocketHooks';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const data = useSocket();
  return (
    <SocketContext.Provider value={data}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}
