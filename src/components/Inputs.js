import React from 'react';
import { MyContextInput } from './MyProvider';

function Input() {
  const { handleFilter } = MyContextInput;

  return (
    <div>
      <input
      type="text"
      data-testid="name-filter"
      onChange={ handleFilter }
      placeholder="Search a Planet"
    />
    </div>
  )
}

export default Input;