import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Filters() {
  const { setFilters } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilters(value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name-filter"
        onChange={ (value) => handleChange(value) }
      />
    </div>
  );
}

export default Filters;
