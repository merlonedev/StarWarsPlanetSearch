import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';

function Header() {
  const {
    headers,
    filters,
    setFilters,
    data,
    setFilteredPlanets,
    numericFilters,
    setNumericFilters,
  } = useContext(AppContext);
  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [columnFilters, setColumnFilters] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [sortOptions, setSortOptions] = useState({ name: 'name', sort: 'ASC' });
  useEffect(() => {
    const copyData = [...data];
    const { filterByName: { name } } = filters;
    setFilteredPlanets([]);
    if (!name || name === '') {
      setFilteredPlanets(copyData);
    } else {
      const filtered = copyData
        .filter(({ name: planetName }) => planetName.toLowerCase().includes(name));
      setFilteredPlanets(filtered);
    }
  }, [filters, data, setFilteredPlanets, numericFilters]);

  useEffect(() => {
    const copyOptions = ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const noRepeatFilters = copyOptions.filter(
      (column) => numericFilters.some((filter) => column !== filter.column),
    );
    if (noRepeatFilters.length) {
      setColumnFilters(noRepeatFilters);
    }
  }, [numericFilters]);

  function changeSort({ target: { value } }) {
    setSortOptions(
      { ...sortOptions, sort: value },
    );
  }

  return (
    <header>
      <label htmlFor="name-filter">
        Termo de busca:
        <input
          data-testid="name-filter"
          placeholder="Insira o nome do planeta que deseja buscar"
          onChange={ ({ target: { value } }) => setFilters(
            {
              ...filters,
              filterByName: { name: value.toLowerCase() },
            },
          ) }
        />
      </label>
      <br />
      <label htmlFor="column-filter">
        Coluna:
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setState({ ...state, column: value }) }
          value={ state.column }
        >
          {
            columnFilters.map((column) => <option key={ column }>{ column }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Faixa de valor:
        <select
          data-testid="comparison-filter"
          onChange={
            ({ target: { value } }) => setState({ ...state, comparison: value })
          }
          value={ state.comparison }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setState({ ...state, value }) }
          value={ state.value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setNumericFilters([...numericFilters, state]) }
      >
        Filtrar
      </button>
      <div data-testid="filter">
        <button
          type="button"
          onClick={ () => {
            setNumericFilters([]);
            setFilteredPlanets(data);
          } }
        >
          x
        </button>
      </div>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setSortOptions(
          { ...sortOptions, name: value },
        ) }
      >
        {
          headers.map((header) => <option key={ header }>{ header }</option>)
        }
      </select>
      <label htmlFor="column-sort-input-asc">
        Ascendente
        <input
          type="radio"
          name="column-sort"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ changeSort }
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        Descendente
        <input
          type="radio"
          name="column-sort"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ changeSort }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setFilters({ ...filters, order: sortOptions }) }
      >
        Ordenar
      </button>
    </header>
  );
}

export default Header;
