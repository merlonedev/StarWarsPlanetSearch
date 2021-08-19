import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../../context/StarWarsPlanetsContext';

const SearchInput = () => {
  const {
    filters: { filterByName: { name } }, setInput,
  } = useContext(StarWarsPlanetsContext);

  const handleInput = ({ target }) => {
    const { value } = target;
    setInput(value);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ handleInput }
    />
  );
};
export default SearchInput;
