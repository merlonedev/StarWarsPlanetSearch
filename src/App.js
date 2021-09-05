import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
