import React from 'react';
import MyContext from '../Context/MyContext';
import { OPTIONS, RANGE } from '../service/dados';

// ajuda do colega (André Hammel - Turma 12)
export default function Filter2() {
  const { filters, receive } = React.useContext(MyContext);
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');
  const { column: oldColumn } = filters.filterByNumericValues[0];
  const selectOptionSC = OPTIONS.filter((opt) => opt !== oldColumn);

  function handleSubmit(e) {
    e.preventDefault();
    receive({ column, comparison, value });
  }
  return (
    <form>
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        {selectOptionSC.map((option, i) => (
          <option key={ i } value={ option }>
            { option }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {RANGE.map((item, i) => (
          <option key={ i } value={ item }>
            { item }
          </option>))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (e) => handleSubmit(e) }
      >
        Filtrar
      </button>
    </form>
  );
}
