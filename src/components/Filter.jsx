import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

const filterSelectOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const InitialFilter = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function Filter() {
  const { filters, setFilter } = useContext(MyContext);
  const [baseFilter, setBaseFilter] = useState(InitialFilter);
  const [baseSelect, setBaseSelect] = useState(filterSelectOptions);
  const [baseComparison] = useState(comparisonOptions);

  const filterName = ({ target: { value } }) => {
    setFilter({ ...filters, filterByName: { ...filters.filterByName, name: value } });
  };

  const handleChange = ({ target: { id, value } }) => {
    setBaseFilter({ ...baseFilter, [id]: value });
  };

  const handleSubmit = () => {
    const { column, comparison, value } = baseFilter;
    const obj = { column, comparison, value };
    const result = baseSelect
      .filter((item) => item !== obj.column);
    setBaseSelect(result);
    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
    setBaseFilter({ ...baseFilter,
      column: baseSelect.length ? baseSelect[0] : '',
      value: '0',
    });
    document.getElementById('value').value = '';
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
          { baseSelect.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison:
        <select id="comparison" data-testid="comparison-filter" onChange={ handleChange }>
          { baseComparison.map((item) => <option key={ item }>{ item }</option>) }
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
