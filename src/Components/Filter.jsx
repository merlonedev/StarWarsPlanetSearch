import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import { filterState } from '../Context/Provider';
import { columns, comparison } from '../Helper';

const Filter = () => {
  const {
    filterText,
    setFilterText,
    setFiltered,
    filtered,
  } = useContext(MyContext);

  const { filters } = filterText;
  // const {filterByNumericValues} = filters;
  const handleInput = ({ target }) => {
    setFilterText({
      filters: {
        ...filters, filterByName: { name: target.value } },
    });
  };

  const handleClick = async () => {
    await setFilterText({
      filters: {
        ...filters,
        filterByNumericValues: [
          // ...filterByNumericValues,
          filtered,
        ],
      },
    });
    await setFiltered(filterState);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleInput }
      />

      <select
        value={ filtered.column }
        data-testid="column-filter"
        onChange={
          ({ target: { value } }) => setFiltered({ ...filtered, column: value })
        }
      >
        {columns.map(
          (column) => <option key={ column }>{column}</option>,
        )}
      </select>

      <select
        value={ filtered.comparison }
        data-testid="comparison-filter"
        onChange={
          ({ target: { value } }) => setFiltered({ ...filtered, comparison: value })
        }
      >
        {comparison.map(
          (compar) => <option key={ compar }>{compar}</option>,
        )}
      </select>

      <input
        type="number"
        value={ filtered.value }
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setFiltered({ ...filtered, value }) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};
export default Filter;
