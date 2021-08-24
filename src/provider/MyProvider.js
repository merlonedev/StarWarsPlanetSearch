import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  useEffect(() => {
    const fetchPlanets = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((resolve) => resolve.json())
        .then((resolve) => setData(resolve.results));
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
