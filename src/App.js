import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import FilterForm from './components/FilterForm';
import FiltersByNumericValue from './components/FiltersByNumericValue';
import Table from './components/Table';
import './App.css';

const App = () => (
  <section>
    <StarWarsProvider>
      <FilterForm />
      <FiltersByNumericValue />
      <Table />
    </StarWarsProvider>
  </section>
);

export default App;
