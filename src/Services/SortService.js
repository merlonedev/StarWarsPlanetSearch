const stringOrnumber = (coluna) => {
  const strings = ['name', 'climate', 'films', 'terrain', 'url'];
  const indexofsamestring = -1;
  const newarray = strings.filter((n) => n.indexOf(coluna) !== indexofsamestring);
  if (newarray) return true;
  return false;
};

export const SortService = (coluna, AscOrDesc, array) => {
  const itsString = stringOrnumber(coluna);
  if (itsString) {
    if (AscOrDesc) {
      array.sort(({ [coluna]: a }, { [coluna]: b }) => a.localeCompare(b))
        .sort((a, b) => (a[coluna] - b[coluna]));
      return [...array];
    }
    array.sort(({ [coluna]: a }, { [coluna]: b }) => b.localeCompare(a))
      .sort((a, b) => b[coluna] - a[coluna]);
    return [...array];
  }
  if (AscOrDesc) {
    array.sort(({ [coluna]: a }, { [coluna]: b }) => a.localeCompare(b))
      .sort((a, b) => (a[coluna] - b[coluna]));
    return [...array];
  }
  array.sort(({ [coluna]: a }, { [coluna]: b }) => b.localeCompare(a))
    .sort((a, b) => b[coluna] - a[coluna]);
  return [...array];
};

export const initialsort = (array) => {
  if (!array) return null;
  array.sort((a, b) => a.name.localeCompare(b.name));
  return array;
};

export default SortService;
