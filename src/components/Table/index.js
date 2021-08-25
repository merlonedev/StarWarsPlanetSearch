import React, { useContext } from 'react';
import Planets from '../Planets/index';
import AppContext from '../../context/AppContext';

function Table() {
  const { data, filterByName } = useContext(AppContext);

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
        { data.map((planets, index) => (
          filterByName === '' ? <Planets key={ index } planetInfo={ planets } /> : null
        )) }
        { data.map((planets, index) => (
          planets.name.toUpperCase().includes(filterByName.toUpperCase())
            ? <Planets key={ index } planetInfo={ planets } /> : null
        )) }
      </tbody>
    </table>
  );
}

export default Table;
