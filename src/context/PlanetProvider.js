import React, { useEffect, useState } from 'react';
import myContext from './myContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  const globalState = {
    data,
    setData,
  };

  return (
    <myContext.Provider value={ globalState }>{children}</myContext.Provider>
  );
}

export default PlanetProvider;
