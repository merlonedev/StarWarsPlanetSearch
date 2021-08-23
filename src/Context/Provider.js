import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_KEYS = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

function Provider({ children }) {
  const [setData] = useState([]);
  const [columns, setColumns] = useState(INITIAL_KEYS);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint)
        .then((data) => data.json());
      setData(result.results);
    };
    getData();
  }, [setData]);

  const contextValue = {
    planets,
    setPlanets,
    columns,
    setColumns,
  };

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
