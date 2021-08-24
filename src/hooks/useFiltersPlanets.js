import { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  filterByNumericValuesInputs: {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  },
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

const greaterThen = 'maior que';
const lessThan = 'menor que';

function useFiltersPlanets() {
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const { data, setFilteredPlanets } = useContext(PlanetsContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    order,
  } = filters;

  const sortAsc = (planets, column) => {
    const minus = -1;
    const sorted = planets.sort((a, b) => {
      const y = a[column].toLowerCase();
      const z = b[column].toLowerCase();
      const compare = y > z ? 1 : minus;
      return y === z ? 0 : compare;
    });
    return sorted.sort((a, b) => a[column] - b[column]);
  };

  const sortDesc = (planets, column) => {
    const minus = -1;
    const sorted = planets.sort((a, b) => {
      const y = a[column].toLowerCase();
      const z = b[column].toLowerCase();
      const compare = y < z ? 1 : minus;
      return y === z ? 0 : compare;
    });
    return sorted.sort((a, b) => b[column] - a[column]);
  };

  const orderColumns = (planets) => {
    const { column, sort } = order;
    if (sort === 'ASC') {
      return sortAsc(planets, column);
    }

    return sortDesc(planets, column);
  };

  const filterPlanets = () => {
    const searchByName = data
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));

    if (!filterByNumericValues.length) {
      return setFilteredPlanets(orderColumns(searchByName));
    }

    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;

      const filterByValuesGreaterThen = searchByName
        .filter((planet) => Number(planet[column]) > Number(value));

      const filterByValuesLessThan = searchByName
        .filter((planet) => Number(planet[column]) < Number(value));

      const filterByValuesEqualTo = searchByName
        .filter((planet) => Number(planet[column]) === Number(value));

      switch (comparison) {
      case greaterThen:
        setFilteredPlanets(orderColumns(filterByValuesGreaterThen));
        break;
      case lessThan:
        setFilteredPlanets(orderColumns(filterByValuesLessThan));
        break;
      default:
        setFilteredPlanets(orderColumns(filterByValuesEqualTo));
        break;
      }
    });
  };

  useEffect(filterPlanets, [filterByNumericValues, data, name, order]);

  return [filters, setFilters];
}

export default useFiltersPlanets;
