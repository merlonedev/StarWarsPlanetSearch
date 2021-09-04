import React, { useState, useContext } from 'react';
import ContextApi from '../Context/ContextApi';

export default function SelectTable() {
  const [selected, setSelected] = useState({ column: 'Name', sort: 'ASC' });
  const { filter, setFilter, options } = useContext(ContextApi);

  const updateSelect = ({ target: { name, value } }) => {
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const updateFilter = () => {
    const newFilter = {
      ...filter,
      order: selected,
    };
    setFilter(newFilter);
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ updateSelect }
        name="column"
      >
        <option>Name</option>
        {
          options.ORIGINAL_COLUMN_OPTIONS
            .map((option, index) => <option key={ index }>{option}</option>)
        }
      </select>
      <div onChange={ updateSelect }>
        <label htmlFor="ascId">
          Ascendente
          <input
            type="radio"
            id="ascId"
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="descId">
          Descendente
          <input
            type="radio"
            id="descId"
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ updateFilter }
      >
        Adidionar
      </button>
    </div>
  );
}
