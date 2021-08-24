import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

function ApiProvider({ children }) {
  const [data, setData] = useState([]);

  const context = {
    data,
    setData,
  };

  const fetchApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(url).then((response) => response.json());
    const Filter = Object.keys(results[0]).filter((columns) => columns !== 'residents');
    setData(Filter);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section>
      <ContextApi.Provider value={ context }>
        { children }
      </ContextApi.Provider>
    </section>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
