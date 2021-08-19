import { createContext } from 'react';

const INITIAL_STATE = {
  data: '',
  filters: {
    filterByID: {
      teste: '',
    },
    filterByName: {
      name: [],
    },
  },
};

const planetsContext = createContext(INITIAL_STATE);

export default planetsContext;
