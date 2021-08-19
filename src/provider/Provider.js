import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/context';

const filterInitial = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState(filterInitial);

  useEffect(() => {
    const response = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(api).then((result) => result.json());
      results.forEach((item) => {
        delete item.residents;
      });
      setData(results);
    };
    response();
  }, []);

  const contextValue = { data, filters, setFilter };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
