import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context';

// prettier-ignore
export default function Table() {
  const [data, setData] = useState({});
  const { filters } = useContext(StarWarsContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint)
        .then((resolve) => resolve.json());
      setData(results);
    };
    fetchPlanets();
  }, []);

  const arrayOfData = Object.values(data);
  return (
    <table className="pure-table">
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
        {arrayOfData
          .filter((d) => {
            if (filters.filterByName) {
              return d.name.includes(filters.filterByName);
            }
            return d;
          })
          .map((d) => (
            <tr key={ d.name }>
              <td>{d.name}</td>
              <td>{d.rotation_period}</td>
              <td>{d.orbital_period}</td>
              <td>{d.diameter}</td>
              <td>{d.climate}</td>
              <td>{d.gravity}</td>
              <td>{d.terrain}</td>
              <td>{d.surface_water}</td>
              <td>{d.population}</td>
              <td>{d.films}</td>
              <td>{d.created}</td>
              <td>{d.edited}</td>
              <td>{d.url}</td>
            </tr>))}
      </tbody>
    </table>
  );
}
