import { useEffect, useState } from 'react';

function useFilter(planets, setPlanets) {
  const INIT = {
    filterByName: {
      name: '',
    },
  };

  const [filters, setFilters] = useState(INIT);

  function planetsByName() {
    const filter = filters.filterByName.name;
    const regex = RegExp(filter);
    if (!filter) return planets;

    planets.results = planets.results
      .filter(({ name }) => regex.test(name));
  }

  function filterPlanets() {
    planetsByName();
    setPlanets(planets);
  }

  useEffect(filterPlanets, [filters]);
  return [filters, setFilters];
}

export default useFilter;
