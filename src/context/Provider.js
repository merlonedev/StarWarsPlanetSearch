import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint)
        .then((response) => response.json());
      setData(result.results);
      // console.log(result.results);
    };
    getData();
  }, [data]);

  // Requisito 02 - Ajuda da monitora Letícia e ainda olhei o código do colega para fazer o filter corretamente: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/2/files
  useEffect(() => {
    const filterNamePlanet = () => {
      const { filterByName } = filters;
      const filterName = data
        .filter((planet) => planet.name
          .includes(filterByName.name));
      // console.log(filterName);
      setPlanets(filterName);
    };
    filterNamePlanet();
  }, [data, filters]);

  const contextValue = {
    planets, setPlanets, filters, setFilters,
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
