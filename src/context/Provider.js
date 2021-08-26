import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // Agradecimento ao Thales por me avisar que filterbynumericvalues precisava ser um array

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchingAPI = async () => {
    const request = await requestAPI();
    const APIPlanets = Object.values(request.results).map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(APIPlanets);
  };
  useEffect(() => {
    fetchingAPI();
  }, []);

  const valueContext = {
    data,
    setData,
    filters,
    setFilters,
    columns,
    setColumns,
  };

  return (
    <context.Provider value={ valueContext }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
