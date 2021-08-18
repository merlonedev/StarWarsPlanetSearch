import React, { useContext } from 'react';
import Context from '../Context/Context';

function FilterText() {
  const { contextValue: { functionsFilters: { nameFilter } } } = useContext(Context);

  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar pelo nome:
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Digite o nome do planeta"
          onChange={ nameFilter }
        />
      </label>
    </div>
  );
}

export default FilterText;
