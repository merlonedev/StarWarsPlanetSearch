import React from 'react';
import './App.css';
import Provider from './context/Provider';
import NameFilter from './components/NameFilter';
import OrderFilter from './components/OrderFilter';
import NumericFilter from './components/NumericFilter';
import ActiveFiltersList from './components/ActiveFiltersList';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <Provider>
      <NameFilter />
      <OrderFilter />
      <NumericFilter />
      <ActiveFiltersList />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
