import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function FilterName() {
  const { planetFilters, setPlanetFilters } = useContext(SWContext);
  const { filterByName: { name: filtered }, filterByNumericValues } = planetFilters;
  const [numberFilter, setNumberFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleNamePlanet = ({ target: { value } }) => {
    setPlanetFilters({
      ...planetFilters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleFilters = ({ target: { name, value } }) => {
    setNumberFilter({
      ...numberFilter,
      [name]: value,
    });
  };

  const handleClick = () => {
    setPlanetFilters({
      ...planetFilters,
      filterByNumericValues: [...filterByNumericValues, numberFilter],
    });
  };

  const { value } = numberFilter;
  const renderFiltersNumbers = () => (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleFilters }
      >
        { columns.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleFilters }
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
        min="0"
        data-testid="value-filter"
        value={ value }
        onChange={ handleFilters }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );

  const renderInputName = () => (
    <div>
      <label htmlFor="name-filter">
        Search planet:
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name-filter"
          type="text"
          value={ filtered }
          onChange={ handleNamePlanet }
        />
      </label>
    </div>
  );

  const style = { display: 'flex' };
  return (
    <div style={ style }>
      { renderInputName() }
      { renderFiltersNumbers() }
    </div>
  );
}

export default FilterName;
