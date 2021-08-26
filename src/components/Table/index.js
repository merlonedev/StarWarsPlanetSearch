import React, { useContext } from 'react';
import Planets from '../Planets/index';
import AppContext from '../../context/AppContext';

function Table() {
  const { data, filterByName } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período de Orbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Superfície Aquática</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { data.map((planets, index) => (
          planets.name.toUpperCase().includes(filterByName.toUpperCase())
            ? <Planets key={ index } planetInfo={ planets } /> : null)) }
      </tbody>
    </table>
  );
}

export default Table;
