import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  const contextData = { data };

  useEffect(() => {
    const getPlanets = async () => {
      // const endpoint = 'https://swapi.dev/api/planets';
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((dataJson) => dataJson.json());
      setData(results);
    };
    getPlanets();
  });

  return (
    <MyContext.Provider value={ contextData }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyProvider;
