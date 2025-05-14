import { Initializer } from '@/components/core/UserInitializer';
import ToastContainer from '@/components/ui/ToastContainer';
import { SocketProvider } from '@/context/SocketContext';
import { store } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SocketProvider>
        <Initializer />
        <Component {...pageProps} />
        <ToastContainer />
      </SocketProvider>
    </Provider>
  );
}
