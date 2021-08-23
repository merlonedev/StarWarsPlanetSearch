import React from 'react';
import Main from './components/Main';
import Provider from './context/ContextProvider';
import './App.css';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
