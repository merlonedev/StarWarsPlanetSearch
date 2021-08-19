import React, { useContext, useState } from 'react';
import MyContext from '../context/context';

const orderObj = {
  column: 'name',
  sort: 'ASC',
};

function Sort() {
  const { filters, setFilter, data } = useContext(MyContext);
  const [itemSorted, setItemSorted] = useState(orderObj);
  const keys = data.length ? Object.keys(data[0]) : [];

  const handleChange = ({ target: { name, value } }) => {
    setItemSorted({ ...itemSorted, [name]: value });
  };

  const handleClick = () => {
    setFilter({ ...filters, order: itemSorted });
  };

  return (
    <div>
      <label htmlFor="column">
        Column:
        <select
          id="column"
          name="column"
          data-testid="column-sort"
          onChange={ handleChange }
        >
          { keys.map((item) => <option key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          onClick={ handleChange }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          id="DESC"
          name="sort"
          type="radio"
          value="DESC"
          onClick={ handleChange }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Sort
      </button>
    </div>
  );
}

export default Sort;
