import React, { useContext } from 'react';
import starWarsContext from '../../context/StarWarsContext';

const Input = () => {
  const {
    filters: {
      filterByName: { name: filterName } },
    handleFilterName,
  } = useContext(starWarsContext);

  return (
    <label htmlFor="name-filter">
      <input
        id="name-filter"
        data-testid="name-filter"
        type="text"
        value={ filterName }
        placeholder="Name"
        onChange={ handleFilterName }
      />

    </label>
  );
};

export default Input;
