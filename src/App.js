import React from 'react';
import './App.css';
import Provider from './Components/Provider';
import Main from './Pages/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
