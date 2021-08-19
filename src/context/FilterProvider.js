import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';
import useData from '../hooks/useData';

function FilterProvider({ children }) {
  const [planets, tableHeadData] = useData();
  const [name, setName] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const addFilter = (newFilter) => setNumericFilters(
    [...numericFilters, newFilter],
  );

  const rmvFilter = (removed) => setNumericFilters(
    [...numericFilters.filter((filter) => filter.column !== removed.column)],
  );

  const handleOrder = (params) => setOrder({ ...params });

  const value = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: numericFilters,
      order,
    },
    data: {
      planets,
      tableHeadData,
    },
    addFilter,
    rmvFilter,
    handleOrder,
    setName,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.node,
    propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default FilterProvider;
