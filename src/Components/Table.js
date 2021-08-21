import React, { useContext } from 'react';
import { context } from '../Context/Context';

function Table() {
  const { data, filter } = useContext(context);
  const { filterByName: { name }, filterByNumericValues } = filter;
  let columns = [];
  const indexOf = 9;

  const filterPlanet = () => {
    let filteredPlanet = [...data];
    filteredPlanet = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        filteredPlanet = filteredPlanet.filter((planet) => +planet[column] > +value);
        return filteredPlanet;
      case 'menor que':
        filteredPlanet = filteredPlanet.filter((planet) => +planet[column] < +value);
        return filteredPlanet;
      case 'igual a':
        filteredPlanet = filteredPlanet.filter((planet) => +planet[column] === +value);
        return filteredPlanet;
      default:
        return filteredPlanet;
      }
    });
    return filteredPlanet;
  };

  if (data.length) {
    columns = Object.keys(data[0]);
    columns.splice(indexOf, 1);
    return (
      <table border="1">
        <thead>
          <tr>
            {
              columns.map((key) => (
                <th key={ key }>{ key }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          { filterPlanet().map((planet) => (
            <tr key={ planet.name }>
              { columns.map((column) => <td key={ column }>{ planet[column] }</td>) }
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
  return <p>Loading...</p>;
}

export default Table;
