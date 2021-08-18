import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const {
    filters: {
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

  const handleFilter = () => {
    const newFilterValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterValues]);
  };

  const setColumnOptions = () => {
    const columnFilters = filterByNumericValues.map((filter) => filter.column);
    let columns = initialColumnOptions;
    columnFilters.forEach((col) => {
      columns = columns.filter((option) => option !== col);
    });
    return columns;
  };
  const columnOptions = setColumnOptions();

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {columnOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          {comparisonOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Valor"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default Filters;
