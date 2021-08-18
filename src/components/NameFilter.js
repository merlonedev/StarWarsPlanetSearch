import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function NameSearch() {
  const { filters, setFilters } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <form>
      <input
        id="nameSearch"
        data-testid="name-filter"
        type="text"
        name="nameSearch"
        onChange={ handleChange }
      />
    </form>
  );
}

export default NameSearch;
