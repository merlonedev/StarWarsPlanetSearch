import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { Context } from '../Context/Context';

function Input() {
  const { handleChange } = useContext(Context);
  const props = {
    name: 'name',
    inputProps: {
      'data-testid': 'name-filter',
    },
    id: 'outlined-basic',
    label: 'Filter planets by name',
    variant: 'outlined',
    onChange: (event) => handleChange(event),
  };

  return (
    <TextField { ...props } />
  );
}

export default Input;
