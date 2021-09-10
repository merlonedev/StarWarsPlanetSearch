import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import RenderFilters from './RenderFilters';
import Selector from './Selector';

function Header() {
  const { filters,
    planetsData,
    setFilters,
    filterOptions,
    setFilterOptions,
    setOrderedPlanets,
    orderedPlanets,
    setPlanetsFiltered,
  } = useContext(MyContext);

  const { filterByNumericValues } = filters;

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSort = ({ target: { name, value } }) => {
    setOrderedPlanets((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (filterOption) => {
    setFilters((prevState) => {
      if (!prevState.filterByNumericValues.length) {
        return { ...prevState,
          filterByNumericValues: [{
            ...filterOption,
          },
          ] };
      } return { ...prevState,
        filterByNumericValues:
         [...prevState.filterByNumericValues,
           { ...filterOption }] };
    });
  };

  const setColumnsOptions = () => {
    let copyColumns = columns;
    const optionColumn = filterByNumericValues.map(({ column }) => column);
    optionColumn.forEach(
      (item) => {
        copyColumns = copyColumns.filter(
          (col) => col !== item,
        );
      },
    );
    return copyColumns;
  };

  const columnsOptions = setColumnsOptions();

  const handleRemoveFilter = (col) => {
    console.log(col);
    const removeFilter = filterByNumericValues.filter((item) => item.column !== col);
    setFilters({
      ...filters,
      filterByNumericValues: removeFilter,
    });
    console.log({ removeFilter });
  };
  const sortPlantes = (a, b, sort, column) => {
    if (sort === 'ASC') {
      return Number.isNaN(Number(a[column]))
        ? a[column].localeCompare(b[column]) : a[column] > b[column];
    }
    if (sort === 'DESC') {
      return Number.isNaN(Number(a[column]))
        ? b[column].localeCompare(a[column]) : a[column] < b[column];
    }
    return false;
  };

  const handleSort = () => {
    setFilters((prevState) => ({ ...prevState, order: { ...orderedPlanets } }));
    const { sort, column } = orderedPlanets;
    let sortedPlanets = [...planetsData];
    if (sort && column) {
      sortedPlanets = sortedPlanets.sort((a, b) => sortPlantes(a, b, sort, column));
    }
    setPlanetsFiltered(sortedPlanets);
  };

  console.log(orderedPlanets.column);
  console.log(orderedPlanets.sort);
  console.log(filters);
  return (
    <header>
      <h1> Star Wars Planets </h1>
      <form>
        <div>
          <label htmlFor="filterByName">
            Filter By Name:
            <input
              id="filterByName"
              data-testid="name-filter"
              onChange={ ({ target: { value } }) => setFilters({
                ...filters,
                filterByName: {
                  name: value,
                },
              }) }
            />
          </label>
        </div>
        <div>
          <Selector
            testid="column-filter"
            options={ columnsOptions }
            name="column"
            value={ filterOptions.column }
            handleChange={ handleChange }
          />
          <Selector
            testid="comparison-filter"
            options={ comparisonOptions }
            name="comparison"
            value={ filterOptions.comparison }
            handleChange={ handleChange }
          />
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={ filterOptions.value }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => handleClick(filterOptions) }
          >
            Filtrar
          </button>
        </div>
        <div>
          <RenderFilters
            filters={ filterByNumericValues }
            handleClick={ handleRemoveFilter }
          />
        </div>
        <div>
          <Selector
            testid="column-sort"
            name="column"
            value={ orderedPlanets.column }
            options={ columnsOptions }
            handleChange={ handleChangeSort }
          />
          <label htmlFor="asc">
            ASC:
            <input
              type="radio"
              name="sort"
              value="ASC"
              data-testid="column-sort-input-asc"
              onChange={ handleChangeSort }
            />
          </label>
          <label htmlFor="desc">
            DESC:
            <input
              type="radio"
              name="sort"
              value="DESC"
              data-testid="column-sort-input-desc"
              onChange={ handleChangeSort }
            />
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ handleSort }
          >
            Sort
          </button>
        </div>
      </form>
    </header>
  );
}
export default Header;
