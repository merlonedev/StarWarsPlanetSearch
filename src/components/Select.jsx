import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { PlanetContext } from '../Context/PlanetContext';

const COLUMN = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];
const COMPARISON = ['maior que', 'igual a', 'menor que'];

function SelectInput() {
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setNumber] = useState();

  const { handleFilter } = useContext(PlanetContext);

  const handleValue = ({ target: { id, value: valu } }) => {
    switch (id) {
    case 'column':
      setColumn(valu);
      break;
    case 'comparison':
      setComparison(valu);
      break;
    case 'number':
      setNumber(valu);
      break;
    default: setColumn('');
    }
  };

  const handleClick = () => {
    const filt = {
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    };
    handleFilter(filt);
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
  };

  return (
    <>
      <label htmlFor="column">
        Coluna
        <select { ...columnProps }>
          {COLUMN.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparação
        <select { ...comparisonProps }>
          {COMPARISON.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
      <input { ...numberProps } />
      <Button { ...buttonProps }>FILTRA</Button>
    </>
  );
}

export default SelectInput;
