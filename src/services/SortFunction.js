export function sortPlanetList(array, coluna, criterio) {
  if (criterio === 'ASC') {
    array.sort((a, b) => a[coluna] - b[coluna]);
    return array;
  }
  if (criterio === 'DESC') {
    array.sort((a, b) => b[coluna] - a[coluna]);
    return array;
  }
}

export function sortPlanetListByName(newArray, coluna, criterio) {
  const crescente = 1;
  const decrescente = -1;
  const array = [...newArray];
  if (criterio === 'ASC') {
    array.sort((a, b) => {
      if (a[coluna] > b[coluna]) return crescente;
      if (a[coluna] < b[coluna]) return decrescente;
      return 0;
    });
    return sortPlanetList(array, coluna, criterio);
  }
  if (criterio === 'DESC') {
    array.sort((a, b) => {
      if (b[coluna] > a[coluna]) return crescente;
      if (b[coluna] < a[coluna]) return decrescente;
      return 0;
    });
    return sortPlanetList(array, coluna, criterio);
  }
}
