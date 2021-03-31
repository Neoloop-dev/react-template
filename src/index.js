import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import { App } from './App';

import { globalStyles } from './App.styles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
