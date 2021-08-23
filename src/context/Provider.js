import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      // console.log('arrayDataProvider', results);
      setData(results);
      setPlanet(results);
    };
    getPlanets();
  }, []);

  function handleFilter({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
    console.log('verifica', target.value);
    const filter = data
      .filter(({ name }) => name.toLowerCase().includes(target.value.toLowerCase()));
    setPlanet(filter);
  }
  const contextValue = { data, handleFilter, planet };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default Provider;
