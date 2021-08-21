// vitals
import React, { useContext } from 'react';
// context
import myContext from '../context/myContext';

function Form() {
  const { filters, setFilters } = useContext(myContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ ...filters, filterByName: value });
  }

  return (
    <input type="text" data-testid="name-filter" onChange={ handleChange } />
  );
}

export default Form;
