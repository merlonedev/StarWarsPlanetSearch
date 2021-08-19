import { useContext } from 'react';
import MyContext from '../context/MyContext';

function useRemoveFilter() {
  const { filterByNumericValues } = useContext(MyContext);
  function removeFilter(columnName) {
    const newFilters = filterByNumericValues
      .filter(({ column }) => column !== columnName);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  }
  return (
    removeFilter
  );
}

export default useRemoveFilter;
