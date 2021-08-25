import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
import fetchAPI from '../FetchAPI/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getfetchAPI = async () => {
      const itensURL = await fetchAPI();
      setData(itensURL);
    };
    getfetchAPI();
  }, []);

  const contextValue = { data };

  return (
    <ContextApp.Provider value={ contextValue }>
      {children}
    </ContextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
