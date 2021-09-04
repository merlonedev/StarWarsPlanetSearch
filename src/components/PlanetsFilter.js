import React, { useContext, useState } from 'react';
import { PlanetContext } from '../Context/PlanetProvider';

const dropdownColumns = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const PlanetsFilter = () => {
  const {
    filters,
    setName,
    setNumericFilter,
    usedFilter,
    setUsedFilter,
  } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;
  const [dropdown, setDropdown] = useState(dropdownColumns[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ ({ target: { value: valueName } }) => setName(valueName) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: valueColumn } }) => setDropdown(valueColumn) }
      >
        {dropdownColumns.filter((column) => !usedFilter.includes(column))
          .map((column) => <option value={ column } key={ column }>{ column }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value: valueComparison } }) => (
          setComparison(valueComparison)) }
      >
        {comparisons.map((comparis) => (
          <option value={ comparis } key={ comparis }>{ comparis }</option>))}
      </select>

      <input
        data-testid="value-filter"
        onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
      />

      <button
        type="button"
        data-testid="button-filter"
        disabled={ !value }
        onClick={ () => {
          setNumericFilter([...filterByNumericValues,
            { dropdown, comparison, value }]);
          usedFilter.push(dropdown);
          setUsedFilter([...usedFilter]);
          setDropdown(dropdownColumns
            .filter((column) => !usedFilter.includes(column))[0]);
        } }
      >
        Filtrar
      </button>
    </div>
  );
};

export default PlanetsFilter;
