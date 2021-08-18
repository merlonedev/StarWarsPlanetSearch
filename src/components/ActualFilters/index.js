import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from '../../Context';

export default function ActualFilters() {
  const { filters: { filterByNumericValues }, handleRemoveFilter } = useMyContext();

  return (
    <section>
      <span>Filtros: </span>
      { filterByNumericValues.length > 0 ? filterByNumericValues
        .map(({ column }) => (
          <span key={ uuidv4() } data-testid="filter">
            { column }
            <button type="button" onClick={ () => handleRemoveFilter(column) }>X</button>
          </span>
        )) : <span>Você não ainda não tem filtros</span> }
    </section>
  );
}
