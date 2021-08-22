//! A IDEIA PRINCIPAL É DEIXAR TUDO NESSE ARQUIVO, INCLUINDO OS FILTROS
//! TAMBÉM PODERIA DEIXAR ALGUM FILTRO EM HOME, MAS QUERO FAZER COM QUE PROVIDER,
//! SEJA O CENTRO NERVOSO DO PROGRAMA, FAZENDO TODO CONTROLE E MUDANÇA DE ESTADOS
//! E GERENCIAMENTO DAS FUNÇÕES.

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/fetchAPI';
import { INITIAL_STATE } from '../service/data';

export default function ProviderStartWars({ children }) {
  const [planets, setPlanet] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [filter, setFilter] = useState(INITIAL_STATE);

  //! povoa o array planets com chamada assíncrona da API
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchAPI();
      setPlanet(results);
    };
    getPlanets();
  }, []);

  //! faz o filtro dos planets
  const handleFilterPlanetByText = ({ target: { value } }) => {
    setFilter({ ...filter,
      filters: { filterByName: { name: value.toLowerCase() } } });
    const result = planets.filter(({ name }) => (
      name.toLowerCase().includes(value.toLowerCase())));
    if (result.length === 0) return setFiltered(null);
    setFiltered(result);
  };

  function getValuesNumeric(obj) {
    const { column, comparison, value } = obj;
    setFilter({ ...filter,
      filters: { ...filter.filters,
        filterByNumericValues: [obj],
      },
    });
    const result = planets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        return planet;
      }
    });
    if (result.length === 0) return setFiltered(null);
    setFiltered(result);
  }

  const context = {
    handleFilterPlanetByText,
    planets,
    filtered,
    getValuesNumeric,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

ProviderStartWars.propTypes = {
  children: PropTypes.node.isRequired,
};

// //! faz o filtro dos planets
// const handleFilterPlanetByText = ({ target: { value } }) => {
//   setFilter({ ...filter,
//     filters: { filterByName: { name: value.toLowerCase() } } });
//   const result = planets.filter(({ name }) => (
//     name.toLowerCase().includes(value.toLowerCase())));
//   if (result.length === 0) return setFiltered(null);
//   setFiltered(result);
// };
// {column: "diameter", comparison: "igual a", value: "333"}
// function handleColumn({ target: { value: selectColumn } }) {
//   setFilter({ ...filter,
//     filters: { ...filter.filters,
//       filterByNumericValues:
//       [{ ...filter.filters.filterByNumericValues[0],
//         column: selectColumn }] } });
// }

// function handleComparison({ target: { value: selectComparison } }) {
//   setFilter({ ...filter,
//     filters: { ...filter.filters,
//       filterByNumericValues:
//       [{ ...filter.filters.filterByNumericValues[0],
//         comparison: selectComparison }] } });
// }

// function handleValue({ target: { value: selectValue } }) {
//   setFilter({ ...filter,
//     filters: { ...filter.filters,
//       filterByNumericValues:
//       [{ ...filter.filters.filterByNumericValues[0],
//         value: selectValue }] } });
// }

// const handleSubmit = () => {
//   const { column, comparison, value } = filter.filters.filterByNumericValues[0];
//   console.log(column, comparison, value);
//   // const result = planets.filter((planet) => {
//   //   switch (comparison) {
//   //   case 'maior que':
//   //     return Number(planet[column]) > Number(value);
//   //   case 'menor que':
//   //     return Number(planet[column]) < Number(value);
//   //   case 'igual a':
//   //     console.log('aqui');
//   //     return Number(planet[column]) === Number(value);
//   //   default:
//   //     return planet;
//   //   }
//   // });
//   // if (result.length === 0) return setFiltered(null);
//   // setFiltered(result);
// }
