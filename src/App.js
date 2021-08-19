import React from 'react';
import StarProvider from './components/StarProvider';
import { Table, FilterForm, FilterList } from './components';

function App() {
  return (
    <StarProvider>
      <FilterForm />
      <FilterList />
      <Table />
    </StarProvider>
  );
}

export default App;
