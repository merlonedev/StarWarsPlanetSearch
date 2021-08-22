import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const { handleSetNumeric } = useContext(planetsContext);

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const sizeFilter = [
    'maior que', 'menor que', 'igual a',
  ];

  const obj = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const storageFilters = ({ target }) => {
    const { value, id } = target;
    obj[id] = value;
  };

  const a = () => {
    handleSetNumeric(obj);
  };

  return (
    <div>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ storageFilters }
      >
        {
          columnOptions.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>))
        }
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ storageFilters }
      >
        {
          sizeFilter.map((size) => (
            <option key={ size } value={ size }>
              {size}
            </option>))
        }
      </select>
      <input
        id="value"
        type="number"
        data-testid="value-filter"
        placeholder="Coloque aqui o tamanho da populacao"
        onChange={ storageFilters }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ a }
      >
        ADD Filter
      </button>
    </div>
  );
}

export default NumericFilter;
