import React, { useContext } from 'react';
import Context from '../ContextStuff/Context';
import SelectColumnFilter from './SelectColumnFilter';
import SelectComparisonFilter from './SelectComparisonFilter';
import InputValueFilter from './InputValueFilter';

export default function FilterByNumbers() {
  const { filters, setFilters } = useContext(Context);

  function updateFilter({ target: { name, value } }) {
    setFilters({
      ...filters,
      filterByNumericValues: { ...[filters.filterByNumericValues, [name]: value ]},
    });
  }
  return (
    <div>
      <SelectColumnFilter updateFilter={ updateFilter } />
      <SelectComparisonFilter updateFilter={ updateFilter } />
      <InputValueFilter updateFilter={ updateFilter } />
    </div>
  );
}
