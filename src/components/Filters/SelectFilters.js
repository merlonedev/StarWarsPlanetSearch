import React, {} from 'react';
// import PlanetsContext from '../../context/PlanetsContext';

function SelectFilters() {

  const columns = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const handleChangeFilters = () => console.log('oi');

  return (
    <form>
      <div>
        <label htmlFor="column">
          Select Column
          <select
            id="column"
            name="column"
            onChange={ handleChangeFilters }
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
            onChange={ handleChangeFilters }
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
            onChange={ handleChangeFilters }
            data-testid="value-filter"
          />
        </label>
        <button type="button" data-testid="button-filter">FILTER</button>
      </div>
    </form>
  );
}

export default SelectFilters;
