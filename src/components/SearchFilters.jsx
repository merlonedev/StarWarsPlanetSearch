import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const filterValue = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

function SearchFilters() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [state, setState] = useState(filterValue);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleChangeStateLocal = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleChangeNumbers = () => {
    const { filterByNumericValues } = filters;
    setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, state] },
    );
  };

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Digite o nome que deseja filtrar"
        />
        <div>
          <select
            data-testid="column-filter"
            name="column"
            onChange={ handleChangeStateLocal }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChangeStateLocal }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            onChange={ handleChangeStateLocal }
            placeholder="Digite o valor"
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleChangeNumbers }
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchFilters;
