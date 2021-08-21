import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getPlanets from '../services/PlanetsFetch';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [headerArray, setHeaderArray] = useState([]);
  const [name, setName] = useState('');

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

  const contextValue = {
    planetList,
    headerArray,
    filters: {
      filterByName: { name },
      filterByNumericValues: [
        {
          column: 'population',
        },
      ],
    },
    setName,
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
