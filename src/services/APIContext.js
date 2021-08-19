import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext({});
const URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';
const NUM_NEGATIVE = -1;
const NUM_POSITIVE = 1;

function StarWarsPlanets({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setsearchText] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnTags, setColumnTags] = useState([
    'population', 'orbital_period', 'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparisonParams] = useState(['maior que', 'menor que', 'igual a']);
  const [numericFilterList, setNumericFilterList] = useState([]);
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [order, setOrder] = useState({
    column: 'population',
    sort: '',
  });
  const [sortedData, setSortedData] = useState(data.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return NUM_NEGATIVE;
    return 0;
  }));

  useEffect(() => {
    fetch(URL_BASE)
      .then((response) => response.json())
      .then((planets) => setData(planets.results));
  }, []);

  useEffect(() => {
    const planets = data.filter((planet) => planet.name.includes(searchText));
    setFilteredPlanets(planets);
  }, [data, searchText]);

  function handleNumericFilter() {
    setNumericFilterList([...numericFilterList, numericFilters]);
    columnTags.forEach((tag) => {
      if (tag === numericFilters.column) {
        const newColumnTags = [...columnTags];
        newColumnTags.splice(newColumnTags.indexOf(tag), 1);
        setColumnTags(newColumnTags);
      }
    });
  }

  function handleClickFilter() {
    const numericFilteredPlanets = data.filter((planet) => {
      const targetTag = Number(planet[numericFilters.column]);
      const inputValue = Number(numericFilters.value);
      switch (numericFilters.comparison) {
      case 'maior que':
        return targetTag > inputValue;
      case 'menor que':
        return targetTag < inputValue;
      case 'igual a':
        return targetTag === inputValue;
      default:
        return numericFilteredPlanets;
      }
    });
    setFilteredPlanets(numericFilteredPlanets);
    handleNumericFilter();
  }

  function handleClickSortButton() {
    if (order.sort === 'ASC') {
      setFilteredPlanets(
        [...data].sort((a, b) => {
          if (Number(a[order.column]) < Number(b[order.column])) return NUM_NEGATIVE;
          if (Number(a[order.column]) > Number(b[order.column])) return NUM_POSITIVE;
          return 0;
        }),
      );
    }
    if (order.sort === 'DESC') {
      setFilteredPlanets(
        [...data].sort((a, b) => {
          if (Number(a[order.column]) > Number(b[order.column])) return NUM_NEGATIVE;
          if (Number(a[order.column]) < Number(b[order.column])) return NUM_POSITIVE;
          return 0;
        }),
      );
    }
  }

  function removeNumericFilter(event) {
    const newNumericFilterList = [...numericFilterList];
    newNumericFilterList.splice(newNumericFilterList.indexOf(event.target), 1);
    setNumericFilterList(newNumericFilterList);
    setFilteredPlanets(data);
  }

  function handleChangeValue(event) {
    setNumericFilters({ ...numericFilters, value: event.target.value });
  }

  function handleChangeColumn(event) {
    setNumericFilters({ ...numericFilters, column: event.target.value });
  }

  function handleChangeComparison(event) {
    setNumericFilters({ ...numericFilters, comparison: event.target.value });
  }

  function renderNumericFilter() {
    return numericFilterList.map((selectedFilter, index) => (
      <div key={ index } data-testid="filter">
        <span>
          {`${selectedFilter.column} |
          ${selectedFilter.comparison} |
          ${selectedFilter.value}`}
        </span>
        <button onClick={ removeNumericFilter } type="button">
          Remover
        </button>
      </div>
    ));
  }

  function filterByNameInput() {
    return (
      <form>
        <label htmlFor="name-filter">
          Planet:
          <input
            type="text"
            name="name-filter"
            placeholder="Search"
            data-testid="name-filter"
            onChange={ (e) => setsearchText(e.target.value) }
          />
        </label>
      </form>
    );
  }

  function numericFilter() {
    return (
      <section>
        <select data-testid="column-filter" onChange={ handleChangeColumn }>
          {columnTags.map((tag) => (
            <option key={ tag } value={ tag }>
              {tag}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChangeComparison }
        >
          {comparisonParams.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ handleChangeValue }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickFilter }
        >
          Adicionar filtro
        </button>
      </section>
    );
  }

  function sortForm() {
    return (
      <form>
        <select
          data-testid="column-sort"
          onChange={ (e) => setOrder({ ...order, column: e.target.value }) }
        >
          {columnTags.map((sortTag) => (
            <option key={ sortTag } value={ sortTag }>
              {sortTag}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          <input
            type="radio"
            name="sort-input"
            data-testid="column-sort-input-asc"
            id="ASC"
            value="ASC"
            onClick={ (e) => setOrder({ ...order, sort: e.target.value }) }
          />
          ascendente
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            name="sort-input"
            data-testid="column-sort-input-desc"
            id="DESC"
            value="DESC"
            onClick={ (e) => setOrder({ ...order, sort: e.target.value }) }
          />
          descendente
        </label>
        <button
          onClick={ handleClickSortButton }
          type="button"
          data-testid="column-sort-button"
        >
          Adicionar filtro ordenado
        </button>
      </form>
    );
  }

  const contextValue = {
    filteredPlanets, sortedData, setSortedData,
  };

  return (
    <Context.Provider value={ contextValue }>
      {numericFilter()}
      {filterByNameInput()}
      {renderNumericFilter()}
      {sortForm()}
      {children}
    </Context.Provider>
  );
}

StarWarsPlanets.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsPlanets, Context };
