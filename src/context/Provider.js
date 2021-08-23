import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filteredByNumericValues, setNumericValues] = useState([]);
  const [name, setName] = useState('');
  const [arrayOfOptions, setArrayOfOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((resolve) => resolve.json());
      setData(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const optionInicial = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    if (filteredByNumericValues.length === 0) return;
    const nomeQualquer = filteredByNumericValues.map((obj) => obj.column);
    setArrayOfOptions(
      optionInicial.filter((option) => !nomeQualquer.includes(option)),
    );
    let arraySkoll = [...data];

    const alterador = (filters) => {
      const { comparison, value, column } = filters;
      if (comparison === 'menor que') {
        arraySkoll = arraySkoll
          .filter((valorFiltro) => +valorFiltro[column] < +value);
      }
      if (comparison === 'maior que') {
        arraySkoll = arraySkoll
          .filter((valorFiltro) => +valorFiltro[column] > +value);
      }
      if (comparison === 'igual a') {
        arraySkoll = arraySkoll
          .filter((valorFiltro) => +valorFiltro[column] === +value);
      }
    };
    filteredByNumericValues.forEach((objeto) => alterador(objeto));
    setDataFiltered(arraySkoll);
  }, [data, filteredByNumericValues]);

  console.log(filteredByNumericValues);

  useEffect(() => {
    const lowerBuscador = name.toLowerCase();
    const filtered = data
      .filter((value) => value.name.toLowerCase().includes(lowerBuscador));
    setDataFiltered(filtered);
  }, [data, name]);

  const context = {
    data,
    setName,
    dataFiltered,
    setNumericValues,
    filters: { filteredByName: { name },
      filteredByNumericValues,

    },
    arrayOfOptions,
    setArrayOfOptions,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
