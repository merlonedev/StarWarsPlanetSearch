import React, { useState, useContext } from 'react';
import { CONDITION, PROPERTY } from '../service/dados';
import MyContext from '../context/MyContext';

function SecondFilter() {
  const context = useContext(MyContext);
  const { filterByNumber, filters } = context;
  const [column, setColumn] = useState('');
  const { column: firstColum } = filters.filterByNumericValues[0];
  const noColum = PROPERTY.filter((opt) => opt !== firstColum);
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    filterByNumber({
      column,
      comparison,
      value,
    });
  }
  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >

        {noColum
          .map((item, index) => <option key={ index } value={ item }>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {CONDITION.map((opt, i) => <option key={ i } value={ opt }>{ opt }</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (event) => handleSubmit(event) }
      >
        Filtro
      </button>
    </form>
  );
}

export default SecondFilter;
