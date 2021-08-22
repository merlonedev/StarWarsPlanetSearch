function removeUnknown(array, coluna) {
  if (coluna === 'population') {
    return array.filter(({ population }) => population !== 'unknown');
  }
  return array;
}
export function sortPlanetList(array = [], coluna, criterio) {
  const crescente = 1;
  const decrescente = -1;
  const noUnknown = removeUnknown(array, coluna);
  if (criterio === 'ASC') {
    noUnknown.sort((a, b) => {
      if (Number(a[coluna]) > Number(b[coluna])) return crescente;
      if (Number(a[coluna]) < Number(b[coluna])) return decrescente;
      return 0;
    });
    return removeUnknown(noUnknown);
  }
  if (criterio === 'DESC') {
    noUnknown.sort((a, b) => {
      if (Number(b[coluna]) > Number(a[coluna])) return crescente;
      if (Number(b[coluna]) < Number(a[coluna])) return decrescente;
      return 0;
    });
    return removeUnknown(noUnknown);
  }
}

export function sortPlanetListByName(array = [], coluna, criterio) {
  const crescente = 1;
  const decrescente = -1;
  if (criterio === 'ASC') {
    array.sort((a, b) => {
      if (a[coluna] > b[coluna]) return crescente;
      if (a[coluna] < b[coluna]) return decrescente;
      return 0;
    });
    return array;
  }
  if (criterio === 'DESC') {
    array.sort((a, b) => {
      if (b[coluna] > a[coluna]) return crescente;
      if (b[coluna] < a[coluna]) return decrescente;
      return 0;
    });
    return array;
  }
}
