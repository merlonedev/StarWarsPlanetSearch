import { createContext } from 'react';

const contextTable = createContext({
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
});

export default contextTable;
