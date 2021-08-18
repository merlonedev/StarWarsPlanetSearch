import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderContext from './context/ProviderContext';

ReactDOM.render(
  <ProviderContext>
    <App />
  </ProviderContext>,
  document.getElementById('root'),
);
