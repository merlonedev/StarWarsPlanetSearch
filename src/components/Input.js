import React, { useContext } from 'react';
import MyContext from '../context/context';

function Input() {
  const { name, filterName } = useContext(MyContext);

  return (
    <input
      data-testid="name-filter"
      name="name"
      type="text"
      value={ name }
      onChange={ filterName }
    />
  );
}

export default Input;
