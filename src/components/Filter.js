import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

function Filter() {
  const { filters, setFilters } = useContext(MainContext);
  return (
    <section>
      <label htmlFor="name">
        Filtrar por Nome:
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-filter"
          placeholder="Digite aqui o nome"
          onChange={ ({ target: { value } }) => {
            setFilters({ ...filters, filterByName: value });
          } }
        />
      </label>
    </section>
  );
}

export default Filter;
