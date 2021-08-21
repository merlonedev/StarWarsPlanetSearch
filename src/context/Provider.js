import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [buscador, setBuscador] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((resolve) => resolve.json());
      setData(results);
    };
    fetchPlanets();
  }, []);

  const loading = <p>Loading...</p>;
  if (data.length === 0) return loading;
  const keys = Object.keys(data[0]).filter((key) => key !== 'residents');
  const lowerBuscador = buscador.toLowerCase();
  const dataFiltered = data
    .filter((value) => value.name.toLowerCase().includes(lowerBuscador));
  const INITIAL_STATE = {
    data,
    keys,
    buscador,
    setBuscador,
    dataFiltered,
  };

  return (
    <MyContext.Provider value={ INITIAL_STATE }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default Provider;
