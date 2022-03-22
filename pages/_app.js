import '../styles/globals.css'

import store from '../redux/store'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8DA27",
    }
  }
})

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
