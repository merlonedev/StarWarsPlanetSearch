import React, { useEffect, useState, useContext } from 'react';
import PlanetLine from './PlanetLine';
import dataContext from '../context/dataContext';

function PlanetTable() {
  const [planets, setPlanets] = useState([]);
  const { state } = useContext(dataContext);
  const DEZ = 10;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };

    getPlanets();
  }, []);

  const filterPlanets = () => {
    let filteredPlanets = planets;
    const filtersByTag = state.filters.filterByNumericValues;

    if (state.filters.filterByName.name !== '') {
      filteredPlanets = filteredPlanets
        .filter((planet) => planet.name.includes(state.filters.filterByName.name));
    }

    if (filtersByTag !== []) {
      state.filters.filterByNumericValues.map(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          filteredPlanets = filteredPlanets
            .filter((planet) => planet[column] > parseInt(value, DEZ));
          break;
        case 'menor que':
          filteredPlanets = filteredPlanets
            .filter((planet) => planet[column] < parseInt(value, DEZ));
          break;
        case 'igual a':
          filteredPlanets = filteredPlanets
            .filter((planet) => parseInt(planet[column], 10) === parseInt(value, DEZ));
          break;
        default:
          filteredPlanets = planets;
        }
        return filteredPlanets;
      });
    }

    return filteredPlanets;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotationPeriod</th>
          <th>orbitalPeriod</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surfaceWater</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {(filterPlanets()).map((CurrentPlanet) => (
          <PlanetLine key={ CurrentPlanet.name } planet={ CurrentPlanet } />
        ))}
      </tbody>
    </table>
  );
}

export default PlanetTable;
