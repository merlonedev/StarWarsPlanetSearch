import React, { useContext, useState } from 'react';
import Select from './Inputs/Select';
import SWContext from '../Context/SWContext';

const DEFAULT_FILTER = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

function FilterSection() {
  const {
    filters,
    setFilters,
    dropboxOptions,
    setDropboxOptions,
  } = useContext(SWContext);

  const { filterByNumericValues } = filters;
  const { COLUMN_OPTIONS, COMPARISON_OPTIONS } = dropboxOptions;
  const [localFilterNumbers, setLocalFilter] = useState(DEFAULT_FILTER);

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
      column: COLUMN_OPTIONS[0],
      comparison: COMPARISON_OPTIONS[0],
      value: 0 });
  };

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
    </section>
  );
}

export default FilterSection;
