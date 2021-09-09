import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Form({ comparison, availableColumns }) {
  const [form, setForm] = useState({
    column: availableColumns[0],
    comparison,
    value: 0,
  });

  const { filters,
    setFilters } = useContext(MyContext);

  function handleFilter({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function clickToFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, form],
    });
  }

  useEffect(() => {
    setForm({
      column: availableColumns[0],
      comparison,
      value: 0,
    });
  }, [availableColumns, comparison]);

  return (
    <div>
      <select
        onChange={ (e) => handleFilter(e) }
        name="column"
        data-testid="column-filter"
      >
        {
          availableColumns
            .map((column1, index) => (
              <option key={ index } value={ column1 }>
                { column1 }
              </option>))
        }
      </select>
      <select
        value={ form.comparison }
        onChange={ (e) => handleFilter(e) }
        name="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="num">
        <input
          value={ form.value }
          onChange={ (e) => handleFilter(e) }
          name="value"
          data-testid="value-filter"
          type="number"
          id="number"
        />
      </label>
      <button
        onClick={ clickToFilter }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

Form.propTypes = {
  comparison: PropTypes.string.isRequired,
  availableColumns: PropTypes.string.isRequired,
};

export default Form;
