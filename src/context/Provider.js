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
  const [columnsFilterBy, setColumnsFilterBy] = useState(columns); // colunas de string
  const [selectedFilter, setSelectedFilter] = useState([]);

  /* Consultei o repositório de Diogo Sant'Anna em: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/21/files */
  const handleClickErase = ({ target: { id } }) => {
    const remainsFiltred = [...selectedFilter];
    const update = remainsFiltred.filter((e) => e.filteredBy !== id); // array sem o filter
    setSelectedFilter(update);
    const { filteredBy } = remainsFiltred.find((obj) => obj.filteredBy === id); // string
    setColumnsFilterBy([...columnsFilterBy, filteredBy]);
    setFiltered(data);
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
  }, [data, inputName]);

  const handleClickFilter = (obje) => { // options: population
    // setFilterField(obje);
    const arrObjFilteredBy = [...selectedFilter, obje];
    setSelectedFilter(arrObjFilteredBy); // array de objetos selecionados
    const arrStringFilteredBy = arrObjFilteredBy.map(({ filteredBy }) => filteredBy);
    const selected = columns.filter((column) => !arrStringFilteredBy.includes(column));
    setColumnsFilterBy(selected);
  };

  /* Requisito 5: useEffect e adaptações no filtro feito com a ajuda de David Gonzaga */
  useEffect(() => {
    let arrayInit = [...data];
    /* filterByNumericValue feito com a ajuda de Ryan Laiber */
    const filterByNumericValue = ({ filteredBy: filtredByInfo,
      inputValueFilter: inputValue, compare: compareInfo }) => { // chamada no clique do botão
      if (compareInfo === 'igual a') {
        const equal = arrayInit
          .filter((planet) => +planet[filtredByInfo] === +inputValue);
        setFiltered(equal);
        arrayInit = equal;
      }
      if (compareInfo === 'maior que') {
        const bigger = arrayInit.filter((planet) => +planet[filtredByInfo] > +inputValue);
        setFiltered(bigger);
        arrayInit = bigger;
      }
      if (compareInfo === 'menor que') {
        const smaller = arrayInit
          .filter((planet) => +planet[filtredByInfo] < +inputValue);
        setFiltered(smaller);
        arrayInit = smaller;
      }
    };
    selectedFilter.forEach((item) => filterByNumericValue(item));
  }, [data, selectedFilter]); // useEffect atualiza o array 'filtered' sempre que é adicionado/removido um objeto do array 'selectedFilter'.

  const context = {
    data,
    filtered,
    dataHeader,
    inputName,
    columnsFilterBy,
    selectedFilter,
    handleChangeNameFilter, // campo do input name
    handleClickFilter, // define o state
    handleClickErase, // botão apagar um filtro pelo id
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
