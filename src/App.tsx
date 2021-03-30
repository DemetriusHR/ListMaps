import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import store from './Redux';
import Routes from './Routes';
import CountriesProvider from './Context';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache(),
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <CountriesProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <CssBaseline />
        </ThemeProvider>
      </CountriesProvider>
    </ApolloProvider>
  </Provider>
);

export default App;
