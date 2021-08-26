import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';

function Header() {
  const {
    filters,
    setFilters,
    data,
    setFilteredPlanets,
  } = useContext(AppContext);
  useEffect(() => {
    const { filterByName: { name } } = filters;
    if (!name) {
      setFilteredPlanets(data);
    } else {
      setFilteredPlanets(
        data.filter(({ name: planetName }) => planetName.toLowerCase().includes(name)),
      );
    }
  }, [data, filters, setFilteredPlanets]);
  return (
    <header>
      <label htmlFor="name-filter">
        Termo de busca:
        <input
          data-testid="name-filter"
          placeholder="Insira o nome do planeta que deseja buscar"
          onChange={ ({ target: { value } }) => setFilters(
            {
              filterByName: { name: value },
            },
          ) }
        />
      </label>
    </header>
  );
}

export default Header;
