import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default function Provider({ children }) {
  const [tablePlanet, setData] = useState([]);
  const [vazio, setVazio] = useState('');
  const [searchPlanet, setsearchPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName:
    { name: '' },
    filterByNumericValues: [],
  });

  // Requisição
  useEffect(() => {
    console.log('UseEffect Api');
    const endpointPlanets = urlApi;
    const getPlanets = async () => {
      const results = await fetch(endpointPlanets);
      const dataPlanets = await results.json();
      setData(dataPlanets.results);
      setsearchPlanet(dataPlanets.results);
    };
    getPlanets();
  }, []);
  // Filter for name
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;

  // Filer for Colum
  useEffect(() => {
    console.log('Effect Filter');
    let columFiltered = tablePlanet.filter((planet) => planet.name
      .toLowerCase().includes(name));
    if (filterByNumericValues.length > 0) {
      columFiltered = columFiltered.filter((planet) => {
        let numberValue = true;
        filterByNumericValues.forEach(({ column, comparison, value }) => {
          switch (comparison) {
          case 'maior que':
            numberValue = Number(planet[column]) > Number(value) && numberValue;
            break;
          case 'menor que':
            numberValue = Number(planet[column]) < Number(value) && numberValue;
            break;
          case 'igual a':
            numberValue = Number(planet[column]) === Number(value) && numberValue;
            break;
          default:
            numberValue = false;
          }
        });
        return numberValue;
      });
    }
    setsearchPlanet(columFiltered);
  }, [tablePlanet, name, filters, filterByNumericValues]);

  return (
    <Context.Provider
      value={ {
        name,
        tablePlanet,
        setFilters,
        filters,
        searchPlanet,
        vazio,
        setVazio,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
