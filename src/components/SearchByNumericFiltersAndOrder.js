import React, { useState, useContext } from 'react';
import Filters from './Filters';
import MyContext from '../MyContext';

function SearchByNumericFiltersAndOrder() {
  const { state: { numericFilters }, handleSetState } = useContext(MyContext);
  const [inputs, setInputs] = useState({
    column: 'population', comparison: 'maior que', value: 0 });
  const [orderInputs, setOrderInputs] = useState({ column: 'name', sort: '' });
  const dropDown = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const handleChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleOrderChange = ({ target }) => {
    setOrderInputs({ ...orderInputs, [target.name]: target.value });
  };

  const handleOrderClick = () => {
    handleSetState('order', orderInputs);
    setOrderInputs({ column: 'Name', sort: '' });
  };

  const handleClick = () => {
    const numericFiltersCopy = numericFilters;
    numericFiltersCopy.push(inputs);
    handleSetState('numericFilters', numericFiltersCopy);
    setInputs({ column: '', comparison: '', value: 0 });
  };

  return (
    <>
      <section>
        <select data-testid="column-filter" name="column" onChange={ handleChange }>
          {dropDown.filter((column) => numericFilters
            .some((filter) => filter.column === column) === false)
            .map((column) => <option value={ column } key={ column }>{ column }</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ inputs.value }
          onChange={ handleChange }
        />
        <button type="button" data-testid="button-filter" onClick={ handleClick }>
          Adicionar filtro
        </button>
      </section>
      <section>
        <select data-testid="column-sort" name="column" onChange={ handleOrderChange }>
          <option value="name">name</option>
          {dropDown
            .map((column) => <option value={ column } key={ column }>{ column }</option>)}
        </select>
        <label htmlFor="sort">
          Crescente
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="sort"
            onChange={ handleOrderChange }
          />
        </label>
        <label htmlFor="sort">
          Decrescente
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="sort"
            onChange={ handleOrderChange }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleOrderClick }
        >
          Ordenar
        </button>
      </section>
      <Filters />
    </>
  );
}

export default SearchByNumericFiltersAndOrder;
