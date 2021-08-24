import React, { useContext } from 'react';
import MyContext from './MyContext';

function Table() {
  const { state, filtrados } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(state[0]).filter(
              (titlesTable) => titlesTable !== 'residents',
            ).map((title, index) => (
              <th key={ index }>
                {title}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {filtrados.map((
          { name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
            diameter, climate, gravity, terrain, surface_water: surfaceWater,
            population, films, created, edited, url },
        ) => (
          <tr key={ name }>
            <td>{ name }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
