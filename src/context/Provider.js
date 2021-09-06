import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState(false);
  const [planetName, setPlanetName] = useState('');

  const filterState = {
    filters: {
      filterByName: {
        name: planetName,
      },
    },
  };

  useEffect(() => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchPlanetsApi = async () => {
      try {
        const response = await fetch(END_POINT);
        const { results } = await response.json();

        results.forEach((planet) => {
          delete planet.residents;
        });

        setData(results);
      } catch (error) {
        setDataError(true);
      }
    };

    fetchPlanetsApi();
  }, []);

  const filterPlanet = (planetsData) => {
    const { filters: { filterByName } } = filterState;

    if (filterByName.name !== '') {
      return planetsData.filter(({ name }) => name.includes(filterByName.name));
    }

    return planetsData;
  };

  const context = {
    data,
    dataError,
    filterState,
    setPlanetName,
    filterPlanet,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
