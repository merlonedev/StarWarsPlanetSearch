import React from 'react';
import { useMyContext } from '../context/MainContext';

export default function ActualFilters() {
  const { filters: { filterByNumericValues }, handleRemoveFilter } = useMyContext();

  return (
    <section>
      <span>Filtros: </span>
      { filterByNumericValues.length > 0 ? filterByNumericValues
        .map(({ column }) => (
          <span key={ column } data-testid="filter">
            { column }
            <button type="button" onClick={ () => handleRemoveFilter(column) }>X</button>
          </span>
        )) : <span>Você não ainda não tem filtros</span> }
    </section>
  );
}
