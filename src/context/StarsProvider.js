import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsContext from './StarsContext';

function Planet({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  );

  const { filterByName, filterByNumeric } = filters;
  const { name } = filterByName;
  useEffect(() => {
    const endpointPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      const results = await fetch(endpointPlanets);
      const dataPlanets = await results.json();
      setData(dataPlanets.results);
      setFilterPlanet(dataPlanets.results);
    };
    getPlanets();
  }, []);

  const filterPlanets = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  useEffect(() => {
    let planetsFiltereds = data.filter((planet) => planet.name
      .toLowerCase().includes(name));
    if (filterByNumeric.length > 0) {
      planetsFiltereds = planetsFiltereds.filter((planet) => {
        let bool = true;
        filterByNumeric.forEach(({ column, comparison, value }) => {
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
  }, [data, name, filters, filterByNumeric]);

  const setNumericFilters = (newObj) => {
    setFilters({ ...filters,
      filterByNumeric: [...filters.filterByNumeric, newObj] });
  };

  const context = { data, filterPlanets, filters, filterPlanet, name, setNumericFilters };
  return (
    <StarsContext.Provider value={ context }>
      { children }
    </StarsContext.Provider>
  );
}

Planet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Planet;
