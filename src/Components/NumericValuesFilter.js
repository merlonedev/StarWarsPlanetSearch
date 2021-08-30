import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericValuesFilter() {
  const {
    setNumValue,
    filters,
    columnOptions, comparisonOptions } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const changeFilterByNumericValues = () => {
    const { filterByNumericValues } = filters;
    setNumValue([
      ...filterByNumericValues,
      {
        column,
        comparison,
        value,
      },
    ]);
  };

  const handleClick = () => {
    changeFilterByNumericValues();
  };

  return (
    <form>
      <label htmlFor="columnFilter">
        Filter column:
        <select
          id="columnFilter"
          name="column"
          data-testid="column-filter"
          type="text"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        Filter comparison:
        <select
          id="comparisonFilter"
          name="comparison"
          data-testid="comparison-filter"
          type="text"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {comparisonOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="valueFilter">
        Filter by value:
        <input
          id="valueFilter"
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(+target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Add filter
      </button>
    </form>
  );
}

export default NumericValuesFilter;
