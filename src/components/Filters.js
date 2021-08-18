import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  const renderPlanetInput = () => (
    <label htmlFor="name-filter">
      Planeta:
      <input
        type="text"
        value={ name }
        id="name-filter"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setFilter({
          ...filters, filterByName: { ...filters.filterByName, name: value },
        }) }
      />
    </label>
  );

  return (
    <div>
      {renderPlanetInput()}
    </div>
  );
}

export default Filters;
