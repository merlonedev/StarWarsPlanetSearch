import { useContext } from 'react';
import Context from '../context/Context';

function useFilters() {
  const { data, filters } = useContext(Context);
  const { filterByName, filterByNumericValues, order } = filters;
  // const MINUS_ONE = -1;
  // Operador + antes de um valor retorna a versão númerica do mesmo.
  // CRÉDITOS:: Roberval Filho;
  const numericFilter = (array, column, comparison, value) => (
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

  // CRÉDITOS:: Roberval Filho;
  /* const sortASC = (a, b, column) => {
    if (!Number.isNaN(+a[column])) {
      if (+a[column] > +b[column]) return 1;
      if (+a[column] < +b[column]) return MINUS_ONE;
    }
    if (Number.isNaN(+a[column])) {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return MINUS_ONE;
    }
    return 0;
  };
  // CRÉDITOS:: Roberval Filho;
  const sortDESC = (a, b, column) => {
    if (!Number.isNaN(+a[column])) {
      if (+a[column] < +b[column]) return 1;
      if (+a[column] > +b[column]) return MINUS_ONE;
    }
    if (Number.isNaN(+a[column])) {
      if (a[column] < b[column]) return 1;
      if (a[column] > b[column]) return MINUS_ONE;
    }
    return 0;
  };
  */
  const sortPlanets = (dataPlanets) => {
    const { column, sort } = order;
    switch (sort) {
    case 'ASC':
      return dataPlanets
        .sort(({ [column]: a }, { [column]: b }) => a.localeCompare(b))
        .sort((a, b) => (a[column] - b[column]));
      // dataPlanets.sort((a, b) => sortASC(a, b, column));
    case 'DESC':
      return dataPlanets
        .sort(({ [column]: a }, { [column]: b }) => b.localeCompare(a))
        .sort((a, b) => b[column] - a[column]);
      // dataPlanets.sort((a, b) => sortDESC(a, b, column));
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

    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        dataPlanets = numericFilter(dataPlanets, column, comparison, value);
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
