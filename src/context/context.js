import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  loading: true,
  filterByName: '',
};

const Context = createContext(INITIAL_STATE);

export default Context;
