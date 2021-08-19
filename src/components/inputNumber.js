import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

const initialFilterState = {
  column: 'population',
  comparation: 'igual a',
  value: 0,
};

const columnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const selectedColumn = [];

const notSelected = columnList.filter((e) => !selectedColumn.includes(e));

function InputNumber() {
  const [filter, setFilter] = useState(initialFilterState);
  const [selectedFilter, setSelectedFilter] = useState(notSelected);
  const { filterNumber } = useContext(StarContext);

  function handleChange({ target }) {
    const { id, value } = target;
    setFilter({
      ...filter,
      [id]: value,
    });
  }

  function handleClick() {
    filterNumber(filter);
    selectedColumn.push(filter.column);
    const selected = columnList.filter((e) => !selectedColumn.includes(e));
    setSelectedFilter(selected);
  }

  return (
    <form>
      <label htmlFor="column">
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          { selectedFilter.map((e, i) => <option key={ i } value={ e }>{ e }</option>) }
        </select>
      </label>
      <label htmlFor="comparation">
        <select
          id="comparation"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="igual a">igual a</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          id="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default InputNumber;
