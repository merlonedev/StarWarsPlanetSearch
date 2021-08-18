import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const result = await response.json();
      result.results.forEach((planet) => delete planet.residents);
      setFullData(result.results);
      setData(result.results);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (name.length !== '') {
      setData(fullData.filter(({ name: planetName }) => planetName
        .toLowerCase().includes(name.toLowerCase())));
    } else { setData(fullData); }
  }, [fullData, name]);

  const context = {
    data,
    setData,
    name,
    setName,
    filters: {
      filterByName: {
        name,
      },
    },
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
