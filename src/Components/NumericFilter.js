import React from 'react';
import Mycontext from '../Context/MyContext';
import { OPTIONS, RANGE } from '../service/dados';

// ajuda do colega (André Hammel - Turma 12)
export default function NumericFilter() {
  const { receive, filter2 } = React.useContext(Mycontext);
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    receive({
      column,
      comparison,
      value,
    });
  }
  return (
    <form>
      <select
        data-testid={ filter2 ? '' : 'column-filter' }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {OPTIONS.map((option, i) => (
          <option key={ i } value={ option }>
            { option }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          (e) => setComparison(e.target.value)
        }
      >
        {RANGE.map((item, i) => (
          <option key={ i } value={ item }>
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="submit"
        onClick={ (e) => handleSubmit(e) }
      >
        Filtro
      </button>
    </form>
  );
}
