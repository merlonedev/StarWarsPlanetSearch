import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';

function Filter() {
  const { setInputName, filters, setInputNumeric } = useContext(Context);
  const [columnFilter, setColumnFilter] = useState();
  const [selectColumns, setSelectColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  function handleChange({ target }) {
    const { name, value } = target;
    setColumnFilter((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  const handleSelectColumns = (column) => {
    const optionsFilter = selectColumns.filter((item) => item !== column);
    setSelectColumns(optionsFilter);
    setColumnFilter({
      column: optionsFilter[0],
      comparison: 'maior que',
    });
  };

  function handleClick() {
    const { column = 'population', comparison = 'maior que', value = 0 } = columnFilter;
    setInputNumeric({
      column,
      comparison,
      value,
    });
    handleSelectColumns(column);
  }

  const usedFilters = () => {
    const filtersList = filters.filterByNumericValues.map((item, index) => (
      <div key={ index }>
        <p data-testid="filter">{`${item.column}, ${item.comparison}, ${item.value}`}</p>
        <button type="button">Remover</button>
      </div>
    ));
    return filtersList;
  };

  return (
    <div>
      <div>
        <label htmlFor="name-filter">
          Planeta:
          <input
            id="name-filter"
            name="name-filter"
            type="text"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => { setInputName(value); } }
          />
        </label>
        <br />

        <label htmlFor="column-filter">
          Coluna:
          <select
            id="column-filter"
            name="column"
            data-testid="column-filter"
            onChange={ handleChange }
          >
            {selectColumns.map((column, index) => (
              <option key={ index } value={ column }>{ column }</option>
            ))}
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Coluna:
          <select
            id="comparison-filter"
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value-filter">
          Numero:
          <input
            id="value-filter"
            name="value"
            type="number"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar Filtro
        </button>
      </div>
      <div>
        {usedFilters()}
      </div>
    </div>
  );
}

export default Filter;
