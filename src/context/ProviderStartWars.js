//! A IDEIA PRINCIPAL É DEIXAR TUDO NESSE ARQUIVO, INCLUINDO OS FILTROS
//! TAMBÉM PODERIA DEIXAR ALGUM FILTRO EM HOME, MAS QUERO FAZER COM QUE PROVIDER,
//! SEJA O CENTRO NERVOSO DO PROGRAMA, FAZENDO TODO CONTROLE E MUDANÇA DE ESTADOS
//! E GERENCIAMENTO DAS FUNÇÕES.

// ? Porque tem comportamento 'atrasado' do estado filters?
// ? Porque não funciona quando tiramos o event?

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/fetchAPI';
import { INITIAL_STATE } from '../service/data';

export default function ProviderStartWars({ children }) {
  const [planets, setPlanet] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [filters, setFilter] = useState(INITIAL_STATE);
  const [newFilter, setNewFilter] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchAPI();
      setPlanet(results);
    };
    getPlanets();
  }, []);

  // const FilterByTextValue = ({ target: { value } }) => {
  //   setFilter({ ...filters,
  //     filterByName: { name: value.toLowerCase() } });
  //   const result = planets.filter(({ name }) => (
  //     name.toLowerCase().includes(value.toLowerCase())));
  //   if (result.length === 0) return setFiltered(null);
  //   setFiltered(result);
  // };

  function dummy() {
    console.log('dummy', filters);
  }

  const FilterByTextValue = ({ target: { value } }) => {
    setFilter({ ...filters,
      filterByName: { name: value.toLowerCase() } });
    console.log('aqui', filters);
    dummy();
    // const result = planets.filter(({ name }) => (
    //   name.toLowerCase().includes(value.toLowerCase())));
    // if (result.length === 0) return setFiltered(null);
    // setFiltered(result);
  };

  function FilterByNumericValue(obj) {
    const { column, comparison, value } = obj;
    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
    setNewFilter(true);
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

  function CleanFilter() {
    const obj = { column: '', comparison: '', value: '' };
    FilterByNumericValue(obj);
  }

  const context = {
    FilterByTextValue,
    FilterByNumericValue,
    CleanFilter,
    planets,
    filtered,
    newFilter,
    filters,
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
