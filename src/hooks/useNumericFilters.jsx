import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function useNumericFilters() {
  const {
    filters: { filterByNumericValues }, setPlanets, planets,
  } = useContext(AppContext);

  const filterPlanets = () => {
    const comparisons = {
      'maior que': (col, val) => Number(col) > Number(val),
      'menor que': (col, val) => Number(col) < Number(val),
      'igual a': (col, val) => Number(col) === Number(val),
    };

    filterByNumericValues
      .forEach(({ column, comparison, value }) => setPlanets(planets
        .filter((planet) => comparisons[comparison](planet[column], value))));
  };

  return [filterPlanets];
}
