import React, { useContext, useState } from 'react';
import context from '../context/context';

function AllFilters() {
  const { filters, setFilters, columns, setColumns } = useContext(context);
  const { filterByName: { name: filtered }, filterByNumericValues } = filters;
  const [filterByNumber, setFilterByNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleFilterNumber = ({ target: { name, value } }) => {
    setFilterByNumber({
      ...filterByNumber,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterByNumber],
    });

    setColumns(columns.filter((colum) => colum !== filterByNumber.column));
  };

  const { value } = filterByNumber;

  const renderingSelec = () => (
    <div>
      <form>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleFilterNumber }
        >
          { columns.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          )) }
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleFilterNumber }
        >
          { comparison.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          )) }
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ handleFilterNumber }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Search
        </button>
      </form>
    </div>
  );

  const renderingInputs = () => (
    <div>
      <label htmlFor="name-filter">
        planets:
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name-filter"
          type="text"
          value={ filtered }
          onChange={ handleName }
        />
      </label>
    </div>
  );
  return (
    <div>
      { renderingInputs() }
      { renderingSelec() }
    </div>
  );
}

export default AllFilters;
