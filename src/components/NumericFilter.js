import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

export default function NumericFilter() {
  const { filter, setFilter, setFilterNumeric, data } = useContext(PlanetContext);
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const option = (value, index) => (
    <option key={ index } value={ value }>
      {value}
    </option>
  );

  const handleChange = ({ target: { name, value } }) => {
    setFilter((obj) => ({
      ...obj,
      filterByNumericValues: [{
        ...obj.filterByNumericValues[0],
        [name]: value,
      }],
    }));
  };

  const isBigger = (column, value) => data
    .filter((planet) => planet[column] > parseInt(value, 10));

  const isSmaller = (column, value) => data
    .filter((planet) => planet[column] < parseInt(value, 10));

  const isEqual = (column, value) => data
    .filter((planet) => planet[column] === value);

  const filterValues = () => {
    const { column, comparison, value } = filter.filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      return setFilterNumeric(isBigger(column, value));
    case 'menor que':
      return setFilterNumeric(isSmaller(column, value));
    case 'igual a':
      return setFilterNumeric(isEqual(column, value));
    default:
      return [];
    }
  };

  return (
    <>
      <label htmlFor="column">
        Column:
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { columns.map((col, index) => option(col, index)) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison:
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          { comparisons.map((col, index) => option(col, index)) }
        </select>
      </label>
      <label htmlFor="value">
        Value:
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { filterValues(); } }
      >
        Filter
      </button>
    </>
  );
}
