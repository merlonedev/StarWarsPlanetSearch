function sortByPlanet({ a, b, column, order }) {
  const isNotNumber = Number.isNaN(parseInt(a[column], 10));

  if (isNotNumber) {
    return (
      order === 'ASC'
        ? a[column].localeCompare(b[column])
        : b[column].localeCompare(a[column])
    );
  }
  return (
    order === 'ASC'
      ? a[column] - b[column]
      : b[column] - a[column]
  );
}

export default sortByPlanet;
