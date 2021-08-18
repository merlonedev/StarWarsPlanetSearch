import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../Helper/FetchPlanets';

export const PlanetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [backData, setBackData] = useState('');
  const [filter, setFilter] = useState('');

  const tableFilter = (value) => {
    const FiltredList = backData.filter((e) => e.name.toLowerCase()
      .includes(value.toLowerCase()));
    if (FiltredList.length >= 1) {
      setData(FiltredList);
    }
  };

  const getAPI = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
    setBackData(newArray);
  };

  const handleFilter = ({ name, value }) => {
    setFilter({ ...filter, filterByName: { [name]: value } });
    tableFilter(value);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData, filter, handleFilter } }>
      {children}
    </PlanetContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
