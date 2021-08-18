import React from 'react';
import Table from './components/Table';
import Provider from './context/ContextProvider';
import './App.css';
import Filters from './components/Filters';

const App = () => (
  <Provider>
    <Filters />
    <Table />
  </Provider>
);

export default App;
