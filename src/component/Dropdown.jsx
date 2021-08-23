import React, { useContext, useState } from 'react';
import MyContext from '../context/myContext';

const selectOption = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const Dropdown = () => {
  const { filters, setFilter } = useContext(MyContext);
  const [filterOption, setFilterOption] = useState(selectOption);
  const { filterByNumericValues } = filters;
  const filter = { column: 'population', comparison: 'maior que', value: '0' };
  const selectValue = ['maior que', 'menor que', 'igual a'];
  const handleChange = ({ target: { id, value } }) => {
    filter[id] = value;
  };
  const handleSubmit = () => {
    setFilter({ ...filters, filterByNumericValues: [...filterByNumericValues, filter] });
    setFilterOption(filterOption.filter((item) => filter.column !== item));
  };

  return (
    <div>
      <label htmlFor="column">
        Column Filter:
        <select
          id="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { filterOption.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="comparison">
        will be:
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          { selectValue.map((item) => (
            <option
              key={ item }
              value={ item }
            >
              { item }
            </option>)) }
        </select>
      </label>
      <label htmlFor="value">
        what number:
        <input
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleSubmit }
        data-testid="button-filter"
      >
        filter
      </button>
    </div>
  );
};

export default Dropdown;
