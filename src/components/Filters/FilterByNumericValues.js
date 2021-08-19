import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { comparisonMethods } from '../../utils/data';

const FilterByNumericValues = () => {
  const {
    setFilterByNumericValue,
    columns,
    filters: { filterByNumericValue },
  } = useContext(Context);

  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (columns.length > 0) setColumn(columns[0]);
  }, [columns]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterByNumericValue([
      ...filterByNumericValue,
      { column,
        comparison,
        value },
    ]);
    setValue('');
  };

  if (columns.length === 0) {
    return (
      <div>
        <p>Sem possibilidade de mais filtros!</p>
      </div>
    );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <p>Filter by Column Value</p>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {
          columns.map((item) => <option key={ item }>{ item }</option>)
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setcomparison(target.value) }
      >
        {
          comparisonMethods.map((item) => <option key={ item }>{ item }</option>)
        }
      </select>
      <label htmlFor="value">
        Value:
        {' '}
        <input
          data-testid="value-filter"
          className="input-number"
          type="number"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filter
      </button>
    </form>
  );
};

export default FilterByNumericValues;
