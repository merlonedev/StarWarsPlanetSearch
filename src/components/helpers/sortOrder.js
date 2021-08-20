function sortNumber(array, filterss) {
  const { order: { column, sort } } = filterss;
  console.log(column, sort);
  const newSort = array.sort(({ [column]: a }, { [column]: b }) => {
    // let comp = 0;
    const ONE_NEG = -1;
    const an = parseInt(a, 10);
    const bn = parseInt(b, 10);
    // const an = (a[column] === 'unknown') ? ONE_NEG : parseInt(a[column], 10);
    // const bn = (b[column] === 'unknown') ? ONE_NEG : parseInt(b[column], 10);

    const comp = (an - bn);
    return (sort === 'DESC') ? (comp * ONE_NEG) : comp;
  });
  console.log(newSort);
  // if (sort === 'DESC') return [...newSort].reverse();
  return [...newSort];
}

function sortOrder(array, filters) {
  const { order: { column, sort } } = filters;
  // console.log(column, sort);
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

  return ([...newSort]);
}

export default sortOrder;
