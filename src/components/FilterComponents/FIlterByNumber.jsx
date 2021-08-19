import React, { useState, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function FilterByNumber() {
  const [comparisonFilterItens] = useState(['maior que', 'menor que', 'igual a']);
  const { handleChangeNumber } = useContext(PlanetContext);
  const { options: { collumFilterItens } } = useContext(PlanetContext);
  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          id="column-filter"
        >
          {
            collumFilterItens.map((item, index) => (
              <option
                value={ item }
                key={ index }
              >
                {item}
              </option>
            ))
          }
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
        >
          {
            comparisonFilterItens.map((item, i) => (
              <option
                value={ item }
                key={ i }
              >
                {item}
              </option>))
          }
        </select>
        <label htmlFor="value-filter">
          <input
            type="number"
            id="value-filter"
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleChangeNumber }
        >
          Adicionar Filtro
        </button>
      </form>
    </div>
  );
}

export default FilterByNumber;
