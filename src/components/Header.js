import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const { data, setResult } = useContext(AppContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

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
