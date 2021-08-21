import React, { useContext } from 'react';
import MyContext from '../context/Context';

const COLUMNS_FILTER_ARRAY = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
function FilterForms() {
  const consumer = useContext(MyContext);
  const { setName, filters: { filterByName: { name: nameValue } } } = consumer;

  return (
    <form>
      <label htmlFor="filterByName">
        Planeta
        <input
          type="text"
          value={ nameValue }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setName(value) }
          id="filterByName"
          name="name"
          placeholder="Nome do planeta"
        />
      </label>

      <label htmlFor="filterByNumericValues">
        Atributos
        <select
          id="filterByNumericValues"
          name="column"
          data-testid="column-filter"
          value=""
          onChange={ handleNumericChange }
        >
          { COLUMNS_FILTER_ARRAY.map((item) => (
            <option
              key={ item }
              value={ item }
            >
              { item }
            </option>)) }
        </select>
      </label>
    </form>
  );
}

export default FilterForms;
