import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default function Provider({ children }) {
  const [tablePlanet, setData] = useState([]);
  const [searchPlanet, setsearchPlanet] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  const { filterByName } = filters;
  const { name } = filterByName;
  useEffect(() => {
    const endpointPlanets = urlApi;
    const getPlanets = async () => {
      const results = await fetch(endpointPlanets);
      const dataPlanets = await results.json();
      setData(dataPlanets.results);
      setsearchPlanet(dataPlanets.results);
    };
    getPlanets();
  }, []);

  const filterNamePlanets = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  useEffect(() => {
    const planetsFiltereds = tablePlanet.filter((planet) => planet.name
      .toLowerCase().includes(name));

    setsearchPlanet(planetsFiltereds);
  }, [tablePlanet, name, filters]);

  const context = { tablePlanet,
    filterNamePlanets,
    filters,
    searchPlanet,
    name,
  };
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
