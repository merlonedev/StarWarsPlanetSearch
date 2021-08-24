import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function SelectFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  // console.log('filters', filters);
  const [columns, setColumns] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );

  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  const handleFilters = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const filterColumns = () => {
    if (filters.filterByNumericValues.length) {
      const { filterByNumericValues } = filters;
      filterByNumericValues.forEach(({ column }) => setColumns(
        columns.filter((item) => item !== column),
      ));
    }
  };

  const handleClick = () => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, { ...state }],
    });
    filterColumns();
  };

  useEffect(filterColumns, [filters.filterByNumericValues]);

  return (
    <form>
      <div>
        <label htmlFor="column">
          Select Column
          <select
            id="column"
            name="column"
            onChange={ handleFilters }
            data-testid="column-filter"
          >
            {
              columns.map((option) => (
                <option key={ option } value={ option }>{ option }</option>))
            }
          </select>
        </label>

        <label htmlFor="comparison">
          <select
            id="comparison"
            name="comparison"
            onChange={ handleFilters }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value">
          Value
          <input
            type="number"
            id="value"
            name="value"
            onChange={ handleFilters }
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          FILTER
        </button>
      </div>
    </form>
  );
}

export default SelectFilters;
