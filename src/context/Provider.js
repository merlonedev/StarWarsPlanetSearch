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
  const [filtered, setFiltered] = useState([]); // renderiza em <Table />
  const [filterField, setFilterField] = useState({
    filteredBy: 'population',
    inputValueFilter: '',
    compare: 'maior que',
  });
  const [columnsFilterBy, setColumnsFilterBy] = useState(columns);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [shouldReset, setShouldReset] = useState(false);

  /* Consultei o repositório de Diogo Sant'Anna em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/21/files */
  const handleClickErase = ({ target: { id } }) => {
    const remainsFiltred = [...selectedFilter];
    const update = remainsFiltred.filter((e) => e !== id);
    setSelectedFilter(update);
    const found = remainsFiltred.find((e) => e === id);
    setColumnsFilterBy([...columnsFilterBy, found]);
    setShouldReset(true);
  };

  const handleClick = () => {
    const ArrFilteredBy = [...selectedFilter, filterField.filteredBy];
    setSelectedFilter(ArrFilteredBy);
    const selected = columns.filter((filteredBy) => !ArrFilteredBy.includes(filteredBy));
    setColumnsFilterBy(selected);
    setFilterField({
      ...filterField,
      filteredBy: selected[0],
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
    setFiltered(dataFilter);
  }, [data, inputName, shouldReset]);

  const handleChange = ({ target: { name, value } }) => { // options: population
    setFilterField({
      ...filterField,
      [name]: value,
    });
  };

  /* feito com a ajude de Ryan Laiber */
  const filterOptions = (filtredByInfo, inputValue, compareInfo) => { // chamada no clique do botão
    if (compareInfo === 'igual a') {
      const equal = filtered.filter((planet) => +planet[filtredByInfo] === +inputValue);
      setFiltered(equal);
    }
    if (compareInfo === 'maior que') {
      const bigger = filtered.filter((planet) => +planet[filtredByInfo] > +inputValue);
      setFiltered(bigger);
    }
    if (compareInfo === 'menor que') {
      const smaller = filtered.filter((planet) => +planet[filtredByInfo] < +inputValue);
      setFiltered(smaller);
    }
  };

  const context = {
    data,
    filtered,
    setData,
    dataHeader,
    inputName,
    handleChangeNameFilter,
    filterOptions,
    handleChange,
    columnsFilterBy,
    filterField,
    handleClick,
    selectedFilter,
    handleClickErase,
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
