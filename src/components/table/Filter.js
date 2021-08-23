import React, { useContext } from 'react';
import context from '../../context/PlanetContext';

export default function Filter() {
  const { filters, setFilters } = useContext(context);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters, filterByName: { name: value } });
  };

  return (
    <div className="filter-name-input">
      <label htmlFor="filter-name">
        Filtrar
        <input
          type="text"
          id="filter-name"
          value={ name }
          data-testid="name-filter"
          placeholder="Buscar"
          onChange={ handleChange }
        />
      </label>
    </div>

  );
}
