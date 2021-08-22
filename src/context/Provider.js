import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import sortByColumn from '../util/util';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: '', sort: '' });

  useEffect(() => {
    const getPlanets = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
      let result = await fetch(URL).then((response) => response.json());
      result = result.results;
      result = result.map((planet) => {
        const withoutResidents = planet;
        delete withoutResidents.residents;
        return withoutResidents;
      });
      setData(result);
      setDataFiltered(sortByColumn('name', 'asc', result));
    };
    getPlanets();
  }, []);

  const context = {
    data,
    dataFiltered,
    setDataFiltered,
    filters: { filterByName, filterByNumericValues, order },
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Provider;
