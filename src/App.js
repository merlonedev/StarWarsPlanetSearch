import React from 'react';
import './App.css';
import contextProvider from './Context/ContextProvider';

function App() {
  return (
    <contextProvider>
      <div>
        <p>hello</p>
      </div>
    </contextProvider>
  );
}

export default App;
