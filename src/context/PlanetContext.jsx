import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  filters: {
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
  },
};

const PlanetContext = createContext(INITIAL_STATE);

export default PlanetContext;
