import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import getPlanets from '../services/PlanetsFetch';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtersProvider, setFiltersProvider] = useState({});
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setData(planets);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      const { filters } = filtersProvider;
      if (filters) {
        const { filterByName: { name: nameValue } } = filters;
        let filteredArray = [...data];
        filteredArray = filteredArray.filter(({ name }) => name.toLowerCase()
          .includes(nameValue.toLowerCase()));
        setPlanetList(filteredArray);
      }
    };
    handleFilter();
  }, [filtersProvider, data]);

  const contextValue = {
    setFiltersProvider,
    planetList,
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
