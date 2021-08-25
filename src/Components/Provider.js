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
      filterByNumericValues: [],
    },
  );
  const [loading, setLoading] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filtrados, setFiltrados] = useState([]);
  const [filterByNumericValue, setFilterByNumericValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

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
    const filtradoName = state.filter(
      ({ name }) => name.includes(filters.filterByName.name),
    );
    let comparacao = [...filtradoName];
    console.log('ANTES DO FILTRO', comparacao);
    if (filters.filterByNumericValues.length > 0) {
      const filterAll = () => {
        const test = filters.filterByNumericValues
          .map(({ column, value: values, comparison }) => {
            switch (comparison) {
            case 'maior que':
              comparacao = comparacao
                .filter((planet) => +planet[column] > +values);
              return comparacao;
            case 'igual a':
              comparacao = comparacao
                .filter((planet) => +planet[column] === +values);
              return comparacao;
            case 'menor que':
              comparacao = comparacao
                .filter((planet) => +planet[column] < +values);
              return comparacao;
            default:
              return comparacao;
            }
          });
        return test;
      };
      filterAll();
    }
    setFiltrados(comparacao);
  }, [state, filters]);

  const contextValue = {
    state,
    setState,
    loading,
    filterByName,
    setFilterByName,
    filters,
    setFilters,
    filtrados,
    filterByNumericValue,
    setFilterByNumericValue,
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
