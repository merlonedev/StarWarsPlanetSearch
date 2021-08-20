function sortOrder(array, filters) {
  const { order: { column, sort } } = filters;

  const newSort = array.sort(({ [column]: a }, { [column]: b }) => { // src: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    let comp = 0;
    const ONE_NEG = -1;

    if (a > b) {
      comp = 1;
    } else if (a < b) {
      comp = ONE_NEG;
    }

    return (
      (sort === 'DESC') ? (comp * ONE_NEG) : comp
    );
  });

  return ([...newSort]);
}

export default sortOrder;
