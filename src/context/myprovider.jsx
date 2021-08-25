import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mycontext from './mycontext';

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const context = { data, setdata };

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json(); // const objeto = await results.results;
        setdata(results);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);
  return (
    <mycontext.Provider value={ context }>
      { children }
    </mycontext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isrequired;

export default Provider;
