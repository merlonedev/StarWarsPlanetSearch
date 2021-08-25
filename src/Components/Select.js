import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core/';
import { Context } from '../context/SWProvider';

const COMPARISON = ['maior que', 'igual a', 'menor que'];

function Select() {
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setNumber] = useState();

  const { handleFilter, columnArr } = useContext(Context);

  const handleValueNumber = ({ target: { id, value: valor } }) => {
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
    const filtering = {
      column,
      comparison,
      value,
    };
    handleFilter(filtering);
  };

  const columPrps = {
    id: 'column',
    value: column,
    onChange: (event) => handleValueNumber(event),
  };

  const comparisonPrps = {
    id: 'comparison',
    value: comparison,
    onChange: (event) => handleValueNumber(event),
  };

  const numberPrps = {
    id: 'number',
    type: 'number',
    value,
    onChange: (event) => handleValueNumber(event),
  };

  const buttonPrps = {
    type: 'button',
    onClick: handleClick,
  };
  return (
    <div>
      <label htmlFor="column">
        Coluna
        <select { ...columPrps } data-testid="column-filter">
          {' '}
          {columnArr
            .map((coluna) => <option value={ coluna } key={ coluna }>{coluna}</option>)}
          {' '}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparativo
        <select { ...comparisonPrps } data-testid="comparison-filter">
          {' '}
          {COMPARISON
            .map((comp) => <option value={ comp } key={ comp }>{comp}</option>)}
          {' '}
        </select>
      </label>
      <input { ...numberPrps } data-testid="value-filter" />
      <Button { ...buttonPrps } data-testid="button-filter">Filtrar</Button>
    </div>
  );
}

export default Select;
