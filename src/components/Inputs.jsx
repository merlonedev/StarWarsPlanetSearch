import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { name, filterPlanet } = useContext(MyContext);

  return (
    <input
      data-testid="name-filter"
      name="name"
      type="text"
      placeholder="Procure o planeta"
      value={ name }
      onChange={ filterPlanet }
    />
  );
}

export default Input;
