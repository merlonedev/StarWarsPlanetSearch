import { useState } from 'react';

import defaultFilters from '../helpers/filters';

function useFilters() {
  const [currentFilters, setCurrentFilters] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  const removeFilter = (filterValue) => {
    const newFilters = defaultFilters
      .filter((item) => item !== filterValue && !currentFilters.includes(item));
    setFilters(newFilters);

    const filter = defaultFilters.find((item) => item === filterValue);
    setCurrentFilters([...currentFilters, filter]);
  };

  const restoreFilter = (filterValue) => {
    const newCurrentFilters = currentFilters.filter((item) => item !== filterValue);
    setCurrentFilters(newCurrentFilters);

    const newFilters = defaultFilters.filter((item) => !newCurrentFilters.includes(item));
    setFilters(newFilters);
  };

  const filterFunctions = {
    removeFilter,
    restoreFilter,
  };
  return [filters, filterFunctions];
}

export default useFilters;
