import React from 'react';
import { useMyContext } from '../../Context';

export default function FiltersContainer() {
  const { handleNameFilter } = useMyContext();

  return (
    <section>
      <input
        data-testid="name-filter"
        placeholder="Digite o nome de um planeta"
        onChange={ handleNameFilter }
      />
    </section>
  );
}
