import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextTable from './contextTable';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      setData(
        results.map((planet) => {
          const { residents, ...rest } = planet;
          return rest;
        }),
      );
    };

    getPlanets();
  }, []);

  console.log(data);

  const contextValue = {
    data,
  };

  return (
    <contextTable.Provider value={ contextValue }>
      { children }
    </contextTable.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
