import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FiltroNumerico() {
  const { contextValu: { options: { opcoes } } } = useContext(AppContext);
  const [comparadores] = useState(['maior que', 'menor que', 'igual a']);
  const { contextValu: { functions: { submitFilter } } } = useContext(AppContext);
  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          id="filtro"
        >
          {
            opcoes.map((option, index) => (
              <option
                value={ option }
                key={ index }
              >
                { option }
              </option>
            ))
          }
        </select>
        <select
          data-testid="comparison-filter"
          id="comparador"
        >
          {
            comparadores.map((comparador, index) => (
              <option
                value={ comparador }
                key={ index }
              >
                { comparador }
              </option>
            ))
          }
        </select>
        <label htmlFor="valor">
          <input
            type="number"
            data-testid="value-filter"
            id="valor"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ submitFilter }
        >
          Aplicar Filtros
        </button>
      </form>
    </div>
  );
}

export default FiltroNumerico;
