import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderFilter() {
  const { data, filters, setFilter } = useContext(StarWarsContext);
  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: '',
  });

  const orderFilterOnChangeHandle = ({ target: { name, value } }) => {
    setOrderFilter({
      ...orderFilter,
      [name]: value,
    });
  };

  const onClickHandle = () => {
    setFilter({
      ...filters,
      order: orderFilter,
    });
  }

  return (
    <div>
      <select
        name="column"
        value={ orderFilter.column }
        data-testid="column-sort"
        onChange={orderFilterOnChangeHandle}
      >
        {data[0] && Object.keys(data[0]).map((title) => (
          <option key={ title } value={ title }>{ title }</option>
        ))}
      </select>
      <input
        id="radio-ASC"
        name="sort"
        type="radio"
        value="ASC"
        onChange={orderFilterOnChangeHandle}
        data-testid="column-sort-input-asc"
      />
      <label htmlFor="radio-ASC">Ascendente</label>
      <input
        id="radio-DESC"
        name="sort"
        type="radio"
        value="DESC"
        onChange={orderFilterOnChangeHandle}
        data-testid="column-sort-input-desc"
      />
      <label htmlFor="radio-DESC">Descendente</label>
      <button
      type="button"
      data-testid="column-sort-button"
      onClick={ onClickHandle }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;
