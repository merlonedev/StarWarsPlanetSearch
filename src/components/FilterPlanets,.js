import React from 'react';
import { useMyContext } from '../context/Provider';

export default function FiltersPlanets() {
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
