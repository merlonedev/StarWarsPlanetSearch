import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  filters: {},
};

const PlanetContext = createContext(INITIAL_STATE);

export default PlanetContext;
