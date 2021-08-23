import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  loading: true,
};

const Context = createContext(INITIAL_STATE);

export default Context;
