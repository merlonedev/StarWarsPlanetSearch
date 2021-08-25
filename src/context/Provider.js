import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: 0,
        },
      ],
    },
  );

  useEffect(() => { // carrega tabela sem filtros
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      const removeResidents = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(removeResidents);
      setKeys(Object.keys(removeResidents[0]));
    };
    fetchAPI();
  }, []);

  return (
    <Context.Provider value={ { data, keys, filters, setFilters } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
