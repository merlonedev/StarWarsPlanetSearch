import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/starWarsApi';

const StarWarsContext = createContext();

export const StarWarsConsumer = StarWarsContext.Consumer;

export function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getPlanets().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setPlanets(results);
    });
  }, []);

  function handleNameChange({ target }) {
    setName(target.value);
  }

  function addFilter(newFilter) {
    setFilters([...filters, newFilter]);
  }

  const filtersNode = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filters,
    },
  };

  const context = {
    ...filtersNode,
    planets,
    handleNameChange,
    addFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default StarWarsContext;
