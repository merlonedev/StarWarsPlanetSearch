import { createContext } from 'react';

const INITIAL_STATE = {
  filters: {},
};

const context = createContext(INITIAL_STATE);

export default context;
