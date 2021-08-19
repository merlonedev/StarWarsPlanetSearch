import { useState, useEffect, useCallback } from 'react';
import UsePlanets from './UsePlanets';

const useFilters = () => {
  const { data } = UsePlanets();
  const [filters, setFilters] = useState({ filterByName: '', filterByNumericValues: '' });
  const [filteredData, setFiltered] = useState();

  const [filtersOptions, setFiltersOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const updateFilters = ({ name, value }) => {
    if (name === 'filterByName') {
      setFilters({ ...filters, [name]: value });
    } else if (name === 'remove') {
      setFilters({ ...filters, filterByNumericValues: [...value] });
    } else {
      setFilters({ ...filters, [name]: [...filters[name], value] });
      setFiltersOptions(filtersOptions.filter((e) => e !== value.parameter));
    }
  };

  const removeFilter = (param) => {
    const dale = filters.filterByNumericValues.filter((e) => e.parameter !== param);
    updateFilters({ name: 'remove', value: dale });
  };

  const filterByComparison = useCallback(
    () => filters.filterByNumericValues.forEach((e) => {
      const { parameter, value, measure } = e;
      switch (measure) {
      case 'maior que':
        setFiltered(
          data.filter((key) => +key[parameter] > +value),
        );
        break;
      case 'menor que':
        setFiltered(
          data.filter((key) => +key[parameter] < +value),
        );
        break;
      case 'igual a':
        setFiltered(
          data.filter((key) => +key[parameter] === +value),
        );
        break;
      default:
        setFiltered(data);
      }
    }),
    [data, filters.filterByNumericValues],
  );

  useEffect(() => {
    console.log(filters, 'dale');
    if (filters.filterByNumericValues.length === 0 && filters.filterByName === '') {
      setFiltered(data);
      console.log('to aqui');
    } else if (data && filters.filterByName !== '') {
      setFiltered(data.filter((e) => e.name.toLowerCase().includes(
        filters.filterByName.toLowerCase(),
      )));
    } else if (filters.filterByNumericValues !== '') {
      filterByComparison(data);
    } else {
      setFiltered(data);
    }
  }, [data, filterByComparison, filters, setFiltered]);

  return {
    updateFilters,
    filtersOptions,
    filterByComparison,
    filteredData,
    filters,
    removeFilter,
  };
};

export default useFilters;
