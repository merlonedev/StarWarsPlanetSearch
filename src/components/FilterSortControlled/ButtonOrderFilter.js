import React, { useContext } from 'react';
import Context from '../../context/Context';

function ButtonOrderFilter() {
  const { handleClickOrder } = useContext(Context);
  return (
    <button
      type="button"
      onClick={ handleClickOrder }
      data-testid="column-sort-button"
    >
      Ordenar
    </button>
  );
}

export default ButtonOrderFilter;
