import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { MyContext } from '../context/Provider';

const FilterInputs = () => {
  const { SetFilter } = useContext(MyContext);
  const inputNameProps = {
    inputProps: { 'data-testid': 'name-filter' },
    name: 'name',
    id: 'outlined-basic',
    label: 'Name',
    variant: 'outlined',
    onChange: ({ target }) => SetFilter(target),
  };
  return (
    <section>
      <TextField { ...inputNameProps } />
    </section>
  );
};

export default FilterInputs;
