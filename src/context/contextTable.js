import { createContext } from 'react';

const contextTable = createContext({
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
});

export default contextTable;
