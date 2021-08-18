import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, [setData]);

  const contextValue = {
    data,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MyProvider;
