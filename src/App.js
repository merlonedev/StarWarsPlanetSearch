import React from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/ContextProvider';

export default function App() {
  return (
    <Provider>
      <Header />
      <FilterForm />
      <Table />
    </Provider>
  );
}
