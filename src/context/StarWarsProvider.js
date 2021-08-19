import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    FilteredByName: '',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };

    getPlanets();
  }, []);

  const handleSearch = ({ target }) => {
    const { value } = target;
    setFilters({
      name: value,
    });
  };

  const contextValue = {
    data: planets,
    handleSearch,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.symbol).isRequired,
};

export default StarWarsProvider;
