import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default function Provider({ children }) {
  const [tablePlanet, setData] = useState([]);
  const [searchPlanet, setFilterPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName:
    { name: '' },
    filterByNumericValues: [],
  });

  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;

  // Requisição
  useEffect(() => {
    const endpointPlanets = urlApi;
    const getPlanets = async () => {
      const results = await fetch(endpointPlanets);
      const dataPlanets = await results.json();
      setData(dataPlanets.results);
      setFilterPlanet(dataPlanets.results);
    };
    getPlanets();
  }, []);

  // Filter for name
  const filterPlanets = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };
  // Filer for Colum

  useEffect(() => {
    console.log('entrou no effect');
    let planetsFiltereds = tablePlanet.filter((planet) => planet.name
      .toLowerCase().includes(name));
    if (filterByNumericValues.length > 0) {
      planetsFiltereds = planetsFiltereds.filter((planet) => {
        let bool = true;
        filterByNumericValues.forEach(({ column, comparison, value }) => {
          switch (comparison) {
          case 'maior que':
            bool = Number(planet[column]) > Number(value) && bool;
            break;
          case 'menor que':
            bool = Number(planet[column]) < Number(value) && bool;
            break;
          case 'igual a':
            bool = Number(planet[column]) === Number(value) && bool;
            break;
          default:
            bool = false;
          }
        });
        return bool;
      });
    }
    setFilterPlanet(planetsFiltereds);
  }, [tablePlanet, name, filters, filterByNumericValues]);

  const setNumericFilters = (newObj) => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newObj] });
  };

  return (
    <Context.Provider
      value={ { tablePlanet,
        filterPlanets,
        filters,
        searchPlanet,
        name,
        setNumericFilters } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
