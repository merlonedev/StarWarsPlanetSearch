import React, { useContext, useState } from 'react';
import Context from '../context';
import { orderColumns } from '../utils';

function Order() {
  const { setFilters } = useContext(Context);

  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const handleChange = ({ target: { name, value } }) => {
    setOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (orderFilter) => {
    setFilters((prevOrder) => ({
      ...prevOrder,
      order: { ...orderFilter },
    }));
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-sort"
        value={ order.column }
        onChange={ (e) => handleChange(e) }
      >
        {orderColumns.map((column, i) => (
          <option key={ i } value={ column }>{ column }</option>
        ))}
      </select>

      <label htmlFor="asc-input">
        Crescente
        <input
          name="sort"
          value="ASC"
          type="radio"
          id="asc-input"
          onChange={ (e) => handleChange(e) }
          data-testid="column-sort-input-asc"
          checked={ order.sort === 'ASC' }
        />
      </label>

      <label htmlFor="desc-input">
        Decrescente
        <input
          name="sort"
          value="DESC"
          type="radio"
          id="desc-input"
          onChange={ (e) => handleChange(e) }
          data-testid="column-sort-input-desc"
          checked={ order.sort === 'DESC' }
        />
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleClick(order) }
      >
        Order
      </button>
    </div>
  );
}

export default Order;
