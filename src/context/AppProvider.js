import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchAPI from '../services/requestAPI';

const AppProvider = ({ children }) => {
  const OPTIONS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const ONE = 1;
  const NEG_ONE = -1;

  const [data, setData] = useState([]);
  const [APIResult, setAPIResult] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const sortData = (toFilterData) => {
    const { order: { column, sort } } = filters;

    const info = column.toLowerCase();

    if (OPTIONS.includes(info)) {
      // Ordenação em ordem Crescente
      if (sort === 'ASC') {
        return (
          toFilterData.sort((a, b) => (Number(a[info]) - Number(b[info]))));
      }
      return (
        toFilterData.sort((a, b) => (Number(b[info]) - Number(a[info]))));
    }

    if (sort === 'ASC') {
      return (
        toFilterData.sort((a, b) => {
          if (a[info] > b[info]) return ONE;
          if (a[info] < b[info]) return NEG_ONE;
          return 0;
        }));
    }
  };

  const getPlanets = async () => {
    // Endpoint da API
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';

    // Resultado da requisição
    const planets = await fetchAPI(url);

    // Deleta os residentes de cada planeta
    planets.forEach((planet) => delete planet.residents);

    // Realiza o tratamento nas chaves que serão colunas da tabela
    const heading = Object.keys(planets[0]).map((info) => info.replace('_', ' '));

    // Seta os valores nos estados
    setData(planets);
    setAPIResult(planets);
    setHeadings(heading);
  };

  useEffect(() => {
    // Chamada da API
    getPlanets();

    // Função para filtrar de acordo com valor informado pelo usuário
    const filterData = () => {
      // Variável que recebera os resultados
      let result;
      // Busca os filtros numéricos
      const { filterByNumericValues } = filters;

      // Função para gerar os dados ordenados
      const newData = () => {
        // Realiza um for nos filtros numéricos
        filterByNumericValues.forEach(({ comparison, column, number }) => {
          // Busca o valor que o usuário informou
          const getNumber = Number(number);

          // Verifica qual o método de comparação
          if (comparison === 'menor que') {
            // Filtra os resultados de acordo com o método escolhido (menores que o valor)
            result = data.filter((el) => Number(el[column]) < getNumber);
          } else if (comparison === 'maior que') {
            // Filtra os resultados de acordo com o método escolhido (maiores que o valor)
            result = data.filter((el) => Number(el[column]) > getNumber);
          } else {
            // Filtra os resultados de acordo com o método escolhido (iguais ao valor)
            result = data.filter((el) => Number(el[column]) === getNumber);
          }
        });
      };
      // Chamada da função
      newData();
      // Seta os novos dados ordenados
      setAPIResult(result);
    };

    // Só realiza a chamada da função quando realmente existir algum filtro
    if (filters.filterByNumericValues[0]) { filterData(); }
  }, [data, filters, filters.filterByNumericValues, filters.order]);

  // Váriavel para guardar o nome digitado pelo usuário
  const nameFilter = filters.filterByName.name;

  // Valores e funções que ficarão disponiveis para os filhos
  const context = {
    APIResult,
    setAPIResult,
    headings,
    filters,
    setFilters,
    nameFilter,
    OPTIONS,
    sortData,
  };

  // Retorna o Provider com o value context para todos os seus filhos
  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

// PropTypes
AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;

export default AppProvider;
