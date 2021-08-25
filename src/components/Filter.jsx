import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const selectOptions = [
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
    setFilter({ ...filters,
      filterByNumericValues: [InitialFilter],
    });
  };

  return (
    <div>
      <label htmlFor="name">
        Filter:
        <input data-testid="name-filter" type="text" id="name" onChange={ filterName } />
      </label>
      <label htmlFor="column">
        Column Filter:
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          { selectOptions.map((item) => <option key={ item }>{ item }</option>) }
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
    </div>
  );
}

export default Filter;
