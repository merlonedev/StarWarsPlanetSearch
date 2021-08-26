import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function CtxProvider({ children }) {
  const [data, setData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' }, filterByNumericValues: [] });

  const getPlanetList = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endpoint).then((response) => response.json());
    setData(results);
    setNewFilter(results);
  };
  useEffect(() => {
    getPlanetList();
  }, []);

  function filterText({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
    const inputValue = data
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    setNewFilter(inputValue);
  }

  function receive(object) {
    const { coluna, comparacao, valor } = object;
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, object],
    });
    setFilters();
    const receiveResult = data.filter((teste) => {
      switch (comparacao) {
      case 'maior que':
        return Number(teste[coluna]) > Number(valor);
      case 'menor que':
        return Number(teste[coluna]) < Number(valor);
      case 'igual a':
        return Number(teste[coluna]) === Number(valor);
      default:
        return teste;
      }
    });
    if (receiveResult.length === 0) return setNewFilter([]);
    setNewFilter(receiveResult);
  }

  const contextValue = { data, filterText, newFilter, receive };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CtxProvider;
