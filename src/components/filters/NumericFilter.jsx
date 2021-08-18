import React, { useContext, useState } from 'react';
import ColumnSelect from './ColumnSelect';
import ComparisonSelect from './ComparisonSelect';
import ValueFilter from './ValueFilter';
import FilterButton from './FilterButton';
import AppContext from '../../context/AppContext';

const INITIAL = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

export default function NumericFilter() {
  const { filters, setFilters, options, setOptions } = useContext(AppContext);

  const [fil, setFil] = useState(INITIAL);

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
    const newOpts = options.filter((opt) => opt !== fil.column);
    setOptions(newOpts);
    setFil({ ...INITIAL, column: newOpts[0] });
  };

  return (
    <div className="numeric-filters">
      <ColumnSelect options={ options } change={ handleChanges } value={ fil.column } />
      <ComparisonSelect change={ handleChanges } value={ fil.comparison } />
      <ValueFilter change={ handleChanges } value={ fil.value } />
      <FilterButton click={ handleClick } />
    </div>
  );
}
