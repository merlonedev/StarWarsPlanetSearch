import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setPlanets(results);
    };
    getApi();
  }, []);

  const valueContext = { planets };

  return (
    <SWContext.Provider value={ valueContext }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default SWProvider;
