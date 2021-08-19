import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const { results } = await fetch(ENDPOINT).then((data) => data.json());
        setPlanets(results);
      } catch (error) {
        return (error);
      }
    };
    getPlanets();
  }, [planets]);

  const contextValue = {
    planets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
