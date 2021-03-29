import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Routes from './Routes';

const App = () => (
  <ThemeProvider theme={{}}>
    <Routes />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
