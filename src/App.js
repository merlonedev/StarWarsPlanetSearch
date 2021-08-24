import React from 'react';
import { ContextProvider } from './Context/Context';
import MyTable from './Components/MyTable';
import Input from './Components/Input';
import Select from './Components/Select';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <Input />
      <Select />
      <MyTable />
    </ContextProvider>
  );
}

export default App;
