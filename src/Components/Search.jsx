import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Search() {
  const { state: { filters }, handleSetState } = useContext(PlanetsContext);
  const { filterByName } = filters;

  const handleInputChange = ({ target: { id, name, value } }) => {
    const newFilterValue = { [id]: { [name]: value } };
    handleSetState('filters', newFilterValue);
  };

  return (
    <div>
      <label className="name-filter-label" htmlFor="name-filter">
        Search By Name:
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          className="name-filter"
          id="filterByName"
          placeholder="Planet name"
          value={ filterByName.name }
          onChange={ (event) => handleInputChange(event) }
        />
      </label>
    </div>
  );
}

export default Search;
