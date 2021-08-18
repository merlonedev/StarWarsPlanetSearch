import React from 'react';
import './App.css';
import FilterList from './Components/FilterList';
import PlanetTable from './Components/PlanetTable';
import Provider from './context/dataProvider';

function App() {
  return (
    <Provider>
      <main>
        <FilterList />
        <PlanetTable />
      </main>
    </Provider>
  );
}

export default App;
