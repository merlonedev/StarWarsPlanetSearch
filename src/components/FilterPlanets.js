import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function FilterPlanets() {
  const { filter, setFilter } = useContext(DataContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      name: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="search-input">
          <input
            data-testid="name-filter"
            type="text"
            name="search-input"
            onChange={ handleChange }
            placeholder="search"
          />
        </label>
        <label htmlFor="filter-column">
          <select data-testid="column-filter">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="filter-comparison">
          <select data-testid="comparison-filter">
            <option>maior que</option>
            <option>menor que</option>
          </select>
        </label>
        <label htmlFor="filter-value">
          <input data-testid="value-filter" type="number" placeholder="number" />
        </label>
        <button data-testid="button-filter" type="button">Filtrar</button>
      </form>

    </div>
  );
}

export default FilterPlanets;
