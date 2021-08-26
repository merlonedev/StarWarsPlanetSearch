import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/MyContext';
import { comparison } from '../Helper';

const Filter = () => {
  const {
    filterText,
    setFilterText,
    columnState,
    setColumn,
  } = useContext(MyContext);

  const filterState = {
    column: columnState[0],
    comparison: 'maior que',
    value: 0,
  };
  const [filtered, setFiltered] = useState(filterState);

  const { filters } = filterText;
  const { filterByNumericValues } = filters;
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
          ...filterByNumericValues,
          filtered,
        ],
      },
    });
    await setFiltered(filterState);
  };

  useEffect(() => {
    const removeColumn = () => {
      const filteredColumn = columnState.filter((columnItem) => !filterByNumericValues
        .some(({ column }) => columnItem === column));
      setColumn(filteredColumn);
    };
    removeColumn();
  }, [filterByNumericValues]);

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
        {columnState.map(
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
