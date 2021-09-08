import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const initialColumnOptions = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const initialComparisonOptions = ['maior que',
  'menor que', 'igual a'];

function NumericValuesFilter() {
  const {
    setNumValue,
    filters } = useContext(StarWarsContext);

  const [availableOptions, setAvailableOptions] = useState(true);
  const [columnOptions, setColumnOptions] = useState(initialColumnOptions);
  const [comparisonOptions, setComparisonOptions] = useState(initialComparisonOptions);
  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState(comparisonOptions[0]);
  const [value, setValue] = useState(0);

  const changeFilterByNumericValues = () => {
    const { filterByNumericValues } = filters;
    setNumValue([
      ...filterByNumericValues,
      {
        column,
        comparison,
        value,
      },
    ]);
  };

  useEffect(() => {
    setComparison(comparisonOptions[0]);
    setColumn(columnOptions[0]);
    setValue(0);
  }, [columnOptions, comparisonOptions]);

  const handleOptions = () => {
    if (comparisonOptions.length > 0) {
      const newComparisonOptions = comparisonOptions
        .filter((item) => item !== comparison);
      setComparisonOptions(newComparisonOptions);
      const newColumnOptions = columnOptions.filter((element) => element !== column);
      setColumnOptions(newColumnOptions);
    } else {
      setAvailableOptions(false);
    }
  };

  const handleClick = () => {
    changeFilterByNumericValues();
    handleOptions();
  };

  if (!availableOptions) {
    return (
      <div className="no-options-left">
        SORRY, NO MORE FILTER OPTIONS AVAILABLE!
      </div>);
  }
  return (
    <form>
      <label htmlFor="columnFilter">
        Filter column:
        <select
          id="columnFilter"
          name="column"
          data-testid="column-filter"
          type="text"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        Filter comparison:
        <select
          id="comparisonFilter"
          name="comparison"
          data-testid="comparison-filter"
          type="text"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {comparisonOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="valueFilter">
        Filter by value:
        <input
          id="valueFilter"
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(+target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Add filter
      </button>
    </form>
  );
}

export default NumericValuesFilter;
