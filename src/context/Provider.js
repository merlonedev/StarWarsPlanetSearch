import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import response from '../testData';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  // const [data, setData] = useState([]);
  // const [filters, setFilters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint)
        .then((response) => response.json());
      setPlanets(result.results);
      console.log(result.results);
    };
    getData();
  }, []);

  // function filterName() {

  //   return (

  //   );
  // }

  const contextValue = { planets, setPlanets /* ,  data, setData, filterName  */ };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
