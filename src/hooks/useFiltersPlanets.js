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

function useFiltersPlanets() {
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const { data, setFilteredPlanets } = useContext(PlanetsContext);
  const {
    filterByName: { name },
    // filterByNumericValues: [{ column, comparison, value }],
  } = filters;

  useEffect(() => {
    const filterByName = () => data
      .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()));
    setFilteredPlanets(filterByName());
  }, [data, filters, name, setFilteredPlanets]);

  return [filters, setFilters];
}

export default useFiltersPlanets;
