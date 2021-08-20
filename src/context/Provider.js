import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

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

  return (
    <MyContext.Provider value={ { data, keys } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default Provider;
