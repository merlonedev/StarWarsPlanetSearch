import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';

export default function ShowFilter() {
  const { filter,
    setFilter, options, setOptions, originalData, setData } = useContext(ContextApi);

  const removeFilter = (colunmName) => {
    const newfilter = filter.filterByNumericValues
      .filter((fltr) => fltr.column !== colunmName);
    const newFilter = {
      ...filter,
      filterByNumericValues: [
        ...newfilter,
      ],
    };
    setFilter(newFilter);
    setOptions({
      ...options,
      COLUMN_OPTIONS: [
        ...options.COLUMN_OPTIONS,
        colunmName,
      ],
    });
    setData(originalData);
  };

  return (
    <div>
      { filter.filterByNumericValues.map((flt, index) => (
        <p
          key={ index }
          data-testid="filter"
        >
          { flt.column }
          <button
            type="button"
            onClick={ () => removeFilter(flt.column) }
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}
