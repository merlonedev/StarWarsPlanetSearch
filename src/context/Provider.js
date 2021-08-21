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
    filterByNumericValues: [/*
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      }, */
    ],
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
  }, []);

  // console.log(data);

  // Requisito 02 - Ajuda da monitora Letícia e ainda olhei o código do colega para fazer o filter do nome corretamente: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/2/files
  useEffect(() => {
    const filterPlanet = () => {
      const { filterByName } = filters;

      let filtering = [...data];
      // console.log(filtering);

      filtering = filtering
        .filter((planet) => planet.name
          .includes(filterByName.name));
      // console.log(filtering);
      // console.log(filterByNumericValues);
      // console.log(filtering[0]);
      setPlanets(filtering);
    };
    filterPlanet();
  }, [data, filters]);

  // Requisito 3 - Consultei o código do colega Thalles para conseguir fazer as comparações dos filtros, source: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/107/commits/30af9ee16ca131cb63633f40904ae0a60cbf6cdd
  useEffect(() => {
    const { filterByNumericValues } = filters;
    let filtering = [...data];

    const filterPlanet = () => {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          filtering = filtering
            .filter((planet) => Number(planet[column]) > Number(value));
          // console.log(filtering);
          return setPlanets(filtering);
        }
        if (comparison === 'menor que') {
          filtering = filtering
            .filter((planet) => Number(planet[column]) < Number(value));
          return setPlanets(filtering);
        }
        if (comparison === 'igual a') {
          filtering = filtering
            .filter((planet) => Number(planet[column]) === Number(value));
          // console.log(filtering);
          // console.log(setPlanets(filtering));
          return setPlanets(filtering);
        }
      });
    };
    filterPlanet();
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
