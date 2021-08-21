import React from 'react';
import Context from '../context/Context';
import headerTable from '../service/data';

export default function Home() {
  const { planets } = React.useContext(Context);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerTable.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((i, index) => (
            <tr key={ index }>
              <td>{ i.name }</td>
              <td>{ i.rotation_period }</td>
              <td>{ i.orbital_period }</td>
              <td>{ i.diameter }</td>
              <td>{ i.climate }</td>
              <td>{ i.gravity }</td>
              <td>{ i.terrain }</td>
              <td>{ i.surface_water }</td>
              <td>{ i.population }</td>
              <td>{ i.films }</td>
              <td>{ i.created }</td>
              <td>{ i.edited }</td>
              <td>{ i.url }</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
