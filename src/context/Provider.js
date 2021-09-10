import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getPlanet = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((response) => response.json());
      results.forEach((result) => { delete result.residents; });
      setData(results);
      setFilterPlanet(results);
    };
    getPlanet();
  }, []);

  function handleChange({ target: { value } }) {
    const planets = data.filter(({ name }) => name
      .includes(value));
    setFilterPlanet(planets);
    // console.log(data);
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  const removeColumnFilter = (columnName) => {
    setFilters((prevFilters) => {
      const { filterByNumericValues } = prevFilters;
      return {
        ...prevFilters,
        filterByNumericValues: filterByNumericValues
          .filter(({ column }) => column !== columnName),
      };
    });
  };

  useEffect(() => {

  });

  const [compare, setCompare] = useState([
    'maior que', 'menor que', 'igual a',
  ]);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    compare,
    setCompare,
    filterPlanet,
    setFilterPlanet,
    handleChange,
    removeColumnFilter,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};
