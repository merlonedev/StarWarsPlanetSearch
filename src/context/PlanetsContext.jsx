import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchPlanets from '../hooks/FetchPlanets';

export const PlanetsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFiltered] = useState();
  const [filters, setFilters] = useState();

  const updateFilters = ({ name, value }) => {
    setFilters({ ...filters, [name]: value });
  };

  const getPlanets = async () => {
    const request = await FetchPlanets();
    const newArray = Object.values(request.results).map((e) => {
      delete e.residents;
      return e;
    });
    setData(newArray);
    setFiltered(newArray);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    if (data && filters) {
      setFiltered(data.filter((e) => e.name.toLowerCase().includes(
        filters.filterByName.toLowerCase(),
      )));
    } else {
      setFiltered(data);
    }
  }, [data, filters]);

  return (
    <PlanetsContext.Provider value={ { filteredData, setData, updateFilters, data } }>
      {children}
    </PlanetsContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
