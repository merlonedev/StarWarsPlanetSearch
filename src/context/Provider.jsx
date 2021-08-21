import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumericValues, setfilterNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((response) => response.json());
      const filterResults = results.filter((filter) => delete filter.residents);
      setPlanets(filterResults);
    };
    getPlanets();
  }, []);

  const value = {
    data: planets,
    filters: {
      filterName,
      filterNumericValues,
    },
    setFilterName,
    setfilterNumericValues,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
});
