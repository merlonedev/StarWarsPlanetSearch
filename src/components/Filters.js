import React, { useContext, useState } from 'react';
import contextTable from '../context/contextTable';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const Filters = () => {
  const COLUMNS = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const COMPARISON = ['maior que', 'menor que', 'igual a'];

  const { setFilters, filters } = useContext(contextTable);
  const [numFilterState, setNumFilterState] = useState({
    columnOptions: COLUMNS,
    comparisonOptions: COMPARISON,
    column: COLUMNS[0],
    comparison: COMPARISON[0],
    value: 0,
  });
  const [orderState, setOrderState] = useState({
    columnOptions: ['name', ...COLUMNS],
    column: 'name',
    sort: 'ASC',
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

  const handleAddFilters = () => {
    const { column, comparison, value, columnOptions } = numFilterState;
    const newFilters = {
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    };

    const columnFilters = columnOptions.filter((columnFilter) => (
      newFilters.filterByNumericValues
        .every((newFilter) => newFilter.column !== columnFilter)
    ));

    if (columnOptions.length > 0) {
      setNumFilterState({
        ...numFilterState,
        columnOptions: columnFilters,
        column: columnFilters[0],
        comparison: COMPARISON[0],
        value: 0,
      });

      setFilters(newFilters);
    }
  };

  const handleRemoveFilters = (column) => {
    const { columnOptions } = numFilterState;
    const { filterByNumericValues } = filters;

    const numFilters = filterByNumericValues
      .filter(({ column: columnFilter }) => columnFilter !== column);

    const newFilters = {
      ...filters,
      filterByNumericValues: numFilters,
    };

    setNumFilterState({
      ...numFilterState,
      columnOptions: [...columnOptions, column],
    });
    setFilters(newFilters);
  };

  const handleChangeOrder = ({ target: { name, value } }) => {
    setOrderState({
      ...orderState,
      [name]: value,
    });
  };

  const handleAddSort = () => {
    const { column, sort } = orderState;
    const newOrder = {
      ...filters,
      order: {
        column,
        sort,
      },
    };
    setFilters(newOrder);
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
        <div>
          <Select
            name="column"
            options={ orderState.columnOptions }
            value={ orderState.column }
            onChange={ handleChangeOrder }
            testId="column-sort"
          />
        </div>
        <div>
          <Input
            inputType="radio"
            value="ASC"
            onChange={ handleChangeOrder }
            name="sort"
            id="input-asc"
            testId="column-sort-input-asc"
          />
        </div>
        <div>
          <Input
            inputType="radio"
            value="DESC"
            onChange={ handleChangeOrder }
            name="sort"
            id="input-desc"
            testId="column-sort-input-desc"
          />
        </div>
        <div>
          <Button
            buttonText="Adicionar ordenação"
            onClick={ handleAddSort }
            testId="column-sort-button"
          />
        </div>
      </div>
      <div>
        <div>
          {
            filters.filterByNumericValues
              .map(({ column, comparison, value }) => (
                <div key={ column } data-testid="filter">
                  <span>
                    {
                      `{ column: ${column}, comparison: ${comparison}, value: ${value}, }`
                    }
                  </span>
                  <Button
                    buttonText="X"
                    onClick={ () => handleRemoveFilters(column) }
                  />
                </div>
              ))
          }
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
            onClick={ handleAddFilters }
            testId="button-filter"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
