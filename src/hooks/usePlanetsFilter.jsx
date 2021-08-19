import { useState, useEffect } from 'react';

function usePlanetsFilter(planets) {
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const removeFilter = (filterColumn) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter(({ column }) => column !== filterColumn),
    });
  };

  const propertieChecker = (propertieValue, condition, value) => {
    switch (condition) {
    case 'maior que':
      return (Number(propertieValue) > Number(value));
    case 'menor que':
      return (Number(propertieValue) < Number(value));
    default:
      return (Number(propertieValue) === Number(value));
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
      setPlanetsFiltered(filterResult);
    };

    filterPlanets();
  }, [filters, planets]);

  return [planetsFiltered, filters, setFilters, removeFilter];
}

export default usePlanetsFilter;
