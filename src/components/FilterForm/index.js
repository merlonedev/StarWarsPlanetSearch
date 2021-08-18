import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

const FilterForm = () => {
  const [columnFilters/* , setColumnFilters */] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [comparisonFilter, setComparisonFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName: { name: filterName }, filterByNumericValues } = filters;
  const comparisonFiltersOptions = ['maior que', 'menor que', 'igual a'];

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handlefilterByNumericValues = ({ target: { name, value } }) => {
    setComparisonFilter({
      ...comparisonFilter,
      [name]: value,
    });
  };

  const handleClickAddFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, comparisonFilter],
    });
  };

  const renderFilterByName = () => (
    <div className="filter-by-name">
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Planet name"
        value={ filterName }
        onChange={ handleFilterByName }
      />
    </div>
  );

  const { value } = comparisonFilter;
  const renderFilterByNumericalValues = () => (
    <div className="filter-by-numerical-values">
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handlefilterByNumericValues }
      >
        { columnFilters.map((columnOption) => (
          <option key={ columnOption } value={ columnOption }>{ columnOption }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handlefilterByNumericValues }
      >
        { comparisonFiltersOptions.map((comparisonOption) => (
          <option
            key={ comparisonOption }
            value={ comparisonOption }
          >
            { comparisonOption }
          </option>
        )) }
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ handlefilterByNumericValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickAddFilter }
      >
        Add filter
      </button>
    </div>
  );

  return (
    <section className="filter-form">
      { renderFilterByName() }
      { renderFilterByNumericalValues() }
    </section>
  );
};

export default FilterForm;
