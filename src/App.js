import React from 'react';
import Table from './components/Table';
import Provider from './context/ContextProvider';
import './App.css';
import Header from './components/Header';

const App = () => (
  <Provider>
    <Header />
    <Table />
  </Provider>
);

export default App;
