import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Api from '../Api';

const Context = createContext();

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ name: '' });
  const [filterNumber, setFilterNumber] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  );
  // const [isLoand, setSloand] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const callApi = await Api();
      setPlanets(callApi);
    };
    getApi();
  }, []);

  return (
    <Context.Provider
      value={ {
        planets,
        filters,
        setFilters,
        filterNumber,
        setFilterNumber,
      } }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { Context, Provider };
