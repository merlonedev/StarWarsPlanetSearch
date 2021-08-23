import { useEffect, useState } from 'react';

function useFilter(planets) {
  const INIT = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [result, setResult] = useState(planets);
  const [filters, setFilters] = useState(INIT);

  function filterByName() {
    const { name: filterName } = filters.filterByName;
    if (filterName) {
      return {
        ...planets,
        results: planets.results.filter(
          ({ name }) => RegExp(filterName).test(name),
        ),
      };
    }
    return planets;
  }

  function filterByRules(data) {
    const { filterByNumericValues: rules } = filters;
    const { results } = data;

    if (rules.length > 0) {
      const filtered = results.filter((planet) => (
        rules.every(({ column, comparison, value }) => {
          column = Number(planet[column]);
          value = Number(value);
          switch (comparison) {
          case 'maior que':
            return column > value;
          case 'menor que':
            return column < value;
          case 'igual a':
            return column === value;
          default:
            return false;
          }
        })
      ));

      return { ...data, results: filtered };
    }
    return data;
  }

  function filterPlanets() {
    let data = filterByName();
    data = filterByRules(data);
    setResult(data);
  }

  useEffect(filterPlanets, [filters, planets]);
  return [filters, result, setFilters];
}

export default useFilter;
