import React from 'react';
import Provider from './provider/Provider';
import Table from './components/Table';
import './App.css';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}
export default App;
