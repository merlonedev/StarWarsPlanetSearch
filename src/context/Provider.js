import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterUsed, setFilterUsed] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const newData = useRef(data);

  const sortByOrder = useCallback(() => {
    let orderedPlanets = newData.current;
    let finalOrder = [];

    const { column, sort } = order;
    const MENOR = -1;
    const minor = (a, b) => (a < b ? MENOR : 0);
    const inverse = (a, b) => (a > b ? MENOR : 0);

    // aplicação do método sort https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
    // e https://medium.com/swlh/array-sort-explained-c67baca29ff1
    switch (sort) {
    case 'ASC':
      orderedPlanets = newData.current.sort(
        (a, b) => (a[column] > b[column] ? 1 : minor(a[column], b[column])),
      );
      finalOrder = orderedPlanets.sort((a, b) => a[column] - b[column]);
      break;

    case 'DESC':
      orderedPlanets = newData.current.sort(
        (a, b) => (a[column] < b[column] ? 1 : inverse(a[column], b[column])),
      );
      finalOrder = orderedPlanets.sort((a, b) => b[column] - a[column]);
      break;

    default:
      orderedPlanets = newData.current;
    }
    setData([...finalOrder]);
  }, [order]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint);
      if (!result.ok) return console.log('Erro na requisição');
      const planets = await result.json();
      await setData(planets.results);
      newData.current = planets.results;
      sortByOrder();
    };
    getPlanets();
  }, [setData, sortByOrder]);

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

  useEffect(() => {
    sortByOrder();
  }, [sortByOrder]);

  useEffect(() => {
    filterByNumber();
  }, [filterByNumber]);

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
    order,
    setOrder,
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
