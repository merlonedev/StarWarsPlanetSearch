import React from 'react';
import './App.css';
import FilterList from './Components/FilterList';
import PlanetTable from './Components/PlanetTable';
import SelectedFilters from './Components/SelectedFilters';
import Provider from './context/dataProvider';

function App() {
  return (
    <Provider>
      <main>
        <FilterList />
        <SelectedFilters />
        <PlanetTable />
      </main>
    </Provider>
  );
}

export default App;
