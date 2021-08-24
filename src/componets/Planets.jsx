import React, { useState, useEffect } from 'react';
import './Planets.css';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const tableHeard = ['Name', 'Population', 'Created', 'Diameter', 'Edited',
    'Films', 'Gravity', 'Orbital Period',
    'Rotation Period', 'Surface Water', 'Terrain', 'climate'];

  useEffect(() => {
    const getPlanets = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planetsResults = await fetch(api).then((data) => data.json());
      setPlanets(planetsResults.results);
    };
    getPlanets();
  }, []);

  console.log(planets);

  return (
    <table className="tablePlanets">
      <thead>
        <tr>
          {
            tableHeard.map((item) => (
              <th key={ item }>{item}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((item) => (
            <tr key={ item.name }>
              <td>{item.name}</td>
              <td>{item.population}</td>
              <td>{item.created}</td>
              <td>{item.diameter}</td>
              <td>{item.edited}</td>
              <td>{item.films}</td>
              <td>{item.gravity}</td>
              <td>{item.orbital_period}</td>
              <td>{item.rotation_period}</td>
              <td>{item.surface_water}</td>
              <td>{item.terrain}</td>
              <td>{item.climate}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Planets;
