import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { FiltersContext } from '..';

const columnOptions = ['', 'population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FiltersProvider({ children }) {
  const [filterByName, setNameFilter] = useState({ name: '' });
  const [column, setColumn] = useState('');
  const [availableColumns, setAvailableColumns] = useState(columnOptions);
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const [tempValue, setTempValue] = useState(0);
  const [filterByNumericValues, setNumericValuesFilter] = useState([]);

  const resetInputs = () => {
    setColumn(''); setComparison(''); setValue(0);
    setTempValue(0);
  };

  useEffect(() => {
    const allInputsFilled = () => column && comparison && value;

    const addFilter = () => {
      const repeatedFilter = filterByNumericValues
        .find((filter) => filter.column === column);
      return repeatedFilter
        ? setNumericValuesFilter([...filterByNumericValues
          .filter((filter) => filter.column !== column), { column, comparison, value }])
        : setNumericValuesFilter([...filterByNumericValues,
          { column, comparison, value }]);
    };

    if (allInputsFilled()) {
      addFilter();
      resetInputs();
    }
  }, [column, comparison, filterByNumericValues, value]);

  useEffect(() => {
    setAvailableColumns(columnOptions
      .filter((columnOption) => !filterByNumericValues
        .some((filter) => {
          console.log(filter.column === columnOption || column === columnOption);
          return filter.column === columnOption || column === columnOption;
        })));
  }, [column, filterByNumericValues]);

  const removeFilter = (filterToBeRemoved) => {
    setNumericValuesFilter(filterByNumericValues
      .filter((filter) => filter.column !== filterToBeRemoved.column));
  };

  const contextValue = {
    filters: {
      filterByName: {
        name: filterByName.name, setNameFilter,
      },
      column,
      setColumn,
      comparison,
      setComparison,
      value,
      setValue,
      filterByNumericValues,
      removeFilter,
      availableColumns,
      setAvailableColumns,
      tempValue,
      setTempValue,
    },
  };

  return (
    <FiltersContext.Provider value={ contextValue }>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FiltersProvider;
