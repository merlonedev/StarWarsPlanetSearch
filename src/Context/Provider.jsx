import React, { useState } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const context = {
    planets,
    setPlanets,
  };
  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
