import React, { useState, useEffect } from 'react';
import appContext from './appContext';
import getPlanet from '../services/getPlanet';

function planetList({ getList }) {
  const [data, setData] = useState([]);

  const dataValue = {
    data,
    setData,
  };

  useEffect(() => {
    const getPlanetList = async () => {
      const results = await getPlanet();
      setData(results);
    };
    getPlanetList();
  }, []);

  return (
    <appContext.Provider value={ dataValue }>
      { getList }
    </appContext.Provider>
  );
}

export default planetList;
