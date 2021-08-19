import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

export default function FiltersContainer() {
  const { setFilterByName } = useGlobalContext();

  return (
    <section>
      <input
        data-testid="name-filter"
        placeholder="Planet name"
        onChange={ setFilterByName }
      />
    </section>
  );
}
