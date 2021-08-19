import React, { useContext, useState } from 'react';
import contextTable from '../context/contextTable';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const Filters = () => {
  const { setFilters, filters } = useContext(contextTable);
  const [numFilterState, setNumFilterState] = useState({
    columnOptions: [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ],
    comparisonOptions: ['maior que', 'menor que', 'igual a'],
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setNumFilterState({
      ...numFilterState,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { column, comparison, value } = numFilterState;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <div>
      <div>
        <Input
          inputType="text"
          placeholder="Nome do planeta"
          value={ filters.filterByName.name }
          onChange={ handleChangeName }
          name="planet"
          testId="name-filter"
        />
      </div>
      <div>
        <Select
          name="column"
          options={ numFilterState.columnOptions }
          value={ numFilterState.column }
          onChange={ handleChangeFilter }
          testId="column-filter"
        />
      </div>
      <div>
        <Select
          name="comparison"
          options={ numFilterState.comparisonOptions }
          value={ numFilterState.comparison }
          onChange={ handleChangeFilter }
          testId="comparison-filter"
        />
      </div>
      <div>
        <Input
          inputType="number"
          placeholder="Valor"
          value={ numFilterState.value }
          onChange={ handleChangeFilter }
          name="value"
          testId="value-filter"
        />
      </div>
      <div>
        <Button
          buttonText="Adicionar filtro"
          onClick={ handleClick }
          testId="button-filter"
        />
      </div>
    </div>
  );
};

export default Filters;
