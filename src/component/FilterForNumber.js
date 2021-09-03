import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';

function FilterForNumber () {
  const { filter, setFilter } = useContext(ContextApi);
  const columnOptions = ({ target: { value } }) => {
    setFilter({ ...filter, comparison: value, filtersOn: false, ConlumnChange: false });
  };
  return (
  );
}

export default FilterForNumber;
