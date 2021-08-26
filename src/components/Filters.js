import React, { useContext, useState } from 'react';
import AppContext from '../Context/appContext';

function Filters() {
  const { filters: {
    filterByName: { setName },
    filterByNumericValues,
    setFilterByNumericValues,
  } } = useContext(AppContext);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const initialColumnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const setColumnOptions = () => {
    const columnFilters = filterByNumericValues.map((filter) => filter.column);
    let columns = initialColumnOptions;
    columnFilters.forEach((col) => {
      columns = columns.filter((option) => option !== col);
    });
    return columns;
  };
  const columnOptions = setColumnOptions();

  const handleFilter = () => {
    const newFilterValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterValues]);
  };

  const handleRemoveFilter = ({ target }) => {
    setFilterByNumericValues(
      filterByNumericValues.filter(({ column: col }) => col !== target.id),
    );
  };

  const renderSelectedFilters = () => (
    <div>
      <ul>
        {filterByNumericValues.map(({ comparison: comp, column: col, value: v }) => (
          <li data-testid="filter" key={ col }>
            <span>{`${col} | ${comp} | ${v}`}</span>
            <button type="button" id={ col } onClick={ handleRemoveFilter }>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          onChange={ (event) => setName(event.target.value) }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (columns) => setColumn(columns.target.value) }
        >
          {columnOptions.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (comparisons) => setComparison(comparisons.target.value) }
        >
          {comparisonOptions.map((options) => (
            <option key={ options } value={ options }>
              {options}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Valor"
          onChange={ (values) => setValue(values.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </div>
      { renderSelectedFilters() }
    </form>
  );
}

export default Filters;
