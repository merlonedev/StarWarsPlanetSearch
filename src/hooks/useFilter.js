import { useEffect, useState } from 'react';

function useFilter() {
  const INIT = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
      {
        column: 'diameter',
        comparison: 'menor que',
        value: '',
      },
    ],
  };

  const [result, setResult] = useState(planets);
  const [filters, setFilters] = useState(INIT);

  function filterPlanets() {
    const { name: filter } = filters.filterByName;
    if (filter) {
      const regex = RegExp(filter);
      setResult({
        ...planets,
        results: planets.results.filter(({ name }) => regex.test(name)),
      });
    }
    setResult(planets);
  }

  useEffect(filterPlanets, [filters]);
  return [result, setFilters];
}

export default useFilter;
