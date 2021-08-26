import React from 'react';
import Mycontext from '../Context/MyContext';

function Input() {
  const { filterText } = React.useContext(Mycontext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (event) => filterText(event) }
    />
  );
}

export default Input;
