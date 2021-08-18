import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const planetsJson = async () => {
      const planetsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await planetsFetch.json();
      await setData(result);
    };
    return planetsJson();
  }, []);

  return (
    <Context.Provider value={ data }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
