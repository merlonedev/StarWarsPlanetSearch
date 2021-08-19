import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const filtroNome = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const submitFilter = () => {
    const comparison = document.getElementById('comparador').value;
    const numericValue = document.getElementById('valor').value;
    const column = document.getElementById('filtro').value;

    setfilterByNumericValues([{
      column,
      comparison,
      value: numericValue,
    }]);
    console.log(1);
  };

  const contextValu = {
    data,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    functions: {
      filtroNome,
      submitFilter,
    },
  };

  return (
    <AppContext.Provider value={ { contextValu } }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
