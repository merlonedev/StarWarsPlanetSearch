import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';

function Header() {
  const {
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
  useEffect(() => {
    const { filterByName: { name } } = filters;
    if (!name) {
      setFilteredPlanets(data);
    } else {
      setFilteredPlanets(
        data.filter(({ name: planetName }) => planetName.toLowerCase().includes(name)),
      );
    }
  }, [filters, data, setFilteredPlanets, numericFilters]);

  useEffect(() => {
    const noRepeatFilters = columnFilters.filter(
      (column) => numericFilters.some((filter) => column !== filter.column),
    );
    if (noRepeatFilters.length) {
      setColumnFilters(noRepeatFilters);
    }
    console.log(noRepeatFilters);
  }, [numericFilters]);

  return (
    <header>
      <label htmlFor="name-filter">
        Termo de busca:
        <input
          data-testid="name-filter"
          placeholder="Insira o nome do planeta que deseja buscar"
          onChange={ ({ target: { value } }) => setFilters(
            {
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
    </header>
  );
}

export default Header;
