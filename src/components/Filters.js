import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filter, setFilter } = useContext(StarWarsContext);
  const { filterByName: { name } } = filter;

  const renderPlanetInput = () => (
    <label htmlFor="name-filter">
      Planeta:
      <input
        type="text"
        value={ name }
        id="name-filter"
        data-testid="name-filter"
        onChange={ ( {target: { value }} ) => setFilter({
          ...filter, filterByName: { ...filter.filterByName, name: value }
        }) }
      />
    </label>
  );


  return (
    <div>

    </div>
  );
}

export default Filters;
