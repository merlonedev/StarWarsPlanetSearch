import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { PlanetsContext } from '../context/PlanetsContext';

const Filter = () => {
  const { updateFilters } = useContext(PlanetsContext);
  return (
    <TextField
      label="Name"
      variant="outlined"
      inputProps={ { 'data-testid': 'name-filter' } }
      onChange={ ({ target }) => updateFilters(target) }
      name="filterByName"
    />
  );
};

export default Filter;
