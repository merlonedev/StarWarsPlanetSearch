import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import SearchByNumericFiltersAndOrder from './components/SearchByNumericFiltersAndOrder';
import Provider from './Provider';

function App() {
  return (
    <Provider>
      <SearchByNumericFiltersAndOrder />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
