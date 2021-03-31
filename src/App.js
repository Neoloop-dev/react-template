import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { AppRoutes } from 'routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export { App };
