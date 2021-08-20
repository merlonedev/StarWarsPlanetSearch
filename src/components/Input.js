import React, { useContext } from 'react';
import MyContext from '../context/context';

function Input() {
  const { filterName } = useContext(MyContext);

  return (
    <input
      data-testid="name-filter"
      name="name"
      type="text"
      onChange={ filterName }
    />
  );
}

export default Input;
