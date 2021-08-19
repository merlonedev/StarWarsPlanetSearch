import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import fetchApiHeader from '../services/fetchApiHeader';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    const getApiItems = async () => {
      const apiItems = await fetchApi();
      setData(apiItems);
    };
    getApiItems();
  }, []);

  useEffect(() => {
    const getApiHeader = async () => {
      const apiHeader = await fetchApiHeader();
      setDataHeader(apiHeader);
    };
    getApiHeader();
  }, []);

  /* Para esta parte consultei o repositório de Elias Forte em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/92/files */

  useEffect(() => {
    const dataFilter = data.filter((planet) => (planet.name
      .toLowerCase()
      .includes(filters.filterByName.name.toLowerCase())));
    setFiltred(dataFilter);
  }, [data, filters]);

  console.log(data);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const context = {
    data,
    filtred,
    setData,
    dataHeader,
    filters,
    setFilters,
    handleChange,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

const { oneOfType, arrayOf, node } = PropTypes;

Provider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Provider;
