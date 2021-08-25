import React, { useContext } from 'react';
import Planets from '../Planets/index';
import AppContext from '../../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Período de Rotação</td>
          <td>Período de Orbita</td>
          <td>Diametro</td>
          <td>Clima</td>
          <td>Gravidade</td>
          <td>Terreno</td>
          <td>Superfície Aquática</td>
          <td>População</td>
          <td>Filmes</td>
          <td>Criado</td>
          <td>Editado</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index) => <Planets key={ index } planetInfo={ planet } />) }
      </tbody>
    </table>
  );
}

export default Table;
