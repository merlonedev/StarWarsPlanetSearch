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
    selectedFilter,
    handleClickErase,
  } = useContext(AppContext);
  const { filteredBy: filteredBy_,
    inputValueFilter: inputValueFilter_,
    compare: compare_ } = filterField;

  const comparison = ['maior que', 'menor que', 'igual a'];

  const renderSelectedFilters = () => (
    <ul>
      {selectedFilter.map((info) => (
        <li key={ uuidv4() }>
          { JSON.stringify(info) }
          <button
            type="button"
            data-testid="filter"
            id={ info }
            onClick={ handleClickErase }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );

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
          name="filteredBy"
          value={ filteredBy_ }
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
            filterOptions(filteredBy_, inputValueFilter_, compare_);
            handleClick();
          } }
        >
          Enviar
        </button>
      </div>
      <div>
        {
          (selectedFilter.length) ? (renderSelectedFilters()) : (<p />)
        }
      </div>
    </div>
  );
};

export default InputFilters;
