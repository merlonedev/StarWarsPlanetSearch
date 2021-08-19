import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const PlanetContext = createContext(INITIAL_STATE);

export default PlanetContext;
