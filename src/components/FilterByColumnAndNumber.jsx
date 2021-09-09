import React, { useContext, useEffect, useState } from 'react';
import { tableColumns, comparisonColumns } from '../utils';
import Context from '../context';

function FilterByColumnAndNumber() {
  const {
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(Context);

  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '10000',
  });

  const handleChange = ({ target }) => {
    setNumericFilters((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleFilterByNumericValues = ({ column, comparison, value }) => {
    setFilters((prevFilters) => {
      if (!filterByNumericValues[0].value) {
        return {
          ...prevFilters,
          filterByNumericValues: [{ column, comparison, value }],
        };
      }

      return {
        ...prevFilters,
        filterByNumericValues: [
          ...filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  useEffect(() => {
    const [newColumn] = tableColumns.filter((tableColumn) => (
      !filterByNumericValues.some((filter) => filter.column === tableColumn)
    )).map((nextColumn) => nextColumn);

    setNumericFilters((prevFilters) => ({
      ...prevFilters,
      column: newColumn,
    }));
  }, [filterByNumericValues]);

  return (
    <div>
      <p>Filter by Column and Number</p>
      <div>
        <select
          name="column"
          onChange={ (e) => handleChange(e) }
          data-testid="column-filter"
        >
          {tableColumns.filter((column) => !filterByNumericValues
            .some((numericFilter) => numericFilter.column === column))
            .map((columnName) => (
              <option
                key={ columnName }
                value={ columnName }
              >
                { columnName }
              </option>
            ))}
        </select>

        <select
          name="comparison"
          onChange={ (e) => handleChange(e) }
          data-testid="comparison-filter"
        >
          {comparisonColumns.map((columnName) => (
            <option key={ columnName }>{ columnName }</option>
          ))}
        </select>

        <input
          name="value"
          type="number"
          placeholder="Value"
          onChange={ (e) => handleChange(e) }
          data-testid="value-filter"
        />

        <button
          type="button"
          onClick={ () => handleFilterByNumericValues(numericFilters) }
          data-testid="button-filter"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterByColumnAndNumber;
