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
  numericFilter: false,
  reset: false,
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
    reset,
  } = filters;

  const filterByName = () => {
    const planets = filtering.length ? filtering : data;
    const filter = planets
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
    setFilteredPlanets(filter);
  };

  const filterByValues = () => {
    if (numericFilter || reset) {
      const planets = filtering.length && filterByNumericValues.length
        ? filtering : data;

      const searchByName = planets
        .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));

      if (!filterByNumericValues.length) {
        setFilteredPlanets(searchByName);
        setFiltering(searchByName);
        return setFilters({ ...filters, numericFilter: false, reset: false });
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
          setFilteredPlanets(filterByValuesGreaterThen);
          setFiltering(filterByValuesGreaterThen);
          break;
        case lessThan:
          setFilteredPlanets(filterByValuesLessThan);
          setFiltering(filterByValuesLessThan);
          break;
        default:
          setFilteredPlanets(filterByValuesEqualTo);
          setFiltering(filterByValuesEqualTo);
          break;
        }
      });
      setFilters({ ...filters, numericFilter: false, reset: false });
    }
  };

  useEffect(filterByName, [data, name]);

  useEffect(filterByValues, [numericFilter, reset]);

  return [filters, setFilters];
}

export default useFiltersPlanets;
