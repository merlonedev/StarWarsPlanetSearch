import React, { useContext } from 'react';
import Select from './Select';
import Input from './Input';
import MyContext from '../context/MyContext';

function NumericFilter() {
  const { setColumn, setComparison,
    setValue, handleFilterByNumericValues } = useContext(MyContext);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const faixas = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <Select
        id="column-filter"
        labelText="Selecione a coluna"
        options={ columns }
        onChange={ ({ target }) => { setColumn(target.value); } }
      />
      <Select
        id="comparison-filter"
        labelText="Faixa de valor"
        options={ faixas }
        onChange={ ({ target }) => setComparison(target.value) }
      />
      <Input
        id="value-filter"
        labelName="Insira um valor"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterByNumericValues }
      >
        Filtrar por valor
      </button>
    </div>
  );
}

export default NumericFilter;
