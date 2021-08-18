import React from 'react';
import ContextProvider from './context/ContextProvider';
import Home from './pages/Home';

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
