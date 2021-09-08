import React, { useContext } from 'react';
import MyContext from '../MyContext';

function Filters() {
  const { state: { numericFilters }, handleSetState } = useContext(MyContext);

  const handleClick = (column) => {
    const filtredNumericFilters = numericFilters
      .filter((filter) => filter.column !== column);
    handleSetState('numericFilters', filtredNumericFilters);
  };

  if (numericFilters.length === 0) {
    return <p>Ainda não há filtros</p>;
  }

  return (
    <>
      <h3>Filtros:</h3>
      { numericFilters.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>{`Coluna: ${filter.column}`}</p>
          <p>{`Comparação: ${filter.comparison}`}</p>
          <p>{`Valor: ${filter.value}`}</p>
          <button
            type="button"
            onClick={ () => {
              handleClick(filter.column);
            } }
          >
            x
          </button>
        </div>
      ))}
    </>
  );
}

export default Filters;
