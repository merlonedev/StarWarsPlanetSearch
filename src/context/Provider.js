import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default function Provider({ children }) {
  const [tablePlanet, setData] = useState([]);
  const [searchPlanet, setsearchPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName:
    { name: '' },
    filterByNumericValues: [],
  });

  const { filterByName, filterByNumericValues, column } = filters;
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
      .includes(name));
    setsearchPlanet(planetsFiltereds);
  }, [name, filters, tablePlanet]);

  useEffect(() => {
    const number = 10;
    let comparaObj = filters;
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((filter) => {
        switch (filter.comparison) {
        case 'igual a':
          comparaObj = comparaObj
            .filter((item) => Number(item[filter.column], number)
            === Number(filter.value, number));
          break;
        case 'maior que':
          comparaObj = comparaObj
            .filter((item) => Number(item[filter.column], number)
              > Number(filter.value, number));
          break;
        case 'menor que':
          comparaObj = comparaObj
            .filter((item) => Number(item[filter.column], number)
                < Number(filter.value, number));
          break;
        default:
          break;
        }
      });
      setData(comparaObj);
    }
  }, [filters, filterByNumericValues, column]);

  const context = { tablePlanet,
    filterNamePlanets,
    setFilters,
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
