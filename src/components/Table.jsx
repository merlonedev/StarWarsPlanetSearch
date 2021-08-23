import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Planet from './Planet';

function Table() {
  const { data, filterByName } = useContext(MyContext);
  const newData = data.filter((planet) => (
    planet.name.toUpperCase().includes(filterByName)));
  return (
    <table>
      <tbody>
        <tr>
          <th>Nome</th>
          <th>Periodo de Rotação</th>
          <th>Periodo de Orbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Superficie aquatica</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>imagem</th>
        </tr>
        {newData.map((planet, index) => <Planet key={ index } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
