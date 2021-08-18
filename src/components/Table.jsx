import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { data } = useContext(Context);

  const geraLinhas = () => {
    const { results } = data;
    return results.map((result, index) => {
      const {
        climate, created, diameter, edited, films, gravity, name,
        orbital_period: orbital, population, rotation_period: rotation,
        surface_water: surface, terrain, url,
      } = result;
      return (
        <tr key={ index }>
          <td>{ name }</td>
          <td>{ rotation }</td>
          <td>{ orbital }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surface }</td>
          <td>{ population }</td>
          <td>{ films }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td>{ url }</td>
        </tr>
      );
    });
  };

  const geraColunas = () => {
    const keys = Object.keys(data.results[0]);
    const realKeys = keys.filter((key) => key !== 'residents');
    return realKeys.map((key, index) => <th key={ index }>{ key }</th>);
  };

  return (
    <table>
      <thead>
        <tr>
          { data ? geraColunas() : null }
        </tr>
      </thead>
      <tbody>
        { data ? geraLinhas() : null }
      </tbody>
    </table>
  );
}

export default Table;
