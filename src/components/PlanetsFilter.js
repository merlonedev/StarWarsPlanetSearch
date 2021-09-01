import React, { useContext } from 'react';
import { PlanetContext } from '../Context/PlanetProvider';

const PlanetsFilter = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(PlanetContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  return (
    <input
      data-testid="name-filter"
      placeholder="digite o nome do mundo"
      value={ name }
      onChange={ handleChange }
    />
  );
};

export default PlanetsFilter;
