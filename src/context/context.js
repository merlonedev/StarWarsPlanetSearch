import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  loading: true,
  filterByName: '',
  numericFilter: {
    column: '',
    comparison: '',
    value: '' },
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

const Context = createContext(INITIAL_STATE);

export default Context;
