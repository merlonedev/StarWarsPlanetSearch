import { useState } from 'react';

function ColumnOptions() {
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  return [columnOptions, setColumnOptions];
}

export default ColumnOptions;
