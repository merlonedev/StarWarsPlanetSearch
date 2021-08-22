import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url);
      const planetsJson = await planets.json();
      const { results } = planetsJson;
      setData(results);
    };

    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((dat) => dat.name.includes(name));
    setFilterName(filtered);
  }, [data, name]);

  const contextValue = {
    data,
    setData,
    filterName,
    setFilterName,
    name,
    setName,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
