import { createContext } from 'react';

const INITIAL_STATE = {
  data: '',
};

const Mycontext = createContext(INITIAL_STATE);

export default Mycontext;
