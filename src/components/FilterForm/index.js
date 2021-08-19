import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

const columnFiltersOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];
const comparisonFiltersOptions = ['maior que', 'menor que', 'igual a'];

const FilterForm = () => {
  const [columnFilters, setColumnFilters] = useState(columnFiltersOptions);
  const [comparisonFilter, setComparisonFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { data, setData, filters, setFilters } = useContext(StarWarsContext);
  const { filterByName: { name: filterName }, filterByNumericValues } = filters;
  const { order: { column: columnSort, sort }, order } = filters;

  const columnsSort = (data.length > 0)
    ? Object.keys(data[0]).filter((key) => key !== 'residents') : [];

  useEffect(() => {
    const filtersSelected = filterByNumericValues.map(({ column }) => column);
    let newColumnFilters = [...columnFiltersOptions];
    filtersSelected.forEach((columnFilterSelected) => {
      newColumnFilters = newColumnFilters
        .filter((columnFilter) => columnFilter !== columnFilterSelected);
    });
    setComparisonFilter((prevCompareFilter) => (
      { ...prevCompareFilter, column: newColumnFilters[0] }));
    setColumnFilters(newColumnFilters);
  }, [filterByNumericValues]);

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleFilterByNumericValues = ({ target: { name, value } }) => {
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

  const handleInputsSort = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      order: { ...order, [name]: value },
    });
  };

  const handleClickSort = () => {
    const sortedData = [...data];
    if (sort === 'ASC') {
      if (columnSort === 'films') {
        sortedData.sort(({ films: { length: a } }, { films: { length: b } }) => a - b);
      } else {
        sortedData
          .sort(({ [columnSort]: a }, { [columnSort]: b }) => a.localeCompare(b))
          .sort((a, b) => (a[columnSort] - b[columnSort]));
      }
    } else if (sort === 'DESC') {
      if (columnSort === 'films') {
        sortedData.sort(({ films: { length: a } }, { films: { length: b } }) => b - a);
      } else {
        sortedData
          .sort(({ [columnSort]: a }, { [columnSort]: b }) => b.localeCompare(a))
          .sort((a, b) => b[columnSort] - a[columnSort]);
      }
    }
    setData(sortedData);
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

  const renderSortInputs = () => (
    <div className="sort-inputs">
      <select
        data-testid="column-sort"
        name="column"
        value={ columnSort }
        onChange={ handleInputsSort }
      >
        { columnsSort.map((columnOption) => (
          <option key={ columnOption } value={ columnOption }>{ columnOption }</option>
        )) }
      </select>
      <label htmlFor="sort-input-asc">
        Ascending
        <input
          id="sort-input-asc"
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASC"
          checked={ sort === 'ASC' }
          onChange={ handleInputsSort }
        />
      </label>
      <label htmlFor="sort-input-desc">
        Descending
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESC"
          checked={ sort === 'DESC' }
          onChange={ handleInputsSort }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClickSort }
      >
        Sort
      </button>
    </div>
  );

  const { column, comparison, value } = comparisonFilter;
  const renderFilterByNumericalValues = () => (
    <div className="filter-by-numerical-values">
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleFilterByNumericValues }
      >
        { columnFilters.map((columnOption) => (
          <option key={ columnOption } value={ columnOption }>{ columnOption }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleFilterByNumericValues }
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
        onChange={ handleFilterByNumericValues }
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
      { renderSortInputs() }
      { renderFilterByNumericalValues() }
    </section>
  );
};

export default FilterForm;
