import React, { useContext, useState } from 'react';
import StarContext from '../../context/StarContext';

function NumericInput() {
  const { filters, setFilters, columns, setColumns } = useContext(StarContext);
  const [formState, setFormState] = useState({
    column: 'diameter',
    comparison: 'maior que',
    value: '0',
  });

  function handleChange({ target }) {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  }

  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        formState,
      ],
    });

    setColumns(columns.filter((c) => c !== formState.column));
  }

  return (
    <div className="mb-3">
      <label htmlFor="column-input" className="form-label">
        column:
        <select
          data-testid="column-filter"
          className="form-select"
          name="column"
          id="column-input"
          value={ formState.column }
          onChange={ handleChange }
        >
          {columns.map((c) => (
            <option key={ c } value={ c }>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="column-input" className="form-label">
        comparison:
        <select
          data-testid="comparison-filter"
          className="form-select"
          name="comparison"
          value={ formState.comparison }
          id="comparison-input"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-input" className="form-label">
        value:
        <input
          data-testid="value-filter"
          className="form-control"
          type="number"
          value={ formState.value }
          name="value"
          id="value-input"
          onChange={ handleChange }
        />
      </label>

      <button
        data-testid="button-filter"
        className="btn btn-primary"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericInput;
