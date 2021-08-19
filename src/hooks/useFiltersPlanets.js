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
};

const greaterThen = 'maior que';
const lessThan = 'menor que';

function useFiltersPlanets() {
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const [numericFilter, setNumericFilter] = useState(false);
  const [searchNumericFilter, setSearchNumericFilter] = useState(false);
  const [filtering, setFiltering] = useState([false]);
  const { data, setFilteredPlanets } = useContext(PlanetsContext);
  const {
    filterByName: { name },
    filterByNumericValues: [{ column, comparison, value }],
  } = filters;

  useEffect(() => {
    const filterByName = (searchNumericFilter ? filtering : data)
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
    setFilteredPlanets(filterByName);
  }, [data, filtering, name, searchNumericFilter, setFilteredPlanets]);

  useEffect(() => {
    const filterByName = data
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
    const filterByValues = () => {
      setSearchNumericFilter(true);
      const filterByValuesGreaterThen = filterByName
        .filter((planet) => Number(planet[column]) > Number(value));
      const filterByValuesLessThan = filterByName
        .filter((planet) => Number(planet[column]) < Number(value));
      const filterByValuesEqualTo = filterByName
        .filter((planet) => Number(planet[column]) === Number(value));
      switch (comparison) {
      case greaterThen:
        setFilteredPlanets(filterByValuesGreaterThen);
        setFiltering(filterByValuesGreaterThen);
        setNumericFilter(false);
        break;
      case lessThan:
        setFilteredPlanets(filterByValuesLessThan);
        setFiltering(filterByValuesLessThan);
        setNumericFilter(false);
        break;
      default:
        setFilteredPlanets(filterByValuesEqualTo);
        setFiltering(filterByValuesEqualTo);
        setNumericFilter(false);
        break;
      }
    };
    if (numericFilter) filterByValues();
  }, [column, comparison, data, name, numericFilter, setFilteredPlanets, value]);

  return [filters, setFilters, setNumericFilter];
}

export default useFiltersPlanets;
