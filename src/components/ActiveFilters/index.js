import React, { useContext } from 'react';
import MyContext from '../../context';

const ActiveFilters = () => {
  const { filters, setFilter } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (item) => {
    const numericValues = filterByNumericValues
      .filter(({ column }) => column !== item.column);
    setFilter({
      ...filters,
      filterByNumericValues: numericValues,
    });
  };

  return (
    <ul>
      {
        filterByNumericValues.map((item, index) => (
          <li data-testid="filter" key={ index }>
            { `${item.column} | ${item.comparison} | ${item.value} ` }
            <button
              type="button"
              onClick={ () => removeFilter(item) }
            >
              X
            </button>

          </li>

        ))
      }
    </ul>

  );
};

export default ActiveFilters;
