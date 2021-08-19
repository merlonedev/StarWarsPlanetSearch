import { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  ],
  numericFilter: false,
};

const greaterThen = 'maior que';
const lessThan = 'menor que';

function useFiltersPlanets() {
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const [filtering, setFiltering] = useState([]);
  const { data, setFilteredPlanets } = useContext(PlanetsContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    numericFilter,
  } = filters;

  const filterByName = () => {
    const planets = filtering.length ? filtering : data;
    const filter = planets
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
    setFilteredPlanets(filter);
  };

  const filterByValues = () => {
    if (numericFilter) {
      const index = filterByNumericValues.length - 2;

      const { column, comparison, value } = filterByNumericValues[index];
      const planets = filtering.length ? filtering : data;
      const searchByName = planets
        .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
      const filterByValuesGreaterThen = searchByName
        .filter((planet) => Number(planet[column]) > Number(value));
      const filterByValuesLessThan = searchByName
        .filter((planet) => Number(planet[column]) < Number(value));
      const filterByValuesEqualTo = searchByName
        .filter((planet) => Number(planet[column]) === Number(value));
      switch (comparison) {
      case greaterThen:
        setFilteredPlanets(filterByValuesGreaterThen);
        setFiltering(filterByValuesGreaterThen);
        setFilters({ ...filters, numericFilter: false });
        break;
      case lessThan:
        setFilteredPlanets(filterByValuesLessThan);
        setFiltering(filterByValuesLessThan);
        setFilters({ ...filters, numericFilter: false });
        break;
      default:
        setFilteredPlanets(filterByValuesEqualTo);
        setFiltering(filterByValuesEqualTo);
        setFilters({ ...filters, numericFilter: false });
        break;
      }
    }
  };

  useEffect(filterByName, [data, name]);

  useEffect(filterByValues, [numericFilter]);

  return [filters, setFilters];
}

export default useFiltersPlanets;
