import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    filtered: false,
  });

  const [data, setData] = useState([]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setFilters({ ...filters, filterByName: { [name]: value } });
  };

  const handleClickFilter = (filter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filter }, ...filters.filterByNumericValues],
      filtered: true,
    });
  };

  const context = {
    filters,
    setFilters,
    data,
    setData,
    onChangeHandler,
    handleClickFilter,
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
