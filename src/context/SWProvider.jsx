import React, { useState, createContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import fetchPlanets from '../uteis/api';

export const Context = createContext();

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filteredData, setFilteredData] = useState();

  const filterPlanetsByName = ({ name, value }) => {
    if (name === 'name') {
      const dataFilter = data
        .filter((d) => (d.name.toLowerCase()).includes(value.toLowerCase()));
      setFilteredData(dataFilter);
      setFilter({ ...filter, filterByName: { name: value } });
    }
  };

  const getPlanets = async () => {
    const request = await fetchPlanets();
    const newPlanets = Object.values(request.results).map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(newPlanets);
    setFilteredData(newPlanets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Context.Provider value={ { data, setData, filterPlanetsByName, filteredData } }>
      {children}
    </Context.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
