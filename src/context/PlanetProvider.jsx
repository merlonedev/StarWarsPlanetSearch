import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [inputName, setInputName] = useState();
  const [inputNumeric, setInputNumeric] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  // componentDidMount - faz requisicao api
  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
    };
    getPlanetsApi();
  }, []);

  // componentDidUpdate - faz filtro por nome
  useEffect(() => {
    setFilters({ ...filters, filterByName: { name: inputName } });
  }, [inputName]);

  // componentDidUpdate - faz filtro por numeros
  useEffect(() => {
    if (data) {
      const { column, comparison, value } = inputNumeric;
      setFilters({
        ...filters,
        filterByNumericValues: {
          column,
          comparison,
          value,
        },
      });
    }
  }, [inputNumeric]);

  const contextValue = {
    data,
    setData,
    inputName,
    setInputName,
    inputNumeric,
    setInputNumeric,
    filters,
    setFilters,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default PlanetProvider;
