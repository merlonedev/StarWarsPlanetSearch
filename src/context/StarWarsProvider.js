import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    FilteredByName: '',
    filterByNumericValues: {
      column: 'population',
    },
  });
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };

    getPlanets();
  }, []);

  const handleSearch = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      name: value,
    });
  };

  const handleSelect = ({ target }) => {
    const { value, name } = target;
    setFilters({
      filterByNumericValues: {
        ...filters.filterByNumericValues,
        [name]: value,
      },
    });
  };

  const filterTable = () => {
    const { comparison, column, value } = filters.filterByNumericValues;
    const valueConv = Number(value);
    setOptions(options.filter((option) => option !== column));

    if (comparison === 'maior que') {
      return setPlanets(planets.filter((planet) => planet[column] > valueConv));
    }
    if (comparison === 'menor que') {
      return setPlanets(planets.filter((planet) => planet[column] < valueConv));
    }
    if (comparison === 'igual a') {
      return setPlanets(planets.filter((planet) => planet[column] === value));
    }
  };

  const contextValue = {
    data: planets,
    options,
    handleSearch,
    handleSelect,
    filterTable,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.symbol).isRequired,
};

export default StarWarsProvider;
