import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

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

  const contextValue = {
    planetsData,
    setPlanetsData,
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
