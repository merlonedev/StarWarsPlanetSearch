import { createContext } from 'react';

const filtersDefaultContext = {
  filters: {
    filterByName: {
      name: '',
      setName: () => {},
    },
    filterByNumericValues: {
      column: '',
      comparison: '',
      value: '',
      setFilterByNumericValues: () => {},
    },
  },
}; 

export const PayloadContext = createContext([]);

export const FiltersContext = createContext(filtersDefaultContext);
