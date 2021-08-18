import { useState, useEffect } from 'react';

function usePlanetsFilter(planets) {
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const filterPlanets = () => {
      const { filterByName } = filters;
      const filterName = planets
        .filter((planet) => planet.name.includes(filterByName.name));
      setPlanetsFiltered(filterName);
    };

    filterPlanets();
  }, [filters, planets]);

  return [planetsFiltered, filters, setFilters];
}

export default usePlanetsFilter;
