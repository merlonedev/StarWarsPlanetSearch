import { useState, useEffect } from 'react';

function usePlanetsFilter(planets) {
  const [planetsFiltered, setPlanetfiltered] = useState([]);
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
      setPlanetfiltered(filterName);
    };
    filterPlanets();
  }, [filters, planets]);

  return [planetsFiltered, filters, setFilters];
}

export default usePlanetsFilter;
