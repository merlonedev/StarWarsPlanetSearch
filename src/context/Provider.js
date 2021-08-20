import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import fetchApiHeader from '../services/fetchApiHeader';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]); // vem da api
  const [dataHeader, setDataHeader] = useState([]); // vem da api
  const [filters, setInputNameFilter] = useState({
    filterByName: { name: '' },
  });
  const [filtred, setFiltred] = useState([]);
  const [filtredBy, setFiltredBy] = useState('population');
  const [inputValueFilter, setInputValueFilter] = useState(0);
  const [compare, setCompare] = useState('maior que');

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

  const handleChangeNameFilter = ({ target: { value } }) => {
    setInputNameFilter({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  /* Para esta parte consultei o repositório de Elias Forte em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/92/files */

  useEffect(() => {
    const dataFilter = data.filter((planet) => (planet.name
      .toLowerCase()
      .includes(filters.filterByName.name.toLowerCase())));
    setFiltred(dataFilter);
  }, [data, filters]);

  const handleChangeFiltredBy = ({ target: { value } }) => { // options: population
    setFiltredBy(value);
  };

  const handleChangeCompare = ({ target: { value } }) => { // number
    setCompare(value);
  };

  const handleChangeValueFilter = ({ target: { value } }) => { // maior que
    setInputValueFilter(value);
  };
  /* feito com a ajude de Ryan Laiber */
  const filterOptions = (filtredByInfo, inputValue, compareInfo) => { // chamada no clique do botão
    if (compareInfo === 'igual a') {
      const equal = filtred.filter((planet) => +planet[filtredByInfo] === +inputValue);
      setFiltred(equal);
    }
    if (compareInfo === 'maior que') {
      const bigger = filtred.filter((planet) => +planet[filtredByInfo] > +inputValue);
      setFiltred(bigger);
    }
    if (compareInfo === 'menor que') {
      const smaller = filtred.filter((planet) => +planet[filtredByInfo] < +inputValue);
      setFiltred(smaller);
    }
  };

  const context = {
    data,
    filtred,
    setData,
    dataHeader,
    filters,
    setInputNameFilter,
    handleChangeNameFilter,
    filterOptions,
    filtredBy,
    inputValueFilter,
    compare,
    handleChangeFiltredBy,
    handleChangeCompare,
    handleChangeValueFilter,
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
