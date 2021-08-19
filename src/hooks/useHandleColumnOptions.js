import { useState, useEffect } from 'react';
import { columns } from '../helpers/options';

function useHandleColumnOptions() {
  const [handleColumnOptions, setHandleColumnSelection] = useState({
    selected: [],
    indexFilter: 0,

  });
  const [optionsColumns, setOptionsColumns] = useState(columns);
  const { selected } = handleColumnOptions;
  const filterOptions = () => {
    const newOptions = optionsColumns.filter((option) => !selected.includes(option));
    setOptionsColumns(newOptions);
  };

  useEffect(filterOptions, [selected]);

  return [optionsColumns, handleColumnOptions, setHandleColumnSelection];
}

export default useHandleColumnOptions;
