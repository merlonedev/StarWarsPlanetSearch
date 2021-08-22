import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filter } = useContext(MyContext);
  const { filterByName: { name } } = filter;
  const handleFilter = data.filter((result) => result
    .name.toLowerCase().includes(name.toLowerCase()));

  // TENTANDO FAZER O FILTRO DENTRO DE UM IF PARA AS DEMAIS QUESTÕES
  // const handleFilter = (inputName) => {
  //   const filtered = [...filter];
  //   if (inputName) {
  //     data.filter((result) => result
  //       .name.toLowerCase().includes(name.toLowerCase()));
  //   }
  //   return filtered;
  // };

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
          <th>Srface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { handleFilter.map((results) => (
          <tr key={ results.name }>
            <td>{ results.name }</td>
            <td>{ results.rotation_period }</td>
            <td>{ results.orbital_period }</td>
            <td>{ results.diameter }</td>
            <td>{ results.climate }</td>
            <td>{ results.gravity }</td>
            <td>{ results.terrain }</td>
            <td>{ results.surface_water }</td>
            <td>{ results.population }</td>
            <td>{ results.films }</td>
            <td>{ results.created }</td>
            <td>{ results.edited }</td>
            <td>{ results.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
