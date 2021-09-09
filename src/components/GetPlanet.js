// Correção do acesso à API com o apoio do colega Eric Kreis
// Resolução com o apoio do colega Nikolas Silva
// Resolução do requisito 5 com apoio dos colegas Alice Gonçalves e Nikolas Silva
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
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
  const { filterByNumericValues, order } = filters;
  const minusOne = -1;

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

  function orderString(word) {
    if (order.sort === 'ASC') {
      return word.sort((a, b) => {
        if (a.name < b.name) {
          return minusOne;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    return word.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return minusOne;
      }
      return 0;
    });
  }

  function orderNumber(number) {
    console.log(number);
    if (order.sort === 'ASC') {
      return number.sort((a, b) => (
        a.orbital_period.localeCompare(b.orbital_period, undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      ));
    }
    return number.sort((a, b) => b.orbital_period - a.orbital_period);
  }

  function orderData(dataList) {
    if (order.column === 'Name') {
      const dataOrder = orderString(dataList);

      return dataOrder;
    }
    const dataOrder = orderNumber(dataList);

    return dataOrder;
  }

  const [localSort, setLocalSort] = useState({
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  function orderList() {
    console.log({
      ...filters,
      ...localSort,
    });
    setFilters({
      ...filters,
      ...localSort,
    });
  }

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
      <select
        data-testid="column-sort"
        onChange={ (e) => setLocalSort({
          order: {
            ...localSort.order,
            column: e.target.value,
          },
        }) }
      >
        <option value="Name">Name</option>
        <option value="orbital_period">Orbital Period</option>
      </select>

      <div
        onChange={ (e) => setLocalSort({
          order: {
            ...localSort.order,
            sort: e.target.id,
          },
        }) }
      >
        <label htmlFor="ASC">
          Crescente
          <input
            type="radio"
            name="sort"
            id="ASC"
            data-testid="column-sort-inpot-asc"
          />
        </label>
        <label htmlFor="DESC">
          Decrescente
          <input
            type="radio"
            name="sort"
            id="DESC"
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ orderList }
      >
        Ordenar
      </button>
      <Table dataTable={ orderData(filterData(data)) } />
    </div>
  );
}

export default GetPlanet;
