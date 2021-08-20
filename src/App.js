import React from 'react'; // teste
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Inputs';
import Select from './components/Select';

function App() {
  return (
    <Provider>
      <Input />
      <Select />
      <Table />
    </Provider>
  );
}

export default App;
