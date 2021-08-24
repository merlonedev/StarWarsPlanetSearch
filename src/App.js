import React from 'react';
import { ContextProvider } from './Context/Context';
import MyTable from './Components/MyTable';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <MyTable />
    </ContextProvider>
  );
}

export default App;
