import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAPI() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(URL);
      const { results } = await request.json();
      results.map((result) => delete result.residents);
      setData(results);
      setLoading(true);
    }

    fetchAPI();
  }, []);

  const loadingFn = () => {
    if (loading) return <h2>Loading...</h2>;
    return !loading;
  };

  const context = {
    data,
    loading,
    loadingFn,
    setData,
    setLoading,
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
