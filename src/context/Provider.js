import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getPlanets from '../services/PlanetsFetch';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [headerArray, setHeaderArray] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setNumericFilter] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setData(planets);
      setHeaderArray(Object.keys(planets[0]));
    };
    fetchPlanets();
  }, []);

  // Filtros feitos com a ajuda do David Gonzaga - turma 12
  useEffect(() => {
    const handleFilter = () => {
      let filteredArray = [...data];
      filteredArray = filteredArray.filter(({ name: nameValue }) => (
        nameValue.toLowerCase().includes(name.toLowerCase())));
      setPlanetList(filteredArray);
    };
    handleFilter();
  }, [name, data]);

  useEffect(() => {
    const handleFilter = () => {
      let filteredArray = [...data];
      if (!filterByNumericValues.length) return;
      const [latestFilter] = filterByNumericValues;
      const { column, comparison, value } = latestFilter;

      if (comparison === 'maior que') {
        filteredArray = filteredArray
          .filter((item) => Number(item[column]) > Number(value));
        return setPlanetList(filteredArray);
      }
      if (comparison === 'menor que') {
        filteredArray = filteredArray
          .filter((item) => Number(item[column]) < Number(value));
        return setPlanetList(filteredArray);
      }
      filteredArray = filteredArray
        .filter((item) => Number(item[column]) === Number(value));
      return setPlanetList(filteredArray);
    };
    handleFilter();
  }, [filterByNumericValues, data]);

  const contextValue = {
    planetList,
    headerArray,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
    setName,
    setNumericFilter,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
