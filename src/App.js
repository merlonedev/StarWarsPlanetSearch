import React from 'react';
import Provider from './provider/Provider';
import './App.css';
import Principal from './pages/Principal';

function App() {
  return (
    <Provider>
      <Principal />
    </Provider>
  );
}

export default App;
