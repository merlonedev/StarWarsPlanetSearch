import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const initialColumnOptions = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const initialComparisonOptions = ['maior que',
  'menor que', 'igual a'];

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const [nameInput, setNameInput] = useState('');
  const [numValues, setNumValue] = useState([]);
  const [columnOptions, setColumnOptions] = useState(initialColumnOptions);
  const [comparisonOptions, setComparisonOptions] = useState(initialComparisonOptions);

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
    columnOptions,
    comparisonOptions,
    // handleOptions,
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
