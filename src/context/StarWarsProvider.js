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
  const [dataFilterNumericValues, setDataFilterNumericValues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };

    getData();
  }, []);

  // const handleOptions = (filteredData) => {
  //   const { column, comparison, value } = filteredData;
  //   if (value !== 0) {
  //     const newCompOptions = comparisonOptions
  //       .filter((item) => item !== comparison);
  //     setComparisonOptions(newCompOptions);
  //     const newColumnOptions = columnOptions.filter((thing) => thing !== column);
  //     setColumnOptions(newColumnOptions);
  //     setNumValue({
  //       column: newColumnOptions[0],
  //       comparison: newCompOptions[0],
  //       value: 0,
  //     });
  //   }
  // };

  const filterDataByNumValues = (itemOfNumericValues) => {
    const { value, comparison, column } = itemOfNumericValues;
    if (data.length > 0) {
      if (comparison === 'maior que') {
        const filteredData = data.filter((planet) => planet[column] > value);
        setDataFilterNumericValues(filteredData);
      }
      if (comparison === 'menor que') {
        const filteredData = data.filter((planet) => planet[column] < value);
        setDataFilterNumericValues(filteredData);
      }
      if (comparison === 'igual a') {
        const filteredData = data.filter((planet) => planet[column] === value);
        setDataFilterNumericValues(filteredData);
      }
    }
  };

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
    dataFilterNumericValues,
    setDataFilterNumericValues,
    filterDataByNumValues,
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
