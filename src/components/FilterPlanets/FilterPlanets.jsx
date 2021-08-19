import React from 'react';
import Input from './Input';
import Select from './Select';
import { columns, comparisons } from '../../helpers/options';
import useFiltersPlanets from '../../hooks/useFiltersPlanets';

function FilterPlanets() {
  const [filters, setFilters] = useFiltersPlanets();
  const {
    filterByName: { name },
    filterByNumericValues: [{ column, comparison, value }],
  } = filters;
  const handleChangeValue = () => undefined;

  const handleChangeName = ({ target: { value: planet } }) => {
    setFilters({ ...filters, filterByName: { name: planet } });
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
        />
        <Select
          name="comparison"
          id="comparison-filter"
          options={ comparisons }
          value={ comparison }
          text="Comparação: "
        />
        <Input
          name="value"
          id="value-filter"
          value={ value }
          placeholder="Digite um Valor"
          onChange={ handleChangeValue }
          type="number"
        />
      </div>
    </section>
  );
}

export default FilterPlanets;
