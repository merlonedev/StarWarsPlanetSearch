import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const filtersInitialState = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filtersInitialState);

  const filterName = (input) => {
    setFilters({
      filters: {
        filterByName: {
          name: input,
        },
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };

    getData();
  }, []);

  const contextValue = {
    data, filters, filterName,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;
