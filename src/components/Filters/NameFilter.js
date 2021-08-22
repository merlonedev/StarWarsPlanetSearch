import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function NameFilter() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { name } = filters;

  const handleFilterName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filters: { filterByName: { name: value } },
    });
  };

  return (
    <div className="nameFilter-content">
      <label htmlFor="name-planet">
        Planet Name
        <input
          type="text"
          id="name-planet"
          name="planetName"
          value={ name }
          onChange={ handleFilterName }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default NameFilter;
