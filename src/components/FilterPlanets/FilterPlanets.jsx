import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import { comparisons, allColumns } from '../../data/options';
import useFiltersPlanets from '../../hooks/useFiltersPlanets';
import useHandleColumnOptions from '../../hooks/useHandleColumnOptions';
import ListSelectFilters from './ListSelectFilters';

function FilterPlanets() {
  const [filters, setFilters] = useFiltersPlanets();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [optionsColumns,
    selectedColumns,
    setSelectedColumns] = useHandleColumnOptions();

  const {
    filterByName: { name },
    filterByNumericValues,
    filterByNumericValuesInputs,
    order: { column: columnName },
    order,
  } = filters;

  const { column, comparison, value } = filterByNumericValuesInputs;

  const handleChangeNumericFilter = ({ target: { name: title, value: param } }) => {
    const lessThanZero = param < 0 ? 0 : param;
    const newValue = title === 'value' ? lessThanZero : param;
    setFilters({
      ...filters,
      filterByNumericValuesInputs: { ...filterByNumericValuesInputs, [title]: newValue },
    });
  };

  const handleBtnNumericFilter = () => {
    setSelectedColumns([...selectedColumns, column]);
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterByNumericValuesInputs],
      filterByNumericValuesInputs: {
        column: optionsColumns.length > 1 ? optionsColumns[1] : '',
        comparison: 'maior que',
        value: 0,
      },
    });
    setSelectedFilters([...selectedFilters, filterByNumericValuesInputs]);
  };

  const handleChangeName = ({ target: { name: title, value: param } }) => {
    setFilters({ ...filters, filterByName: { [title]: param } });
  };

  const handleChangeOrder = ({ target: { name: title, value: param } }) => {
    setFilters({ ...filters, order: { ...order, [title]: param } });
  };

  const removeNumericFilter = ({ target: { id } }) => {
    setFilters({
      ...filters,
      reset: true,
      filterByNumericValues: filterByNumericValues
        .filter((filter) => filter.column !== id),
    });
    setSelectedFilters(selectedFilters.filter((filter) => filter.column !== id));
    setSelectedColumns(selectedColumns.filter((item) => item !== id));
  };

  return (
    <section>
      <Input
        name="name"
        id="name-filter"
        value={ name }
        placeholder="Digite o nome do Planeta"
        onChange={ handleChangeName }
      />
      <div>
        <Select
          name="column"
          id="column-filter"
          options={ optionsColumns }
          value={ column }
          text="Coluna: "
          onChange={ handleChangeNumericFilter }
        />
        <Select
          name="comparison"
          id="comparison-filter"
          options={ comparisons }
          value={ comparison }
          text="Comparação: "
          onChange={ handleChangeNumericFilter }
        />
        <Input
          name="value"
          id="value-filter"
          value={ value }
          placeholder="Digite um Valor"
          onChange={ handleChangeNumericFilter }
          type="number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleBtnNumericFilter }
        >
          Buscar
        </button>
      </div>
      <div>
        <Select
          id="column-sort"
          name="column"
          options={ allColumns }
          value={ columnName }
          text="Coluna: "
          onChange={ handleChangeOrder }
        />
        <Input
          text="Crescente"
          name="sort"
          id="column-sort-input-asc"
          value="ASC"
          onChange={ handleChangeOrder }
          type="radio"
        />
        <Input
          text="Decrescente"
          name="sort"
          id="column-sort-input-desc"
          value="DESC"
          onChange={ handleChangeOrder }
          type="radio"
        />
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => {} }
        >
          Sort
        </button>
      </div>
      <ListSelectFilters
        selectedFilters={ selectedFilters }
        removeNumericFilter={ removeNumericFilter }
      />
    </section>
  );
}

export default FilterPlanets;
