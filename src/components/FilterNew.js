import React from 'react';
import Context from '../context/Context';
import { SELECTION_OPTIONS, SELECTION_RANGE } from '../service/data';

export default function FilterNew() {
  const { filters, FilterByNumericValue } = React.useContext(Context);
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');
  const { column: oldColumn } = filters.filterByNumericValues[0];
  const selectOptionWithoutColumn = SELECTION_OPTIONS.filter((opt) => opt !== oldColumn);

  function handleSubmit(e) {
    e.preventDefault();
    FilterByNumericValue({ column, comparison, value });
  }
  return (
    <form>
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        {selectOptionWithoutColumn.map((option, i) => (
          <option key={ i } value={ option }>
            { option }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {SELECTION_RANGE.map((item, i) => (
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
      <button
        type="submit"
        data-testid="filter"
      >
        X
      </button>
    </form>
  );
}
