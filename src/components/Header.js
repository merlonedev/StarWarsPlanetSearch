import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const { data, setResult, setFilters, filters } = useContext(AppContext);

  useEffect(() => {
    const filterPlanets = data
      .filter((planet) => (
        planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
      ));

    setResult(filterPlanets);
  }, [filters, data]);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters,
      filterByName: {
        name: value,
      } });
  };

  return (
    <div>
      <label htmlFor="search-input">
        <input
          data-testid="name-filter"
          name="search-input"
          onChange={ handleChange }
          // value={ filters.filterByName.name }
        />
      </label>
    </div>
  );
};

export default Header;
