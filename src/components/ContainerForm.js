import React, { useState } from 'react';
import Form from './Form';

function ContainerForm() {
  const initialColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [forms, setForms] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: 0,
  }]);

  const [availableColumns, setAvailableColumns] = useState(initialColumns);

  function addForm() {
    const newColumns = initialColumns
      .filter((column) => forms.filter((form) => form.column === column).length === 0);
    setAvailableColumns(newColumns);
    setForms([{
      column: newColumns[0],
      comparison: 'maior que',
      value: 0,
    }]);
  }

  return (
    <form action="">
      { forms.map((form, index) => (<Form
        column={ form.column }
        comparison={ form.comparison }
        onFilter={ addForm }
        availableColumns={ availableColumns }
        key={ index }
      />)) }
    </form>
  );
}

export default ContainerForm;
