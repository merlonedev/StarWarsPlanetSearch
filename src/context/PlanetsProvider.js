import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  /**
  * Consultei o repositório de José Henrique Margraf Melo para resolver essa parte.
  * Link: https://github.com/tryber/sd-011-project-starwars-planets-search/pull/9/commits/3eca2162d48e989e4b737cf69f177f6f2699756c
  */

  useEffect(() => {
    const SearchPlanets = planetList.filter(({ name }) => name
      .includes(filters.filterByName.name));
    setFilteredPlanets(SearchPlanets);
  }, [planetList, filters]);

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
    <PlanetsContext.Provider
      value={
        { filteredPlanets, planets: planetList, filters, setFilters }
      }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.element.isRequired,
});

export default PlanetsProvider;
