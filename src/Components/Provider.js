import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  );
  const [loading, setLoading] = useState(true);
  const [filterByName, setfilterByName] = useState('');
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const require = await fetch(URL);
        const { results } = await require.json();
        setState(results);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };
    data();
  }, []);

  useEffect(() => {
    const filtrado = state.filter(({ name }) => name.includes(filters.filterByName.name));
    setFiltrados(filtrado);
  }, [state, filters]);

  const contextValue = {
    state,
    setState,
    loading,
    filterByName,
    setfilterByName,
    filters,
    setFilters,
    filtrados,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
