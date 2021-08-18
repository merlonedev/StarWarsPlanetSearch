import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, []); // componentDidMount

  const context = { data };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.object,
}).isRequired;

export default Provider;
