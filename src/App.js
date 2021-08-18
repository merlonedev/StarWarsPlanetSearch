import React from 'react';
import './App.css';
import Provider from './context/Provider';
import NameSearch from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import ActiveFiltersList from './components/ActiveFiltersList';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <Provider>
      <NameSearch />
      <NumericFilter />
      <ActiveFiltersList />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
