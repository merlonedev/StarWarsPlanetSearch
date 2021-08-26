import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

 export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((response) => response.json());
      setData(results);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    const planets = data.filter((planet) => planet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPlanets(planets);
  }, [data, searchTerm]);

  function filterByNameInput() {
    return (
      <div>
        <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setSearchTerm(e.target.value) }
        placeholder="Search a Planet"
      />
      </div>
    );
  }

  const value = {
    filteredPlanets,
  };
  return (
    <MyContext.Provider value={ value }>
      {filterByNameInput()}
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MyProvider, MyContext}; 