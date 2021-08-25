import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filters } = useContext(MyContext);

  const operators = {
    'maior que': (a, b) => (a > b),
    'menor que': (a, b) => (a < b),
    'igual a': (a, b) => (a === b),
  };

  const tableHead = () => {
    if (data.length) {
      const allKeys = Object.keys(data[0]);
      return (
        <thead>
          <tr>
            { allKeys.map((item) => <th key={ item }>{ item }</th>) }
          </tr>
        </thead>
      );
    }
  };

  const tableBody = (filter = data) => {
    if (filter.length) {
      return (
        <tbody>
          { filter.map((item) => (
            <tr key={ item.name }>
              <td>{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          )) }
        </tbody>
      );
    }
  };

  const filteredColumn = (teste = data) => {
    const { filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues[0];
    if (column) {
      const itemFiltered = teste.filter((item) => {
        const re = operators[comparison](parseInt(item[column], 10), parseInt(value, 10));
        return re;
      });
      return tableBody(itemFiltered);
    }
    return tableBody(teste);
  };

  const filteredBody = () => {
    const { filterByName: { name } } = filters;
    if (name) {
      const itemFiltered = data.filter((item) => item.name.includes(name));
      return filteredColumn(itemFiltered);
    }
    return filteredColumn();
  };

  return (
    <table>
      { tableHead() }
      { filteredBody() }
    </table>
  );
}

export default Table;
