import React, { useState, useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

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

function NumericFilter() {
  const { filters, setFilter } = useContext(planetsContext);
  const [initialFilter, setInitialFilter] = useState(obj);
  const [initialOptions, setInitialOptions] = useState(columnOptions);
  const [baseComparison] = useState(sizeFilter);

  const storageFilters = ({ target }) => {
    const { value, id } = target;
    setInitialFilter({ ...initialFilter, [id]: value });
    obj[id] = value;
  };

  const sendFilters = () => {
    const { column, comparison, value } = initialFilter;
    const teste = { column, comparison, value };
    const result = initialOptions.filter((select) => select !== teste.column);
    setInitialOptions(result);

    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, teste],
    });

    setInitialFilter({ ...initialFilter,
      column: initialOptions.length ? initialOptions[0] : '',
      value: '0',
    });
    // document.getElementById('value').value = '';
  };

  return (
    <>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ storageFilters }
      >
        {
          initialOptions.map((option) => (
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
          baseComparison.map((size) => (
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
        onClick={ sendFilters }
      >
        ADD Filter
      </button>
    </>
  );
}

export default NumericFilter;
