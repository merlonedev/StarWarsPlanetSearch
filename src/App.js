import React from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import Provider from './context/ContextProvider';

export default function App() {
  return (
    <Provider>
      <FilterForm />
      <Table />
    </Provider>
  );
}
