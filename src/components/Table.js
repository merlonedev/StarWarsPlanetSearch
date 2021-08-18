import React, { useContext } from 'react';
import MyContext from '../context/context';

function Table() {
  const { data, filters } = useContext(MyContext);

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

  const filteredBody = () => {
    const { filterByName: { name } } = filters;
    if (name) {
      const itemFiltered = data.filter((item) => item.name.includes(name));
      return tableBody(itemFiltered);
    }
    return tableBody();
  };

  return (
    <table>
      { tableHead() }
      { filteredBody() }
    </table>
  );
}

export default Table;
