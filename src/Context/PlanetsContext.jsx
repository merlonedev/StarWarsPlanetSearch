import { createContext } from 'react';

const filters = {
  filterByName: { name: '' },
};

const data = [];

const PlanetsContext = createContext({ data, filters });

export default PlanetsContext;
