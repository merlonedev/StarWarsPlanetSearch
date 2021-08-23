import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function CtxProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [newFilter, setNewFilter] = useState([]);

  const getPlanetList = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endpoint).then((response) => response.json());
    setData(results);
    setNewFilter(results);
  };
  useEffect(() => {
    getPlanetList();
  }, []);

  function teste({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
    const inputValue = data
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    setNewFilter(inputValue);
  }

  function receive(object) {
    console.log(object);
  }

  const contextValue = { data, teste, newFilter, receive };
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
