import React, { useState, useEffect, useContext } from 'react';
import { MyContextInput } from './MyProvider';

function Table() {
  const [planet, setPlanet] = useState([]);
  const { data, filter } = MyContextInput();

  useEffect(() => {
    const { filterByName } = filter;
    setPlanet(data.filter(({ name }) => name.includes(filterByName.name)));
  }, [filter, data]);

  useEffect(() => {
    const getPlanets = async () => {
    const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endPoint).then((data) => data.json());
    setPlanet(results);
    };

    getPlanets();
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          { planet.length > 0
            && Object.keys(planet[0])
              .map((key) => key !== 'residents' && <th key={ key }>{ key }</th>)}
        </tr>
        {planet.map((planets) => (
          <tr key={ planets.name}>
            <td>{planets.name}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.diameter}</td>
            <td>{planets.climate}</td>
            <td>{planets.gravity}</td>
            <td>{planets.terrain}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.population}</td>
            <td>{planets.films}</td>
            <td>{planets.created}</td>
            <td>{planets.edited}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
