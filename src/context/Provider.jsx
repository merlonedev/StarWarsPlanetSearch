import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setData(results);
      setFilter(results);
    };
    getPlanets();
  }, []); // componentDidMount

  const filterPlanet = ({ target: { value } }) => { // mudar para 'name'
    const planetSearch = data
      .filter((planet) => planet.name.toLowerCase().includes(value));
    setFilter(planetSearch);
  };

  // const filterPlanet = ({target: { value }}) => { // mudar para 'name'
  //   const planetSearch = data.filter((planet) => planet.name.toLowerCase().includes(value))
  //   setFilter({
  //     filters: {
  //       filterByName: {
  //         name: planetSearch }
  //     }});
  //   }

  const context = { data, filterPlanet, filter };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.object,
}).isRequired;

export default Provider;
