import React, { useContext } from 'react';
import Context from '../Context/Context';

function FilterNumeric() {
  const { functionsFilters: { numericFilter } } = useContext(Context);
  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <form>
      <label htmlFor="column-filter">
        Type:
        <select
          data-testid="column-filter"
          id="column-filter"
        >
          { options.map((option, index) => (
            <option
              key={ index }
              value={ option }
            >
              { option }
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ numericFilter }
      >
        Add Filter
      </button>
    </form>
  );
}

export default FilterNumeric;
