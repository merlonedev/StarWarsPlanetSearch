import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function CtxProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanetList = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };

    getPlanetList();
  }, []);

  const contextValue = { data, setData };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CtxProvider;
