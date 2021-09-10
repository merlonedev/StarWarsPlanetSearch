import React, { useState, useContext } from 'react';
import contextTable from '../context/contextTable';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const OrderForm = () => {
  const COLUMNS = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { setFilters, filters } = useContext(contextTable);

  const [orderState, setOrderState] = useState({
    columnOptions: COLUMNS,
    column: COLUMNS[0],
    sort: 'ASC',
  });

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
    <form>
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
          labelText="Ascendente"
          inputType="radio"
          value="ASC"
          onChange={ handleChangeOrder }
          name="sort"
          id="input-asc"
          checked={ orderState.sort === 'ASC' }
          testId="column-sort-input-asc"
        />
      </div>
      <div>
        <Input
          labelText="Descendente"
          inputType="radio"
          value="DESC"
          onChange={ handleChangeOrder }
          name="sort"
          id="input-desc"
          checked={ orderState.sort === 'DESC' }
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
    </form>
  );
};

export default OrderForm;
