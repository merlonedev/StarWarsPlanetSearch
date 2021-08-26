import React from 'react';
import Mycontext from '../Context/MyContext';
import { OPTIONS, RANGE } from '../service/dados';

// ajuda do colega (André Hammel - Turma 12)
export default function NumericFilter() {
  const { receive } = React.useContext(Mycontext);
  const [coluna, setColuna] = React.useState('');
  const [comparacao, setComparacao] = React.useState('');
  const [valor, setValor] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    receive({
      coluna,
      comparacao,
      valor,
    });
  }
  return (
    <form>
      <select data-testid="column-filter" onChange={ (e) => setColuna(e.target.value) }>
        {OPTIONS.map((opt, i) => (
          <option key={ i } value={ opt }>
            {opt}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          (e) => setComparacao(e.target.value)
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
        onChange={ (e) => setValor(e.target.value) }
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
