import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { PlanetContext } from '../Context/PlanetContext';

function Input() {
  const { handleFilter } = useContext(PlanetContext);
  const props = {
    name: 'name',
    inputProps: {
      'data-testid': 'name-filter',
    },
    id: 'outlined-basic',
    label: 'Name Filter',
    variant: 'outlined',
    onChange: (event) => handleFilter(event),
  };

  return (
    <TextField { ...props } />
  );
}

export default Input;
