import React, { useContext, useState } from 'react';
import Context from '../../context/Context';

const OrderData = () => {
  const { data, setOrder } = useContext(Context);
  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');

  const keys = data[0] ? Object.keys(data[0]) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({
      column,
      sort,
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <p>Order Columns</p>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {
          keys.map((key) => <option key={ key }>{ key }</option>)
        }
      </select>
      <label htmlFor="upward" className="order-type">
        Upward
        <input
          type="radio"
          name="order-type"
          value="ASC"
          id="upward"
          data-testid="column-sort-input-asc"
          onChange={ ({ target: { value } }) => setSort(value) }
          checked={ sort === 'ASC' }
        />
      </label>
      <label htmlFor="downward" className="order-type">
        Downward
        <input
          type="radio"
          name="order-type"
          value="DESC"
          id="downward"
          data-testid="column-sort-input-desc"
          onChange={ ({ target: { value } }) => setSort(value) }
          checked={ sort === 'DESC' }
        />
      </label>
      <button type="submit" data-testid="column-sort-button">Order</button>
    </form>
  );
};

export default OrderData;
