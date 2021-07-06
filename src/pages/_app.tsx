import React, { useState } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/theme';

// interface AppContextInterface {
//   name: string;
//   author: string;
//   url: string;
// }

// export const AppCtx = React.createContext<AppContextInterface | null>(null);

// Provider in your app

// const sampleAppContext: AppContextInterface = {
//   name: 'Using React Context in a Typescript App',
//   author: 'thehappybug',
//   url: 'http://www.example.com'
// };

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [theme, setTheme] = useState(light);
  return (
    // <AppCtx.Provider value={sampleAppContext}>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component
          {...pageProps}
          router={router}
          theme={theme}
          setTheme={setTheme}
        />
      </ThemeProvider>
    </>
    // </AppCtx.Provider>
  );
};

export default MyApp;
