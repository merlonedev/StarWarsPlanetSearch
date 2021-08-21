import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';

const InputFilters = () => {
  const { handleChangeNameFilter,
    handleChange,
    filterOptions,
    columnsFilterBy: columns,
    filterField,
    handleClick,
  } = useContext(AppContext);
  const { filtredBy: filtredBy_,
    inputValueFilter: inputValueFilter_,
    compare: compare_ } = filterField;

  const comparison = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="planeta"
        name="filterByName"
        onChange={ handleChangeNameFilter }
      />
      <div>
        <select
          data-testid="column-filter"
          onChange={ handleChange }
          name="filtredBy"
          value={ filtredBy_ }
        >
          {
            columns.map((filterBy) => (
              <option key={ uuidv4() } value={ filterBy }>{ filterBy }</option>))
          }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChange }
          name="compare"
          value={ compare_ }
        >
          {
            comparison.map((comparation) => (
              <option key={ uuidv4() } value={ comparation }>{ comparation }</option>))
          }
        </select>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="digite um valor numérico"
          name="inputValueFilter"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            filterOptions(filtredBy_, inputValueFilter_, compare_);
            handleClick();
          } }
        >
          Enviar
        </button>
      </div>
      <div>
        <ul>
          <li>
            {
              `{filtredBy: ${filtredBy_},
              compare: ${compare_}
              inputValueFilter: ${inputValueFilter_}}`
            }
            <button type="button" data-testid="filter">X</button>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default InputFilters;
