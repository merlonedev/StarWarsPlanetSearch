import { createContext } from 'react';

const filters = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const data = [];

const PlanetsContext = createContext({ data, filters });

export default PlanetsContext;
