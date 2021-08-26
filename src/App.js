import React from 'react';
import Table from './components/Table';
import './App.css';
import MyProvider from './context/Provider';
import FilterPlanets from './components/FilterPlanets,';
// os requisitos 1,2,3 me orientei atravez da pulltequeste do aluno erick kreis
function App() {
  return (
    <MyProvider>
      <FilterPlanets />
      <Table />
    </MyProvider>
  );
}

export default App;
