import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const InputFilters = () => {
  const { handleChange } = useContext(AppContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </div>
  );
};

export default InputFilters;
