import React, { useState, useEffect } from 'react';
import { arrayOf, node } from 'prop-types';
import StarContext from '../context/StarContext';
import usePlanets from '../hooks/usePlanets';

function StarProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [data, loading] = usePlanets();

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    // order: {},
  });

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].sort());

  // const [order, setOrder] = useState({});

  useEffect(() => {
    function getPlanets() {
      setPlanets(data);
    }
    getPlanets();
  }, [data]);

  function filterPlanetsByName() {
    const { filterByName } = filters;
    if (!filterByName.name.length) return setPlanets(data);
    const filtered = planets.filter(
      (e) => e.name.toLowerCase().includes(filterByName.name.toLowerCase()),
    );
    setPlanets(filtered);
  }

  function filterPlanetsByNumeric() {
    console.log('filter');
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      switch (comparison) {
      case 'maior que':
        setPlanets(
          planets.filter((p) => parseInt(p[column], 10) > parseInt(value, 10)),
        );
        break;
      case 'menor que':
        setPlanets(
          planets.filter((p) => parseInt(p[column], 10) < parseInt(value, 10)),
        );
        break;
      case 'igual a':
        setPlanets(
          planets.filter((p) => p[column] === value),
        );
        break;
      default:
        break;
      }
    });
  }

  // function sortOrder() {
  //   const { column, sort } = order;

  //   const newSort = planets.sort(({ [column]: a }, { [column]: b }) => {
  //     let comp = 0;
  //     const ONE_NEG = -1;

  //     if (a > b) {
  //       comp = 1;
  //     } else if (a < b) {
  //       comp = ONE_NEG;
  //     }

  //     return (
  //       (sort === 'DESC') ? (comp * ONE_NEG) : comp
  //     );
  //   });

  //   setPlanets(newSort);
  // }

  useEffect(filterPlanetsByName, [filters]);
  useEffect(filterPlanetsByNumeric, [filters.filterByNumericValues]);
  // useEffect(sortOrder, [order]);

  const contextValue = {
    planets,
    setPlanets,
    loading,
    filters,
    setFilters,
    columns,
    setColumns,
  };

  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
}

export default StarProvider;

StarProvider.propTypes = {
  children: arrayOf(node).isRequired,
};
