import React, { useEffect, useState, useContext } from 'react';
import PlanetLine from './PlanetLine';
import dataContext from '../context/dataContext';

const ONE_NEGATIVE = -1;
const ONE_POSITIVE = 1;

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

  const orderStringArray = (Array) => {
    const { columnOrder, sort } = state.filters.order;

    switch (sort) {
    case 'ASC':
      Array.sort((a, b) => {
        if (a[columnOrder] > b[columnOrder]) return ONE_POSITIVE;
        if (a[columnOrder] < b[columnOrder]) return ONE_NEGATIVE;
        return 0;
      });
      break;
    case 'DESC':
      Array.sort((a, b) => {
        if (a[columnOrder] < b[columnOrder]) return ONE_POSITIVE;
        if (a[columnOrder] > b[columnOrder]) return ONE_NEGATIVE;
        return 0;
      });
      break;
    default:
      Array.sort();
    }
    return Array;
  };

  const orderNumberArray = (Array) => {
    const { columnOrder, sort } = state.filters.order;

    switch (sort) {
    case 'ASC':
      Array.sort((a, b) => a[columnOrder] - b[columnOrder]);
      break;
    case 'DESC':
      Array.sort((a, b) => b[columnOrder] - a[columnOrder]);
      break;
    default:
      Array.sort();
    }
    return Array;
  };

  const filterPlanets = () => {
    let filteredPlanets = planets;
    const filtersByTag = state.filters.filterByNumericValues;
    const stringColumns = [
      'name', 'climate', 'climate', 'gravity',
      'terrain', 'films', 'created', 'edited', 'url'];
    const { columnOrder } = state.filters.order;

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

    if (stringColumns.includes(columnOrder)) {
      filteredPlanets = orderStringArray(filteredPlanets);
    } else {
      filteredPlanets = orderNumberArray(filteredPlanets);
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
