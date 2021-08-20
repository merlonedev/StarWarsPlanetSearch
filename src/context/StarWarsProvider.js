import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const StarWarsProvider = ({ children }) => {
  const filters = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setplanets] = useState([]);
  const [name, setname] = useState(filters);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setplanets(results);
    };
    getPlanets();
  }, []);

  const handleNameFilter = ({ target: { value } }) => {
    setname((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: value },
    }));
  };

  const filtersName = () => (
    planets.filter((filter) => filter.name.toLowerCase()
      .includes(name.filterByName.name.toLowerCase()))
  );

  const context = {
    data: planets,
    handleNameFilter,
    filtersName,
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
