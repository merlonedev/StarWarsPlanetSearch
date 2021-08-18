import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [data, SetNewData] = useState();
  const [filterByName, SetNewFilterByName] = useState({ name: '' });

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

  function generateRows() {
    const { name } = filterByName;
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
    },
    handleChange,
    generateRows,
    generateColluns,
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
