import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import Context from './Context';
import { optionsColumn } from '../helper/SelectOptions';

const Provider = ({ children }) => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnsOptions, setColumnsOptions] = useState(optionsColumn);

  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endPoint);
      const resultJson = await result.json();
      const { results } = resultJson;
      setState(results);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let filteredColumns = [...optionsColumn];
      filterByNumericValues.forEach(({ column }) => {
        filteredColumns = filteredColumns.filter((item) => item !== column);
      });
      setColumnsOptions(filteredColumns);
    }
  }, [filterByNumericValues]);

  const contextValue = {
    data: state,
    filters: {
      filterByName: {
        name: input,
      },
      filterByNumericValues,
    },
    setInput,
    setFilterByNumericValues,
    columnsOptions,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
