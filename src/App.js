import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import './App.css';

const App = () => (
  <section>
    <StarWarsProvider>
      <FilterForm />
      <Table />
    </StarWarsProvider>
  </section>
);

export default App;
