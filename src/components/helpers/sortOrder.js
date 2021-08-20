function sortNumber(array, filters) {
  const { order: { column, sort } } = filters;

  const newSort = array.sort(({ [column]: a }, { [column]: b }) => {
    const ONE_NEG = -1;
    const aNumber = (a === 'unknown') ? ONE_NEG : parseInt(a, 10);
    const bNumber = (b === 'unknown') ? ONE_NEG : parseInt(b, 10);

    const comp = (aNumber - bNumber);
    return (sort === 'DESC') ? (comp * ONE_NEG) : comp;
  });

  return [...newSort];
}

function sortOrder(array, filters) {
  const { order: { column, sort } } = filters;
  if (column !== 'name') return sortNumber(array, filters);

  const newSort = array.sort(({ [column]: a }, { [column]: b }) => { // src: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    let comp = 0;
    const ONE_NEG = -1;

    if (a > b) {
      comp = 1;
    } else if (a < b) {
      comp = ONE_NEG;
    }

    comp = a.localeCompare(b);
    return (sort === 'DESC') ? (comp * ONE_NEG) : comp;
  });

  return [...newSort];
}

export default sortOrder;
