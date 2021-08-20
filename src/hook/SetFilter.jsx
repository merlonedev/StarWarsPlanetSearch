import { useState, useEffect } from 'react';
import FetchHook from './FetchHook';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: '',
    sort: '',
  },
};

const SetGlobalFilter = () => {
  const [filters, setFiltered] = useState(INITIAL_STATE);
  const [filteredData, setFilterData] = useState();
  const [optionsfiltered, setOptions] = useState(['population',
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
    if (target.name) {
      setFiltered({ ...filters, filterByName: { [target.name]: target.value } });
    } else {
      const { comparison, column, valueNumber } = target;
      setFiltered({ ...filters,
        filterByNumericValues:
        [...filters.filterByNumericValues, target] });
      setOptions(optionsfiltered.filter((e) => e !== column));
      objFunc[comparison](column, valueNumber);
    }
  };
  const removeFilter = (i) => {
    const removedFilters = filters.filterByNumericValues.filter((e) => e.column !== i);
    setFiltered({ ...filters, filterByNumericValues: [...removedFilters] });
    setOptions([...optionsfiltered, i]);
  };
  return {
    removeFilter,
    setFiltered,
    setFilterData,
    optionsfiltered,
    SetFilter,
    filteredData,
    filters,
  };
};

export default SetGlobalFilter;
