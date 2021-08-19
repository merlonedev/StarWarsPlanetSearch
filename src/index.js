import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './context/Provider';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
