import React, { useContext, useState } from 'react';
import Context from '../ContextStuff/Context';
import SelectColumnFilter from './SelectColumnFilter';
import SelectComparisonFilter from './SelectComparisonFilter';
import InputValueFilter from './InputValueFilter';
import SaveFilterButton from './SaveFilterButton';

const INITIAL = { column: 'population', comparison: 'maior que', value: 100000 };

export default function FilterByNumbers() {
  const { filters, setFilters } = useContext(Context);
  const [numericFilter, setNumericFilter] = useState(INITIAL);

  function updateFilter({ target: { name, value } }) {
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
  }

  function saveFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        numericFilter,
      ],
    });
  }

  return (
    <div>
      <SelectColumnFilter updateFilter={ updateFilter } />
      <SelectComparisonFilter updateFilter={ updateFilter } />
      <InputValueFilter updateFilter={ updateFilter } />
      <SaveFilterButton onClick={ saveFilter } />
    </div>
  );
}
