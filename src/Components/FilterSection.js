import React, { useContext, useState } from 'react';
import Select from './Inputs/Select';
import SWContext from '../Context/SWContext';

function FilterSection() {
  const {
    filters,
    setFilters,
    dropboxOptions,
    setDropboxOptions,
  } = useContext(SWContext);

  const { filterByNumericValues } = filters;
  const { COLUMN_OPTIONS, COMPARISON_OPTIONS } = dropboxOptions;
  const [localFilterNumbers, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleChangeLocalFilter = ({ target: { name, value } }) => {
    setLocalFilter(
      { ...localFilterNumbers, [name]: value },
    );
  };

  const sendNumberFiltersToContext = () => {
    const { column, comparison } = localFilterNumbers;

    const newColumns = COLUMN_OPTIONS.filter((item) => item !== column);
    const newComparisons = COMPARISON_OPTIONS.filter((item) => item !== comparison);
    setDropboxOptions({
      COLUMN_OPTIONS: newColumns,
      COMPARISON_OPTIONS: newComparisons,
    });
    setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, localFilterNumbers],
      },
    );
    setLocalFilter({
      column: newColumns[0],
      comparison: newComparisons[0],
      value: 0 });
  };

  const deleteFilter = ({ target }) => {
    const newFilters = filterByNumericValues.filter((item) => item.column !== target.id);
    setFilters({ ...filters,
      filterByNumericValues: newFilters,
    });
  };

  const renderFilters = () => (
    filterByNumericValues.map((item) => {
      if (item.column) {
        return (
          <div data-testid="filter" key={ item.column }>
            <p>
              {item.column}
              |
              {item.comparison}
              |
              {item.value}
            </p>
            <button type="button" onClick={ deleteFilter } id={ item.column }>X</button>
          </div>
        );
      }
      return null;
    })
  );

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Filtrar por Nome"
          data-testid="name-filter"
          onChange={ handleChange }
        />
        <div>
          <Select
            testID="column-filter"
            options={ COLUMN_OPTIONS }
            name="column"
            onChange={ handleChangeLocalFilter }
          />
          <Select
            testID="comparison-filter"
            options={ COMPARISON_OPTIONS }
            name="comparison"
            onChange={ handleChangeLocalFilter }
          />
          <input
            type="number"
            placeholder="Digite o Valor"
            data-testid="value-filter"
            name="value"
            onChange={ handleChangeLocalFilter }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ sendNumberFiltersToContext }
          >
            Filtrar
          </button>
        </div>
      </form>
      {renderFilters()}
    </section>
  );
}

export default FilterSection;
