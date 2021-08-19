import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext({});

function StarWarsPlanets({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planets) => setData(planets.results));
  }, []);

  useEffect(() => {
    const planets = data.filter((planet) => planet.name.includes(searchTerm));
    setFilteredPlanets(planets);
  }, [data, searchTerm]);

  function filterByNameInput() {
    return (
      <form>
        <label htmlFor="name-filter">
          Planet:
          <input
            type="text"
            name="name-filter"
            placeholder="Search"
            data-testid="name-filter"
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </label>
      </form>
    );
  }

  const contextValue = {
    data,
    filteredPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {filterByNameInput()}
      {children}
    </Context.Provider>
  );
}

StarWarsPlanets.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsPlanets, Context };
