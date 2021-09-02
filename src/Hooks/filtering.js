import { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const useFiltering = () => {
  const { data, filters } = useContext(StarWarsContext);
  const [filtered, setFiltered] = useState(data);

  const filterByName = () => {
    const { name } = filters.filterByName;
    let filteredByName = data;
    if (filtered.length > 0) { filteredByName = filtered; }
    if (filters.filterByNumericValues.length === 1) { filteredByName = data; }
    if (name !== '') {
      filteredByName = data.filter((planet) => (planet.name)
        .toLowerCase().includes(name));
    }

    return filteredByName;
  };

  const applyFilters = () => {
    const filteredByName = filterByName();
    if (filters.filterByNumericValues !== undefined) {
      filters.filterByNumericValues.map((el) => {
        const { column } = el;
        const { comparison } = el;
        const { value } = el;
        const filteredByValue = (value !== 0 && column !== '' && comparison !== '')
          ? filteredByName.filter((planet) => {
            if (comparison === 'maior que') {
              return parseFloat(planet[column])
            > parseFloat(value);
            }
            if (comparison === 'igual a') {
              return parseFloat(planet[column]) === parseFloat(value);
            }
            return parseFloat(planet[column]) < parseFloat(value);
          })
          : filteredByName;
        return setFiltered(filteredByValue);
      });
    }
  };

  useEffect(applyFilters, [data, filters.filterByNumericValues, filters.filterByName]);

  return filtered;
};

export default useFiltering;
