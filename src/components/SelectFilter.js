import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilter() {
  const { /*  filters, */ setFilters } = useContext(Context);
  // const { filterByNumericValues: { name } } = filters;

  // const { planets } = useContext(Context);
  // console.log(planets[0]);

  const arrayOfColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const arrayOfTypesOfComparisons = [
    'maior que', 'menor que', 'igual a',
  ];

  function handleChange({ target: { value } }) {
    setFilters({
      filterByNumericValues: { name: value },
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setFilters({

    });
  }

  return (
    <div>
      {/* { console.log(planets[0]) } */}

      <select data-testid="column-filter">
        { arrayOfColumns.map((column) => (
          <option key={ column } value={ column }>{ column }</option>
        )) }
      </select>
      <select data-testid="comparison-filter">
        { arrayOfTypesOfComparisons.map((types) => (
          <option key={ types } value={ types }>{ types }</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="0"
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Add filter
      </button>
    </div>
  );
}

export default SelectFilter;
