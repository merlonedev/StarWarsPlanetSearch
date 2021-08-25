import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { Context } from '../Context/Context';
import Remove from './Remove';

const COMPARISON = ['maior que', 'igual a', 'menor que'];

function Select() {
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setNumber] = useState();

  const {
    handleChange,
    columnArray,
    filter: { filterByNumericValues },
  } = useContext(Context);

  const handleValue = ({ target: { id, value: valor } }) => {
    switch (id) {
    case 'column':
      setColumn(valor);
      break;
    case 'comparison':
      setComparison(valor);
      break;
    case 'number':
      setNumber(valor);
      break;
    default: setColumn('');
    }
  };

  const handleClick = () => {
    const filt = {
      column,
      comparison,
      value,
    };
    handleChange(filt);
  };

  const columnProps = {
    id: 'column',
    'data-testid': 'column-filter',
    value: column,
    onChange: (event) => handleValue(event),
  };

  const comparisonProps = {
    id: 'comparison',
    'data-testid': 'comparison-filter',
    value: comparison,
    onChange: (event) => handleValue(event),
  };

  const numberProps = {
    id: 'number',
    'data-testid': 'value-filter',
    type: 'number',
    placeholder: 'put a number',
    value,
    onChange: (event) => handleValue(event),
  };

  const buttonProps = {
    'data-testid': 'button-filter',
    type: 'button',
    onClick: handleClick,
    variant: 'contained',
    color: 'primary',
  };

  return (
    <>
      <label htmlFor="column">
        Coluna
        <select { ...columnProps }>
          {columnArray.map((item) => <option value={ item } key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparação
        <select { ...comparisonProps }>
          {COMPARISON.map((item) => <option value={ item } key={ item }>{item}</option>)}
        </select>
      </label>
      <input { ...numberProps } />
      <Button { ...buttonProps }>FILTRAR</Button>
      {filterByNumericValues.map(({ column: coluna }) => <Remove key={ coluna } />)}
    </>
  );
}

export default Select;
