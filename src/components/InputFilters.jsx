import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const InputFilters = () => {
  const { handleChangeNameFilter,
    handleChangeFiltredBy,
    handleChangeCompare,
    handleChangeValueFilter,
    filterOptions,
    filtredBy,
    compare,
    inputValueFilter,
  } = useContext(AppContext);

  const columns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const comparison = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="planeta"
        onChange={ handleChangeNameFilter }
      />
      <div>
        <select data-testid="column-filter" onChange={ handleChangeFiltredBy }>
          {
            columns.map((filterBy, index) => (
              <option key={ index } value={ filterBy }>{ filterBy }</option>))
          }
        </select>
        <select data-testid="comparison-filter" onChange={ handleChangeCompare }>
          {
            comparison.map((comparation) => (
              <option key={ comparation } value={ comparation }>{ comparation }</option>))
          }
        </select>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="digite um valor numérico"
          onChange={ handleChangeValueFilter }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterOptions(filtredBy, inputValueFilter, compare) }
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default InputFilters;
