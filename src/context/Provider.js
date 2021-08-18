import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint).then((response) => response.json());
      const planets = result.results;
      setData(planets);
      // console.log(planets);
    };
    getPlanets();
  }, []);

  const starValue = { data, setData };

  return (
    <StarContext.Provider value={ starValue }>
      { children }
    </StarContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
