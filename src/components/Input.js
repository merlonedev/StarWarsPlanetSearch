import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { filters: { filteredByName: { name } }, setName } = useContext(MyContext);
  return (
    <div>
      <span>Buscar:  </span>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ (event) => setName(event.target.value) }
      />
    </div>
  );
}

export default Input;
