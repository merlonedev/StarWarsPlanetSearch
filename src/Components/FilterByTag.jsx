import React, { useContext, useState } from 'react';
import dataContext from '../context/dataContext';

function FilterByTag() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('>');
  const [valueFilter, setValueFilter] = useState();
  const { setColumn, setComparison, setValue } = useContext(dataContext);

  const filterByTag = () => {
    setColumn(columnFilter);
    setComparison(comparisonFilter);
    setValue(valueFilter);
  };

  return (
    <div className="filterByTag">
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ (e) => setColumnFilter(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ (e) => setComparisonFilter(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setValueFilter(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterByTag() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByTag;
