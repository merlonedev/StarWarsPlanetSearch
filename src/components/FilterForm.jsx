import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

export default function FilterForm() {
  const params = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [slcFilter, setSelect] = useState({
    column: 'population', comparison: 'maior que', value: '' });
  const { filters, setFilter } = useContext(AppContext);

  const handleNameChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filters: { filterByName: { name: value.toLowerCase() } },
    });
    console.log(filters);
  };

  const handleColumnChange = ({ target: { value } }) => {
    setSelect({
      ...slcFilter,
      column: value,
    });
  };

  const handleCompChange = ({ target: { value } }) => {
    setSelect({
      ...slcFilter,
      comparison: value,
    });
  };

  const handleValChange = ({ target: { value } }) => {
    setSelect({
      ...slcFilter,
      value,
    });
  };

  const handleClick = () => {
    setFilter({
      filters: { ...filters, filterByNumericValues: [{ ...slcFilter }] },
    });
    console.log(filters);
  };

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={ handleNameChange }
          data-testid="name-filter"
        />
      </label>
      <select data-testid="comparison-filter" onChange={ handleColumnChange }>
        {params.map((param) => <option key={ param }>{param}</option>)}
      </select>
      <select data-testid="comparison-filter" onChange={ handleCompChange }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="numerical">
        Valor:
        <input
          id="numerical"
          type="number"
          data-tesdid="value-filter"
          onChange={ handleValChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}
