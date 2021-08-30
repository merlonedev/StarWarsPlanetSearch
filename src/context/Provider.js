import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterUsed, setFilterUsed] = useState([]);

  const newData = useRef(data);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint);
      if (!result.ok) return console.log('Erro na requisição');
      const planets = await result.json();
      setData(planets.results);
      newData.current = planets.results;
    };
    getPlanets();
  }, [setData]);

  useEffect(() => {
    const filteredData = newData.current.filter(
      ({ name }) => name.toLowerCase().includes(filterByName),
    );
    setData(filteredData);
  }, [setData, newData, filterByName]);

  const filterByNumber = useCallback(() => {
    let filteredNewData = newData.current;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        filteredNewData = newData.current.filter(
          (element) => Number(element[column]) > Number(value),
        );
        break;

      case 'menor que':
        filteredNewData = newData.current.filter(
          (element) => Number(element[column]) < Number(value),
        );
        break;

      case 'igual a':
        filteredNewData = newData.current.filter(
          (element) => Number(element[column]) === Number(value),
        );
        break;

      default:
        filteredNewData = newData;
      }
      return filteredNewData;
    });
    setData(filteredNewData);
  }, [filterByNumericValues]);

  useEffect(() => { filterByNumber(); }, [filterByNumber]);

  const starValue = {
    data,
    setData,
    newData,
    filterByName,
    filterByNumericValues,
    setFilterByName,
    setFilterByNumericValues,
    filterByNumber,
    filterUsed,
    setFilterUsed,
  };

  return (
    <StarContext.Provider value={ starValue }>
      { children }
    </StarContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
