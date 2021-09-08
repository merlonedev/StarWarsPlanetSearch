import React, { useContext, useState } from 'react';
import { tableColumns, comparisonColumns } from '../utils';
import Context from '../context';

function FilterByColumnAndNumber() {
  const {
    handleFilterByNumericValues,
  } = useContext(Context);

  const [numberFilters, setNumberFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '10000',
  });

  const handleChange = ({ target }) => {
    setNumberFilters((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div>
      <p>Filter by Column and Number</p>
      <div>
        <select
          name="column"
          onChange={ (e) => handleChange(e) }
          data-testid="column-filter"
        >
          {tableColumns.map((columnName) => (
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
          onClick={ () => handleFilterByNumericValues(numberFilters) }
          data-testid="button-filter"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterByColumnAndNumber;
