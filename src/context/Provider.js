import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filteredByNumericValues, setNumericValues] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((resolve) => resolve.json());
      setData(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const alterador = () => {
      const [filters] = filteredByNumericValues;
      if (!filters) return;
      const { comparison, value, column } = filters;
      if (comparison === 'menor que') return data.filter((obj) => +obj[column] < +value);
      if (comparison === 'maior que') return data.filter((obj) => +obj[column] > +value);
      if (comparison === 'igual a') return data.filter((obj) => +obj[column] === +value);
    };
    setDataFiltered(alterador());
  }, [data, filteredByNumericValues]);

  useEffect(() => {
    const lowerBuscador = name.toLowerCase();
    const filtered = data
      .filter((value) => value.name.toLowerCase().includes(lowerBuscador));
    setDataFiltered(filtered);
  }, [data, name]);

  const context = {
    data,
    setName,
    dataFiltered,
    setNumericValues,
    filters: { filteredByName: { name },
      filteredByNumericValues,

    },
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
