import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchPlanetsApi = async () => {
      try {
        const response = await fetch(END_POINT);
        const { results } = await response.json();

        results.forEach((planet) => {
          delete planet.residents;
        });

        setData(results);
      } catch (error) {
        setDataError(true);
      }
    };

    fetchPlanetsApi();
  }, []);

  const context = {
    data,
    dataError,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
