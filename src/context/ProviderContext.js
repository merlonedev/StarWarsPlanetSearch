import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_FILTERS_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

const INITIAL_OPT_PROP_STATE = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const INITIAL_OPT_COMPAR_STATE = [
  'maior que',
  'menor que',
  'igual a',
];

const NUMBER_ONE = 1;
const NUMBER_ONE_NEGATIVE = -1;

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [newListPlanets, setNewListPlanets] = useState([]);
  const [planetFilters, setPlanetFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [optionsComparation, setOptionsComparation] = useState(INITIAL_OPT_COMPAR_STATE);
  const [optionsProperties, setOptionsProperties] = useState(INITIAL_OPT_PROP_STATE);
  const [orderColumn, setOrderColumn] = useState('name');
  const [orderRadios, setOrderRadios] = useState('ASC');

  const { filterByNumericValues, order: { column: sortColumn, sort } } = filters;

  const handleClíckFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });

    const filterCollumn = optionsProperties
      .filter((option) => option !== column);
    setOptionsProperties(filterCollumn);

    const filterComparison = optionsComparation
      .filter((option) => option !== comparison);
    setOptionsComparation(filterComparison);

    setValue('');
  };

  const handleClickOrder = () => {
    setFilters({
      ...filters,
      order: {
        column: orderColumn,
        sort: orderRadios,
      },
    });
  };

  const sortASC = (paramColumn, list) => list.sort((a, b) => {
    if (a[paramColumn] > b[paramColumn]) {
      return NUMBER_ONE;
    }
    if (a[paramColumn] < b[paramColumn]) {
      return NUMBER_ONE_NEGATIVE;
    }
    return 0;
  });

  const sortDESC = (paramColumn, list) => list.sort((b, a) => {
    if (a[paramColumn] < b[paramColumn]) {
      return NUMBER_ONE_NEGATIVE;
    }
    if (a[paramColumn] > b[paramColumn]) {
      return NUMBER_ONE;
    }
    return 0;
  });

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

      if (sort === 'ASC') {
        setNewListPlanets(sortASC(sortColumn, newList));
        setPlanetFilters(sortASC(sortColumn, newList));
      } else {
        setNewListPlanets(sortDESC(sortColumn, newList));
        setPlanetFilters(sortDESC(sortColumn, newList));
      }
    };
    planetsWithoutResidentProperty();
  }, [planets, sortColumn, sort]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    let filtersTable = newListPlanets;

    if (name !== '') {
      filtersTable = newListPlanets
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (filterByNumericValues.length > 0) {
      const compareFilter = () => {
        const compareMap = filterByNumericValues
          .map(({ comparison: comparisonMap, value: valueMap, column: columnMap }) => {
            switch (comparisonMap) {
            case 'igual a':
              filtersTable = filtersTable
                .filter((planet) => +planet[columnMap]
                === +valueMap);
              return filtersTable;
            case 'menor que':
              filtersTable = filtersTable
                .filter((planet) => +planet[columnMap]
                < +valueMap);
              return filtersTable;
            case 'maior que':
              filtersTable = filtersTable
                .filter((planet) => +planet[columnMap]
                > +valueMap);
              return filtersTable;
            default:
              return filtersTable;
            }
          });
        return compareMap;
      };
      compareFilter();
    }
    setPlanetFilters(filtersTable);
  }, [newListPlanets, filters, filterByNumericValues]);

  const contextValue = {
    newListPlanets,
    planetFilters,
    isLoading,
    filters,
    column,
    comparison,
    value,
    optionsComparation,
    optionsProperties,
    orderColumn,
    orderRadios,
    setOrderRadios,
    setOrderColumn,
    setValue,
    setComparison,
    setColumn,
    handleClíckFilter,
    setFilters,
    handleClickOrder,
    INITIAL_FILTERS_STATE,
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
