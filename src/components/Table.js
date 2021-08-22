import React, { useContext } from 'react';
import context from '../context/context';

function Table() {
  const { planets, filters, isItLoading } = useContext(context);
  const { name } = filters.filterByName;
  const filterByName = planets.filter((planet) => planet.name.includes(name));

  let planetArray = [];
  if (name === '') {
    planetArray = planets;
  } else {
    planetArray = filterByName;
  }

  if (isItLoading === true) {
    return <h1>loading</h1>;
  }

  // tags passadas pelo Lucas Fernando no slack da turma
  console.log(planets);
  return (
    <table>
      <tr>
        <th>name</th>
        <th>rotation period</th>
        <th>orbital period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>

      { planetArray.map((planet, index) => (
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
      // map feito no plantao com base no codigo do Diogo que estava compartilhando tela
      )) }

    </table>
  );
}

export default Table;
