import { useState, useEffect } from 'react';
import FetchHook from './FetchHook';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const SetGlobalFilter = () => {
  const [filters, setFiltered] = useState(INITIAL_STATE);
  const [filteredData, setFilterData] = useState();
  const [optionsfiltered] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const { data } = FetchHook();

  const objFunc = {
    'maior que': (column, value) => setFilterData(filteredData
      .filter((e) => +e[column] > +value && e[column] !== 'unknown')),
    'menor que': (column, value) => setFilterData(filteredData
      .filter((e) => +e[column] < +value && e[column] !== 'unknown')),
    'igual a': (column, value) => setFilterData(filteredData
      .filter((e) => +e[column] === +value && e[column] !== 'unknown')),
  };

  useEffect(() => {
    if (data && filters.filterByName.name !== ''
    && filters.filterByNumericValues.length === 0) {
      const filtredList = data.filter((e) => (
        e.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
      ));
      setFilterData(filtredList);
    } else if (filters.filterByNumericValues.length === 0) {
      setFilterData(data);
    }
  }, [data, filters]);

  const SetFilter = (target) => {
    const { comparison, column, valueNumber } = target.filterByNumericValues[0];
    if (target.name) {
      setFiltered({ ...filters, filterByName: { [target.name]: target.value } });
    } else {
      setFiltered({ ...filters, ...target });
      objFunc[comparison](column, valueNumber);
    }
  };

  return {
    optionsfiltered,
    SetFilter,
    filteredData,
  };
};

export default SetGlobalFilter;
