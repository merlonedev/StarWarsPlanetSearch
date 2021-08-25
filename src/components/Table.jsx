import React, { useContext } from 'react';
import { Context } from '../context/Context';

function Table() {
  const { planetsInfo, inputName, inputNumeric } = useContext(Context);

  const filteredPlanets = () => {
    if (planetsInfo) {
      if (inputName) {
        const planetsFilteredByName = planetsInfo.filter((planet) => (
          planet.name.toLowerCase().includes(inputName.toLowerCase())
        ));
        return planetsFilteredByName;
      }

      if (inputNumeric) {
        const { column, comparison, value } = inputNumeric;
        const planetsFilteredByNumber = planetsInfo.filter((planet) => {
          switch (comparison) {
          case 'maior que':
            return planet[column] > parseFloat(value);
          case 'menor que':
            return planet[column] < parseFloat(value);
          case 'igual a':
            return planet[column] === value;
          default:
            return true;
          }
        });
        return planetsFilteredByNumber;
      }

      return planetsInfo;
    }
  };

  return (
    <table style={ { width: '100%' } }>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { (filteredPlanets()).map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
