import React from 'react';
import './App.css';
import FilterInputs from './components/FilterInputs';
import Table from './components/Table';
import Provider from './context/Provider';

// Aplicativo desenvolvido com orientação do colega Cristiano Lima, turma 12. Perfil no github: https://github.com/cristianocsl.
function App() {
  return (
    <Provider>
      <FilterInputs />
      <Table />
    </Provider>
  );
}

export default App;
