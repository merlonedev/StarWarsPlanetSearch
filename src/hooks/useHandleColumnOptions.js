import { useState, useEffect } from 'react';
import { columns } from '../helpers/options';

function useHandleColumnOptions() {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [optionsColumns, setOptionsColumns] = useState(columns);

  const filterOptions = () => {
    const newOptions = optionsColumns
      .filter((option) => !selectedColumns.includes(option));
    setOptionsColumns(newOptions);
  };

  useEffect(filterOptions, [selectedColumns]);

  return [optionsColumns, selectedColumns, setSelectedColumns];
}

export default useHandleColumnOptions;
