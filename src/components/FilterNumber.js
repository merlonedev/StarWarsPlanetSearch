import React, { useContext } from 'react';
import mycontext from '../context/mycontext';

function FilterNumber() {
  const { option1, option2,
    savePlanet, saveComparision, saveNuumber, handleClick } = useContext(mycontext);
  return (
    <div>
      <select data-testid="column-filter" onChange={ savePlanet }>
        {option1.map((opcao1) => <option key={ opcao1 }>{opcao1}</option>)}
      </select>
      <select onChange={ saveComparision } data-testid="comparison-filter">
        {option2.map((opcao2) => <option key={ opcao2 }>{opcao2}</option>)}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="number"
        name="number"
        placeholder="number"
        onChange={ saveNuumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
