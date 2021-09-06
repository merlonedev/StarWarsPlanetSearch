import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    name: '',
  });

  const [data, setData] = useState([]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };

  const context = {
    filters,
    setFilters,
    data,
    setData,
    onChangeHandler,
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
