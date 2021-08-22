import { createContext } from 'react';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const context = createContext(INITIAL_STATE);

export default context;
