import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { buscador, setBuscador } = useContext(MyContext);
  return (
    <div>
      <span>Buscar:  </span>
      <input
        type="text"
        data-testid="name-filter"
        value={ buscador }
        onChange={ (event) => setBuscador(event.target.value) }
      />
    </div>
  );
}

export default Input;
