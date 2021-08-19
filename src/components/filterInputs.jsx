import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { MyContext } from '../context/Provider';
import helperToOptions from '../helper';

const FilterInputs = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValue] = useState(0);
  const { SetFilter, optionsfiltered } = useContext(MyContext);

  const handleChange = (e) => {
    const { value, name } = e;
    switch (name) {
    case 'column':
      setColumn(value);
      break;
    case 'comparison':
      setComparison(value);
      break;
    case 'value':
      setValue(value);
      break;
    default:
      setValue(0);
    }
  };

  const handleClick = () => {
    const result = {
      filterByNumericValues: [
        {
          column,
          comparison,
          valueNumber,
        },
      ],
    };
    SetFilter(result);
  };

  const inputNameProps = {
    inputProps: { 'data-testid': 'name-filter' },
    name: 'name',
    id: 'outlined-basic',
    label: 'Name',
    variant: 'outlined',
    onChange: ({ target }) => SetFilter(target),
  };

  const selectProps = {
    role: 'select',
    name: 'column',
    'data-testid': 'column-filter',
    id: 'demo-simple-select-column',
    onChange: ({ target }) => handleChange(target),
  };

  const selectComparisonProps = {
    role: 'select',
    name: 'comparison',
    'data-testid': 'comparison-filter',
    id: 'demo-simple-select-comparison',
    value: comparison,
    onChange: ({ target }) => handleChange(target),
  };

  const inputNumberProps = {
    id: 'outlined-number',
    name: 'value',
    label: 'Value',
    type: 'number',
    inputProps: { 'data-testid': 'value-filter' },
    variant: 'outlined',
    onChange: ({ target }) => handleChange(target),
  };

  const buttonProps = {
    variant: 'contained',
    name: 'button',
    type: 'button',
    'data-testid': 'button-filter',
    color: 'primary',
    onClick: () => handleClick(),
  };

  return (
    <section>
      <TextField { ...inputNameProps } />
      <label htmlFor="demo-simple-select-column">
        column
        <select { ...selectProps }>
          {optionsfiltered
            .map((e) => <option key={ e } value={ e }>{ e }</option>)}
        </select>
      </label>
      <label htmlFor="demo-simple-select-comparison">
        comparison
        <select { ...selectComparisonProps }>
          {helperToOptions.comparison
            .map((e) => <option key={ e } value={ e }>{ e }</option>)}
        </select>
      </label>
      <TextField { ...inputNumberProps } />
      <Button { ...buttonProps }>
        Filter
      </Button>
    </section>
  );
};

export default FilterInputs;
