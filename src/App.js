import React from 'react';
import StarProvider from './components/StarProvider';
import { Table, FilterForm, FilterList } from './components';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <StarProvider>
        <FilterForm />
        <FilterList />
        <Table />
      </StarProvider>
    </>
  );
}

export default App;
