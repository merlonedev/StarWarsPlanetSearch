import React from 'react';

export function renderTableHead() {
  return (
    <tr>
      <th>Nome</th>
      <th>Rotação</th>
      <th>Orbital</th>
      <th>Diâmetro</th>
      <th>Clima</th>
      <th>Gravidade</th>
      <th>Terreno</th>
      <th>Superície da Água</th>
      <th>População</th>
      <th>Residentes</th>
      <th>Filmes</th>
      <th>Criado</th>
      <th>Editado</th>
    </tr>
  );
}

const ONE = 1;
const DEC_ONE = -1;
export function getInitialSortedArrayAsc(planets, coluna) {
  console.log('derivado', planets);
  console.log('derivado', coluna);
  if (coluna !== 'name') {
    const filterRoundSorted = planets.sort((a, b) => {
      if (parseFloat(a[coluna]) > parseFloat(b[coluna])) {
        return ONE;
      }
      if (parseFloat(b[coluna]) > parseFloat(a[coluna])) {
        return DEC_ONE;
      }
      return 0;
    });
    return filterRoundSorted;
  }
  const filterRoundSorted = planets.sort((a, b) => {
    console.log('derivado', planets);
    console.log('derivado', coluna);
    if (a[coluna] > b[coluna]) {
      return ONE;
    }
    if (b[coluna] > a[coluna]) {
      return DEC_ONE;
    }
    return 0;
  });
  return filterRoundSorted;
}

export function getInitialSortedArrayDesc(planets, coluna) {
  console.log('derivado', planets);
  console.log('derivado', coluna);
  if (coluna !== 'name') {
    const filterRoundSorted = planets.sort((a, b) => {
      if (parseFloat(a[coluna]) < parseFloat(b[coluna])) {
        return ONE;
      }
      if (parseFloat(b[coluna]) < parseFloat(a[coluna])) {
        return DEC_ONE;
      }
      return 0;
    });
    return filterRoundSorted;
  }
  const filterRoundSorted = planets.sort((a, b) => {
    console.log('derivado', planets);
    console.log('derivado', coluna);
    if (a[coluna] < b[coluna]) {
      return ONE;
    }
    if (b[coluna] < a[coluna]) {
      return DEC_ONE;
    }
    return 0;
  });
  return filterRoundSorted;
}

export function getAscOrDescFunc(planets, filters) {
  console.log('interno', filters);
  const coluna = filters.order.column;
  const ordem = filters.order.sort;
  console.log('interno', coluna);
  console.log('interno', ordem);
  if (ordem === 'ASC')getInitialSortedArrayAsc(planets, coluna);
  if (ordem === 'DESC')getInitialSortedArrayDesc(planets, coluna);
}

export function getByName(planets, filters) {
  if (planets) {
    const filterName = filters.filterByName.name;
    const filterNameInArray = (obj) => {
      if (obj.name.includes(filterName)) {
        return true;
      }
      return false;
    };
    const filteredName = planets.filter(filterNameInArray);
    return filteredName;
  }
}

export function getWithNumbers(planets, filter) {
  const { column, comparison, value } = filter;
  const filterOne = planets.filter((obj) => {
    switch (comparison) {
    case 'maior que':
      if (parseFloat(obj[column]) > parseFloat(value)) {
        return true;
      }
      return false;
    case 'menor que':
      if (parseFloat(obj[column]) < parseFloat(value)) {
        return true;
      }
      return false;
    case 'igual a':
      if (parseFloat(obj[column]) === parseFloat(value)) {
        return true;
      }
      return false;
    default:
      break;
    }
    return filterOne;
  });
  return filterOne;
}
