import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import ApiStarWars from '../service/ApiStarWars ';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataHead, setDataHead] = useState([]);
  const contextValue = {
    data,
    setData,
    dataHead,
    setDataHead,
  };

  useEffect(() => {
    const getStarWars = async () => {
      const results = await ApiStarWars();
      setData(results);
      setDataHead(Object.keys(results[0]));
    };
    getStarWars();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
