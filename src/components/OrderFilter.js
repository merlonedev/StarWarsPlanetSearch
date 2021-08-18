import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderFilter() {
  const { data, filters, setFilter } = useContext(StarWarsContext);
  const { order : { column, sort } } = filters;
  return (
    <div>
      <select
        value={ column }
        data-testid="column-sort"
        onChange={}
      >
        {data[0] && Object.keys(data[0]).map((title) => (
          <option key={ title } value={ title }>{ title }</option>
        ))}
      </select>
      <input
        name="sort"
        type="radio"
        value="ASC"
        onChange=""
        data-testid="column-sort-input-asc"
        checked
      />
      <input
        name="sort"
        type="radio"
        value="DESC"
        onChange=""
        data-testid="column-sort-input-desc"
      />
      <button
      type="button"
      data-testid="column-sort-button"
      onClick=""
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;