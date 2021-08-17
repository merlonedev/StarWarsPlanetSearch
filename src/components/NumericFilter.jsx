import React, { useContext, useState } from 'react';
import ColumnSelect from './ColumnSelect';
import ComparisonSelect from './ComparisonSelect';
import ValueFilter from './ValueFilter';
import FilterButton from './FilterButton';
import AppContext from '../context/AppContext';

export default function NumericFilter() {
  const { filters, setFilters } = useContext(AppContext);

  const [fil, setFil] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChanges = ({ target: { value, name } }) => {
    setFil({
      ...fil,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        fil,
      ],
    });
  };

  return (
    <div>
      <ColumnSelect change={ handleChanges } value={ fil.column } />
      <ComparisonSelect change={ handleChanges } value={ fil.comparison } />
      <ValueFilter change={ handleChanges } value={ fil.value } />
      <FilterButton click={ handleClick4} />
    </div>
  );
}
