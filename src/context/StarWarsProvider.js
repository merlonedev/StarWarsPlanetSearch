import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [numValues, setNumValue] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };

    getData();
  }, []);

  const contextValue = {
    data,
    setNameInput,
    filters: {
      filterByName: {
        name: nameInput,
      },
      filterByNumericValues: numValues,
    },
    setNumValue,
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
