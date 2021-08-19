import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(url).then((response) => response.json());
      setData(results.results);
    };
    getApi();
  }, []);

  const context = { data, setData };

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
