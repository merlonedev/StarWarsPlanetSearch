import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setFilterByName] = useState('');
  const [filterByNumericValues, setFilters] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results.filter((resp) => delete resp.residents));
    };
    getPlanets();
  }, []);

  // function handleResetClick() {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [
  //       ...filters.filterByNumericValues.filter((element) => element.column !== column),
  //     ],
  //   });
  // }

  const contextValue = {
    planets,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
    setFilterByName,
    setFilters,
    // handleResetClick,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
