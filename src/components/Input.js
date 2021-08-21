import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Input() {
  const { planetFilters, setPlanetFilters } = useContext(SWContext);
  const { filterByName: { name } } = planetFilters;

  const handleNamePlanet = ({ target: { value } }) => {
    setPlanetFilters({
      ...planetFilters,
      filterByName: {
        name: value,
      },
    });
  };

  const renderInput = () => (
    <form>
      <label htmlFor="name-filter">
        Search planet:
        <input
          data-testid="name-filter"
          id="name-filter"
          name="name-filter"
          type="text"
          value={ name }
          onChange={ handleNamePlanet }
        />
      </label>
    </form>
  );

  return (
    renderInput()
  );
}

export default Input;
