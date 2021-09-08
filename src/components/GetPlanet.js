// Correção do acesso à API com o apoio do colega Eric Kreis
// Resolução com o apoio do colega Nikolas Silva
// Resolução do requisito 5 com apoio dos colegas Alice Gonçalves e Nikolas Silva
// https://www.youtube.com/watch?v=k0cZA0NYTyQ
// https://www.youtube.com/watch?v=5Tq4-UgPTDs
// Pesquisa nos projetos Trybe Wallet e Recipes App

import React, { useEffect, useState } from 'react';
import Table from './Table';
import { useProvider } from '../context/Provider';
import FilterByNumber from './FilterNumber';

function GetPlanet() {
  const [data, setData] = useState([]);
  const { filters, setFilters } = useProvider();
  const { filterByNumericValues } = filters;

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  function filterData(rows) {
    const { filterByName: { name } } = filters;
    const results = [];
    const minusOne = -1;

    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;

        switch (comparison) {
        case 'maior que':
          results.push(rows.filter((row) => (
            row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
          && parseInt(row[column], 0) > parseInt(value, 0)
          )));
          break;
        case 'menor que':
          results.push(rows.filter((row) => (
            row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
          && parseInt(row[column], 0) < parseInt(value, 0)
          )));
          break;
        case 'igual a':
          results.push(rows.filter((row) => (
            row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
          && parseInt(row[column], 0) === parseInt(value, 0)
          )));
          break;
        default:
        }
      });

      if (results[0] && results[1]) {
        const finalFilter = results[0].filter((planet) => (
          results[1].includes(planet)
        ));
        return finalFilter;
      }
      return results[0];
    }
    return rows.filter((row) => (
      row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
    ));
  }

  const deleteFilter = () => {
    const checkFilters = filterByNumericValues;
    checkFilters.shift();
    setFilters({
      ...filters,
      filterByNumericValues: checkFilters,
    });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Pesquisar Planeta:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            ...filters,
            filterByName: {
              name: e.target.value,
            },
          }) }
        />
      </label>
      <FilterByNumber />
      { filterByNumericValues.length > 0
      && (
        filterByNumericValues.map((value, index) => (
          <div data-testid="filter" key={ index }>
            <span>{ `${value.column} ` }</span>
            <span>{ `${value.comparison} ` }</span>
            <span>{ `${value.value} ` }</span>
            <button
              onClick={ deleteFilter }
              type="button"
            >
              X
            </button>
          </div>))
      )}
      <Table dataTable={ filterData(data) } />
    </div>
  );
}

export default GetPlanet;
