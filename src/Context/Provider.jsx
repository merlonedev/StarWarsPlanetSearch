import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { columns } from '../Helper';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterText, setFilterText] = useState(INITIAL_FILTER);
  const [columnState, setColumn] = useState(columns);

  const context = {
    planets,
    setPlanets,
    filterText,
    setFilterText,
    columnState,
    setColumn,
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
