import React from 'react';
import Mycontext from '../Context/MyContext';

function Input() {
  const { teste } = React.useContext(Mycontext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (event) => teste(event) }
    />
  );
}

export default Input;
