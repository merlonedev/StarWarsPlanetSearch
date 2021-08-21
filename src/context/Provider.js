import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import fetchApiHeader from '../services/fetchApiHeader';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const columns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [data, setData] = useState([]); // vem da api
  const [dataHeader, setDataHeader] = useState([]); // vem da api
  const [inputName, setInputName] = useState({ filterByName: '' });
  const [filtred, setFiltred] = useState([]); // renderiza em <Table />
  const [filterField, setFilterField] = useState({
    filtredBy: 'population',
    inputValueFilter: '',
    compare: 'maior que',
  });
  const [columnsFilterBy, setColumnsFilterBy] = useState(columns);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleClick = () => {
    const remainsFiltred = [...selectedFilter, filterField.filtredBy];
    setSelectedFilter(remainsFiltred);
    const selected = columns.filter((e) => !remainsFiltred.includes(e));
    setColumnsFilterBy(selected);
    setFilterField({
      ...filterField,
      filtredBy: selected[0],
    });
  };

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
    setInputName({
      ...inputName,
      filterByName: value,
    });
  };

  /* Para esta parte consultei o repositório de Elias Forte em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/92/files */

  useEffect(() => {
    const dataFilter = data.filter((planet) => (planet.name
      .toLowerCase()
      .includes(inputName.filterByName.toLowerCase())));
    setFiltred(dataFilter);
  }, [data, inputName]);

  const handleChange = ({ target: { name, value } }) => { // options: population
    setFilterField({
      ...filterField,
      [name]: value,
    });
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
    inputName,
    handleChangeNameFilter,
    filterOptions,
    handleChange,
    columnsFilterBy,
    filterField,
    handleClick,
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
