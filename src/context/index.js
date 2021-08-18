import { createContext } from 'react';

export const PayloadContext = createContext([]);

export const FiltersContext = createContext({
  filters: {
    filterByName: {
      name: '',
      setName: () => null,
    },
  },
});
