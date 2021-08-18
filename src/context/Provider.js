import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'population',
      sort: 'ASC',
    }
  });

  useEffect(() => {
    const getPlanets = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(URL);
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, []);
  const contextValue = { data, filters, setFilter };
  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
