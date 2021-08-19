import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function Inputs() {
  return (
    <div className="App">
      <h2>Eu sou o Componente Inputs!</h2>
      <form>
        <FilterByName />
        <FilterByNumericValues />
      </form>
    </div>
  );
}

export default Inputs;
