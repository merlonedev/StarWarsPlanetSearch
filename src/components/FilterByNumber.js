import React from 'react';
import Context from '../context/Context';
import { selectOptions, range } from '../service/data';

export default function FilterByNumber() {
  const { getValuesNumeric } = React.useContext(Context);
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    getValuesNumeric({ column, comparison, value });
  }

  return (
    <form>
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        {selectOptions.map((option, i) => (
          <option key={ i } value={ option }>
            { option }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {range.map((item, i) => (
          <option key={ i } value={ item }>
            { item }
          </option>))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
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
