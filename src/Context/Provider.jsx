import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  },
};

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterText, setFilterText] = useState(INITIAL_FILTER);
  const [shouldFilter, setShouldFilter] = useState(false);

  const context = {
    planets,
    setPlanets,
    filterText,
    setFilterText,
    shouldFilter,
    setShouldFilter,
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
