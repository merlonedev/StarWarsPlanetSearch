import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
// import planetsByFilters from '../utils/planetsByFilters';

const InputFilterPlanets = () => {
  const {
    filters,
    setFilters,
    planets,
    setFilteredPlanets,
  } = useContext(MyContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ ...filters, filterByName: { value } });
    setFilteredPlanets(planets.filter((planet) => planet.name.includes(value)));
  }

  return (
    <label htmlFor="search">
      Procurar
      <input
        type="text"
        id="search"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
};

export default InputFilterPlanets;
