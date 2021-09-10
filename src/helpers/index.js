const sortArray = (array, order) => {
  const NEGATIVE_ONE = -1;
  const POSITIVE_ONE = 1;
  const ZERO = 0;

  array.sort((a, b) => {
    a = a[order.column];
    b = b[order.column];

    if (order.column !== 'name') {
      a = Number.isNaN(Number(a)) ? null : Number(a);
      b = Number.isNaN(Number(b)) ? null : Number(b);
    }

    if (a < b) {
      return order.sort === 'ASC' ? NEGATIVE_ONE : POSITIVE_ONE;
    }
    if (a > b) {
      return order.sort === 'ASC' ? POSITIVE_ONE : NEGATIVE_ONE;
    }
    return ZERO;
  });
  return array;
};

export default sortArray;
