import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

export const filterState = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterText, setFilterText] = useState(INITIAL_FILTER);
  const [filtered, setFiltered] = useState(filterState);

  const context = {
    planets,
    setPlanets,
    filterText,
    setFilterText,
    setFiltered,
    filtered,
  };
  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
