import React from 'react';
import ReactDOM from 'react-dom/client';
import { Edit } from '../src/pages/Edit';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Edit />
    </ThemeProvider>
  </React.StrictMode>,
)