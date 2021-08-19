import React, { useContext } from 'react';
import Context from '../context/Context';

function ButtonFilter() {
  const { handleClíckFilter } = useContext(Context);
  return (
    <button
      type="button"
      onClick={ handleClíckFilter }
      data-testid="button-filter"
    >
      Filtrar
    </button>
  );
}

export default ButtonFilter;
