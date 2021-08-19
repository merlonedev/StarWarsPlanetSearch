import { createContext } from 'react';

const INITIAL_STATE = {
  data: '',
};

const planetsContext = createContext(INITIAL_STATE);

export default planetsContext;
