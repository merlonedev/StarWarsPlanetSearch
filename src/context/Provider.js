import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SWContext from './Context';

function SWProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const requestPlanets = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(api);
      const data = await response.json();
      setPlanets(delete data.residents);
    };
    requestPlanets();
  }, []);

  return (
    <SWContext.Provider value={ SWContext }>
      {children}
    </SWContext.Provider>
  );
}
SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SWProvider;
