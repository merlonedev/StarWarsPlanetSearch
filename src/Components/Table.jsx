import React, { useContext } from 'react';
import issContent from '../Content/ISSContent';

function CreateTable() {
  const { data, filterGeral:
    { filters: { filterByName, filterByNumericValues } } } = useContext(issContent); // usando esse useContext eu consigo acessar  o estado global.

  function tableHeader() { // cabeçalho
    return (
      <thead>
        <tr>
          <th>nome</th>
          <th>período_de_Rotação</th>
          <th>período_Orbital</th>
          <th>diâmetro</th>
          <th>clima</th>
          <th>gravidade</th>
          <th>terreno</th>
          <th>população</th>
          <th>água_na_superfície</th>
          <th>filmes</th>
          <th>criação</th>
          <th>edição</th>
          <th>url</th>
        </tr>
      </thead>
    );
  }
  function tableContent() { // conteúdo
    function filtragem() { // Aqui, o filterByName e ByNumericValues já estão alterados no estado G.( mudei no Filter.jsx)
      let newData = data.filter(({ name }) => name.includes(filterByName)); // filtro 1( só o filtro do texto)
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        const filtro = newData // filtro só fica no escopo do forEach
          .filter((planeta) => {
            if (comparison === 'maior que') {
              return parseInt(planeta[column], 10) > parseInt(value, 10);
            }
            if (comparison === 'menor que') {
              return parseInt(planeta[column], 10) < parseInt(value, 10);
            }
            if (comparison === 'igual a') {
              return parseInt(planeta[column], 10) === parseInt(value, 10);
            } // precisa do parseInt pq os números de(column,comparison e value) vão vir como strings,porque vieram da API.
            return planeta; // retorna os planetas que passarem pelos 2 filtros.
          });
        newData = filtro;
      });
      return (newData); // o return será do newData. O filtro só está no escopo do forEach.
    }
    return (
      <tbody>
        {
          filtragem().map((planeta) => (
            <tr key={ planeta.name }>
              <td>{planeta.name}</td>
              <td>{planeta.rotation_period}</td>
              <td>{planeta.orbital_period}</td>
              <td>{planeta.diameter}</td>
              <td>{planeta.climate}</td>
              <td>{planeta.gravity}</td>
              <td>{planeta.terrain}</td>
              <td>{planeta.population}</td>
              <td>{planeta.surface_water}</td>
              <td>{planeta.films}</td>
              <td>{planeta.created}</td>
              <td>{planeta.edited}</td>
              <td>{planeta.url}</td>
            </tr>
          )) // esses nomes têm que ser iguais como estão na API.
        }
      </tbody>
    );
  }
  return (
    <table>
      {tableHeader()}
      {tableContent()}
    </table>
  );
}
export default CreateTable;
