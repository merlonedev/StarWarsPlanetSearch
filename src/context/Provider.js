import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TretaContext from './Context';

function Provider(props) {
  const { children } = props;

  const [planets, setPlanets] = useState([]);
  const [filted, setFilted] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  useEffect(() => {
    const planetsAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
      setFilted(results);
    };
    planetsAPI();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filter = planets.filter((planet) => planet.name.toLowerCase().includes(name));
    setFilted(filter);
  }, [filters, planets]);

  const contextValue = { planets, filters, setFilters, filted };

  return (
    <TretaContext.Provider value={ contextValue }>
      {
        children
      }
    </TretaContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
