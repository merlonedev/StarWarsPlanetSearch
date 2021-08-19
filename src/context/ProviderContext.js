import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [newListPlanets, setNewListPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    };
    planetsWithoutResidentProperty();
  }, [planets]);

  const contextValue = {
    newListPlanets,
    isLoading,
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
