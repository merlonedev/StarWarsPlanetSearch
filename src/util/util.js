const sortAdjust = -1;

export const filterByNumeric = (filterNumber, toFilter) => toFilter.filter((filtered) => {
  switch (filterNumber.comparison) {
  case 'maior que': return parseInt(filtered[`${filterNumber
    .column}`], 10) > parseInt(filterNumber.value, 10);
  case 'menor que': return parseInt(filtered[`${filterNumber
    .column}`], 10) < parseInt(filterNumber.value, 10);
  case 'igual a': return parseInt(filtered[`${filterNumber
    .column}`], 10) === parseInt(filterNumber.value, 10);
  default: return filtered;
  }
});

const sortHelperAsc = (a, b, column) => {
  if (parseInt(b[`${column}`], 10)
    > parseInt(a[`${column}`], 10)) return sortAdjust;
  return 0;
};

const sortHelperDesc = (a, b, column) => {
  if (parseInt(b[`${column}`], 10)
    < parseInt(a[`${column}`], 10)) return sortAdjust;
  return 0;
};

export const sortByColumn = (column, sort, toSort) => toSort.sort((a, b) => {
  switch (sort) {
  case 'asc':
    if (column === 'rotation_period' || column === 'orbital_period'
        || column === 'diameter') {
      return (sortHelperAsc(a, b, column));
    }
    if (b[`${column}`] > a[`${column}`]) return sortAdjust;
    return 0;
  case 'desc':
    if (column === 'rotation_period' || column === 'orbital_period'
        || column === 'diameter') {
      return (sortHelperDesc(a, b, column));
    }
    if (b[`${column}`] < a[`${column}`]) return sortAdjust;
    return 0;
  default: return 0;
  }
});
