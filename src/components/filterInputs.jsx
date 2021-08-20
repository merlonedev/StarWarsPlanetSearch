import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { MyContext } from '../context/Provider';
import ActiveFilters from './ActiveFilters';
import helperToOptions from '../helper';

const FilterInputs = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValue] = useState(0);
  const [sort, setSort] = useState();
  const [columnSort, setColumnSort] = useState();
  const { SetFilter, optionsfiltered, data, order } = useContext(MyContext);

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
    case 'order':
      setSort(value);
      break;
    case 'columnSort':
      setColumnSort(value);
      break;
    default:
      setValue(0);
    }
  };

  const handleClick = () => {
    const result = {
      column,
      comparison,
      valueNumber,
    };
    SetFilter(result);
  };

  const handleOrder = () => {
    const result = {
      column: columnSort,
      sort,
    };
    order(result);
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
      <ActiveFilters />
      <select
        onChange={ ({ target }) => handleChange(target) }
        data-testid="column-sort"
        name="columnSort"
      >
        {data ? Object.keys(data[0])
          .map((e, index) => <option key={ index }>{e}</option>) : null}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          name="order"
          type="radio"
          value="ASC"
          onChange={ ({ target }) => handleChange(target) }
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          testid="column-sort-input-desc"
          id="DESC"
          value="DESC"
          name="order"
          type="radio"
          onChange={ ({ target }) => handleChange(target) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleOrder() }
      >
        Order
      </button>
    </section>
  );
};

export default FilterInputs;
