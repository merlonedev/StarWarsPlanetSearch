import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [inputName, setInputName] = useState();
  const [filterByName, setFilterByName] = useState();

  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
    };
    getPlanetsApi();
  }, []);

  useEffect(() => {
    if (data) {
      const dataFilter = data.filter((item) => (
        item.name.toLowerCase().includes(inputName)));
      setFilterByName(dataFilter);
    }
  }, [inputName, data]);

  const contextValue = {
    data,
    setInputName,
    filterByName,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired, // verificar se é assim mesmo
};

export default PlanetProvider;
