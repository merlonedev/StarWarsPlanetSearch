import React, { useContext } from 'react';
import Context from '../../context/Context';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import UsedFilters from './UsedFilters';

const Filters = () => {
  const { filters: { filterByNumericValue } } = useContext(Context);

  return (
    <div>
      <FilterByName />
      <FilterByNumericValues />
      { filterByNumericValue.length > 0 && <UsedFilters />}
    </div>
  );
};

export default Filters;
