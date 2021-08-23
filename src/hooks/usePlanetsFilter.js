import { useState, useEffect } from 'react';

function usePlanetsFilter(planets) {
  const [planetsFiltered, setPlanetfiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // tirar duvida depois com miguel;

  const propertieChecker = (propertieValue, condition, value) => {
    switch (condition) {
    case 'maior que':
      return +propertieValue > +value;
    case 'menor que':
      return +propertieValue < +value;
    default:
      return +propertieValue === +value;
    }
  };

  useEffect(() => {
    const filterPlanets = () => {
      const { filterByName, filterByNumericValues } = filters;

      const filterUsingName = planets
        .filter((planet) => planet.name.toLowerCase().includes(filterByName.name));

      const filterResult = filterUsingName.filter((planet) => {
        const planetPropertiesTest = filterByNumericValues
          .filter(({
            column,
            comparison,
            value,
          }) => propertieChecker(planet[column], comparison, value));
        return (planetPropertiesTest.length === filterByNumericValues.length);
      });
      setPlanetfiltered(filterResult);
    };
    filterPlanets();
  }, [filters, planets]);

  return [planetsFiltered, filters, setFilters];
}

export default usePlanetsFilter;
