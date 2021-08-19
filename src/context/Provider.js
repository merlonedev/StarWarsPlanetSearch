import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const a = await fetch(endpoint).then((dados) => dados.json());
      const planets = a.results;
      setData(planets);
    };
    fetchAPI();
  }, []);

  const context = {
    data, setData,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      { children }
      { console.log(data) }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
