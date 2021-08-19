import React from 'react';
import Input from './Input';
import Select from './Select';
import { columns, comparisons } from '../../helpers/options';
import useFiltersPlanets from '../../hooks/useFiltersPlanets';

function FilterPlanets() {
  const [filters, setFilters, setNumericFilter] = useFiltersPlanets();
  const {
    filterByName: { name },
    filterByNumericValues: [{ column, comparison, value }],
    filterByNumericValues,
  } = filters;

  const handleChangeNumericFilter = ({ target: { name: title, value: param } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filterByNumericValues[0], [title]: param }],
    });
  };

  const handleNumericFilter = () => setNumericFilter(true);

  const handleChangeName = ({ target: { value: param } }) => {
    setFilters({ ...filters, filterByName: { name: param } });
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
          options={ columns }
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
    </section>
  );
}

export default FilterPlanets;
