import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const initialColumnOptions = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const initialComparisonOptions = ['maior que',
  'menor que', 'igual a'];

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [numValue, setNumValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
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

  const handleOptions = () => {
    const { column, comparison, value } = numValue;
    if (value !== 0) {
      const newCompOptions = comparisonOptions
        .filter((item) => item !== comparison);
      setComparisonOptions(newCompOptions);
      const newColumnOptions = columnOptions.filter((thing) => thing !== column);
      setColumnOptions(newColumnOptions);
      setNumValue({
        column: newColumnOptions[0],
        comparison: newCompOptions[0],
        value: 0,
      });
    }
  };

  const filterDataByNumValues = () => {
    const { column, comparison, value } = numValue;
    if (data.length > 0) {
      if (comparison === 'maior que') {
        const filteredData = data.filter((planet) => planet[column] > value);
        setData(filteredData);
        handleOptions();
      }
      if (comparison === 'menor que') {
        const filteredData = data.filter((planet) => planet[column] < value);
        setData(filteredData);
        handleOptions();
      }
      if (comparison === 'igual a') {
        const filteredData = data.filter((planet) => planet[column] === value);
        setData(filteredData);
        handleOptions();
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
    filterDataByNumValues,
    columnOptions,
    comparisonOptions,
    handleOptions,
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
