import React, { useContext, useState } from 'react';
import dataContext from '../context/dataContext';

function FilterByTag() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState();

  const { filterBy, setFilterBy, setFilterTags, filterTags } = useContext(dataContext);

  const filterByTag = () => {
    const newFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    const newTags = filterTags.filter((tag) => tag !== columnFilter);

    setFilterTags(newTags);
    setFilterBy([...filterBy, newFilter]);
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
          {filterTags.map((tag) => (
            <option key={ tag } value={ tag }>{tag}</option>
          ))}
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
