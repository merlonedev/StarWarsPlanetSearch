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

const COLUMNS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

export default function NumericFilter() {
  const { filters, setFilters } = useContext(AppContext);

  const [fil, setFil] = useState(INITIAL);
  const [options, setOptions] = useState(COLUMNS);

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
    setOptions(options.filter((opt) => opt !== fil.column));
    setFil(INITIAL);
  };

  return (
    <div>
      <ColumnSelect options={ options } change={ handleChanges } value={ fil.column } />
      <ComparisonSelect change={ handleChanges } value={ fil.comparison } />
      <ValueFilter change={ handleChanges } value={ fil.value } />
      <FilterButton click={ handleClick } />
    </div>
  );
}
