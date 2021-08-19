import React, { useContext, useState } from 'react';
import Select from './Inputs/Select';
import SWContext from '../Context/SWContext';

const COLUMN_FILTER_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARISON_FILTER_OPTIONS = ['maior que', 'menor que', 'igual a'];

const DEFAULT_FILTER = { column: 'population', comparison: 'maior que', value: 0 };

function FilterSection() {
  const { filters, setFilters } = useContext(SWContext);

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
    const { filterByNumericValues } = filters;
    setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, localFilterNumbers],
      },
    );
    return setLocalFilter(DEFAULT_FILTER);
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
            onChange={ handleChangeLocalFilter }
          />
          <Select
            testID="comparison-filter"
            options={ COMPARISON_FILTER_OPTIONS }
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
