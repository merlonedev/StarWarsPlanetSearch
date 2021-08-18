import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextGlobal from '../ContextGlobal';
import fetchApi from './FetchApi';

const PlanetData = ({ children }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchApi().then((result) => setdata(result));
  }, []);

  return (
    <ContextGlobal.Provider value={ data }>
      {children}
    </ContextGlobal.Provider>
  );
};

PlanetData.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetData;
