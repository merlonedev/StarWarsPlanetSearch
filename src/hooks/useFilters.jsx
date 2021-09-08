import { useContext } from 'react';
import Context from '../context/AppContext';

function useFilters() {
  const { data, filters } = useContext(Context);
  const { filterByName, filterByNumberValues, order } = filters;
  const numberFilter = (array, column, comparison, value) => (
    array.filter((planet) => {
      if (comparison === 'maior que') {
        return +planet[column] > +value;
      }
      if (comparison === 'menor que') {
        return +planet[column] < +value;
      }
      return +planet[column] === +value;
    })
  );
    // Tive muita ajuda da maravilhosa turma 12 nas lógicas deste project! <3
  const sortPlanets = (dataPlanets) => {
    const { column, sort } = order;
    switch (sort) {
    case 'ASC':
      return dataPlanets
        .sort(({ [column]: a }, { [column]: b }) => a.localeCompare(b))
        .sort((a, b) => (a[column] - b[column]));
    case 'DESC':
      return dataPlanets
        .sort(({ [column]: a }, { [column]: b }) => b.localeCompare(a))
        .sort((a, b) => b[column] - a[column]);
    default:
      return dataPlanets;
    }
  };

  const fillFilters = () => {
    let dataPlanets = [...data];
    if (filterByName.name) {
      dataPlanets = dataPlanets.filter(({ name }) => name.toLowerCase()
        .includes(filterByName.name));
    }

    if (filterByNumberValues.length > 0) {
      filterByNumberValues.forEach(({ column, comparison, value }) => {
        dataPlanets = numberFilter(dataPlanets, column, comparison, value);
      });
    }

    dataPlanets = sortPlanets(dataPlanets);
    return dataPlanets;
  };

  return {
    fillFilters,
  };
}

export default useFilters;
