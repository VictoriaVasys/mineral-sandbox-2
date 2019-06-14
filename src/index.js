import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'mineral-ui/themes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
