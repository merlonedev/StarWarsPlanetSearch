import React, { useContext, useEffect } from 'react';
import Context from '../Context/Context';
import Select from './Select';

function FilterNumbersForm() {
  const {
    columnOptions,
    setColumnOptions,
    state: { setFilter, filter },
  } = useContext(Context);
  const { filterByNumericValues } = filter;

  const comparisonOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleClick = () => {
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;

    const newColumn = columnOptions.filter((option) => option !== columnFilter);
    setColumnOptions(newColumn);

    const currentFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };

    setFilter({
      ...filter,
      filterByNumericValues: [
        ...filterByNumericValues,
        currentFilter,
      ],
    });
  };

  useEffect(() => {
  }, [filter]);

  return (
    <form>
      <Select
        id="column-filter"
        options={ columnOptions }
      />
      <Select
        id="comparison-filter"
        options={ comparisonOptions }
      />
      <label htmlFor="value-filter">
        { 'Valor: ' }
        <input
          id="value-filter"
          type="number"
          name="filterNumbers"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        adicionar filtro
      </button>
    </form>
  );
}

export default FilterNumbersForm;
