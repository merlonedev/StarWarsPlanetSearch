import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import AppContext from './AppContext';

const optionsColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const Provider = ({ children }) => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnsOptions, setColumnsOptions] = useState(optionsColumn);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

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
    if (filterByNumericValues) {
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
      order,
      setOrder,
    },
    setInput,
    setFilterByNumericValues,
    columnsOptions,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
