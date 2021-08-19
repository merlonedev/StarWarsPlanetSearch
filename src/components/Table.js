import React, { useContext, useState, useEffect } from 'react';
import usePlanetsData from '../hooks/usePlanetsData';
import Context from '../context/Context';
import Tr from './Tr';

function Table() {
  usePlanetsData();
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const { planets, filtersState } = useContext(Context);

  const customFilter = (filterByNumericValues, getFilteredPlanets) => {
    setFilteredPlanets([]);
    const withCustomFilters = [];

    filterByNumericValues.forEach((filter) => {
      getFilteredPlanets.forEach((planetsFiltered, index) => {
        switch (filter.comparison) {
        case 'maior que':
          if (
            parseInt(planetsFiltered[filter.column], 10) > parseInt(filter.value, 10)
          ) {
            console.log('Maior');
            withCustomFilters.push(getFilteredPlanets[index]);
          }
          break;
        case 'menor que':
          if (
            parseInt(planetsFiltered[filter.column], 10) < parseInt(filter.value, 10)
          ) {
            console.log('Menor');
            withCustomFilters.push(getFilteredPlanets[index]);
          }
          break;
        case 'igual a':
          if (
            parseInt(planetsFiltered[filter.column], 10) === parseInt(filter.value, 10)
          ) {
            console.log('Igual');
            withCustomFilters.push(getFilteredPlanets[index]);
          }
          break;
        default:
          withCustomFilters.push(getFilteredPlanets[index]);
          break;
        }
      });
    });
    setFilteredPlanets(withCustomFilters);
  };

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filtersState;
    const { filters: { filterByNumericValues } } = filtersState;

    const getFilteredPlanets = planets.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));

    if (filterByNumericValues.length >= 1) {
      customFilter(filterByNumericValues, getFilteredPlanets);
    } else {
      setFilteredPlanets(getFilteredPlanets);
    }
  }, [filtersState, planets]);

  return (
    <section>
      <table border="1px">
        <tbody>
          <tr>
            <th>name</th>
            <th>terrain</th>
            <th>climate</th>
            <th>surface_water</th>
            <th>gravity</th>
            <th>diameter</th>
            <th>population</th>
            <th>orbital_period</th>
            <th>rotation_period</th>
            <th>films</th>
            <th>edited</th>
            <th>created</th>
            <th>url</th>
          </tr>
          {
            filteredPlanets.map((planet) => <Tr key={ planet.name } planet={ planet } />)
          }
        </tbody>
      </table>
    </section>
  );
}

export default Table;
