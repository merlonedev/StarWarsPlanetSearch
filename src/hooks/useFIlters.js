import { useState } from 'react';

const useFilters = () => {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  };

  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (type, filter) => {
    switch (type) {
    case 'name': {
      const newFilter = {
        ...filters,
        filterByName: {
          name: filter,
        },
      };
      setFilters(newFilter);
    }
      break;
    case 'numericValue': {
      const { column, comparison, value } = filter;

      const newFilter = {
        ...filters,
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      };
      setFilters(newFilter);
    }
      break;
    default:
      setFilters(filters);
    }
  };

  return [filters, updateFilters];
};

export default useFilters;
