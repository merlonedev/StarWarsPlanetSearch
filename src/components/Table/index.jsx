import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context';

const Table = () => {
  const { data, nameFilter } = useContext(MyContext);
  const nameState = nameFilter.filters.filterByName.name;
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!nameState) {
      setPlanets(data);
    } else {
      setPlanets(data
        .filter(({ name }) => name.toLowerCase().includes(nameState.toLowerCase())));
    }
  }, [nameState, data]);

  if (data.length === 0) return <div>Loading...</div>;

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
          <th>Url</th>
        </tr>
      </thead>

      <tbody>
        {
          planets.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
};

export default Table;
