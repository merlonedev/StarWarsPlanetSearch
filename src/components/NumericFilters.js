import React, { useState, useContext } from 'react';
import myContext from '../context/myContext';

function NumericFilters() {
  const { filters, setFilters } = useContext(myContext);
  const [localFilters, setLocalFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const dropFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const dropNumerics = ['maior que', 'menor que', 'igual a'];

  if (localFilters.comparison === 'maior que') {
    setLocalFilters({
      ...localFilters,
      comparison: '>',
    });
  }

  if (localFilters.comparison === 'menor que') {
    setLocalFilters({
      ...localFilters,
      comparison: '<',
    });
  }

  if (localFilters.comparison === 'igual a') {
    setLocalFilters({
      ...localFilters,
      comparison: '===',
    });
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLocalFilters({
      ...localFilters,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        localFilters,
      ],
    });
  };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => handleChange(e) }
      >
        { dropFilters.map((info) => <option value={ info } key={ info }>{info}</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => handleChange(e) }
      >
        { dropNumerics.map((i) => <option value={ i } key={ i }>{i}</option>) }
      </select>
      <input
        type="number"
        name="value"
        onChange={ (e) => handleChange(e) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Adicionar filtro
      </button>
    </>
  );
}

export default NumericFilters;
