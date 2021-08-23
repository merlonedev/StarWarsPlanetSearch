import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';

const InputFilters = () => {
  const {
    handleChangeNameFilter,
    handleClickFilter,
    columnsFilterBy: columns,
    selectedFilter,
    handleClickErase,
  } = useContext(AppContext);

  const [filteredBy, setFilteredBy] = useState('population');
  const [inputValueFilter, setInputValueFilter] = useState('');
  const [compare, setCompare] = useState('maior que');

  const comparison = ['maior que', 'menor que', 'igual a'];

  const renderSelectedFilters = () => (
    <ul>
      {selectedFilter.map((info) => (
        <li key={ uuidv4() } data-testid="filter">
          { JSON.stringify(info) }
          <button
            type="button"
            id={ info.filteredBy }
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
          onChange={ ({ target: { value } }) => setFilteredBy(value) }
          name="filteredBy"
          value={ filteredBy }
        >
          {
            columns.map((filterBy) => (
              <option key={ uuidv4() } value={ filterBy }>{ filterBy }</option>))
          }
        </select>
        <select
          data-testid="comparison-filter"
          name="compare"
          value={ compare }
          onChange={ ({ target: { value } }) => setCompare(value) }

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
          onChange={ ({ target: { value } }) => setInputValueFilter(value) }

        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            handleClickFilter({ filteredBy, inputValueFilter, compare }); // envia o estado local dentro de um objeto para o
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
