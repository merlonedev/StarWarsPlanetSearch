import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyProvider from './context/Provider';

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root'),
);
