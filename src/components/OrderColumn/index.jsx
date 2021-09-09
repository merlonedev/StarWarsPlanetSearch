import React, { useContext } from 'react';
import MyContext from '../../context';

const OrderColumn = () => {
  const { filters, setFilter, data, setData } = useContext(MyContext);
  const { order } = filters;
  const { column, sort } = order;

  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
    'climate',
    'terrain',
  ];

  const handleOrder = ({ target: { name, value } }) => {
    setFilter({
      ...filters,
      order: { ...order, [name]: value },
    });
    console.log(filters.order);
  };

  const clickOrder = () => {
    const numberOneNegative = -1;
    const dataCopy = [...data];
    if (sort === 'ASC') {
      dataCopy.sort(
        (a, b) => (a[column] > b[column] ? 1 : numberOneNegative),
      ).sort(
        (a, b) => (a[column] - b[column]),
      );
    }

    if (sort === 'DESC') {
      dataCopy.sort(
        (a, b) => (b[column] > a[column] ? 1 : numberOneNegative),
      ).sort(
        (a, b) => (b[column] - a[column]),
      );
    }

    setData(dataCopy);
  };

  return (
    <form>
      <label htmlFor="column-sort">
        Order
        <select
          name="column"
          value={ column }
          onChange={ handleOrder }
          data-testid="column-sort"
        >
          {
            columns.map((col, index) => (
              <option key={ index } value={ col }>{col}</option>))
          }
        </select>
      </label>

      <label htmlFor="column-sort-input-asc">
        asc
        <input
          name="sort"
          value="ASC"
          type="radio"
          checked={ sort === 'ASC' }
          onChange={ handleOrder }
          data-testid="column-sort-input-asc"
        />
      </label>

      <label htmlFor="column-sort-input-desc">
        desc
        <input
          name="sort"
          value="DESC"
          type="radio"
          checked={ sort === 'DESC' }
          onChange={ handleOrder }
          data-testid="column-sort-input-desc"
        />
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ clickOrder }
      >
        Ordenar
      </button>

    </form>

  );
};

export default OrderColumn;
