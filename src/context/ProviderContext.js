import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_FILTERS_STATE = {
  filterByName: {
    name: '',
  },
};

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [newListPlanets, setNewListPlanets] = useState([]);
  const [planetFilters, setPlanetFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);

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
            const [key, value] = planet;
            acc[key] = value;
            return acc;
          }, [])));
      setNewListPlanets(newList);
      setPlanetFilters(newList);
    };
    planetsWithoutResidentProperty();
  }, [planets]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterName = newListPlanets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    setPlanetFilters(filterName);
  }, [newListPlanets, filters]);

  const contextValue = {
    newListPlanets,
    planetFilters,
    isLoading,
    filters,
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
