import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_FILTERS_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: undefined,
};

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [newListPlanets, setNewListPlanets] = useState([]);
  const [planetFilters, setPlanetFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const handleClíckFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  useEffect(() => {
    (async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setPlanets(results);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    const planetsWithoutResidentProperty = () => {
      const newList = planets.map((planet) => Object.entries(planet)
        .filter((prop) => prop[0] !== 'residents'))
        .map((plan) => (
          plan.reduce((acc, planet) => {
            const [key, valueReduce] = planet;
            acc[key] = valueReduce;
            return acc;
          }, [])));
      setNewListPlanets(newList);
      setPlanetFilters(newList);
    };
    planetsWithoutResidentProperty();
  }, [planets]);

  useEffect(() => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    let filtersTable = newListPlanets;

    if (name !== '') {
      filtersTable = newListPlanets
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (filterByNumericValues !== undefined) {
      const { comparison: compare } = filterByNumericValues[0];
      const compareFilter = () => {
        switch (compare) {
        case 'igual a':
          filtersTable = filtersTable
            .filter((planet) => +planet[filterByNumericValues[0].column]
            === +filterByNumericValues[0].value);
          return filtersTable;
        case 'menor que':
          filtersTable = filtersTable
            .filter((planet) => +planet[filterByNumericValues[0].column]
            < +filterByNumericValues[0].value);
          return filtersTable;
        case 'maior que':
          filtersTable = filtersTable
            .filter((planet) => +planet[filterByNumericValues[0].column]
            > +filterByNumericValues[0].value);
          return filtersTable;
        default:
          return filtersTable;
        }
      };
      compareFilter();
    }
    setPlanetFilters(filtersTable);
  }, [newListPlanets, filters]);

  const contextValue = {
    newListPlanets,
    planetFilters,
    isLoading,
    filters,
    column,
    comparison,
    value,
    setValue,
    setComparison,
    setColumn,
    handleClíckFilter,
    setFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>);
}

const { oneOfType, arrayOf, node } = PropTypes;

ProviderContext.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

ProviderContext.defaultProps = {
  children: '',
};

export default ProviderContext;
