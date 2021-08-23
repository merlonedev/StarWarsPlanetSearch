import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const StarWarsProvider = ({ children }) => {
  const filterByName = {
    name: '',
  };

  const filterByNumericValues = {
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  };
  const [planets, setplanets] = useState([]);
  const [searchPlanets, setsearchPlanets] = useState(filterByName);
  const [filtersValue, setfiltersValue] = useState(filterByNumericValues);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setplanets(results);
    };
    getPlanets();
  }, []);

  const handleNameFilter = ({ target: { value } }) => {
    setsearchPlanets((prevFilters) => ({
      ...prevFilters,
      name: value,
    }));
  };

  const handleName = ({ target: { value, name } }) => {
    setfiltersValue((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filtersPlanets = () => (
    planets.filter((filter) => filter.name.toLowerCase()
      .includes(searchPlanets.name.toLowerCase()))
  );

  const handleButtonSearch = () => {
    const { column, comparison, value } = filtersValue;

    const filterColumn = planets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(planet[column], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(planet[column], 10) === parseInt(value, 10);
      default:
        return 0;
      }
    });
    setplanets(filterColumn);
  };

  const context = {
    data: planets,
    handleNameFilter,
    filtersPlanets,
    handleName,
    handleButtonSearch,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
