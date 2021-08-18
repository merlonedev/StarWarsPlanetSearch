import React from 'react';
import GetDataPlanets from './Components/fetch';
import CreateFilter from './Components/Filters';
import CreateTable from './Components/Table';

function App() {
  return ( // aqui eu digo que o filtro e a tabela serão filhas do GetDataPlanets. Por isso, elas podem receber o estado global.

    <GetDataPlanets>
      <CreateFilter />
      <CreateTable />
    </GetDataPlanets>

  );
}
export default App;
