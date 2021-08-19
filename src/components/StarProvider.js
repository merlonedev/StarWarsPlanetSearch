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
  });

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].sort());

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
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      switch (comparison) {
      case 'maior que':
        setPlanets(
          data.filter((p) => parseInt(p[column], 10) > parseInt(value, 10)),
        );
        break;
      case 'menor que':
        setPlanets(
          data.filter((p) => parseInt(p[column], 10) < parseInt(value, 10)),
        );
        break;
      case 'igual a':
        setPlanets(
          data.filter((p) => p[column] === value),
        );
        break;
      default:
        break;
      }
    });
  }

  useEffect(filterPlanetsByName, [filters]);
  useEffect(filterPlanetsByNumeric, [filters.filterByNumericValues]);

  const contextValue = {
    planets,
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
