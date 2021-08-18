import React, { useContext } from 'react';
import MyContext from '../context/context';

// const backupOptions = [
//   'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
let filterSelectOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const InitialFilter = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function Filter() {
  const { filters, setFilter } = useContext(MyContext);

  const filterName = ({ target: { value } }) => {
    setFilter({ ...filters, filterByName: { ...filters.filterByName, name: value } });
  };

  const handleChange = ({ target: { id, value } }) => {
    InitialFilter[id] = value;
  };

  const handleSubmit = () => {
    const { column, comparison, value } = InitialFilter;
    const obj = { column, comparison, value };
    filterSelectOptions = filterSelectOptions
      .filter((item) => item !== obj.column);

    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
    InitialFilter.column = filterSelectOptions.length ? filterSelectOptions[0] : '';
    InitialFilter.value = '0';
  };

  return (
    <>
      <label htmlFor="name">
        Filter:
        <input data-testid="name-filter" type="text" id="name" onChange={ filterName } />
      </label>
      <label htmlFor="column">
        Column Filter:
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          { filterSelectOptions.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison:
        <select id="comparison" data-testid="comparison-filter" onChange={ handleChange }>
          { comparisonOptions.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="value">
        Value:
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleSubmit }
        data-testid="button-filter"
      >
        Filter
      </button>
    </>
  );
}

export default Filter;
