import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Inputs() {
  const { filter, setFilter } = useContext(MyContext);
  const { filterByName: { name } } = filter;

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <form>
      <label htmlFor="searchName">
        <input
          data-testid="name-filter"
          name="searchName"
          type="text"
          placeholder="Filtrar por nome"
          value={ name }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="filterColumn">
        <select
          data-testid="column-filter"
          name="filterColumn"
          id="filterColumn"
          value={ name }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="filterComparison">
        <select
          data-testid="comparison-filter"
          name="filterComparison"
          id="filterComparison"
          value={ name }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="filterValue">
        <input
          data-testid="value-filter"
          name="filterValue"
          type="number"
          placeholder="Digite um número"
          value={ name }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (console.log('clicado')) /* handleClick */ }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Inputs;
