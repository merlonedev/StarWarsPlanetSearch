import React, { useContext } from 'react';
import MyContext from '../context/context';

function Filter() {
  const { filters, setFilter } = useContext(MyContext);

  const filter = ({ target: { value } }) => {
    setFilter({ ...filters, filterByName: { ...filters.filterByName, name: value } });
  };

  return (
    <label htmlFor="filter">
      Filter:
      <input data-testid="name-filter" type="text" id="filter" onChange={ filter } />
    </label>
  );
}

export default Filter;
