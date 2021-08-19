import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [numValue, setNumValue] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };

    getData();
  }, []);

  const renderFilterByNumValues = () => {
    const { column, comparison, value } = numValue;
    if (data.length > 0 && column !== '' && comparison !== '') {
      if (comparison === 'maior que') {
        const filteredData = data.filter((planet) => planet[column] > value);
        console.log(comparison);
        setData(filteredData);
      }
      if (comparison === 'menor que') {
        const filteredData = data.filter((planet) => planet[column] < value);
        setData(filteredData);
      }
      if (comparison === 'igual a') {
        const filteredData = data.filter((planet) => planet[column] === value);
        setData(filteredData);
      }
    }
  };

  const contextValue = {
    data,
    setInputName,
    filters: {
      filterByName: {
        name: inputName,
      },
      filterByNumericValues: [numValue],
    },
    setNumValue,
    renderFilterByNumValues,
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
