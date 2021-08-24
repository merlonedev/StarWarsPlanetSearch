import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

function Inputs() {
  const { filters, handleClick, handleChangeName, columns } = useContext(MyContext);
  const {
    filterByName: { name },
  } = filters;

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  return (
    <form>
      <label htmlFor="searchName">
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          placeholder="Filtrar por nome"
          value={ name }
          onChange={ handleChangeName }
        />
      </label>
      <label htmlFor="filterColumn">
        <select
          data-testid="column-filter"
          name="column"
          id="filterColumn"
          value={ column }
          onChange={ ({ target: { value: valueColumn } }) => setColumn(valueColumn) }
        >
          {columns.map((item) => <option key={ item } value={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="filterComparison">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="filterComparison"
          value={ comparison }
          onChange={ ({ target: { value: valueComparison },
          }) => setComparison(valueComparison) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="filterValue">
        <input
          data-testid="value-filter"
          name="value"
          type="number"
          placeholder="Digite um número"
          value={ value }
          onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { handleClick({ column, comparison, value }); } }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Inputs;
