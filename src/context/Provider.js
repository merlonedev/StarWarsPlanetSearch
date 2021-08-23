import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

const INICIAL_FILTER = {
  filterByName: '',
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState(INICIAL_FILTER);

  useEffect(() => {
    const saveAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      await fetch(url).then((packJason) => packJason.json())
        .then(({ results }) => {
          results.forEach((planet) => {
            delete planet.residents;
          });
          setData(results);
        });
    };
    saveAPI();
  }, []);

  const contextValue = { data, filters, setFilter };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
