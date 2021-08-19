import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getPlanets from '../services/api';

function Provider(props) {
  const [data, setdata] = useState([]);

  const arrayApi = async () => {
    const planet = await getPlanets();
    setdata(planet);
  };
  useEffect(() => {
    arrayApi();
  }, []);

  const { children } = props;
  return (
    <MyContext.Provider
      value={ data }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
