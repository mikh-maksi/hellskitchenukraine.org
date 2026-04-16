import React from 'react';
import { ThemeProvider } from '@mui/material';

import theme from './hoc/theme';
import Routes from './Router';

import './assets/fonts/e-Ukraine/e-ukraine.css';
import './App.css';

const App: React.FC = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
