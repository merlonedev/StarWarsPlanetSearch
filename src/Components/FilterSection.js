import React, { useContext } from 'react';
import Select from './Inputs/Select';
import SWContext from '../Context/SWContext';

const COLUMN_FILTER_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON_FILTER_OPTIONS = [
  'maior que',
  'menor que',
  'igual a',
];

function FilterSection() {
  const { filters, setFilters } = useContext(SWContext);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleChangeFilterNumbers = ({ target: { name, value } }) => {
    const { filterByNumericValues } = filters;
    setFilters(
      { ...filters,
        filterByNumericValues: [{ ...filterByNumericValues[0], [name]: value }] },
    );
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
            options={ COLUMN_FILTER_OPTIONS }
            name="column"
            onChange={ handleChangeFilterNumbers }
          />
          <Select
            testID="comparison-filter"
            options={ COMPARISON_FILTER_OPTIONS }
            name="comparison"
            onChange={ handleChangeFilterNumbers }
          />
          <input
            type="number"
            placeholder="Digite o Valor"
            data-testid="value-filter"
            name="value"
            onChange={ handleChangeFilterNumbers }
          />
          <button type="button">Filtrar</button>
        </div>
      </form>
    </section>
  );
}

export default FilterSection;
