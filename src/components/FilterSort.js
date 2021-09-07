import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function FilterSort() {
  const { data, setFilters, filters, setData } = useContext(DataContext);
  const { order } = filters;
  const { column, sort } = order;

  const dataPlanets = [...data];

  const keysColumnSort = dataPlanets
    .map((item) => delete item.residents && Object.keys(item))[0];

  const handleChange = ({ target: { name, value } }) => setFilters({
    ...filters, order: { ...order, [name]: value },
  });

  const handleClick = () => {
    const sortDataApi = [...data];
    switch (sort) {
    case 'ASC':
      sortDataApi.sort((a, b) => a[column] - b[column]);
      break;
    case 'DESC':
      sortDataApi.sort((a, b) => b[column] - a[column]);
      break;
    default:
      break;
    }
    setData(sortDataApi);
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        name="column"
        // value={ keysColumnSort }
        onChange={ handleChange }
      >
        { keysColumnSort && keysColumnSort.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        )) }
      </select>
      <label htmlFor="sort-asc">
        Ascending
        <input
          data-testid="column-sort-input-asc"
          name="sort"
          type="radio"
          value="ASC"
          onChange={ handleChange }
        />
      </label>
      Descending
      <label htmlFor="sort-desc">
        <input
          data-testid="column-sort-input-desc"
          name="sort"
          type="radio"
          value="DESC"
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleClick }
      >
        Sort
      </button>
    </div>
  );
}

export default FilterSort;
