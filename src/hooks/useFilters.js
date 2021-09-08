import { useContext } from 'react';
import MyContext from '../MyContext';
import usePlanets from './usePlanets';

function useFilters() {
  const { state: { numericFilters } } = useContext(MyContext);
  const [planets] = usePlanets();

  const handleFilter = () => {
    let planetsCopy = planets;
    numericFilters.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        planetsCopy = planetsCopy.filter((planet) => (
          parseInt(planet[filter.column], 10) > parseInt(filter.value, 10)
        ));
        console.log(filter.value);
      } if (filter.comparison === 'menor que') {
        planetsCopy = planetsCopy.filter((planet) => (
          parseInt(planet[filter.column], 10) < parseInt(filter.value, 10)
        ));
        console.log(filter.value);
      } if (filter.comparison === 'igual a') {
        planetsCopy = planetsCopy.filter((planet) => (
          parseInt(planet[filter.column], 10) === parseInt(filter.value, 10)
        ));
        console.log(filter.value);
      }
    });

    return planetsCopy;
  };

  return [handleFilter];
}
export default useFilters;
