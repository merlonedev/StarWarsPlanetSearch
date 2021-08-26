const beforeHandleClick = () => {
  switch (comparison) {
  case 'maior que':
    return setDataToUse(data
      .filter((planet) => Number(planet[column]) > Number(value)));
  case 'menor que':
    return setDataToUse(data
      .filter((planet) => Number(planet[column]) < Number(value)));
  case 'igual a':
    return setDataToUse(data
      .filter((planet) => Number(planet[column]) === Number(value)));
  default: return '';
  }
};

export default beforeHandleClick;
