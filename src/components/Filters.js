import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const Filters = () => {
  const { filters, setFilters, columnTypes } = useContext(AppContext);

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const handleChangeNumeric = ({ target: { name, value } }) => {
    if (name === 'value') {
      const onlyNumbers = /^\d*$/;
      if (value.match(onlyNumbers)) {
        setNumericFilter({ ...numericFilter, [name]: value });
      }
    } else {
      setNumericFilter({ ...numericFilter, [name]: value });
    }
  };

  const filterClick = async () => {
    const newFilters = filters.filterByNumericValues;
    newFilters.push(numericFilter);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
    const { column } = newFilters[newFilters.length - 1];
    const index = columnTypes.indexOf(column);
    columnTypes.splice(index, 1);
  };

  return (
    <div>
      <input
        style={ { display: 'block' } }
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        value={ filters.filterByName.name }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChangeNumeric }
        value={ numericFilter.column }
      >
        { columnTypes.map((column) => (
          <option key={ column }>{ column }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChangeNumeric }
        value={ numericFilter.comparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="text"
        name="value"
        onChange={ handleChangeNumeric }
        value={ numericFilter.value }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
