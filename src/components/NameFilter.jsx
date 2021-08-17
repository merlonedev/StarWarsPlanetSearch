import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

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
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleName } />
    </div>
  );
}

export default NameFilter;
