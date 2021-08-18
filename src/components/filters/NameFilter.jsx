import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function NameFilter() {
  const { filters, setFilters } = useContext(AppContext);

  const handleName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };
  return (
    <label htmlFor="name-filter">
      Nome
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        onChange={ handleName }
      />
    </label>
  );
}

export default NameFilter;
