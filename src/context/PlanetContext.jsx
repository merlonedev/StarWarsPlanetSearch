import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
};

const PlanetContext = createContext(INITIAL_STATE);

export default PlanetContext;
