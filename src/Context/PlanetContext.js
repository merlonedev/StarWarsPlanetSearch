import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../Helper/FetchPlanets';

export const PlanetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filtred, setFiltered] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (data && filter) {
      setFiltered(data.filter((e) => e.name.toLowerCase()
        .includes(filter.filterByName.name.toLowerCase())));
    } else {
      setFiltered(data);
    }
  }, [data, filter]);

  const getAPI = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
  };

  const handleFilter = ({ name, value }) => {
    setFilter({ ...filter, filterByName: { [name]: value } });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData, filter, handleFilter, filtred } }>
      {children}
    </PlanetContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
