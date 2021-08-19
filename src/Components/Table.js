import React, { useContext, useEffect } from 'react';
import SWContext from '../Context/SWContext';

function Table() {
  const { setData, filters } = useContext(SWContext);
  const { filterByName: { name }, filterByNumericValues } = filters;
  let { data } = useContext(SWContext);

  const { column, comparison, value } = filterByNumericValues[filterByNumericValues.length - 1];

  if (filterByNumericValues.length > 1) {
    data = data.filter((planet) => {
      if (comparison === 'menor que') {
        return planet[column] < value;
      }

      if (comparison === 'igual a') {
        return planet[column] === value;
      }

      return planet[column] > value;
    });
  }

  if (name !== '') {
    data = data.filter((planet) => (
      (planet.name.toLowerCase()).includes(name.toLowerCase())
    ));
  }

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((firstResult) => firstResult.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
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
