import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

function MyProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);

  const { filterByName: { name } } = filters;

  useEffect(() => {
    async function requiredData() {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const { results } = await (await fetch(END_POINT)).json();
        setPlanetsData(results);
      } catch (error) {
        console.log(error);
      }
    }
    requiredData();
  }, []);

  useEffect(() => {
    setPlanetsFiltered(
      planetsData.filter(({ name: planet }) => planet.toLowerCase()
        .includes(name.toLowerCase())),
    );
  }, [name, planetsData]);

  const contextValue = {
    planetsData,
    planetsFiltered,
    filters,
    setFilters,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
