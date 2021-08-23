import React, { useContext } from 'react';
import MyContext from '../context/myContext';

const comparisonTest = {
  'maior que': (a, b) => (a > b),
  'menor que': (a, b) => (a < b),
  'igual a': (a, b) => (a === b),
};

const allFilter = (data, filters) => {
  const { filterByName, filterByNumericValues } = filters;
  const planetByName = filterByName !== '' ? data.filter((item) => item.name
    .includes(filterByName)) : data;
  const filterColumn = filterByNumericValues.filter((item) => item.value !== '');
  if (filterColumn.length > 0) {
    let filterByColunms = [];
    filterColumn
      .forEach((i) => {
        filterByColunms = planetByName
          .filter((item) => comparisonTest[i
            .comparison](parseInt(item[i
            .column], 10), parseInt(i
            .value, 10)));
      });
    return filterByColunms;
  }
  return planetByName;
};

const Tbody = () => {
  const { data, filters } = useContext(MyContext);
  const itensTable = Object.keys(data[0]);
  const show = allFilter(data, filters);
  return (
    <tbody>
      { show.map((list) => (
        <tr key={ list.name }>
          { itensTable
            .map((item) => <td key={ item }>{list[item]}</td>)}
        </tr>
      )) }
    </tbody>
  );
};

export default Tbody;
