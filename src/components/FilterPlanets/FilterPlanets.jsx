import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import { comparisons } from '../../helpers/options';
import useFiltersPlanets from '../../hooks/useFiltersPlanets';
import useHandleColumnOptions from '../../hooks/useHandleColumnOptions';

function FilterPlanets() {
  const [filters, setFilters] = useFiltersPlanets();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [optionsColumns,
    handleColumnOptions,
    setHandleColumnSelection] = useHandleColumnOptions();

  const { selected, indexFilter } = handleColumnOptions;

  const {
    filterByName: { name },
    filterByNumericValues,
  } = filters;

  const { column, comparison, value } = filterByNumericValues[indexFilter];

  const handleChangeNumericFilter = ({ target: { name: title, value: param } }) => {
    const newParam = filterByNumericValues.map((filter, index) => (
      index === indexFilter
        ? { ...filterByNumericValues[indexFilter], [title]: param }
        : filter
    ));
    setFilters({
      ...filters,
      filterByNumericValues: newParam,
    });
  };

  const handleNumericFilter = () => {
    setHandleColumnSelection({
      selected: [...selected, column],
      indexFilter: indexFilter + 1,
    });
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues,
        { column: optionsColumns[1], comparison: comparisons[0], value: 0 },
      ],
      numericFilter: true,
    });
    setSelectedFilters([...filterByNumericValues]);
  };

  const handleChangeName = ({ target: { name: title, value: param } }) => {
    setFilters({ ...filters, filterByName: { [title]: param } });
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
          onClick={ handleNumericFilter }
        >
          Buscar
        </button>
      </div>
      {selectedFilters.length ? (
        <ul>
          {selectedFilters.map((filter) => (
            <li
              data-testid="filter"
              key={ filter.column }
            >
              {JSON.stringify(filter)}
              <button type="button">X</button>
            </li>
          ))}
        </ul>
      ) : ''}
    </section>
  );
}

export default FilterPlanets;
