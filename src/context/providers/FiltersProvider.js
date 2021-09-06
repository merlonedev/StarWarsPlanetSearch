import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FiltersContext } from '..';

const initialColumnOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];
const initialComparisonOptions = ['maior que', 'menor que', 'igual a'];

function FiltersProvider({ children }) {
  const [filterByName, setNameFilter] = useState({ name: '' });

  const [columnOptions, setColumnOptions] = useState(initialColumnOptions);
  const [removedColumns, setRemovedColumns] = useState([]);
  const [column, setColumn] = useState(columnOptions[0]);

  const [comparisonOptions] = useState(initialComparisonOptions);
  const [comparison, setComparison] = useState(comparisonOptions[0]);

  const [value, setValue] = useState(0);
  const [filterByNumericValues, setNumericValuesFilter] = useState([]);

  const handleColumnOptions = (action, columnToBeReAdded) => {
    if (action === 'add') {
      const copy = columnOptions;
      const columnRemoved = copy.splice(columnOptions.indexOf(column), 1);
      setRemovedColumns([...removedColumns, ...columnRemoved]);
      setColumnOptions([...copy]);
    }
    if (action === 'remove' && columnToBeReAdded) {
      const copy = removedColumns;
      const columnReAdded = copy.splice(removedColumns.indexOf(columnToBeReAdded), 1);
      setColumnOptions([...columnReAdded, ...columnOptions]);
    }
  };

  const resetInputs = () => {
    setColumn(columnOptions[0]); setComparison(comparisonOptions[0]); setValue(0);
  };

  const allInputsFilled = () => column && comparison && value >= 0;

  const repeatedFilter = () => filterByNumericValues
    .find((filter) => filter.column === column);

  const addFilter = () => {
    if (allInputsFilled() && !repeatedFilter()) {
      setNumericValuesFilter([...filterByNumericValues,
        { column, comparison, value }]);
    }
  };

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
      columnOptions,
      // setColumnOptions,
      handleColumnOptions,
      comparison,
      setComparison,
      comparisonOptions,
      // setComparisonOptions,
      value,
      setValue,
      filterByNumericValues,
      addFilter,
      removeFilter,
      resetInputs,
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
