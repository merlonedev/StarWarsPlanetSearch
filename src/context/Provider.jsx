import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanet, setFilteredPlanet] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
  });

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(endpoint);
      const resolve = await planets.json();
      const { results } = resolve;
      results.forEach((el) => delete el.residents);
      const setKey = Object.keys(results[0]);
      setData(results);
      setKeys(setKey);
      setLoading(false);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const planets = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLocaleLowerCase()));
    setFilteredPlanet(planets);
  }, [data, filters]);

  function handlerChange({ target: { value } }) {
    setFilter({ ...filters, filterByName: { name: value } });
  }

  const contextValue = {
    data,
    setData,
    keys,
    setKeys,
    loading,
    setLoading,
    filters,
    setFilter,
    filteredPlanet,
    setFilteredPlanet,
    handlerChange,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
