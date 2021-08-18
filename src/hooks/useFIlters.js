import { useState } from 'react';

const useFilters = () => {
  const initialFilters = {
    filterByName: {
      name: '',
    },
  };

  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (value) => {
    const newFilter = {
      ...filters,
      filterByName: {
        name: value,
      },
    };
    setFilters(newFilter);
  };

  return [filters, updateFilters];
};

export default useFilters;
