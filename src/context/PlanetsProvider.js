import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((result) => result.results)
        .catch((error) => error);
      planets.forEach((planet) => delete planet.residents);
      setPlanetList(planets);
    };
    requestApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets: planetList } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.element.isRequired,
});

export default PlanetsProvider;
