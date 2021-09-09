import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Form from './Form';
import DisabledForm from './DisabledForm';

function ContainerForm() {
  const { filters, setFilters } = useContext(MyContext);
  const initialColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [availableColumns, setAvailableColumns] = useState(initialColumns);

  function onDelete(columnFilter) {
    setAvailableColumns([...availableColumns, columnFilter]);
    setFilters({
      filterByName: { name: filters.filterByName.name },
      filterByNumericValues: filters.filterByNumericValues
        .filter((filter) => filter.column !== columnFilter),
    });
  }

  useEffect(() => {
    filters.filterByNumericValues.forEach((filter) => setAvailableColumns(availableColumns
      .filter((column) => column !== filter.column)));
  }, [filters]);

  return (
    <>
      <div>
        { filters.filterByNumericValues
          .map((filter) => (<DisabledForm
            key={ filter.column }
            column={ filter.column }
            comparison={ filter.comparison }
            value={ filter.value }
            onDelete={ () => { onDelete(filter.column); } }
          />)) }
      </div>
      <form action="">
        <Form
          comparison="maior que"
          availableColumns={ availableColumns }
        />
      </form>
    </>
  );
}

export default ContainerForm;
