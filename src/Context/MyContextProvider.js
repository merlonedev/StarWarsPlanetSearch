import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [state, setState] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const [data, setData] = useState([]);

  const context = {
    state,
    setState,
    data,
    setData,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
