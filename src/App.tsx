import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import store from './Redux';
import client from './Graphql';
import Routes from './Routes';
import CountriesProvider from './Context';

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
