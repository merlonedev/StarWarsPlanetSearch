import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [data, SetNewData] = useState();
  const [filterByName, SetNewFilterByName] = useState({ name: '' });
  const [filterByNumericValues, SetfilterByNumericValues] = useState([{
    collumn: '', comparison: '', value: '' }]);

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const GetPlanets = async () => {
      const GetAPI = await fetch(URL)
        .then((response) => response.json())
        .then((res) => res.results);
      SetNewData(GetAPI);
    };
    GetPlanets();
  }, []);

  const handleChange = ({ target }) => {
    SetNewFilterByName({ name: target.value });
  };

  const handleChangeNumber = () => {
    const collumn = document.querySelector('#column-filter').value;
    const comparison = document.querySelector('#comparison-filter').value;
    const valueNumber = document.querySelector('#value-filter').value;

    SetfilterByNumericValues([{
      collumn,
      comparison,
      value: valueNumber }]);
  };

  function generateRows() {
    const { name } = filterByName;
    const [{ collumn, comparison, value }] = filterByNumericValues;
    const generate = ((result, index) => {
      const {
        climate, created, diameter, edited, films, gravity, name: nome,
        orbital_period: orbitalPeriod,
        population, rotation_period: rotationPeriod,
        surface_water: surfaceWater, terrain, url } = result;

      const resultsContainer = [nome, rotationPeriod, orbitalPeriod,
        diameter, climate, gravity, terrain, surfaceWater,
        population, films, created, edited, url];

      return (
        <tr key={ index }>
          {
            resultsContainer.map((res, indxRes) => <td id="td" key={ indxRes }>{res}</td>)
          }
        </tr>
      );
    });

    if (name) {
      const Planets = data.filter((result) => (
        result.name.toLowerCase().includes(name)
      ));
      return Planets.map((planet, index) => generate(planet, index));
    }
    if (collumn && comparison && value) {
      let comparisonResponse = null;
      switch (comparison) {
      case 'maior que':
        comparisonResponse = (result) => result[collumn] > Number(value);
        break;
      case 'menor que':
        comparisonResponse = (result) => result[collumn] < Number(value);
        break;
      case 'igual a':
        comparisonResponse = (result) => Number(result[collumn]) === Number(value);
        break;
      default: return null;
      }
      const Planets = data.filter((result) => comparisonResponse(result));
      return Planets.map((planet, index) => generate(planet, index));
    }

    return data.map((planet, index) => generate(planet, index));
  }

  function generateColluns() {
    const objResponse = Object.keys(data[0]);
    const keys = objResponse.filter((object) => !object.includes('residents'));
    return keys.map((key, index) => <th key={ index }>{key}</th>);
  }

  const context = {
    data,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    handleChange,
    generateRows,
    generateColluns,
    handleChangeNumber,
  };

  return (
    <PlanetContext.Provider value={ context }>
      <main>
        {children}
      </main>
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default PlanetProvider;
