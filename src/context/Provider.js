import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import response from '../testData';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint)
        .then((response) => response.json());
      setData(result.results);
      // console.log(result.results);
    };
    getData();
  }, []);

  const contextValue = { planets, setPlanets, data, setData };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
