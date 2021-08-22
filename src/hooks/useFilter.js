import { useEffect, useState } from 'react';

function useFilter(planets) {
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

  let isFiltrable;
  const [result, setResult] = useState(planets);
  const [filters, setFilters] = useState(INIT);

  function filterByName() {
    const { name: filter } = filters.filterByName;

    if (filter) {
      setResult({
        ...planets,
        results: planets.results.filter(
          ({ name }) => RegExp(filter).test(name),
        ),
      });
      return true;
    }
    return false;
  }

  function filterPlanets() {
    isFiltrable = filterByName();
    if (!isFiltrable) setResult(planets);
  }

  useEffect(filterPlanets, [filters, planets]);
  return [filters, result, setFilters];
}

export default useFilter;
