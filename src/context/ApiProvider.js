import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [columns, setColumns] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const context = {
    data,
    setData,
    columns,
    setColumns,
    filters,
    setFilters,
    dataFilter,
    setDataFilter,
  };

  const fetchApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(url).then((response) => response.json());
    const columnsFilter = Object.keys(results[0]).filter((item) => item !== 'residents');
    const sortedResults = results.sort((a, b) => (a.name.localeCompare(b.name)));
    // console.log(results);
    setData(sortedResults);
    setDataFilter(sortedResults);
    setColumns(columnsFilter);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section>
      <ContextApi.Provider value={ context }>
        { children }
      </ContextApi.Provider>
    </section>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
