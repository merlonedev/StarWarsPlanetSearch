import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const newData = useRef(data);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint);
      if (!result.ok) return console.log('Erro na requisição');
      const planets = await result.json();
      setData(planets.results);
      newData.current = planets.results;
    };
    getPlanets();
  }, [setData]);

  useEffect(() => {
    const filteredData = newData.current.filter(
      ({ name }) => name.includes(filterByName),
    );
    setData(filteredData);
  }, [setData, newData, filterByName]);

  const starValue = { data, setData, filterByName, setFilterByName, newData };

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
