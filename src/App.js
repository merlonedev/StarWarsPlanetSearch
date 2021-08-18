import React from 'react';
import './App.css';

import TableComponent from './components/TableComponent';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <ApiContextProvider>
      <TableComponent />
    </ApiContextProvider>
  );
}

export default App;
