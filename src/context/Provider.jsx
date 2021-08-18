import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const fetchUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchUrl.json();
      setData(results);
    };
    getApi();
  }, []);

  return (
    <Context.Provider value={ { data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
