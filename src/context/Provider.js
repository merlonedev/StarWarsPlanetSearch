import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filtersByName, setFiltersByName] = useState({ name: '' });

  useEffect(() => {
    async function fetchAPI() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(URL);
      const { results } = await request.json();
      results.map((planet) => delete planet.residents);
      setHeaders(Object.keys(results[0]));
      const filtered = results
        .filter((planet) => planet.name.includes(filtersByName.name));
      setData(filtered.length === 0 ? [] : filtered);
      // setData(results);
    }

    fetchAPI();
  }, [filtersByName]);

  useEffect(() => {
    const filtered = data
      .filter((planet) => planet.name.includes(filtersByName.name));
    setData(filtered);
  }, [filtersByName]);

  const handleChange = ({ target }) => {
    setFiltersByName({ name: target.value });
  };

  const context = {
    data,
    headers,
    setData,
    filtersByName,
    handleChange,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
