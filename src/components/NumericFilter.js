import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function NumericFilter() {
  const { filters, setFilters, availableFilters } = useContext(AppContext);
  const [column, setColumn] = useState(availableFilters[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleSubmit = () => {
    setFilters({ ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(
        {
          column,
          comparison,
          value,
        },
      ),
    });
  };

  return (
    <form>
      <select
        id="column-filter"
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          availableFilters.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>
      <select
        id="comparison-filter"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value-filter"
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilter;
