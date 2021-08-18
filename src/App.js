import React from 'react';
import './App.css';
import StarProvider from './components/StarProvider';
import { Table, FilterForm } from './components';

function App() {
  return (
    <StarProvider>
      <FilterForm />
      <Table />
      <span>Hello, App!</span>
    </StarProvider>
  );
}

export default App;
