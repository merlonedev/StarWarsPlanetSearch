import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import Planet from './Planet';

function Table() {
  const { data, filterByName, filterByNumericValues } = useContext(MyContext);
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    setPlanets(data);
  }, [data]);
  useEffect(() => {
    filterByNumericValues.forEach((filter) => {
      const { collum, comparison, value } = filter;
      switch (comparison) {
      case 'maior que': {
        const filterData = data.filter((planet) => Number(planet[collum]) > value);
        setPlanets(filterData);
        break;
      }
      case 'menor que': {
        const filterData = data.filter((planet) => Number(planet[collum]) < value);
        setPlanets(filterData);
        break;
      }
      case 'igual a': {
        console.log('oi');
        const filterData = data.filter((planet) => (
          Number(planet[collum]) === Number(value)));
        setPlanets(filterData);
        break;
      }
      default:
        break;
      }
    });
  }, [data, filterByNumericValues]);

  const newData = planets.filter((planet) => (
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
