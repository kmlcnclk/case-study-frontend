import '../styles/tailwindcss.css';
import { AppProps } from 'next/app';
import store from '../src/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
